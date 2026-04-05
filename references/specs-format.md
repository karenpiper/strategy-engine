# .specs/ Format Contract

How the strategy-engine generates agent-structured specs from the product spec.
This reference defines the format. The generation is triggered by `/strategy:product`
spec mode as an optional output, or manually after the spec is written.

## Directory Structure

```
.specs/
├── manifest.yaml              # Project metadata + feature index
└── [capability-slug]/         # One folder per capability from the spec
    └── spec.md                # Requirements + acceptance criteria
```

## manifest.yaml

```yaml
# Auto-generated from docs/strategy/05-spec.md
# Do not edit directly. Re-generate when the spec changes.

project: [Project Name]
rallying_cry: [From the brief]
source: docs/strategy/05-spec.md
generated: [YYYY-MM-DD]

capabilities:
  - id: [capability-slug]
    name: [Capability Name]
    summary: [One sentence from spec]
    status: pending | in_progress | complete
    sprint: [if phased]
```

## Per-Capability spec.md

Each capability from the product spec becomes a structured spec file.
YAML frontmatter for agent parsing. Markdown body for human reading.

```markdown
---
id: [capability-slug]
name: [Capability Name]
capability_number: [from the spec's numbered list]
source: docs/strategy/05-spec.md
rallying_cry: [from the brief]
status: pending
priority: [high | medium | low]
depends_on: [list of capability IDs this depends on, or empty]
---

# [Capability Name]

## What the user can do
[Carried from the spec. Plain language, user perspective.]

## UX
[Carried from the spec's UX field. Interaction model.]

## Success metric
[Carried from the spec. Specific number + timeframe.]

## Requirements

### Required
[Bullet list from spec's Required field]

### Optional
[Bullet list from spec's Optional field]

## Acceptance criteria
[Generated from the requirements. Each criterion is testable.]
- [ ] [User can do X and see Y]
- [ ] [System responds with Z within N seconds]
- [ ] [Error state shows message when W happens]

## Constraints
[Any capability-specific constraints from the spec's Constraints section]

## Open questions
[Carried from the spec's Open Questions that relate to this capability]
```

## Generation Rules

1. **One folder per capability.** The slug is the capability name, lowercased, hyphens for spaces.
   "Global Search" becomes `global-search/`.

2. **Acceptance criteria are generated, not copied.** The spec describes what the user can do.
   The acceptance criteria translate that into testable boolean statements. Each criterion
   starts with a checkbox `- [ ]` so agents can track completion.

3. **Dependencies are inferred.** If capability B's requirements reference capability A's output
   (e.g., "uses the search index from Global Search"), add `depends_on: [global-search]`.

4. **Status starts as pending.** Updated to `in_progress` when work begins and `complete`
   when all acceptance criteria pass.

5. **manifest.yaml is the index.** Agents read this first to understand the full scope,
   then drill into individual spec files.

6. **Re-generation overwrites.** When the product spec changes, re-running generation
   overwrites the .specs/ directory. Any manual edits to spec files are lost.
   If manual edits are needed, make them in the product spec first.

## When to Generate

- **Automatically:** After `/strategy:product` spec mode completes, offer to generate .specs/.
- **Manually:** the user can request generation at any time if the spec exists.
- **At Small size:** Optional. The designer may not need structured per-feature specs.
- **At Medium/Large size:** Recommended. Multiple people and agents need independent feature context.

## Relationship to docs/map/

The .specs/ directory and docs/map/ serve different audiences from the same source:

| | docs/map/ | .specs/ |
|---|---|---|
| **Audience** | Human designers and developers | AI coding agents |
| **Format** | Markdown with YAML frontmatter | YAML frontmatter + acceptance criteria |
| **Granularity** | Component-level (visual structure) | Capability-level (functional requirements) |
| **Updated by** | Strategy-engine map mode | Re-generated from spec |
| **Read by** | People in Figma, Slack, meetings | Agents in Claude Code, Cursor, Copilot |

Both trace back to `docs/strategy/05-spec.md` as the single source of truth.
