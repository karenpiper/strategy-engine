# Measurement Thread

Measurement is not a deliverable or a final step. It's a thread that runs through the entire flow.
The agent carries measurement state forward from Wave 1 through Wave 6 without losing it.

---

## Why It's a Thread, Not a Step

Retrofitted measurement produces measurement frameworks nobody uses. The metrics don't connect to
the strategy; the strategy doesn't connect to the business. When measurement is designed at the end,
it optimizes for what's measurable rather than what matters.

The thread starts at Wave 1 with the business outcomes the engagement is accountable for.
Every subsequent wave adds to or tests against those outcomes. By Wave 6, the measurement
framework writes itself from accumulated state — it doesn't need to be invented from scratch.

---

## Thread State by Wave

### Wave 1 — Frame: Anchor

**What gets defined:**
- Business outcomes — what the business actually needs to move. Revenue, retention, share, perception, something else.
- Timeframe — when do we expect to see movement?
- What's measurable vs. what's aspirational (separate them now, not later)

**How to surface it:**
Ask directly as part of Wave 1 framing:
> "Before we go further — what does the business need to move as a result of this work? Not what the strategy should achieve, but what the business is accountable for."

The human answers in their own words. The agent helps sharpen the language into measurable outcomes.
Record these as `measurementThread.businessOutcomes` in the flow audit.

**What bad looks like:**
"Increase brand awareness." Not a business outcome — a proxy metric with no dollar sign attached.
Push back: "What business result does brand awareness drive for you? Revenue, retention, pricing power?"

**What good looks like:**
- "Retain 85% of enterprise accounts in the next 12 months"
- "Shift perception from infrastructure vendor to transformation partner among CIOs — measurable via unaided recall in buyer research"
- "3-point increase in consideration among net-new enterprise buyers within 18 months"

---

### Wave 2 — Gather: No new measurement state

The gather phase doesn't add to the measurement thread. But hypotheses formed in Wave 2 have
implicit measurement implications — if a hypothesis is correct, something should be different
in the world. The agent doesn't force this into the audit at Wave 2, but flags it when hypotheses
are strong enough to become testable.

---

### Wave 3 — Synthesize Within: No new measurement state

---

### Wave 4 — Synthesize Across: Path-to-Result Check

**What gets added:**
Every insight candidate gets checked against the Wave 1 business outcomes.
Question for each insight: **Does this have a plausible path to a result?**

An insight without a path to a result isn't wrong — but it drops in priority. The strategy
should focus on insights that can move the outcomes the business cares about.

**How to surface it:**
At the Wave 4 interaction point, after insights are structured:
> "Before we prioritize these, let me check each one against your business outcomes.
> [Outcome 1]: which of these insights has the clearest path to moving this? Which ones don't?"

Record insights that fail the path-to-result check as `measurementThread.insightsWithoutPath`.
These stay in the work — they're visible in the audit — but they're explicitly deprioritized.

---

### Wave 5 — Strategy Development: Theory of Change

**What gets defined:**
Every strategic direction has a theory of change:
> If we do X, then Y moves because Z.

This is the skeleton of the measurement framework. It forces the strategy to be falsifiable.
If the theory of change can't be stated, the strategy can't be measured. If it can't be measured,
it can't be accountable.

**How to surface it:**
After the organizing idea is approved, ask:
> "Let's make the theory of change explicit. If this strategy works — what specifically moves,
> and why? Walk me through the mechanism."

Human articulates it first. Agent helps make it precise and testable.

Then: define leading indicators (early signals that the strategy is working) and lagging indicators
(the business outcomes themselves, which take longer to move).

Record in audit:
- `measurementThread.theoryOfChange` — one paragraph
- `measurementThread.leadingIndicators` — list
- `measurementThread.laggingIndicators` — list (the Wave 1 business outcomes, restated in measurable form)

**What bad looks like:**
"If we position as trusted transformation partners, clients will see us differently."
Not a theory. No mechanism. No indicator. Push back: "How? What changes in their behavior?
What's the first signal you'd see in 90 days if this is working?"

**What good looks like:**
"If we shift the narrative from capability-led to outcome-led in all senior engagement,
CIOs will begin requesting IBM early in transformation cycles rather than after budget is set.
Leading indicator: increase in executive-initiated RFPs within 6 months.
Lagging indicator: 3-point increase in consideration among net-new enterprise buyers at 18 months."

---

### Wave 6 — Output: Measurement Framework Deliverable

**What gets delivered:**
The measurement framework is a required Wave 6 deliverable alongside the brief.
The agent drafts it from the accumulated thread state — it should mostly write itself.

**Contents:**
1. What we're tracking (the leading and lagging indicators from Wave 5)
2. How we'll know it's working (specific, observable signals at 30/60/90 days and 12/18 months)
3. Business results we're accountable for (the Wave 1 outcomes, restated)
4. What we're NOT measuring (explicit exclusions — things that will move but aren't the goal)

Skill: `marketing:performance-report`

---

## What the Agent Carries Forward

At every wave boundary, the agent checks the measurement thread state:

- **Before Wave 4:** Are business outcomes defined? If not, surface the gap.
- **Before Wave 5:** Are insights connected to outcomes? Flag any that aren't.
- **Before Wave 6:** Is the theory of change explicit? Does it produce testable indicators?

Never let the thread go silent. If the measurement state hasn't been updated since Wave 1,
surface it at the Wave 4 and Wave 5 checkpoints.

---

## Measurement State in the Audit

The `measurementThread` object in `flow-audit.json`:

```json
{
  "businessOutcomes": [
    "Retain 85% of enterprise accounts in 12 months",
    "3-point increase in consideration among net-new enterprise buyers at 18 months"
  ],
  "insightsWithoutPath": [
    "Buyers distrust AI-generated content at scale"
  ],
  "theoryOfChange": "If we shift all senior engagement from capability-led to outcome-led, CIOs will begin requesting IBM earlier in transformation cycles. Leading signal: increase in executive-initiated RFPs within 6 months.",
  "leadingIndicators": [
    "Executive-initiated RFP volume (6-month window)",
    "Shift in how buyers describe IBM unprompted (unaided recall research)"
  ],
  "laggingIndicators": [
    "85% enterprise retention at 12 months",
    "3-point consideration increase at 18 months"
  ]
}
```
