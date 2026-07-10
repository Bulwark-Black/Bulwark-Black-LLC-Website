#!/usr/bin/env bash
# deploy.sh — manual deploy to ruraltechandsupport.com
#
# Usage:  ./deploy.sh
#
# What it does:
#   1. rsyncs source to /tmp/ruraltech-src on the server (skips node_modules, dist, .astro)
#   2. mirrors source into /srv/ruraltech-build (owned by ruraltech)
#   3. runs `npx astro build` on the server
#   4. swaps dist/ into /var/www/ruraltechandsupport.com (atomic-ish)
#   5. reloads nginx

set -euo pipefail

KEY="${RTAS_SSH_KEY:-$HOME/.ssh/ruraltechandsupport}"
HOST="${RTAS_HOST:-deploy@138.68.30.174}"
SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ ! -f "$KEY" ]]; then
  echo "✗ SSH key not found at $KEY (set RTAS_SSH_KEY to override)" >&2
  exit 1
fi

echo "▸ rsync source → server"
rsync -az --delete \
  --exclude node_modules --exclude dist --exclude .astro --exclude .DS_Store --exclude .git \
  -e "ssh -i $KEY" \
  "$SRC_DIR/" "$HOST:/tmp/ruraltech-src/"

echo "▸ build + swap on server"
ssh -i "$KEY" "$HOST" 'sudo bash -s' <<'REMOTE'
set -euo pipefail
BUILD=/srv/ruraltech-build
WEB=/var/www/ruraltechandsupport.com

rsync -a --delete \
  --exclude node_modules --exclude dist --exclude .astro \
  /tmp/ruraltech-src/ "$BUILD/"
chown -R ruraltech:ruraltech "$BUILD"

# Install only on lockfile change
if ! sudo -u ruraltech bash -lc "cd $BUILD && [ -d node_modules ] && [ package-lock.json -ot node_modules ]"; then
  sudo -u ruraltech bash -lc "cd $BUILD && npm install --no-audit --no-fund --silent" 2>&1 | tail -3
fi

sudo -u ruraltech bash -lc "cd $BUILD && npx astro build" 2>&1 | tail -5

# Atomic-ish swap: build into staging dir, rename
STAGING="${WEB}.new"
rm -rf "$STAGING"
mkdir -p "$STAGING"
cp -a "$BUILD/dist/." "$STAGING/"
chown -R www-data:www-data "$STAGING"

OLD="${WEB}.old"
rm -rf "$OLD"
[ -d "$WEB" ] && mv "$WEB" "$OLD"
mv "$STAGING" "$WEB"
rm -rf "$OLD"

nginx -t >/dev/null && systemctl reload nginx
echo "✓ deployed"
REMOTE

echo
echo "✓ live at https://ruraltechandsupport.com"
