# Bulwark Black LLC — Website

The [bulwarkblack.com](https://bulwarkblack.com) website: a dark, gold-accented **cyber threat
intelligence magazine** plus a tech-services and apps hub. Built with **Astro + Tailwind** and served
as a static site from a DigitalOcean droplet. Migrated off GoDaddy WordPress (the *Newsmatic* theme)
with all ~390 articles preserved at their original URLs.

Veteran-owned · SDVOSB · SAM-registered.

## Stack

- **Astro 5** (static output) + **Tailwind CSS**
- **nginx** on a DigitalOcean droplet (co-located with ruraltechandsupport.com)
- **Let's Encrypt** TLS
- Content stored as Astro content collections

## Repository layout

```
site/                    the Astro website — this is what builds and deploys
  src/content/cti/       ~390 CTI articles (migrated from WordPress), one file each
  src/pages/             routes: [slug].astro (root-level article URLs),
                         category/[slug].astro (archives), the migrated WP pages,
                         cyber-threat-intelligence/, etc.
  src/components/        Header (megamenu), ArticleCard, NewsTicker, CircuitBackground, …
  src/lib/               site config, taxonomy map, image/thumbnail helpers
  public/                logo, favicons, circuit-pattern.svg, app-ads.txt
scripts/                 one-off migration tools (backup_wp.py, migrate_posts.py)
backup/content/          the WordPress export JSON used for the migration
PLAN.md                  the full migration plan / spec
```

> **Not in git:** the ~1.1 GB of article images (`backup/uploads/`, served from the droplet at
> `/wp-content/uploads/`) and `node_modules/`.

## Local development

```bash
cd site
npm install
npm run dev      # http://localhost:4321
npm run build    # static build → site/dist
```

Article images live on the server under `/wp-content/uploads/` and `/wp-content/thumbs/`. Locally they
fall back to a gradient placeholder — to preview real images, symlink
`site/public/wp-content` → the local `backup/` (and remove it before building).

## Content pipeline (Openclaw)

New threat-intel articles are written and published automatically by **Openclaw** (an AI agent that
lives in `~/clawd`). It publishes through the same WordPress REST calls the old site used
(`POST /wp-json/wp/v2/media`, `GET /wp-json/wp/v2/categories`, `POST /wp-json/wp/v2/posts`). On the
droplet a small **WordPress-compatible shim** answers those endpoints: it saves the image, writes a new
article into `src/content/cti/`, and triggers a rebuild — so the automation keeps working unchanged
while the public site stays fully static.

## Deploy

The static build is rsynced to the droplet's nginx web root; images/thumbnails are served from
`/wp-content/`. Staging runs at **https://staging.bulwarkblack.com**. Production cutover is a single DNS
A-record change — see [`PLAN.md`](PLAN.md) §8.

## URL preservation

The App Store listing for the **VA Disability Calc & Track** iOS app links to `/va-disability-calc-track`
(privacy policy) and to the root domain, and `/app-ads.txt` is served at the root — all preserved
byte-for-byte through the migration.
