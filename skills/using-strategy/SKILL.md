---
name: using-strategy
description: Use when starting any conversation that involves strategy work. Establishes the strategy engine's routing, instruction priority, and bootstrap rules.
---

<SUBAGENT-STOP>
If you were dispatched as a subagent to execute a specific task, skip this skill.
</SUBAGENT-STOP>

# Using Strategy Engine

The strategy engine handles the full range of the user's strategic work. Use this skill as the control plane that routes to the right mode.

## Instruction Priority

When instructions conflict, use this order:

1. the user's instructions in the conversation
2. `feedback-log.md` (binding corrections from the user)
3. Strategy engine rules (`rules/`)
4. Strategy engine skills and references
5. Default system behavior

the user stays in control. The engine provides process and quality, not authority over the user's intent.

## The Rule

Before starting strategy work, decide which mode applies:

- If the user names a mode, use it.
- If the task clearly matches a mode, route to it.
- If unclear, use `/strategy:go` to determine the right mode.

## Mode Routing

| Signal | Mode |
|--------|------|
| "positioning," "brand strategy," "what should the brand stand for" | `/strategy:narrative` |
| "brief," "creative brief," "write a brief" | `/strategy:brief` |
| "co-author a brief," "push my thinking on the brief," "help me build a brief" | `/strategy:brief-co-authoring` |
| "product spec," "product vision," "product strategy" | `/strategy:product` |
| "pressure test," "poke holes," "what's wrong with this" | `/strategy:pressure-test` |
| "courtroom," "debate this," "argue about this," "stress test" | `/strategy:courtroom` |
| "tighten this," "make it shorter," "cut slides," compress | `/strategy:distill` |
| "research," "find evidence," "verify," "back this up," "find examples" | `/strategy:research` |
| "what does the research tell us," "find the way in," "distill the research" | `/strategy:insight-distill` |
| "develop hypotheses," "turn research into hypotheses," "build provocations" | `/strategy:hypotheses` |
| "review the narrative," "is this ready for my boss," "check against the brief" | `/strategy:narrative-review` |
| "turn this into a story," "make this persuasive," "structure this as a narrative" | `/strategy:strategy-narrative` |
| "review my strategy," "assess this deck," "what's weak here," coaching on strategy docs | `/strategy:strategy-assessment` |
| "audit our ecosystem," "map our channels," "where do we have gaps," "analyze competitors" | `/strategy:ecosystems` |
| "what's our voice," "how do we sound," "audit our messaging," discover brand tone | `/strategy:brand-voice` |
| "competitive brief," "what does the landscape mean for strategy" | `/strategy:competitive-brief` |
| "plan the campaign," "how do we execute," "build the campaign structure" | `/strategy:campaign-planning` |
| "build a measurement framework," "what should we track," "read the results" | `/strategy:performance-report` |
| "initialize a project," "set up a new project," "new strategy project" | `/strategy:init` |
| "start a new engagement," "let's frame this," start from scratch | `/strategy:wave-frame` |
| "start gathering," "let's research," "begin Wave 2" | `/strategy:wave-gather` |
| "synthesize the workstreams," Wave 3 | `/strategy:wave-synthesize-within` |
| "cross-synthesize," "find the insight," "what does it all say," Wave 4 | `/strategy:wave-synthesize-across` |
| "develop the strategy," "what's the direction," Wave 5 | `/strategy:wave-strategy` |
| "write the brief," "produce the deliverables," "final output," Wave 6 | `/strategy:wave-output` |
| "sharpen," "improve this skill," "autoresearch" | `/strategy:sharpen` |
| "strategy," "help me think through," vague strategic ask | `/strategy:go` (router) |

## Required Reading

Every mode invocation MUST read `feedback-log.md` before doing any work. This is non-negotiable.

## Quality Rules

All output from every mode passes through the quality gates in `rules/quality-gates.md` and the voice rules in `rules/voice.md`. Both layers (Voice DNA + Stop-Slop) apply to every piece of prose. See `rules/process.md` for phase sequencing.

## Progressive Disclosure

Don't preload all references. Load what the active mode needs:

- Narrative mode: `references/narrative-engines.md`, `references/slide-conventions.md`
- All modes: `rules/voice.md`, `rules/quality-gates.md`
- Wave-based work (any wave command): `references/flow-framework.md`, `references/recursive-loops.md`, `references/measurement-thread.md`
- Courtroom: Agent definitions from `agents/courtroom/`
- Research: Agent definitions from `agents/research/`
- Ecosystems: `references/ecosystems-framework.md` + agent definitions from `agents/ecosystems/`
- Insight-distill: `references/research-deck-pattern.md`
- Narrative-review: `references/narrative-engines.md`, `references/anti-patterns.md`, `references/pitch-deck-pattern.md`
- Brief-co-authoring: `skills/brief-co-authoring/references/brief-structure.md`, `skills/brief-co-authoring/references/weak-thinking-patterns.md`, `skills/brief-co-authoring/references/questioning-guide.md`
- Strategy-assessment: `skills/strategy-assessment/references/quality-standards.md`, `skills/strategy-assessment/references/weak-thinking-patterns.md`, `skills/strategy-assessment/references/questioning-guide.md`
- Sharpen: `logs/execution-log.md` for baseline data

## Version Control

The strategy engine is git-tracked at `~/.claude/plugins/local/strategy-engine/`.

**End-of-session habit:** Before the user closes a session that involved strategy work, suggest committing and pushing any changes to the plugin (feedback log entries, sharpen mutations, new agents, rule updates). Use:

```bash
cd ~/.claude/plugins/local/strategy-engine
git add -A && git status --short
# Show the user what changed, then commit and push if they confirm
```

This keeps the plugin versioned and recoverable. The sharpen mode commits after each accepted mutation (Step 7 in sharpen/SKILL.md), but feedback log entries and manual edits accumulate between sessions and need an explicit commit.
