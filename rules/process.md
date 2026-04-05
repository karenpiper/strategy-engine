# Process Rules

How the strategy engine sequences work, enforces approvals, and prevents drift.

## Phase Sequencing

Every mode follows a version of this flow:

```
INTAKE → STRUCTURE → WRITE → QUALITY GATE → PRESENT
```

Some modes add or skip phases:

| Mode | Phases |
|------|--------|
| Narrative | Intake → Structure (pause for approval) → Write doc → Quality gate → Distill to slides → Quality gate → Present |
| Brief | Intake → Structure (pause for approval) → Write brief → Quality gate → Present |
| Product | Intake → Structure (pause for approval) → Write spec → Quality gate → Present |
| Pressure Test | Intake → Critique → Quality gate → Present |
| Courtroom | Intake → Round 1 (parallel critique) → Round 2 (agents argue) → Synthesis → Quality gate → Present |
| Research | Intake → Research brief (pause for approval) → Parallel research (3 agents) → Score → Synthesize → Present dossier |
| Sharpen | Select target → Baseline score → Mutation loop → Evaluate → Present changelog |

## Approval Gates

The lead agent MUST pause for the user's approval at these points:

1. **After Structure phase**: Present the narrative architecture, coined concept candidates, and expression depth. Do not proceed until confirmed.
2. **After concept selection**: If multiple concepts were proposed, the user picks. Don't pick for him.
3. **Before delivering final output**: Quality gate runs internally, but the scored output is what the user sees.

## Drift Prevention

The lead agent checks for drift at these intervals:

- **Every mode invocation**: Read `feedback-log.md` first. Always.
- **Every quality gate**: Check output against `rules/voice.md` and `rules/quality-gates.md`.
- **Every 3rd run (tracked in execution log)**: Re-read the feedback log and check if any new patterns are emerging in the execution log that suggest systematic underperformance.

## Human Interaction Model

The flow framework runs on top of every wave-based engagement. Load `references/flow-framework.md`,
`references/recursive-loops.md`, and `references/measurement-thread.md` before starting any wave.

### Interaction Points

At every handoff in a wave, surface an explicit interaction point using the format in
`references/flow-framework.md`. Do not proceed past an interaction point until the human responds.

The 6 interaction modes must be listed explicitly every time. Don't abbreviate or assume.
The human decides how to engage — the agent doesn't pick for them.

### Wave Ownership

At the start of every wave, surface the ownership label before any other output:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE [N] · [WAVE NAME]
[Wave ownership label from flow-framework.md]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Include the ownership label at every subsequent interaction point within the wave.
The human should never have to remember whose wave this is.

### Audit Writing

After every interaction point (after the human responds), write to `outputs/flow-audit.json`.
Record the wave, step, handoff type, interaction mode chosen, and any human input.
See `references/flow-framework.md` for the full schema.

If the project folder doesn't have a `flow-audit.json` yet, create it with the initial schema
from `references/flow-framework.md`. Set all wave statuses to `not-started`.

### Loop Watching

At every synthesis or strategy step, watch for loop trigger signals from `references/recursive-loops.md`.
If a signal appears, surface it immediately. Don't let the flow continue past a trigger without
naming it and asking the human whether to loop.

### Measurement Thread

Carry the measurement thread state forward. Load `references/measurement-thread.md` for the
full protocol. Key checkpoints:

- Wave 1: Ask for business outcomes. Record them. Don't proceed until defined.
- Wave 4: Run the path-to-result check on every insight candidate.
- Wave 5: Require a theory of change before approving the organizing idea.
- Wave 6: Draft the measurement framework from accumulated thread state.

## Handoff Rules

- The lead agent can suggest mode transitions: "This positioning could become a brief. Want me to run /strategy:brief on it?"
- the user decides. The engine never auto-chains modes.
- When handing off between modes, the lead agent carries forward: the brief summary, the approved concept, and any the user feedback from the current session.

## Feedback Log Protocol

the user's corrections go into `feedback-log.md`. The protocol:

1. the user flags a problem in the output
2. The lead agent writes a structured entry: what happened, what was wrong (with specific examples), what the fixes looked like, and the rule going forward
3. The entry is binding on all future runs across all modes
4. Automated improvements (from /strategy:sharpen) NEVER override feedback log entries

## Observation Protocol

After every run, the lead agent writes a structured observation to `logs/execution-log.md`. See `rules/observation.md` for the format.
