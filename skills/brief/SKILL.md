---
name: brief
description: |
  Creative briefs with a single proposition and mandatories.
  Use for "write a brief," "creative brief," "brief the team," or when strategy
  needs to be compressed into a document a creative team can act on.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections
2. `references/sacred-six.md` — Universal brief framework. Sacred Six sections, per-section rubrics, quality gate process. ALL briefs follow this structure.
3. `rules/voice.md` — Two-layer voice system
4. `rules/quality-gates.md` — Quality gates and scoring rubric
5. `references/anti-patterns.md` — Know the failure modes before writing
</required_reading>

# /strategy:brief

Compress strategic thinking into a document a creative team can act on.

## What Makes a Good Brief

A brief is a compression function. It takes all the strategic thinking (the cultural context, the audience insight, the brand truth, the competitive landscape) and crushes it into the smallest possible document that still contains enough information for a creative team to produce great work.

The best briefs do three things:
1. **Create a single, felt tension** that the creative work resolves
2. **State a proposition** that's specific enough to judge work against but open enough to allow creative freedom
3. **Make the mandatories actual mandatories**, not a wish list

## Brief Format

```markdown
# Creative Brief: [Project Name]
*[Brand] — [Date]*

---

## Background
[2-3 sentences. What's happening and why this brief exists. Context, not history.]

## The Problem
[1-2 sentences. The specific problem the creative work needs to solve. Not the business problem. The communication problem.]

## Target Audience
[A portrait, not a profile. Behavior, belief, emotional state. What are they doing right now that creates the opening for this work?]

## The Insight
[One sentence. The human truth that the creative work is built on. Must contain a tension.]

## Proposition
[One sentence. The single idea the creative work must communicate. This is the brief's center of gravity. If a creative idea doesn't ladder to this sentence, it's off-brief.]

## Tone
[2-3 words or a short phrase. Not a list of adjectives. A feeling.]

## Mandatories
[Numbered list. Only include things that are truly mandatory. Legal requirements, brand assets that must appear, format constraints. If it's a preference, not a mandate, it doesn't belong here.]

## Measures of Success
[How do we know the work worked? Specific, measurable where possible.]

---

*Quality score: [X/50]*
```

## Process

### Phase 0: Intake
Same as narrative mode. Accept whatever the user provides.

### Phase 1: Structure (PAUSE for approval)
Present the brief skeleton: problem, audience, insight direction, proposition candidates (3 options). Wait for the user to pick or redirect.

### Phase 2: Write
Fill in the complete brief. The proposition is the hardest part. It must:
- Fit in one sentence
- Be specific enough to judge creative work against
- Be open enough to allow multiple creative expressions
- Foreclose alternatives (if any brand could use this proposition, it fails)

### Phase 3: Quality Gate (MANDATORY — do not present until all layers pass)

**Layer 1: Strategic Integrity (/50)**

| Dimension | 10 | 7 | 4 | 1 |
|-----------|-----|---|---|---|
| **Tension** | The insight contains a real contradiction — two true things pulling in opposite directions. You feel the tension. | Tension is implied but could be sharpened. | An observation, not a tension. Something true but not surprising. | Missing. Insight is a restatement of the brief. |
| **Proposition specificity** | One sentence. Specific to this brand. Forecloses — a competitor couldn't use it. Multiple creatives could approach it differently. | One sentence, mostly specific, but a sharper brand could steal it. | Two ideas, or generic enough that another brand in the category could claim it. | More than one sentence, or completely generic. |
| **Audience depth** | A portrait: behavior, belief, emotional state, what they're doing right now that creates the opening. Not demographics. | Behavioral but could be more specific to what's happening for them right now. | Demographic or stated as a segment label. | Missing or placeholder. |
| **Mandatories rigor** | Only things that are truly mandatory. No preference masquerading as a mandate. | Mostly mandatory but 1-2 preferences slipped in. | Wish list. Most could be negotiated. | Missing or overwhelming creative with constraints. |
| **Brief coherence** | Background → Problem → Insight → Proposition flows as a logical chain. Each section earns the next. | Mostly coherent but one link in the chain is weaker. | Two sections that feel disconnected. | Sections feel like separate documents. |

**Threshold: 35/50. Hard stop if Proposition specificity is below 7.**

**Layer 2: Voice Quality (/50)**
Apply `rules/voice.md` scoring — five dimensions, 1-10 each: Directness, Rhythm, Trust, Authenticity, Density.
**Threshold: 35/50.**

Quick checks before scoring:
- Any adverbs? Kill them.
- Any passive voice? Find the actor.
- Any throat-clearing setup sentences? Cut to the point.
- Any inanimate objects doing a human verb? Name the person.
- Proposition: could a creative team use it to judge work? Or does it dissolve on contact?

**Score Card:**
```
BRIEF QUALITY GATE
──────────────────────────────────────────────────
Layer 1: Strategic Integrity           ___/50
Layer 2: Voice Quality                 ___/50
──────────────────────────────────────────────────
Both layers must hit 35/50 to present.
```

If any layer fails: identify the failing dimensions, revise only those sections, re-score. Do not present below-threshold briefs without flagging them explicitly.

### Phase 4: Observation
Log per `rules/observation.md`. Track: the proposition, whether the tension was real on first draft or required sharpening, and which sections the user revised after review.
