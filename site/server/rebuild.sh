#!/usr/bin/env bash
# Rebuild the static site from /srv/ruraltech-build and atomically swap it
# into /var/www/ruraltechandsupport.com. Invoked by the
# ruraltech-rebuild.service systemd unit, which is started by reviews.mjs
# after a review is approved through the email moderation flow.
#
# Mirrors the post-rsync half of deploy.sh, but runs entirely on the server
# (no source sync) since /srv/ruraltech-build already has the latest source
# from the most recent deploy.

set -euo pipefail

BUILD=/srv/ruraltech-build
WEB=/var/www/ruraltechandsupport.com
LOG=/var/log/ruraltech-rebuild.log

ts() { date -u +'%Y-%m-%dT%H:%M:%SZ'; }
say() { echo "[$(ts)] $*" | tee -a "$LOG"; }

say "rebuild start"

if [ ! -d "$BUILD" ]; then
  say "FATAL: build dir $BUILD missing"
  exit 1
fi

# Install deps only if lockfile newer than node_modules.
if ! sudo -u ruraltech bash -lc "cd $BUILD && [ -d node_modules ] && [ package-lock.json -ot node_modules ]"; then
  say "installing deps"
  sudo -u ruraltech bash -lc "cd $BUILD && npm install --no-audit --no-fund --silent" >>"$LOG" 2>&1
fi

say "running astro build"
sudo -u ruraltech bash -lc "cd $BUILD && npx astro build" >>"$LOG" 2>&1

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

if nginx -t >>"$LOG" 2>&1; then
  systemctl reload nginx
  say "rebuild ok, nginx reloaded"
else
  say "ERROR: nginx config test failed, leaving previous config running"
  exit 1
fi
