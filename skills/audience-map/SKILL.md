---
name: audience-map
description: |
  Audience sizing, spending power, and influence mapping — for B2B and B2C.
  Use before building personas to determine which segments have the most strategic
  opportunity and influence. Produces a scored, ranked audience map that tells you
  which segments to prioritize for persona development, media investment, and
  strategic focus.
version: 1.0.0
---

# /strategy:audience-map

Map the full audience landscape before building personas. This skill produces a scored, ranked view of every relevant segment — by size, spending power, and influence — so strategic resources go to the segments that actually matter.

## When to use

Run this before `/persona-engine:generate-persona`. The audience map answers:
- Who are all the relevant audiences for this brand or category?
- How big is each segment, and how much do they spend?
- Who influences whom — and how far does that influence travel?
- Which segments should we prioritize for persona development?
- Where is the untapped opportunity?

## Required Inputs

Ask for what's missing. The more inputs provided, the higher the confidence.

| Input | Why it matters |
|-------|---------------|
| Client brief or brand description | Sets the category, offering, and business model |
| B2B or B2C (or both) | Changes the scoring model entirely |
| Existing audience segment definitions | Starting point — can be rough |
| Market/category size data | Enables real sizing estimates |
| Revenue or sales data by segment (if available) | Sharpens spending power scores |
| Competitive landscape | Who else is targeting these segments |
| Any known influence structures (e.g., "procurement controls the final decision") | Critical for B2B influence mapping |

If inputs are thin, run the quantitative and cultural research agents to fill gaps before scoring. Flag assumptions explicitly.

---

## Scoring Model

Each segment is scored on five dimensions. Scores are 1–10. The composite score is a weighted average — weights can be adjusted by engagement type.

### Five Dimensions

**1. Reach (Size)**
How many people or organizations are in this segment, relative to the total addressable market?

| Score | Meaning |
|-------|---------|
| 9–10 | Dominant segment — 40%+ of TAM |
| 7–8 | Large segment — 20–40% of TAM |
| 5–6 | Mid-size segment — 10–20% of TAM |
| 3–4 | Small segment — 5–10% of TAM |
| 1–2 | Niche — <5% of TAM |

**2. Spending Power (Value)**
What is the current or potential economic contribution of this segment? Combine current spend, wallet share, LTV, and growth trajectory.

*B2C signals:* category spend per year, purchase frequency, average order value, brand share of wallet
*B2B signals:* contract value, budget authority, deal size, procurement influence, renewal rate

| Score | Meaning |
|-------|---------|
| 9–10 | Highest-value segment — disproportionate revenue contribution |
| 7–8 | Strong spenders — above average LTV or deal size |
| 5–6 | Average spend — matches category norm |
| 3–4 | Low spenders — below category average |
| 1–2 | Minimal current spend — potential future value only |

**3. Influence Power**
How far does this segment's opinion, behavior, or recommendation travel? Score the influence coefficient: who do they influence, how many people, and how reliably?

*B2C signals:* social reach, word-of-mouth strength, cultural credibility, household decision-making role, peer network density
*B2B signals:* buying committee position (Economic Buyer, Champion, User, Blocker), reference account value, analyst/press relationships, industry association roles, vendor selection authority

| Score | Meaning |
|-------|---------|
| 9–10 | Multiplier segment — their endorsement moves other segments |
| 7–8 | Strong influence — credible within their network, frequently referenced |
| 5–6 | Moderate influence — respected within peer group, limited external reach |
| 3–4 | Low influence — mostly self-contained, limited recommendation behavior |
| 1–2 | Minimal influence — follows others; does not originate opinions |

**4. Accessibility**
How reachable is this segment via the brand's available channels, content, and sales motions?

| Score | Meaning |
|-------|---------|
| 9–10 | Highly accessible — direct channel or strong existing relationship |
| 7–8 | Accessible — reachable via paid, owned, or earned without unusual effort |
| 5–6 | Moderate effort — requires new channel investment or longer sales cycle |
| 3–4 | Hard to reach — fragmented, resistant, or outside current channel mix |
| 1–2 | Very hard to reach — no clear channel; high cost to acquire |

