"""Headless IOC analysis: extract, normalize, and produce live + defanged maps.

Thin wrapper over IOC-Citadel's vendored engine (vendor/ioc_parser.py). It
normalizes results so an article that already contains defanged indicators
(1.2.3[.]4, hxxp://evil) is refanged to a single canonical live value first and
therefore never double-defanged on the way back out.

Reused by both the public web tool (app.py) and, later, the article
auto-attach pipeline.
"""
from typing import Dict, List, Tuple

from sanitize import clean, clean_value
from vendor.ioc_parser import extract_iocs, defang_text, refang_text

# Rule bodies (YARA/Sigma/Snort rule text) that the parser can surface are not
# "indicators" and shouldn't land in a published indicator set.
_SKIP = {"Yara Rules", "Sigma Rules", "Snort/Suricata Rules", "ModSecurity Rules"}

# Fold the parser's defanged/variant categories back onto their canonical name so
# a live and a defanged form of the same indicator merge into one row.
_MERGE = {"Defanged URLs": "URLs", "IPv4:Port": "IPv4"}


def _canon(category: str) -> str:
    c = category.replace(" (defanged)", "").strip()
    return _MERGE.get(c, c)


def analyze(
    text: str,
) -> Tuple[Dict[str, List[str]], Dict[str, List[str]], List[List[int]]]:
    """Return (live_map, defanged_map, spans).

    ``live_map``/``defanged_map`` are ``{category: [sorted indicators]}`` (live
    values canonical/refanged; defanged derived from them so always
    single-defanged). ``spans`` is a merged, non-overlapping list of
    ``[start, end]`` character offsets into the ORIGINAL text, covering only the
    matches that survived into ``live_map`` (so highlights track the results and
    exclude filtered-out noise).
    """
    found, raw_spans = extract_iocs(text, collect_spans=True)

    live: Dict[str, set] = {}
    for category, items in found.items():
        if category.startswith("__error__") or category in _SKIP:
            continue
        canon = _canon(category)
        for item in items:
            value = refang_text(item).strip()
            if value:
                live.setdefault(canon, set()).add(value)

    live_map = clean({k: sorted(v) for k, v in sorted(live.items()) if v})
    defanged_map = {
        k: sorted({defang_text(x) for x in v}) for k, v in live_map.items()
    }

    # Keep only spans whose (canonical, cleaned) value made it into live_map.
    live_sets = {k: set(v) for k, v in live_map.items()}
    accepted: List[Tuple[int, int]] = []
    for start, end, category in raw_spans:
        if category.startswith("__error__") or category in _SKIP:
            continue
        canon = _canon(category)
        value = clean_value(canon, refang_text(text[start:end]).strip())
        if value is not None and value in live_sets.get(canon, ()):
            accepted.append((start, end))

    accepted.sort()
    merged: List[List[int]] = []
    for start, end in accepted:
        if merged and start <= merged[-1][1]:
            if end > merged[-1][1]:
                merged[-1][1] = end
        else:
            merged.append([start, end])

    return live_map, defanged_map, merged


def summarize(iocs: Dict[str, List[str]]) -> Tuple[int, Dict[str, int]]:
    """Return (total_count, {category: count})."""
    counts = {k: len(v) for k, v in iocs.items()}
    return sum(counts.values()), counts
