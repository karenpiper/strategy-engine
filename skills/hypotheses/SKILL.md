---
name: hypotheses
description: |
  Develop testable hypotheses and provocations from research findings. Takes a research
  dossier (or a brief summary of what was found) and generates 5–6 hypotheses with
  supporting/challenging evidence, confidence levels, and a daring provocation for each.
  Produces two outputs: a hypothesis document for team alignment, and a working session
  guide (provocation cards + agenda) for pressure-testing with clients.
  Trigger: "develop hypotheses," "turn research into hypotheses," "build provocations,"
  "what do we actually believe," "pressure test with client," or after /strategy:research Phase 7.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections from Julian
2. `rules/voice.md` — Voice rules apply to all hypothesis and provocation copy
3. `rules/quality-gates.md` — Quality gates apply to the hypothesis document
</required_reading>

# /strategy:hypotheses

Turns research findings into testable beliefs and client-ready provocations.

## What This Mode Produces

Two artifacts:

**1. Hypothesis Document** — for internal team alignment
- 5–6 hypotheses derived from research
- Each: statement, provocation, evidence for, evidence against, confidence level
- Honest: the challenging evidence is not hidden

**2. Working Session Guide** — for client pressure-testing
- Agenda for a 90-minute session
- Provocation cards (one per hypothesis, formatted to be read aloud)
- One session question per provocation
- Capture template for reactions
- What to do after the session

## Process

### Step 1: Ingest the Research

Take as input one of:
- A research dossier from `/strategy:research`
- A brief summary of secondary + primary findings
- A list of key findings Julian provides directly

Identify: the strongest findings, the most important gaps, the most provocative evidence.

### Step 2: Draft Hypotheses

Write 5–6 hypotheses. Each must:
- Start with a specific, falsifiable belief about the brand, audience, or market
- NOT be a recommendation ("we should...") — a hypothesis ("we believe that...")
- NOT be a finding restatement — a interpretive leap from the finding
- Carry a confidence level based on evidence quality: HIGH / MEDIUM / SPECULATIVE

**The difference between a finding and a hypothesis:**
- Finding: "Loyalty members go from 5.8 to 10.2 visits per year after joining"
- Hypothesis: "The behavioral infrastructure of the loyalty program works. The emotional infrastructure doesn't. The 76% visit uplift is real; the 18% redemption rate proves the two are not connected."

**The difference between a hypothesis and a provocation:**
- Hypothesis: "The app is a liability, not an asset, for brand equity"
- Provocation: "Every 47-second checkout session is teaching your most loyal fans that you don't know who they are"

### Step 3: Pressure-Test Each Hypothesis Internally

For each hypothesis, generate:
- **Evidence for:** 3–5 specific findings from the research that support it (with source attribution)
- **What challenges this:** 2–4 legitimate counter-arguments or contradictory evidence
- **What would have to be true:** If this hypothesis is wrong, what would the evidence look like?

Do not bury the challenging evidence. If a hypothesis can't survive its own pressure test, revise it or flag it as SPECULATIVE.

### Step 4: Write the Provocations

For each hypothesis, write one provocation. Rules:
- It should be uncomfortable to agree with in a room
- It should surface a belief that is true but that no one has said out loud yet
- It should be readable in under 10 seconds (one sentence, max two)
- It should invite pushback, not consensus

Test: if a provocation doesn't make someone in the room want to argue, it's not a provocation — it's a finding.

### Step 5: Write the Working Session Guide

**Agenda structure (90 minutes):**
- 0–10 min: Frame the session. Explain: not presenting conclusions, stress-testing beliefs. Client job is to push back.
- 10–55 min: 5 rounds × 8 min. One provocation per round. Read aloud, ask session question, capture without editorializing.
- 55–70 min: Ranking exercise. Dot-vote: most true, most dangerous, most surprising, most actionable.
- 70–85 min: "What would have to be true?" For the top 2 hypotheses: what evidence would make you bet on it? What would make you walk away?
- 85–90 min: Capture and next steps.

**Session question rule:**
Each provocation gets one question. It must:
- Be open, not leading
- Surface the client's belief, not confirm the researcher's
- Often start with "If..." or "What would change if..."

**Capture template:**
Each provocation card has three capture fields: Agree / amplify · Push back · Surprised by.

**After the session:**
- Which hypotheses survived become Phase 2 strategic territories
- Which the client fought reveal creative constraints or the challenge worth fighting
- Which surprised them are the moments research found something unnamed
- Where client and research diverge significantly → flag for primary research

### Step 6: Output Format

Produce the full artifact:

```markdown
# Hypotheses & Provocations: [Project]

## Source
Derived from: [secondary research / primary research / both]
Research brief: [one-line summary of what was researched]
Date: [today]

---

## H1: [Short name for the hypothesis]

**Hypothesis:** [Full hypothesis statement]
**Provocation:** "[Daring version]"
**Confidence:** HIGH / MEDIUM / SPECULATIVE

### Evidence For
- [Finding with source]
- [Finding with source]

### What Challenges This
- [Counter-argument]
- [Counter-argument]

### Session Question
[The question to ask in the working session]

---

[Repeat for H2–H6]

---

## Working Session Guide

[Full 90-min agenda]

## Provocation Cards
[One card per hypothesis, formatted for printing/display]

## After the Session
[What to do with the output]
```

### Step 7: Populate the Project Site

If a project site exists at `~/strategy-projects/{slug}/site/`, offer to populate or update `hypotheses/page.tsx` with:
- All hypotheses (expandable cards, evidence for/against)
- Working session view (provocation cards, agenda, capture template)

The site page should have a toggle between "Hypotheses" view and "Working Session" view.

## Confidence Level Guide

| Level | Meaning | Primary research needed? |
|-------|---------|--------------------------|
| HIGH | 4+ strong findings directly support the hypothesis. Counter-evidence is weak or explainable. | No — ready to take to client |
| MEDIUM | 2–3 findings support but key gaps remain. Counter-evidence is substantive. | Yes — before committing to this direction |
| SPECULATIVE | Directional signal only. Hypothesis is worth holding but not betting on. | Yes — hypothesis should be marked as exploratory in client session |

## Integration with Other Modes

### After research:
`/strategy:research` → Phase 7 → `/strategy:hypotheses`

### Before narrative:
Validated hypotheses (those that survived client pressure test) become the strategic territories for `/strategy:narrative`.

### Courtroom option:
Instead of a client working session, run `/strategy:courtroom` on the full hypothesis set. The courtroom agents will challenge each one from different angles. Useful when client access is not yet available.

### Primary research bridge:
Hypotheses flagged MEDIUM or SPECULATIVE become the primary research brief. Each MEDIUM hypothesis generates at least one research question for `/strategy:primary-research` planning.

### Scratchpad → Hypotheses:
Items the user tags to the "Hypotheses" context in the scratchpad appear at the top of the Hypotheses page via `<ContextNotes sectionId="hypotheses" />`. Items routed with "Add to primary research" appear on the Primary Research page. Items investigated with "Research now" get inline Claude findings that inform hypothesis confidence levels.

### Site page structure (for reference when populating `hypotheses/page.tsx`):
- **Hypotheses view** (default): expandable cards, each with hypothesis statement, confidence badge, provocation in brand-color callout, evidence for/against in two-column layout
- **Working Session view** (toggled): 90-min agenda table, one provocation card per hypothesis with session question and three capture fields (Agree/amplify · Push back · Surprised by), After the Session guidance
- Toggle is client-side state (`useState<'hypotheses' | 'workshop'>`)
- Confidence colors: HIGH = green, MEDIUM = amber, SPECULATIVE = gray
