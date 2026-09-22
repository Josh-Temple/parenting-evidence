# Site

Parenting Evidence の公開サイト実装です。

## Architecture

- Astro static site
- research Markdown in `/reviews` remains the source of truth
- site pages read those files at build time
- no database, user account, or runtime API in the MVP

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

Static output is written to `dist/`.

## Vercel

When deployment quota is available:

1. Import `Josh-Temple/parenting-evidence` from GitHub.
2. Keep the repository root as the Vercel Root Directory.
3. Framework preset: Astro (auto-detected).
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Do not add environment variables for the MVP.

Git pushes will deploy after the Git integration is enabled, so connect Vercel only when automatic deployments are intended.

## Content model

The public site renders the existing research assets instead of copying review prose into a second content tree.

Only lightweight display metadata (domain and age bands) is maintained in `site/src/lib/reviews.ts`. Review conclusions, evidence tables, and search records remain under `/reviews`.
