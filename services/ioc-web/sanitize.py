"""Conservative post-extraction cleanup for web-quality output.

The vendored regexes are tuned for pasting known-IOC blocks; on free-form
article prose they pick up trailing punctuation and the occasional false
positive (e.g. a sentence fragment tagged as an email). This trims wrapping
punctuation and drops values that fail a basic per-category sanity check.

It operates ONLY on the engine's output — the vendored patterns are untouched.
"""
import re
from typing import Dict, List

# Strip wrappers/quotes from the front; wrappers/quotes + sentence punctuation
# from the end. Leading '.' is preserved so dotfiles like ".env" survive.
_LEAD = " \t\r\n\"'`([{<"
_TRAIL = " \t\r\n\"'`)]}>.,;:!?"


def _trim(value: str) -> str:
    return value.lstrip(_LEAD).rstrip(_TRAIL)


def _ipv4(v: str) -> bool:
    parts = v.split(".")
    return len(parts) == 4 and all(p.isdigit() and 0 <= int(p) <= 255 for p in parts)


def _domain(v: str) -> bool:
    return bool(
        re.fullmatch(
            r"(?=.{1,253}$)([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}",
            v,
        )
    )


# Only the high-signal categories get a strict validator; everything else is
# trim-only so we never silently drop a category we don't model.
_VALIDATORS = {
    "IPv4": _ipv4,
    "md5": lambda v: bool(re.fullmatch(r"[0-9a-fA-F]{32}", v)),
    "sha1": lambda v: bool(re.fullmatch(r"[0-9a-fA-F]{40}", v)),
    "sha256": lambda v: bool(re.fullmatch(r"[0-9a-fA-F]{64}", v)),
    "sha512": lambda v: bool(re.fullmatch(r"[0-9a-fA-F]{128}", v)),
    "CVEs": lambda v: bool(re.fullmatch(r"CVE-\d{4}-\d{3,}", v, re.IGNORECASE)),
    "Email Addresses": lambda v: bool(re.fullmatch(r"[^@\s]+@[^@\s]+\.[A-Za-z]{2,}", v)),
    "Domains": _domain,
    "Sub Domains": _domain,
    "IPv6": lambda v: ":" in v and bool(re.fullmatch(r"[0-9A-Fa-f:]+", v)),
}


def clean(iocs: Dict[str, List[str]]) -> Dict[str, List[str]]:
    """Trim + validate each value; return a new map (empty categories dropped)."""
    out: Dict[str, List[str]] = {}
    for category, items in iocs.items():
        validator = _VALIDATORS.get(category)
        kept = set()
        for raw in items:
            value = _trim(raw)
            if not value:
                continue
            if validator and not validator(value):
                continue
            kept.add(value)
        if kept:
            out[category] = sorted(kept)
    return out
