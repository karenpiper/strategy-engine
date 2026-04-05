---
name: wave-gather
description: |
  Wave 2 of the strategy flow. Agent-led gathering across up to 8 parallel workstreams.
  The human decides which workstreams are active (set in Wave 1), then decides what matters
  as each workstream completes. Primary research decision gate runs mid-wave.
  Run after Wave 1 is complete.
---

<required_reading>
1. `feedback-log.md`
2. `references/flow-framework.md`
3. `references/recursive-loops.md`
4. `rules/process.md`
5. `rules/voice.md`
6. `rules/quality-gates.md`
</required_reading>

# /strategy:wave-gather

Wave 2 of the strategy flow. Execution work. The agent gathers; the human decides what matters.

## On Load

1. Load `~/strategy-projects/{slug}/project-context.md` and `~/strategy-projects/{slug}/outputs/flow-audit.json`.
2. Confirm Wave 1 is complete. If not: "Wave 1 isn't complete yet. Run `/strategy:wave-frame` first — the scope and research plan from Wave 1 drive everything here."
3. Read the engagement scope and research plan from the Wave 1 audit to know which workstreams are active.

## Wave Header

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER
Agent-led. I do the gathering. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Display the active workstreams at the start:

```
Active workstreams: [list from Wave 1 scope]
Conditional: [primary research / stakeholder interviews if not yet decided]
Closed: [any workstreams excluded in Wave 1]
```

## Workstream Execution

Run active workstreams in parallel where possible. Each has its own interaction point when complete.

---

### Secondary Research

**Leads:** Agent
**Handoff type:** `agent-executes-human-engages`

- Research by the themes and focus areas defined in the Wave 1 research plan
- Use `/strategy:research` — three parallel agents (academic, quantitative, cultural) with scored findings
- Surface findings grouped by theme, ranked by composite score
- Flag contradictions, gaps, and claims that need primary research to verify

**Interaction point after findings surface:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Secondary research findings

[3-5 sentence summary of strongest findings + any significant gaps or contradictions]

Full dossier above. What's interesting to you? What should I develop further?

  [ PASS THROUGH ]  Looks good — move on
  [ SHAPE ]         I want to redirect the focus
  [ ADD INPUT ]     There's context that changes how I read this
  [ RIFF ]          Let's dig into something specific together
  [ OVERRIDE ]      I want to set the findings myself
  [ PAUSE ]         I need to read this more carefully first
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Secondary research`, mode chosen.

---

### Hypotheses / Provocations *(runs after secondary research, before primary)*

**Leads:** Human — this track is human-initiated
**Handoff type:** `human-leads-agent-develops`

After secondary research interaction point:
> "Before deciding on primary research — any early hypotheses forming? Things you believe to be true based on what the research is showing? Provocations — the uncomfortable or counterintuitive version of what you're seeing?"

Human articulates. The agent:
- Develops and sharpens each hypothesis — adds evidence from the research, challenges weak reasoning
- Pushes until each hypothesis is specific enough to be testable (not "people want simplicity" but "buyers at this stage will pay a 20% premium for confidence over capability")
- Writes the provocation version — the daring form designed to generate a reaction in a room

Use `/strategy:hypotheses` if the hypotheses set needs full development.

**Interaction point after each hypothesis is sharpened:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Human leads → Agent develops
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Hypothesis — [title]

Hypothesis: [sharpened version]
Provocation: [the daring form]
Evidence: [what supports it from secondary research]
Challenge: [what complicates or argues against it]
Confidence: HIGH / MEDIUM / SPECULATIVE

  [ PASS THROUGH ]  This is right
  [ SHAPE ]         Not quite — let me adjust the framing
  [ ADD INPUT ]     There's institutional knowledge I should factor in
  [ RIFF ]          Let's push this further
  [ OVERRIDE ]      I want to state this differently
  [ PAUSE ]         I need to sit with this
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Hypotheses / Provocations`.

*Optional: trigger External Validation Loop here — bring client in to pressure-test hypotheses before primary research. See `references/recursive-loops.md`.*

---

### Primary Research Decision Gate *(conditional)*

