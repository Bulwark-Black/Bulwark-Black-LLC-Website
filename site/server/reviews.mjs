#!/usr/bin/env node
// Standalone reviews service.
// - POST /api/reviews         → insert pending review, optionally notify admin via Resend
// - GET  /api/reviews         → return published reviews (newest first)
// - GET  /api/reviews/health  → liveness probe
//
// Listens on 127.0.0.1:REVIEWS_PORT (default 3002). Nginx proxies /api/reviews to it.
// Same shape as newsletter.mjs: node:http + pg + global fetch. No framework.

import http from "node:http";
import crypto from "node:crypto";
import { exec } from "node:child_process";
import pg from "pg";

const PORT = Number(process.env.REVIEWS_PORT ?? 3002);
const HOST = process.env.REVIEWS_HOST ?? "127.0.0.1";
const DATABASE_URL = process.env.DATABASE_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const REVIEWS_NOTIFY_FROM = process.env.REVIEWS_NOTIFY_FROM ?? "reviews@bulwarkblack.com";
const REVIEWS_NOTIFY_TO = process.env.REVIEWS_NOTIFY_TO ?? "support@bulwarkblack.com";
const REVIEWS_MOD_SECRET = process.env.REVIEWS_MOD_SECRET;
const PUBLIC_BASE_URL = (process.env.PUBLIC_BASE_URL ?? "https://ruraltechandsupport.com").replace(/\/$/, "");
const MOD_TOKEN_TTL_SEC = 14 * 24 * 60 * 60;

if (!DATABASE_URL) {
  console.error("FATAL: DATABASE_URL not set");
  process.exit(1);
}

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
  max: 4,
  idleTimeoutMillis: 30_000,
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY = 8 * 1024;
const ALLOWED_ORIGINS = new Set([
  "https://ruraltechandsupport.com",
  "https://www.ruraltechandsupport.com",
]);

const submitBuckets = new Map();
const SUBMIT_WINDOW_MS = 60 * 60 * 1000;
const SUBMIT_MAX = 3;

function log(level, msg, extra = {}) {
  console.log(JSON.stringify({ t: new Date().toISOString(), level, msg, ...extra }));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        req.destroy();
        reject(new Error("body too large"));
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function send(res, status, body, extraHeaders = {}) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  res.writeHead(status, {
    "content-type": typeof body === "string" ? "text/plain" : "application/json",
    "content-length": Buffer.byteLength(payload),
    "cache-control": "no-store",
    ...extraHeaders,
  });
  res.end(payload);
}

function corsFor(req) {
  const origin = req.headers.origin ?? "";
  return ALLOWED_ORIGINS.has(origin)
    ? { "access-control-allow-origin": origin, vary: "Origin" }
    : {};
}

function clientIp(req) {
  return (
    req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
    req.socket.remoteAddress ||
    "unknown"
  );
}

function rateLimited(ip) {
  const now = Date.now();
  const bucket = submitBuckets.get(ip) ?? [];
  const fresh = bucket.filter((t) => now - t < SUBMIT_WINDOW_MS);
  if (fresh.length >= SUBMIT_MAX) {
    submitBuckets.set(ip, fresh);
    return true;
  }
  fresh.push(now);
  submitBuckets.set(ip, fresh);
  return false;
}

// ---------- moderation token (HMAC) ----------

function b64url(buf) {
  return Buffer.from(buf).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function b64urlDecode(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return Buffer.from(s, "base64");
}

function signModerationToken({ id, action }) {
  if (!REVIEWS_MOD_SECRET) throw new Error("REVIEWS_MOD_SECRET not configured");
  const payload = { id: String(id), action, exp: Math.floor(Date.now() / 1000) + MOD_TOKEN_TTL_SEC };
  const payloadB64 = b64url(JSON.stringify(payload));
  const sig = crypto.createHmac("sha256", REVIEWS_MOD_SECRET).update(payloadB64).digest();
  return `${payloadB64}.${b64url(sig)}`;
}

function verifyModerationToken(token) {
  if (!REVIEWS_MOD_SECRET) return { ok: false, reason: "secret_missing" };
  if (typeof token !== "string" || token.length > 600) return { ok: false, reason: "bad_token" };
  const parts = token.split(".");
  if (parts.length !== 2) return { ok: false, reason: "bad_format" };
  const [payloadB64, sigB64] = parts;
  let expected;
  try {
    expected = crypto.createHmac("sha256", REVIEWS_MOD_SECRET).update(payloadB64).digest();
  } catch {
    return { ok: false, reason: "hmac_error" };
  }
  let actual;
  try {
    actual = b64urlDecode(sigB64);
  } catch {
    return { ok: false, reason: "bad_sig" };
  }
  if (actual.length !== expected.length || !crypto.timingSafeEqual(actual, expected)) {
    return { ok: false, reason: "sig_mismatch" };
  }
  let payload;
  try {
    payload = JSON.parse(b64urlDecode(payloadB64).toString("utf8"));
  } catch {
    return { ok: false, reason: "bad_payload" };
  }
  if (!payload || typeof payload !== "object") return { ok: false, reason: "bad_payload" };
  if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) {
    return { ok: false, reason: "expired" };
  }
  if (!["publish", "reject"].includes(payload.action)) return { ok: false, reason: "bad_action" };
  if (!payload.id || !/^\d+$/.test(String(payload.id))) return { ok: false, reason: "bad_id" };
  return { ok: true, payload };
}

