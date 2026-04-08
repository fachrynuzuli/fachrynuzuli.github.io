# PRD: fachrynuzuli.github.io — Personal Sitemap & Project Hub

## 1. Introduction / Overview

**fachrynuzuli.github.io** is a static personal website that serves as a **public sitemap for Fachry Nuzuli's projects, personal brand, and identity**. It is hosted on GitHub Pages and built with vanilla HTML/CSS/JS — no frameworks, no build tools.

The site consists of:
- A **central hub / landing page** (`index.html`) that acts as a directory of all of Fachry's public-facing work
- **Individual project pages** (currently `freebuilder-co.html` and `aryendbumi-co.html`) that each have their own distinct visual identity and function as standalone brand pages

**Problem this solves:** Fachry operates multiple projects and brands (freeware.lab, Freebuilder, Aryendbumi & Co., corporate work) across multiple platforms (X, Instagram, LinkedIn, Substack, Whop). There is no single canonical URL that ties them all together with proper navigation and context. This site becomes that single URL.

**The repository lives at:** https://github.com/fachrynuzuli/fachrynuzuli.github.io

---

## 2. Goals

1. **Deploy a working static site** at `fachrynuzuli.github.io` that loads `index.html` as the landing page
2. **Establish the hub → sub-page navigation pattern** so visitors can move seamlessly between the landing page and individual project pages
3. **Create a working `site-config.js`** so all dynamic links (CTAs, social links, metadata) resolve correctly across sub-pages
4. **Add a 404 page** so broken URLs get a branded, helpful error page
5. **Ensure all pages pass quality baseline**: mobile-responsive, Lighthouse > 80, loads under 2 seconds, all links/navigation functional
6. **Do not modify existing page content or design** — the HTML pages have been individually crafted and should remain untouched in this phase

---

## 3. User Stories

### US-1: The Social Media Follower
> As someone who follows Fachry on X/Instagram, I click the link in his bio and land on `fachrynuzuli.github.io`. Within 5 seconds I understand who he is, what he builds, and I can click through to his specific projects, content, or products.

### US-2: The Potential MVP Sprint Client
> As someone considering hiring Fachry for a Rapid MVP Sprint, I arrive at the hub, see the project card for "Rapid MVP Sprint" with a live status, and click through to the Freebuilder Studio page (`freebuilder-co.html`) where I can learn more and book a sprint.

### US-3: The B2B Ghostwriting Prospect
> As a digital transformation leader looking for LinkedIn ghostwriting, I navigate from the hub to the Aryendbumi & Co. page (`aryendbumi-co.html`) and find the services, process, and booking CTA.

### US-4: The Recruiter
> As a recruiter, I visit the site and quickly scan Fachry's corporate work (FMS Suite, Transport Digitization), side projects, tech stack, and professional background in the README section. I find his LinkedIn and contact info.

### US-5: The Lost Visitor
> As someone who lands on a broken URL (e.g., `fachrynuzuli.github.io/nonexistent`), I see a branded 404 page that tells me where I am and links me back to the hub.

---

## 4. Functional Requirements

### Navigation & Linking

| # | Requirement |
|---|-------------|
| FR-1 | The hub page (`index.html`) must include a **site-wide navigation header** consistent with the pattern used on sub-pages (`.site-nav`), linking to all project pages |
| FR-2 | Each project card in the hub's "projects" section must link to its corresponding sub-page where one exists (e.g., "Rapid MVP Sprint" → `freebuilder-co.html`, "freewriter.co" → `aryendbumi-co.html`) |
| FR-3 | External project links (e.g., social profiles, fachrynuzuli.com) must open in new tabs (`target="_blank"`) |
| FR-4 | The site-nav on sub-pages must include a link back to the hub (`index.html`) |
| FR-5 | All internal navigation links must work correctly when deployed to GitHub Pages |

### Site Configuration

