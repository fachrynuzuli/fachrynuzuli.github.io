# Design System: fachrynuzuli.com

## Aesthetic Direction

- **Physical Scene**: A sun-aged 1984 Macintosh resting in a golden-hour mountain wildflower meadow at dusk, pairing warm tactile monochrome computing with unhurried editorial clarity.
- **Color Strategy**: Full palette extracted directly from the sunset mountain meadow photograph, expressed in OKLCH with warm-tinted neutrals (never pure `#000` or `#fff`).

## Core Tokens

| Role | Token | OKLCH Value |
| :--- | :--- | :--- |
| Sunset Paper (Sheet / Body BG) | `--paper` | `oklch(0.955 0.015 80)` |
| Warm Raised Surface | `--paper-raised` | `oklch(0.975 0.012 82)` |
| CRT Phosphor Cream | `--crt-bg` | `oklch(0.89 0.024 85)` |
| Espresso Ink (Primary Text) | `--ink` | `oklch(0.20 0.022 50)` |
| Umber Secondary Text | `--ink-muted` | `oklch(0.45 0.028 55)` |
| Subtle Hairline Rule | `--rule` | `oklch(0.83 0.024 72)` |
| Sunset Amber Accent | `--amber` | `oklch(0.62 0.165 52)` |
| Burnt Sienna Hover / Emphasis | `--sienna` | `oklch(0.50 0.155 42)` |
| Dusk Indigo Accent | `--dusk` | `oklch(0.34 0.065 258)` |

## Typography

- **Display**: `Bricolage Grotesque` (expressive optical humanist grotesque for section headings and dossier titles)
- **Editorial Body**: `Source Serif 4` (high-legibility book-grade serif for essays, theses, and biography)
- **CRT & Technical Mono**: `JetBrains Mono` (classic 1-bit Macintosh CRT interface, Roman numerals, timelines, metrics, and code)

## Key Mechanics

- **Full-Bleed Interactive Macintosh Stage (`100dvh`)**: Exact container-query (`cqi`) and aspect-ratio locked overlay aligning the live HTML CRT display inside the photographed Macintosh bezel on desktop and mobile.
- **Classic Mac Boot & 1-Bit Hover Inversion**: Single smooth CRT power-on flash and horizontal progress bar (skipped under `prefers-reduced-motion: reduce`), followed by crisp monochrome Roman-numeral menu rows (`i` through `vi`) with solid espresso-ink inverted hover bars.
- **Native `<dialog>` Macintosh Reader Window**: Clicking any CRT menu item opens a classic striped-titlebar Macintosh modal window (`showModal()`, `closedby="any"`, pointer-outside fallback, `overscroll-behavior: contain`) populated from the single canonical semantic `<section>` in `<main>`.
- **Zero-Hidden Semantic Dossier**: All six sections live directly below the hero stage in plain, scrollable semantic HTML for both readers and AI crawlers.