function moderationUrl(id, action) {
  const t = signModerationToken({ id, action });
  return `${PUBLIC_BASE_URL}/api/reviews/moderate?t=${encodeURIComponent(t)}`;
}

function triggerRebuild() {
  exec("sudo -n /usr/bin/systemctl start ruraltech-rebuild.service", { timeout: 5_000 }, (err, _out, stderr) => {
    if (err) {
      log("error", "rebuild_trigger_failed", { error: String(err), stderr: stderr?.toString().slice(0, 300) });
    } else {
      log("info", "rebuild_triggered");
    }
  });
}

// ---------- new-review notification email ----------

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
}

async function notifyAdmin(row) {
  if (!RESEND_API_KEY) return { skipped: true };
  const subject = `New review (pending) — ${row.display_name} · ${row.rating}★`;
  const hasButtons = !!REVIEWS_MOD_SECRET;
  const publishUrl = hasButtons ? moderationUrl(row.id, "publish") : null;
  const rejectUrl  = hasButtons ? moderationUrl(row.id, "reject")  : null;

  const textLines = [
    `A new review was submitted and is pending approval.`,
    ``,
    `Name:         ${row.display_name}`,
    `Location:     ${row.location || "—"}`,
    `Relationship: ${row.relationship || "—"}`,
    `Rating:       ${row.rating} / 5`,
    `Email:        ${row.email}`,
    ``,
    `Review:`,
    row.body,
    ``,
  ];
  if (hasButtons) {
    textLines.push(
      `Approve & publish: ${publishUrl}`,
      ``,
      `Reject:            ${rejectUrl}`,
      ``,
      `(Links expire in 14 days. Each one opens a confirmation page.)`,
      ``,
      `SQL fallback if buttons don't work:`,
    );
  } else {
    textLines.push(`SQL:`);
  }
  textLines.push(
    `  sudo -u postgres psql -d ruraltech -c "UPDATE reviews SET status='published', published_at=NOW() WHERE id=${row.id};"`,
    ``,
    `  sudo -u postgres psql -d ruraltech -c "UPDATE reviews SET status='rejected' WHERE id=${row.id};"`,
  );
  const text = textLines.join("\n");

  const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#111;background:#fff;padding:24px;max-width:640px;margin:0 auto;line-height:1.55;">
  <p style="margin:0 0 18px;color:#555;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;">New review · pending approval</p>
  <h1 style="margin:0 0 6px;font-size:22px;">${escapeHtml(row.display_name)} <span style="color:#888;font-weight:400;">· ${escapeHtml(row.rating)}★</span></h1>
  <p style="margin:0 0 18px;color:#555;font-size:14px;">${escapeHtml([row.relationship, row.location].filter(Boolean).join(" · ") || "—")}</p>
  <blockquote style="margin:0 0 24px;padding:14px 18px;border-left:3px solid #4caf50;background:#f6faf6;white-space:pre-wrap;font-size:15px;color:#222;">${escapeHtml(row.body)}</blockquote>
  <p style="margin:0 0 6px;color:#666;font-size:13px;"><strong>Reply-to:</strong> ${escapeHtml(row.email)}</p>
  ${hasButtons ? `
  <div style="margin:28px 0 8px;">
    <a href="${publishUrl}" style="display:inline-block;background:#4caf50;color:#fff;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;margin-right:10px;">Approve &amp; publish</a>
    <a href="${rejectUrl}" style="display:inline-block;background:#fff;color:#b00020;padding:12px 22px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;border:1px solid #d0d0d0;">Reject</a>
  </div>
  <p style="margin:14px 0 0;color:#999;font-size:12px;">Each button opens a confirmation page where you click again to commit. Links expire in 14 days.</p>
  ` : `
  <p style="margin:14px 0 0;color:#b00020;font-size:13px;">Moderation buttons disabled: REVIEWS_MOD_SECRET not set on the server.</p>
  `}
</body></html>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: REVIEWS_NOTIFY_FROM,
        to: [REVIEWS_NOTIFY_TO],
        subject,
        text,
        html,
        reply_to: row.email,
      }),
      signal: AbortSignal.timeout(5_000),
    });
    if (!r.ok) {
      const body = await r.text();
      return { ok: false, status: r.status, body: body.slice(0, 300) };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

async function handleSubmit(req, res) {
  const cors = corsFor(req);

  if (req.method === "OPTIONS") {
    return send(res, 204, "", {
      ...cors,
      "access-control-allow-methods": "POST, GET, OPTIONS",
      "access-control-allow-headers": "content-type",
      "access-control-max-age": "86400",
    });
  }

  if (req.method === "GET") return handleList(req, res);
  if (req.method !== "POST") return send(res, 405, { error: "method not allowed" }, cors);

  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return send(res, 429, { error: "too many submissions, try again later" }, cors);
  }

  let raw;
  try {
    raw = await readBody(req);
  } catch {
    return send(res, 413, { error: "payload too large" }, cors);
  }

  let body;
  try {
    body = JSON.parse(raw || "{}");
  } catch {
    return send(res, 400, { error: "invalid json" }, cors);
  }

  // Honeypot: bots fill this; humans don't see it.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    log("info", "honeypot_tripped", { ip });
    return send(res, 200, { ok: true }, cors);
  }

  const display_name = String(body.display_name ?? "").trim().slice(0, 80);
  const location = String(body.location ?? "").trim().slice(0, 80) || null;
  const relationship = String(body.relationship ?? "").trim().slice(0, 40) || null;
  const rating = Number.parseInt(String(body.rating ?? ""), 10);
  const text = String(body.body ?? "").trim().slice(0, 2000);
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 200);

  if (!display_name) return send(res, 400, { error: "name required" }, cors);
  if (!text || text.length < 20) {
    return send(res, 400, { error: "review must be at least 20 characters" }, cors);
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return send(res, 400, { error: "rating must be 1-5" }, cors);
  }
  if (!email || !EMAIL_RE.test(email)) {
    return send(res, 400, { error: "valid email required" }, cors);
  }

  const ua = String(req.headers["user-agent"] ?? "").slice(0, 300);

  let row;
  try {
    const result = await pool.query(
      `INSERT INTO reviews
         (display_name, location, relationship, rating, body, email, source_ip, user_agent)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       RETURNING id, display_name, location, relationship, rating, body, email`,
      [display_name, location, relationship, rating, text, email, ip, ua],
    );
    row = result.rows[0];
  } catch (err) {
    log("error", "db_insert_failed", { error: String(err) });
    return send(res, 500, { error: "could not record review" }, cors);
  }

  const notify = await notifyAdmin(row);
  log("info", "review_submitted", {
    id: row.id,
    rating: row.rating,
    notify: notify.ok ? "sent" : (notify.skipped ? "skipped" : "failed"),
  });

  return send(res, 200, { ok: true }, cors);
}

