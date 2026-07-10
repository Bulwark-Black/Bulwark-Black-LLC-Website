# Bulwark Black — WordPress → VPS Rebuild Plan

**Goal:** Kill the ~$200/yr GoDaddy Managed WordPress. Rebuild bulwarkblack.com as a fast Astro
site on a DigitalOcean VPS (nginx), reusing the Rural Tech design system. Keep the automated CTI
article feed alive with zero changes to the posting bot. Preserve the App Store links (privacy policy +
root domain) byte-for-byte. Reposition the site as a balanced hub: cyber threat intelligence **and**
broad remote tech services (websites, custom web + iOS apps, AI, small-business IT).

Status: **PLAN ONLY — no build until Albert says go.** (All decisions locked 2026-07-09.)

---

## 1. Decisions locked

| Question | Decision |
|---|---|
| CTI article feed | **Keep it live** — automated posting continues on the new site |
| Hosting | **Shared DigitalOcean droplet** — co-locate on the existing Rural Tech droplet (~$0 extra) |
| Positioning | **Balanced hub** — CTI + tech services, two front doors |
| Posting mechanism | **"Openclaw" = a scheduled AI agent in `~/clawd` that publishes via the WordPress REST API** — resolved, see §5 |

**Notes (2026-07-09):** **AdMob is retired**, so `app-ads.txt` drops from hard blocker to a cheap safety
keep. The app's **privacy policy** (`/va-disability-calc-track`) and the **root domain** (Apple's
`sellerUrl` = `https://bulwarkblack.com`) remain hard requirements. Openclaw is fully mapped and the
pipeline requires **no changes to Openclaw** (§5). Design base = a copy of `~/Desktop/rural-tech-and-support`
(rural itself is never modified).

---

## 2. Current state (verified 2026-07-09, from the live site + DNS)

**Platform:** WordPress 6.9.4 on **GoDaddy Managed WordPress** (`wpaas` REST namespace, A record
`160.153.0.146` = GoDaddy). Theme: *Newsmatic* (BlazeThemes), dark cyber-magazine style.

**Content volume (from the WP REST API):**
- ~390 posts (the auto-posted CTI articles)
- 22 pages
- 492 media files = 467 images (jpg/png/webp/gif) + **25 `.txt` IOC/YARA files**
- 24 categories, ~390–436 tags
- 836 total indexed URLs (Yoast sitemap: 391 posts, 23 pages, 24 categories, 393 tags, 5 authors)

**Key plugins in play:** Simple File List Pro (the IOC/YARA download library), TablePress, MegaMenu,
MonsterInsights (GA), WP-ULike, Wordfence, Yoast, Redirection, Code Snippets, Akismet.

**DNS / email (do not break):**
- Domain + DNS at **GoDaddy** (`ns47/48.domaincontrol.com`)
- Web A record: `bulwarkblack.com` + `www` → `160.153.0.146` (GoDaddy WP) — **this is the only record we change**
- **MX → Microsoft 365** (`bulwarkblack-com.mail.protection.outlook.com`), SPF `include:spf.protection.outlook.com`
- **Email stays exactly as-is.** We touch A/AAAA only. Never MX, SPF, DKIM, DMARC, autodiscover.

**Reference site (the model):** ruraltechandsupport.com = **Astro static site, nginx, on a DigitalOcean
droplet** (`138.68.30.174`), email forwarded via ImprovMX. Source already on disk at
`~/Desktop/rural-tech-and-support`. **The new site co-locates on this droplet.**

**Local assets already on Albert's Mac:**
- `~/Desktop/rural-tech-and-support` — Astro source to fork for the design system
- `~/Desktop/newsmatic-bulwark`, `newsmatic-bulwark 2`, `newsmatic` — local copies of the current WP theme/site (backup/supplement for migration)
- `~/Desktop/VA_Calc_Local` — the VA Disability iOS app source (its privacy policy lives on this site)
- `~/clawd` — **Openclaw** (the article-posting AI agent — see §5)

---

## 3. THE HARD CONSTRAINT — App Store / legal URLs

These are linked from the **App Store listing** (`apps.apple.com/us/app/va-disability-calc-track/id6748180691`).
Apple's `sellerUrl` points at the **root domain** and the listing links the **privacy policy** — if either
breaks, the App Store listing breaks. (AdMob is retired, so `app-ads.txt` is now a harmless safety keep,
not a blocker.) **Preserve every path below at the same URL, verified byte-for-byte after cutover.**

