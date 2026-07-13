"""String exporters (no file I/O) for an IOC map: grouped text, CSV, JSON.

The desktop app's file_operations write to disk; the web service needs strings
to return in JSON and offer as downloads, so these mirror that logic in memory.
"""
import csv
import io
import json
from datetime import datetime, timezone
from typing import Dict, List, Optional


def _stamp() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def to_grouped_txt(iocs: Dict[str, List[str]], defanged: bool) -> str:
    header = "DEFANGED - refang ([.]->. , hxxp->http) before use" if defanged else "LIVE indicators"
    lines = ["# Bulwark Black - extracted indicators", f"# {header}", ""]
    for category, items in iocs.items():
        lines.append(f"## {category} ({len(items)})")
        lines.extend(items)
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def to_csv(iocs: Dict[str, List[str]]) -> str:
    buf = io.StringIO()
    writer = csv.writer(buf)
    writer.writerow(["category", "indicator"])
    for category, items in iocs.items():
        for indicator in items:
            writer.writerow([category, indicator])
    return buf.getvalue()


def to_json(iocs: Dict[str, List[str]], defanged: bool, source: Optional[str] = None) -> str:
    total = sum(len(v) for v in iocs.values())
    payload = {
        "metadata": {
            "generator": "Bulwark Black IOC Extractor",
            "source": source,
            "fang": "defanged" if defanged else "live",
            "exported_at": _stamp(),
            "total": total,
            "categories": len(iocs),
        },
        "iocs": iocs,
    }
    return json.dumps(payload, indent=2, ensure_ascii=False)
