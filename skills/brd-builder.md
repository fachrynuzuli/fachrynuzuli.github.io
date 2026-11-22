---
name: brd-builder
description: "Create, update, extend, or add addenda to Business Requirement Documents (BRDs) for new projects, features, systems, or departments. Use when the user says things like 'create a BRD', 'draft a BRD for [system]', 'write requirements for [feature]', 'help me interview for a new BRD', or asks to grill stakeholders for project requirements with the end goal of producing a BRD. Also use when the user wants a structured, styled requirements document that separates BRD-level business content from optional PRD/technical appendix detail. Do not use for general project management questions, PRD-only or technical-spec-only requests with no BRD involved, or document formatting requests unrelated to business requirements."
license: MIT
---

# BRD Builder

## Why this skill exists

BRDs commonly fail in one of two directions: either they're structurally
disciplined but visually plain, missing a coherent design system and user
story layer — or they're visually polished and technically detailed but blur
business-level requirements together with PRD-grade implementation detail,
making it unclear what the User is actually approving. Neither is good.

This skill fixes both by encoding the structure and the interview into the
agent's behavior, so the only real work left per project is the interview —
not re-deriving what sections belong in a BRD and what belongs in a PRD.

This is a two-phase skill. **Do not skip from phase 1 to phase 2** — a BRD
generated without the interview will be structurally complete but factually
empty (TBDs everywhere), and a BRD generated without referencing the content
schema will drift back into the old problems.

## Phase 1 — Interview (grill the user for content)

Read `references/content-schema.md` in full before starting. It contains the
canonical 16-section skeleton (Section A = BRD-proper, Section B = optional
Technical Specification Appendix) and, for each section, the exact questions
to ask and why that section exists.

Ground rules for the interview itself:

- **One focused question at a time.** Don't dump the whole section list as a
  questionnaire — work through the order given in content-schema.md's
  "Interview flow" section, since each answer tends to surface raw material
  for the next question.
- **Split mixed answers live.** People naturally answer in a mix of business
  and technical language in the same breath ("operators need to log this...
  there'd be a dropdown for unit ID and a timestamp field..."). When that
  happens, confirm the business-facing version for Section A6 (User Story)
  and flag the technical detail for Section B1/B2 — don't make the user
  repeat themselves, and don't silently drop either side.
- **Push on thin sections.** Assumption & Dependency and Out of Scope are the
  two sections people tend to leave empty because no one's asked them this
  directly before. If an answer comes back empty, ask the follow-up prompt
  given for that section in content-schema.md rather than moving on.
- **Decide Section B's fate early.** Ask directly: "Do you already know
  technical detail for this — field names, formulas, data sources — or is
  this BRD business-only for now?" If business-only, skip Section B entirely
  rather than padding it.
- **Run the coverage audit before generating.** content-schema.md's
  "Coverage audit" checklist exists because past drafts have silently
  dropped or invented requirements. Do this as a real step, and tell the
  user the result ("14 of 14 requirements accounted for") — don't just
  perform it silently.
- **Respect the content-provenance guardrail.** If the user shares another
  project's BRD as a style/structure reference, lift structure only — never
  copy that project's domain content (feature names, field values, numbers)
  into the new BRD.

## Phase 2 — Generate (build the styled .docx)

Read `references/style-tokens.md` for the exact design tokens (colors, typography,
and component-to-recipe mapping). Then use `scripts/brd_engine.js`, which already
implements every recipe as a function — don't hand-roll table/paragraph XML
from scratch.

```javascript
const { Document, Packer } = require('docx');
const e = require('./brd_engine');
// Build `children` using e.heading1(), e.storyCard(), e.riskTable(), etc. —
// see scripts/build_sample.js for a complete worked example covering every
// component, including the Document-level numbering config and
// header/footer wiring (these two are easy to forget and the doc will look
// wrong without them).
```

Steps:
1. Map the interviewed content onto the Section A / Section B skeleton from
   content-schema.md. Omit any section that's genuinely not applicable
   (Process Flow if there's no current-state process to contrast; Section B
   entirely if the user confirmed business-only) — don't pad.
2. Build the document with `brd_engine.js` functions, following
   `scripts/build_sample.js` as the structural template.
3. Run `npm run sample` (after `npm install` in the root directory) to smoke-test
   that the engine produces a valid file. Swap in the real content and run again
   to generate the final output.
4. For visual QC, open the `.docx` in Microsoft Word or LibreOffice Writer
   and page through it — look for awkward table splits mid-document (these
   tend to appear on interior pages, not the cover). If the output environment
   supports PDF conversion:
   ```bash
   # LibreOffice headless conversion (if available)
   soffice --headless --convert-to pdf output.docx
   ```
   This step is optional but catches layout bugs that file-validity checks alone
   won't surface.
5. Deliver both the `.docx` and a short note on what was generated vs.
   omitted (e.g. "Section B included with 3 cards; no Process Flow section
   since this isn't replacing an existing manual process").

## Known limitations (be upfront about these, don't silently work around them)

- No company logo embed yet — the header currently renders an `[ORG]`
  placeholder. If a logo image file is supplied, `buildHeader()` would need a
  small extension to embed it (see the docx library's Images section for the
  embed pattern) — ask the user for the logo file if they want this rather
  than attempting to recreate a trademarked logo from memory.
- Long tables can occasionally leave an orphaned header row alone at the
  bottom of a page when the body that follows is too tall to fit and gets
  pushed whole to the next page (a side effect of `cantSplit` preventing the
  worse problem of corrupted mid-row text wrapping). Acceptable for now;
  flag to the user if it looks bad on a specific page rather than treating it
  as unfixable.
- The design tokens in `references/style-tokens.md` reflect a specific
  blue-navy palette. If the user's organization uses different brand colors,
  update the `COLORS` object in `scripts/brd_engine.js` — all components
  reference those tokens, so a single-object change recolors the entire document.