**5. Strategic Fit**
How well does this segment align with the brand's positioning, capabilities, and growth trajectory? A segment can be large and influential but still wrong if it requires the brand to become something it's not.

| Score | Meaning |
|-------|---------|
| 9–10 | Perfect fit — brand is uniquely positioned to serve and win this segment |
| 7–8 | Strong fit — some positioning work needed, but brand has real right to win |
| 5–6 | Moderate fit — reachable but requires meaningful brand or product evolution |
| 3–4 | Weak fit — significant repositioning required; other brands better positioned |
| 1–2 | Poor fit — misalignment is fundamental; high risk of brand incoherence |

---

## Default Weights

| Dimension | Default weight | Adjust when... |
|-----------|---------------|----------------|
| Reach | 15% | Lower if category is niche by design |
| Spending Power | 30% | Lower for influence-driven campaigns; raise for performance/DR |
| Influence Power | 25% | Raise for brand/culture plays; lower for direct commerce |
| Accessibility | 15% | Raise when media budget is constrained |
| Strategic Fit | 15% | Raise when brand positioning is under pressure |

Before scoring, confirm with the user whether the engagement is **brand-led** (raise Influence, lower Spending) or **performance-led** (raise Spending, lower Influence).

---

## B2B Audience Map — Additional Layer: Buying Committee

For B2B engagements, every segment also maps to a buying committee role. Score each role separately — the same segment might contain Economic Buyers in one company and end Users in another.

**Buying committee roles:**

| Role | Description | Strategic implication |
|------|-------------|----------------------|
| Economic Buyer | Final budget authority; signs the check | High Spending Power score; lower Accessibility |
| Champion | Internal advocate who pushes for the vendor | High Influence score within the org |
| User | Day-to-day operator; most product contact | High Accessibility; lower Spending Power |
| Technical Evaluator | Assesses fit; can veto | High Influence at evaluation stage |
| Blocker | Can kill the deal; often procurement or IT | Negative influence — must be addressed |

For each B2B audience segment, note: **which buying committee roles does this segment occupy?** A senior IT Director might be both Technical Evaluator and Blocker. A department head might be Champion in one deal and Economic Buyer in another.

The audience map for B2B shows both the segment *and* its typical buying role distribution.

---

## B2C Audience Map — Additional Layer: Influence Topology

For B2C engagements, map the influence direction for each segment:

| Influence type | Description |
|---------------|-------------|
| **Upstream** | This segment influences people who haven't yet entered the category |
| **Lateral** | This segment influences peers within the same demographic |
| **Downstream** | This segment is influenced by others; a follower, not a leader |
| **Household** | This segment makes or heavily shapes household decisions |
| **Cultural** | This segment sets norms that broader culture eventually adopts |

Mark each segment with its primary influence type. Cultural influencers score highest on Influence Power even if they're small in Reach.

---

## Process

### Phase 1: Intake and Scope

1. Review all provided inputs.
2. Determine: B2B, B2C, or both.
3. Identify any existing segment definitions in the brief or research.
4. If sizing or spending data is missing, spawn the **Quantitative Researcher** agent to find category-level data.
5. If influence topology is unknown, spawn the **Cultural Researcher** agent to map who leads opinion in this category.

**PAUSE — confirm segment list with user before scoring.** Show the draft segments and ask: "Are there any segments missing? Any you'd combine or split?"

### Phase 2: Score Each Segment

Score every segment on all five dimensions. Show your work — include the evidence or assumption behind each score.

Format per segment:

```markdown
## [Segment Name]

**Description:** 1–2 sentences on who this is.
**B2B/B2C:** [context]
**B2B role(s):** [if applicable — Economic Buyer / Champion / User / etc.]
**B2C influence type:** [if applicable — Upstream / Lateral / Downstream / Household / Cultural]

| Dimension | Score | Evidence / Assumption |
|-----------|-------|----------------------|
| Reach | /10 | [source or assumption] |
| Spending Power | /10 | [source or assumption] |
| Influence Power | /10 | [source or assumption] |
| Accessibility | /10 | [source or assumption] |
| Strategic Fit | /10 | [rationale] |
| **Composite** | **/10** | [weighted average] |

**Confidence:** HIGH / MEDIUM / LOW
**Key uncertainty:** [what primary research would resolve the biggest unknown]
```

