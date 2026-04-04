---
name: ecosystems
description: |
  Ecosystem analysis engine. Maps brand presence across all media types (paid, owned,
  earned, rented), audits every channel, maps gaps and friction points, and crawls
  the ecosystem through specific persona eyes to find where it works and where it breaks.
  Use for "audit our ecosystem," "map our channels," "where do we have gaps,"
  "experience the brand as [persona]," "analyze our competitors' ecosystem,"
  "what's missing," "where's the friction," or any request to understand how a
  brand shows up across all touchpoints.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections
2. `rules/voice.md` — Voice rules apply to all output
3. `rules/quality-gates.md` — Quality gates apply to synthesis
4. `references/ecosystems-framework.md` — Scoring rubrics and audit dimensions
</required_reading>

# /strategy:ecosystems

Ecosystem analysis engine. Discovers how a brand shows up across every channel, audits what's working and what's broken, maps gaps and friction, and crawls the experience through specific personas. Returns a prioritized report with scored findings and specific recommendations.

## Philosophy

1. **Discovery before judgment.** Map the full ecosystem before evaluating it. Audit what's actually there, not what the brand thinks is there.
2. **Scored, not curated.** Every finding gets a severity score. The report surfaces critical issues first. Julian decides what to act on.
3. **Friction is the enemy.** A gap is absence. Friction is presence that actively harms. Friction is worse than a gap — flag it first.
4. **Persona-grounded.** Ecosystem analysis is only as useful as the personas it serves. A channel that works for Margaret Osei and breaks for Jordan Park is a problem worth naming specifically.
5. **Proof of claim.** Every finding needs a specific example. "Website messaging is inconsistent" is not a finding. "The homepage says X and the product page says the opposite" is a finding.

## The Four Agents

### 1. Ecosystem Mapper
**Purpose:** Discovers and inventories the full brand ecosystem across paid, owned, earned, and rented media.
**Method:** Web search + URL parsing to find active channels. Checks for social profiles, press coverage, review sites, app stores, community forums, documentation, and partner pages.
**Output:** Full channel inventory organized by media type, with metadata on recency and estimated activity level.

### 2. Ecosystem Auditor
**Purpose:** Evaluates every channel across 4 audit dimensions: Content & Visual Language, Messaging & Narrative, Performance & Proof, Relationship & Friction.
**Method:** Fetches and reads each channel. Scores each dimension per channel. Flags critical, high, medium, and low issues.
**Output:** Channel-by-channel scorecard, top 10 findings, ecosystem health score.

### 3. Persona Crawler
**Purpose:** Simulates a specific persona experiencing the brand ecosystem from initial discovery through purchase/conversion.
**Method:** Agent embodies the persona and navigates the ecosystem as that person would — starting from organic search, not the brand's homepage.
**Output:** Persona journey map, friction report, wins report, gap report, verbatim experience quotes.

### 4. Ecosystem Synthesizer
**Purpose:** Pulls all findings into a single prioritized report. Identifies patterns across agents. Generates specific, actionable recommendations.
**Output:** Executive summary, prioritized findings matrix, recommendation roadmap.

## Workflows

### Workflow A: Baseline Ecosystem Audit
Full discovery + full audit. No persona crawl.
Use when: starting from scratch, quarterly review, before a repositioning.

### Workflow B: Focused Gap & Friction Analysis
Discovery + targeted audit on a specific area (e.g., "conversion funnel," "developer experience," "post-purchase").
Use when: known problem area, time-constrained, or as a follow-up to a prior audit.

### Workflow C: Persona Experience Research
Discovery (or use existing map) + persona crawl for 1-3 personas.
Use when: testing how the ecosystem serves specific audiences, validating persona assumptions, identifying persona-specific friction.

### Workflow D: Competitive Ecosystem Positioning
Mapper runs on 2-3 competitors. Auditor compares channel presence and quality.
Use when: competitive brief, relaunch planning, gap-in-market analysis.

### Workflow E: Buyer-Channel Gap Analysis
Takes the brand's existing ecosystem map and a set of personas or a strategic brief, then maps where buyers actually are in their evaluation journey vs. where the brand has presence. The output is a gap matrix: moments where buyers are active and the brand is absent, moments where the brand is present but buyers aren't evaluating, and moments of actual overlap.

**This workflow is the specific answer to the brief "IBM lacks presence in moments where the B2B buyer is assessing their options."**

Use when:
- The brand has a strategic brief that names a specific buyer type or evaluation moment
- A persona set exists (from `/persona:generate-persona` or a persona document)
- The audit finding is not "we have gaps" but "we're not in the room when buyers are deciding"

