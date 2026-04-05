---
name: wave-strategy
description: |
  Wave 5 of the strategy flow. Human-led strategy development — strategic question, direction,
  organizing idea, messaging, and theory of change. Every decision belongs to the human.
  The agent develops; the human authors. Theory of change is required before the wave closes.
  Run after Wave 4's final insight set is approved.
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

# /strategy:wave-strategy

Wave 5. Strategy development. Every decision belongs to the human. The agent develops direction, doesn't set it.

## On Load

1. Load `~/strategy-projects/{slug}/project-context.md` and `~/strategy-projects/{slug}/outputs/flow-audit.json`.
2. Confirm Wave 4 is complete and the final insight set is loaded.
3. Load `measurementThread.businessOutcomes` — the theory of change at the end of this wave must connect back to these.

## Wave Header

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 5 · STRATEGY DEVELOPMENT
Human-led decisions at every turn. I develop. You author.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Display the insight set as the starting point:

```
Starting from [N] insights:
  1. [insight]
  2. [insight]
  ...

Opening toward: [one-sentence strategic territory from Wave 4]
```

---

## Steps

### Step 1 — Strategic Question

**Handoff type:** `human-leads-agent-develops`

The strategic question defines what the strategy is answering. It should be specific enough to foreclose bad answers and open enough to allow good ones.

Ask:
> "Based on these insights — what's the strategic question you're actually trying to answer? Not the challenge from Wave 1. The question the insights are forcing."

Human states it in their own words. Agent:
- Sharpens the language
- Surfaces implications: "If this is the question, here's what kinds of answers it rules out and what it opens up"
- Flags if the question is too broad (not a question — a topic) or too narrow (already determines the answer)

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 5 · STRATEGY DEVELOPMENT — Human leads → Agent develops
Human-led decisions at every turn.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Strategic question

