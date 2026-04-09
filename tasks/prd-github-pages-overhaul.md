# PRD: GitHub Pages Overhaul — fachrynuzuli.github.io

## Introduction / Overview

Overhaul the `fachrynuzuli` repository into a **conversion-focused storefront** hosted on **GitHub Pages** at `fachrynuzuli.github.io`. This replaces the existing `fachrynuzuli.com/store/` — the primary purpose is to make it easy for visitors to browse and buy.

The site consists of two independently-styled pages unified under a shared navigation shell:

1. **Freebuilder Studio** (`index.html`) — the dark/brutalist AI-builder storefront. MVP sprint service, prompt packs, and free runbook. This is the home page.
2. **Aryendbumi & Co.** (`aryendbumi-co.html`) — the refined strategic-communications storefront (renamed from Forge & Co.). LinkedIn ghostwriting and corporate workshops.

The project will use **vanilla HTML/CSS/JS** (no framework), a **GitHub Actions workflow** for automated deployment, and carry forward each page's existing design identity while elevating visual quality per the [frontend-design skill guidelines](file:///Users/fnk/Repository/fachrynuzuli/.agents/skills/frontend-design/SKILL.md).

---

## Goals

1. **Rebrand** — Rename "Forge & Co." to "Aryendbumi & Co." across all copy, titles, and metadata.
2. **Unified Navigation** — Add a shared, minimal nav bar / header that lets users switch between the two storefronts without feeling like they left the site.
3. **Design Elevation** — Apply the frontend-design skill to enhance each page's aesthetics (typography, micro-animations, spatial composition, background textures) while respecting their distinct identities.
4. **GitHub Pages Deployment** — Initialize git, set up a GitHub Actions CI/CD workflow deploying from `main` to `fachrynuzuli.github.io`.
5. **SEO Baseline** — Proper `<title>`, `<meta description>`, Open Graph tags, semantic HTML on every page.

---

## User Stories

- *As a visitor*, I can land on `fachrynuzuli.github.io` and immediately see the Freebuilder Studio page as the default home page.
- *As a visitor*, I can navigate to the Aryendbumi & Co. page from a shared nav element.
- *As the site owner*, I push to `main` and the site auto-deploys without manual steps.
- *As the site owner*, each page retains its independent brand identity (dark/green for Freebuilder, cream/navy/gold for Aryendbumi).

---

## Functional Requirements

1. **Rename**: All references to "Forge & Co." become "Aryendbumi & Co." (HTML, title, nav, footer, banner, meta tags).
2. **File rename**: `forge-co-store.html` → `aryendbumi-co.html`.
3. **`index.html`**: Rename `freebuilder-store.html` → `index.html` (makes Freebuilder the home page at `fachrynuzuli.github.io`).  
4. **Shared Navigation**: A lightweight nav component at the top of both pages enabling cross-page switching.
5. **Banner Links**: Update cross-links (Freebuilder banner → `aryendbumi-co.html`, Aryendbumi banner → `index.html`).
6. **GitHub Actions Workflow**: `.github/workflows/deploy.yml` using the official `actions/deploy-pages` action.
7. **Centralized Link Config**: A shared `site-config.js` file where all external URLs (CTA, social, checkout) are defined once. Both pages load this file and auto-bind links via `[data-link]` attributes — editing any link is a one-file change.
8. **Mobile Responsiveness**: Optimize both pages for mobile-first with hamburger nav on small screens, ≥44px touch targets, fluid `clamp()` typography, and single-column grid collapse.
9. **Design Enhancements** (per frontend-design skill):
   - Refined typography pairing (distinct fonts, no generic fallbacks).
   - Micro-animations (hover states, scroll reveals, staggered entry).
   - Background textures / atmospheric effects matching each page's theme.
   - Spatial polish (breathing room, asymmetric accents, grid-breaking elements).

---

## Non-Goals (Out of Scope)

- No additional pages (resume, portfolio gallery) — to be done separately.
- No framework migration — staying vanilla HTML/CSS/JS.
- No CMS or dynamic backend.
- No custom domain setup (using `fachrynuzuli.github.io` directly).

---

## Technical Considerations

- **Deployment source**: GitHub Actions → GitHub Pages (not branch-based deploy).
- **Repository name**: Must be `fachrynuzuli` (matches the existing repo name and GitHub username).
- **No build step**: Static files deployed as-is, so no bundler required.
- **Cross-page consistency**: Shared CSS variables for nav component only; each page keeps its own design system.

---

## Success Metrics

- Site live at `fachrynuzuli.github.io` after pushing to `main`.
- Both pages load with distinct, elevated designs.
- Navigation between pages works seamlessly.
- All "Forge & Co." references replaced with "Aryendbumi & Co."

---

## Open Questions

- What URL should the "Book a Call" / CTA buttons link to? (currently `#`)
- Social media links — update to real profiles? (currently `#`)
