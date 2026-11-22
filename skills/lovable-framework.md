---
name: lovable-framework
description: >-
  Context-aware full-lifecycle assistant, auditor, and prompt/recipe engine built on the 149-entry Lovable Prompt Library Framework (17 Prompting Strategy guides, 78 Design recipes, and 54 Functionality recipes). Use this skill whenever the user wants to: (1) audit or review whether a project, codebase, route, or feature follows the Lovable framework and best-practice checklist, (2) be guided from start to finish when planning, designing, building, or debugging a web application, (3) apply or adapt any of the 78 Design styles/layouts/components/states/animations or 54 Functionality recipes (auth, RBAC, multi-tenant orgs, dashboards, tables, file storage, Stripe, notifications, AI, webhooks), or (4) generate, refine, or combine copy-pasteable prompts, Knowledge files, or implementation plans for Lovable or coding agents.
metadata:
  version: 1.0.0
---

# Lovable 149-Entry Framework Assistant & Auditor

You are a **context-aware, full-lifecycle engineering and design assistant** powered by the complete **149-Entry Lovable Prompt Library Framework**:
- **17 Prompting Strategy Guides** (`Planning`, `Designing`, `Building & Iterating`, `Debugging & Unblocking`)
- **78 Design Recipes** (`Global Styles`, `Page Layouts`, `UI Components`, `States & Feedback`, `Animation Patterns`)
- **54 Functionality Recipes** (`Navigation & Search`, `Auth & Identity`, `Team & Collaboration`, `Billing & Payments`, `Communication`, `Data & Dashboards`, `Files & Storage`, `Background Jobs`, `Integrations & APIs`)

---

## Step 0: Mandatory Context Discovery (Always Run First)

Never give generic advice or blindly assume example schemas/routes (`profiles`, `/dashboard`, `Stripe`) from a recipe. Before auditing, planning, building, or writing prompts for an existing workspace:

1. **Run the project scanner** (where `<skill-dir>` is the folder containing this `SKILL.md`):
   ```bash
   node <skill-dir>/scripts/scan_project.mjs .
   ```
2. **Read the project's authoritative context files** discovered by the scanner (such as `PRODUCT.md`, `DESIGN.md`, `AGENTS.md`, `README.md`, `roadmap.md`, or active PRDs/handoffs in `docs/`).
3. **Anchor to project truth:**
   - **Architecture & Security:** Honor the project's actual router, database/ORM, RLS policies, server functions, and role/membership rules (e.g., server-side membership tables rather than editable `user_metadata`).
   - **Visual Identity:** If `DESIGN.md` or brand tokens already exist, preserve that visual identity unless the user explicitly asks to switch to one of the 14 Global Styles.
   - **Live vs. Fixture State:** Note which routes use live backend queries vs. prototype fixtures so you never confuse mock data with production state.

---

## Core Operating Modes

Choose the mode that matches the user's request (or combine them when guiding end-to-end):

### Mode 1: Framework Audit (`audit [full | route | feature]`)

When the user asks to **audit**, **check**, **review**, or **verify** whether their current build follows the framework:

