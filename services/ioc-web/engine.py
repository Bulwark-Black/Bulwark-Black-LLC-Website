"""Headless IOC analysis - faithful to IOC-Citadel's engine.

Runs the vendored extract_iocs and returns EVERY category it matches, plus a
live and a defanged view built with the app's own refang/defang, and merged
match-offset spans for highlighting.

`tidy=False` (default) is exact fidelity: whatever IOC-Citadel matches, this
returns. `tidy=True` is an OPT-IN cleanup for the public tool (trim stray
punctuation, drop clear per-category false positives via sanitize.clean); it is
never the default and never used by the article auto-attach path unchanged.
"""
from typing import Dict, List, Tuple

from sanitize import clean, clean_value
from vendor.ioc_parser import (
    defang_ioc_map,
    extract_iocs,
    refang_ioc_map,
    refang_text,
)


def _merge(spans: List[Tuple[int, int]]) -> List[List[int]]:
    merged: List[List[int]] = []
    for start, end in sorted(spans):
        if merged and start <= merged[-1][1]:
            if end > merged[-1][1]:
                merged[-1][1] = end
        else:
            merged.append([start, end])
    return merged


def analyze(
    text: str, tidy: bool = False
) -> Tuple[Dict[str, List[str]], Dict[str, List[str]], List[List[int]]]:
    """Return (live_map, defanged_map, spans).

    Both maps carry every category ``extract_iocs`` produces (unless ``tidy``).
    ``live_map`` refangs values where the app knows how; ``defanged_map`` is
    derived from the live map so already-defanged input never double-defangs.
    ``spans`` are merged, non-overlapping ``[start, end]`` offsets into the
    original text for every (surviving) match, for highlighting.
    """
    found_raw, raw_spans = extract_iocs(text, collect_spans=True)
    found = {
        k: sorted(set(v))
        for k, v in found_raw.items()
        if not k.startswith("__error__") and v
    }

    live_map = refang_ioc_map(found)
    if tidy:
        live_map = clean(live_map)
    defanged_map = defang_ioc_map(live_map)

    if tidy:
        live_sets = {k: set(v) for k, v in live_map.items()}
        accepted = [
            (s, e)
            for (s, e, cat) in raw_spans
            if not cat.startswith("__error__")
            and clean_value(cat, refang_text(text[s:e]).strip()) in live_sets.get(cat, ())
        ]
    else:
        accepted = [
            (s, e) for (s, e, cat) in raw_spans if not cat.startswith("__error__")
        ]

    return live_map, defanged_map, _merge(accepted)


def summarize(iocs: Dict[str, List[str]]) -> Tuple[int, Dict[str, int]]:
    """Return (total_count, {category: count})."""
    counts = {k: len(v) for k, v in iocs.items()}
    return sum(counts.values()), counts