The Persona Crawler runs Workflow E: starting from buyer search behavior, not from the brand's channel list. The output maps:
1. **Evaluation channels** — where the buyer actually researches and compares options (AI search, peer review sites, analyst reports, community forums, trade media)
2. **Brand presence at those channels** — is the brand there? What does it say?
3. **Absence findings** — moments where competitors appear and the brand doesn't
4. **Presence-but-irrelevant findings** — channels where the brand has high investment but buyers don't evaluate there (Facebook for B2B enterprise is the clearest example)

Output format: a matrix scored by: Buyer Presence (how often does the persona use this channel in evaluation?) × Brand Presence (how visible and effective is the brand there?). The most urgent quadrant: high buyer presence, low brand presence.

## Process

### Phase 0: Intake
Collect from the user:

**Required:**
- Brand/company name
- Industry/category

**Optional (ask if not provided and relevant to workflow):**
- Known channels to include or exclude
- Competitors to analyze (Workflow D)
- Personas to crawl (Workflow C)
- Focus area (Workflow B)
- Time period (default: last 6 months)
- Any private metrics the user wants to provide

**Determine workflow.** If user hasn't specified, ask: "Full ecosystem audit, focused area, persona crawl, or competitive analysis — or some combination?"

**PAUSE for confirmation before launching agents.**

### Phase 1: Ecosystem Discovery
Launch the **Ecosystem Mapper** agent.

The mapper returns a full channel inventory organized as:

```
ECOSYSTEM INVENTORY: [Brand]
──────────────────────────────
PAID MEDIA
  [ ] Google Search Ads — [status: active/inactive/unknown]
  [ ] LinkedIn Ads — [status]
  [ ] Meta Ads — [status]
  [ ] [other paid channels found]

OWNED MEDIA
  [ ] Website — [URL, last updated if visible]
  [ ] Blog/Content Hub — [URL, post frequency]
  [ ] Documentation — [URL, if applicable]
  [ ] Email — [newsletter name/cadence if discoverable]
  [ ] App — [App Store/Play Store, rating, last update]
  [ ] Community — [URL, platform, activity level]

EARNED MEDIA
  [ ] Press Coverage — [outlets, volume, recency]
  [ ] Reviews — [G2, Capterra, Trustpilot, App Store, etc. — rating + volume]
  [ ] Social Mentions — [volume, sentiment if detectable]
  [ ] Analyst Coverage — [if any found]
  [ ] Awards/Recognition — [if any found]

RENTED MEDIA
  [ ] LinkedIn — [followers, post frequency, last post]
  [ ] Twitter/X — [followers, activity]
  [ ] Instagram — [followers, activity]
  [ ] YouTube — [subscribers, upload frequency]
  [ ] GitHub — [stars, activity, if applicable]
  [ ] [other platforms found]

AEO/GEO — AI SEARCH (always audit this category)
  [ ] Google AI Overviews — [how brand appears in AI-generated summaries for category queries]
  [ ] ChatGPT / Bing Copilot — [how brand is described when users ask AI about the category]
  [ ] Perplexity / Answer Engines — [which pages are cited as sources; product vs. editorial]
  [ ] Other LLMs (Claude, Gemini) — [consistency of brand representation across models]

CHANNELS NOT FOUND (expected for this category)
  [ ] [channels competitors have that this brand doesn't]
```

**PAUSE. Show inventory to user. Confirm scope before launching audit.**

### Phase 2: Ecosystem Audit
Launch the **Ecosystem Auditor** agent for each channel in the confirmed inventory.

The auditor scores each channel across 4 dimensions (1-10):

| Dimension | What It Measures |
|-----------|-----------------|
| Content Health | Freshness, volume, relevance, zombie asset count |
| Message Coherence | Consistency of claims, proof of assertions, narrative alignment |
| Visual Language | Brand consistency, recognizability, tone fit |
| Performance Signal | Public metrics, engagement indicators, conversion signals |

Severity levels for findings:
- **CRITICAL** — Actively harmful to brand or audience. Fix now.
- **HIGH** — Significant gap or friction. Fix this quarter.
- **MEDIUM** — Opportunity. Fix when resourced.
- **LOW** — Polish. Fix when convenient.

**The auditor does not wait for all channels before returning findings.** It surfaces critical issues as they're found.

#### Confidence Scoring (required for each channel)

Every audited channel must include a `confidence` rating. This appears as a badge on every channel card and finding — ensuring findings are clearly labeled as validated facts, directional observations, or unverified gaps.

| Level | When to use | Display |
|-------|-------------|---------|
| `verified` | Confirmed directly from the source — URL checked, data pulled | ✓ Verified (green) |
| `observed` | Inferred from available public signals; directionally reliable but not measured | ~ Observed (yellow) |
| `unverified` | Could not be confirmed — this is a potential gap, not a fact | ? Unverified (gray) |

