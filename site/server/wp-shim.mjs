#!/usr/bin/env node
// Bulwark Black — WordPress-compatible posting shim for Openclaw (~/clawd).
//
// Answers the subset of the WP REST API that Openclaw uses, writing new articles
// into the Astro `cti` content collection and triggering a rebuild. Openclaw needs
// zero changes: it keeps POSTing to bulwarkblack.com/wp-json/wp/v2/* with Basic auth.
//
//   POST /wp-json/wp/v2/media        raw image bytes  → { id, source_url }
//   POST /wp-json/wp/v2/media/{id}   { alt_text, caption }
//   GET  /wp-json/wp/v2/categories   → [ { id, name, slug, count }, … ]
//   POST /wp-json/wp/v2/posts        { title, slug, content, excerpt, categories, featured_media }
//                                    → writes <slug>.md, rebuilds, returns { id, link }
//
// Listens on 127.0.0.1:SHIM_PORT (default 3010). Nginx proxies /wp-json/wp/v2/ to it.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { exec, execFile } from "node:child_process";

const PORT = Number(process.env.SHIM_PORT ?? 3010);
const HOST = "127.0.0.1";
const USER = process.env.WP_USER ?? "acint";
const PASS = process.env.WP_APP_PASSWORD;
const SITE = (process.env.SITE_URL ?? "https://staging.bulwarkblack.com").replace(/\/$/, "");
const CONTENT_DIR = process.env.CONTENT_DIR ?? "/srv/bulwark-build/src/content/cti";
const UPLOADS_DIR = process.env.UPLOADS_DIR ?? "/var/www/staging.bulwarkblack.com/wp-content/uploads";
const THUMBS_DIR = process.env.THUMBS_DIR ?? "/var/www/staging.bulwarkblack.com/wp-content/thumbs";
const IOCS_DIR = process.env.IOCS_DIR ?? "/var/www/staging.bulwarkblack.com/wp-content/iocs";
const IOC_SERVICE = process.env.IOC_SERVICE ?? "http://127.0.0.1:3020/article";
const STATE_DIR = process.env.STATE_DIR ?? "/srv/bulwark-api";
const REBUILD_UNIT = process.env.REBUILD_UNIT ?? "bulwark-rebuild.service";

if (!PASS) { console.error("FATAL: WP_APP_PASSWORD not set"); process.exit(1); }

const CATEGORIES_FILE = path.join(STATE_DIR, "categories.json");
const MEDIA_INDEX = path.join(STATE_DIR, "media-index.json");

const log = (level, msg, extra = {}) =>
  console.log(JSON.stringify({ t: new Date().toISOString(), level, msg, ...extra }));

const loadJson = (p, fb) => { try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return fb; } };
const saveJson = (p, o) => { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, JSON.stringify(o, null, 1)); };

let media = loadJson(MEDIA_INDEX, { counter: 1000, items: {} });
const nextId = () => { media.counter += 1; saveJson(MEDIA_INDEX, media); return media.counter; };

const categories = loadJson(CATEGORIES_FILE, []);
const catById = new Map(categories.map((c) => [Number(c.id), c]));

