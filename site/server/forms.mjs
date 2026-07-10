#!/usr/bin/env node
// Standalone forms capture service.
//
// Endpoints:
//   POST /api/applications         → /work-with-me/apply/  submissions
//   POST /api/contact              → /contact/             submissions
//   POST /api/capability-statement → /capability-statement/ submissions
//   GET  /api/forms/health         → liveness probe
//
// Each submission is validated, rate-limited per IP, stored in Postgres,
// then emailed to the admin via Resend with reply-to set to the submitter.
// Listens on 127.0.0.1:FORMS_PORT (default 3003). Nginx proxies the paths.
// Mirrors reviews.mjs / newsletter.mjs shape: node:http + pg + global fetch.

import http from "node:http";
import pg from "pg";

const PORT = Number(process.env.FORMS_PORT ?? 3003);
const HOST = process.env.FORMS_HOST ?? "127.0.0.1";
const DATABASE_URL = process.env.DATABASE_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FORMS_NOTIFY_FROM = process.env.FORMS_NOTIFY_FROM ?? "forms@bulwarkblack.com";
const FORMS_NOTIFY_TO = process.env.FORMS_NOTIFY_TO ?? "support@bulwarkblack.com";

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
const MAX_BODY = 32 * 1024;
const ALLOWED_ORIGINS = new Set([
  "https://ruraltechandsupport.com",
  "https://www.ruraltechandsupport.com",
]);

const submitBuckets = new Map();
const SUBMIT_WINDOW_MS = 60 * 60 * 1000;
const SUBMIT_MAX = 5;

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

function str(v, max = 1000) {
  return String(v ?? "").trim().slice(0, max);
}

