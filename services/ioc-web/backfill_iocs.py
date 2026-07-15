#!/usr/bin/env python3
"""Backfill / refresh IOCs on existing CTI articles from the FETCHED SOURCE."""
import glob, json, os, re, sys, urllib.request

CONTENT = "/srv/bulwark-build/src/content/cti"
IOCS_DIR = "/var/www/staging.bulwarkblack.com/wp-content/iocs"
SVC = "http://127.0.0.1:3020/article"
DRY = os.environ.get("DRY") == "1"
LIMIT = int(os.environ.get("LIMIT", "0"))
FM = re.compile(r"^---\n(.*?)\n---\n(.*)$", re.S)


def strip_html(s):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()


def field(fm, key):
    m = re.search(rf"^{key}:\s*(.+)$", fm, re.M)
    if not m:
        return ""
    v = m.group(1).strip()
    if len(v) >= 2 and v[0] == '"':
        try:
            return json.loads(v)
        except Exception:
            return v.strip('"')
    return v


def source_url(body):
    m = re.search(r'Source:.*?href=["\'](https?://[^"\'> ]+)', body, re.S)
    if m:
        return m.group(1)
    for u in re.findall(r'href=["\'](https?://[^"\'> ]+)', body):
        if "bulwarkblack.com" not in u:
            return u
    return None


def call(text, source, src_url):
    payload = json.dumps({"text": text[:900000], "source": source, "source_url": src_url}).encode()
    req = urllib.request.Request(SVC, data=payload, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=50) as r:
            return json.load(r)
    except Exception as e:
        print(f"  !! service error: {e}", file=sys.stderr)
        return None


files = sorted(glob.glob(os.path.join(CONTENT, "*.md")))
processed = attached = from_src = noiocs = bad = 0

for path in files:
    s = open(path, encoding="utf-8").read()
    m = FM.match(s)
    if not m:
        bad += 1
        continue
    if LIMIT and processed >= LIMIT:
        break
    processed += 1
    fm, body = m.group(1), m.group(2)
    slug = os.path.basename(path)[:-3]
    url = source_url(body)
    text = f"{field(fm, 'title')}\n{field(fm, 'summary')}\n{strip_html(body)}"
    res = call(text, f"https://bulwarkblack.com/{slug}/", url)
    if not res:
        continue
    if res.get("from_source"):
        from_src += 1

    fm_clean = "\n".join(l for l in fm.split("\n") if not l.startswith("iocs:"))
    d = os.path.join(IOCS_DIR, slug)

    if not res.get("total") or not res.get("files"):
        noiocs += 1
        if not DRY:
            if os.path.isdir(d):
                for fn in os.listdir(d):
                    os.remove(os.path.join(d, fn))
                os.rmdir(d)
            if fm_clean != fm:
                open(path, "w", encoding="utf-8").write(f"---\n{fm_clean}\n---\n{body}")
        continue

    attached += 1
    if DRY:
        continue
    os.makedirs(d, exist_ok=True)
    for name in list(os.listdir(d)):
        if name not in res["files"]:
            os.remove(os.path.join(d, name))
    for name, content in res["files"].items():
        open(os.path.join(d, name), "w", encoding="utf-8").write(str(content))
    iocdata = {"count": res["total"], "files": list(res["files"].keys()), "indicators": res.get("display", {})}
    iocline = "iocs: '" + json.dumps(iocdata).replace("'", "''") + "'"
    open(path, "w", encoding="utf-8").write(f"---\n{fm_clean.rstrip(chr(10))}\n{iocline}\n---\n{body}")
    if processed % 25 == 0:
        print(f"  ...{processed}/{len(files)} attached={attached} from_source={from_src}", flush=True)

print(f"{'DRY ' if DRY else ''}files={len(files)} processed={processed} "
      f"attached={attached} from_source={from_src} no_iocs={noiocs} bad_fm={bad}")
