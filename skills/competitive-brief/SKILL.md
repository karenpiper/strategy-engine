---
name: competitive-brief
description: |
  Competitive synthesis deliverable. Transforms competitive research and positioning analysis
  into a structured competitive brief — the document that tells the team what the competitive
  landscape means for how to position, differentiate, and communicate.
  Use after the competitive workstream in Wave 2/3, or as a standalone deliverable for
  relaunch, repositioning, or new market entry.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections from the user
2. `rules/voice.md` — Voice rules apply to all output
3. `rules/quality-gates.md` — Quality gates apply
</required_reading>

# /strategy:competitive-brief

Turns competitive analysis into a strategic brief. This is not a research summary — it's a decision document. It tells the team what the competitive landscape means for strategy, which battles are worth fighting, and where the brand has room to own something real.

## Philosophy

1. **Analysis is not a brief.** A brief makes a recommendation. "The market is crowded" is analysis. "The category is over-indexed on rational proof and under-indexed on identity — the opening is emotional" is a brief.
2. **Competitors are not enemies, they're signals.** What competitors are doing reveals what the category rewards. Understanding what they're all doing is the first step to finding what none of them are doing.
3. **White space is not automatically good.** Unoccupied territory might be unoccupied for a reason. The brief must distinguish between white space the brand can credibly own and white space no one wants.
4. **One recommendation leads.** The brief can contain multiple findings but must end with a single competitive strategic recommendation. If there are three equally weighted options, the brief hasn't done its job.

## What It Accepts

- Competitive Positioning Map output from `/strategy:ecosystems` (Workflow F) — preferred input
- Raw research dossier from `/strategy:research` scoped to competitive analysis
- Direct input from User: "Here's what I know about our competitors..."
- Wave 2 competitive workstream synthesis from `/strategy:insight-distill` (Mode B)

## Process

### Phase 1: Input Assessment

Read all inputs. Determine:
- How many competitors are in scope? (Typically 2–4 primary, 2–3 secondary)
- Do we have positioning maps, or just channel/presence data?
- Is there a clear client brand and current positioning to orient against?
- What's the strategic question driving this? (Repositioning, new market entry, campaign, product launch?)

If positioning data is thin, recommend running `/strategy:ecosystems` Workflow F first.

**PAUSE. Confirm the strategic question before proceeding.** The brief must answer a specific question — if the question is vague, the brief will be too.

### Phase 2: Competitive Landscape Read

Produce a landscape read that the brief will draw from. This is internal working material — not the deliverable, but the foundation.

```markdown
## Landscape Read: [Category]

### What the Category Rewards
[2–3 things that every successful player in this category does, based on the evidence. These are the table stakes — necessary but not differentiating.]

### What the Category Punishes
[1–2 behaviors or positions that appear to be failing in the category right now — brands losing share, repositioning away from this territory, or visibly struggling.]

### Competitor Summary

| Competitor | Core Claim | Audience Owned | Proof Type | Tone | Owned Idea |
|------------|-----------|---------------|------------|------|-----------|
| [Name] | | | | | |
| [Name] | | | | | |

### Clustering
[How competitors cluster — which are playing the same game and which are genuinely distinct.]

### Unoccupied Territories
[Specific positioning claims or emotional registers that no one is credibly owning. Include a viability note for each — is this empty because it's unwinnable, or because no one has tried?]
```

### Phase 3: Competitive Brief

The deliverable. Tight, opinionated, written to be read in 10 minutes and acted on.

