# Developer Handover — fachrynuzuli.com & fachrynuzuli.github.io

**Document owner:** Fachry Nuzuli Kamal  
**Last updated:** April 2026  
**Status:** Active — both properties under development

---

## 0. Read This First

You are building for one person with a clear identity, a fixed hierarchy of proof, and strong opinions about what his work should say about him. The aesthetic decisions are not arbitrary. The copy is not filler. Before you change anything, understand what you are changing and why it exists.

This document gives you everything you need to work on either property without a briefing call.

---

## 1. Who Is Fachry

**Fachry Nuzuli Kamal.** 29. Riau, Indonesia. Public handle: `@fachrynuzuli`.

He operates in three modes simultaneously:

**Day job:** Digital Transformation Lead / Product Manager at a multinational pulp and paper corporation, Transport Division. This is his institutional anchor. It gives him credibility that no personal brand can manufacture. It means he has shipped real products, managed real stakeholders, and delivered real results inside a large, complex organization.

**Side operations (three active divisions):**

- `freeware.lab` — two-person web dev agency. Done-for-you MVP in 48–72 hours. Fachry does client intake and prototyping (vibe-coding). His partner handles backend and deployment. Real paying clients.
- `freewriter.co` — solo ghostwriting and personal brand service for B2B and digital transformation leaders. Real paying clients.
- `freebuilder` — AI education brand for Southeast Asia. Content at `@fachrynuzuli`. Teaching people to build income with AI by actually doing it. No live paid products yet — in active build phase.

**The authority stack — this order is fixed and non-negotiable:**

1. Corporate PM (institutional trust anchor)
2. freeware.lab (real builds, real clients)
3. freewriter.co (real writing, real clients)
4. Educator / Freebuilder (earns credibility from the three above — comes last, always)

Never reverse this order in how the work is presented. The educator identity is valid only because the other three exist first.

**Target audience:** Zillennials (born ~1993–2005) in second-tier Asian cities — Indonesia, India, Malaysia. Under-resourced, digitally native, overwhelmed by information. They are looking for someone who did the thing before teaching it.

**Core philosophy (in his own words):**
- "Done > Perfect. Ship broken. Fix live."
- "Visible proof beats theory."
- "Start exactly where you are. Stop waiting for permission."
- "I build things so I have something worth teaching."

---

## 2. The Two-Property Strategy

These are two distinct destinations serving two distinct audiences with two distinct purposes. They are not competitors. They are not duplicates. Do not let them drift toward each other.

---

### Property 1 — fachrynuzuli.com

**Platform:** WordPress (current). Migration to a modern stack is a long-term goal, not immediate.

**Primary job:** Door to his thinking. A place for writing.

**Audience entering here:** People who find him through platform bios, DMs, or social links. They want to understand who he is and what he thinks. They are not necessarily technical. They may be potential clients, newsletter subscribers, or casual followers.

**What this page should do:**
- Establish his voice and perspective immediately
- Direct people toward his Substack (primary owned audience channel)
- Surface his three divisions lightly, without pitching
- Feel like a writer's corner, not an agency homepage

**What this page should NOT do:**
- Pitch services aggressively
- List every tool in his stack
- Serve as a project portfolio (that job belongs to the GitHub page)
- Confuse visitors with too many CTAs

**Current state:** The hero section has a broken headline ("Build Systems, Not Products" — this is a structural copy error, addressed in Section 4). The design aesthetic is editorial and warm. Preserve the aesthetic. Fix the copy.

**Primary CTA:** Substack subscription — `fachrynuzuli.substack.com`

**Secondary CTAs:** Links to freeware.lab, freebuilder, freewriter.co — present but not dominant.

**Tone of the page:** Introspective. Mentor-like. A thinking person's corner of the internet.

---

### Property 2 — fachrynuzuli.github.io

**Platform:** Static HTML. Single `index.html` file. JetBrains Mono + Fraunces fonts via Google Fonts. No framework. No build tool.

**Primary job:** Builder and PM portfolio. A technical introduction page. Proof of work.

**Audience entering here:** People who find him through GitHub, developer communities, or referrals from people who know his work. They are likely technical or product-minded. They want to see what he has built.

**What this page should do:**
- Immediately communicate: this person ships real things
- Show the authority stack in order (corporate PM → agency → educator)
- List projects with honest status markers (live / in progress / internal)
- Feel like a developer's README, not a marketing page

