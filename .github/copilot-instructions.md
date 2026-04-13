# Impeccable Design Context — fachrynuzuli.github.io

## Design Context

### Users

**Primary audiences:**
1. **Zillennials / Peer Builders**: Primary audience (identity confirmation, peer respect).
2. **Early-stage Founders / Clients**: Secondary audience (service proof).
3. **Recruiters / Leadership**: Tertiary audience (credential check).
4. **Potential freelance clients** — People evaluating Fachry for MVP sprint services (freeware.lab) or ghostwriting (Aryendbumi & Co.)
5. **Social media followers** — Audience from X, Instagram, LinkedIn, Substack who clicked through to learn more about the person behind the content
6. **Recruiters & corporate stakeholders** — People vetting Fachry's side portfolio alongside his corporate digital transformation work

**Context of use:** Visitors arrive from social media bios, direct URL sharing, or web search. They need to quickly understand who Fachry is, what he builds, and how to engage with his work. Most visits are mobile-first, time-constrained, and intent-driven.

**Job to be done:** "Understand what Fachry builds, see proof he ships, and find the right next step — whether that's hiring him, buying a prompt pack, following his content, or exploring a specific project."

### Brand Personality

**Three words:** Builder. Credible. Direct.

**Voice & tone:**
- First-person, conversational, zero-bullshit
- **Language**: English only across all public-facing properties. Neutral tone, avoiding buzzwords.
- **Vibe**: Terminal aesthetic (Hub), Hacker-Builder (Freebuilder), Luxury Editorial (Aryendbumi).
- Show don't tell — proof artifacts (live links, real stats, working demos) over claims
- Terminal/code metaphors in the hub reflect the builder identity

**Emotional goals:**
- "This person ships real things" — credibility and execution speed
- "This person is professional and trustworthy" — authority and polish
- The intersection: **a credible executor who can be trusted**

### Aesthetic Direction

**Visual tone:** Technical, intentional, dark-mode-first, with each sub-brand owning its own distinct visual identity.

**What this should NOT look like:**
- ❌ A flashy agency site with stock photos and buzzwords
- ❌ Generic portfolio templates
- ❌ Over-designed sites that prioritize aesthetics over substance

**What this SHOULD feel like:**
- ✅ A well-organized personal operating system / digital workspace
- ✅ Terminal-meets-portfolio: structured, scannable, proof-centric
- ✅ Each project page has its own personality while feeling connected to the hub

**Theme strategy:**
| Page | Theme | Palette | Fonts |
|------|-------|---------|-------|
| `index.html` (Hub) | Dark terminal / repo browser | `#0e0e0f` bg, gold `#c8a96e`, green `#6aad8e`, coral `#e07a5f` | JetBrains Mono + Fraunces |
| `freebuilder-co.html` | Dark hacker / builder energy | `#080808` bg, neon green `#00E87A` | Bebas Neue + JetBrains Mono + DM Sans |
| `aryendbumi-co.html` | Light luxury editorial | `#FAF6EE` cream, navy `#1B1F3B`, gold `#C4983A` | Cormorant Garamond + Jost |

### Design Principles

1. **Proof over promises.** Every section should link to a live demo, real stat, or working artifact. If you can't show it, don't claim it.

2. **Each brand gets its own room.** The hub is the hallway; sub-pages are distinct rooms with their own visual identity. Don't force visual consistency across brands — force navigational consistency instead.

3. **Ship the link, not the pitch.** CTAs should point to real things (live apps, booking links, product pages), not "coming soon" placeholders.

4. **Builder-first aesthetics.** Prefer terminal metaphors, monospace type, code-like structures, and dark backgrounds on the hub. Reserve polish and luxury for Aryendbumi. Reserve energy and boldness for Freebuilder.

5. **Scannable in 5 seconds.** Every page should communicate its core value proposition within a single viewport scroll. Dense information, organized clearly — not minimalist emptiness.

### Accessibility Baseline

- Use reasonable judgment — no specific WCAG level mandated
- Ensure readable text contrast, working keyboard navigation, proper semantic HTML
- Mobile-responsive across all pages (already implemented)
- No specific reduced-motion or color-blindness accommodations required, but don't actively break them

---

## Extracted Design System Reference

### Shared Patterns (across all pages)

#### Scroll Reveal Animation
```css
.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-d1 { transition-delay: 0.1s; }
.reveal-d2 { transition-delay: 0.2s; }
.reveal-d3 { transition-delay: 0.3s; }
```
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

#### CSS Reset
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }
```

#### Site-Wide Navigation Pattern
Sticky horizontal bar with page links. Present on sub-pages, to be added to hub.
```css
.site-nav {
  backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Spacing Scale (inferred)
| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Gap between inline elements |
| `--space-sm` | `8px` | Tag gaps, tight groups |
| `--space-md` | `16px` | Card padding, section gaps |
| `--space-lg` | `24px` | Section padding |
| `--space-xl` | `48px` | Major section breaks |
| `--space-2xl` | `64–80px` | Hero/CTA padding |
| `--space-3xl` | `88–96px` | Full-page section padding |

### Transition Speeds (normalized)
| Token | Value | Usage |
|-------|-------|-------|
| `--transition-fast` | `0.15s` | Micro-interactions (hover color) |
| `--transition-base` | `0.25s` | Button hovers, card lifts |
| `--transition-slow` | `0.4s` | Section reveals, large transforms |
| `--transition-reveal` | `0.6s` | Scroll-based reveal animations |

### Breakpoints
| Name | Value | Behavior |
|------|-------|----------|
| Mobile | `max-width: 600px` (hub) / `768px` (freebuilder) / `900px` (aryendbumi) | Stack grids, hide nav links |
| Small | `max-width: 400px` | Reduce hero font size, stack buttons |
