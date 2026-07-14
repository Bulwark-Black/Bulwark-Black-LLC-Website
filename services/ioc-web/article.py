"""Path B: extract publishable indicators from a CTI article.

Stricter than the public tool: keep only HIGH-SIGNAL categories, fully refang
(so defanged article IOCs become real values that the benign filter can judge),
require domains to end in a real TLD (kills code fragments like
`document.documentElement.classList.add`), drop benign vendor domains + private/
example IPs, then return a LIVE map (for downloadable files) and a DEFANGED map
(for safe on-page display).
"""
import ipaddress
import os
import re
from typing import Dict, List, Tuple

from engine import analyze
from vendor.ioc_parser import defang_ioc_map

_CANON = {
    "IPv4 (defanged)": "IPv4",
    "IPv4:Port": "IPv4",
    "Domains (defanged [dot])": "Domains",
    "Domains (defanged (dot))": "Domains",
    "Domains (defanged (.))": "Domains",
    "Sub Domains": "Domains",
    "Defanged URLs": "URLs",
    "IP URL": "URLs",
}
_KEEP = {
    "IPv4", "CIDR", "Domains", "URLs", "Email Addresses",
    "md5", "sha1", "sha256", "sha512", "SS-Deep", "IMPHASH",
    "JARM", "JA3/JA3S", "JA4+", "CVEs",
    "Bitcoin Addresses", "Bitcoin Bech32", "Ethereum Addresses",
    "Monero Addresses", "Monero Integrated Addresses",
    "Dark Web", "Mutex Names",
}
_ORDER = [
    "IPv4", "CIDR", "Domains", "URLs", "Email Addresses",
    "md5", "sha1", "sha256", "sha512", "SS-Deep", "IMPHASH",
    "JARM", "JA3/JA3S", "JA4+", "CVEs",
    "Bitcoin Addresses", "Bitcoin Bech32", "Ethereum Addresses",
    "Monero Addresses", "Monero Integrated Addresses",
    "Dark Web", "Mutex Names",
]
_HOST_CATS = {"Domains", "URLs", "Email Addresses"}

# Common gTLDs + all ISO-3166 ccTLDs. A domain's last label must be one of these,
# which rejects code method chains (.add/.push/.classList/...) that the regex
# otherwise matches as domains.
_TLDS = set((
    "com net org io co info biz app dev xyz online site tech store club shop live me tv cc ws "
    "ai sh gg to ly ky vc pw su cloud email host press blog news media digital agency solutions "
    "systems services network works group world life world today space fun icu top vip pro name "
    "mobi asia jobs travel edu gov mil int post "
    "ac ad ae af ag ai al am ao aq ar as at au aw ax az ba bb bd be bf bg bh bi bj bm bn bo br bs "
    "bt bw by bz ca cd cf cg ch ci ck cl cm cn co cr cu cv cw cx cy cz de dj dk dm do dz ec ee eg "
    "er es et eu fi fj fk fm fo fr ga gd ge gf gg gh gi gl gm gn gp gq gr gs gt gu gw gy hk hm hn "
    "hr ht hu id ie il im in io iq ir is it je jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc "
    "li lk lr ls lt lu lv ly ma mc md me mg mh mk ml mm mn mo mp mq mr ms mt mu mv mw mx my mz na "
    "nc ne nf ng ni nl no np nr nu nz om pa pe pf pg ph pk pl pm pn pr ps pt pw py qa re ro rs ru "
    "rw sa sb sc sd se sg sh si sk sl sm sn so sr ss st sv sx sy sz tc td tf tg th tj tk tl tm tn "
    "to tr tt tv tw tz ua ug uk us uy uz va vc ve vg vi vn vu wf ws ye yt za zm zw"
).split())


