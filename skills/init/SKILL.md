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
- `src/app/(strategy)/overview/page.tsx` — Assignment Overview
- `src/app/(strategy)/research/page.tsx` — Secondary Research
- `src/app/(strategy)/primary-research/page.tsx` — Primary Research (planning + scratchpad questions)
- `src/app/(strategy)/hypotheses/page.tsx` — Hypotheses & Provocations + Working Session view

**Shell and scratchpad components (copy from `~/strategy-projects/taco-bell/site/src/components/`):**
- `src/components/StrategyShell.tsx` — sidebar nav + scratchpad state + polling + API persistence
- `src/components/scratchpad/types.ts` — ScratchItem, AgentResult, AgentFinding, ContextId types
- `src/components/scratchpad/Panel.tsx` — scratchpad drawer with intent chooser and streaming results
- `src/components/scratchpad/ContextNotes.tsx` — displays scratchpad items tagged to a section

**API routes (copy from `~/strategy-projects/taco-bell/site/src/app/api/`):**
- `api/scratchpad/route.ts` — GET/POST: persists to `outputs/scratchpad.json` + `outputs/scratchpad.md`
- `api/scratchpad/results/route.ts` — GET: queue of items pending agent investigation. POST: CLI agent posts findings back by item ID; browser polls and shows results inline
- `api/investigate/route.ts` — POST: streams a Claude response directly from the browser. Requires `ANTHROPIC_API_KEY`
- `api/primary-research/route.ts` — GET/POST: manages `outputs/primary-research-questions.json`, adds questions routed from the scratchpad

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
- Update `NAV` array with step numbers and correct hrefs
- Update `PAGE_LABELS` to match

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
