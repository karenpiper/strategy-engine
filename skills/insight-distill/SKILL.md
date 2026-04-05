---
name: insight-distill
description: |
  Distill raw research into strategic building blocks: insights, tensions, audience truths,
  hypotheses, and white space. Bridges Phase 1 (Interrogating) and Phase 2 (Distilling).
  Use for "what does the research tell us," "find the way in," "distill the research,"
  or when transitioning from research to strategy.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections from the user
2. `rules/voice.md` — Voice rules apply to all output
3. `rules/quality-gates.md` — Quality gates apply
4. `references/research-deck-pattern.md` — Xbox Game Pass tissue deck benchmark. The gold standard for how research becomes slides: Misperception → Reality pattern, section truths, real human voices as proof.
</required_reading>

# /strategy:insight-distill

Takes raw research dossiers and extracts the strategic building blocks a strategist needs to crack the positioning. This is the bridge between casting wide (Phase 1) and finding the way in (Phase 2).

## Modes

### Mode A: Full Synthesis (default)
Takes all research dossiers and distills them into a unified strategic platform. Use when transitioning from research to strategy across the whole engagement.

### Mode B: Workstream Synthesis
Takes research from a single Wave 2 workstream and produces a synthesis document for that workstream. Use inside `/strategy:wave-3-synthesize-within` when each workstream needs its own synthesis before cross-workstream work begins.

**Trigger phrases for Mode B:**
- "Synthesize the competitive workstream"
- "What does the secondary research tell us for this workstream?"
- "Distill what we found on [topic]"
- Wave 3 invocations with a specific workstream named

**Mode B output format:**
```markdown
## Workstream Synthesis: [Workstream Name]

### What the Research Found
[3–5 findings from this workstream, ranked by composite score. Each cites source and score.]

### The Workstream Truth
[One sentence: what this body of research says that's strategically useful. Must pass the "could every competitor say this?" test — if yes, sharpen.]

### Tensions
[1–2 internal contradictions within this workstream's findings. These are the live wires.]

### Open Questions
[What this workstream didn't answer. Flags for primary research or cross-workstream connections.]

### Human Voices *(if cultural research is available)*
[Direct quotes that represent real human experience of this topic. Cited with source and date.]
```

**Mode B quality check:**
- [ ] Workstream Truth is a single sentence that changes how you'd approach this workstream's topic
- [ ] Tensions identify real contradictions, not manufactured balance
- [ ] Open Questions link to specific gaps in the research, not generic unknowns
- [ ] No finding in this synthesis appears without a composite score and citation

**Mode B process:**
1. Identify which workstream is being synthesized (from the wave context or the user's input)
2. Load all research files or notes associated with that workstream
3. Apply Steps 1–4 of the standard process, scoped to the single workstream
4. Present Mode B output format (not the full strategic platform — that comes in Wave 4)
5. Pause for the user's engagement before offering to save to `outputs/wave-3-synthesis/[workstream-slug].md`

## What It Accepts

- Research dossier files (competitive landscape, category dynamics, audience/culture)
- The original brief (always loaded as the north star)
- Any additional context or hypotheses from the user
- A single workstream's research (Mode B)

## Philosophy

1. **Elevation over repetition.** If your "insight" restates a research finding with a different header, you've failed. Push until you find what the finding *means* for the strategy.
2. **Surprise over confirmation.** "The market is growing" confirms what the client already knows. "The market is growing but 61% of the target audience sees the product as gambling" changes the strategic problem.
3. **Tension over summary.** The most useful output is a tension that forces a choice. Strategy lives in choices.
4. **the user's claim leads.** If the user has hypotheses or instincts, those are the starting point. Research supports or challenges them, it doesn't replace them.

## Process

### Step 1: Load the Brief

Read the original brief. Restate the core challenge in one sentence. This sentence is the filter for everything that follows: does this insight change how you'd approach that challenge?

### Step 2: Read All Research

Read every research dossier file. Note:
- Findings with composite scores above 8 (high confidence)
- Contradictions between researchers
- Gaps where no evidence was found
- Cultural signals with real human voices

### Step 3: Spawn the Research Distiller Agent

Use the `strategy-engine:distill:research-distiller` agent to process the research and produce the distillation document. The agent's output format is defined in its agent file.

### Step 4: Quality Check

Before presenting to the user, check the distillation:

| Check | Pass/Fail |
|-------|-----------|
| Every insight cites specific research findings | |
| No insight could be claimed by every competitor | |
| Tensions force genuine tradeoffs, not false choices | |
| Audience truths use real voices where available | |
| Hypotheses are testable, not vague | |
| White space map identifies specific gaps, not generic opportunity | |
| Voice DNA compliance (no banned phrases, no AI slop) | |

### Step 5: Present to the user

Present the distillation as a working document. the user decides:
- Which insights resonate with their strategic intuition
- Which tensions to lean into
- Which hypotheses to develop
- What additional research is needed
- What their own hypotheses are (these lead, the distillation supports)

### Step 6: Iterate

the user will push back, redirect, or build on the distillation. This is Phase 2 work: the user leads, Claude supports. The distillation is a starting point for conversation, not a finished strategic platform.

### Step 7: Lock the Strategic Platform

When the user says "I have the way in," capture the locked platform:

```markdown
# Strategic Platform: [Project Name]

## The Core Insight
[One sentence. The truth that changes everything.]

## The Tension
[What two forces are pulling against each other?]

## The Audience Truth
[What does the target audience believe/feel that creates the opening?]

## The Strategic Bet
[What is the brand choosing to believe? What does it exclude?]

## The Way In
[How does this become a story? What's the narrative entry point?]
```

This document becomes the input for Phase 3 (Articulating / Narrative).

## Integration

### insight-distill → narrative
The locked strategic platform feeds directly into `/strategy:narrative` as the brief input.

### insight-distill → courtroom
Before locking, the user can run the strategic platform through `/strategy:courtroom` to pressure-test it from 10 angles.

### insight-distill → research (backfill)
If gaps are identified, spawn targeted `/strategy:research` queries to fill them.

## Observation

Log the run per `rules/observation.md`. Track: number of insights surfaced, which the user kept, which they rejected, what their own hypotheses were, and how the final platform differs from the initial distillation.
