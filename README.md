# RTB0 Website

Static marketing and documentation site for [RTB0](https://rtb0.com), built with Next.js and deployed to GitHub Pages.

## Stack

- **Next.js 15** (App Router, static export)
- **Tailwind CSS v4** with light/dark themes (`next-themes`)
- **next-intl** for English and Spanish (`/en/`, `/es/`)
- **GitHub Pages** via `gh-pages` branch

## Development

```bash
make install
make dev
```

Or with npm directly:

```bash
npm install
npm run dev
```

Open [http://localhost:3000/en/](http://localhost:3000/en/).

## Build

```bash
make build
```

Static output is written to `out/`. The root `public/index.html` redirects `/` to the preferred locale.

## Deployment

Pushes to `main` or `master` trigger [`.github/workflows/site-deploy.yml`](.github/workflows/site-deploy.yml), which builds the site and publishes `out/` to the `gh-pages` branch. Custom domain: `rtb0.com` (`public/CNAME`).

## Project structure

- `app/[locale]/` — pages (home, about, docs)
- `messages/` — UI copy (`en.json`, `es.json`)
- `content/docs/{locale}/` — markdown docs pages
- `components/` — layout and page components
- `public/` — static assets and root redirect
