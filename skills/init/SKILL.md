---
name: init
description: |
  Initialize a new strategy project. Creates a local folder at ~/strategy-projects/client-name/,
  sets up a GitHub repo at karenpiper/client-name, scaffolds a Next.js app with the client's
  brand colors and fonts, and saves any provided input documents (RFP, audience details).
  Run this before starting any strategy work on a new client or brief.
---

# /strategy:init

Set up a new strategy project — local folder, GitHub repo, Next.js app scaffolded with the client's brand.

## Process

### Step 1: Get the Client Name and Website

If the user provided a client name, use it. Otherwise ask:
> "What's the client name, and do you have their website URL?"

Slugify the name for folder/repo use: lowercase, hyphens instead of spaces, no special characters.
Example: "Acme Corp" → `acme-corp`

If no website URL is provided, web search for `{client name} official website` to find it.

### Step 2: Create the Local Project Folder

```bash
mkdir -p ~/strategy-projects/{slug}/inputs
mkdir -p ~/strategy-projects/{slug}/outputs
```

### Step 3: Create project-context.md

Write `~/strategy-projects/{slug}/project-context.md`:

```markdown
# Project: {Client Name}

**Slug:** {slug}
**Created:** {today's date}
**GitHub:** https://github.com/karenpiper/{slug}
**Website:** {client website}

## Client
{client name}

## Brand
- **Primary colors:** {extracted from brand research}
- **Fonts:** {extracted from brand research}
- **Brand notes:** {tone, visual style, any other observations}

## RFP / Brief Summary
<!-- Paste or summarize the RFP here, or note the file saved to inputs/ -->

## Audience Details
<!-- Paste or summarize audience context here, or note the file saved to inputs/ -->

## Key Dates
<!-- Add any deadlines, milestone dates, or submission windows -->

## Notes
<!-- Anything else relevant to this engagement -->
```

Populate from any content the user has already provided.

### Step 4: Research the Client's Brand

Fetch the client's website and any linked brand/press pages to extract:

- **Colors:** Look for primary, secondary, and accent colors. Check CSS variables, inline styles, or visible UI elements. Record as hex values where possible.
- **Fonts:** Identify headline and body typefaces. Check Google Fonts links, `@font-face` declarations, or font names in CSS.
- **Visual tone:** Note overall aesthetic (minimal, bold, editorial, playful, corporate, etc.)
- **Logo treatment:** Note color usage, whether it's wordmark vs icon, etc.

If the website is not crawlable or yields no useful brand data, web search for `{client name} brand guidelines` or `{client name} press kit` as fallback.

Record findings in `project-context.md` under the Brand section.

### Step 5: Scaffold the Next.js App

From inside the project folder, scaffold a new Next.js app:

