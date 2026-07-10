#!/usr/bin/env bash
# Install / update the standalone capture services on the prod server.
#   - newsletter capture (port 3001)
#   - reviews capture    (port 3002)
#   - forms capture      (port 3003)  -- applications, contact, capability-statement
# Run from project root:  ./server/install.sh

set -euo pipefail

KEY="${RTAS_SSH_KEY:-$HOME/.ssh/ruraltechandsupport}"
HOST="${RTAS_HOST:-deploy@138.68.30.174}"
SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "▸ rsync server/ → /tmp/ruraltech-api-src"
rsync -az --delete \
  --exclude node_modules --exclude .DS_Store \
  -e "ssh -i $KEY" \
  "$SRC_DIR/server/" "$HOST:/tmp/ruraltech-api-src/"

echo "▸ install + (re)start services"
ssh -i "$KEY" "$HOST" 'sudo bash -s' <<'REMOTE'
set -euo pipefail

APIDIR=/srv/ruraltech-api
ENVF=/home/ruraltech/.config/ruraltech.env

# Stage code under ruraltech ownership
mkdir -p "$APIDIR"
rsync -a --delete /tmp/ruraltech-api-src/ "$APIDIR/"
chown -R ruraltech:ruraltech "$APIDIR"

# Install runtime deps if package-lock changed
sudo -u ruraltech bash -lc "cd $APIDIR && [ -d node_modules ] || npm install --omit=dev --no-audit --no-fund --silent"
sudo -u ruraltech bash -lc "cd $APIDIR && npm install --omit=dev --no-audit --no-fund --silent" 2>&1 | tail -3

# Apply the schema (idempotent).  Prefer the build copy if present.
SCHEMA_BUILD=/srv/ruraltech-build/src/lib/schema.sql
if [ -f "$SCHEMA_BUILD" ]; then
  sudo -u postgres psql -d ruraltech -f "$SCHEMA_BUILD" >/dev/null
else
  sudo -u postgres psql -d ruraltech <<'SQL'
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id         BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  email      TEXT NOT NULL UNIQUE,
  source     TEXT,
  source_ip  INET
);
CREATE TABLE IF NOT EXISTS reviews (
  id            BIGSERIAL PRIMARY KEY,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  display_name  TEXT NOT NULL,
  location      TEXT,
  relationship  TEXT,
  rating        SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  body          TEXT NOT NULL,
  email         TEXT NOT NULL,
  status        TEXT NOT NULL DEFAULT 'pending'
                  CHECK (status IN ('pending','published','rejected')),
  published_at  TIMESTAMPTZ,
  source_ip     INET,
  user_agent    TEXT
);
CREATE INDEX IF NOT EXISTS idx_reviews_published ON reviews (published_at DESC)
  WHERE status = 'published';
CREATE TABLE IF NOT EXISTS applications (
  id            BIGSERIAL PRIMARY KEY,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT,
  location      TEXT,
  contact_pref  TEXT,
  lane          TEXT,
  situation     TEXT NOT NULL,
  current_state TEXT,
  outcome       TEXT,
  timeline      TEXT,
  budget        TEXT,
  source        TEXT,
  notes         TEXT,
  status        TEXT NOT NULL DEFAULT 'new'
                  CHECK (status IN ('new','contacted','engaged','closed','declined')),
  source_ip     INET,
  user_agent    TEXT
);
CREATE INDEX IF NOT EXISTS idx_applications_created ON applications (created_at DESC);
CREATE TABLE IF NOT EXISTS contacts (
  id            BIGSERIAL PRIMARY KEY,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  organization  TEXT,
  message       TEXT NOT NULL,
  status        TEXT NOT NULL DEFAULT 'new'
                  CHECK (status IN ('new','replied','closed')),
  source_ip     INET,
  user_agent    TEXT
);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts (created_at DESC);
CREATE TABLE IF NOT EXISTS capability_requests (
  id            BIGSERIAL PRIMARY KEY,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  full_name     TEXT NOT NULL,
  email         TEXT NOT NULL,
  organization  TEXT,
  agency        TEXT,
  naics         TEXT,
  message       TEXT,
  status        TEXT NOT NULL DEFAULT 'new'
                  CHECK (status IN ('new','sent','closed')),
  source_ip     INET,
  user_agent    TEXT
);
CREATE INDEX IF NOT EXISTS idx_capability_created ON capability_requests (created_at DESC);
SQL
fi