function authOk(req) {
  const h = req.headers.authorization ?? "";
  if (!h.startsWith("Basic ")) return false;
  const [u, ...rest] = Buffer.from(h.slice(6), "base64").toString("utf8").split(":");
  const p = rest.join(":");
  const a = Buffer.from(`${u}:${p}`), b = Buffer.from(`${USER}:${PASS}`);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

const readRaw = (req, max) => new Promise((resolve, reject) => {
  let n = 0; const chunks = [];
  req.on("data", (c) => { n += c.length; if (n > max) { req.destroy(); reject(new Error("too large")); return; } chunks.push(c); });
  req.on("end", () => resolve(Buffer.concat(chunks)));
  req.on("error", reject);
});
function sendJson(res, status, obj) {
  const p = JSON.stringify(obj);
  res.writeHead(status, { "content-type": "application/json", "content-length": Buffer.byteLength(p), "cache-control": "no-store" });
  res.end(p);
}
const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 90);
const stripHtml = (s) => String(s ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const yml = (s) => JSON.stringify(String(s ?? ""));
function ym() { const d = new Date(); return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}`; }

// Debounced rebuild: coalesce a burst of posts into one build.
let timer = null;
function scheduleRebuild() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    timer = null;
    exec(`sudo -n /usr/bin/systemctl start ${REBUILD_UNIT}`, { timeout: 8000 }, (err, _o, se) =>
      err ? log("error", "rebuild_failed", { error: String(err), stderr: se?.toString().slice(0, 200) })
          : log("info", "rebuild_triggered"));
  }, 5000);
}

async function postMedia(req, res) {
  const cd = req.headers["content-disposition"] ?? "";
  const fn = /filename\*?="?([^"]+)"?/i.exec(cd);
  let filename = path.basename(fn ? fn[1] : `upload-${Date.now()}.png`).replace(/[^A-Za-z0-9._-]/g, "-");
  const buf = await readRaw(req, 30 * 1024 * 1024);
  const rel = ym();
  fs.mkdirSync(path.join(UPLOADS_DIR, rel), { recursive: true });
  const dest = path.join(UPLOADS_DIR, rel, filename);
  fs.writeFileSync(dest, buf);
  const source_url = `${SITE}/wp-content/uploads/${rel}/${filename}`;
  const base = filename.replace(/\.[^.]+$/, "");
  fs.mkdirSync(path.join(THUMBS_DIR, rel), { recursive: true });
  execFile("convert", [dest, "-resize", "900x900>", "-quality", "72", path.join(THUMBS_DIR, rel, `${base}.jpg`)],
    { timeout: 30000 }, (e) => e && log("warn", "thumb_failed", { error: String(e) }));
  const id = nextId();
  media.items[id] = { source_url, rel: `${rel}/${filename}` };
  saveJson(MEDIA_INDEX, media);
  log("info", "media_saved", { id, filename, bytes: buf.length });
  sendJson(res, 201, { id, source_url, media_type: "image", mime_type: req.headers["content-type"] || "image/png", title: { rendered: base } });
}

async function postMediaMeta(req, res, id) {
  const buf = await readRaw(req, 64 * 1024);
  let body = {}; try { body = JSON.parse(buf.toString("utf8") || "{}"); } catch {}
  const item = media.items[id] || (media.items[id] = {});
  if (body.alt_text != null) item.alt_text = String(body.alt_text);
  if (body.caption != null) item.caption = String(body.caption);
  saveJson(MEDIA_INDEX, media);
  sendJson(res, 200, { id: Number(id), alt_text: item.alt_text ?? "", caption: { rendered: item.caption ?? "" }, source_url: item.source_url ?? "" });
}

// Path B: ask the IOC service for publishable indicators. Resolves null on any
// failure so a hiccup never blocks the post.
function extractIocs(text, source, sourceUrl) {
  return new Promise((resolve) => {
    let payload;
    try { payload = JSON.stringify({ text: String(text).slice(0, 900000), source, source_url: sourceUrl || null }); }
    catch { return resolve(null); }
    const u = new URL(IOC_SERVICE);
    const r = http.request(
      { host: u.hostname, port: u.port, path: u.pathname, method: "POST",
        headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) },
        timeout: 40000 },
      (resp) => {
        let data = "";
        resp.on("data", (c) => (data += c));
        resp.on("end", () => { try { resolve(resp.statusCode === 200 ? JSON.parse(data) : null); } catch { resolve(null); } });
      },
    );
    r.on("error", (e) => { log("warn", "ioc_extract_error", { error: String(e) }); resolve(null); });
    r.on("timeout", () => { r.destroy(); resolve(null); });
    r.write(payload); r.end();
  });
}

async function postPost(req, res) {
  const buf = await readRaw(req, 5 * 1024 * 1024);
  let body; try { body = JSON.parse(buf.toString("utf8")); } catch { return sendJson(res, 400, { code: "invalid_json" }); }
  const title = String(body.title ?? "").trim();
  if (!title) return sendJson(res, 400, { code: "rest_missing_title", message: "title required" });
  const slug = slugify(body.slug || title);
  const names = (Array.isArray(body.categories) ? body.categories : []).map((c) => catById.get(Number(c))?.name).filter(Boolean);
  const primary = names[0] || "Cyber Threat Intelligence";
  const m = media.items[Number(body.featured_media)];
  const heroImage = m ? `/wp-content/uploads/${m.rel}` : "";
  const summary = (stripHtml(body.excerpt) || stripHtml(body.content).split(" ").slice(0, 40).join(" ")).slice(0, 300);
  const now = new Date().toISOString();
  const id = nextId();

  const fmLines = [
    "---",
    `title: ${yml(title)}`,
    `publishedAt: ${now}`,
    `summary: ${yml(summary)}`,
    `category: ${yml(primary)}`,
  ];
  if (names.length) { fmLines.push("categories:"); names.forEach((n) => fmLines.push(`  - ${yml(n)}`)); }
  else fmLines.push("categories: []");
  fmLines.push("tags: []");
  if (heroImage) fmLines.push(`heroImage: ${yml(heroImage)}`);
  fmLines.push(`wpId: ${id}`, `wpSlug: ${yml(slug)}`, `originalLink: ${yml(`https://bulwarkblack.com/${slug}`)}`, "draft: false");

  // Path B: auto-extract publishable indicators, write the live download files
  // to /wp-content/iocs/<slug>/, and record the defanged display map in frontmatter.
  try {
    const iocText = `${title}\n${summary}\n${stripHtml(body.content)}`;
    // Pull the original "Source:" link so the service extracts IOCs from the full
    // source report, not just our summary (falls back to the summary if unreachable).
    const rawBody = String(body.content ?? "");
    const srcMatch =
      rawBody.match(/Source:[\s\S]{0,120}?href=["'](https?:\/\/[^"']+)/i) ||
      rawBody.match(/href=["'](https?:\/\/(?![^"']*bulwarkblack\.com)[^"']+)/i);
    const iocs = await extractIocs(iocText, `https://bulwarkblack.com/${slug}/`, srcMatch ? srcMatch[1] : null);
    if (iocs && iocs.total > 0 && iocs.files && Object.keys(iocs.files).length) {
      const dir = path.join(IOCS_DIR, slug);
      fs.mkdirSync(dir, { recursive: true });
      for (const [name, content] of Object.entries(iocs.files)) fs.writeFileSync(path.join(dir, name), String(content));
      const iocData = { count: iocs.total, files: Object.keys(iocs.files), indicators: iocs.display || {} };
      fmLines.push(`iocs: '${JSON.stringify(iocData).replace(/'/g, "''")}'`);
      log("info", "iocs_attached", { slug, count: iocs.total });
    }
  } catch (e) { log("warn", "iocs_skip", { slug, error: String(e) }); }

  fmLines.push("---", "", String(body.content ?? ""));

  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(path.join(CONTENT_DIR, `${slug}.md`), fmLines.join("\n"));
  log("info", "post_written", { id, slug, category: primary, hasHero: !!heroImage });
  scheduleRebuild();
  sendJson(res, 201, { id, slug, link: `${SITE}/${slug}/`, status: "publish", date: now, title: { rendered: title } });
}