async function handleList(req, res) {
  const cors = corsFor(req);
  try {
    const r = await pool.query(
      `SELECT id, display_name, location, relationship, rating, body, published_at
         FROM reviews
        WHERE status = 'published'
        ORDER BY published_at DESC NULLS LAST, created_at DESC
        LIMIT 200`,
    );
    return send(res, 200, { reviews: r.rows }, {
      ...cors,
      "cache-control": "public, max-age=60",
    });
  } catch (err) {
    log("error", "db_list_failed", { error: String(err) });
    return send(res, 500, { error: "could not list reviews" }, cors);
  }
}

// ---------- moderation endpoints ----------

function htmlPage(title, bodyHtml, status = 200) {
  return {
    status,
    body: `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex">
<title>${escapeHtml(title)}</title>
<style>
  body { font: 15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; color:#0f0f0f; background:#fafafa; margin:0; padding:0; }
  main { max-width:640px; margin:0 auto; padding:40px 24px 80px; }
  h1 { font-family:Oswald,sans-serif; font-size:28px; letter-spacing:-0.005em; margin:0 0 6px; }
  .eyebrow { font-size:11px; letter-spacing:0.18em; text-transform:uppercase; color:#4caf50; margin:0 0 6px; }
  .meta { color:#666; font-size:14px; margin:0 0 22px; }
  blockquote { margin:0 0 28px; padding:16px 20px; border-left:3px solid #4caf50; background:#fff; white-space:pre-wrap; box-shadow:0 1px 0 rgba(0,0,0,0.04); }
  form { display:inline-block; margin:0 8px 0 0; }
  button { font:600 14px/1 -apple-system,sans-serif; padding:12px 22px; border-radius:6px; border:1px solid #d0d0d0; cursor:pointer; background:#fff; color:#222; }
  button.primary { background:#4caf50; border-color:#4caf50; color:#fff; }
  button.danger { color:#b00020; }
  button:hover { filter:brightness(0.96); }
  .panel { background:#fff; border:1px solid #eee; border-radius:8px; padding:24px; }
  .ok { color:#0a7a30; }
  .err { color:#b00020; }
  .muted { color:#888; font-size:13px; }
  a { color:#4caf50; }
</style>
</head><body><main>${bodyHtml}</main></body></html>`,
  };
}

