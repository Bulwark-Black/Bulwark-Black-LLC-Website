#!/usr/bin/env python3
"""One-time backfill: attach IOCs to existing CTI articles (Path B).

For each /srv/bulwark-build/src/content/cti/*.md that doesn't already have an
`iocs:` frontmatter line, POST its body to the /article service; if indicators
are found, write the live files to /wp-content/iocs/<slug>/ and add the defanged
display map to the frontmatter. Idempotent. DRY=1 reports without writing;
LIMIT=N processes at most N un-backfilled articles.
"""
import glob
import json
import os
import re
import sys
import urllib.request

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


def call(text, source):
    payload = json.dumps({"text": text[:900000], "source": source}).encode()
    req = urllib.request.Request(
        SVC, data=payload, headers={"Content-Type": "application/json"}
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            return json.load(r)
    except Exception as e:
        print(f"  !! service error: {e}", file=sys.stderr)
        return None


files = sorted(glob.glob(os.path.join(CONTENT, "*.md")))
processed = attached = already = noiocs = bad = 0
sample = []

for path in files:
    s = open(path, encoding="utf-8").read()
    m = FM.match(s)
    if not m:
        bad += 1
        continue
    fm, body = m.group(1), m.group(2)
    if re.search(r"^iocs:", fm, re.M):
        already += 1
        continue
    if LIMIT and processed >= LIMIT:
        break
    processed += 1
    slug = os.path.basename(path)[:-3]
    text = f"{field(fm, 'title')}\n{field(fm, 'summary')}\n{strip_html(body)}"
    res = call(text, f"https://bulwarkblack.com/{slug}/")
    if not res or not res.get("total") or not res.get("files"):
        noiocs += 1
        continue
    attached += 1
    if len(sample) < 6:
        sample.append((slug, res["total"], res.get("display", {})))
    if DRY:
        continue
    d = os.path.join(IOCS_DIR, slug)
    os.makedirs(d, exist_ok=True)
    for name, content in res["files"].items():
        open(os.path.join(d, name), "w", encoding="utf-8").write(str(content))
    iocdata = {
        "count": res["total"],
        "files": list(res["files"].keys()),
        "indicators": res.get("display", {}),
    }
    iocline = "iocs: '" + json.dumps(iocdata).replace("'", "''") + "'"
    new = f"---\n{fm.rstrip(chr(10))}\n{iocline}\n---\n{body}"
    open(path, "w", encoding="utf-8").write(new)

print(f"{'DRY ' if DRY else ''}files={len(files)} processed={processed} "
      f"attached={attached} no_iocs={noiocs} already={already} bad_fm={bad}")
for slug, total, disp in sample:
    cats = {c: len(v) for c, v in disp.items()}
    print(f"  {slug}: {total}  {cats}")
