---
name: wave-synthesize-across
description: |
  Wave 4 of the strategy flow. Human-led cross-workstream synthesis. The human surfaces
  insight candidates; the agent develops and challenges them. Mandatory path-to-result check
  against Wave 1 business outcomes. The most intellectually demanding wave.
  Run after all Wave 3 workstream syntheses are complete.
---

<required_reading>
1. `feedback-log.md`
2. `references/flow-framework.md`
3. `references/recursive-loops.md`
4. `references/measurement-thread.md`
5. `rules/process.md`
6. `rules/voice.md`
7. `rules/quality-gates.md`
</required_reading>

# /strategy:wave-synthesize-across

Wave 4. Cross-workstream synthesis. The human drives; the agent develops. Insights earn their place.

## On Load

1. Load `~/strategy-projects/{slug}/project-context.md` and `~/strategy-projects/{slug}/outputs/flow-audit.json`.
2. Confirm Wave 3 is complete. If not: "Wave 3 isn't complete yet — there are workstream syntheses still in progress. Wave 4 requires all within-workstream syntheses to be done first."
3. Load all workstream syntheses from the Wave 3 output.
4. Load the business outcomes from `measurementThread.businessOutcomes` — these anchor the path-to-result check.

## Wave Header

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 4 · SYNTHESIZE ACROSS
Human-led. You drive the intellectual work. I develop what you surface.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Display business outcomes at the start — they're the lens for this wave:

```
Business outcomes (from Wave 1):
[list from measurementThread.businessOutcomes]

Every insight candidate will be checked against these before the wave closes.
```

---

## Steps

### Step 1 — Present Organized Material

**Handoff type:** `agent-executes-human-engages`

Agent organizes all workstream syntheses for cross-view. The goal is not to add interpretation yet — it's to make patterns, tensions, and contradictions visible across workstreams.

Structure the presentation:

```
CROSS-WORKSTREAM VIEW

Patterns (things that appear across multiple workstreams):
  - [pattern] — seen in [workstream A] and [workstream B]

Tensions (things that pull against each other):
  - [X] vs. [Y] — [workstream A says X, workstream C implies Y]

Surprises (things that weren't predicted by the challenge framing):
  - [finding] — from [workstream]

Gaps (things the research didn't answer):
  - [gap] — which workstream it came from, why it's still open

What the hypotheses predicted vs. what the research actually showed:
  - Hypothesis: [stated hypothesis] → [confirmed / complicated / disproved]
```

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 4 · SYNTHESIZE ACROSS — Agent executes → Human engages
Human-led. You drive. I develop what you surface.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Cross-workstream material

[Cross-workstream view above]

Spend time with this. What's genuinely interesting? What's surprising?
What pattern or tension is the research actually about?

  [ PASS THROUGH ]  I see it — let me name what's interesting
  [ ADD INPUT ]     Context that changes how to read this
  [ RIFF ]          Let's figure out what this material is pointing to
  [ PAUSE ]         I need more time with this before naming insights
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Cross-workstream material presented`.

---

### Step 2 — Human Surfaces Insight Candidates

**Handoff type:** `human-leads-agent-develops`

The human articulates insight candidates **in their own words**. Not the agent's words — the human's.

Ask:
> "What do you find genuinely interesting or surprising in this material? State it the way you'd say it to someone in a hallway — not as a finding, as a belief."

If the human hesitates, ask more specifically:
> "What's the one thing this research changed for you? Or confirmed in a way that surprised you? Or what's the tension here that isn't obvious?"

Do not propose insight candidates on behalf of the human. The intellectual work at this step belongs to them.

---

### Step 3 — Develop and Challenge Each Candidate

**Handoff type:** `human-leads-agent-develops`

For each candidate the human surfaces:

1. **Restate it precisely** — "Here's how I'd sharpen what you said: [precise version]"
2. **Add evidence** — what in the research supports it; which workstreams have material that builds the case
3. **Challenge it** — what complicates it, what argues against it, what would need to be true for it to hold
4. **Test its specificity** — could this apply to a different brand or category? If yes, it's not sharp enough yet
5. **Push until it's real** — an insight has tension inside it. "People want simplicity" is an observation. "People say they want simplicity, but they make decisions based on completeness — and they're embarrassed to admit it" is an insight.

For each candidate, surface an interaction point:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 4 · SYNTHESIZE ACROSS — Human leads → Agent develops
Human-led. You drive. I develop what you surface.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Insight candidate — [working title]

As stated: [human's version]
Sharpened: [agent's precise version]
Evidence: [what supports it from the research]
Challenge: [what complicates or argues against it]
Specificity check: [does this apply only to this brand/moment, or could it be anyone's?]

Is this one worth pursuing? And does the sharpened version sound right?

  [ PASS THROUGH ]  Yes — add it to the set
  [ SHAPE ]         Close but the framing needs work
  [ ADD INPUT ]     There's more evidence I can bring
  [ RIFF ]          Let's push it further
  [ OVERRIDE ]      I want to state this insight myself
  [ PAUSE ]         Not sure yet — hold it
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Skill: `brief-co-authoring` for insight sharpening. Invoke if the candidate is stuck.

Write to audit after each confirmed insight: step `Insight — [title]`.

---

### Step 4 — Path-to-Result Check

**Handoff type:** `human-leads-agent-develops`
**Mandatory.** Runs after all insight candidates are confirmed.

For each confirmed insight, run the check against the Wave 1 business outcomes:

```
PATH-TO-RESULT CHECK

