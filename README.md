# fachrynuzuli.com

Personal website and AI-readable context dossier for **Fachry Nuzuli Kamal**, a product builder teaching non-technical people how to build in this economy.

## Structure

- `index.html` — Full-viewport interactive retro Macintosh hero stage + semantic scrollable dossier (`About`, `Journey`, `Proof`, `Writings`, `Resources`, `Connect`) with JSON-LD `Person` / `ProfilePage` schema.
- `llms.txt` & `llms-full.txt` — Machine-readable context files for AI agents and LLM crawlers.
- `notes/` & `content/notes/` — Markdown-compiled essays built via `npm run build:notes`.
- `prompts/` & `content/prompts/` — Copy-paste prompt library built via `npm run build:prompts`.
- `CNAME`, `robots.txt`, `sitemap.xml` — Custom domain and crawler discovery configuration for `fachrynuzuli.com`.

## Local Build

```bash
npm install
npm run build
```
