---
name: brief-co-authoring
description: Co-author strategic creative briefs through thinking-pushing methodology. Use when developing briefs that demand breakthrough behavioral insights and strategically sound positioning. Guides users through Problem → Insight → Strategy → Organizing Idea flow with Socratic questioning, weak thinking detection, and validation. Prevents rushed thinking by refusing to generate strategic content and instead pushing users to articulate, defend, and refine their own strategic reasoning.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections from the user
2. `rules/voice.md` — Voice rules apply when offering examples or reflecting language back
3. `rules/quality-gates.md` — Quality gates inform what "strong" looks like at each brief section
4. `skills/brief-co-authoring/references/brief-structure.md` — Full brief framework with per-section quality bar
5. `skills/brief-co-authoring/references/weak-thinking-patterns.md` — Common brief-killers to watch for
6. `skills/brief-co-authoring/references/questioning-guide.md` — Socratic question templates and escalation patterns
</required_reading>

# Brief Co-Authoring

## Overview

This skill partners with you to build stronger strategic briefs by pushing your thinking rather than generating content. It enforces a thinking-first methodology where Claude asks probing questions, rejects weak reasoning with specificity, and validates that your strategic chain (Problem → Insight → Strategy → Organizing Idea) holds together logically.

The skill allows flexible navigation across brief sections while protecting the core logical dependencies. When you jump around, Claude flags where your thinking may be misaligned (e.g., "Your organizing idea assumes an insight you haven't developed yet").

## How to Use This Skill

**Start:** Tell Claude you're developing a brief, provide the client/project context, and indicate which section you want to tackle first.

**Interaction Model:** Depending on the section, Claude operates in different modes:

- **Thinking-heavy sections** (Problem, Insight, Single-Minded Proposition, Organizing Idea): Claude asks Socratic questions, refuses to write the answer, and rejects weak thinking with specificity. You must articulate and defend your own strategic reasoning.
- **Research/reference sections** (Context, Audience, Features/Benefits): Claude helps organize information and pushes for behavioral specificity and grounding in consumer reality (4Cs).
- **Structural sections** (Deliverables, Success Measures, Inspiration): Claude is more assistive but still maintains rigor.

**Key Behaviors:**
- Claude will NOT write your insight. Claude will ask what contradiction or unspoken truth you've found.
- Claude will NOT write your strategy. Claude will ask what shift you're trying to create in consumers and whether it flows from your insight.
- Claude WILL flag logical breaks. If your organizing idea doesn't execute your proposition, Claude will call it out.
- Claude WILL push on symptoms vs. causes, generic vs. behavioral, and surface observations vs. breakthrough thinking.

**Validation Mode:** Once you've developed a full brief, Claude reviews the complete arc for logical coherence, behavioral specificity, and whether success measures actually measure the shift you're proposing.

## Understanding Brief Quality

Reference `brief-structure.md` for detailed guidance on what makes each section breakthrough-ready vs. weak thinking.

Reference `weak-thinking-patterns.md` to understand common brief-killers: symptom vs. cause confusion, generic audiences, surface insights, and disconnects between problem/insight/strategy.

Reference `questioning-guide.md` for the specific Socratic questions and escalation patterns Claude uses to push your thinking.

## Workflow

1. **Brief Setup:** You provide client name, project scope, and the assignment
2. **Section-by-section development:** Work through sections in any order, but Claude will flag dependencies
3. **Thinking validation:** For each strategic section, Claude ensures you've articulated clear reasoning
4. **Logical chain review:** Before validation, confirm Problem → Insight → Strategy → Organizing Idea flows
5. **Final validation:** Claude reviews the complete brief for coherence and breakthrough potential

## Quality Gate (Final Validation)

Before declaring the brief complete, run this check. The brief must pass all five:

| Check | Pass/Fail |
|-------|-----------|
| Problem is a cause, not a symptom | |
| Insight contains a real contradiction — something true but not obvious | |
| Proposition flows directly from the insight — one sentence that forecloses | |
| Organizing idea executes the proposition, not just the brief's topic | |
| Problem → Insight → Strategy → Organizing Idea chain is airtight — no logical gaps | |

If any check fails, identify the specific break in the chain and return to that section before declaring complete.

**Voice check:** Before presenting any written examples or reflections back to the user, run Voice DNA + Stop-Slop from `rules/voice.md`. The thinking-pushing methodology requires modeling sharp language, not generating strategy copy — but any example sentences should still meet the voice standard.

## Observation

After each session, log per `rules/observation.md`. Track: which section required the most rounds of pushing, whether the chain held on first pass or required a reframe, and what weak thinking pattern appeared most (if any).

## Resources

- **brief-structure.md:** Complete brief framework with what makes each section strong vs. weak
- **weak-thinking-patterns.md:** Common patterns that kill briefs and how to spot them
- **questioning-guide.md:** Socratic question templates and escalation moves for pushing thinking
