# Flow Framework

The operating model for how humans and agents collaborate through a strategy engagement.
Read this before any wave-based work. It defines who owns what, how to surface handoff points,
and how to record what happened.

---

## Ownership Model

Three categories. Every step belongs to one.

**Agent owns**
Gathering, processing, structuring, drafting once direction is set. Labor-intensive execution.
The agent doesn't decide what's good — it produces raw material for the human to judge.

**Human owns**
Deciding what's interesting, what matters, what to pursue, what's good. No substitution.
When a step is human-owned, the agent sharpens, challenges, and develops — but doesn't author.

**Collaborative**
Sharpening instincts, stress-testing, exploring implications, pushing thinking further.
Both parties active. The agent develops what the human brings; the human builds on what the agent surfaces.

---

## Wave Ownership Labels

Surface the ownership label at the start of every wave and at every interaction point.

| Wave | Name | Ownership Label |
|------|------|----------------|
| 1 | Frame | Human-led. You articulate. I sharpen, ask questions, surface gaps. |
| 2 | Gather | Agent-led. I do the gathering. You decide what matters. |
| 3 | Synthesize Within | Collaborative. I structure. You call what's interesting. |
| 4 | Synthesize Across | Human-led. You drive the intellectual work. I develop what you surface. |
| 5 | Strategy Development | Human-led decisions at every turn. I develop, you author. |
| 6 | Output | Agent drafts, human authors. You shape language, order, emphasis. |

---

## Interaction Modes

Every step has a human interaction point. Engagement is optional — but the point is always present.
At each interaction point, present all 6 options explicitly.

| Mode | What it means |
|------|--------------|
| **PASS THROUGH** | Looks good. Keep going. |
| **SHAPE** | Nudge or redirect before the agent continues. |
| **ADD INPUT** | Human brings context, instinct, or institutional knowledge the agent didn't have. |
| **RIFF** | Human and agent think together before producing output. |
| **OVERRIDE** | Human replaces the agent output entirely. |
| **PAUSE** | Human isn't ready yet. Flow waits. |

### Interaction Point Format

Use this exact format at every human interaction point:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WAVE [N] · [WAVE NAME] — [HANDOFF TYPE]
Ownership: [wave ownership label]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTERACTION POINT: [what was just produced or what decision is needed]

[1–3 sentence summary of what the agent produced, or what the human needs to engage with]

How do you want to engage?
  [ PASS THROUGH ]  Keep going
  [ SHAPE ]         Redirect before I continue
  [ ADD INPUT ]     Context I didn't have
  [ RIFF ]          Think together first
  [ OVERRIDE ]      Replace my output
  [ PAUSE ]         Hold here
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

Do not proceed past this point until the human responds. Wait.

---

## Handoff Types

Label every interaction point with its handoff type. This tells the human what kind of engagement is needed.

**Agent executes → Human engages**
Agent did labor-intensive work. Human brings judgment about what matters, what's right, what direction to take.
*e.g., competitive audit complete, agent presents findings — human decides what's significant*

**Human leads → Agent develops**
Human articulates an instinct, observation, or direction. Agent sharpens, structures, challenges, develops.
*e.g., human says "I think the real problem is X" — agent builds on it, adds evidence, pushes*

**Human does → Human inputs**
Agent can't participate. Human completes real-world work, then feeds output back in.
*e.g., recruiting participants, conducting interviews, running a client session*

**Human inputs → Agent processes**
Raw human-gathered material becomes something the agent can work with.
*e.g., uploading transcripts, notes, asset libraries — agent codes, structures, extracts*

---

## Audit Format

After every interaction point, write the result to `outputs/flow-audit.json` in the project folder.
The flow audit page on the site reads this file and renders it.

### File location
`~/strategy-projects/{slug}/outputs/flow-audit.json`

### Schema

```json
{
  "projectName": "{Client Name} — {Engagement}",
  "lastUpdated": "{ISO date}",
  "measurementThread": {
    "businessOutcomes": [],
    "insightsWithoutPath": [],
    "theoryOfChange": null,
    "leadingIndicators": [],
    "laggingIndicators": []
  },
  "loops": [],
  "waves": [
    {
      "number": 1,
      "name": "Frame",
      "ownershipLabel": "Human-led. You articulate. I sharpen.",
      "status": "not-started",
      "interactions": []
    },
    {
      "number": 2,
      "name": "Gather",
      "ownershipLabel": "Agent-led. I gather. You decide what matters.",
      "status": "not-started",
      "interactions": []
    },
    {
      "number": 3,
      "name": "Synthesize Within",
      "ownershipLabel": "Collaborative. I structure. You call what's interesting.",
      "status": "not-started",
      "interactions": []
    },
    {
      "number": 4,
      "name": "Synthesize Across",
      "ownershipLabel": "Human-led. You drive. I develop what you surface.",
      "status": "not-started",
      "interactions": []
    },
    {
      "number": 5,
      "name": "Strategy Development",
      "ownershipLabel": "Human-led decisions at every turn. I develop, you author.",
      "status": "not-started",
      "interactions": []
    },
    {
      "number": 6,
      "name": "Output",
      "ownershipLabel": "Agent drafts, human authors.",
      "status": "not-started",
      "interactions": []
    }
  ]
}
```

### Interaction record schema

Each item in a wave's `interactions` array:

```json
{
  "step": "Competitive audit findings",
  "handoffType": "agent-executes-human-engages",
  "mode": "shape",
  "humanInput": "Added Salesforce to the competitive set",
  "date": "2026-04-04T14:32:00Z"
}
```

**handoffType values:** `agent-executes-human-engages` | `human-leads-agent-develops` | `human-does-human-inputs` | `human-inputs-agent-processes`

**mode values:** `pass-through` | `shape` | `add-input` | `riff` | `override` | `pause`

### Loop record schema

Each item in the top-level `loops` array:

```json
{
  "type": "gather-gap",
  "trigger": "Synthesis revealed no data on stakeholder decision-making process",
  "decision": "Reopen Wave 2 — add stakeholder interview workstream",
  "fromWave": 3,
  "toWave": 2,
  "date": "2026-04-05T10:00:00Z"
}
```

---

## Writing the Audit

At every interaction point, after the human responds, write to `flow-audit.json`:

1. Set the wave `status` to `in-progress` if it isn't already
2. Append an interaction record to the wave's `interactions` array with the mode the human chose and any input they provided
3. If the human triggered a loop, append to the `loops` array
4. If the human defined business outcomes (Wave 1), update `measurementThread.businessOutcomes`
5. Update `lastUpdated`

When a wave is fully complete, set `status` to `complete`.
