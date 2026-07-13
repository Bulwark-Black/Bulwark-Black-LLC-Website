"""Generate a YARA rule from an extracted IOC map.

This produces an *indicator* rule (string + file-hash matches), not a
hand-written behavioral detection rule. When ``defanged=True`` the string
literals are defanged so the file is safe to distribute; the rule is then
non-functional by design and carries a header telling the analyst to refang
before scanning (hashes have no fangs, so they are emitted live either way).

Shared by the public web tool and (later) the article auto-attach pipeline.
"""
import re
from datetime import datetime, timezone
from typing import Dict, List, Optional

from vendor.ioc_parser import defang_text

# Categories that map to searchable string literals inside a file/memory.
_STRING_CATS = [
    "Domains", "Sub Domains", "URLs", "IP URL", "IPv4", "IPv6",
    "Email Addresses", "File Names", "Windows File Paths", "UNC Paths",
    "PDB Paths", "Named Pipes", "Mutex Names", "User-Agent Strings", "Registry",
]
# Hash categories -> YARA `hash` module function.
_HASH_CATS = {"md5": "md5", "sha1": "sha1", "sha256": "sha256"}

_MAX_STRING_LEN = 200


def _rule_name(source: Optional[str]) -> str:
    base = re.sub(r"[^a-zA-Z0-9]+", "_", (source or "indicators")).strip("_").lower()
    base = base or "indicators"
    if base[0].isdigit():
        base = "r_" + base
    return f"bulwark_{base}"[:96]


def _esc(value: str) -> str:
    """Escape a value for use inside a YARA double-quoted string literal."""
    return value.replace("\\", "\\\\").replace('"', '\\"')


def generate_yara(
    live_iocs: Dict[str, List[str]],
    source: Optional[str] = None,
    defanged: bool = False,
) -> Optional[str]:
    """Build a YARA rule string, or None when there is nothing to match on."""
    seen = set()
    strings: List[tuple] = []
    for category in _STRING_CATS:
        for value in live_iocs.get(category, []):
            out = defang_text(value) if defanged else value
            if not out or len(out) > _MAX_STRING_LEN or out in seen:
                continue
            seen.add(out)
            strings.append((category, out))

    hashes: List[tuple] = []
    for category, module in _HASH_CATS.items():
        for h in live_iocs.get(category, []):
            if re.fullmatch(r"[0-9a-fA-F]{32,64}", h):
                hashes.append((module, h.lower()))

    if not strings and not hashes:
        return None

    now = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    out: List[str] = []
    if hashes:
        out.append('import "hash"')
        out.append("")
    if defanged:
        out.append("// NOTE: indicators are DEFANGED for safe distribution.")
        out.append("// Refang ([.] -> . and hxxp -> http) before scanning.")
    out.append(f"rule {_rule_name(source)}")
    out.append("{")
    out.append("    meta:")
    out.append('        author = "Bulwark Black LLC"')
    if source:
        out.append(f'        source = "{_esc(source)[:200]}"')
    out.append('        description = "Auto-extracted indicators. Verify before use; not a behavioral detection rule."')
    out.append(f'        generated = "{now}"')
    out.append('        tlp = "TLP:CLEAR"')
    out.append(f'        indicator_count = "{len(strings) + len(hashes)}"')
    if strings:
        out.append("    strings:")
        for i, (category, value) in enumerate(strings):
            out.append(f'        $s{i} = "{_esc(value)}" ascii wide nocase  // {category}')
    out.append("    condition:")
    conditions: List[str] = []
    if strings:
        conditions.append("any of ($s*)")
    for module, h in hashes:
        conditions.append(f'hash.{module}(0, filesize) == "{h}"')
    out.append("        " + " or\n        ".join(conditions))
    out.append("}")
    return "\n".join(out) + "\n"
