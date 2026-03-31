---
name: sharpen
description: |
  Manual, interactive autoresearch loop for sharpening a specific skill on demand.
  Based on Karpathy's autoresearch method. Use when you want to sharpen a specific
  skill right now and steer the mutations interactively.
  NOTE: The universal auto-sharpen system (~/.claude/hooks/orchestrator/hooks/sharpen.py)
  runs this same protocol automatically after sessions where scores drift. This skill
  is the manual override for when you want to watch it happen and guide it.
  Use for "sharpen this mode," "improve the courtroom," "autoresearch my narrative skill."
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections. Sharpen NEVER overrides these.
2. `rules/observation.md` — Read execution log for baseline data
3. `rules/quality-gates.md` — The scoring system sharpen uses to evaluate
</required_reading>

# /strategy:sharpen

An automated improvement loop for strategy modes and courtroom agents. Point it at any part of the engine and it gets better.

## Core Principle

Small changes, measured outcomes, keep or revert. The recipe metaphor: change one ingredient, cook 10 times, taste. Better? Keep. Worse? Put the old ingredient back.

## What Can Be Sharpened

- Any strategy mode skill (narrative, brief, product, pressure-test)
- Any courtroom agent
- The quality gate scoring criteria itself
- The narrative engines

## What CANNOT Be Overridden

- `feedback-log.md` entries (Julian's manual corrections are sacrosanct)
- `rules/voice.md` (Voice DNA is Julian's voice, not negotiable)
- Banned phrases (these are hard failures, not tunable parameters)

## Process

### Step 1: Select Target

Julian specifies what to sharpen, or the system recommends based on execution log patterns:
- "Sharpen my narrative mode"
- "The Culture Editor agent keeps producing weak critiques, sharpen it"
- "Sharpen the brief mode's proposition quality"

### Step 2: Define Scoring Checklist

The scoring checklist is how the system knows if a change helped. Two sources:

**Default: Use the existing quality gates.**
The 5-dimension scoring rubric (Tension, Specificity, Narrative Arc, Cultural Grounding, Persuasion) already exists. For most modes, this is the checklist.

**Custom: Julian defines mode-specific checks.**
For targeted improvement, Julian can add yes/no checks:
- "Does the creative brief's proposition fit in one sentence?"
- "Does the pressure test name specific competitors?"
- "Does the courtroom synthesis trace which agents killed which arguments?"

3-6 custom checks is the sweet spot. More and the system starts gaming the checklist.

### Step 3: Baseline

Run the target mode 3 times against representative test inputs. Score each output. Average = baseline score.

Test inputs come from:
- Julian provides them ("use the UBS brief as the test input")
- The execution log (reuse inputs from previous runs)
- The system generates representative inputs based on the mode's description

### Step 4: The Loop

```
REPEAT:
  1. Analyze: Which dimension/check scores lowest?
  2. Hypothesize: What change to the skill/agent instructions would improve it?
  3. Mutate: Make ONE small change to the target's .md file
     - Tighten a trigger
     - Add a missing condition
     - Reorder steps
     - Add a worked example of good output
     - Add a constraint ("NEVER do X")
     - Change the output format
  4. Test: Run the target 3 times with the mutation
  5. Score: Average score across the 3 runs
  6. Decide:
     - Score improved → KEEP the mutation
     - Score unchanged or worse → REVERT the mutation
  7. Log: Record the mutation, the scores, and the decision

STOP WHEN:
  - Score hits 90%+ three times in a row
  - 10 rounds complete (diminishing returns)
  - Julian stops it
```

### Step 5: Present Results

```markdown
## Sharpen Report: [Target]

### Baseline → Final: [X/50] → [Y/50]

### Changes Kept
1. **[Change description]** — Score impact: [+N]
   - *What changed:* [specific line/instruction added or modified]
   - *Why it helped:* [which dimension improved]

### Changes Reverted
1. **[Change description]** — Score impact: [-N]
   - *What was tried:* [the mutation]
   - *Why it hurt:* [which dimension degraded]

### Changelog
[Full diff of the target's .md file: original vs. improved version]

### Files
- Changes applied directly to: [SKILL.md path]
- Full run log saved to: `logs/sharpen/[target]-[date].md`
```

### Step 6: Auto-Compile Results

When run interactively via `/strategy:sharpen`, present results to Julian for review.
When run automatically via the background hook, results auto-compile:

1. **Apply mutations** directly to the original SKILL.md (no `.sharpened` intermediary)
2. **Compile learnings** to the skill's feedback file:
   - Format: `- [sharpen-YYYY-MM-DD]: [learning]. Source: autoresearch round N.`
3. **Log to changelog** with full diffs of kept/reverted mutations
4. **Notify** at next session start (informational, not a gate)

In interactive mode, Julian can steer mutations, skip rounds, or reject specific changes.
In automatic mode, the loop runs unattended and auto-applies. Julian can review changelogs
and revert anything manually.

### Step 7: Commit Changes

After changes are applied, commit:

```bash
cd ~/.claude/plugins/local/strategy-engine
git add [changed files]
git commit -m "sharpen: [target] [baseline]→[final score] — [1-line summary of kept changes]"
```

In interactive mode, suggest `git push` but don't push without Julian confirming.
In automatic mode (background hook), commit but do not push.

## Safety Rails

1. **Backup first.** Always save the original skill/agent file before any mutations.
2. **One mutation at a time.** Never change two things simultaneously. You can't attribute improvement if you changed two variables.
3. **Feedback log is immutable.** If a mutation contradicts a feedback log entry, revert immediately. Don't even test it.
4. **Voice DNA is immutable.** Mutations that change the voice (add formality, remove contractions, use banned phrases) are automatically invalid.
5. **Changelog is the audit trail.** In interactive mode, Julian steers mutations directly. In automatic mode (background hook), changes auto-compile — the changelog and feedback files are the audit trail. Julian can review and revert anything manually.
6. **Changelog is permanent.** Every mutation attempted, kept or reverted, is logged. When smarter models arrive, they can read the changelog and pick up where the last run left off.

## Observation

After every sharpen run, log to `logs/execution-log.md` per `rules/observation.md`. Include the target, baseline, final score, and number of mutations kept/reverted.
