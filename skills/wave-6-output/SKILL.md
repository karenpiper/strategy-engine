---
name: wave-output
description: |
  Wave 6 of the strategy flow. Agent drafts; human authors. Strategic brief, strategy narrative,
  measurement framework, and optional campaign plan. The brief and measurement framework are
  always required. Human signs off on all deliverables before the engagement closes.
  Run after Wave 5 is complete.
---

<required_reading>
1. `feedback-log.md`
2. `references/flow-framework.md`
3. `references/measurement-thread.md`
4. `references/the-pipeline.md` (brief structure + quality gate)
5. `rules/process.md`
6. `rules/voice.md`
7. `rules/quality-gates.md`
</required_reading>

# /strategy:wave-output

Wave 6. The deliverables. Agent drafts; human authors. Everything flows from what was approved in Waves 4 and 5.

## On Load

1. Load `~/strategy-projects/{slug}/project-context.md` and `~/strategy-projects/{slug}/outputs/flow-audit.json`.
2. Confirm Wave 5 is complete and the theory of change is defined in `measurementThread`.
3. Confirm `measurementThread.businessOutcomes`, `theoryOfChange`, `leadingIndicators`, and `laggingIndicators` are all populated. If any are missing, surface the gap before writing anything.
4. Load the full audit history — brief and measurement framework both draw from accumulated wave state.

## Wave Header

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 6 · OUTPUT
Agent drafts. Human authors. You shape language, order, emphasis.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Display what's being produced:

```
Deliverables for this engagement:
  ✓ Strategic Brief (always required)
  ✓ Measurement Framework (always required)
  [✓/—] Strategy Narrative (if brand strategy engagement)
  [✓/—] Campaign Plan (if output is a campaign)
```

---

## Deliverable 1 — Strategic Brief

**Handoff type:** `agent-executes-human-engages` → `human-leads-agent-develops`
**Always required.**

### Draft

Agent drafts from the accumulated wave state:
- Challenge statement and audience: from Wave 1 and persona work in Wave 2
- Insights: from Wave 4 final set
- Proposition / organizing idea: from Wave 5
- Success metrics: from Wave 1 business outcomes + Wave 5 theory of change
- Constraints: from Wave 1 scope
- What we're not doing: from Wave 1 scope + Wave 5 direction (what was explicitly ruled out)

Use the brief structure from `references/the-pipeline.md`. Apply Voice DNA and Copy Polish before presenting.

**The brief does not get longer based on engagement size.** Research depth varies. The brief stays 2-4 pages.

**Interaction point — first draft:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 6 · OUTPUT — Agent executes → Human engages
Agent drafts. Human authors.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Strategic brief — first draft

[Brief above]

You author this. What needs to change — language, order, emphasis, what's missing,
what's wrong?

  [ PASS THROUGH ]  Close — run the quality gate
  [ SHAPE ]         Specific sections need work
  [ ADD INPUT ]     Things that should be in here that the waves didn't capture
  [ RIFF ]          Talk through how to frame a specific section
  [ OVERRIDE ]      I want to write sections myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Iterate until the human is satisfied.

### Quality Gate

Before locking the brief, run all three layers from `references/the-pipeline.md`:

```
BRIEF QUALITY GATE
─────────────────────────────────────────
Layer 1: Strategic Integrity    ___/50
Layer 2: Voice Quality          ___/50
Layer 3: Polish (client only)   ___/50
─────────────────────────────────────────
All layers must hit 35/50 to lock.

RALLYING CRY CHECK:
[ ] 2-5 words
[ ] Makes a choice a competitor wouldn't make
[ ] A designer can gut-check a layout against it
[ ] Someone not in the room can repeat it after hearing it once
```

Score each layer. If any layer is below 35, revise before presenting the final brief. Surface weak dimensions with specific examples of what's failing.

**Interaction point — quality gate results:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 6 · OUTPUT — Quality gate
Agent drafts. Human authors.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Brief quality gate

Layer 1: Strategic Integrity — [score]/50
Layer 2: Voice Quality — [score]/50
[Layer 3: Polish — [score]/50] (if client-facing)

