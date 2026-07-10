#!/usr/bin/env python3
"""Migrate WP posts (from the backup JSON) into Astro `cti` content-collection .md files.

Each post -> src/content/cti/<slug>.md with YAML frontmatter + the original WP HTML body.
Articles keep their ROOT-level slug (bulwarkblack.com/<slug>); a root [slug].astro route
renders them, so the URLs are preserved 1:1.

Usage:  python3 migrate_posts.py [OUTPUT_DIR]
        default OUTPUT_DIR = ../scratch/cti-out  (dry-run; does NOT touch the site)
        real run:  python3 migrate_posts.py ../site/src/content/cti
"""
import json, os, re, sys, html

ROOT = os.path.expanduser("~/Desktop/bulwarkblack-rebuild")
BK = os.path.join(ROOT, "backup", "content")
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, "scratch", "cti-out")


def load(name):
    return json.load(open(os.path.join(BK, name)))


def clean_text(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def yaml_str(s):
    return '"' + (s or "").replace("\\", "\\\\").replace('"', '\\"') + '"'


def root_relative(u):
    return (u or "").replace("https://bulwarkblack.com", "").replace(
        "http://bulwarkblack.com", ""
    ).replace("https://www.bulwarkblack.com", "").replace("http://www.bulwarkblack.com", "")


def rewrite_body(h):
    # Make in-content asset/link URLs root-relative so they resolve on any host.
    for host in ("https://www.bulwarkblack.com/", "http://www.bulwarkblack.com/",
                 "https://bulwarkblack.com/", "http://bulwarkblack.com/"):
        h = h.replace(host, "/")
    return h


def main():
    posts = load("posts.json")
    pages = load("pages.json")
    cats = {c["id"]: c for c in load("categories.json")}
    tags = {t["id"]: t for t in load("tags.json")}
    media = {m["id"]: m for m in load("media.json")}
    page_slugs = {p["slug"] for p in pages}

    os.makedirs(OUT, exist_ok=True)
    collisions, written = [], 0

    for p in posts:
        slug = p["slug"]
        if slug in page_slugs:
            collisions.append(slug)

        title = html.unescape(p["title"]["rendered"])
        summary = clean_text(p.get("excerpt", {}).get("rendered", ""))
        if not summary:
            y = p.get("yoast_head_json") or {}
            summary = clean_text(y.get("og_description") or y.get("description") or "")
        summary = summary[:280]

        cat_names = [html.unescape(cats[c]["name"]) for c in p.get("categories", [])
                     if c in cats and cats[c].get("slug") != "uncategorized"]
        primary = cat_names[0] if cat_names else "Threat Intelligence"
        tag_names = [html.unescape(tags[t]["name"]) for t in p.get("tags", []) if t in tags]

        hero = ""
        fm_id = p.get("featured_media") or 0
        if fm_id in media:
            hero = root_relative(media[fm_id].get("source_url", ""))

        body = rewrite_body(p.get("content", {}).get("rendered", ""))

        lines = ["---",
                 f"title: {yaml_str(title)}",
                 f"publishedAt: {p['date']}",
                 f"summary: {yaml_str(summary)}",
                 f"category: {yaml_str(primary)}"]
        if cat_names:
            lines.append("categories:")
            lines += [f"  - {yaml_str(c)}" for c in cat_names]
        else:
            lines.append("categories: []")
        if tag_names:
            lines.append("tags:")
            lines += [f"  - {yaml_str(t)}" for t in tag_names[:15]]
        else:
            lines.append("tags: []")
        if hero:
            lines.append(f"heroImage: {yaml_str(hero)}")
        lines += [f"wpId: {p['id']}",
                  f"wpSlug: {yaml_str(slug)}",
                  f"originalLink: {yaml_str(p.get('link', ''))}",
                  "draft: false",
                  "---",
                  "",
                  body]
        with open(os.path.join(OUT, slug + ".md"), "w") as f:
            f.write("\n".join(lines))
        written += 1

    print(f"written: {written} .md files -> {OUT}")
    print(f"slug collisions with pages ({len(collisions)}): {collisions[:20]}")


if __name__ == "__main__":
    main()
