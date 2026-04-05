---
name: go
description: |
  The strategy engine's front door. Understands what the user needs and routes to the right mode.
  Use when starting strategy work, saying "help me think through this," or unsure which mode to use.
---

<required_reading>
Read before doing anything:
1. `feedback-log.md` — Binding corrections from the user
2. `rules/process.md` — Phase sequencing
</required_reading>

# /strategy:go

The entry point. Understand what the user needs, route to the right mode.

## Process

### Step 0: Project Selection

**Always do this first, before anything else.**

Scan `~/strategy-projects/` for subdirectories that contain a `project-context.md`. List them with their client name (read from the `# Project:` heading in each context file).

Present the list like this:
```
Which project are you working on?

1. Taco Bell
2. Acme Corp
3. [New project]

Or say the name / number.
```

If only one project exists, confirm it rather than listing:
> "Working on [Client Name]? Say yes or name another project."

If no projects exist yet, skip the list and ask:
> "No projects set up yet. Want to create one now? Run `/strategy:init` — or describe what you're working on and we'll proceed without a project folder."

Once the user selects a project, load `~/strategy-projects/{slug}/project-context.md` and hold it as active context for the rest of the session. Confirm:
> "Got it — working on [Client Name]. What do you need?"

Then proceed to Step 1.

### Step 1: Understand the Input

the user might provide:
- A full brief with brand, audience, problem, and context
- A sentence or question
- A link or pasted document
- A request to iterate on previous work
- A vague "help me think through X"

Read whatever the user provides. Don't ask unnecessary questions.

### Step 2: Detect the Mode

**Wave-based engagement (full flow):**

| If the input suggests... | Route to... |
|--------------------------|-------------|
| "Start a new engagement," "new project," "let's frame this," start from scratch | `/strategy:wave-frame` |
| "Start gathering," "let's research," "begin Wave 2" | `/strategy:wave-gather` |
| "Synthesize the workstreams," "let's synthesize," Wave 3 | `/strategy:wave-synthesize-within` |
| "Cross-synthesize," "find the insight," "what does it all say," Wave 4 | `/strategy:wave-synthesize-across` |
| "Develop the strategy," "what's the direction," "organize the strategy," Wave 5 | `/strategy:wave-strategy` |
| "Write the brief," "produce the deliverables," "final output," Wave 6 | `/strategy:wave-output` |

**Standalone modes (not wave-dependent):**

| If the input suggests... | Route to... |
|--------------------------|-------------|
| Brand positioning, repositioning, narrative strategy (not wave-based) | `/strategy:narrative` |
| "Turn this into a story," "make this persuasive," "structure this as a narrative" | `/strategy:strategy-narrative` |
| "Review my strategy," "assess this deck," "what's weak here," coaching on strategy docs | `/strategy:strategy-assessment` |
| "Co-author a brief," "help me build a brief," "push my thinking on the brief" | `/strategy:brief-co-authoring` |
| Creative brief for a campaign or activation | `/strategy:brief` |
| Product spec, product vision, service design | `/strategy:product` |
| "What's wrong with this," "poke holes," critique | `/strategy:pressure-test` |
| "Debate this," "stress test," multi-perspective | `/strategy:courtroom` |
| "Tighten this," "make it shorter," "cut slides," compress | `/strategy:distill` |
| "Research this," "find evidence," "verify claim," "back this up," "find examples" | `/strategy:research` |
| "What does the research tell us," "find the way in," "distill the research" | `/strategy:insight-distill` |
| "Is this ready for my boss," "review the narrative," "check against the brief" | `/strategy:narrative-review` |
| "Improve this skill," "autoresearch" | `/strategy:sharpen` |
| "What's our voice," "audit our messaging," "how do we sound," discover brand tone | `/strategy:brand-voice` |
| "Competitive brief," "what the competitive landscape means for strategy," post-competitive-analysis | `/strategy:competitive-brief` |
| "Plan the campaign," "how do we execute," "build the campaign structure" | `/strategy:campaign-planning` |
| "Build a measurement framework," "what should we track," "read the results," "did the campaign work" | `/strategy:performance-report` |

**When in doubt about wave vs. standalone:** If there's an active project with a `flow-audit.json` and Wave 1 is complete or in-progress, bias toward the wave-based flow. Check `flow-audit.json` status to determine which wave to route to.

### Step 3: Confirm and Route

If the mode is obvious, state it and proceed:
> "This reads like a brand positioning brief. I'll run it through narrative mode with the Brand DNA vs Cultural Truth engine. Here's the architecture..."

If the mode is ambiguous, propose 2 options with rationale and let the user pick:
> "I could approach this two ways:
> 1. **Narrative mode** — full strategy doc with cultural grounding, coined concept, slide-ready copy
> 2. **Brief mode** — tight creative brief with a single proposition and mandatories
> Which fits what you need?"

### Step 4: Handoff

Once the mode is confirmed, invoke that mode's skill with the user's full input carried forward. Don't make the user repeat context.

## Downstream: Build

Strategy-engine produces strategy. It does not build software. When the strategic
artifacts are ready and the user wants to build:

- **Solo build:** Route to `/arc:vision` (reads `04-brief-handoff.yaml` automatically),
  then the full Arc suite (`arc:ideate` → `arc:build` → `arc:implement` → ship).
- **Team build:** The team works from `docs/map/` and `docs/strategy/`. Arc is only
  used for `vision.md` generation.
- **Full flow reference:** `/strategy:pipeline` documents the complete 6-wave sequence with depth dials, skills routing, and scoring rubrics.

## Cross-Mode Transitions

If the user wants to chain modes (e.g., "now turn this positioning into a brief"), carry forward:
- The brief summary
- The approved concept
- Any feedback the user gave during the current session
- The quality scores from the previous mode's output

Propose the transition. Don't auto-chain.
