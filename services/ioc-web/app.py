"""Bulwark Black public IOC extractor - thin, stateless FastAPI service.

Reuses only the pure-Python extraction engine vendored from IOC-Citadel. No
auth, no database, no enrichment, no VirusTotal - extraction only. Sits behind
nginx (rate-limited, CORS-locked) exactly like the WordPress shim.

Run: uvicorn app:app --host 127.0.0.1 --port 3020
"""
import os
from typing import Optional

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from engine import analyze, summarize
from serialize import to_grouped_txt, to_csv, to_json
from yara_gen import generate_yara

# 1 MiB default cap on request text (bytes). nginx also caps the body.
MAX_INPUT_BYTES = int(os.environ.get("IOC_MAX_INPUT_BYTES", str(1024 * 1024)))
ALLOWED_ORIGINS = [
    o.strip()
    for o in os.environ.get(
        "IOC_ALLOWED_ORIGINS",
        "https://bulwarkblack.com,https://www.bulwarkblack.com",
    ).split(",")
    if o.strip()
]

app = FastAPI(
    title="Bulwark Black IOC Extractor",
    version="1.0",
    docs_url=None,
    redoc_url=None,
    openapi_url=None,
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["Content-Type"],
)


class ExtractRequest(BaseModel):
    # Hard char ceiling as a first guard; the byte check below is the real cap.
    text: str = Field(default="", max_length=4_000_000)
    # Optional label (article title/URL) recorded in the YARA/JSON metadata.
    source: Optional[str] = Field(default=None, max_length=300)


@app.get("/health")
def health():
    return {"ok": True, "service": "ioc-web"}


@app.post("/extract")
def extract(req: ExtractRequest):
    text = req.text or ""
    if len(text.encode("utf-8")) > MAX_INPUT_BYTES:
        raise HTTPException(status_code=413, detail="Input too large (max 1 MB).")
    if not text.strip():
        raise HTTPException(status_code=400, detail="No text provided.")

    live, defanged = analyze(text)
    total, counts = summarize(live)
    source = (req.source or "").strip() or None

    def bundle(iocs, is_defanged):
        return {
            "txt": to_grouped_txt(iocs, is_defanged),
            "csv": to_csv(iocs),
            "json": to_json(iocs, is_defanged, source=source),
            "yara": generate_yara(live, source=source, defanged=is_defanged) or "",
        }

    return {
        "total": total,
        "counts": counts,
        # Defanged is the default view; live is available for tooling.
        "iocs": {"defanged": defanged, "live": live},
        "exports": {
            "defanged": bundle(defanged, True),
            "live": bundle(live, False),
        },
    }
