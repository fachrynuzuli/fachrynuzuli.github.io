# Audit — PRD vs Design System vs Brand Context
## fachrynuzuli.github.io

**Audited by:** Co-self review  
**Date:** April 2026  
**Files reviewed:** `prd-sitemap-hub.md`, `.impeccable.md`, `fn_developer_handover.md`, `business_final.json`, `persona_final.json`

---

## Verdict

The PRD and design system are well-structured documents. The technical architecture is sound. The design system is coherent and consistent with the brand aesthetic. However, there are **3 blocking errors** that must be resolved before shipping, **2 open questions that are unresolved blockers**, and **2 soft conflicts** that need Fachry's explicit call.

Nothing here requires a rebuild. All fixes are targeted.

---

## Section 1 — What's Aligned

These areas are consistent across PRD, design system, and brand context. No action needed.

| Area | PRD | Design System | Status |
|------|-----|---------------|--------|
| Hub dark terminal aesthetic | `#0e0e0f` bg, gold, green, coral | Matches exactly | ✅ Aligned |
| Font pairing for hub | JetBrains Mono + Fraunces | Matches exactly | ✅ Aligned |
| Sub-page distinct visual identities | Freebuilder = dark hacker, Aryendbumi = light luxury | Defined with correct palettes | ✅ Aligned |
| No framework / no build system | Explicit non-goal | Not mentioned (no conflict) | ✅ Aligned |
| Mobile-first requirement | FR-15, verified don't break | Breakpoints defined at 600/768/900px | ✅ Aligned |
| Scroll reveal animation | Not specified | CSS + JS pattern fully documented | ✅ Aligned |
| "Proof over promises" design principle | "Show don't tell" in User Stories | Principle 1 in design system | ✅ Aligned |
| Navigation architecture (hub + sub-pages) | FR-1 through FR-5 | `.site-nav` CSS defined | ✅ Aligned |
| 404 page styling | FR-9: match hub terminal aesthetic | Hub palette documented | ✅ Aligned |
| File size budget | ~25–30KB per page | Google Fonts as only external dep | ✅ Aligned |
| Transition speeds | Not specified | Fully tokenized in design system | ✅ Aligned |

---

## Section 2 — Blocking Errors

These are errors in the PRD that will ship wrong behavior or wrong routing if not fixed. Not optional.

---

### BLOCK-1 — Rapid MVP Sprint is routed to the wrong page

**Location:** PRD Section 3 (US-2), Section 4 (FR-2), Section 9 (Open Question 3)

**What the PRD says:**
> "Rapid MVP Sprint" → `freebuilder-co.html`

**Why this is wrong:**

Rapid MVP Sprint is a `freeware.lab` service. freeware.lab is the web development agency. `freebuilder-co.html` is the Freebuilder education brand page. These are two separate divisions with separate purposes and separate audiences.

A potential MVP Sprint client clicking through to an education brand page will be confused and likely bounce. The wrong product is being sold to them at the wrong destination.

**Correct routing:**

Rapid MVP Sprint should link to `freeware.lab` (the actual agency brand). If a `freeware-lab.html` sub-page doesn't exist yet, two options:

- Option A: Point it to the external `freeware.lab` URL (opens new tab)
- Option B: Create a `freeware-lab.html` sub-page (requires new page — check with Fachry, as this is a non-goal for V1)

For V1, Option A is cleaner. Use `target="_blank"` per FR-3.

**Action:** Fix FR-2 routing. Rapid MVP Sprint → `freeware.lab` (external). Do not route it to `freebuilder-co.html`.

---

### BLOCK-2 — freewriter.co is mapped to aryendbumi-co.html, but Aryendbumi is an internal brand

**Location:** PRD Section 3 (US-3), Section 4 (FR-2), Section 9 (Open Question 3)

**What the PRD says:**
> "freewriter.co" → `aryendbumi-co.html`

**The conflict:**

From `business_final.json`:
```
"visibility": "internal_only",
"visibility_note": "Not public-facing while founder is employed."
```

Aryendbumi is the internal holding company, named after Fachry's daughter. It is explicitly not public-facing. `aryendbumi-co.html` should not be a publicly navigable destination from the hub while Fachry is employed at his current corporation.

The ghostwriting service is publicly branded as `freewriter.co` — not as Aryendbumi & Co.

**However:** The sub-page `aryendbumi-co.html` apparently already exists in the repo and was built. This means a decision was made somewhere to expose it. This needs Fachry's explicit call before shipping.

**Two possible resolutions:**