# Idempotent migrations on already-existing tables.
sudo -u postgres psql -d ruraltech <<'SQL' >/dev/null
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS moderated_at TIMESTAMPTZ;
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS moderated_by TEXT;
SQL

# Grant the app role read/write on the capture tables (idempotent; ignore if role missing).
sudo -u postgres psql -d ruraltech <<'SQL' >/dev/null 2>&1 || true
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'ruraltech_app') THEN
    EXECUTE 'GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE reviews              TO ruraltech_app';
    EXECUTE 'GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE applications         TO ruraltech_app';
    EXECUTE 'GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE contacts             TO ruraltech_app';
    EXECUTE 'GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE capability_requests  TO ruraltech_app';
    EXECUTE 'GRANT USAGE, SELECT ON SEQUENCE reviews_id_seq              TO ruraltech_app';
    EXECUTE 'GRANT USAGE, SELECT ON SEQUENCE applications_id_seq         TO ruraltech_app';
    EXECUTE 'GRANT USAGE, SELECT ON SEQUENCE contacts_id_seq             TO ruraltech_app';
    EXECUTE 'GRANT USAGE, SELECT ON SEQUENCE capability_requests_id_seq  TO ruraltech_app';
  END IF;
END$$;
SQL

# Default ports / addresses to ENV file if missing (does not overwrite existing values)
grep -q '^NEWSLETTER_PORT=' "$ENVF" || echo 'NEWSLETTER_PORT=3001' >> "$ENVF"
grep -q '^REVIEWS_PORT='    "$ENVF" || echo 'REVIEWS_PORT=3002' >> "$ENVF"
grep -q '^FORMS_PORT='      "$ENVF" || echo 'FORMS_PORT=3003' >> "$ENVF"
grep -q '^REVIEWS_NOTIFY_TO='   "$ENVF" || echo 'REVIEWS_NOTIFY_TO=support@bulwarkblack.com' >> "$ENVF"
grep -q '^REVIEWS_NOTIFY_FROM=' "$ENVF" || echo 'REVIEWS_NOTIFY_FROM=reviews@bulwarkblack.com' >> "$ENVF"
grep -q '^FORMS_NOTIFY_TO='   "$ENVF" || echo 'FORMS_NOTIFY_TO=support@bulwarkblack.com' >> "$ENVF"
grep -q '^FORMS_NOTIFY_FROM=' "$ENVF" || echo 'FORMS_NOTIFY_FROM=forms@bulwarkblack.com' >> "$ENVF"
grep -q '^PUBLIC_BASE_URL='   "$ENVF" || echo 'PUBLIC_BASE_URL=https://ruraltechandsupport.com' >> "$ENVF"
grep -q '^REVIEWS_MOD_SECRET=' "$ENVF" || echo "REVIEWS_MOD_SECRET=$(openssl rand -hex 32)" >> "$ENVF"
chown ruraltech:ruraltech "$ENVF"
chmod 600 "$ENVF"

# Rebuild service: starts on demand from reviews.mjs after a review is approved.
install -m 0755 /tmp/ruraltech-api-src/rebuild.sh /srv/ruraltech-api/rebuild.sh

cat >/etc/systemd/system/ruraltech-rebuild.service <<'UNIT'
[Unit]
Description=Rural Tech and Support — on-demand site rebuild (after review approval)

[Service]
Type=oneshot
User=root
Group=root
ExecStart=/usr/bin/bash /srv/ruraltech-api/rebuild.sh
TimeoutStartSec=300

[Install]
WantedBy=multi-user.target
UNIT

# Sudoers drop-in so the ruraltech user can start exactly that one unit.
cat >/etc/sudoers.d/ruraltech-rebuild <<'SUDO'
ruraltech ALL=(root) NOPASSWD: /usr/bin/systemctl start ruraltech-rebuild.service
SUDO
chmod 0440 /etc/sudoers.d/ruraltech-rebuild
visudo -cf /etc/sudoers.d/ruraltech-rebuild >/dev/null

