#!/usr/bin/env node
// Standalone newsletter capture service.
// - POST /api/newsletter   → save email to Postgres, optionally push to Resend audience
// - GET  /api/newsletter/health → liveness probe
//
// Listens on 127.0.0.1:NEWSLETTER_PORT (default 3001). Nginx proxies /api/* to it.
// No framework, just node:http + pg + global fetch. No Astro, no module-load surprises.

import http from "node:http";
import pg from "pg";

const PORT = Number(process.env.NEWSLETTER_PORT ?? 3001);
const HOST = process.env.NEWSLETTER_HOST ?? "127.0.0.1";
const DATABASE_URL = process.env.DATABASE_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

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
const MAX_BODY = 4 * 1024;
const ALLOWED_ORIGINS = new Set([
  "https://ruraltechandsupport.com",
  "https://www.ruraltechandsupport.com",
]);

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

async function pushToResend(email) {
  if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
    return { skipped: true, reason: "resend not configured" };
  }
  try {
    const r = await fetch(
      `https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${RESEND_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
        signal: AbortSignal.timeout(5_000),
      },
    );
    const text = await r.text();
    if (!r.ok) {
      // Treat duplicate as success
      if (/already exists|already subscribed/i.test(text)) {
        return { ok: true, dedup: true };
      }
      return { ok: false, status: r.status, body: text.slice(0, 300) };
    }
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

async function handleSubscribe(req, res) {
  const origin = req.headers.origin ?? "";
  const corsHeaders = ALLOWED_ORIGINS.has(origin)
    ? { "access-control-allow-origin": origin, vary: "Origin" }
    : {};

  if (req.method === "OPTIONS") {
    return send(res, 204, "", {
      ...corsHeaders,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "access-control-max-age": "86400",
    });
  }
  if (req.method !== "POST") {
    return send(res, 405, { error: "method not allowed" }, corsHeaders);
  }

  let raw;
  try {
    raw = await readBody(req);
  } catch {
    return send(res, 413, { error: "payload too large" }, corsHeaders);
  }

  let body;
  try {
    body = JSON.parse(raw || "{}");
  } catch {
    return send(res, 400, { error: "invalid json" }, corsHeaders);
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const source = String(body.source ?? "").slice(0, 60) || null;

  if (!email || email.length > 200 || !EMAIL_RE.test(email)) {
    return send(res, 400, { error: "invalid email" }, corsHeaders);
  }

  const ip = req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
             req.socket.remoteAddress;

  let dbOk = false;
  try {
    await pool.query(
      `INSERT INTO newsletter_subscribers (email, source, source_ip)
       VALUES ($1, $2, $3)
       ON CONFLICT (email) DO NOTHING`,
      [email, source, ip],
    );
    dbOk = true;
  } catch (err) {
    log("error", "db_insert_failed", { error: String(err) });
  }

  const resend = await pushToResend(email);

  if (!dbOk && resend.skipped) {
    return send(res, 500, { error: "could not record subscription" }, corsHeaders);
  }
  if (!dbOk && resend.ok === false) {
    return send(res, 502, { error: "subscription failed downstream" }, corsHeaders);
  }

  log("info", "subscribed", {
    email_hash: email.length, // no PII in logs; just length as a smoke signal
    source,
    db: dbOk,
    resend: resend.ok ? "ok" : (resend.skipped ? "skipped" : "failed"),
  });

  return send(res, 200, { ok: true }, corsHeaders);
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? "/", `http://${req.headers.host ?? "localhost"}`);
    if (url.pathname === "/api/newsletter") return handleSubscribe(req, res);
    if (url.pathname === "/api/newsletter/health") {
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
    resend: RESEND_API_KEY && RESEND_AUDIENCE_ID ? "enabled" : "disabled",
  });
});

for (const sig of ["SIGINT", "SIGTERM"]) {
  process.on(sig, () => {
    log("info", "shutdown", { signal: sig });
    server.close(() => pool.end().finally(() => process.exit(0)));
  });
}