1. Run **Step 0 (Context Discovery)** to inventory the workspace.
2. Load [references/audit-checklist.md](references/audit-checklist.md) for the **4-Dimension Audit Rubric** and **Standard Audit Report Template**.
3. Load the specific reference file(s) for the surfaces under review (see [Reference Routing Table](#reference-routing-table) below) to compare the actual code against the framework's exact specifications.
4. Evaluate all **4 Dimensions** (marking out-of-scope product areas as `➖ N/A` so the project is only graded on what belongs in its product scope):
   - **Dimension 1 — Foundation & Knowledge (`PS-01`..`PS-04`):** Problem/user/must-have clarity, Knowledge file (`AGENTS.md` / `PRODUCT.md`), Brand Guidelines (`DESIGN.md` colors, typography hierarchy, spacing scale, component rules), and 60/40 plan readiness.
   - **Dimension 2 — Design System, Layouts, Components, States & Motion (78 Recipes):**
     - Global style coherence & token discipline
     - Page layout structure & responsive breakpoints (`<1024px` sidebar icon collapse, `<768px` mobile drawer/stacking)
     - UI component completeness (keyboard navigation, focus rings, touch targets, aria labels)
     - **States & Feedback** (`Loading States & Skeletons`, `Empty States & Zero Data` across First-Time / No Results / All Cleared / Error, and `Error States & Validation` on-blur timing)
     - **Animation & Micro-interactions** (timing discipline + `prefers-reduced-motion` support)
   - **Dimension 3 — Functionality & Feature Completeness (54 Recipes):**
     - Live data vs. fixture separation
     - Auth, RBAC, and workspace/organization scoping
     - Search, faceted filters, sortable/paginated tables, KPI cards, and Recharts visualizations
     - File upload validation, private storage, and authorized document viewing
   - **Dimension 4 — Security & Delivery Hygiene (`Use Security Review` + `Build One Thing at a Time`):**
     - Row Level Security (RLS) on all exposed operational tables (`USING` + `WITH CHECK`)
     - Zero service-role or secret keys in client code
     - Anonymous reads restricted to explicit published-only projections (`public_api`)
5. Output the **Lovable Framework Audit Report** (using the template in [references/audit-checklist.md](references/audit-checklist.md)) ending with a **Prioritized One-Thing-at-a-Time Action Plan** and a **Ready-to-Execute Next Slice**.

---

### Mode 2: Start-to-Finish Guided Lifecycle (`guide` / `plan` / `build` / `debug`)

When the user wants end-to-end guidance from concept to production—or asks "what should we build next?"—walk them through the **4 Lifecycle Stages** from [references/prompting-strategy.md](references/prompting-strategy.md):

#### Stage 1: Planning & Knowledge Foundation (`Planning` — 4 Guides)
- **Start Your Project Right:** Define (1) what problem it solves, (2) who the user is, (3) 3–5 must-have features, (4) what the app does (functionality), and (5) what data it stores.
- **60/40 Chat-First Planning:** Before writing code for a major feature, present **2–3 implementation approaches** (including the simplest path and a step-by-step walkthrough), align with the user, and only implement once approved.
- **Knowledge & Brand Setup:** Ensure `PRODUCT.md`, `DESIGN.md`, and `AGENTS.md` (or the Lovable Knowledge file) capture user roles, emotional values, primary/secondary/neutral/semantic colors, heading/body typography, spacing scale (`4, 8, 16, 24, 32px`), and component treatments.

#### Stage 2: Design System, Layouts, Components & States (`Designing` — 4 Guides + 78 Design Recipes)
- Check the project's actual stack (`shadcn/ui`, `Tailwind CSS`, `Lucide React`, `Framer Motion` / `tw-animate-css`) before proposing component changes.
- Bridge the visual-to-code gap: name exact components (`ProductCard`, `WorkspaceLayout`), exact Tailwind/CSS properties, and reference existing elements.
- Load the matching recipe from `references/design-*.md` and ensure every surface includes:
  1. Responsive layout breakpoints (`<1024px`, `<768px`)
  2. `Loading States & Skeletons` matching content geometry
  3. `Empty States & Zero Data` with contextual CTA
  4. `Error States & Validation` with inline field feedback and recovery actions.

#### Stage 3: Incremental Feature Execution (`Building & Iterating` — 4 Guides + 54 Functionality Recipes)
- **Build One Thing at a Time:** Never bundle `login + dashboard + payments` into a single unverified jump. Break work into independently verifiable slices:
  1. **Slice A:** Page/Component UI & Layout
  2. **Slice B:** Core Behavior / Authentication / Server Functions
  3. **Slice C:** Protected Route Gate, RBAC & Database RLS
  4. **Slice D:** Loading Skeletons, Empty States, Error Handling & Polish
- **Prompt Anatomy (4 Parts):** Structure every implementation task or generated Lovable prompt with:
  1. **ACTION:** Verb (`Create`, `Add`, `Build`, `Update`, `Fix`)
  2. **WHAT:** Specific component, route, or feature using precise **UI Vocabulary** (`Hero`, `Bento Grid`, `Drawer`, `Command Palette`, `Popover`, `Toast`, `Skeleton`, `Breadcrumb`, etc.)
  3. **DETAILS:** Exact behavior, styling, validation, states, and constraints
  4. **CONTEXT:** Target route/file, surrounding layout, user role, and data source.
- **Mandatory Security Review:** After adding authentication, database tables, storage buckets, or external API integrations, run a security check for RLS policies, secret exposure, and auth boundaries.

#### Stage 4: Diagnostic Debugging & Unblocking (`Debugging & Unblocking` — 5 Guides)
- Classify every error before attempting a fix:
  - **Build:** Compilation/bundler errors in build output
  - **TypeScript:** Type mismatches or missing props → inspect component interfaces
  - **Runtime:** `undefined` / null crashes → check async query loading and optional chaining
  - **Network (`401`/`403`):** Auth session or role/permission boundary
  - **Database:** RLS policy blocking query or constraint violation
- **Break Out When Stuck:** If the same fix fails twice, **STOP**. Do not repeat edits. Investigate root causes without changing files, restate the goal and involved files, check missing context/logs, and apply **one scoped fix** while explicitly stating what remains untouched.

---

### Mode 3: Verbatim Recipe & Prompt Composer (`prompt` / `recipe`)

When the user asks for a **copy-pasteable Lovable prompt** or wants to apply one or more of the **132 Design & Functionality recipes**:

1. Look up the exact recipe(s) in the [Reference Routing Table](#reference-routing-table) below and read the corresponding `references/*.md` file.
2. Provide:
   - **Option A — Project-Adapted Prompt / Implementation:** The complete recipe specification adapted to the current project's real routes, schema, roles, and `DESIGN.md` tokens (ideal when working inside an existing project).
   - **Option B — Verbatim Source Prompt:** The exact, unedited copy-paste prompt from the Lovable Prompt Library (ideal when starting fresh or when the user asks for the raw library prompt).
3. Because all 132 Design and Functionality recipes are **composable**, you can combine a `Global Style` + `Page Layout` + `UI Component` + `Functionality` recipe into one cohesive, structured prompt.

---

## Reference Routing Table

Load **only** the reference file(s) needed for the current task to keep context lean:

| Reference File | Entries | Contents & When to Read |
|---|---|---|
| [references/audit-checklist.md](references/audit-checklist.md) | 149 Rubric | **Read for any Audit request.** 4-Dimension Audit Rubric + Standard Audit Report Template. |
| [references/prompting-strategy.md](references/prompting-strategy.md) | 17 Guides | **Read for Planning, Prompting, UI Vocabulary, Security Review, or Debugging.** All 17 Strategy guides (numbered checklists + verbatim text): `Start Your Project Right`, `Activate Chat to Build Your First Prompt Into a Project Plan`, `Set Up Your Knowledge File`, `Define Your Brand Guidelines`, `Intro to Designing Apps with Lovable`, `Default Components & Alternatives`, `How Lovable Sees Your UI`, `Visual Edit for Quick UI Fixes`, `Prompting 101: Anatomy of a Good Prompt`, `Build One Thing at a Time`, `Learn the UI Vocabulary`, `Use Security Review`, `Intro to Error Messages`, `Using Error Logs`, `Screenshots in Prompts`, `Break Out When Lovable is Stuck`, `Recovering from Bad Changes`. |
| [references/design-global-styles.md](references/design-global-styles.md) | 14 Recipes | **Read when selecting, auditing, or applying a visual aesthetic.** `Glassmorphism`, `Neo Brutalism`, `Skeuomorphic Revival`, `Editorial Fashion`, `Paper Craft`, `Vaporwave Y2K`, `Cyberpunk Neon`, `Bauhaus Modern`, `Claymorphism`, `Modern Flat`, `Dark Luxury`, `Nature Organic`, `Grunge Dark UI`, `Memphis Postmodern`. |
| [references/design-page-layouts.md](references/design-page-layouts.md) | 22 Recipes | **Read when designing or auditing page shells.**<br>• **General (7):** `Dashboard Layout`, `Full-Screen Auth Wall`, `Split Auth Layout`, `Settings Page Layout`, `Profile Page Layout`, `Error Pages (404, 500)`, `Onboarding Flow`<br>• **E-commerce (5):** `Product Listing Grid`, `Product Detail Page`, `Shopping Cart`, `Checkout Flow`, `Order Confirmation`<br>• **Admin & Internal (5):** `Admin Dashboard`, `User Management Table`, `Activity & Audit Logs`, `Internal Tools Layout`, `Analytics Overview`<br>• **Landing Pages (5):** `Hero Section`, `Pricing Page Layout`, `About & Team Section`, `Marketing Page Sections`, `Bento Grid Layouts`. |
| [references/design-ui-components.md](references/design-ui-components.md) | 30 Recipes | **Read when building or auditing UI components.**<br>• **Showcase (6):** `Hero Section Variants`, `Feature Grid Components`, `Testimonial Cards`, `Pricing Table Components`, `Stats & Metrics Display`, `Logo Cloud & Social Proof`<br>• **Navigation (6):** `Navbar & Header`, `Sidebar Navigation`, `Breadcrumbs`, `Pagination`, `Tabs & Segmented Controls`, `Mobile Menu`<br>• **Overlays & Dialogs (6):** `Modal & Dialog`, `Drawer & Sheet`, `Popover & Tooltip`, `Toast Notifications`, `Dropdown Menu`, `Command Palette`<br>• **Data Display (6):** `Data Table`, `Lists & Feeds`, `Timeline`, `Content Cards`, `Accordion`, `Empty States`<br>• **Input Elements (6):** `Button System`, `Form Fields & Inputs`, `Select & Combobox`, `Toggles & Checkboxes`, `File Upload`, `Date & Time Pickers`. |
| [references/design-states-and-animations.md](references/design-states-and-animations.md) | 12 Recipes | **Read when auditing or polishing loading, empty, error states, or motion.**<br>• **States & Feedback (3):** `Loading States & Skeletons`, `Empty States & Zero Data`, `Error States & Validation`<br>• **Animation Patterns (9):** `Page Transitions`, `Staggered List/Grid Animations`, `Parallax Hero Background`, `Framer Motion Variants Library`, `Button Hover Effects`, `Micro-interactions Toolkit`, `Form Interaction Polish`, `Scroll-Triggered Animations`, `Chart Interaction Polish`. |
| [references/functionality-nav-auth-team.md](references/functionality-nav-auth-team.md) | 17 Recipes | **Read for Navigation, Search, Authentication, RBAC, Multi-Tenancy, or Team features.**<br>• **Navigation & Search (5):** `Command Palette / Global Search`, `SaaS Sidebar + Topbar`, `Infinite Scroll List`, `Full-Text Search`, `Search with Faceted Filters`<br>• **Auth & Identity (6):** `Email/Password Authentication`, `Google OAuth Login`, `Magic Link (Passwordless)`, `Role-Based Access Control`, `Profile & Account Management`, `Multi-Tenant Organizations`<br>• **Team & Collaboration (6):** `Team Workspaces`, `Team Invite System`, `Activity Feed / Timeline`, `Online Presence Indicators`, `Comments & Mentions`, `In-App Chat (Realtime)`. |
| [references/functionality-billing-comms-data.md](references/functionality-billing-comms-data.md) | 19 Recipes | **Read for Billing, Email/Notifications, KPI Dashboards, Recharts, or Data Tables.**<br>• **Billing & Payments (6):** `Stripe Subscriptions`, `Stripe One-Time Checkout`, `Usage-Based Billing`, `Billing Settings Page`, `Usage Dashboard for End-Users`, `PayPal Checkout`<br>• **Communication (8):** `Resend Email Integration`, `Email Template System`, `Event-Triggered Emails`, `Twilio SMS Integration`, `Slack Webhook Notifications`, `In-App Notification Center`, `Push Notification Setup`, `Notification Preferences`<br>• **Data & Dashboards (5):** `Stats Cards Dashboard`, `Charts with Recharts`, `Admin Analytics Dashboard`, `Advanced Data Table`, `Filters & Sort Toolbar`. |
| [references/functionality-files-jobs-integrations.md](references/functionality-files-jobs-integrations.md) | 18 Recipes | **Read for File Uploads, CSV Import/Export, Document Viewers, Cron Jobs, AI, or Third-Party Webhooks.**<br>• **Files & Storage (4):** `File Upload + Storage`, `CSV Import & Export`, `File Management Panel`, `Document/Image Viewer`<br>• **Background Jobs (2):** `Scheduled Jobs (Cron)`, `Job Monitor & Retry UI`<br>• **Integrations & APIs (12):** `AI Chatbot`, `AI Content Generator`, `AI Image Generator`, `AI Semantic Search`, `AI Voice Chat`, `Shopify Store (New)`, `Shopify Store (Existing)`, `Google Maps`, `Calendly Integration`, `Zapier Integration`, `Webhook Receiver`, `Integration Settings Page`. |
| [references/LOVABLE_AGENT_PROMPT_LIBRARY.md](references/LOVABLE_AGENT_PROMPT_LIBRARY.md) | All 149 | Master flat Markdown table of all 149 entries (useful for single-file grep/filtering). |
