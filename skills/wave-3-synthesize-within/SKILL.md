---
name: wave-synthesize-within
description: |
  Wave 3 of the strategy flow. Collaborative per-workstream synthesis. Rolling — each
  workstream synthesizes as it completes, doesn't wait for all to finish. Agent structures
  the raw material; the human calls what's interesting. Run after Wave 2 workstreams complete.
---

<required_reading>
1. `feedback-log.md`
2. `references/flow-framework.md`
3. `references/recursive-loops.md`
4. `rules/process.md`
5. `rules/voice.md`
6. `rules/quality-gates.md`
</required_reading>

# /strategy:wave-synthesize-within

Wave 3. Per-workstream synthesis. Collaborative — agent structures, human sense-makes.

## On Load

1. Load `~/strategy-projects/{slug}/project-context.md` and `~/strategy-projects/{slug}/outputs/flow-audit.json`.
2. Check which workstreams completed in Wave 2. Synthesis only runs on completed workstreams.
3. Confirm Wave 2 has at least one completed workstream. If none: "No workstreams are complete yet. Wave 3 runs as Wave 2 workstreams finish — check back when at least one is complete, or run `/strategy:wave-gather` to continue gathering."

## Wave Header

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 3 · SYNTHESIZE WITHIN
Collaborative. I structure the raw material. You call what's interesting.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Show synthesis status on load:

```
Workstreams ready to synthesize: [list]
Workstreams still gathering: [list]
Workstreams closed: [list]
```

## The Pattern

Every workstream follows the same synthesis pattern. Run it for each completed workstream.

### Step 1: Structure (Agent)

Agent organizes raw material from the workstream into themes and patterns.
**No judgment yet. No interpretation. Just structure.**

The agent's job at this step: make the material navigable. Group it. Name the clusters.
Surface things that appear multiple times. Flag contradictions. Don't draw conclusions — that's the human's job.

Output format:
```
[WORKSTREAM NAME] — STRUCTURED MATERIAL

Theme 1: [label]
  - [finding/quote/data point]
  - [finding/quote/data point]

Theme 2: [label]
  - [finding/quote/data point]

Appears more than once:
  - [things that came up across multiple sources or sessions]

Contradictions:
  - [X says A, Y says B — no resolution yet]

Things I couldn't place:
  - [material that didn't fit a theme but might matter]
```

---

### Step 2: Human Engages

**Handoff type:** `agent-executes-human-engages` → shifts to `human-leads-agent-develops`

Surface the structured material and ask:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 3 · SYNTHESIZE WITHIN — [WORKSTREAM NAME]
Collaborative. I structure. You call what's interesting.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Raw material structured

[Structured material above]

What's interesting here? What's surprising? What should I develop?

  [ PASS THROUGH ]  Move to synthesis — nothing to add
  [ SHAPE ]         Some of this is being grouped wrong
  [ ADD INPUT ]     Things I noticed that aren't showing up here
  [ RIFF ]          Let's figure out what this is actually saying
  [ PAUSE ]         I need to sit with this material before we synthesize
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `[Workstream] — raw material`, mode chosen.

---

### Step 3: Agent Develops What the Human Surfaced

**Handoff type:** `human-leads-agent-develops`

The human calls something interesting. The agent develops it:
- Articulates it more precisely
- Adds evidence from the structured material
- Looks for patterns that support or complicate it
- Asks one question that would sharpen it further

This is the turning point from structure to meaning. The human brings the judgment; the agent brings the development. Don't flip this — the agent should not declare what's interesting unprompted.

---

### Step 4: Human Decides What the Synthesis Says

**Handoff type:** `human-leads-agent-develops`

Agent drafts the workstream synthesis based on what the human surfaced and developed. Human authors it — shapes language, emphasis, and what gets included.

A strong workstream synthesis:
- Has a point of view — it's not a summary
- Names 2-3 things that are true about this workstream that weren't obvious at the start
- Includes tension if there is one: "X is true, but so is Y — and they pull against each other"
- Is specific enough that it couldn't apply to a different project

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 3 · SYNTHESIZE WITHIN — [WORKSTREAM NAME]
Collaborative. I structure. You call what's interesting.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Workstream synthesis draft

[Synthesis draft — 2-4 paragraphs with a point of view]

Does this say what you want it to say? You author the final version.

  [ PASS THROUGH ]  This is right
  [ SHAPE ]         The emphasis or framing needs adjusting
  [ ADD INPUT ]     Something missing that should be in here
  [ RIFF ]          Not there yet — let's work through it
  [ OVERRIDE ]      I want to write this myself
  [ PAUSE ]         Not ready to lock this workstream
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `[Workstream] — synthesis`, mode chosen.

---

## Workstream-Specific Skills

Invoke these at the synthesis step (Step 4) for the relevant workstreams:

| Workstream | Skill |
|---|---|
| Primary research | `design:research-synthesis` |
| Stakeholder interviews | `design:research-synthesis` |
| Competitive audit | `marketing:competitive-brief` |
| Personas | `persona-engine:persona-audit` |
| Secondary research | No dedicated skill — agent synthesizes directly |
| Owned audit | No dedicated skill — agent synthesizes directly |
| Ecosystem / cultural context | No dedicated skill — agent synthesizes directly |
| Journeys | No dedicated skill — agent synthesizes directly |

---

## Loop Watch

At every synthesis step, watch for the **Gather Gap Loop** trigger:

> Human says "I wish we'd looked at X" or "we're missing data on Y" or the synthesis has a visible hole that changes its meaning.

If the trigger fires:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOOP SIGNAL — GATHER GAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
I noticed a potential gap: [what's missing and why it matters to the synthesis]

Options:
  A. Return to Wave 2 — reopen [specific workstream] to fill this gap
  B. Flag it as a known limitation and proceed with what we have
  C. Pause while you decide whether it's worth going back

What would you like to do?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

If human chooses A: write loop to audit (`type: "gather-gap"`, `fromWave: 3`, `toWave: 2`), return to Wave 2.

See `references/recursive-loops.md` for full loop protocol.

---

## Wave 3 Complete

When all active workstreams have synthesized:

1. Set Wave 3 status to `complete` in `flow-audit.json`
2. Announce:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 3 COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Workstreams synthesized: [list]

Synthesis documents ready:
  [workstream] — [one-line summary of what it found]
  [workstream] — [one-line summary]

Ready for Wave 4. Run /strategy:wave-synthesize-across to begin.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