**What this page should NOT do:**
- Soft-sell or hedge
- Lead with the educator/content identity
- Pretend to be the primary web destination (it links to `.com` as main site)

**Current state:** Largely complete and well-executed. A set of specific fixes is listed in Section 4.

**Primary CTA:** Links out to active projects and social profiles.

**Tone of the page:** Terminal aesthetic. Functional. Confident without being loud.

---

## 3. Design System

Both properties share the same underlying identity. The visual language should feel like it comes from the same person, even though the two pages serve different purposes.

### Brand identity

**Logo:** `fn` — lowercase, serif, with an underline. Represents Fachry Nuzuli / free notes / footnote. The ambiguity is intentional. The underline signals editorial. Do not add a tagline to the logo. Do not change the font.

**Two variants exist:**
- Dark: `#1a1a19` background, `#e8e6e0` letterforms
- Light: `#f0ede4` background, `#333331` letterforms

Use dark variant on dark backgrounds. Use light variant on light backgrounds.

**Profile photo:** Side profile, film grain, blazer + white shirt. This is the canonical photo across all platforms. Do not crop to a tight face shot for hero images — the composition is intentional. For small avatar contexts (32–40px circles), a tighter crop may be needed. The original stays as the hero.

### Color palette (from the `.github.io` implementation — use as reference)

```
--bg:       #0e0e0f   (primary background)
--bg2:      #141415   (secondary surfaces)
--bg3:      #1a1a1b   (tertiary surfaces)
--text:     #e8e6e0   (primary text — warm off-white, not pure white)
--muted:    #6b6960   (de-emphasized text)
--muted2:   #9a9790   (secondary text)
--accent:   #c8a96e   (gold — primary accent)
--accent2:  #7eb8a4   (sage green — secondary accent)
--accent3:  #e07a5f   (coral — tertiary accent)
--green:    #6aad8e   (status: live / active)
--border:   rgba(255,255,255,0.07)
--border2:  rgba(255,255,255,0.12)
```

**Note on `.com`:** WordPress currently uses a light background (cream `#f0ede4`) with dark text. The same color palette applies — just inverted. The warm off-white, gold accent, and sage green all work on light backgrounds. Do not introduce new colors.

### Typography

**Monospaced:** JetBrains Mono — used for UI elements, labels, tags, code-adjacent contexts, the `.github.io` page body.

**Serif:** Fraunces — used for display headings, the hero name. Italic weight at large sizes. Optical size axis: `opsz` at 144 for display use.

**Rule:** Never use a sans-serif. The pairing of mono + italic serif is the typographic identity.

---

## 4. Specific Fixes — Tracked

These are confirmed changes. Do not interpret or improvise. Implement exactly.

### fachrynuzuli.github.io — index.html

| # | Location | Current | Fix to |
|---|----------|---------|--------|
| 1 | `/repository` file tree, `freebuilder/` comment | `— AI education brand · prompt files · courses` | `— AI education brand · prompt files · playbooks` |
| 2 | Hero description paragraph | `"...Building AI-first products on weekends."` | `"...Running 3 active operations on the side — real clients, real code, real builds."` |
| 3 | `whoami` prompt line | `whoami — builder, product manager, educator` | `whoami — I build things so I have something worth teaching` |
| 4 | Project 001 (FMS Suite) — `project-links` | `internal deployment` (dead end) | Add proof sentence below project desc: `"3 system audits passed. 400+ contractors onboarded."` + Add link to sanitized prototype (see Section 5) |
| 5 | README.md section — career trajectory paragraph | `"Background: Financial Analyst → Equity Research..."` (dry list) | Replace with: `"Every role has been the same job with a different name: walk into a broken system, understand it faster than anyone expects, then rebuild it. Financial analysis, equity research, logistics operations, digital transformation. The tools changed. The problem didn't."` |

### fachrynuzuli.com — Hero section

| # | Location | Current | Fix to |
|---|----------|---------|--------|
| 6 | Hero headline | `"Build Systems, Not Products"` | To be determined — confirm with Fachry before implementing. The current headline violates the brand voice rule (negation structure: "Not X. Y."). Do not ship a replacement without approval. |
| 7 | ROI credential | `"$1,260,618. IN PROJECT ROIs"` — unclear to first-time visitors | Add one line of explanation below: `"measured across internal digital transformation projects"` or reframe as: `"$1.2M in project ROIs delivered"` — confirm framing with Fachry. |
| 8 | Hero subtext | `"messy workflow into seamless process"` | Remove "seamless process" — it is corporate language that contradicts the brand. Replace with: `"I build AI-powered systems that turn broken processes into tools people actually use. I'll show you how, every week."` |
| 9 | Notes section subheading | `"Deep dives on Product Management, AI, and the future of work."` | Replace with: `"Real builds. Real decisions. Written from Riau, shipped everywhere."` |

