---
name: campaign-planning
description: |
  Campaign output skill. Takes an approved strategy and brief and builds a campaign plan —
  concept architecture, channel logic, content system, and activation sequence.
  Use for "plan the campaign," "how do we execute this," "what's the campaign structure,"
  or in Wave 6 when strategy is locked and output work begins.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections from the user
2. `rules/voice.md` — Voice rules apply to all creative output
3. `rules/quality-gates.md` — Quality gates apply
</required_reading>

# /strategy:campaign-planning

Takes locked strategy and translates it into a campaign plan. This is not creative concepting — it's the strategic architecture that makes concepting possible: what the campaign needs to do, how the channels work together, what the content system looks like, and how the rollout sequences.

## Philosophy

1. **Strategy before channels.** The campaign structure must follow the strategy's logic, not the reverse. Channels are chosen because of what they do for the strategy, not because of what the team is comfortable with.
2. **One campaign idea, many expressions.** A campaign plan should have a single coherent idea at its center, with every channel expression being recognizably the same idea in a different format. If the idea only works in one channel, it's not a campaign idea.
3. **The audience does not start where the brand starts.** The plan must account for where the audience is in their relationship with the brand and category — not where the brand wishes they were. Awareness campaigns don't convert. Conversion campaigns don't build awareness. The plan must sequence for reality.
4. **Always answer: what does success look like?** A campaign plan without measurement logic is a creative exercise. Every objective must have a signal — even if the signal is directional.

## What It Accepts

**Required (at least one):**
- Approved creative brief from `/strategy:brief`, `/strategy:brief-co-authoring`, or `outputs/brief.md`
- Approved strategy from Wave 6 output

**Optional but valuable:**
- Competitive brief from `/strategy:competitive-brief`
- Audience insights / persona documents
- Channel constraints or budget parameters (the user provides)
- Past campaign performance data (the user provides)

## Process

### Phase 1: Brief Intake and Strategy Read

Read the brief and any supporting materials. Extract and state back:

```markdown
## Campaign Brief Read

**Campaign objective:** [What this campaign needs to achieve — the measurable goal]
**Audience:** [Primary audience — specific, not demographic shorthand]
**The organizing idea:** [The single thought the campaign will organize around — from the brief]
**Proof available:** [What the brand has to back up its claim]
**Constraints known:** [Budget tier, channel restrictions, timing, team capacity — if provided]
**What success looks like:** [The outcome signal, even if directional]
```

**PAUSE. Confirm this read is accurate before building the plan.** If the brief is ambiguous about any of these, surface the ambiguity now — not after the plan is built.

### Phase 2: Campaign Architecture

Define the campaign's strategic logic before touching channels.

```markdown
## Campaign Architecture: [Campaign Name]

### The Campaign Idea
[One sentence: the idea that unifies every expression of this campaign. Not a tagline — the strategic idea. The tagline can come from this, but this is the why, not the what.]

### What This Campaign Is Designed to Do
[Campaign objective stated as a behavioral change, not a metric. "Get [audience] to think of [Brand] as [X] for the first time" is a behavioral objective. "Achieve 2M impressions" is not.]

### How the Audience Gets Here
[Describe the journey: where is the audience before this campaign touches them? What do they believe? What experience do they have with the brand? What shift does this campaign need to produce? This shapes channel logic.]

### Audience Journey Map for This Campaign
| Stage | Audience State | What the Campaign Does Here | Channel Fit |
|-------|---------------|----------------------------|-------------|
| Unaware | | | |
| Aware, not engaged | | | |
| Engaged, evaluating | | | |
| Converting | | | |
| Post-purchase / advocacy | | | |

*(Include only the stages relevant to this campaign's objective. A brand awareness campaign may only work the first two stages.)*
```

### Phase 3: Channel Logic

Select and justify channels based on the audience journey, not habit.

```markdown
## Channel Logic

### Lead Channel
**[Channel name]**
**Why this leads:** [What this channel does for the campaign that no other channel does as well — audience concentration, format fit, cultural context]
**Campaign idea expressed here:** [How the central idea shows up in this format — be specific]
**What this channel needs to produce:** [The behavioral or attitudinal outcome this channel is responsible for]

### Supporting Channels
For each supporting channel:

**[Channel name]**
**Role in the campaign:** [Amplify / Sustain / Convert / Extend — pick one and explain]
**Connection to lead channel:** [How this channel's expressions connect to and reinforce the lead channel, not just repeat it]
**Campaign idea expressed here:** [Specific to this format]

### Channels Not Used
[If there are channels the team might expect and the plan doesn't use, explain why.]

### Channel Interaction Model
[How do the channels work together? Does one drive to another? Does one generate the content another amplifies? Is there a sequencing logic? This is the non-obvious part — make it explicit.]
```