async function notifyAdmin({ subject, lines, replyTo }) {
  if (!RESEND_API_KEY) return { skipped: true };
  const text = lines.join("\n");
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: FORMS_NOTIFY_FROM,
        to: [FORMS_NOTIFY_TO],
        subject,
        text,
        reply_to: replyTo,
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

// ---------- /api/applications ----------

async function handleApplication(req, res) {
  const cors = corsFor(req);
  if (req.method === "OPTIONS") return preflight(res, cors);
  if (req.method !== "POST") return send(res, 405, { error: "method not allowed" }, cors);

  const ip = clientIp(req);
  if (rateLimited(ip)) return send(res, 429, { error: "too many submissions" }, cors);

  const body = await parseJson(req, res, cors);
  if (!body) return;

  if (body.website) {
    log("info", "honeypot_tripped_apply", { ip });
    return send(res, 200, { ok: true }, cors);
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200).toLowerCase();
  const phone = str(body.phone, 40) || null;
  const location = str(body.location, 120) || null;
  const contact_pref = str(body.contact_pref, 20) || null;
  const lane = str(body.lane, 30) || null;
  const situation = str(body.situation, 5000);
  const current_state = str(body.current_state, 5000) || null;
  const outcome = str(body.outcome, 5000) || null;
  const timeline = str(body.timeline, 30) || null;
  const budget = str(body.budget, 30) || null;
  const source = str(body.source, 200) || null;
  const notes = str(body.notes, 5000) || null;

  if (!name) return send(res, 400, { error: "name required" }, cors);
  if (!email || !EMAIL_RE.test(email)) return send(res, 400, { error: "valid email required" }, cors);
  if (!situation || situation.length < 10) {
    return send(res, 400, { error: "tell me a bit more about what's going on" }, cors);
  }
  if (!lane) return send(res, 400, { error: "pick the closest fit" }, cors);

  const ua = str(req.headers["user-agent"], 300);

  let row;
  try {
    const result = await pool.query(
      `INSERT INTO applications
         (name, email, phone, location, contact_pref, lane, situation,
          current_state, outcome, timeline, budget, source, notes,
          source_ip, user_agent)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
       RETURNING id`,
      [name, email, phone, location, contact_pref, lane, situation,
       current_state, outcome, timeline, budget, source, notes, ip, ua],
    );
    row = result.rows[0];
  } catch (err) {
    log("error", "db_insert_failed_apply", { error: String(err) });
    return send(res, 500, { error: "could not record application" }, cors);
  }

  const subject = `Application: ${name}${lane ? ` (${lane})` : ""}`;
  const lines = [
    `New application via ruraltechandsupport.com (#${row.id})`,
    ``,
    `Name:           ${name}`,
    `Email:          ${email}`,
    `Phone:          ${phone || "—"}`,
    `Location:       ${location || "—"}`,
    `Best contact:   ${contact_pref || "—"}`,
    `Kind of help:   ${lane || "—"}`,
    `Timeline:       ${timeline || "—"}`,
    `Budget:         ${budget || "—"}`,
    `How they heard: ${source || "—"}`,
    ``,
    `What's going on:`,
    situation,
    ``,
    `What's already in place:`,
    current_state || "—",
    ``,
    `What success looks like:`,
    outcome || "—",
    ``,
    `Notes:`,
    notes || "—",
  ];
  const notify = await notifyAdmin({ subject, lines, replyTo: email });
  log("info", "application_submitted", { id: row.id, notify: notify.ok ? "sent" : (notify.skipped ? "skipped" : "failed") });

  return send(res, 200, { ok: true }, cors);
}

// ---------- /api/contact ----------

async function handleContact(req, res) {
  const cors = corsFor(req);
  if (req.method === "OPTIONS") return preflight(res, cors);
  if (req.method !== "POST") return send(res, 405, { error: "method not allowed" }, cors);

  const ip = clientIp(req);
  if (rateLimited(ip)) return send(res, 429, { error: "too many submissions" }, cors);

  const body = await parseJson(req, res, cors);
  if (!body) return;

  if (body.website) {
    log("info", "honeypot_tripped_contact", { ip });
    return send(res, 200, { ok: true }, cors);
  }

  const name = str(body.name, 120);
  const email = str(body.email, 200).toLowerCase();
  const organization = str(body.organization, 200) || null;
  const message = str(body.message, 5000);

  if (!name) return send(res, 400, { error: "name required" }, cors);
  if (!email || !EMAIL_RE.test(email)) return send(res, 400, { error: "valid email required" }, cors);
  if (!message || message.length < 5) return send(res, 400, { error: "message required" }, cors);

  const ua = str(req.headers["user-agent"], 300);

  let row;
  try {
    const result = await pool.query(
      `INSERT INTO contact_messages (name, email, organization, message, source_ip, user_agent)
       VALUES ($1,$2,$3,$4,$5,$6)
       RETURNING id`,
      [name, email, organization, message, ip, ua],
    );
    row = result.rows[0];
  } catch (err) {
    log("error", "db_insert_failed_contact", { error: String(err) });
    return send(res, 500, { error: "could not record message" }, cors);
  }

  const subject = `Contact: ${name}${organization ? ` (${organization})` : ""}`;
  const lines = [
    `New contact message via ruraltechandsupport.com (#${row.id})`,
    ``,
    `Name:         ${name}`,
    `Email:        ${email}`,
    `Organization: ${organization || "—"}`,
    ``,
    `Message:`,
    message,
  ];
  const notify = await notifyAdmin({ subject, lines, replyTo: email });
  log("info", "contact_submitted", { id: row.id, notify: notify.ok ? "sent" : (notify.skipped ? "skipped" : "failed") });

  return send(res, 200, { ok: true }, cors);
}

// ---------- /api/capability-statement ----------

async function handleCapability(req, res) {
  const cors = corsFor(req);
  if (req.method === "OPTIONS") return preflight(res, cors);
  if (req.method !== "POST") return send(res, 405, { error: "method not allowed" }, cors);

  const ip = clientIp(req);
  if (rateLimited(ip)) return send(res, 429, { error: "too many submissions" }, cors);

  const body = await parseJson(req, res, cors);
  if (!body) return;

  if (body.website) {
    log("info", "honeypot_tripped_cap", { ip });
    return send(res, 200, { ok: true }, cors);
  }

  const full_name = str(body.full_name, 120);
  const email = str(body.email, 200).toLowerCase();
  const organization = str(body.organization, 200) || null;
  const agency = str(body.agency, 200) || null;
  const naicsRaw = str(body.naics, 200);
  const naics = naicsRaw
    ? naicsRaw.split(/[,\s]+/).map((s) => s.trim()).filter(Boolean).slice(0, 20)
    : null;
  const message = str(body.message, 5000) || null;

  if (!full_name) return send(res, 400, { error: "name required" }, cors);
  if (!email || !EMAIL_RE.test(email)) return send(res, 400, { error: "valid email required" }, cors);

  const ua = str(req.headers["user-agent"], 300);

  let row;
  try {
    const result = await pool.query(
      `INSERT INTO capability_requests
         (full_name, email, organization, agency, naics, message, source_ip, user_agent)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
       RETURNING id`,
      [full_name, email, organization, agency, naics, message, ip, ua],
    );
    row = result.rows[0];
  } catch (err) {
    log("error", "db_insert_failed_cap", { error: String(err) });
    return send(res, 500, { error: "could not record request" }, cors);
  }

  const subject = `Capability statement request: ${full_name}${organization ? ` (${organization})` : ""}`;
  const lines = [
    `New capability statement request via ruraltechandsupport.com (#${row.id})`,
    ``,
    `Name:           ${full_name}`,
    `Email:          ${email}`,
    `Organization:   ${organization || "—"}`,
    `Agency / Prime: ${agency || "—"}`,
    `Relevant NAICS: ${naics ? naics.join(", ") : "—"}`,
    ``,
    `Scope:`,
    message || "—",
  ];
  const notify = await notifyAdmin({ subject, lines, replyTo: email });
  log("info", "capability_submitted", { id: row.id, notify: notify.ok ? "sent" : (notify.skipped ? "skipped" : "failed") });

  return send(res, 200, { ok: true }, cors);
}

// ---------- helpers ----------

function preflight(res, cors) {
  return send(res, 204, "", {
    ...cors,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
  });
}

async function parseJson(req, res, cors) {
  let raw;
  try {
    raw = await readBody(req);
  } catch {
    send(res, 413, { error: "payload too large" }, cors);
    return null;
  }
  try {
    return JSON.parse(raw || "{}");
  } catch {
    send(res, 400, { error: "invalid json" }, cors);
    return null;
  }
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
    if (url.pathname === "/api/applications")         return handleApplication(req, res);
    if (url.pathname === "/api/contact")              return handleContact(req, res);
    if (url.pathname === "/api/capability-statement") return handleCapability(req, res);
    if (url.pathname === "/api/forms/health") {
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