| # | Requirement |
|---|-------------|
| FR-6 | Create a `site-config.js` file that provides real values for all `data-link` and `data-meta` attributes used across sub-pages |
| FR-7 | The config must include: social links (X, Instagram, LinkedIn, Substack), CTA links (book call, sprint booking, product pages), and metadata (year, location) |
| FR-8 | All `data-link` elements must resolve to working URLs or sensible placeholder anchors (e.g., `#contact` for booking links that don't have a Cal.com URL yet) |

### 404 Page

| # | Requirement |
|---|-------------|
| FR-9 | Create a `404.html` page that matches the hub's dark terminal aesthetic |
| FR-10 | The 404 page must include: a clear "page not found" message, a link back to the hub, and the site-wide navigation |
| FR-11 | GitHub Pages must be configured to serve `404.html` for missing routes (this is automatic for a file named `404.html` in the repo root) |

### SEO & Meta

| # | Requirement |
|---|-------------|
| FR-12 | `index.html` must include proper `<meta>` tags: description, Open Graph title/description/URL/type, and Twitter card |
| FR-13 | All pages must have a `<link rel="icon">` pointing to a favicon (create a simple one or use an emoji favicon) |
| FR-14 | `404.html` must include a `<meta name="robots" content="noindex">` tag |

### Performance & Quality

| # | Requirement |
|---|-------------|
| FR-15 | All pages must be mobile-responsive (already achieved — verify, don't break) |
| FR-16 | All pages must score > 80 on Lighthouse for Performance, Accessibility, Best Practices, and SEO |
| FR-17 | All pages must load in under 2 seconds on a standard connection |
| FR-18 | All interactive elements must have unique, descriptive `id` attributes for testability |

---

## 5. Non-Goals (Out of Scope for V1)

- ❌ **Modifying existing page content, copy, or visual design** — pages ship as they are
- ❌ **Setting up a custom domain** (`fachrynuzuli.com` is left for later)
- ❌ **Adding analytics** (Google Analytics, Plausible, etc.) — future enhancement
- ❌ **Building a shared CSS framework** — each page keeps its self-contained styles
- ❌ **Creating new project pages** beyond what already exists
- ❌ **Adding a blog or CMS** — pure static HTML for now
- ❌ **Refactoring inline CSS to external stylesheets** — works fine for 3–4 pages

---

## 6. Design Considerations

### Visual Design
- **No design changes to existing pages.** The three HTML pages are treated as pre-built artifacts.
- The **404 page** should match the hub's terminal aesthetic (dark bg, JetBrains Mono, gold/green accents).
- The **site-nav addition to `index.html`** should match the style pattern established in `freebuilder-co.html` and `aryendbumi-co.html` but adapted to the hub's dark terminal palette.

### Navigation Architecture
```
fachrynuzuli.github.io/
├── index.html              ← Hub / Landing Page (loads at root URL)
├── freebuilder-co.html     ← Freebuilder Studio brand page
├── aryendbumi-co.html      ← Aryendbumi & Co. brand page
├── 404.html                ← Custom 404 error page
└── site-config.js          ← Shared link/metadata configuration
```

### Site-Nav Pattern
The shared nav bar appears at the top of every page:
```
[ Hub ]  [ Freebuilder ]  [ Aryendbumi & Co. ]
```
- On `index.html`: "Hub" is active
- On `freebuilder-co.html`: "Freebuilder" is active
- On `aryendbumi-co.html`: "Aryendbumi & Co." is active

Refer to `.impeccable.md` for full design context and brand guidelines.

---

## 7. Technical Considerations

### GitHub Pages Deployment
- The repo is named `fachrynuzuli.github.io`, which means GitHub Pages **automatically deploys from the default branch** (typically `main`)
- No GitHub Actions workflow is needed — just push to `main` and the site is live
- `404.html` at the repo root is automatically served for missing routes by GitHub Pages
- Verify that the repo's GitHub Pages settings are enabled (Settings → Pages → Source: Deploy from a branch → `main` / `root`)

### `site-config.js` Implementation
- The existing sub-pages already reference this file via `<script src="site-config.js"></script>`
- The script must query `[data-link]` and `[data-meta]` attributes and inject real URLs/values
- Links that don't have real URLs yet should fall back gracefully (e.g., `#contact` anchor or `javascript:void(0)` with a tooltip)

### No Build System
- There is no bundler, no npm, no framework. All files are served as-is.
- Keep it this way. The simplicity is intentional and appropriate for 3–4 page static site.

### File Size Budget
- Each page is ~25–30KB (HTML + inline CSS + inline JS). This is excellent.
- Google Fonts are the main external dependency (~50–100KB per page). Acceptable.
- Total site weight should remain under 500KB across all pages.

---

## 8. Success Metrics

| Metric | Target | How to Verify |
|--------|--------|---------------|
| **Site loads at root URL** | `fachrynuzuli.github.io` serves `index.html` | Open URL in browser |
| **All internal navigation works** | Hub → Freebuilder, Hub → Aryendbumi, and back | Click every link |
| **All CTA links resolve** | `data-link` elements have real or graceful fallback URLs | Inspect every CTA |
| **404 page works** | `fachrynuzuli.github.io/nonexistent` shows branded 404 | Navigate to broken URL |
| **Mobile responsive** | All pages render correctly on 375px viewport | Test in DevTools |
| **Lighthouse Performance** | > 80 on all four categories, all pages | Run Lighthouse audit |
| **Load time** | < 2 seconds on 3G Fast / Cable | Lighthouse or WebPageTest |
| **No broken links** | Zero 404s or dead-end navigation | Manual link audit |

---

## 9. Open Questions

1. **Social link URLs:** Several `data-link` attributes reference `links.twitter`, `links.instagram`, `links.linkedin`, `links.email`, `links.bookCall`, `links.sprintCTA`, etc. Are these the correct URLs to use?
   - X/Twitter: `https://x.com/fachrynuzuli`
   - Instagram: `https://instagram.com/fachrynuzuli`
   - LinkedIn: `https://linkedin.com/in/fachrynuzuli`
   - Email: `mailto:???` (what email address?)
   - Book Call: `https://cal.com/???` or other booking URL?
   - Sprint CTA / Product CTAs: Whop links? Other URLs?

2. **Favicon:** Should we generate a simple emoji-based favicon (e.g., ⚡ or 🔨), create a minimal text-based one (`FN`), or do you have an existing favicon/logo asset?

3. **Hub project card linking:** The hub currently has 6 project cards. Which ones should link to sub-pages?
   - FMS Suite → `internal deployment` (no link, stays as-is)
   - Rapid MVP Sprint → `freebuilder-co.html` ← **proposed**
   - Prompt Files → `freebuilder-co.html#sprint` or separate URL?
   - freewriter.co → `aryendbumi-co.html` ← **proposed**
   - Transport Digitization Suite → `not public` (no link, stays as-is)
   - Freebuilder Content Engine → `https://x.com/fachrynuzuli` (stays as-is)

4. **Do you want the `.impeccable.md` Design Context appended to `.github/copilot-instructions.md`?** This would make it available to GitHub Copilot if you use it in the repo.
