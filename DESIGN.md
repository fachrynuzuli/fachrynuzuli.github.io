# Design System — fachrynuzuli.github.io

This document defines the core design tokens, components, and aesthetic principles used across the Hub and its sub-brands.

## 1. Color Strategy
We use **OKLCH** for all color definitions to ensure perceptual uniformity and modern browser support.

### Hub (Dark Terminal)
| Role | Token | Value |
|------|-------|-------|
| Background | `--bg` | `oklch(0.11 0.008 70)` |
| Raised Surface | `--bg-raised` | `oklch(0.14 0.008 70)` |
| Primary Text | `--text` | `oklch(0.91 0.012 75)` |
| Muted Text | `--muted` | `oklch(0.48 0.012 65)` |
| Gold Accent | `--gold` | `oklch(0.74 0.10 75)` |
| Green Accent | `--green` | `oklch(0.70 0.12 160)` |

### Sub-Brand Accents
| Brand | Token | Value |
|-------|-------|-------|
| freebuilder.co | `--freebuilder` | `oklch(0.76 0.16 75)` |
| freeware.lab | `--freeware` | `oklch(0.82 0.28 155)` |
| freewriter.lab | `--freewriter` | `oklch(0.68 0.12 85)` |

## 2. Typography
| Scale | Token | Value |
|-------|-------|-------|
| Monospace | `--mono` | `JetBrains Mono` |
| Serif | `--serif` | `Fraunces` |
| Body Size | — | `13px` |
| Line Height | — | `1.6` |

## 3. Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Micro-adjustments |
| `--space-sm` | `8px` | Small gaps, padding |
| `--space-md` | `16px` | Standard padding, card gaps |
| `--space-lg` | `24px` | Section padding |
| `--space-xl` | `48px` | Major section breaks |
| `--space-2xl` | `72px` | Hero / Page breaks |

## 4. Interaction States
### Focus States
All interactive elements must provide clear visual feedback for keyboard navigation.
- **Token**: `--focus-ring: 2px solid var(--gold)`
- **Token**: `--focus-offset: 4px`

```css
a:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}
```

## 5. Components
### Directory Tree (Hub)
A semantic list structure using `nav > ul > li` with visual tree prefix characters marked as `aria-hidden`.

### Project Card
Standard container for works and repositories.
- **Border**: `1px solid var(--border)`
- **Hover**: `background: var(--bg-raised)`, `border-color: var(--border-hover)`

## 6. Motion & Transitions
| Token | Value | Usage |
|-------|-------|-------|
| `--t-fast` | `0.15s` | Hovers, simple color changes |
| `--t-base` | `0.25s` | Card lifts, button transitions |
| `--t-slow` | `0.35s` | View transitions, section reveals |
| `--t-reveal` | `0.5s` | Staggered hero animations |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Standard easing |
