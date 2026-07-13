# Vendored engine

`ioc_parser.py` and `patterns.py` are vendored verbatim (no modifications) from
**IOC-Citadel** by Bulwark Black LLC (https://github.com/AlbertL7/IOC-Citadel).

Only the pure-Python extraction subset is copied here — the regex IOC patterns
and the extract/defang/refang functions. None of the desktop app's Tkinter GUI,
SQLite history, enrichment providers, or VirusTotal integration is included.

To refresh after upstream changes, re-copy these two files from
`ioc_extractor/` in that repo.