function sendHtml(res, { status, body }) {
  res.writeHead(status, {
    "content-type": "text/html; charset=utf-8",
    "content-length": Buffer.byteLength(body),
    "cache-control": "no-store",
    "x-robots-tag": "noindex",
  });
  res.end(body);
}

async function loadReview(id) {
  const r = await pool.query(
    `SELECT id, display_name, location, relationship, rating, body, email, status,
            published_at, moderated_at, moderated_by, created_at
       FROM reviews WHERE id = $1`,
    [id],
  );
  return r.rows[0] ?? null;
}

async function handleModerateGet(req, res, url) {
  const token = url.searchParams.get("t") ?? "";
  const v = verifyModerationToken(token);
  if (!v.ok) {
    return sendHtml(res, htmlPage("Link not valid",
      `<p class="eyebrow">Moderation</p><h1>Link not valid</h1>
       <p class="meta err">Reason: ${escapeHtml(v.reason)}</p>
       <p class="muted">The link may have expired (14-day TTL) or been tampered with. You can still publish or reject by running the SQL from the original email.</p>`,
      400));
  }
  const row = await loadReview(v.payload.id);
  if (!row) {
    return sendHtml(res, htmlPage("Review not found",
      `<p class="eyebrow">Moderation</p><h1>Review not found</h1>
       <p class="muted">Review id ${escapeHtml(v.payload.id)} no longer exists.</p>`,
      404));
  }
  if (row.moderated_at) {
    const niceDate = new Date(row.moderated_at).toLocaleString();
    return sendHtml(res, htmlPage("Already moderated",
      `<p class="eyebrow">Moderation</p><h1>Already moderated</h1>
       <p class="meta">This review was set to <strong>${escapeHtml(row.status)}</strong> on ${escapeHtml(niceDate)}.</p>
       ${row.status === "published" ? `<p><a href="/reviews/">View on site →</a></p>` : ""}`,
      200));
  }
  const action = v.payload.action;
  const isPublish = action === "publish";
  const meta = [row.relationship, row.location].filter(Boolean).join(" · ") || "—";
  const body = `
    <p class="eyebrow">Moderation · confirm</p>
    <h1>${isPublish ? "Approve &amp; publish?" : "Reject this review?"}</h1>
    <p class="meta">${escapeHtml(row.display_name)} · ${escapeHtml(meta)} · ${escapeHtml(row.rating)}★ · <span class="muted">submitted ${escapeHtml(new Date(row.created_at).toLocaleString())}</span></p>
    <blockquote>${escapeHtml(row.body)}</blockquote>
    <div class="panel">
      <form method="POST" action="/api/reviews/moderate">
        <input type="hidden" name="t" value="${escapeHtml(token)}">
        <button type="submit" class="${isPublish ? "primary" : "danger"}">
          ${isPublish ? "Yes, publish on the site" : "Yes, reject"}
        </button>
        <a href="/" class="muted" style="margin-left:14px;">Cancel</a>
      </form>
      <p class="muted" style="margin:14px 0 0;">
        ${isPublish ? "Publishing will flip status, then rebuild the site. ~2 minutes until live." : "Rejecting marks the review as not for publication. No site rebuild."}
      </p>
    </div>
  `;
  return sendHtml(res, htmlPage(isPublish ? "Approve review" : "Reject review", body));
}

