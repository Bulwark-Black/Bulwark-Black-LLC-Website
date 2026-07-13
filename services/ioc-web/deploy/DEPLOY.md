# Deploy: ioc-web (public IOC extractor)

Stateless FastAPI extraction service. Mirrors the WordPress shim pattern:
uvicorn on loopback, nginx proxies a rate-limited public path, systemd keeps it up.

- **Box:** `deploy@138.68.30.174` (shared Rural Tech droplet)
- **Source on box:** `/srv/bulwark-ioc/` (own venv at `.venv/`)
- **Port:** `127.0.0.1:3020` (shim is 3010)
- **Public path:** `https://bulwarkblack.com/api/ioc/` → `/extract`, `/health`
- **Limits:** nginx `rate=30r/m burst=10 nodelay` (429 over), `client_max_body_size 2m`; app caps text at 1 MB

## First-time setup (done 2026-07-13)

```bash
# 1. python venv support (droplet had no ensurepip)
sudo apt-get install -y python3.12-venv

# 2. sync source + build venv
sudo mkdir -p /srv/bulwark-ioc && sudo chown deploy:deploy /srv/bulwark-ioc
rsync -a --delete --exclude .venv --exclude __pycache__ services/ioc-web/ deploy@138.68.30.174:/srv/bulwark-ioc/
cd /srv/bulwark-ioc && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt

# 3. service
sudo cp deploy/bulwark-ioc.service /etc/systemd/system/
sudo systemctl daemon-reload && sudo systemctl enable --now bulwark-ioc.service

# 4. nginx (rate-limit zone in http{} via conf.d, location on the prod vhost)
sudo cp deploy/nginx-ratelimit.conf /etc/nginx/conf.d/bulwark-ioc.conf
#   inject deploy/nginx-location.conf before `location / {` in
#   /etc/nginx/sites-available/bulwarkblack.com, then:
sudo nginx -t && sudo systemctl reload nginx
```

## Update (redeploy code)

```bash
rsync -a --delete --exclude .venv --exclude __pycache__ services/ioc-web/ deploy@138.68.30.174:/srv/bulwark-ioc/
ssh deploy@138.68.30.174 'cd /srv/bulwark-ioc && .venv/bin/pip install -q -r requirements.txt && sudo systemctl restart bulwark-ioc.service'
```

## Verify

```bash
curl -s https://bulwarkblack.com/api/ioc/health
curl -s -X POST https://bulwarkblack.com/api/ioc/extract -H 'Content-Type: application/json' -d '{"text":"8.8.8.8"}'
```
