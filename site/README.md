# Rural Tech and Support — site

Astro 5 + TypeScript + Tailwind. Static-first with a few SSR API routes for forms, served by Nginx + a small Node service behind systemd.

## Local dev

```sh
npm install
cp .env.example .env   # set DATABASE_URL
npm run dev
```

## Build

```sh
npm run build:fast
```

Output:
- `dist/client/` — static HTML/CSS/JS served by Nginx
- `dist/server/entry.mjs` — Node server for `/api/*` routes (port 3000)

## Deploy (manual)

```sh
rsync -az --delete dist/client/ deploy@138.68.30.174:/var/www/ruraltechandsupport.com/
rsync -az --delete dist/server/ deploy@138.68.30.174:/var/www/ruraltechandsupport.com/server/
ssh deploy@138.68.30.174 'sudo systemctl restart ruraltech'
```

## DB init

```sh
ssh deploy@138.68.30.174 'sudo -u postgres psql ruraltech' < src/lib/schema.sql
```