const server = http.createServer(async (req, res) => {
  try {
    if (!authOk(req)) { res.writeHead(401, { "www-authenticate": 'Basic realm="wp"', "content-type": "application/json" }); return res.end(JSON.stringify({ code: "rest_not_logged_in" })); }
    const p = new URL(req.url ?? "/", `http://${HOST}`).pathname.replace(/\/+$/, "");
    if (req.method === "POST" && p === "/wp-json/wp/v2/media") return await postMedia(req, res);
    const mm = /^\/wp-json\/wp\/v2\/media\/(\d+)$/.exec(p);
    if (req.method === "POST" && mm) return await postMediaMeta(req, res, mm[1]);
    if (req.method === "GET" && p === "/wp-json/wp/v2/categories") return sendJson(res, 200, categories);
    if (req.method === "POST" && p === "/wp-json/wp/v2/posts") return await postPost(req, res);
    if (req.method === "GET" && p === "/wp-json/wp/v2/shim-health") return sendJson(res, 200, { ok: true, categories: categories.length });
    sendJson(res, 404, { code: "rest_no_route", path: p });
  } catch (err) {
    log("error", "unhandled", { error: String(err) });
    sendJson(res, 500, { code: "internal", message: String(err).slice(0, 200) });
  }
});
server.listen(PORT, HOST, () => log("info", "shim_listening", { port: PORT, categories: categories.length }));
for (const s of ["SIGINT", "SIGTERM"]) process.on(s, () => server.close(() => process.exit(0)));
