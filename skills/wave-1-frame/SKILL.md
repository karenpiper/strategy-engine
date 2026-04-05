---
name: wave-frame
description: |
  Wave 1 of the strategy flow. Human-led framing of the strategic challenge, engagement scope,
  research plan, and business outcomes. The gate before Wave 2 begins. Run this at the start
  of any new engagement before any research or synthesis work.
---

<required_reading>
1. `feedback-log.md`
2. `references/flow-framework.md`
3. `references/measurement-thread.md`
4. `rules/process.md`
5. `rules/voice.md`
6. `rules/quality-gates.md`
</required_reading>

# /strategy:wave-frame

Wave 1 of the strategy flow. Everything starts here. Nothing in Wave 2 begins until this wave's gate is passed.

## On Load

1. Load `~/strategy-projects/{slug}/project-context.md` for the active project.
2. Load `~/strategy-projects/{slug}/outputs/flow-audit.json`. If it doesn't exist, create it using the initial schema from `references/flow-framework.md`.
3. Check current wave status. If Wave 1 is `complete`, confirm: "Wave 1 is already complete. Want to revisit it or review what was captured?" If `in-progress`, show what's been captured so far and ask where to continue.

## Wave Header

Display this before any other output:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 1 · FRAME
Human-led. You articulate. I sharpen, ask questions, surface gaps.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Steps

### Step 1 — Challenge Articulation

**Handoff type:** `human-leads-agent-develops`

Ask the human to articulate the challenge:
> "Start wherever feels right — what do you know and believe about this challenge? What's the problem, who has it, and what's making it hard to solve?"

Wait for the response. Then:
- Reflect back what you heard, compressed into 1-2 sentences
- Ask one sharpening question — the most important gap or tension you noticed
- Don't ask multiple questions at once. Ask the one that matters most.

Keep going — ask, sharpen, ask again — until the challenge statement is specific enough that it forecloses a range of strategic approaches. "We need to grow" doesn't foreclose anything. "We need to grow among enterprise buyers who currently see us as infrastructure, not transformation" does.

**Interaction point:** When the challenge statement feels solid.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 1 · FRAME — Human leads → Agent develops
Human-led. You articulate. I sharpen.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Strategic challenge

Here's how I heard it: [1-2 sentence compression]

[One question that would sharpen it further — or note that it's ready]

  [ PASS THROUGH ]  Sounds right — keep going
  [ SHAPE ]         Not quite — let me redirect
  [ ADD INPUT ]     There's context I haven't shared yet
  [ RIFF ]          Let's push this further together
  [ OVERRIDE ]      I want to state it differently
  [ PAUSE ]         I need to think about this
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

After the human responds, write the interaction to `flow-audit.json`:
- Wave 1 status → `in-progress`
- Step: `Strategic challenge framing`
- Handoff type: `human-leads-agent-develops`
- Mode: [whatever the human chose]

---

### Step 2 — Business Outcomes

**Handoff type:** `human-leads-agent-develops`

This is the measurement thread anchor. It must be defined here.

Ask:
> "Before we scope the research — what does the business actually need to move as a result of this work? Not strategy objectives. Business outcomes — revenue, retention, share, perception shift. What are you accountable for?"

If the human gives vague outcomes ("increase brand awareness"), push back once:
> "What business result does brand awareness drive for you? Is it revenue, retention, pricing power, or something else? I want to anchor the measurement thread to something the business actually tracks."

Document the outcomes in measurable form. Update `measurementThread.businessOutcomes` in `flow-audit.json`.

**Interaction point:** After outcomes are defined.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 1 · FRAME — Human leads → Agent develops
Human-led. You articulate. I sharpen.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Business outcomes

[List outcomes as recorded, in measurable form]

These anchor the measurement thread for the rest of the engagement.
Any insight or strategy that can't connect back to these will be deprioritized at Wave 4.

  [ PASS THROUGH ]  These are right
  [ SHAPE ]         Close, but let me adjust
  [ ADD INPUT ]     There's more context here
  [ OVERRIDE ]      I want to restate these
  [ PAUSE ]         I need to confirm these internally first
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Business outcomes`, update `measurementThread.businessOutcomes`.

---

### Step 3 — Engagement Scope

**Handoff type:** `agent-executes-human-engages`

Based on the challenge and context, draft which Wave 2 workstreams are needed. Be specific about why each is included or excluded.

Present as:

```
PROPOSED SCOPE

Active workstreams:
  ✓ Secondary research — [why: what themes matter most]
  ✓ Competitive audit — [why: who the relevant set is]
  ✓ Personas — [why: who the audience question is about]
  ✓ Owned audit — [why: or skip if not relevant]
  ✓ Ecosystem / cultural context — [why: or skip]
  ✓ Journeys — [why: or skip]

Conditional:
  ? Stakeholder interviews — [the case for / against, human decides]
  ? Primary research — [the case for / against, human decides]

Not needed for this engagement:
  ✗ [workstream] — [brief reason]
```

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 1 · FRAME — Agent executes → Human engages
Human-led. You articulate. I sharpen.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Engagement scope

[Scope draft above]

  [ PASS THROUGH ]  This is right
  [ SHAPE ]         Some workstreams need adjusting
  [ ADD INPUT ]     There are constraints I haven't mentioned
  [ OVERRIDE ]      I want to define scope myself
  [ PAUSE ]         I need to check something before deciding
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Engagement scope`.

---

### Step 4 — Research Plan

**Handoff type:** `agent-executes-human-engages`

Draft a research plan for the active workstreams. For each:
- What we're trying to learn
- Where we'll look (sources, methodologies)
- What a strong output looks like
- Any constraints (access, time)

Keep it tight. This is a plan, not a methodology document.

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 1 · FRAME — Agent executes → Human engages
Human-led. You articulate. I sharpen.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Research plan

[Research plan summary — 1-2 lines per active workstream]

  [ PASS THROUGH ]  Let's go
  [ SHAPE ]         Adjust priorities or focus
  [ ADD INPUT ]     There's something specific I need from certain workstreams
  [ RIFF ]          Talk through the research approach together
  [ OVERRIDE ]      I'll direct the research myself
  [ PAUSE ]         Not ready to start yet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Research plan`.

---

## Gate

Wave 1 is complete when all four are human-approved:

```
WAVE 1 GATE
─────────────────────────────────────────
[ ] Strategic challenge statement — specific enough to foreclose approaches
[ ] Business outcomes — at least 1 measurable outcome defined
[ ] Engagement scope — which workstreams are active, which are conditional/closed
[ ] Research plan — confirmed
─────────────────────────────────────────
```

When the gate passes:
1. Set Wave 1 status to `complete` in `flow-audit.json`
2. Update `lastUpdated`
3. Announce:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 1 COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Challenge: [1-sentence statement]
Outcomes:  [list]
Scope:     [active workstreams]

Ready for Wave 2. Run /strategy:wave-gather to begin.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
