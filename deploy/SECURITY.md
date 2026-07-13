# Web security headers

`nginx-security-headers.conf` is deployed to the droplet as
`/etc/nginx/snippets/bulwark-security.conf` and `include`d in the
`bulwarkblack.com` vhost at **two** places:

1. the `server { ... }` level (covers document + API responses), and
2. inside the static-asset `location ~* \.(png|...|js)$` block — because that
   block sets its own `add_header` (Cache-Control), and nginx does **not** merge
   inherited `add_header`s into a block that has any of its own.

Staging (`staging.bulwarkblack.com`) includes it at the server level too.

## What it sets

- `Strict-Transport-Security: max-age=31536000` — force HTTPS (apex only; not
  `includeSubDomains`, to stay clear of the M365 mail subdomains).
- `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`,
  `Referrer-Policy: strict-origin-when-cross-origin`,
  `Permissions-Policy` (geolocation/mic/camera/payment/usb denied).
- `Content-Security-Policy` — strict on active content, permissive on the passive
  content the CTI articles legitimately embed:
  - `default-src 'self'`, `object-src 'none'`, `base-uri 'self'`,
    `frame-ancestors 'self'`, `form-action 'self'`, `connect-src 'self'`.
  - `script-src 'self' 'unsafe-inline'` — required: Astro inlines its module
    scripts, the font-swap uses an inline `onload`, and hashes would go stale on
    every rebuild (incl. OpenClaw auto-posts). No external script sources allowed.
  - `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` — inline
    styles from migrated WordPress content + Google Fonts CSS.
  - `img-src 'self' data: https:`, `frame-src 'self' https:`,
    `media-src 'self' https:` — article citations embed external images/iframes.
  - `font-src 'self' https://fonts.gstatic.com data:`.

## To change

Edit `nginx-security-headers.conf`, then:

```bash
scp deploy/nginx-security-headers.conf deploy@138.68.30.174:/tmp/
ssh deploy@138.68.30.174 'sudo cp /tmp/nginx-security-headers.conf /etc/nginx/snippets/bulwark-security.conf && sudo nginx -t && sudo systemctl reload nginx'
```

## Verify

```bash
curl -sI https://bulwarkblack.com/ | grep -iE 'content-security-policy|strict-transport|x-content-type|x-frame|referrer|permissions'
```
