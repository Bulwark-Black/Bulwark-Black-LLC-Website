#!/usr/bin/env python3
"""Full read-only backup of bulwarkblack.com via the public WP REST API.
Saves post/page/category/tag/media JSON + downloads every media original and
generated size, mirroring /wp-content/uploads/ paths. Safety net for the migration."""
import os, json, urllib.request, urllib.parse, urllib.error

BASE = "https://bulwarkblack.com"
API = BASE + "/wp-json/wp/v2"
OUT = os.path.expanduser("~/Desktop/bulwarkblack-rebuild/backup")
UA = {"User-Agent": "BulwarkBlackBackup/1.0"}


def getj(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r), r.headers


def fetch_all(kind):
    items, page = [], 1
    while True:
        url = f"{API}/{kind}?" + urllib.parse.urlencode({"per_page": 100, "page": page})
        try:
            data, hdr = getj(url)
        except urllib.error.HTTPError as e:
            if e.code in (400, 404):
                break
            raise
        if not data:
            break
        items += data
        tp = hdr.get("X-WP-TotalPages")
        if tp and page >= int(tp):
            break
        page += 1
        if page > 80:
            break
    return items


def save_json(path, obj):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        json.dump(obj, f, indent=1, ensure_ascii=False)


def download(url):
    p = urllib.parse.urlparse(url).path
    if "/wp-content/uploads/" in p:
        dest = os.path.join(OUT, "uploads", p.split("/wp-content/uploads/", 1)[1])
    else:
        dest = os.path.join(OUT, "_other", p.lstrip("/"))
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return 0, dest
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    try:
        req = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(req, timeout=120) as r:
            b = r.read()
        with open(dest, "wb") as f:
            f.write(b)
        return len(b), dest
    except Exception as e:
        return -1, f"ERR {url}: {e}"


def main():
    os.makedirs(OUT, exist_ok=True)
    log = []
    for kind in ("posts", "pages", "categories", "tags"):
        items = fetch_all(kind)
        save_json(os.path.join(OUT, "content", f"{kind}.json"), items)
        log.append(f"{kind}: {len(items)}")

    media = fetch_all("media")
    save_json(os.path.join(OUT, "content", "media.json"), media)
    log.append(f"media(meta): {len(media)}")

    urls = set()
    for m in media:
        if m.get("source_url"):
            urls.add(m["source_url"])
        for sz in ((m.get("media_details") or {}).get("sizes") or {}).values():
            if sz.get("source_url"):
                urls.add(sz["source_url"])

    ok = skip = err = tot = 0
    errs = []
    for u in sorted(urls):
        n, info = download(u)
        if n == 0:
            skip += 1
        elif n > 0:
            ok += 1
            tot += n
        else:
            err += 1
            errs.append(info)
    log.append(f"media files: downloaded={ok} skipped={skip} errors={err} bytes={tot}")

    for rp in ("app-ads.txt", "robots.txt", "sitemap_index.xml"):
        try:
            req = urllib.request.Request(f"{BASE}/{rp}", headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            with open(os.path.join(OUT, rp.replace("/", "_")), "wb") as f:
                f.write(data)
            log.append(f"{rp}: {len(data)} bytes")
        except Exception as e:
            log.append(f"{rp} ERR: {e}")

    if errs:
        save_json(os.path.join(OUT, "_download_errors.json"), errs)
    summary = "\n".join(log)
    with open(os.path.join(OUT, "BACKUP-SUMMARY.txt"), "w") as f:
        f.write(summary + "\n")
    print("=== BACKUP COMPLETE ===")
    print(summary)
    print("saved to:", OUT)


if __name__ == "__main__":
    main()