```markdown
# Competitive Brief: [Client] vs. [Category]

**Prepared by:** Strategy Engine
**Date:** [Date]
**Strategic question this answers:** [Specific question — e.g., "Where does [Brand] have room to differentiate in the [Category] market?"]

---

## The Competitive Situation in One Paragraph
[Executive summary: what the landscape looks like, what it means, and what the recommendation is. This paragraph is the brief — everything below is the evidence for it.]

---

## What Competitors Are Doing

### The dominant play
[The positioning territory that 2+ competitors are competing in. Describe it precisely — not "everyone claims quality" but "everyone claims enterprise-grade reliability with customer success as the differentiator."]

**Why it's crowded here:** [Evidence — what made this territory attractive.]
**What's at stake if [Client] plays here:** [The specific cost of competing on the dominant positioning.]

### The challenger plays
[What the outliers are doing — the brands going against category conventions.]

**Why they chose this:** [Strategic rationale, inferred from their moves.]
**What [Client] can learn from this:** [Specific implication.]

### The gaps
[What the competitors are collectively failing to do for their audiences.]

Evidence:
- [Finding 1 — specific, cited if possible]
- [Finding 2]
- [Finding 3]

---

## Where [Client] Has Room

### Territory A: [Name the territory]
**The claim this would stake:** [Specific positioning statement this territory would enable]
**What supports [Client] owning this:**
- [Credential or proof point 1]
- [Credential or proof point 2]
**Risks:**
- [Risk 1]
**Viability:** HIGH / MEDIUM / LOW — [One-sentence rationale]

### Territory B: [Name the territory]
[Same structure]

*(Include 2–3 territories maximum. More than 3 means the landscape hasn't been read sharply enough.)*

---

## The Recommendation

**[Client] should compete on:** [Territory name]

**Because:**
1. [Specific reason grounded in the competitive analysis]
2. [Second reason]
3. [What this excludes — naming what the brand is choosing NOT to do is as important as what it's choosing to do]

**The risk of this recommendation:** [Honest assessment of what could go wrong]
**What would need to be true for this to work:** [Conditions — brand proof, execution requirements, market conditions]

---

## Implications for Positioning

| Element | Current State | Competitive Brief Implies |
|---------|---------------|--------------------------|
| Core claim | [Client's current claim] | [What should shift] |
| Audience | [Current audience signal] | [Who to lean into] |
| Tone | [Current tone] | [What to adopt or abandon] |
| Proof | [Current proof type] | [What kind of evidence to lead with] |

---

## What This Brief Doesn't Answer
[Honest gaps — questions that require primary research, financial modeling, or client input that this brief can't provide. This is not a hedge; it's a navigation aid for the team.]
```

### Phase 4: Quality Check

Before delivering:

| Check | Pass/Fail |
|-------|-----------|
| The brief answers a specific strategic question | |
| "The Competitive Situation in One Paragraph" contains a recommendation, not just a summary | |
| Each territory is named specifically (not "emotional differentiation" — what emotion, for whom?) | |
| The Recommendation section names what the brand is choosing NOT to do | |
| No finding appears without evidence | |
| Voice DNA compliant — no slop phrases | |
| Brief can be read and acted on in under 10 minutes | |

**If any check fails, revise before delivering.**

### Phase 5: Handoff and Observation

After the user reviews and responds:
- If approved: offer to write `outputs/competitive-brief.md` to the project folder
- If Wave 2 context: this brief feeds into the Wave 3 synthesis for the competitive workstream — confirm handoff to `/strategy:wave-3-synthesize-within`
- If positioning work continues: this brief is the primary input for `/strategy:narrative` or `/strategy:wave-5-strategy`

Log per `rules/observation.md`. Track: the recommended territory, how many competitors were analyzed, whether the white space was genuinely unoccupied or conditionally available, and whether the user accepted or redirected the recommendation.

## Integration

### Ecosystems → Competitive Brief
Workflow F output from `/strategy:ecosystems` is the ideal input. Run the workflow, then invoke this skill with the positioning map.

### Competitive Brief → Narrative
The competitive brief's Recommendation section becomes the competitive lens inside a brand narrative. It answers: "What makes this brand different from the alternatives?"

### Competitive Brief → Wave 5
In the wave flow, the competitive brief (produced in Wave 3 as the competitive workstream synthesis) becomes one of the key inputs for the strategic question in Wave 5.

### Competitive Brief → Brief Co-Authoring
The competitive recommendation shapes the brief's "What's the space we're playing in?" and "What does winning look like?" questions.