# Log file for the rebuild service, owned by root.
touch /var/log/ruraltech-rebuild.log
chmod 0644 /var/log/ruraltech-rebuild.log

write_unit() {
  local name="$1" desc="$2" exec_path="$3"
  cat >/etc/systemd/system/${name}.service <<UNIT
[Unit]
Description=${desc}
After=network.target postgresql.service

[Service]
Type=simple
User=ruraltech
Group=ruraltech
WorkingDirectory=/srv/ruraltech-api
EnvironmentFile=/home/ruraltech/.config/ruraltech.env
ExecStart=/usr/bin/node ${exec_path}
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=read-only
ReadWritePaths=/srv/ruraltech-api

[Install]
WantedBy=multi-user.target
UNIT
}

write_unit ruraltech-newsletter "Rural Tech and Support — newsletter capture service" /srv/ruraltech-api/newsletter.mjs
write_unit ruraltech-reviews    "Rural Tech and Support — reviews capture service"    /srv/ruraltech-api/reviews.mjs
write_unit ruraltech-forms      "Rural Tech and Support — forms capture service"      /srv/ruraltech-api/forms.mjs

systemctl daemon-reload
systemctl enable ruraltech-newsletter ruraltech-reviews ruraltech-forms >/dev/null
systemctl restart ruraltech-newsletter
systemctl restart ruraltech-reviews
systemctl restart ruraltech-forms
sleep 2
echo "--- newsletter ---"
systemctl --no-pager --full status ruraltech-newsletter | head -8
echo "--- reviews ---"
systemctl --no-pager --full status ruraltech-reviews | head -8
echo "--- forms ---"
systemctl --no-pager --full status ruraltech-forms | head -8

# Nginx: ensure /api/newsletter + /api/reviews are proxied
NCONF=/etc/nginx/sites-available/ruraltechandsupport.com
python3 - "$NCONF" <<'PY'
import sys, pathlib
p = pathlib.Path(sys.argv[1])
src = p.read_text()
changed = False

def block(path, port):
    return f"""
    location {path} {{
        proxy_pass http://127.0.0.1:{port};
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 10s;
    }}
"""

needles = [
    ("location /api/newsletter",          block("/api/newsletter",          3001)),
    ("location /api/reviews",             block("/api/reviews",             3002)),
    ("location /api/applications",        block("/api/applications",        3003)),
    ("location /api/contact",             block("/api/contact",             3003)),
    ("location /api/capability-statement",block("/api/capability-statement",3003)),
]

anchor = "    location ~* \\.(?:css|js|woff2?|ttf|eot|svg|png|jpg|jpeg|gif|ico|webp|avif)$"

for needle, snippet in needles:
    if needle in src:
        continue
    if anchor in src:
        src = src.replace(anchor, snippet + "\n" + anchor)
        changed = True

if changed:
    p.write_text(src)
PY
nginx -t && systemctl reload nginx

# Smoke tests
echo "--- HEALTH ---"
curl -sS http://127.0.0.1:3001/api/newsletter/health || true; echo
curl -sS http://127.0.0.1:3002/api/reviews/health    || true; echo
curl -sS http://127.0.0.1:3003/api/forms/health      || true; echo
echo "--- LISTENERS ---"
ss -tlnp | grep -E '300[123]' || echo "service(s) not listening"
REMOTE

echo
echo "✓ services installed"
echo "  newsletter: /api/newsletter           → port 3001"
echo "  reviews:    /api/reviews              → port 3002"
echo "  forms:      /api/applications         → port 3003"
echo "              /api/contact              → port 3003"
echo "              /api/capability-statement → port 3003"
echo
echo "  To enable admin email notifications for new reviews, ensure these are set on the server:"
echo "    /home/ruraltech/.config/ruraltech.env"
echo "      RESEND_API_KEY=..."
echo "      REVIEWS_NOTIFY_FROM=reviews@bulwarkblack.com   # must be a Resend-verified sender"
echo "      REVIEWS_NOTIFY_TO=support@bulwarkblack.com"
echo "    then: sudo systemctl restart ruraltech-reviews"