def _refang(v: str) -> str:
    v = re.sub(r"[\[\(\{]\s*\.\s*[\]\)\}]", ".", v)
    v = re.sub(r"[\[\(\{]\s*dot\s*[\]\)\}]", ".", v, flags=re.IGNORECASE)
    v = re.sub(r"[\[\(\{]\s*at\s*[\]\)\}]", "@", v, flags=re.IGNORECASE)
    v = re.sub(r"\bhxxps\b", "https", v, flags=re.IGNORECASE)
    v = re.sub(r"\bhxxp\b", "http", v, flags=re.IGNORECASE)
    v = re.sub(r"\bfxps\b", "ftps", v, flags=re.IGNORECASE)
    v = re.sub(r"\bfxp\b", "ftp", v, flags=re.IGNORECASE)
    v = v.replace("[://]", "://").replace("[:]//", "://").replace("[:]", ":")
    return v.strip().strip(".,;")


def _load_benign() -> set:
    path = os.path.join(os.path.dirname(__file__), "benign_domains.txt")
    out = set()
    try:
        for line in open(path, encoding="utf-8"):
            line = line.split("#", 1)[0].strip().lower()
            if line:
                out.add(line)
    except OSError:
        pass
    return out


_BENIGN = _load_benign()
_BENIGN_IPS = {
    "8.8.8.8", "8.8.4.4", "1.1.1.1", "1.0.0.1", "9.9.9.9", "149.112.112.112",
    "208.67.222.222", "208.67.220.220", "4.2.2.2",
}


def _registrable(host: str) -> str:
    parts = host.strip(".").split(".")
    return ".".join(parts[-2:]) if len(parts) >= 2 else host


def _global_ip(text: str):
    """True=keep (global, non-benign IP); False=drop; None=not an IP."""
    try:
        ip = ipaddress.ip_address(text.split(":")[0].strip("[]"))
    except ValueError:
        return None
    return ip.is_global and str(ip) not in _BENIGN_IPS


def _valid_domain(host: str) -> bool:
    host = host.strip(".").lower()
    if not host or "." not in host:
        return False
    labels = host.split(".")
    if labels[-1] not in _TLDS:
        return False
    return all(re.fullmatch(r"[a-z0-9_-]{1,63}", lab) for lab in labels)


def _host_of(category: str, value: str) -> str:
    if category == "URLs":
        m = re.match(r"^(?:[a-zA-Z][a-zA-Z0-9+.\-]*://)?([^/:\s]+)", value)
        return (m.group(1) if m else "").lower().strip("[]")
    if category == "Email Addresses":
        return value.rsplit("@", 1)[-1].lower() if "@" in value else ""
    return value.lower()  # Domains


def _resolve(canon: str, value: str):
    """Refang + reclassify + filter. Returns (final_category, value) or None."""
    v = _refang(value)
    if not v:
        return None

    if canon in ("IPv4", "CIDR") or (canon == "Domains" and _global_ip(v) is not None):
        # network literal (possibly a refanged defanged-IP that landed in Domains)
        if "/" in v:
            try:
                return ("CIDR", v) if ipaddress.ip_network(v, strict=False).is_global else None
            except ValueError:
                return None
        ip = _global_ip(v)
        bare = v.split(":")[0].strip("[]")
        return ("IPv4", bare) if ip is True else None

    if canon in _HOST_CATS:
        host = _host_of(canon, v)
        ipcheck = _global_ip(host)
        if ipcheck is not None:  # host is an IP
            return ("URLs" if canon == "URLs" else "IPv4", v if canon == "URLs" else host) if ipcheck else None
        if not _valid_domain(host):
            return None
        if host in _BENIGN or _registrable(host) in _BENIGN:
            return None
        return (canon, v)

    return (canon, v)  # hashes, CVEs, crypto, onion, mutex, fingerprints


def extract_article(text: str) -> Tuple[Dict[str, List[str]], Dict[str, List[str]]]:
    """Return (live_map, defanged_map) of publishable indicators, ordered."""
    live, _defanged, _spans = analyze(text, tidy=True)

    buckets: Dict[str, set] = {}
    for category, items in live.items():
        canon = _CANON.get(category, category)
        if canon not in _KEEP:
            continue
        for value in items:
            resolved = _resolve(canon, value)
            if resolved:
                buckets.setdefault(resolved[0], set()).add(resolved[1])

    live_map = {c: sorted(buckets[c]) for c in _ORDER if buckets.get(c)}
    defanged_map = defang_ioc_map(live_map)
    return live_map, defanged_map
