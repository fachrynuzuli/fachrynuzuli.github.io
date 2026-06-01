# Content Structure: fachrynuzuli.com

## /notes/ (Writings)

**Purpose:** Long-form thinking, essays, build logs, lessons learned

**Content Types:**
- Essays on product management, AI, building
- Lessons from 30-day challenge
- Career/life reflections
- Technical tutorials
- Industry analysis

**Example Titles:**
- "Why essays matter more than blogs"
- "Building 30 apps: what I learned on Day 10"
- "Free AI tools are good enough"
- "Product thinking vs feature thinking"
- "The PM who ships with constraints"
- "How I used Claude to automate my workflow"
- "Learning to say no as a PM"
- "Why I quit my job to build for 30 days"
- "The real cost of free tier limitations"
- "How to structure prompts for complex tasks"

**Format:**
```
[YYYY-MM-DD] Title of essay
```

**Template for each post:**
- Hook (why this matters)
- Context (personal story/experience)
- Core argument/lesson
- Examples/evidence
- Takeaway/action item

---

## /work/ (Portfolio)

**Purpose:** Showcase shipped products, case studies, proof of execution

**Categories:**

### 1. Professional Work (APRIL Group)
- Fleet Management Ecosystem
- AI Driver Safety Platform  
- Predictive Maintenance System
- IoT Dispatch Optimization

### 2. 30-Day Challenge Builds
- All 30 apps (list with links)
- Can be external links OR case studies on your site
- Mix of both based on complexity

### 3. Side Projects
- AI PM Tool Suite (20+ tools)
- Personal automation workflows
- Open source contributions

**Case Study Structure:**
```
Project Name
- Problem: What you were solving
- Constraint: Free tier only / limited resources / tight timeline
- Solution: What you built + how
- Impact: Metrics, results, user feedback
- Tech Stack: Tools used
- Link: Live demo / GitHub / video
```

**Simple Portfolio Entry:**
```
Project Name
One-line description
[View site →] or [Read case study →] or [View on GitHub →]
```

---

## /resources/ (Services & Tools)

**Two Sections:**

### What I Sell

**1. Services (Consulting)**
- 2-Hour MVP Build ($500)
  - Description: "I'll build your MVP with free AI tools"
  - What's included: Initial consult, 2-hour build session, deployment, handoff doc
  - Perfect for: Solo founders, early validation, quick prototypes
  
- Product Sprint Week ($2,000)
  - Description: "5-day sprint: 5 connected features"
  - What's included: Full product planning, daily builds, documentation, training
  - Perfect for: Startups, agencies, small teams

**2. Digital Products**
- The Free Tier Playbook ($29)
  - All 30 prompts organized by use case
  - Tool comparison matrix
  - "How to think like a PM" bonus section
  - Gumroad link

- AI PM Toolkit ($49)
  - 50+ ready-to-use prompts
  - Workflow templates
  - Video tutorials
  - Notion template included
  - Gumroad link

**3. Consulting/Advising**
- Open to product advisory roles
- AI integration consulting for teams
- Speaking/workshop opportunities
- Link to calendar or contact form

---

### What I Use (Affiliate Links)

**Format:**
```
Tool Name
Why I use it: One sentence explaining the use case
[Try it →] (affiliate link)
```

**Categories:**

**AI/LLM Tools:**
- Claude (Anthropic) - Best for complex reasoning, coding, writing
- ChatGPT - Quick iterations, brainstorming
- Gemini - Free tier is generous, good for batch processing

**Development:**
- Cursor - AI-first code editor, game-changer for PM-engineers
- Replit - Deploy apps in minutes, no DevOps needed
- V0 by Vercel - Generate UI components from text prompts
- Bolt.new - Full-stack apps from a single prompt

**Product/PM Tools:**
- Notion - All my product docs, roadmaps, sprint planning
- Figma - Design mockups, user flows
- Linear - Issue tracking that doesn't suck
- Loom - Async product demos and feedback

**Analytics/Data:**
- Metabase - Self-hosted analytics, free and powerful
- PostHog - Product analytics + feature flags
- Plausible - Privacy-friendly web analytics

