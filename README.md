# fachrynuzuli.com

Personal website and AI-readable context dossier for **Fachry Nuzuli Kamal**: product builder teaching non-technical people how to build in this economy.

- **Primary site (Cloudflare Pages):** https://fachrynuzuli.com/
- **Legacy GitHub Pages URL:** https://fachrynuzuli.github.io/ (automatically redirects all paths and hashes to `https://fachrynuzuli.com/` while keeping project sites like `/fls-dashboard` live)
- **AI context endpoints:** https://fachrynuzuli.com/llms.txt and https://fachrynuzuli.com/llms-full.txt

## Structure

- `index.html`: Single-viewport interactive 1984 Macintosh meadow hero stage + fixed-size CRT reader popup (`About`, `Journey`, `Works`, `Writings`, `Resources`, `Connect`) with static crawlable semantic HTML and JSON-LD `Person` / `ProfilePage` schema.
- `llms.txt` & `llms-full.txt`: Machine-readable context files for AI agents and LLM crawlers.
- `notes/` & `content/notes/`: Markdown-compiled essays built via `npm run build:notes`.
- `prompts/` & `content/prompts/`: Copy-paste prompt library built via `npm run build:prompts`.
- `scripts/build-dist.js` & `_headers`: Whitelisted Cloudflare Pages static build (`npm run build:cf`) with security and caching headers.
- `robots.txt` & `sitemap.xml`: Search engine and AI crawler discovery files.

## Local Build

```bash
npm install
npm run build
npm run build:cf
```
