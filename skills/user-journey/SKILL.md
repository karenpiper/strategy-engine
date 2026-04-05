---
name: user-journey
description: |
  Build a mindset-based user journey map. Phases are buyer mindsets, not linear steps —
  each one is a distinct psychological state with a transformation arc. Pulls from Wave 2
  research and persona if available; prompts for input if not. Human defines scope,
  agent maps the research layer, human adds experiential knowledge for the mindset
  narratives (written in the human's voice), human curates which pain points and
  moments feel true and important.
  Use for "map the journey," "user journey," "journey mapping," "buying journey,"
  or as the journeys workstream in Wave 2.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections from the user
2. `rules/voice.md` — Voice rules apply to all output, especially mindset narratives
3. `rules/quality-gates.md` — Quality gates apply
4. `references/flow-framework.md` — Interaction model (wave context)
</required_reading>

# /strategy:user-journey

Maps how buyers actually move through a category — not as a funnel, but as a sequence of mindsets. Each phase captures where the person is psychologically, what's blocking them, what they need, and where the brand can reach them.

The mindset narratives are written in the user's voice, not the research's. Research grounds the challenge, need, and channel logic. The human fills in what research can't see.

## On Load

1. Check for an active project at `~/strategy-projects/{slug}/`.
2. If found: check `outputs/flow-audit.json` for Wave 2 status and any completed workstream outputs.
3. Look for:
   - Journey/persona research in `outputs/` or Wave 2 workstream notes
   - A persona document at `outputs/persona.md` or similar
4. Announce what's loaded:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER JOURNEY
Mindset-based. Human voice. Research-grounded.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

State what research and persona context is available. If none, note that the user will be prompted to provide it as we go.

---

## Phase 1: Scope

**Handoff type:** Human-leads → Agent develops

### Step 1a — Persona portrait

The portrait sits at the top of the journey map. It's a 3–5 sentence narrative paragraph describing who this person is, what's happening in their life that makes this category relevant, and what they're bringing into the journey emotionally. Written in third person. Specific, not categorical.

**Calibration:** "They are both sick of the snow and ready for some sun, nature, and a new food scene. Bre works in advertising and paints on the side. Her family immigrated to San Francisco from Mexico before eventually settling in the Midwest. She visited as a child, but always dreamed of going back. Josh is a history-loving audio engineer; type A, a planner by nature. Bre's the one who convinced him to book an impromptu mid-March escape."

**Not this:** "Millennial couple, HHI $120K+, interested in travel, values experiences over things."

If a persona exists in the project:
- Draft the portrait from it
- Ask if the user has experiential context to add — things the research doesn't capture

If no persona exists, ask:
> "Who's on this journey? Tell me about this person — who they are, what's happening in their life, why this category matters to them right now. Don't worry about completeness — I'll shape it into the portrait."

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER JOURNEY — Human leads → Agent develops
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Persona portrait

[Draft portrait paragraph — or prompt if no persona loaded]

  [ PASS THROUGH ]  This is right — move on
  [ SHAPE ]         Close, but adjust the framing
  [ ADD INPUT ]     There's context the research doesn't have
  [ OVERRIDE ]      I'll write the portrait myself
  [ PAUSE ]         I need to check something first
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Step 1b — Journey phases

Phases are mindsets — psychological states the buyer passes through, not process steps. They are not always linear. A buyer can move forward, loop back, or skip a phase entirely.

If Wave 2 research is loaded, propose draft phases based on what the research reveals about buyer behavior. If not, ask:
> "What are the phases of this journey? Name the distinct mental states this person moves through — from first awareness to post-purchase. Give me the phase names and a one-liner on what's happening in each. I'll draft the transformation arc subtitles."

The transformation arc subtitle is a two-to-four word shift written in uppercase: STATE BEFORE → STATE AFTER.
- Good: SCROLLING TO SAVING, BROWSING TO ALIGNING, HESITATION TO CONFIDENCE
- Not this: AWARENESS STAGE, PRE-PURCHASE, CONSIDERATION

Draft transformation arcs for each proposed phase. The user approves or rewrites.

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER JOURNEY — Human leads → Agent develops
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Journey phases

[Proposed phases with transformation arc subtitles]
Example format:
  Inspiration — SCROLLING TO SAVING
  Research — BROWSING TO ALIGNING
  Planning — HESITATION TO CONFIDENCE

  [ PASS THROUGH ]  These phases are right
  [ SHAPE ]         Some phases need renaming or restructuring
  [ ADD INPUT ]     There's a phase I want to add
  [ RIFF ]          Let's work through the phase structure together
  [ OVERRIDE ]      I'll define the phases myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Step 1c — Row structure

Present the default rows and ask the user to confirm, remove, or add before building anything:

> "Here are the default rows for each phase. Tell me what to cut or add:
>
> - **Mindset** — what the buyer is thinking, feeling, doing in this phase (written as a narrative — this is your voice, not the research's)
> - **Challenge** — the single emotional or practical blocker (one phrase)
> - **Need** — what they actually need from the brand at this phase (one phrase, bolded)
> - **Media and Comms** — the strategic communication role at this phase
> - **Channels** — specific channels active here
>
> Anything to remove or add?"

Wait for the user's confirmation before proceeding to Phase 2.

---

## Phase 2: Research Mapping

**Handoff type:** Agent-executes → Human-engages

The agent maps the current-state journey from research. The **Mindset row is left blank** — that belongs to Phase 3, when the human adds what research doesn't capture.

For each phase, populate every confirmed row except Mindset using:
- Wave 2 research and workstream outputs (if loaded)
- Persona insights
- Any additional research or context the user provides

Mark any cell where research is thin or absent: `[NEEDS INPUT]`

Present as a structured draft:

```
JOURNEY MAP — Research Layer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[Journey Title]: [Brand] Journey Overview — [Persona Name(s)]

[Portrait paragraph]

| ROW | [Phase 1] | [Phase 2] | [Phase 3] | ... |
|-----|-----------|-----------|-----------|-----|
| | [ARC SUBTITLE] | [ARC SUBTITLE] | [ARC SUBTITLE] | |
| MINDSET | — (Phase 3) | — | — | |
| CHALLENGE | [From research] | | | |
| NEED | [From research] | | | |
| MEDIA AND COMMS | [From research] | | | |
| CHANNELS | [From research] | | | |
[Additional rows if added]
```

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER JOURNEY — Agent executes → Human engages
Agent-led. I've mapped what research says. You tell me what's off.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Research layer

[Journey table above]
Cells marked [NEEDS INPUT] couldn't be answered from research.

  [ PASS THROUGH ]  Accurate — move to mindset narratives
  [ SHAPE ]         Some of these are off — let me redirect
  [ ADD INPUT ]     I have research or context to fill gaps
  [ RIFF ]          Let's go through this phase by phase
  [ PAUSE ]         I need to check the research first
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Phase 3: Experiential Enrichment — Mindset Narratives

**Handoff type:** Human-leads → Agent develops

Research tells you what the buyer does. The mindset narrative tells you what it feels like from inside. This is the human's knowledge — the texture, the specific behavior, the emotional reality that doesn't show up in a survey.

Work through each phase one at a time. For each:

> "**[Phase name] — [arc subtitle]**
>
> What's actually happening for this person in this moment? Describe the mindset in your own words — what they're thinking, what they're doing, who else is involved, what's triggering this phase or keeping them in it. Write it however it comes out — I'll shape it."

After the user responds:
- Develop their language into a third-person narrative of 3–5 sentences
- Match the calibration: specific, story-form, grounded in what the persona would actually do and feel
- Reflect it back for approval

**Interaction point (per phase):**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER JOURNEY — Human leads → Agent develops
Human-led. You know this person. I shape what you give me.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Mindset — [Phase Name]

[Developed mindset narrative — 3–5 sentences, third person, story-form]

  [ PASS THROUGH ]  That's right — next phase
  [ SHAPE ]         Close — adjust [specific element]
  [ ADD INPUT ]     I want to add something
  [ OVERRIDE ]      I'll write this one myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Move through all phases before proceeding to Phase 4.

---

## Phase 4: Prioritization — Pain Points and Moments

**Handoff type:** Human-leads → Agent develops

Present the completed map with all rows filled and ask the user to identify what feels true and important.

> "Here's the full map. Which pain points and moments feel most true — the ones you'd stake strategy on? And which feel like research findings that don't match your actual experience of this customer?
>
> Name the ones that matter. You don't need to be exhaustive."

After the user responds:
- Mark the identified moments and pain points with ★ in the map
- Look for a pattern: are the prioritized moments clustered in one phase? Is there a phase where nothing feels true?
- Surface the pattern with one observation — don't over-interpret, just name what you see:
  > "Most of what you flagged is in [Phase X]. That suggests either [Phase X] is where the brand has the biggest gap — or where it has the most leverage. Which is it?"

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER JOURNEY — Human leads
Human-led. You curate. I name the pattern.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Priority moments

[Full map with ★ markers on priority moments and pain points]
[One-sentence pattern observation]

  [ PASS THROUGH ]  That's the right read — lock it
  [ SHAPE ]         The pattern reads differently to me
  [ ADD INPUT ]     There are moments I want to add
  [ RIFF ]          Let's talk through what this means strategically
  [ PAUSE ]         I want to sit with this before locking
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Final Deliverable

Produce the complete journey document:

```markdown
# [Brand] Journey Overview — [Persona Name(s)]
*[Date]*

---

[Portrait paragraph — 3–5 sentences, narrative, specific to this person]

---

| | **[Phase 1]** | **[Phase 2]** | **[Phase 3]** | ... |
|---|---|---|---|---|
| | *[ARC SUBTITLE]* | *[ARC SUBTITLE]* | *[ARC SUBTITLE]* | |
| **MINDSET** | [Narrative] | [Narrative] | [Narrative] | |
| **CHALLENGE** | [One phrase] | | | |
| **NEED** | **[Bold phrase]** | | | |
| **MEDIA AND COMMS** | [Strategy sentence] | | | |
| **CHANNELS** | [Channel list] | | | |
[Additional rows]

★ Priority moment or pain point

---

## What This Map Says

[3–5 sentences. The strategic read on the journey as a whole. Where is the brand most needed? Where is the biggest gap between what the buyer needs and what exists? What does the priority pattern reveal? This is not a summary — it's a strategic implication.]
```

**Save to:** `outputs/user-journey.md` in the active project folder.

**If in wave context:** Update `flow-audit.json` — mark the journeys workstream as complete. Log the priority moments in the workstream record.

---

## Quality Check

Before delivering:

| Check | Pass/Fail |
|-------|-----------|
| Portrait reads as a specific person in a specific situation — not a demographic profile | |
| Each transformation arc subtitle is a genuine psychological shift (before → after state), not a process label | |
| Mindset narratives are third-person, story-form, specific to the persona — not research summaries | |
| Challenge and Need are distinct — Challenge is the blocker, Need is what would resolve it | |
| No cell contains a generic category-level claim — everything is specific to this brand and buyer | |
| Priority moments are marked ★ and a strategic pattern is named | |
| "What This Map Says" contains a strategic implication, not a summary of what's in the map | |

---

## Observation

Log per `rules/observation.md`. Track: number of phases defined, which rows were included or removed, how many cells were marked NEEDS INPUT in Phase 2, how many priority moments the user identified in Phase 4, and which phase the priority moments clustered in.

---

## Integration

### Wave 2 → User Journey
The journeys workstream in Wave 2 feeds directly into this skill. Research loaded from Wave 2 populates Phase 2. On completion, the journey output feeds Wave 3 synthesis for the journeys workstream.

### User Journey → Insight Distill
The priority moments from Phase 4 — especially the Challenge and Mindset rows — are direct inputs for `/strategy:insight-distill`. The tension between what the buyer needs and what currently exists is often where the strategic insight lives.

### User Journey → Brief
The Need row, especially in the priority phases, is a strong input for the brief's insight and proposition. The Challenge row often contains the brief's tension.

### User Journey → Campaign Planning
The Media and Comms and Channels rows feed directly into `/strategy:campaign-planning` channel logic. The phase structure maps to the campaign's audience journey model in Phase 2 (Campaign Architecture).