---

## 5. The Sanitized Prototype Approach

For Project 001 (FMS Suite) and any other internal corporate projects, Fachry wants to show the work without exposing the real company identity.

**What to build:** A static demo page or embedded prototype that shows the UI/UX of the internal tool with all of the following removed or replaced:

- Company logo → replace with generic placeholder (`[CORP]` or a neutral icon)
- Unit codes and department names → replace with generic equivalents (`Division A`, `Unit 04`)
- Contractor names → anonymized (`Contractor #014`)
- Location names specific enough to identify the company → generalized (`Sector 3 — North Zone`)
- Any internal system names that are proprietary (TRMS, Digifleet, Orpak) → replace with generic functional labels (`Transport Management System`, `Fleet Tracking`, `Fuel Management`)

**What to keep:** The UI design, the feature set, the scale indicators (400+ contractors, 11 departments), the problem it solves, the technical approach.

**Format options (pick one, confirm with Fachry):**
- Screenshots with redaction overlays (fastest)
- A rebuilt static HTML mockup that mirrors the actual UI without real data (cleanest)
- A Loom walkthrough of the sanitized prototype (most convincing for human audiences)

**Label it clearly on the portfolio page:** `"sanitized demo — internal deployment"` so there is no ambiguity about what the viewer is seeing.

---

## 6. Content Rules — What Never Changes

These are constraints, not suggestions. If you are writing any copy for either property, these apply.

**Banned words and phrases (auto-fail if present):**

`leverage` / `utilize` / `robust` / `game-changer` / `cutting-edge` / `seamless` / `harness` / `unlock` / `supercharge` / `future-proof` / `delve` / `dive into` / `unpack` / `in today's...` / `it's important to note` / `furthermore` / `moreover` / `at the end of the day` / `let that sink in` / `this changes everything` / `the AI revolution`

**The fatal structure — never use:**

Any sentence of the form "Not X. Y." or "Less X, more Y." or "Forget X. This is Y." Delete the negation. State the positive claim directly.

**Never call an infoproduct a "course."** Use: Workshop / Playbook / Blueprint / Cohort / Masterclass.

**Never mention Aryendbumi** — it is Fachry's personal holding company, internal only, not public-facing.

**Never reverse the authority stack.** The educator identity comes last. Always.

**Language:** English only across both properties. Natural SEA cadence (occasional texture, rhythm) is fine and intentional. Do not sand it out.

---

## 7. Long-Term Migration Plan (Context Only — Not Immediate)

The current two-property structure is a transitional state. The long-term goal:

1. `fachrynuzuli.com` becomes the single primary destination — rebuilt from scratch, off WordPress, on a modern stack. It absorbs the portfolio layer currently living on GitHub Pages.
2. `fachrynuzuli.github.io` either redirects to `.com` or becomes a pure code/repo index.

**Trigger for migration:** When the WordPress limitations become a build bottleneck — i.e., when Fachry needs to add functionality (Whop embeds, dynamic project cards, newsletter integration) that WordPress cannot cleanly support.

**Stack preference for the rebuild:** Consistent with his existing tools — Lovable or v0 for prototyping, Vercel or Netlify for deployment, Supabase if any backend is needed. The `.github.io` codebase (single HTML file, JetBrains Mono + Fraunces, dark terminal aesthetic) is the design reference for what the rebuilt `.com` should feel like.

**Do not migrate prematurely.** Fix the copy on `.com` now. Build the portfolio fixes on `.github.io` now. The full rebuild happens when the current setup actively blocks progress.

---

## 8. Contact & Access

| Channel | Handle |
|---------|--------|
| GitHub | `fachrynuzuli` |
| X / Twitter | `@fachrynuzuli` |
| Instagram | `@fachrynuzuli` |
| LinkedIn | `Fachry Nuzuli Kamal` |
| Substack | `fachrynuzuli.substack.com` |
| Main site | `fachrynuzuli.com` |
| Portfolio | `fachrynuzuli.github.io` |

For questions about copy, direction, or anything not covered here: DM on X first. Fachry responds fast there.

---

*This document is internal. Do not publish or share outside the working relationship.*
