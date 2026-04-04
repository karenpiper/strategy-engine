# Ecosystems Framework

Reference for the `/strategy:ecosystems` module. Scoring rubrics, media type definitions, audit dimension breakdowns, and workflow decision guides.

---

## Media Type Definitions

| Type | Definition | Examples |
|------|-----------|---------|
| **Paid** | Brand pays for placement | Google Ads, Meta Ads, LinkedIn Ads, sponsored content, display, programmatic |
| **Owned** | Brand controls the channel and content | Website, blog, email, app, documentation, brand community, podcast |
| **Earned** | Third parties create or amplify | Press coverage, analyst reports, reviews, social mentions, word-of-mouth, UGC, partnerships |
| **Rented** | Brand has presence but doesn't control the platform | LinkedIn page, Instagram, YouTube, Twitter/X, GitHub, marketplaces, App Store |

**The rented media trap:** A brand that invests heavily in rented media (social) but neglects owned media (website, email) is building on land it doesn't own. Platform algorithm changes can destroy years of audience-building overnight. Note this risk when rented > owned investment.

---

## Audit Dimension Rubrics

### Content Health (1-10)

| Score | Standard |
|-------|---------|
| 9-10 | Content is current (within 30 days), purposeful, high quality, no zombies |
| 7-8 | Most content is current, minor staleness, clear content strategy visible |
| 5-6 | Some content is current, inconsistent cadence, some zombie assets |
| 3-4 | Mostly stale, no clear content strategy, zombie assets present |
| 1-2 | Abandoned or nearly so, harmful zombie assets, no activity |

**Zombie asset test:** Would a first-time visitor find this content and form an incorrect impression of the brand? If yes, it's a zombie. Remove or update.

**Freshness thresholds by channel:**
- Social media: Stale after 14 days of no activity
- Blog/content hub: Stale after 60 days
- Website copy: Stale if references are 12+ months old
- Documentation: Stale if doesn't reflect current product
- Press page: Stale if most recent item is 6+ months ago

---

### Message Coherence (1-10)

| Score | Standard |
|-------|---------|
| 9-10 | Core claim consistent across all channels, claims are proven, narrative is coherent |
| 7-8 | Core claim mostly consistent, minor variation, most claims have some proof |
| 5-6 | Core claim varies noticeably by channel, some claims are asserted without proof |
| 3-4 | Different brand stories on different channels, multiple unsupported claims |
| 1-2 | Actively contradictory claims across channels, or no discernible positioning at all |

**Message extraction method:**
1. Read the headline/above-fold on each channel as a first-time visitor
2. State the core claim in one sentence
3. Compare across channels
4. If the sentences contradict, score drops

**Proof hierarchy (strongest to weakest):**
1. Third-party data (industry report, analyst quote)
2. Customer case study with specific metrics
3. Customer testimonial (named, with context)
4. Customer testimonial (anonymous)
5. Internal claim ("our product does X")
6. Assertion without evidence ("best in class")

---

### Visual Language (1-10)

| Score | Standard |
|-------|---------|
| 9-10 | Instantly recognizable brand across all channels, consistent and adapted for each channel |
| 7-8 | Mostly consistent, minor drift, channel adaptations are appropriate |
| 5-6 | Inconsistent in places, some channels feel off-brand, visual quality varies |
| 3-4 | Significant inconsistency, multiple channels feel like a different brand |
| 1-2 | No apparent visual identity system, or severe inconsistency |

**Visual language check per channel:**
- Is the logo the current version? Correctly sized/cropped?
- Are the brand colors used? Or has the palette drifted?
- Is the typography consistent with other channels?
- Is the tone of voice (formal/casual/authoritative) consistent?
- Does the visual quality level match the brand's position?

---

### Performance Signal (1-10)

| Score | Standard |
|-------|---------|
| 9-10 | Strong, growing metrics across the channel; clear conversion intent; outperforms category |
| 7-8 | Solid metrics, stable or growing, some conversion opportunities missed |
| 5-6 | Mediocre metrics, flat trajectory, conversion path unclear |
| 3-4 | Weak metrics, declining trajectory, or channel exists but creates no value |
| 1-2 | No measurable signal; channel is active cost with no visible return |

**Public performance signals to check:**
- Social: follower count, engagement rate (likes+comments/followers), post frequency
- Website: Similarweb traffic estimate, if available
- Reviews: star rating, review volume, recency, response rate to reviews
- YouTube: subscriber count, view counts, comments
- GitHub: stars, forks, contributors, last commit
- App stores: rating, review volume, last update, download estimate