As stated: [human's version]
Sharpened: [agent's version]

Implications:
  If this is the question, good answers will... [what they'll do]
  Bad answers will... [what they'll avoid]

  [ PASS THROUGH ]  This is the question
  [ SHAPE ]         The framing needs adjusting
  [ ADD INPUT ]     The insights point to a different question
  [ RIFF ]          Not sure we're asking the right thing — let's work through it
  [ OVERRIDE ]      I want to state the question myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Strategic question`.

---

### Step 2 — Direction

**Handoff type:** `agent-executes-human-engages` → `human-leads-agent-develops`

Agent surfaces strategic possibilities and their implications — not options to pick from, but material for human thinking. These are starting points, not proposals.

Format each possibility as:
```
Possibility: [a direction in one sentence]
What it bets on: [the core assumption it requires to be true]
What it gives up: [what it chooses not to pursue]
Where it leads: [the kind of strategy and output it produces]
Tension with insights: [any insight it doesn't fully serve]
```

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 5 · STRATEGY DEVELOPMENT — Agent executes → Human engages
Human-led decisions at every turn.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Strategic possibilities

[Possibilities above — 3-4 max]

These are starting points, not proposals. What's interesting here?
What direction do you want to explore?

  [ PASS THROUGH ]  I see it — [direction] is where I want to go
  [ SHAPE ]         Something between these possibilities
  [ ADD INPUT ]     A direction the research isn't generating but I believe in
  [ RIFF ]          Let's build out one of these together
  [ OVERRIDE ]      I already know the direction — let me state it
  [ PAUSE ]         I need to think before deciding
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Once direction is set, the human owns it. Agent develops from there — don't re-open the direction decision.

Write to audit: step `Strategic direction`.

---

### Step 3 — Organizing Idea

**Handoff type:** `human-leads-agent-develops`

The organizing idea is the strategic center — the thing every execution decision refers back to. It's not a tagline. It's the concept that makes everything cohere.

Ask:
> "What's the organizing idea? Start rough — what's the thing this strategy is actually about?"

Human articulates a rough version. Agent:
- Sharpens the language until it's precise and surprising
- Tests the logic: does it follow from the insights and the direction?
- Pushes for compression: most organizing ideas want to be shorter than the human's first draft
- Checks that it's not a cliché — "authenticity," "human connection," "putting people first" are not organizing ideas

Skill: `brief-co-authoring` — invoke if the organizing idea is stuck or needs pressure-testing.

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 5 · STRATEGY DEVELOPMENT — Human leads → Agent develops
Human-led decisions at every turn.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Organizing idea

As stated: [human's rough version]
Sharpened: [agent's precise version]

Does this feel true and interesting?
Can a creative team make a dozen different things from this idea?
Does a competitor's strategy contradict it — or could they claim it too?

  [ PASS THROUGH ]  This is it
  [ SHAPE ]         Not quite — let me push on the language
  [ RIFF ]          Not there yet — let's work it out
  [ OVERRIDE ]      I want to state this myself
  [ PAUSE ]         I'm not ready to commit to this yet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Optional: `persona-engine:persona-chat` — test the organizing idea against a persona. Optional: `strategy:pressure-test` — fast adversarial critique before locking.

Write to audit: step `Organizing idea`.

---

### Step 4 — Messaging and Value Proposition

**Handoff type:** `agent-executes-human-engages`

Agent drafts messaging hierarchy and value proposition based on the human-set direction and organizing idea. Human shapes until it reflects their taste and judgment.

The messaging hierarchy:
- Primary message: the one sentence that says what this is and why it matters
- Supporting messages: 3-4 messages that build on or extend the primary
- Proof points: specific, concrete claims that earn each supporting message

Skills: `persona-engine:persona-messaging`, `persona-engine:persona-to-brief`

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 5 · STRATEGY DEVELOPMENT — Agent executes → Human engages
Human-led decisions at every turn.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Messaging hierarchy

Primary: [message]
Supporting:
  1. [message] — proof: [specific claim]
  2. [message] — proof: [specific claim]
  3. [message] — proof: [specific claim]

  [ PASS THROUGH ]  This is right
  [ SHAPE ]         Some messages need adjusting
  [ ADD INPUT ]     Proof points I know that the research didn't surface
  [ RIFF ]          Let's work through the hierarchy together
  [ OVERRIDE ]      I want to write the messaging myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Messaging hierarchy`.

---

### Step 5 — Theory of Change

**Handoff type:** `human-leads-agent-develops`
**Mandatory.** The wave cannot close without this. It feeds directly into the Wave 6 measurement framework.

Ask:
> "Let's make the theory of change explicit. If this strategy works — what specifically moves, and why? Walk me through the mechanism."

Human articulates first. Agent then:
- Sharpens into the form: "If we do X, then Y moves because Z"
- Tests whether the mechanism is real: are there missing steps in the logic?
- Pushes for testability: what's the first signal in 30-60-90 days if this is working?
- Distinguishes leading indicators (early signals) from lagging indicators (the business outcomes themselves)

**What bad looks like:**
"If we position as trusted transformation partners, clients will see us differently."
No mechanism. No timeline. No indicator. Push back until there's a real causal story.

**What good looks like:**
"If we shift all senior engagement from capability-led to outcome-led, CIOs will begin requesting IBM earlier in transformation cycles — before budget is set. Leading indicator: increase in executive-initiated RFPs within 6 months. Lagging: 3-point consideration increase at 18 months."

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 5 · STRATEGY DEVELOPMENT — Human leads → Agent develops
Human-led decisions at every turn.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Theory of change

Mechanism: If we [strategy action], then [business behavior change] because [reason].

Leading indicators (early signals, 30-90 days):
  1. [indicator]
  2. [indicator]

Lagging indicators (business outcomes, 12-18+ months):
  [the Wave 1 business outcomes restated as measurable targets]

Does this mechanism hold? Is the causal story real?

  [ PASS THROUGH ]  The mechanism is right
  [ SHAPE ]         Some of the logic needs adjusting
  [ ADD INPUT ]     Institutional knowledge about what actually drives behavior here
  [ RIFF ]          Let's work through the mechanism together
  [ OVERRIDE ]      I want to state the theory myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Update `flow-audit.json`:
- `measurementThread.theoryOfChange` — the mechanism statement
- `measurementThread.leadingIndicators` — the list
- `measurementThread.laggingIndicators` — the list (Wave 1 outcomes restated)

Write to audit: step `Theory of change`.

---

## Loop Watch

**Challenge Reframe Loop:** If direction-setting reveals the original brief was wrong → surface immediately.

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOOP SIGNAL — CHALLENGE REFRAME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The original Wave 1 framing assumed: [what it assumed]
The strategy development work is showing: [what it's showing]
These are incompatible because: [the specific contradiction]

Options:
  A. Return to Wave 1 — revise the challenge statement and business outcomes
  B. Proceed with the new framing and flag the drift from Wave 1 explicitly
  C. Pause while you decide

What would you like to do?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Gate

Wave 5 is complete when all five are human-approved:

```
WAVE 5 GATE
─────────────────────────────────────────
[ ] Strategic question — stated and approved
[ ] Direction — set by human
[ ] Organizing idea — sharpened and approved
[ ] Messaging hierarchy — shaped by human
[ ] Theory of change — mechanism explicit, indicators defined
─────────────────────────────────────────
```

When the gate passes:

1. Set Wave 5 status to `complete` in `flow-audit.json`
2. Confirm `measurementThread.theoryOfChange`, `leadingIndicators`, and `laggingIndicators` are written
3. Announce:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 5 COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Strategic question: [question]
Direction: [one sentence]
Organizing idea: [the idea]
Theory of change: [mechanism statement]

Ready for Wave 6. Run /strategy:wave-output to begin.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