| URL | What it is | Requirement |
|---|---|---|
| `/` (**root domain**) | Apple `sellerUrl` = `https://bulwarkblack.com`, the app's developer link | Must serve a real page (the new homepage) |
| `/va-disability-calc-track` | VA app **privacy policy** (App Store links here) | Same path, same or better content |
| `/va-disability-calc-track-app` | VA app product/landing page | Same path |
| `/privacy-security` | Privacy & security page | Same path |
| `/products`, `/services` | Product/service pages | Same path |
| `/app-ads.txt` (**domain root**) | Legacy ad-network file (AdMob retired) | Keep verbatim at root, `text/plain` — harmless, de-risks any residual network. Not gating. |
| `/wp-content/uploads/**` (467 images + 25 IOC `.txt`) | In-article images + the Simple File List IOC/YARA downloads | **Mirror the exact upload paths** so 390 articles' embedded images and every IOC download link keep resolving |

Everything else (390 post slugs, 22 pages, category/tag archives) also gets preserved via matching
Astro routes; anything that can't map 1:1 gets a permanent nginx 301. Post-cutover verification
script checks all 836 sitemap URLs + the table above.

---

## 4. Target architecture

```
GoDaddy (domain + DNS + M365 email)  ──A record──▶  Rural Tech DigitalOcean droplet (nginx + Let's Encrypt)
                                                         │   (second nginx vhost — bulwarkblack.com)
                                                         │
                                                         ├── Astro static site  (fast, cached, cheap)
                                                         │     src/content/posts/*   ← ~390 CTI articles
                                                         │     src/content/pages, services, apps
                                                         │     /wp-content/uploads/**  (mirrored verbatim)
                                                         │     /app-ads.txt            (verbatim, root)
                                                         │
                                                         └── WP-compatible shim @ /wp-json/wp/v2/  ← Openclaw posts here (UNCHANGED)
                                                               POST /posts → write Astro content file → debounced rebuild
```

**Stack:** Astro (static output) forked from the Rural Tech design system, TypeScript, Tailwind (match
rural), nginx vhost, Let's Encrypt (certbot), git-based deploy. Reuses rural's components, layout, and
build/deploy muscle so this is an extension of a proven setup, not a green field.

**Hosting:** co-locate on the **existing Rural Tech droplet** as a second nginx vhost (a static site is
featherweight → ~$0 extra). Easy to split onto its own droplet later if the rebuild cadence ever warrants it.

**Droplet blueprint (confirmed on-box 2026-07-09):** `138.68.30.174` = Ubuntu 24.04, nginx 1.24, node 20,
python 3.12, postgres 16; **42 GB free disk**, **~1.9 GB RAM** (tight → add a 2 GB swapfile for Astro build
headroom). Login `deploy@` with `~/.ssh/ruraltechandsupport` (NOPASSWD sudo). Existing vhosts:
`ruraltechandsupport.com`, `pwpush`. Rural's proven pattern, which bulwarkblack mirrors exactly:
- a dedicated least-priv user (`ruraltech`) owns `/srv/ruraltech-build` (Astro) + `/srv/ruraltech-api` (Node svcs)
- Astro is built on-box → atomic swap into `/var/www/<site>/` (`.new`/`.old` rename)
- **on-demand rebuild = a `*-rebuild.service` one-shot systemd unit** the app user triggers via a one-line
  NOPASSWD sudoers drop-in (rural fires it after a review is approved) — **this is the shim's rebuild trigger**
- Node capture services (newsletter/reviews/forms on :3001-3003) are proxied by nginx at `/api/*`; Resend for mail

**bulwarkblack layout (to build):** dedicated user `bulwark`; `/srv/bulwark-build` + `/srv/bulwark-api`;
web root `/var/www/bulwarkblack.com`; the **Openclaw shim** = a Node service on :3004 proxied at
`/wp-json/wp/v2/`; `bulwark-rebuild.service` one-shot for the debounced rebuild. Reuse rural's Resend
sender + the newsletter/forms services if we want the same capture features.

---

## 5. The posting pipeline ("Openclaw") — RESOLVED, zero changes to Openclaw

**What Openclaw is:** a scheduled Claude/AI agent harness ("clawdbot") living in `~/clawd`. It researches
CTI news, writes each article as **HTML**, generates a featured image (Midjourney + a fallback generator),
and **publishes through the WordPress REST API**. Confirmed from `~/clawd/publish_*.py` and the `.ps1`
twins (`publish-post.ps1`, `upload-image.ps1`, `get-wp-categories.ps1`):