**Rules:**
- Never state an absence as a fact (`confidence: verified`) if you could not directly verify the channel was checked and found inactive. An unverifiable absence is `unverified`.
- `observed` applies to findings from AI search testing, social signal inference, or platform behavior — real signals, but not source-level data.
- Every `unverified` finding must include a note in the `finding` field or `fix` field specifying what would be needed to verify it.

#### Channel Preview Data (required for each channel)

Every audited channel must include a `channel_preview` block for use in interactive dashboards. This is not optional — it powers the clickable modal cards in the ecosystem visualization.

```json
{
  "recentContent": "Specific example of what was found — a real post, headline, quote, or page copy. Not a description of the channel.",
  "contentDate": "Date of the content example (if verifiable)",
  "stats": [
    { "label": "Short label", "value": "Specific value — number, rating, comparison" }
  ],
  "takeaways": [
    "First takeaway — specific, actionable, based on evidence",
    "Second takeaway",
    "Third takeaway"
  ]
}
```

Rules:
- `recentContent` must be specific — quote actual copy, headlines, or data. Never summarize generically.
- `stats` should have 2–4 items. Include competitor benchmarks where relevant.
- `takeaways` should be 2–3 items. Each must be specific enough to act on. "Messaging is weak" is not a takeaway.

**The auditor does not wait for all channels before returning findings.** It surfaces critical issues as they're found.

### Phase 3: Persona Crawl (Workflow C only)
Launch the **Persona Crawler** agent for each persona specified.

The crawler:
1. **Starts from organic discovery** — searches "[problem the persona has]" not "[brand name]"
2. **Follows the path the persona would actually take** — not the path the brand designed
3. **Evaluates each touchpoint** from the persona's perspective
4. **Notes specific friction moments** with exact language
5. **Notes specific wins** where the ecosystem delivers
6. **Documents gaps** — information or experiences the persona expected but didn't find

**Multiple personas:** Run crawls in parallel where possible. After all crawls complete, synthesizer compares to find universal vs. persona-specific issues.

### Phase 4: Synthesis & Report
Launch the **Ecosystem Synthesizer** agent.

The synthesizer produces:

```markdown
# Ecosystem Audit: [Brand]
[Date] · [Workflows run]

## Executive Summary
[5-7 sentence read on the ecosystem's overall health, biggest opportunity, most urgent issue]

## Ecosystem Health Score
| Dimension | Score | Trend |
|-----------|-------|-------|
| Content Health | /10 | ↑ / → / ↓ |
| Message Coherence | /10 | |
| Visual Language | /10 | |
| Performance Signal | /10 | |
| **Overall** | **/10** | |

## Critical Findings (fix now)
[Each finding: Channel → Issue → Specific example → Impact → Recommendation]

## High Priority Findings (fix this quarter)
[Same format]

## Top Opportunities (not just gaps, but leverage points)
[Channels or moments where small investment would compound]

## Persona-Specific Findings (if crawl was run)
[Per persona: what worked, what broke, what was missing]

## Competitive Gaps (if Workflow D was run)
[Where competitors have presence this brand lacks]

## Recommended Prioritization
[Stack-ranked list of actions, sized by effort and impact]
```

### Phase 5: Observation
Log per `rules/observation.md`.

## Anti-Slop Rules

1. **No ecosystem finding without a specific example.** "Inconsistent messaging" is not a finding. Name the channel, quote the conflicting claim.
2. **No recommendation without a severity.** Every recommendation carries CRITICAL / HIGH / MEDIUM / LOW.
3. **No persona crawl finding without a moment.** "The developer persona is frustrated" is not a finding. Name the touchpoint, the specific friction, and what the persona expected instead.
4. **No "could improve" without specifying how.** Vague upgrade suggestions are noise. Name the specific change.
5. **No inventory item without verification.** A channel listed as "active" means the agent checked it and found recent content. Not an assumption.
6. **No timelines in recommendations.** Do not include execution timelines, sprint estimates, or "within X weeks" language in action plans. Severity levels (CRITICAL / HIGH / MEDIUM / LOW) carry the urgency signal — timelines are for the client to set.

## Integration with Other Modes

### Ecosystems → Narrative
A complete ecosystem audit often reveals message inconsistency. Feed the audit report into `/strategy:narrative` as evidence of what the brand is actually saying vs. what it should say.

### Ecosystems → Courtroom
Use the competitive ecosystem findings as input for a courtroom debate: "Competitor X owns [moment] and we don't — is that a problem worth solving?"

### Ecosystems → Persona Engine
The persona crawl in this module uses simplified persona inputs. For full persona depth, use `/persona:generate-persona` first, then bring the persona document into the crawl.

### Research → Ecosystems
Run `/strategy:research` first on the category, then bring the findings into the ecosystem audit to contextualize what channels matter most in this industry.