After hypotheses are formed, surface the decision:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Primary research decision

What secondary research left open:
[List gaps from the dossier — specific claims the research couldn't verify, 
audience questions that desk research can't answer]

The case for primary research: [what it would tell us that secondary can't]
The case against: [time, access, whether the gaps are decision-critical]

Is primary research needed and possible for this engagement?

  [ PASS THROUGH ]  No primary research — proceed without it
  [ ADD INPUT ]     Yes — here's what I want to learn [open track]
  [ SHAPE ]         Stakeholder interviews only — not full fieldwork
  [ PAUSE ]         I need to check feasibility first
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

- If closed: Mark primary research as `disabled` in audit. Continue with remaining workstreams.
- If open: Proceed with Primary Research track below.

Write to audit: step `Primary research decision gate`.

---

### Primary Research *(if gate is open)*

**Leads:** Agent plans; human conducts
**Handoff type:** `agent-executes-human-engages` → `human-does-human-inputs` → `human-inputs-agent-processes`

**Phase 1: Planning**
- Agent drafts research objectives grounded in the open hypotheses
- Skill: `design:user-research` — screener + discussion guide
- Human validates before fieldwork begins

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Primary research plan

Objectives: [what we're trying to learn]
Screener: [participant criteria]
Discussion guide: [key question areas]

  [ PASS THROUGH ]  Ready to field
  [ SHAPE ]         Adjust objectives or guide
  [ ADD INPUT ]     Context that should shape the questions
  [ OVERRIDE ]      I'll write the guide myself
  [ PAUSE ]         Not ready to recruit yet
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Phase 2: Field** *(agent can't participate)*
- Recruit participants
- Conduct sessions
- Document notes or record

**Phase 3: Upload and process**
- Human uploads transcripts, notes, or recordings
- Agent processes and codes: themes, quotes, patterns, evidence for/against each hypothesis
- `human-inputs-agent-processes`

**Interaction point after processing:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Human inputs → Agent processes
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Primary research processed

[Key themes, notable quotes, hypothesis check: confirmed / complicated / disproved]

  [ PASS THROUGH ]  Accurate — move to synthesis
  [ SHAPE ]         Some of this is being read wrong
  [ ADD INPUT ]     There were things in the sessions that aren't in the notes
  [ RIFF ]          Let's talk through what I heard
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Loop watch:** If primary research disproves or significantly complicates a hypothesis → surface Hypothesis Loop. See `references/recursive-loops.md`.

Write to audit: step `Primary research`.

---

### Stakeholder Interviews *(if in scope)*

**Leads:** Agent plans; human conducts
**Handoff type:** `agent-executes-human-engages` → `human-does-human-inputs` → `human-inputs-agent-processes`

- Human defines who matters and why (agent can propose, human decides)
- Agent writes interview guide → human shapes with institutional knowledge and political context
- Human conducts interviews (agent can't participate)
- Human uploads notes or transcripts → agent processes

**Interaction point — guide review:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Stakeholder interview guide

[Interview guide outline — key question areas per stakeholder type]

  [ PASS THROUGH ]  Ready to run
  [ SHAPE ]         Questions need adjusting
  [ ADD INPUT ]     Political/institutional context I should factor in
  [ OVERRIDE ]      I'll write the questions myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

After upload + processing: same pattern as primary research.

Write to audit: step `Stakeholder interviews`.

---

### Owned Audit *(if in scope)*

**Leads:** Agent audits; human adds what the agent can't see
**Handoff type:** `agent-executes-human-engages`

- Human defines which dimensions matter (agent can propose: tone/voice, visual identity, message consistency, competitive positioning, content quality, channel coverage)
- Human provides access to internal materials (links, documents, assets)
- Agent audits what's accessible → surfaces findings
- Human adds context: what the agent is misreading, what's intentional vs. accidental, what's about to change

Skill: `brand-voice:discover-brand`

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Owned audit

[Summary of findings: strongest signals, inconsistencies, gaps]

What am I missing or reading wrong?

  [ PASS THROUGH ]  Accurate picture
  [ ADD INPUT ]     Context that changes how to read this
  [ SHAPE ]         Some findings need reframing
  [ RIFF ]          Let's talk through what this means
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Owned audit`.

---

### Competitive Audit *(if in scope)*

**Leads:** Agent researches; human adds market knowledge
**Handoff type:** `agent-executes-human-engages`

- Human defines the competitive set and comparison dimensions (agent can propose)
- Agent researches and audits each competitor
- Human corrects, adds market knowledge, names what the agent couldn't see (what a competitor is actually known for vs. what they claim)

Skill: `marketing:competitive-analysis`

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Competitive audit

[Summary: competitive set, key dimension findings, where white space appears]

What's wrong or missing here? What does your market knowledge add?

  [ PASS THROUGH ]  Accurate — move on
  [ SHAPE ]         The competitive set or framing needs adjusting
  [ ADD INPUT ]     Market knowledge the research missed
  [ RIFF ]          Talk through competitive implications
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Competitive audit`.

---

### Ecosystem / Cultural Context *(if in scope)*

**Leads:** Agent maps; human filters signal from noise
**Handoff type:** `agent-executes-human-engages`

- Agent maps: category players, macro trends, cultural forces, adjacent movements
- Human flags what's relevant vs. noise, adds context from lived experience in the category

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Ecosystem / cultural context

[Category landscape summary: key forces, trends, adjacent movements]

What's actually relevant here? What should I discard?

  [ PASS THROUGH ]  Useful picture — move on
  [ SHAPE ]         Cut some of this, add something else
  [ ADD INPUT ]     Cultural context I know that the research missed
  [ RIFF ]          Let's figure out what's load-bearing here
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Ecosystem / cultural context`.

---

### Personas *(if in scope)*

**Leads:** Agent drafts; human pressure-tests
**Handoff type:** `agent-executes-human-engages`

- Human articulates who they believe the audience is and what drives them
- Agent drafts persona profiles grounded in research
- Human pressure-tests against real-world knowledge: who's right, who's wrong, what's missing from the profile that the research can't see

Skill: `persona-engine:generate-persona`

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Personas

[Persona summary: name/archetype, key motivations, pain points, decision drivers — 2-3 sentences each]

What rings true? What's off? What does your real-world knowledge add?

  [ PASS THROUGH ]  These feel right
  [ SHAPE ]         Some profiles need adjusting
  [ ADD INPUT ]     Real-world knowledge that changes these
  [ RIFF ]          Talk through who these people actually are
  [ OVERRIDE ]      I want to define the audience myself
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Personas`.

---

### Journeys *(if in scope)*

**Leads:** Agent maps; human adds experiential knowledge
**Handoff type:** `agent-executes-human-engages`

- Human defines scope and which journey moments matter most
- Agent maps current-state journey from research
- Human adds what research can't capture: what the experience actually feels like, the unofficial workarounds, the moments where the official journey diverges from reality

**Interaction point:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 · GATHER — Agent executes → Human engages
Agent-led. I gather. You decide what matters.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: Journey map

[Journey summary: stages, pain points, moments that matter]

What's the research getting wrong? What does this journey actually feel like?

  [ PASS THROUGH ]  Accurate enough — move on
  [ SHAPE ]         Reframe specific stages or moments
  [ ADD INPUT ]     Experiential knowledge the research missed
  [ RIFF ]          Let's build out the moments that really matter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Write to audit: step `Journeys`.

---

## Loop Watching

At every interaction point, watch for:

- **Hypothesis Loop:** Primary research disproves a hypothesis → surface the loop immediately
- **Gather Gap Loop:** Not triggered in Wave 2 — that comes from Wave 3 synthesis

See `references/recursive-loops.md` for surface language.

---

## Wave 2 Complete

When all active workstreams have completed and interaction points have been resolved:

1. Set Wave 2 status to `complete` in `flow-audit.json`
2. Announce:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE 2 COMPLETE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Workstreams completed: [list]
Workstreams closed: [list with reason]
Hypotheses formed: [count]

Ready for Wave 3. Run /strategy:wave-synthesize-within to begin.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```