```bash
cd ~/strategy-projects/{slug}
npx create-next-app@latest site --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

This creates a `site/` subfolder with the full Next.js app.

After scaffolding, set up the standard multi-page strategy site architecture:

**Page routing structure:**
- `src/app/page.tsx` — redirects to `/brief`
- `src/app/(strategy)/layout.tsx` — wraps all pages in `StrategyShell`
- `src/app/(strategy)/brief/page.tsx` — Client Brief
- `src/app/(strategy)/research-assignment/page.tsx` — Research Assignment (the brief/scope doc)
- `src/app/(strategy)/research-dossier/page.tsx` — Master Research Synthesis (primary synthesized view)
- `src/app/(strategy)/research-library/page.tsx` — Research Library (hub indexing all source sections)
- `src/app/(strategy)/primary-research/page.tsx` — Primary Research (planning + scratchpad questions)
- `src/app/(strategy)/hypotheses/page.tsx` — Hypotheses & Provocations + Working Session view
- `src/app/(strategy)/personas/page.tsx` — **Persona Lab**: multi-persona simultaneous chat, full-height two-column layout, one input fires all personas in parallel. This is the `/personas` index.
- `src/app/(strategy)/personas/[persona-slug]/page.tsx` — **Individual persona page**: uses `PersonaPageClient`, one file per persona with the full `PersonaDef` data object inline.

**Shell and scratchpad components (copy from `~/strategy-projects/taco-bell/site/src/components/`):**
- `src/components/StrategyShell.tsx` — sidebar nav + scratchpad state + polling + API persistence
- `src/components/scratchpad/types.ts` — ScratchItem, AgentResult, AgentFinding, ContextId types
- `src/components/scratchpad/Panel.tsx` — scratchpad drawer with intent chooser, streaming results, and finding chaining (↩ Investigate further / → Add to primary research on completed findings)
- `src/components/scratchpad/ContextNotes.tsx` — displays scratchpad items tagged to a section
- `src/components/PersonaPageClient.tsx` — full persona profile page component (see PersonaDef type below)

**API routes (copy from `~/strategy-projects/taco-bell/site/src/app/api/`):**
- `api/scratchpad/route.ts` — GET/POST: persists to `outputs/scratchpad.json` + `outputs/scratchpad.md`
- `api/scratchpad/results/route.ts` — GET: queue of items pending agent investigation. POST: CLI agent posts findings back by item ID; browser polls and shows results inline
- `api/investigate/route.ts` — POST: streams a Claude response directly from the browser. Requires `ANTHROPIC_API_KEY`
- `api/primary-research/route.ts` — GET/POST: manages `outputs/primary-research-questions.json`, adds questions routed from the scratchpad
- `api/persona-chat/route.ts` — POST: streams a persona-embodied Claude response. Takes `{ personaId, messages[] }`. System prompts are defined per persona in this file. Requires `ANTHROPIC_API_KEY`
- `api/persona-source/[id]/route.ts` — GET: serves persona markdown files from `src/data/personas/`. Returns `{ files: [{ filename, content }] }`

**API path — root-level vs. site/ subdirectory:**
The `outputs/` path in API routes depends on where the Next.js app lives:
- **App is in a `site/` subdirectory** (taco-bell pattern): `path.join(process.cwd(), '..', 'outputs')`
- **App is the repo root** (project-misa pattern): `path.join(process.cwd(), 'outputs')`

Check whether `package.json` is at the repo root or in a subdirectory before copying the API routes. Wrong path = silent read/write failures.

**Install the Anthropic SDK:**
```bash
cd site && npm install @anthropic-ai/sdk
```

**Environment variable required for streaming investigation:**
```
# site/.env.local
ANTHROPIC_API_KEY=sk-ant-...
```
Also add to Vercel environment variables if deploying. Without this, the "Research now" path in the intent chooser will return a 500 error; the "Add to primary research" path works without it.

---

### How the scratchpad system works

Users select any text on any page → save to Scratchpad → add a note → assign to contexts. Every save persists to:
1. `localStorage` (fast, browser-local)
2. `outputs/scratchpad.json` + `outputs/scratchpad.md` (via API — for agent handoff)

**Intent chooser** (hover any scratchpad item → "Investigate →"):
- **Research now** — calls `/api/investigate`, Claude streams findings inline in real time. URLs are auto-linked. Retry on error.
- **Add to primary research** — POSTs to `/api/primary-research`, question appears at the top of the Primary Research page under "From Scratchpad"
- **Both** — streams findings AND adds to primary research queue simultaneously

**Finding chaining** — after an investigation completes, a footer bar appears inside the result with two buttons:
- **↩ Investigate further** — saves the finding text as a new scratchpad item (sourced as "Agent finding — [original section]") so you can write a new question and reinvestigate
- **→ Add to primary research** — sends the finding directly to the primary research queue as a follow-up question
Both buttons go single-use and show a ✓ confirmation. This enables iterative research chains without leaving the browser.

**CLI agent handoff** (for full research engine with scoring and citations):
```
/strategy:research backfill outputs/scratchpad.md
```
Or use the queue API directly — see the research skill for the exact GET/POST format.

**Export button** in the scratchpad panel downloads `scratchpad.md` — useful on Vercel (read-only filesystem).

---

Update `StrategyShell.tsx` for each project:
- Update `PROJECT_TITLE` constant (used in the scratchpad markdown export header)
- Update the project title and subtitle in the sidebar header
- Update `NAV` array with the standard group structure and correct hrefs (see nav template below)
- Update `PAGE_LABELS` to match

**Standard NAV group template:**

```typescript
const NAV = [
  {
    group: 'Brief',
    items: [
      { label: 'Research Assignment', href: '/research-assignment' },
    ],
  },
  {
    group: 'Research',
    items: [
      { label: 'Research Dossier',  href: '/research-dossier' },   // primary synthesized view
      { label: 'Research Library',  href: '/research-library' },   // source section hub
      { label: 'Ecosystem Audit',   href: '/ecosystem-audit' },
    ],
  },
  {
    group: 'Strategy',
    items: [
      { label: 'Narrative — V2',    href: '/narrative-v2' },
      { label: 'Narrative — V1',    href: '/narrative-brief' },
    ],
  },
  {
    group: 'Audience',
    items: [
      { label: 'Directions Review', href: '/tissue-session' },
      { label: 'Personas',          href: '/personas' },
    ],
  },
  {
    group: 'Check-In',
    items: [
      // Add deck and prep pages as they're created
    ],
  },
  {
    group: 'Archive',
    items: [
      // Add courtroom sessions as they complete
    ],
  },
]
```

**Brief is always the first group.** The Research Assignment page holds the original brief/scope document. The Research Dossier (synthesized view) is listed before the Research Library (raw source hub) — the dossier is what someone should read first.

**Nav sub-items (for Personas and other multi-page sections):**

Nav items can have `children` to create a collapsed sub-nav that expands when the user is in that section. The `NavItem` type:

```typescript
type NavItem = {
  label: string
  href: string
  step?: number
  children?: { label: string; href: string }[]
}
```

When `children` is present, the parent link goes to the section index (e.g., `/personas` → Persona Lab). Sub-items appear indented below the parent when `pathname` matches the parent or any child. Example:

```typescript
{
  label: 'Personas', href: '/personas', step: 6,
  children: [
    { label: 'Jordan Reyes', href: '/personas/chaotic-loyalist' },
    { label: 'Marcus Webb', href: '/personas/nostalgic-power-user' },
  ],
}
```

Add each persona as a child item when populating the Audience nav group. Update `PAGE_LABELS` with both the parent (`/personas`) and each child path.

---

### Personas section — data file convention

Persona markdown files (the full persona document + research synthesis) must be stored **inside** `site/src/data/personas/` — not in `outputs/`. This ensures they are bundled with the deployment and readable by `api/persona-source/[id]` on Vercel.

**File naming:** `{persona-slug}.md` and `{persona-slug}-sources.md`
**API route reads:** `path.join(process.cwd(), 'src', 'data', 'personas', filename)`

Do NOT use `path.join(process.cwd(), '..', 'outputs')` for persona source files — this path does not exist on Vercel. The `outputs/` path is only used for runtime-written files (scratchpad, primary research queue) via the scratchpad and primary-research API routes.

---

### PersonaDef type — required fields for PersonaPageClient

Every individual persona page passes a `PersonaDef` object to `PersonaPageClient`. All fields are required:

```typescript
type PersonaDef = {
  id: string                    // kebab-case, matches persona-source API and persona-chat system prompt key
  name: string                  // full fictional name
  archetype: string             // 3–5 word archetype label
  colorHex: string              // brand color for this persona (hex)
  tags: string[]                // segment tags shown as pills

  // Demographics
  age: string                   // range (e.g. "19–24")
  lifeStage: string             // 2–3 sentence life stage description
  location: string              // geographic descriptor
  household: string             // household context

  // Headline
  headlineQuote: string         // the single sentence that epitomizes their relationship with the category
  headlineContext: string       // 1–2 sentences explaining why this quote is the right one

  // Relationship
  frequency: string             // visit/purchase frequency
  relationshipBasis: string     // what the relationship is built on
  brandRelationshipPosture: string // how they hold the brand; their posture as a customer

  // Voice
  voiceSample: string           // 3–5 sentences in first person, in their voice

  // Behavioral
  motivations: string[]         // 4–6 items — what drives them
  painPoints: string[]          // 4–6 items — what frustrates them
  decidingFactors: string[]     // 3–5 items — what tips the decision
  activationTriggers: string[]  // 4–6 items — what moves them toward action
  disengagementSignals: string[] // 4–5 items — what causes drift or exit

  // Buying journey
  buyingJourney: {
    stage: string               // stage name (Discovery / Decision / Order / Experience / Post-order)
    description: string         // 1–2 sentence description of what happens at this stage
    touchpoints: string[]       // 2–4 specific touchpoints
  }[]

  // Research metadata
  confidence: {
    high: string[]
    medium: string[]
    low: string[]
  }
  researchCount: number
}
```

The `api/persona-chat/route.ts` must have a system prompt for each `id` defined in `PERSONAS`. When adding a new persona, add both its page file and its system prompt to the route.

---

### Persona Lab (the /personas index page)

The Persona Lab is the index for the personas section. It shows all personas side by side in a full-height two-column layout. A single input at the bottom fires all persona agents simultaneously. Each column streams independently.

Key behaviors:
- Sending a message appends it to all persona threads simultaneously, then fires parallel fetch calls to `api/persona-chat` for each
- Each column has a "Full profile →" link to the individual persona page
- No history persists on page refresh — session-only state
- Clear all button resets all threads

Update `src/app/page.tsx`:
```tsx
import { redirect } from 'next/navigation'
export default function Home() { redirect('/brief') }
```

Update `src/app/(strategy)/layout.tsx`:
```tsx
import StrategyShell from '@/components/StrategyShell'
export default function StrategyLayout({ children }: { children: React.ReactNode }) {
  return <StrategyShell>{children}</StrategyShell>
}
```

---

### Research Library Pattern

The Research Library (`/research-library`) is the hub for all source research documents. It sits below the dossier in the nav and in visual hierarchy.

**Structure:**
- **Hero header** — dark bg, project label, title, one-line description of total research volume
- **Featured dossier banner** — IBM blue (or brand primary), "Master Research Synthesis" prominently linked with "Open Dossier →" CTA. This is always the first thing on the page.
- **Source sections** — grouped by research track, each as a card grid

**Standard research tracks and their color codes:**

| Track | Color |
|-------|-------|
| Context | `#6f6f6f` (gray) |
| Category Research | `#0e6027` (green) |
| Competition Research | `#a2191f` (red) |
| Company Research | `#6929c4` (purple) |
| Consumer Research | `#b45309` (amber) |
| Culture Research | `#005d5d` (teal) |
| AEO / AI Search | `#6929c4` (violet) |