[Any dimensions below 7: flagged with specific example]

  [ PASS THROUGH ]  Scores are acceptable — lock the brief
  [ SHAPE ]         Revise the flagged dimensions
  [ RIFF ]          Talk through how to fix a specific weakness
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Skill: `brief-co-authoring` for any sections that need significant revision.

When brief is locked, write to project site if it exists: add brief content to `/client-brief` page.

Write to audit: step `Strategic brief — locked`.

---

## Deliverable 2 — Measurement Framework

**Handoff type:** `agent-executes-human-engages`
**Always required.** Should largely write itself from the accumulated measurement thread state.

### Draft

Pull from `measurementThread`:
- Business outcomes (Wave 1)
- Theory of change (Wave 5)
- Leading indicators (Wave 5)
- Lagging indicators (Wave 5)
- Any insights explicitly deprioritized for lacking a path to results (Wave 4)

Structure:

```markdown
# Measurement Framework

## What We're Accountable For
[Business outcomes from Wave 1 — the targets the engagement is measured against]

## The Theory of Change
[The mechanism: if we do X, then Y moves because Z]

## How We'll Know It's Working
**Early signals (30-90 days):**
[Leading indicators — specific, observable, named]

**Business movement (12-18+ months):**
[Lagging indicators — the outcomes themselves with targets and timeframes]

## What We're NOT Measuring
[Things that will move but aren't the goal — explicit exclusions prevent metric drift]

## What Good Looks Like at 6 Months
[A concrete picture of the strategy working — specific signals, not aspirational language]
```

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 6 · OUTPUT — Agent executes → Human engages
Agent drafts. Human authors.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Measurement framework

[Framework above]

Does this reflect what was actually agreed? Are the indicators measurable with what you have access to?

  [ PASS THROUGH ]  This is right — lock it
  [ SHAPE ]         Some indicators need adjusting
  [ ADD INPUT ]     Measurement context I know that the research didn't surface
  [ OVERRIDE ]      I want to write the framework myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Skill: `marketing:performance-report` for full measurement framework development if needed.

Write to audit: step `Measurement framework — locked`.

---

## Deliverable 3 — Strategy Narrative *(if brand strategy engagement)*

**Handoff type:** `agent-executes-human-engages`

Once the brief is locked, the agent transforms it into a narrative that moves people — the version for stakeholder communication, not just strategy documentation.

- The brief is the strategic skeleton; the narrative gives it a spine and a voice
- Human shapes voice, arc, and emphasis
- Apply narrative engines from `references/narrative-engines.md` — pick the structure that fits the strategic situation

Skill: `strategy-narrative`

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 6 · OUTPUT — Agent executes → Human engages
Agent drafts. Human authors.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Strategy narrative

Narrative engine used: [which of the 4 engines and why]

[Narrative above]

You author this. What needs to change in the arc, voice, or emphasis?

  [ PASS THROUGH ]  Close — run narrative review
  [ SHAPE ]         Specific sections or the arc need work
  [ RIFF ]          Not landing — let's rebuild it
  [ OVERRIDE ]      I want to restructure this myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Run `strategy:narrative-review` before the narrative goes to stakeholders.

Write to audit: step `Strategy narrative — locked`.

---

## Deliverable 4 — Campaign Plan *(if output is a campaign)*

**Handoff type:** `agent-executes-human-engages`

Skill: `marketing:campaign-planning`

Write to audit: step `Campaign plan — locked`.

---

## Sign-Off

When all deliverables are complete:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 6 · OUTPUT — Sign-off
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Engagement close

Deliverables completed:
  ✓ Strategic Brief
  ✓ Measurement Framework
  [✓] Strategy Narrative
  [✓] Campaign Plan

Human sign-off required before the engagement closes.

  [ PASS THROUGH ]  Signed off — engagement complete
  [ SHAPE ]         One more round on [deliverable]
  [ PAUSE ]         Not ready to close yet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

When signed off:

1. Set Wave 6 status to `complete` in `flow-audit.json`
2. Update `lastUpdated`
3. Announce:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 6 COMPLETE — ENGAGEMENT CLOSED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Client name] strategy engagement complete.

All 6 waves complete. Flow audit at: /flow-audit on the project site.

Commit and push the plugin if any feedback log entries or skill updates were made this session:
cd ~/.claude/plugins/local/strategy-engine
git add -A && git status --short
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