Business outcomes:
[list from measurementThread.businessOutcomes]

Insight: [insight statement]
Path to result: [how does acting on this insight plausibly move one of the outcomes?]
Connection: CLEAR / INDIRECT / UNCLEAR

If UNCLEAR: this insight drops in priority. It stays visible but isn't load-bearing for strategy development.
```

Surface the check as an interaction point:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 4 · SYNTHESIZE ACROSS — Human leads → Agent develops
Human-led. You drive. I develop what you surface.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Path-to-result check

[Check results per insight, as above]

Insights with clear connection: [list]
Insights with indirect or unclear connection: [list]

Do you agree with these assessments? Any insights you'd override on strategic instinct
even without a clear path to the stated outcomes?

  [ PASS THROUGH ]  Agreed — prioritize the connected insights
  [ SHAPE ]         Reassess some of these connections
  [ ADD INPUT ]     Strategic instinct that the check is missing
  [ OVERRIDE ]      Different prioritization than the check suggests
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Update `measurementThread.insightsWithoutPath` in `flow-audit.json` for any insights that fail the check but are kept.

---

### Step 5 — Prioritize and Structure the Final Insight Set

**Handoff type:** `human-leads-agent-develops`

Human sets the priority order. Agent structures the final insight set.

A strong final insight set:
- 3-5 insights (rarely more)
- Each one is true, motivating, and actionable
- Together they point toward the same strategic territory — not in different directions
- Each one has a path to a result

Skill: `strategy-assessment` for quality check on the full set.

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 4 · SYNTHESIZE ACROSS — Human leads → Agent develops
Human-led. You drive. I develop what you surface.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Final insight set

[Prioritized insight set]

Together, these point toward: [one sentence on the strategic territory they're opening up]

  [ PASS THROUGH ]  This is the set — ready for Wave 5
  [ SHAPE ]         The priority order or set composition needs adjusting
  [ ADD INPUT ]     One more insight I want to add
  [ RIFF ]          Talk through what these insights are opening up
  [ OVERRIDE ]      I want to define the final set myself
  [ PAUSE ]         I want to sit with this before locking
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Optional: run `persona-engine:persona-chat` to test the insight set against a persona before locking.

Write to audit: step `Final insight set`.

---

## Quality Check

Before declaring Wave 4 complete, check the insight set against:

- [ ] Each insight has tension inside it — not just an observation
- [ ] Each insight is specific to this brand, audience, and moment (not generic)
- [ ] Together they point toward a coherent strategic territory
- [ ] Each confirmed insight has a path-to-result (or the deviation is explicit and human-approved)
- [ ] The set has 3-5 insights — not 8, not 1

If any check fails, surface it before the gate passes.

---

## Loop Watch

**Reframe Loop:** If cross-synthesis reveals the actual question is different from what Wave 1 framed → surface immediately.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOOP SIGNAL — REFRAME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The original question: [from Wave 1 challenge statement]
What the research is actually pointing toward: [the new framing]
The specific finding that forced this: [name it]

Options:
  A. Return to Wave 2 — gather under the new framing
  B. Return to Wave 3 — re-synthesize existing material through the new lens
  C. Proceed with the new framing without going back (accept the limitation)

What would you like to do?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**External Validation Loop:** Can be triggered after the insight set is formed — bring the client in to sense-check strategic direction before Wave 5 begins. See `references/recursive-loops.md`.

---

## Wave 4 Complete

When the final insight set is human-approved and the path-to-result check is complete:

1. Set Wave 4 status to `complete` in `flow-audit.json`
2. Announce:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 4 COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Final insight set ([N] insights):
  1. [insight title]
  2. [insight title]
  3. [insight title]

Insights deprioritized (no clear path to outcomes): [list or "none"]

These insights open up: [one sentence on strategic territory]

Ready for Wave 5. Run /strategy:wave-strategy to begin.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
