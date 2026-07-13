"""Headless IOC analysis - faithful to IOC-Citadel's engine.

Runs the vendored extract_iocs over the text and returns EVERY category it
matches (no dropping, no category merging, no value validation), plus a live and
a defanged view built with the app's own refang/defang, and merged match-offset
spans for highlighting.

Fidelity to the desktop app is the contract here: whatever IOC-Citadel matches,
this returns. Noise filtering for the article auto-attach pipeline (benign-domain
allowlist, etc.) belongs there, NOT in this shared extractor.
"""
from typing import Dict, List, Tuple

from vendor.ioc_parser import extract_iocs, defang_ioc_map, refang_ioc_map


def analyze(
    text: str,
) -> Tuple[Dict[str, List[str]], Dict[str, List[str]], List[List[int]]]:
    """Return (live_map, defanged_map, spans).

    Both maps carry every category ``extract_iocs`` produces. ``live_map`` refangs
    values where the app knows how; ``defanged_map`` is derived from the live map
    so already-defanged input never double-defangs. ``spans`` is a merged,
    non-overlapping list of ``[start, end]`` offsets into the original text for
    every match, used for highlighting.
    """
    found_raw, raw_spans = extract_iocs(text, collect_spans=True)
    found = {
        k: sorted(set(v))
        for k, v in found_raw.items()
        if not k.startswith("__error__") and v
    }

    live_map = refang_ioc_map(found)
    defanged_map = defang_ioc_map(live_map)

    # Highlight every match (drop only the error sentinels); merge overlaps.
    accepted = sorted(
        (s, e) for (s, e, cat) in raw_spans if not cat.startswith("__error__")
    )
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
