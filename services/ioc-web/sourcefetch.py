"""Best-effort raw fetch of a source article's text, for Path B IOC extraction.

CTI reports carry a full IOC appendix that our summaries condense away, so we
extract from the original source when we can reach it. SSRF-guarded (public
http/https hosts only), strips scripts/nav/chrome so indicators come from the
report prose. Returns None on any failure -> caller falls back to the summary.
"""
import ipaddress
import re
import socket
import urllib.request
from urllib.parse import urlparse

_UA = "Mozilla/5.0 (compatible; BulwarkBlackIOCBot/1.0; +https://bulwarkblack.com/)"
_DROP = re.compile(
    r"(?is)<(script|style|noscript|nav|footer|header|svg|form|template)\b[^>]*>.*?</\1>"
)


def _all_public(host: str) -> bool:
    try:
        for res in socket.getaddrinfo(host, None):
            if not ipaddress.ip_address(res[4][0]).is_global:
                return False
        return True
    except Exception:
        return False


def fetch_text(url: str, max_bytes: int = 3_000_000, timeout: int = 12):
    """Return the source page's visible text, or None if it can't be fetched."""
    try:
        p = urlparse(url)
        if p.scheme not in ("http", "https") or not p.hostname:
            return None
        if not _all_public(p.hostname):
            return None
        req = urllib.request.Request(
            url, headers={"User-Agent": _UA, "Accept": "text/html,application/xhtml+xml"}
        )
        with urllib.request.urlopen(req, timeout=timeout) as r:
            ct = r.headers.get("Content-Type", "").lower()
            if ct and "html" not in ct and "text" not in ct:
                return None
            raw = r.read(max_bytes)
        html = raw.decode("utf-8", "ignore")
        html = _DROP.sub(" ", html)
        text = re.sub(r"<[^>]+>", " ", html)
        text = re.sub(r"\s+", " ", text).strip()
        return text or None
    except Exception:
        return None