- Option A (safe): Remove `aryendbumi-co.html` from the public nav. Route ghostwriting traffic directly to `freewriter.co` external URL instead. `aryendbumi-co.html` stays in the repo but is not linked from the hub.
- Option B (Fachry's call): Fachry has decided Aryendbumi & Co. is acceptable as a public-facing brand for the ghostwriting service. In that case, the page stays but the `business_final.json` visibility flag needs to be updated to reflect this decision.

**Action:** Do not ship `aryendbumi-co.html` in the public nav until Fachry explicitly confirms Option A or Option B. This is a brand identity decision, not a dev decision.

---

### BLOCK-3 — "courses" appears in the file tree

**Location:** `index.html` — `/repository` section, `freebuilder/` tree item

**What it says:**
> `freebuilder/ — AI education brand · prompt files · courses`

**Why this is wrong:**

From brand rules (confirmed in handover doc Fix #1): The word "course" is banned. It triggers negative audience associations. The correct term is "playbooks."

**Fix:**
> `freebuilder/ — AI education brand · prompt files · playbooks`

**Action:** One-word change. Non-negotiable.

---

## Section 3 — Unresolved Blockers (Open Questions)

These are Open Questions from the PRD that remain unanswered. The developer correctly flagged them. `site-config.js` cannot be completed without Fachry providing these values. Do not use placeholder `#` anchors for commercial CTAs — a dead-end booking link actively loses clients.

| # | Blocker | What's needed |
|---|---------|---------------|
| OQ-1a | Email address | Fachry to provide the correct contact email for `mailto:` |
| OQ-1b | Cal.com booking URL | Fachry to confirm if Cal.com is set up, and provide the link |
| OQ-1c | Sprint CTA URL | Whop link or landing page URL for the Rapid MVP Sprint booking |
| OQ-1d | Prompt Files URL | Whop link for Prompt Files (currently "in progress" — confirm if live yet) |
| OQ-2 | Favicon | Fachry to decide: emoji (⚡), text-based `fn`, or export from existing logo asset |

**Recommendation on favicon:** Export the dark logo variant (`fn_logo_dark.png`) as a 32×32 favicon. The `fn` mark is clean, already exists, and consistent with the brand. No need to design something new.

---

## Section 4 — Soft Conflicts (Need Fachry's Call)

These are not errors per se — they are places where the design system or PRD makes an assumption that conflicts with existing brand strategy. Fachry needs to decide which version is correct.

---

### SOFT-1 — Language rule conflict

**In `.impeccable.md`:**
> "Mixed language (English + Bahasa Indonesia) in Freebuilder brand"

**In `business_final.json` and `persona_final.json`:**
> "English only across all platforms and formats. SEA cadence retained as texture."

These directly contradict each other. The design system implies Bahasa Indonesia text may appear in the Freebuilder sub-page. The content strategy says English only, everywhere.

**Fachry's call:** Which is correct for `freebuilder-co.html`? If the page already has Bahasa Indonesia copy, does it stay or get translated?

---

### SOFT-2 — Audience priority weighting

**In `.impeccable.md`:**
> "Primary audiences (all equally weighted): Potential freelance clients / Social media followers / Recruiters & corporate stakeholders"

**In `business_final.json`:**
> The primary target audience is Zillennials in second-tier Asian cities — social followers and potential buyers. Recruiters are not mentioned as a primary audience.

This matters because equal weighting affects what the page optimizes for first. If recruiters are equally weighted, the hub leans more conservative and credential-forward. If the SEA Zillennial is primary, the hub leans more builder-energy and accessible.

The current hub design is already correct for the builder/follower audience. The equal-weighting claim in the design system is a misrepresentation, but it hasn't caused any actual design errors — yet.

**Fachry's call:** Confirm the audience hierarchy so the design system is accurate for future development.

---

## Section 5 — PRD vs Handover Doc Conflict

The PRD Non-Goals include:
> "❌ Modifying existing page content, copy, or visual design — pages ship as they are"

The developer handover doc (`fn_developer_handover.md`) has 5 confirmed copy fixes for `index.html` that were agreed upon. These include changes to the `whoami` line, hero description, career trajectory paragraph, file tree copy, and a proof sentence for FMS Suite.

These two documents give the developer conflicting instructions. The copy fixes are confirmed and should ship. The PRD non-goal was written to protect design — not to prevent agreed copy corrections.

**Resolution:** The PRD non-goal should be updated to:
> "❌ Modifying visual design or page structure — but confirmed copy fixes from the handover doc (Fixes #1–5) are in scope and must be applied"

---

## Section 6 — Minor Observations (Not Blocking)

These are observations that don't block shipping but are worth tracking.

| # | Observation | Recommendation |
|---|-------------|----------------|
| M-1 | PRD Section 9 Open Question 3 proposes "Prompt Files → `freebuilder-co.html#sprint`" | The `#sprint` anchor may not exist on the page. Verify the anchor ID before adding. |
| M-2 | PRD Open Question 4 asks about adding `.impeccable.md` to `.github/copilot-instructions.md` | Good practice. Do it. Low effort, useful for AI-assisted edits later. |
| M-3 | FR-18 requires unique descriptive `id` attributes on all interactive elements | Worth auditing against the existing `index.html` before declaring it done. |
| M-4 | `site-config.js` implementation approach (injecting via `data-link` / `data-meta` attributes) is solid. The graceful fallback to `#contact` is acceptable for non-commercial links only. | Do not use `#contact` fallback for Sprint CTA or Book Call — these are commercial links. Leave them blank or disable the element until real URLs are provided. |

---

## Summary — What Needs to Happen Before Shipping

**Fachry must answer:**
1. Email address for `mailto:` in `site-config.js`
2. Cal.com or booking URL
3. Sprint CTA and Prompt Files Whop URLs (confirm if live)
4. Favicon decision (recommendation: use `fn_logo_dark.png` export)
5. **Aryendbumi visibility** — public or not? (BLOCK-2)
6. Language rule for `freebuilder-co.html` — English only or mixed? (SOFT-1)

**Developer must fix:**
1. Rapid MVP Sprint routing: → `freeware.lab` external, not `freebuilder-co.html` (BLOCK-1)
2. `courses` → `playbooks` in file tree (BLOCK-3)
3. Apply the 5 copy fixes from `fn_developer_handover.md` — they are in scope despite the PRD non-goal wording (PRD/Handover conflict)
4. Confirm `#sprint` anchor exists before linking Prompt Files to it (M-1)
5. Update PRD non-goal wording to reflect that copy fixes are in scope

**Both can proceed in parallel:**
- Developer can complete all technical work (navigation, 404, SEO meta, site-config skeleton) while Fachry answers the blocking questions
- `site-config.js` ships with real social URLs + `#contact` fallbacks for unresolved CTAs, then gets updated when Fachry provides the commercial links