Each card shows: category color dot + label, section title (serif), description, and a link to either the page (if one exists) or the PDF.

**Source PDFs:** Place in `public/research/`. Filename convention: `{slug}-master-research.pdf` for the master doc. Individual section PDFs: `{slug}-{section-slug}.pdf`. Cards link with `target="_blank"`. If page numbers are known, use `#page=N` anchors.

**Research Assignment page** (`/research-assignment`): Holds the original brief/scope document. Shows the 5 research tracks (Category, Competition, Company, Consumer, Culture) with short descriptions, and links to the full source PDF. This page belongs in the **Brief** nav group, not the Research group.

---

Each page gets a breadcrumb, a `<ContextNotes sectionId="..." />` block at the top, and content below. No collapsible sub-navigation — sub-sections scroll within the page.

The Primary Research page needs `'use client'` at the top and imports `useEffect`/`useState` to fetch from `/api/primary-research` on mount. The Hypotheses page needs `'use client'` for the hypothesis expand/collapse and view toggle (Hypotheses ↔ Working Session).

Then apply the brand to the Tailwind config. Edit `site/tailwind.config.ts` to add the client's brand colors under `theme.extend.colors`:

```ts
colors: {
  brand: {
    primary: '{primary hex}',
    secondary: '{secondary hex}',
    accent: '{accent hex}',
    // add more as needed
  }
}
```