```
POST  {api}/media          # upload featured image (binary)      + HTTP Basic auth
POST  {api}/media/{id}      # set alt_text / caption
GET   {api}/categories      # resolve category IDs
POST  {api}/posts           # {title, content:HTML, status:'publish', categories, tags, featured_media}
        where  api = https://bulwarkblack.com/wp-json/wp/v2
```

- **Auth:** HTTP Basic with the WordPress **application password**, stored in `~/clawd/.secrets/bulwarkblack-wp.json`.
- **Flow:** `briefs/*.md` (daily research) → per-article `drafts/*.html` + a generated `publish_*.py` →
  REST publish → `*-publish-result.json` (records media_id, post_id, live URL, which it re-fetches to verify).
- **Schedule:** launchd `ai.openclaw.gateway.plist` + `~/clawd/CRON-SCHEDULE.md` / `migration-export/cron-jobs.json`.

**The design: a WordPress-compatible shim.** Openclaw posts to a *fixed* URL
(`bulwarkblack.com/wp-json/wp/v2/...`) with Basic Auth. After cutover that domain points at the new
droplet — so nginx routes just those endpoints to a tiny service that mimics WordPress:

| Endpoint Openclaw calls | Shim behavior |
|---|---|
| `POST /wp-json/wp/v2/media` | save the image into the site's media dir; return `{id, source_url}` |
| `POST /wp-json/wp/v2/media/{id}` | store `alt_text` / `caption` |
| `GET  /wp-json/wp/v2/categories` | return the category list (seeded from the migrated taxonomy) |
| `POST /wp-json/wp/v2/posts` | write an Astro content file (frontmatter + HTML body), fire a **debounced `astro build` + reload**, return `{id, link}` so Openclaw's verify step passes |

Openclaw keeps posting to the same URL, with the same app password, sending the same fields — **it never
knows WordPress is gone.** The shim (small FastAPI or Node service, systemd-managed, validating the same
shared secret) is the *only* WordPress-shaped surface we keep, locked to that one auth token and logged.
Everything a human sees is static Astro. In Phase 4 I'll read a couple of `publish_*.py` in full to
capture every field; if we'd rather not expose a public `/wp-json` path, we flip the one base-URL line in
`~/clawd/.secrets/bulwarkblack-wp.json` to a private `/ingest` route instead (a one-line change, still no
logic change to Openclaw).

---

## 6. Content migration approach

- **Posts + pages → content files:** Node script hits the public WP REST API (already proven working — no
  admin needed), keeps the HTML body (Openclaw authors in HTML anyway), writes frontmatter (title, slug,
  date, categories, tags, author, featured image, canonical). ~390 posts + 22 pages.
- **Media:** download all 492 files and **mirror the exact `/wp-content/uploads/YYYY/MM/...` paths** on
  nginx so embedded image URLs in articles never break. (Local `newsmatic-bulwark` copy is a fallback source.)
- **IOC/YARA library:** the 25 `.txt` files → rehost at identical paths, and rebuild the Simple File
  List "IOCs_YARA_TTPs" download page as a static, searchable downloads section.
- **app-ads.txt:** copy verbatim to the site root.
- **Taxonomies:** generate category + tag archive routes with the same slugs to preserve those ~417 URLs.
- **RSS/feed:** emit `/feed` (and `/rss.xml`) so the WordPress feed URL keeps working for subscribers/aggregators.
- **Redirects:** nginx map for anything that can't be a 1:1 route; `/wp-admin`, `/xmlrpc.php` → 410. Note
  `/wp-json/wp/v2/{posts,media,categories}` is deliberately **kept** (the shim), everything else under
  `/wp-json` → 404.

## 7. Information architecture — new "balanced hub"

Two clear front doors on the homepage, reusing rural's clean section style:

- **Front door 1 — Tech Services** (the broad pivot): remote tech help, **websites**, **custom web apps**,
  **custom iOS apps** (VA Disability app as the flagship case study), AI setup, small-business IT +
  cybersecurity. Modeled on rural's "four lanes" + "Work With Me" funnel, widened past the rural niche.
- **Front door 2 — Cyber Threat Intelligence**: the article hub (~390-post archive, searchable), the
  threat-actor pages (Russian/Chinese/North Korean/Iranian/Global), malware lists, the IOC/YARA
  downloads, research papers. This is the credibility engine and stays automated via Openclaw.
- Shared: About, Contact, Donations, Products (apps), legal/privacy pages (preserved paths), newsletter.

## 8. DNS / email cutover (email-safe)