**Context matters:** A B2B enterprise brand with 3,000 LinkedIn followers but a 12% engagement rate is performing better than a consumer brand with 500,000 followers and 0.1% engagement rate. Score in context.

---

## Friction Type Reference

Use these definitions when classifying friction points in the Auditor and Persona Crawler:

| Friction Type | Definition | Example |
|--------------|-----------|--------|
| **Navigation friction** | Hard to find information or move between channels | No search on documentation site; no link from blog to product |
| **Message friction** | Conflicting messages that create confusion | Homepage says "enterprise-grade," pricing page shows SMB packages only |
| **Proof friction** | Claims without supporting evidence | "Trusted by Fortune 500 companies" with no named companies |
| **Staleness friction** | Outdated content mixed with current, creating uncertainty | Blog has 2024 posts alongside uncorrected 2021 posts with wrong pricing |
| **Channel friction** | Brand is on the wrong channels for its audience | Active TikTok, no LinkedIn, for a B2B product |
| **Persona friction** | Ecosystem designed for one audience, fails for another | Technical documentation absent, sales content abundant — engineer persona abandoned |
| **Commitment friction** | CTA requires too much or too little commitment | "Request a demo" as the only CTA for a persona doing early-stage research |
| **Continuity friction** | Experience doesn't carry through from one touchpoint to the next | Ad promises X, landing page talks about Y |

---

## Workflow Decision Guide

When a user asks for ecosystem analysis, use this to route:

| User says... | Workflow |
|-------------|---------|
| "Audit our ecosystem" / "How are we doing?" | Workflow A: Full baseline audit |
| "Where's the friction in [specific area]?" | Workflow B: Focused gap analysis |
| "Experience this as [persona]" / "Walk through this as [role]" | Workflow C: Persona crawl |
| "How do we compare to [competitor]?" / "What are they doing?" | Workflow D: Competitive positioning |
| "Find the gaps" | Workflow A or B depending on scope |
| "Prepare for a relaunch" | Workflow A + D |
| "Why aren't [audience segment] converting?" | Workflow C for that segment |

Combinations are common. Document which workflows are running so the synthesizer knows what evidence it has.

---

## Industry Channel Expectations

Channels that are expected (and noteworthy if absent) by category:

**B2B Enterprise Software:**
- Expected: LinkedIn (active), Technical documentation, Case studies page, G2/Gartner Peer Insights, Press/News page, YouTube (demos/webinars)
- Often missing but important: Developer community, GitHub (if API-first), Podcast, Partner directory

**B2C Consumer Product:**
- Expected: Instagram (active), TikTok (growing importance), App Store presence, Review presence (Amazon/Google/Trustpilot), Email newsletter
- Often missing but important: YouTube (review/UGC response strategy), Community/Discord

**Professional Services / Consulting:**
- Expected: LinkedIn (thought leadership), Detailed case studies, Speaking/awards presence, Email newsletter
- Often missing but important: Podcast, Partner ecosystem visibility, Press coverage strategy

**Developer Tools / APIs:**
- Expected: GitHub (active), Technical documentation, Developer community (Discord/Slack), Stack Overflow presence
- Often missing but important: YouTube (tutorials), Developer blog separate from marketing blog, Changelog

---

## Competitive Analysis Framework

When mapping competitors for Workflow D:

**For each competitor, map:**
1. Channel inventory (same format as mapper output)
2. Estimated investment level per channel (high/medium/low/absent)
3. Message: What's their core claim in one sentence?
4. Proof: What's the strongest proof point in their ecosystem?
5. Audience: Who are they clearly speaking to?

**Comparison matrix:**

| Channel | [Brand] | [Comp 1] | [Comp 2] | Winner | So What |
|---------|---------|---------|---------|--------|---------|
| LinkedIn | Active, 8K | Active, 45K | Absent | Comp 1 | Significant gap |
| Reviews (G2) | 4.2, 120 reviews | 4.5, 890 reviews | 4.1, 200 reviews | Comp 1 | Social proof deficit |
| Documentation | Strong | Basic | None | Brand | Leverage this |
| Press Coverage | Low | High | Medium | Comp 1 | Earned media gap |

**White space = channels where all competitors are absent or weak.** This is the highest-upside opportunity if the audience actually uses those channels.
