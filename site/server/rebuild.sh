#!/usr/bin/env bash
# Bulwark Black — on-demand static rebuild, triggered by the Openclaw shim
# (via `systemctl start bulwark-rebuild.service`, which runs this as root).
# Builds the Astro site from /srv/bulwark-build and swaps dist/ into the nginx
# web root, PRESERVING /wp-content (images + thumbs live there, not in the build).
set -uo pipefail

BUILD=/srv/bulwark-build
WEB=/var/www/staging.bulwarkblack.com
LOG=/var/log/bulwark-rebuild.log
LOCK=/tmp/bulwark-rebuild.lock

exec >>"$LOG" 2>&1
echo "=== rebuild start $(date -u +%FT%TZ) ==="

# One rebuild at a time; a trigger during a build is a no-op (the running build
# will already pick up any content written before it started).
exec 9>"$LOCK"
if ! flock -n 9; then echo "already running, skipping"; exit 0; fi

if ! sudo -u deploy bash -lc "cd $BUILD && NODE_OPTIONS=--max-old-space-size=1400 npx astro build"; then
  echo "!!! BUILD FAILED — web root left unchanged"
  exit 1
fi

# Sync the fresh build into the live web root; never delete /wp-content.
rsync -a --delete --exclude '/wp-content/' "$BUILD/dist/" "$WEB/"
echo "=== rebuild done  $(date -u +%FT%TZ) ==="