async function readFormBody(req) {
  const chunks = [];
  let size = 0;
  for await (const c of req) {
    size += c.length;
    if (size > 4096) throw new Error("body too large");
    chunks.push(c);
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  const params = new URLSearchParams(raw);
  const out = {};
  for (const [k, v] of params) out[k] = v;
  return out;
}

async function handleModeratePost(req, res) {
  let form;
  try {
    form = await readFormBody(req);
  } catch {
    return sendHtml(res, htmlPage("Bad request", `<h1>Bad request</h1>`, 400));
  }
  const token = form.t ?? "";
  const v = verifyModerationToken(token);
  if (!v.ok) {
    return sendHtml(res, htmlPage("Link not valid",
      `<p class="eyebrow">Moderation</p><h1>Link not valid</h1>
       <p class="meta err">Reason: ${escapeHtml(v.reason)}</p>`,
      400));
  }
  const action = v.payload.action;
  const newStatus = action === "publish" ? "published" : "rejected";
  const id = v.payload.id;

  let updated;
  try {
    const r = await pool.query(
      action === "publish"
        ? `UPDATE reviews
              SET status='published', published_at=NOW(),
                  moderated_at=NOW(), moderated_by='email-link'
            WHERE id=$1 AND moderated_at IS NULL
            RETURNING id, display_name`
        : `UPDATE reviews
              SET status='rejected',
                  moderated_at=NOW(), moderated_by='email-link'
            WHERE id=$1 AND moderated_at IS NULL
            RETURNING id, display_name`,
      [id],
    );
    updated = r.rows[0];
  } catch (err) {
    log("error", "moderate_update_failed", { error: String(err), id, action });
    return sendHtml(res, htmlPage("Server error", `<h1>Server error</h1><p class="muted">${escapeHtml(String(err).slice(0, 200))}</p>`, 500));
  }

  if (!updated) {
    return sendHtml(res, htmlPage("Already moderated",
      `<p class="eyebrow">Moderation</p><h1>Already moderated</h1>
       <p class="muted">No change. This review was already approved or rejected.</p>`,
      200));
  }

  log("info", "review_moderated", { id, action, status: newStatus, by: "email-link" });

  if (action === "publish") {
    triggerRebuild();
    return sendHtml(res, htmlPage("Published",
      `<p class="eyebrow">Moderation · done</p>
       <h1 class="ok">Published.</h1>
       <p class="meta">${escapeHtml(updated.display_name)}'s review is now in the database as <strong>published</strong>.</p>
       <p>Site is rebuilding now. It should appear at <a href="/reviews/">/reviews/</a> in about two minutes.</p>
       <p class="muted">If it does not appear within 5 minutes, the rebuild may have failed. Check <code>/var/log/ruraltech-rebuild.log</code>.</p>`,
      200));
  } else {
    return sendHtml(res, htmlPage("Rejected",
      `<p class="eyebrow">Moderation · done</p>
       <h1>Rejected.</h1>
       <p class="meta">${escapeHtml(updated.display_name)}'s review is marked <strong>rejected</strong> and will not appear on the site.</p>`,
      200));
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
    if (url.pathname === "/api/reviews/moderate") {
      if (req.method === "GET")  return handleModerateGet(req, res, url);
      if (req.method === "POST") return handleModeratePost(req, res);
      return send(res, 405, { error: "method not allowed" });
    }
    if (url.pathname === "/api/reviews") return handleSubmit(req, res);
    if (url.pathname === "/api/reviews/health") {
      return send(res, 200, { ok: true, t: new Date().toISOString() });
    }
    return send(res, 404, { error: "not found" });
  } catch (err) {
    log("error", "unhandled", { error: String(err) });
    return send(res, 500, { error: "server error" });
  }
});

server.listen(PORT, HOST, () => {
  log("info", "listening", {
    host: HOST,
    port: PORT,
    notify: RESEND_API_KEY ? "enabled" : "disabled",
  });
});

for (const sig of ["SIGINT", "SIGTERM"]) {
  process.on(sig, () => {
    log("info", "shutdown", { signal: sig });
    server.close(() => pool.end().finally(() => process.exit(0)));
  });
}