If Google Fonts are used, add them to `site/src/app/layout.tsx` using `next/font/google`. Use `Barlow_Condensed` as the default fallback for bold display/headline fonts — it's confirmed compatible with Next.js 16. Avoid `Big_Shoulders_Display` — it is not in Next.js 16's font registry and will break the build. If custom/licensed fonts are used, note them in `project-context.md` with instructions — don't attempt to install them automatically.

Create `site/src/app/globals.css` CSS variables block with the brand palette:

```css
:root {
  --color-primary: {primary hex};
  --color-secondary: {secondary hex};
  --color-accent: {accent hex};
  /* typography */
  --font-heading: '{heading font}', sans-serif;
  --font-body: '{body font}', sans-serif;
}
```

### Step 5b: Note Vercel Root Directory Setting

`rootDirectory` is a Vercel **dashboard setting**, not a `vercel.json` property. Do NOT create a `vercel.json` for this — it will fail schema validation.

After the repo is pushed, tell the user:
> "When you connect this repo in Vercel, set **Root Directory** to `site` under Settings → General. Without this, Vercel will look at the repo root, find no Next.js app, and return a 404."

### Step 6: Initialize Git and Create GitHub Repo

```bash
cd ~/strategy-projects/{slug}
git init
git add .
git commit -m "init: {client name} project scaffold with brand"
```

Then:

```bash
gh repo create karenpiper/{slug} --private --source=. --remote=origin --push
```

**If `gh` is not available**, tell the user:
- Install it: `brew install gh && gh auth login`
- Or create the repo manually at https://github.com/new named `{slug}`, then:
  ```bash
  git remote add origin https://github.com/karenpiper/{slug}.git
  git push -u origin main
  ```

### Step 7: Confirm and Hand Off

Report back:

```
Project initialized: {Client Name}

Local folder:  ~/strategy-projects/{slug}/
GitHub repo:   https://github.com/karenpiper/{slug}
Next.js app:   ~/strategy-projects/{slug}/site/
Context file:  ~/strategy-projects/{slug}/project-context.md

Brand applied:
  Colors: {list primary/secondary/accent}
  Fonts:  {heading font} / {body font}

Next: run `cd ~/strategy-projects/{slug}/site && npm run dev` to preview the site,
or run /go to start strategy work.
```

If font or brand details couldn't be extracted, note what's missing and suggest where to find them (brand guidelines URL, design team, etc.).

If the user seems ready to start strategy work immediately, offer to route to `/go` now.