### Phase 3: Rank and Prioritize

Produce the ranked audience map:

```markdown
# Audience Map — [Client Name]

## Priority Ranking

| Rank | Segment | Composite Score | Reach | Spending | Influence | Fit | Confidence |
|------|---------|----------------|-------|----------|-----------|-----|------------|
| 1 | [name] | | | | | | |
| 2 | [name] | | | | | | |
| ... | | | | | | | |

## Strategic Read

[3–5 paragraphs: what the ranking reveals, where the tension is, which segments are
being underserved or overserved, what this means for persona prioritization]

## Persona Development Recommendations

Based on this map, build personas in this order:

1. **[Segment name]** — [one sentence why this is the priority persona]
2. **[Segment name]** — [one sentence]
3. **[Segment name]** — [one sentence, note if lower confidence warrants deferral]

Segments not recommended for immediate persona development: [list + brief rationale]

## Influence Map

[Describe the influence topology: which segments influence which, and in what direction.
For B2B: who has buying committee authority. For B2C: who is upstream vs. downstream.]

## Gaps and Primary Research Recommendations

[Flag what's unknown and what research would sharpen the scores most.]
```

### Phase 4: Site Integration

When a strategy project site exists, offer to create or update the Audience Map page.

**Site page:** `site/src/app/(strategy)/audience-map/page.tsx`

The audience map page shows:
- A sortable segment table with all five dimension scores and composite scores
- A 2x2 matrix: Spending Power (Y axis) vs. Influence Power (X axis), with bubble size = Reach
- Each segment card links to its persona page if one exists, or shows "Persona: not yet built"
- Confidence indicators per segment
- A "Strategic Read" section below the visualization

**Nav placement:** Audience Map sits between Hypotheses and Personas in the nav:
```
Hypotheses → Audience Map → Personas
```

Update `StrategyShell.tsx` NAV and `PAGE_LABELS` accordingly.

**Data contract:** The page reads from a static data object defined inline in the page file (same pattern as personas). No API route needed — the map is strategy output, not runtime data.

```typescript
type AudienceSegment = {
  id: string
  name: string
  description: string
  context: 'b2b' | 'b2c' | 'both'
  b2bRoles?: string[]                // Economic Buyer, Champion, etc.
  b2cInfluenceType?: string          // Upstream, Lateral, Downstream, Household, Cultural
  scores: {
    reach: number
    spendingPower: number
    influencePower: number
    accessibility: number
    strategicFit: number
    composite: number
  }
  weights?: {                        // override defaults if adjusted
    reach: number
    spendingPower: number
    influencePower: number
    accessibility: number
    strategicFit: number
  }
  confidence: 'HIGH' | 'MEDIUM' | 'LOW'
  keyUncertainty: string
  personaSlug?: string               // links to /personas/[slug] if persona exists
  evidence: {
    reach: string
    spendingPower: string
    influencePower: string
    accessibility: string
    strategicFit: string
  }
}
```

---

## Quality Standards

An audience map is ready when:
- Every segment is scored on all five dimensions with stated evidence or flagged assumptions
- B2B segments include buying committee role mapping
- B2C segments include influence topology type
- The composite ranking is legible and defensible
- The strategic read names the tension — which segments are competing for priority, and why
- Primary research gaps are identified per segment
- Persona development order is recommended with rationale

---

## Integration with Other Skills

- **Before:** Run after `/strategy:research` or `/strategy:wave-synthesize-within` when audience data exists
- **Before personas:** Run before `/persona-engine:generate-persona` — the map determines which segments get personas first
- **After ecosystems:** If an ecosystem audit surfaced audience signals, use them as scoring inputs
- **During wave flow:** In a wave-based engagement, this skill typically runs as part of Wave 3 (Synthesize Within) or Wave 4 (Synthesize Across) when audience insights are being consolidated