**Content/Marketing:**
- Beehiiv - Newsletter platform (if you start one)
- Gumroad - Selling digital products
- ConvertKit - Email automation

**Productivity:**
- Obsidian - Second brain, PKM system
- Sunsama - Daily planning
- RescueTime - Track where time actually goes

---

## Homepage Updates

**"Currently" line should change based on status:**

Pre-challenge:
```
currently: preparing to ship 30 apps in 30 days
```

During challenge (Days 1-30):
```
currently: day [X]/30 - building with free AI tools
```

Post-challenge outcomes:
```
currently: closed $5K in consulting deals from 30-day challenge
currently: joined [Company] as Senior PM
currently: open to product opportunities
currently: building [Product Name] with 100+ users
```

---

## Content Prioritization

**Week 1: Launch Site**
- Homepage ✓
- 3 work case studies (Fleet, Safety, Maintenance)
- 2 essays from existing thoughts
- Resources page with 5 services/tools

**Week 2-4: Add Daily**
- 1 build from challenge → work portfolio
- 1 essay every 3 days
- Update resources as you discover tools

**Post-30 Days:**
- Comprehensive "What I Learned" essay
- All 30 builds documented
- Update homepage "currently" line
- Add testimonials to services if applicable

---

## SEO Keywords to Target

**Primary:**
- Product manager portfolio
- AI product management
- Building with free AI tools
- Free tier AI tools
- Product management case studies

**Secondary:**
- Fleet management IoT
- AI safety systems
- Predictive maintenance
- 30-day challenge
- Prompt engineering

**Long-tail:**
- How to build products with Claude
- Free AI tools for product managers
- Building MVPs without coding
- Product manager using AI
- AI-powered product development

---

## Notes on Tone

**Writing Style:**
- Direct, no fluff
- Show, don't tell (metrics, screenshots, code)
- Personal but not oversharing
- Tactical > theoretical
- Honest about failures

**Avoid:**
- Corporate speak
- "Thrilled to announce..."
- Humble bragging
- Buzzword bingo
- Fake modesty

**Do:**
- Share actual numbers
- Explain your thinking
- Show the constraint (free tier, time limit)
- Give away the playbook
- Credit tools/people who helped

---

## Update Cadence

**Daily (During 30-day challenge):**
- Add new build to /work/
- Update Instagram/TikTok with link to site

**Weekly:**
- Write 1-2 essays
- Review analytics (what's getting traffic)
- Update resources with new tools

**Monthly:**
- Review and update case studies
- Refresh homepage "currently" line
- Check all links still work
- Update pricing if needed

---

## Maintenance Checklist

**Every 3 Months:**
- [ ] Remove outdated tools from resources
- [ ] Update case study metrics if changed
- [ ] Refresh portfolio with new work
- [ ] Check all external links
- [ ] Update resume/CV
- [ ] Review and archive old essays to "Archive" section if needed

**Annually:**
- [ ] Full site audit
- [ ] Redesign if needed (probably not)
- [ ] Update all numbers/metrics
- [ ] Add new work from past year

---

## Technical Notes for WordPress

**Custom Post Types Needed:**
1. "Notes" (default Posts)
   - Categories: Essays, Tutorials, Reflections
   - Show date in format: [YYYY-MM-DD]
   
2. "Work" (custom post type)
   - Custom fields: External Link, Tech Stack, Impact Metrics, Year
   - Can toggle between "case study" or "external link" layout

3. "Resources" (single page, manual updates)

**Plugins You'll Need:**
- Custom Post Type UI
- Advanced Custom Fields (for work portfolio)
- Classic Editor (if you hate Gutenberg)
- Yoast SEO or Rank Math

**Theme Requirements:**
- Monospace font (JetBrains Mono, Courier New, Inconsolata)
- Remove all default styling
- Custom CSS for terminal look
- Mobile responsive (but keep it simple)

**CSS Starter:**
```css
body {
  background: #000;
  color: #00ff00;
  font-family: 'JetBrains Mono', monospace;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

a {
  color: #00ff00;
  text-decoration: underline;
}

a:hover {
  color: #00dd00;
}
```