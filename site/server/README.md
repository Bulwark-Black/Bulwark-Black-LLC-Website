# Newsletter capture service

Tiny standalone Node HTTP service that handles `/api/newsletter` POSTs.

- Always writes to Postgres (`newsletter_subscribers` table — schema in `src/lib/schema.sql`).
- Optionally pushes to a Resend audience if `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` are set.
- Listens on `127.0.0.1:3001`; Nginx proxies `/api/newsletter*` to it.

## Server install / update (run from project root)

```sh
./server/install.sh
```

## Required env (in `/home/ruraltech/.config/ruraltech.env`)

```env
DATABASE_URL=postgresql://ruraltech_app:...@127.0.0.1:5432/ruraltech
NEWSLETTER_PORT=3001
RESEND_API_KEY=re_xxx           # optional but recommended
RESEND_AUDIENCE_ID=xxx-xxx-xxx  # optional but recommended
```

## Manual checks

```sh
sudo systemctl status ruraltech-newsletter
curl http://127.0.0.1:3001/api/newsletter/health
sudo journalctl -u ruraltech-newsletter -f
```
