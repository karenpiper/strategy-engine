---
name: pipeline
description: |
  Full strategy flow from first conversation to final deliverable. Six waves: Frame, Gather,
  Synthesize Within, Synthesize Across, Strategy Development, Output. Each wave has a gate
  the human approves before the next begins. Use when starting a new engagement or when you
  need the full sequence with human interaction points at every step.
---

<required_reading>
references/the-pipeline.md
references/flow-framework.md
references/recursive-loops.md
references/measurement-thread.md
</required_reading>

# /strategy:pipeline

The full strategy flow. Six waves, sequential. Human interaction embedded at every step.

## Quick Reference

```
WAVE 1 — FRAME             Human-led. Challenge + outcomes. Gate before Wave 2.
WAVE 2 — GATHER            Agent-led. 8 parallel workstreams. Human decides what matters.
WAVE 3 — SYNTHESIZE WITHIN Collaborative. Rolling per workstream. Agent structures, human calls.
WAVE 4 — SYNTHESIZE ACROSS Human-led. Insights earn their place. Path-to-result check.
WAVE 5 — STRATEGY          Human-led decisions. Agent develops. Theory of change required.
WAVE 6 — OUTPUT            Agent drafts. Human authors. Brief + measurement framework required.
```

## Operating Model

Every wave starts with the ownership label. Every handoff surfaces an explicit interaction point
with 6 mode options. The human decides how to engage at each point.

See `references/flow-framework.md` for the interaction point format and audit schema.
See `references/recursive-loops.md` for the 5 loops that can return the flow to an earlier wave.
See `references/measurement-thread.md` for how business outcomes carry forward through all waves.

## Wave Gates

Wave N does not begin until the gate for Wave N-1 is human-approved.

| Gate | Required before |
|---|---|
| Strategic challenge + business outcomes + scope + research plan | Wave 2 |
| All active workstream syntheses complete | Wave 4 |
| Final insight set approved | Wave 5 |
| Organizing idea + theory of change approved | Wave 6 |

## Depth

| Size | Wave 2 scope | Primary research | Output |
|---|---|---|---|
| Small | 1-3 workstreams | Not conducted | Brief + measurement framework |
| Medium | 5-6 workstreams | Stakeholder interviews only | Brief + narrative + measurement framework |
| Large | All 8 workstreams | Full program | All deliverables |

See `references/the-pipeline.md` for the full depth dial by wave.

## Skills by Wave

```
WAVE 2    design:user-research          Primary research planning
          marketing:competitive-analysis Competitive audit
          brand-voice:discover-brand    Owned audit
          persona-engine:generate-persona Persona development

WAVE 3    design:research-synthesis     Research workstream synthesis
          marketing:competitive-brief   Competitive synthesis
          persona-engine:persona-audit  Persona pressure-testing

WAVE 4    brief-co-authoring            Insight sharpening
          strategy-assessment           Insight quality check
          persona-engine:persona-chat   Test insights against a persona

WAVE 5    brief-co-authoring            Organizing idea development
          persona-engine:persona-messaging Messaging hierarchy
          persona-engine:persona-to-brief  Persona insight into strategy
          strategy-assessment           Strategy quality check
          persona-engine:persona-chat   Test strategy against a persona

WAVE 6    brief-co-authoring            Brief development
          strategy-narrative            Narrative from approved brief
          marketing:performance-report  Measurement framework
          marketing:campaign-planning   If output is a campaign
```

**Quality amplifiers** (available at any wave):
- `/strategy:pressure-test` — before locking anything major
- `/strategy:courtroom` — high-stakes decisions at Wave 4/5
- `/strategy:narrative-review` — before narrative goes to stakeholders
- `/strategy:distill` — compress copy at Wave 6

## Audit

After every interaction point, write to `outputs/flow-audit.json`.
The project site's `/flow-audit` page reads this file and renders the engagement history.
See `references/flow-framework.md` for the schema.