### Phase 4: Content System

Define the content types the campaign will produce — not the individual pieces, but the repeatable system.

```markdown
## Content System

### Anchor Content
[The high-production content that the campaign centers on. Film, hero image, manifesto, event — whatever the lead channel requires. Define: format, length/scale, production need, distribution moment.]

### Derivative Content
[Content types produced from the anchor — cut-downs, stills, text extracts, short-form versions. For each type: format, channel, how it adapts the anchor for that channel.]

### Ongoing / Sustained Content
[Content the brand produces throughout the campaign window to maintain presence and reinforce the idea — not tied to the hero launch. Frequency, format, voice requirements.]

### Response / Reactive Content
[If the campaign has a social or interactive component: what kind of response content does the team need to be ready to produce? What triggers it?]

### Content Volume Summary
| Content Type | Estimated Volume | Channel | Production Level |
|-------------|-----------------|---------|-----------------|
| Anchor | | | Hero |
| [Derivative type] | | | Secondary |
| Ongoing | [per week/month] | | Lightweight |
```

### Phase 5: Activation Sequence

How the campaign rolls out — without timelines or duration estimates (those belong to the client's plan).

```markdown
## Activation Sequence

### Phase 1: [Name this phase — e.g., "Signal," "Build," "Launch"]
**Objective of this phase:** [What this phase needs to accomplish before the next phase begins]
**What goes live:** [Content types and channels active in this phase]
**What to watch:** [Leading indicator that tells you this phase is working before moving to the next]
**Gate to next phase:** [What must be true before the campaign moves to Phase 2]

### Phase 2: [Name]
[Same structure]

### Phase 3: [Name, if applicable]
[Same structure]

### What Can Be Cut If Resourced (priority stack)
[If budget or capacity is compressed, what gets cut first, second, third — and what the campaign loses each time. This is a pre-made contingency, not a hedge.]
```

### Phase 6: Measurement Logic

```markdown
## Measurement Logic

### Primary Signal
**What we're measuring:** [The thing that tells us if the campaign is working]
**Why this signal:** [Why this is the right proxy for the campaign objective]
**How it's measured:** [The method — platform analytics, brand tracking, sales data, etc.]

### Supporting Signals
| Signal | What It Tells Us | How Measured |
|--------|-----------------|-------------|
| [Signal] | [Interpretation] | [Method] |
| [Signal] | [Interpretation] | [Method] |

### What Success Looks Like (directional)
[What a good result looks like — not necessarily a number, but a direction and magnitude. "Better than our baseline engagement rate with significantly higher share" is a valid directional success statement if the team doesn't have precise benchmarks.]

### What Failure Looks Like (and what to do about it)
[Early signals that the campaign isn't working, and the decision point: adjust or stop. Being honest about failure signals in the plan prevents inertia later.]
```

### Phase 7: Quality Check

| Check | Pass/Fail |
|-------|-----------|
| Campaign idea is one sentence that unifies every expression | |
| Every channel has a stated role — not just "presence" | |
| Channel interaction model explains how channels work together, not just in parallel | |
| Content system defines types, not individual pieces | |
| Activation sequence has a gate between each phase | |
| Measurement logic names a primary signal and explains why it's the right one | |
| No timelines or duration estimates in the plan | |
| Plan can be handed to a creative team and a media team independently | |

### Phase 8: Handoff and Observation

- **Save to project folder:** `outputs/campaign-plan.md`
- **If Wave 6 context:** This is one of the four Wave 6 deliverables. Confirm with `/strategy:wave-6-output` that this component is locked before moving to the next.
- **Creative brief connection:** The brief's organizing idea and the campaign plan's campaign idea must be the same. If they've diverged, reconcile before handing off to the creative team.
- **Measurement handoff:** The measurement logic in this plan feeds directly into `/strategy:performance-report` when the campaign is live.

Log per `rules/observation.md`. Track: the lead channel and its rationale, how many activation phases are in the plan, whether the campaign idea was clear from the brief or required extraction, and whether the user adjusted the channel logic after review.

## Integration

### Brief → Campaign Plan
The brief is the non-negotiable input. The brief's organizing idea is the campaign plan's central idea. If the brief is weak, the plan will be too — send it back for sharpening first.

### Campaign Plan → Performance Report
The measurement logic here defines what `/strategy:performance-report` tracks and interprets.

### Campaign Plan → Narrative
If the campaign has a narrative component (launch film, brand story, manifesto), hand the campaign idea and the approved brief to `/strategy:strategy-narrative` for the narrative build.

### Wave 6 → Campaign Plan
In the wave flow, the campaign plan is one of four Wave 6 deliverables. It should be produced after the strategic brief is locked — the brief is the input.