1. Lower the A-record TTL at GoDaddy 24–48h ahead (e.g. to 600s).
2. Build + fully test the new site on the droplet via IP or a `staging.` hostname (Let's Encrypt cert).
3. Verify the URL-preservation table (§3) + one live Openclaw shim post on the new host **before** touching DNS.
4. Flip `bulwarkblack.com` + `www` A record → droplet IP. **Leave MX/SPF/DKIM/DMARC/autodiscover alone.**
5. Confirm HTTPS, the root homepage, the privacy URL, `/app-ads.txt` at root, a sample article's images,
   and send/receive a test email to prove M365 is untouched.
6. Keep GoDaddy WP running in parallel for a safety window; repoint Openclaw only after the shim is verified.
7. Only after N days of verified operation: cancel GoDaddy Managed WordPress → **stop the ~$200/yr.**

## 9. Cost reality

- **Co-located on the existing Rural Tech droplet: ~$0/yr extra** (you already pay for that droplet + the domain).
- Cancelling GoDaddy Managed WP: **saves ~$200/yr.**
- Net: roughly **$200/yr saved**, landing at essentially your "$10/yr" target (just the domain registration).
- If you ever split bulwarkblack onto its own droplet: +~$6/mo (~$72/yr) — still a big win vs GoDaddy.

---

## 10. Phased execution (each phase verified before the next — nothing ships until you say go)

- **Phase 0 — Safety net & inputs.** Full content/media backup (REST scrape of all posts + media + IOC
  files + app-ads.txt, plus GoDaddy's own backup and the local `newsmatic-bulwark` copy). Snapshot the
  Rural Tech droplet before adding a vhost. Lower DNS TTL.
- **Phase 1 — Scaffold.** Copy `~/Desktop/rural-tech-and-support` → new `bulwarkblack` Astro project;
  content collections, layouts, the balanced-hub nav/homepage shell. (Rural itself is never modified.)
- **Phase 2 — Migrate content.** Run the WP→content export (posts, pages), download + mirror all media
  and IOC files + app-ads.txt at exact paths. Verify counts (~390 / 22 / 492 / 25).
- **Phase 3 — Build the IA.** Services front door (broad tech help + custom web/iOS apps + AI + SMB IT),
  CTI front door (archive, threat-actor pages, IOC downloads, research), app + legal pages (preserved
  paths), about/contact/donations, newsletter.
- **Phase 4 — Posting pipeline.** Build the WordPress-compatible shim (§5) behind nginx; test it with a
  real Openclaw publish and confirm the article renders live after the debounced rebuild.
- **Phase 5 — URL preservation.** Routes + nginx 301 map + sitemap + RSS. Automated check of all 836
  URLs + the §3 table byte-for-byte.
- **Phase 6 — Deploy.** nginx vhost on the droplet, Let's Encrypt, test on a `staging.` hostname/IP.
- **Phase 7 — Cutover.** Flip the A record, verify HTTPS + root + privacy + app-ads.txt + images + email,
  then repoint Openclaw at the shim and confirm a live post.
- **Phase 8 — Decommission.** After the safety window: cancel **only the Managed WordPress product** at
  GoDaddy — the domain registration, DNS, and the **GoDaddy-resold Microsoft 365 email** (tenant
  `NETORGFT14427777`) are separate products; cancelling them kills mail. Then rotate the WordPress app password.

---

## 11. Open questions / risks

1. ~~What is Openclaw?~~ **Resolved** — WP-REST publisher; shim design in §5, no Openclaw changes.
2. ~~Co-locate vs dedicated droplet?~~ **Resolved** — shared Rural Tech droplet.
3. **Keep all ~390 posts vs. thin the archive?** Default: keep all for SEO (cheap as static content).
4. **Rebuild cadence.** Openclaw posts a few times/day; the shim debounces + queues rebuilds so bursts
   don't stack. If the archive ever makes full rebuilds slow, switch to Astro's incremental build. Not a launch concern.
5. **Shim security.** The `/wp-json` write surface accepts *only* the Openclaw token (rate-limited, optional
   IP-allowlist), and is logged — it's the one write path into the site, so it gets locked down.
6. **Quick confirm** no other store/marketing links point at bulwarkblack paths beyond §3 (App Store Connect check).

## 12. Immediate next steps

**No blockers remain.** On your "go":
1. **Phase 0** — back everything up (REST scrape of ~390 posts + 492 media + 25 IOC files + app-ads.txt;
   snapshot the Rural Tech droplet) and lower the DNS TTL.
2. **Phase 1** — scaffold the new `bulwarkblack` Astro project by copying the Rural Tech design system.
3. Read 2–3 `~/clawd/publish_*.py` in full + `migration-export/cron-jobs.json` to finalize the shim contract.

Say the word and I start Phase 0.
