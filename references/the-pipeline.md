# The Strategy Flow

A wave-based engagement model from first conversation to final deliverable.
Replaces the linear pipeline. Waves are sequential. Workstreams within waves are parallel.
Human interaction is embedded at every step — not bolted on at the end.

**Operating model:** `references/flow-framework.md`
**Recursive loops:** `references/recursive-loops.md`
**Measurement thread:** `references/measurement-thread.md`

---

## The Six Waves

```
WAVE 1 — FRAME          Human-led. Articulate the challenge. Define outcomes.
  ↓
WAVE 2 — GATHER         Agent-led. 8 parallel workstreams. Human decides what matters.
  ↓
WAVE 3 — SYNTHESIZE     Collaborative. Per-workstream. Rolling as each completes.
  WITHIN
  ↓
WAVE 4 — SYNTHESIZE     Human-led. Cross-workstream. Insights earn their place.
  ACROSS
  ↓
WAVE 5 — STRATEGY       Human-led decisions at every turn. Agent develops direction.
  DEVELOPMENT
  ↓
WAVE 6 — OUTPUT         Agent drafts. Human authors. Measurement framework required.
```

Each wave has a gate. The next wave does not begin until the gate is passed.
Gates are human decisions — not engine triggers.

Recursive loops can return the flow to an earlier wave at any point.
See `references/recursive-loops.md` for triggers and protocols.

---

## Wave 1 — Frame

**Ownership:** Human-led. The agent sharpens, doesn't author.
**Sequence:** Sequential. Must complete before anything else begins.

### What happens

1. Human articulates what they know and believe about the challenge — in their own words, without scaffolding.
2. Agent reflects back, asks sharpening questions, surfaces tensions or gaps in the framing.
3. Human refines and owns the strategic challenge.
4. **Human defines business outcomes** — what does the business actually need to move? (anchors the measurement thread for the entire engagement — see `references/measurement-thread.md`)
5. Agent drafts engagement scope (which workstreams are needed) → human decides.
6. Agent drafts research plan → human shapes and approves.

### Gate

Wave 2 does not begin until all four are human-approved:
- [ ] Strategic challenge statement
- [ ] Engagement scope (which workstreams are in play)
- [ ] Research plan
- [ ] Business outcomes (at least one measurable outcome defined)

### Interaction points
- Challenge framing: `human-leads-agent-develops`
- Business outcomes: `human-leads-agent-develops`
- Scope decision: `agent-executes-human-engages`
- Research plan: `agent-executes-human-engages`

---

## Wave 2 — Gather

**Ownership:** Agent-led. Execution work. Human brings judgment about what matters.
**Sequence:** Parallel workstreams. Secondary research has a slight head start. Primary research benefits from secondary findings. Hypotheses track sits between the two.

### Workstreams

**Secondary Research**
- Human articulates what they most need to learn and what they already believe (shapes research priorities)
- Agent conducts desk research by theme
- Agent surfaces findings → human decides what matters, what's interesting, what to discard
- Interaction: `agent-executes-human-engages`

**Hypotheses / Provocations** *(sits between secondary and primary — human-led)*
- Human articulates early hypotheses — what they believe to be true based on secondary research
- Human articulates provocations — the uncomfortable or counterintuitive things the research is surfacing
- Agent develops and sharpens each one, adds evidence, challenges weak reasoning
- Human refines until hypotheses feel true and worth testing
- *Optional: trigger External Validation Loop here (client pressure-test before primary research)*
- Confirmed hypotheses shape what primary research needs to prove, disprove, or deepen
- Interaction: `human-leads-agent-develops`

**Primary Research Decision Gate** *(conditional — human decides)*
- Agent surfaces gaps from secondary research — what's still unknown or unverified
- Human decides: is primary research needed and possible?
- If yes: human determines methodology → agent drafts objectives → human shapes
- If no: this track closes. Record as `disabled` in the flow audit.

**Primary Research** *(if gate is open)*
- Agent writes screener and discussion guide grounded in hypotheses → human validates
- Skill: `design:user-research`
- *[Human task: recruit participants — agent can't participate]*
- *[Human task: field / conduct research — agent can't participate]*
- Human uploads transcripts, notes, or raw data → agent processes and codes
- Interaction: `human-inputs-agent-processes`

**Stakeholder Interviews**
- Human defines who matters and why (agent can suggest, human decides)
- Agent writes interview guide → human shapes with institutional knowledge
- *[Human task: conduct interviews — agent can't participate]*
- Human uploads notes or transcripts → agent processes
- Interaction: `human-inputs-agent-processes`

**Owned Audit**
- Human defines what dimensions matter for the audit (agent can suggest)
- Human provides access to internal materials
- Agent audits accessible assets → human adds context agent can't see
- Skill: `brand-voice:discover-brand`
- Interaction: `agent-executes-human-engages`

**Competitive Audit**
- Human defines the competitive set — who matters and why (agent can suggest)
- Human defines what dimensions are worth comparing (agent can suggest)
- Agent researches and audits each competitor → human adds market knowledge and corrects
- Skill: `marketing:competitive-analysis`
- Interaction: `agent-executes-human-engages`

**Ecosystem / Cultural Context**
- Agent maps category players, trends, and macro forces
- Human flags what's actually relevant vs. noise, adds context from lived experience
- Interaction: `agent-executes-human-engages`

**Personas**
- Human articulates who they believe the audience is and what drives them
- Agent drafts persona profiles grounded in research
- Human pressure-tests against real-world knowledge, shapes until accurate
- Skill: `persona-engine:generate-persona`
- Interaction: `agent-executes-human-engages`

**Journeys**
- Human defines scope and which journey moments matter most
- Agent maps current-state journey from research
- Human adds experiential knowledge — the things research doesn't capture
- Human identifies which pain points and moments feel true and important
- Interaction: `agent-executes-human-engages`

### Wave 2 Depth by Size

| Workstream | Small | Medium | Large |
|---|---|---|---|
| Secondary research | 1-2 themes, desk research | 3-4 themes, cited sources | Full 5-track research library with scored findings |
| Primary research | Not conducted unless critical gap | Targeted: 6-8 interviews or focused survey | Full program: screener + discussion guide + coding |
| Stakeholder interviews | 1-2 internal interviews | 3-5 internal + 1-2 client | Full stakeholder map, all key voices |
| Personas | 1-2 personas from secondary research | 2-3 personas, research-grounded | 4-6 personas, primary + secondary research |
| Competitive audit | 3-4 competitors, 2-3 dimensions | 6-8 competitors, 4-5 dimensions | 10-15 competitors, full matrix |

---

## Wave 3 — Synthesize Within Workstreams

**Ownership:** Collaborative. Agent structures; human does the sense-making.
**Sequence:** Parallel and rolling — each workstream synthesizes as it completes. Doesn't wait for all workstreams to finish.

### What happens

For each workstream:
1. Agent organizes raw material into themes and patterns — no judgment yet, just structure
2. Human engages with material and calls out what's interesting, surprising, or important
3. Agent develops and articulates what the human is seeing
4. Human decides what the synthesis actually says — agent drafts, human authors

Skills: `design:research-synthesis` (research workstreams), `marketing:competitive-brief` (competitive), `persona-engine:persona-audit` (personas)

### Interaction
`agent-executes-human-engages` → shifts to `human-leads-agent-develops` as synthesis deepens

### Loop watch
Human notices a gap during synthesis → surfaces Gather Gap Loop → returns to Wave 2 targeted workstream.

---

## Wave 4 — Synthesize Across Workstreams

**Ownership:** Human-led. The agent develops what the human surfaces.
**Sequence:** Sequential. Requires all within-workstream syntheses complete.

### What happens

1. Agent presents organized material across all workstreams — patterns, tensions, contradictions
2. Human spends time with the material and surfaces what they find genuinely interesting or surprising
3. Human articulates early insight candidates **in their own words**
4. Agent develops and sharpens each candidate — challenges, adds evidence, pushes further
5. **Insight sharpening:** agent refuses to let weak or generic insights pass. Pushes until each one is true, motivating, and actionable. (See brief-co-authoring methodology)
6. **Path-to-result check:** human checks each insight against the business outcomes from Wave 1 — does this have a path to a result? Insights without a path drop in priority. (See `references/measurement-thread.md`)
7. Human decides which insights are worth pursuing
8. Human sets the priority order
9. Agent structures the final insight set

Skills: `brief-co-authoring` (insight pressure-testing), `strategy-assessment` (quality check), `persona-engine:persona-chat` (testing insights against a persona)

### Interaction
`human-leads-agent-develops` throughout

### Loop watch
Cross-synthesis reveals a missing piece or reframes the actual question → surfaces Reframe Loop → human decides how far back to go.

---

## Wave 5 — Strategy Development

**Ownership:** Human-led decisions at every turn. Agent develops, human authors.
**Sequence:** Sequential. Each step feeds the next.

### Steps

**Strategic question**
- Human articulates what they believe the strategic question actually is (informed by insights)
- Agent helps sharpen the question, surfaces implications and tensions
- Human makes the call on which question to answer
- Interaction: `human-leads-agent-develops`

**Direction**
- Agent surfaces strategic possibilities and their implications — not options to pick from, but material for human thinking
- Human explores possibilities, riffs, builds on what's interesting
- Human decides direction
- Interaction: `agent-executes-human-engages` → `human-leads-agent-develops`

**Organizing idea**
- Human articulates the organizing idea in rough form
- Agent develops and refines — sharpens language, tests logic, pushes further
- Human approves when it feels true and interesting
- Skill: `brief-co-authoring`
- Interaction: `human-leads-agent-develops`

**Messaging and value proposition**
- Agent drafts messaging hierarchy and value proposition based on human-set direction
- Human shapes until it reflects their taste and judgment
- Skills: `persona-engine:persona-messaging`, `persona-engine:persona-to-brief`
- Interaction: `agent-executes-human-engages`

**Theory of change / measurement design**
- Human articulates: if we do this, what should move and why?
- Agent helps make the theory explicit and testable
- Human defines leading and lagging indicators
- This becomes the skeleton of the Wave 6 measurement framework
- See `references/measurement-thread.md` for the full protocol
- Interaction: `human-leads-agent-develops`

Skills: `strategy-assessment` (quality check), `persona-engine:persona-chat` (testing strategy against a persona)

### Loop watch
Direction-setting reveals the original brief was wrong → surfaces Challenge Reframe Loop → human decides whether to loop back to Wave 1.

---

## Wave 6 — Output

**Ownership:** Agent drafts, human authors.
**Sequence:** Sequential. Not all deliverables are required for every engagement.

### Deliverables

**Strategic Brief** *(always required)*
- Agent drafts brief grounded in insights and strategic direction
- Human shapes language, order, emphasis — especially anything requiring taste or judgment
- Three-layer quality gate must pass before locking: Strategic Integrity (35/50), Voice Quality (35/50), Polish if client-facing (35/50)
- Skill: `brief-co-authoring`
- See: Brief Structure and Scoring Rubric below

**Strategy Narrative** *(for brand strategy engagements)*
- Once brief is approved, agent transforms it into a narrative that moves people
- Human shapes voice, arc, and emphasis
- Skill: `strategy-narrative`

**Measurement Framework** *(always required)*
- Agent drafts from the theory of change developed in Wave 5 — it should mostly write itself
- Includes: what we're tracking, how we'll know it's working, business results we're accountable for, what we're NOT measuring
- Human validates that it reflects what was actually agreed
- Skill: `marketing:performance-report`
- See `references/measurement-thread.md` for the schema

**Campaign Plan** *(if output is a campaign, not a brand strategy)*
- Skill: `marketing:campaign-planning`

Human signs off on all deliverables before the engagement closes.

---

## Skills Routing by Wave

```
WAVE    SKILL                               WHEN TRIGGERED
─────────────────────────────────────────────────────────────────────
1       (no dedicated skills)               Human-led framing, agent sharpens
2       design:user-research                Primary research — screener + discussion guide
2       marketing:competitive-analysis      Competitive audit
2       brand-voice:discover-brand          Owned audit
2       persona-engine:generate-persona     Persona development
2       (no skill for secondary research)   Agent conducts desk research directly
3       design:research-synthesis           Research workstream synthesis
3       marketing:competitive-brief         Competitive synthesis
3       persona-engine:persona-audit        Persona pressure-testing
4       brief-co-authoring                  Insight sharpening
4       strategy-assessment                 Insight set quality check
4       persona-engine:persona-chat         Testing insights against a persona
5       brief-co-authoring                  Organizing idea development
5       persona-engine:persona-messaging    Messaging hierarchy
5       persona-engine:persona-to-brief     Feeding persona insight into strategy
5       strategy-assessment                 Strategy quality check
5       persona-engine:persona-chat         Testing strategy against a persona
6       brief-co-authoring                  Brief development
6       strategy-narrative                  Narrative from approved brief
6       marketing:performance-report        Measurement framework
6       marketing:campaign-planning         If output is a campaign
```

**Quality amplifiers** (available at any wave, not wave-specific):
- `strategy:pressure-test` — fast adversarial critique, run before locking anything major
- `strategy:courtroom` — 10-agent debate, for high-stakes decisions at Wave 4/5
- `strategy:narrative-review` — score narrative before stakeholders see it
- `strategy:distill` — compress copy at Wave 6

---

## Depth Dial: S / M / L

Every wave happens at every size. The depth changes. The sequence does not.

| Wave | Small | Medium | Large |
|---|---|---|---|
| **1: Frame** | 30 min. One-page challenge statement + business outcomes. | 1-2 hrs. Adds stakeholder map, known constraints. | 2-3 hrs. Full RFP analysis, political landscape, approval gates. |
| **2: Gather** | 1-3 workstreams active. Focused secondary + personas. | 5-6 workstreams active. Secondary + competitive + personas + owned. | All 8 workstreams. Primary research conducted. Full competitive matrix. |
| **3: Synthesize Within** | 1-2 workstream syntheses. Tight. | Per-workstream synthesis docs for each active track. | Full synthesis per track. `/design:research-synthesis` on primary data. |
| **4: Synthesize Across** | 1-2 key insights, prioritized. | 3-5 insights with evidence and path-to-result check. | Full insight set pressure-tested with `/strategy:courtroom`. |
| **5: Strategy Development** | Strategic question + organizing idea. No full messaging hierarchy. | Strategic question + direction + organizing idea + messaging. | Full development. All steps. Theory of change explicit and testable. |
| **6: Output** | Brief + measurement framework. No narrative unless client-facing. | Brief + narrative + measurement framework. | All deliverables. Client presentation package. |

**The brief does not scale with project size.** The research scales. The brief stays tight: 2-4 pages at every size.

---

## Practical Examples

### Small: Solo strategist, repositioning work for a mid-size brand

```
Wave 1: 30-min conversation. Strategic challenge defined. 2 business outcomes set.
Wave 2: Secondary research (2 themes) + competitive audit (4 competitors) + 2 personas.
         No primary research — not worth the time at this scale.
Wave 3: Synthesis per workstream. Rolling.
Wave 4: 2-3 insights surfaced. Path-to-result check. 1 insight dropped (no path).
Wave 5: Strategic question + organizing idea. Messaging in outline form.
         Theory of change in 2 sentences.
Wave 6: Brief (2 pages). Measurement framework (1 page).
```

### Medium: Agency team, GTM strategy for a Series B startup

```
Wave 1: 1-hr kickoff. Strategic challenge. Stakeholder map. 3 business outcomes.
Wave 2: 5 workstreams: secondary research, hypotheses, competitive audit, personas, ecosystem.
         Primary research gate: stakeholder interviews only (6 internal + 2 customer interviews).
Wave 3: Per-workstream synthesis. Personas pressure-tested with persona-audit.
Wave 4: 4 insights. Cross-synthesis reveals a reframe → Reframe Loop back to Wave 3.
         Re-synthesize through new lens. 3 final insights with path-to-result.
Wave 5: Full development. Organizing idea tested via persona-chat.
         Theory of change: explicit mechanism, 2 leading + 2 lagging indicators.
Wave 6: Brief + narrative (client-facing) + measurement framework.
```

### Large: Full engagement, enterprise brand strategy

```
Wave 1: 1-2 hrs. Full RFP analysis. 4 business outcomes with timeframes.
Wave 2: All 8 workstreams. Primary research program (15 interviews + survey).
         External Validation Loop triggered after hypotheses (client session to pressure-test).
Wave 3: Full per-workstream synthesis. Research synthesis via design:research-synthesis.
         Competitive brief via marketing:competitive-brief.
Wave 4: 6 insight candidates. Courtroom run on leading 2.
         Path-to-result check drops 2 insights.
         External Validation Loop triggered again (client sense-check before Wave 5).
Wave 5: Full strategy development. Brief-co-authoring on organizing idea.
         Theory of change: full mechanism with 4 indicators.
Wave 6: Brief + narrative + measurement framework + campaign plan.
         Narrative review before client presentation.
```

---

## The Strategic Brief: Template + Quality Gate

The brief is the load-bearing document. Everything before it makes it sharper.
Everything after it derives from it. **It does not get longer at Large.**

### Brief Structure

```markdown
# [Project Name] Strategic Brief

## The Rallying Cry
[2-5 words. The thing the entire strategy collapses to.]

## The Problem
[Named user. Named behavior. Named cost. Data from research.
Not "users struggle with X." Who specifically? What specifically? What does it cost them?]

## The Audience
[Behavior-based, not demographic. What they do, not who they are.
"25% of men under 30 already bet online" not "males 18-34."
What they believe. What they'll pay for. What they reject.]

## The Proposition
[What we're doing and why it wins. One paragraph. Three sentences max.
Sentence 1: What it is. Sentence 2: Why it's different. Sentence 3: Why now.]

## Success Metrics
[3-5 measurable outcomes. Numbers, not vibes.
Each metric has a timeframe and a target.
"1,000 active users within 90 days" not "strong user adoption."]

## Constraints
[What we're working within. Budget. Timeline. Legal. Org politics.
If relevant, what's already been tried and failed.]

## What We're NOT Doing
[The most important section after the rallying cry.
Name what the client expects but we're cutting.
Name what the team might assume. Kill it here.]

## Handoff (product briefs only)
<!-- Arc:vision reads this section to generate docs/vision.md -->
purpose: [One sentence]
audience: [Behavior-based]
goals:
  - [Goal 1 (measurable)]
  - [Goal 2 (measurable)]
success: [Quantitative success criteria]
non_goals:
  - [Explicit exclusion 1]
principles:
  - [Decision-making heuristic 1]
```

### The Rallying Cry

Every brief has a core statement at its center. 2-5 words. The thing the strategy
collapses to when someone asks "what are we doing?" in a hallway.

**What good looks like:**
- GamePass: "More gaming" — chose breadth over depth. Two words. Makes a choice.
- Streaming redesign: "Watch, don't browse" — chose content surfacing over catalog.
- Financial dashboard: "Your money, visible" — chose transparency over features.

**Test it:**
- Can someone repeat it after hearing it once?
- Does it make a choice a competitor wouldn't make?
- Can a designer gut-check a layout against it?
- Can a developer resolve an edge case against it?

### Brief Quality Gate — Three Layers

All three layers must pass before the brief is locked. Revise internally before presenting.

---

#### Layer 1: Strategic Integrity (/50)

| Dimension | 10 | 7 | 4 | 1 |
|---|---|---|---|---|
| **Rallying Cry** | Memorable, makes a choice, competitor can't claim it. | Clear and directional but could be sharper. | Generic. Any brand in the category could use it. | Missing, or a full sentence disguised as a rallying cry. |
| **Problem Specificity** | Named user, named behavior, named cost. Data from research. You feel the pain. | Real problem but could be more concrete. | Described at category level, not user level. | Vague or missing. |
| **Proposition Clarity** | One paragraph, three sentences max. Smart outsider gets it on first read. Different from competitors. | Clear but takes two reads. Or clear but not differentiated. | Requires context to understand. | Jargon-laden, circular, or tries to be everything. |
| **Exclusions Quality** | Names things the client expects but we're cutting. Controversial ones included. | Has exclusions but they're safe picks. | Generic exclusions. | Missing or pro-forma. |
| **Durability** | A new team member in six months knows exactly what to build and what not to. | Mostly durable but assumes some kickoff context. | Would need a walkthrough to understand. | Time-bound. Won't make sense in a month. |

**Threshold: 35/50. Below this, the brief is not locked.**

Calibration:
- "No one combines all four verticals. Betr tried. It's struggling." = 10/10 Problem Specificity.
- "We need to create a best-in-class digital experience" = 1/10 Proposition Clarity.
- "More gaming" = 10/10 Rallying Cry.

---

#### Layer 2: Voice Quality (/50)

| Dimension | Question |
|---|---|
| Directness | Statements or announcements? |
| Rhythm | Varied or metronomic? |
| Trust | Respects reader intelligence? |
| Authenticity | Sounds human? |
| Density | Anything cuttable? |

**Threshold: 35/50.**

Quick checks: adverbs killed, passive voice found, throat-clearing cut, em dashes removed,
vague declaratives replaced with specific things, inanimate objects not doing human verbs.

---

#### Layer 3: Polish (/50) — client-facing briefs only

| Dimension | Question |
|---|---|
| Accessibility | Could a smart non-expert follow this? |
| Jargon | Any undefined terms surviving? |
| Sentence load | Any sentence carrying more than one idea? |
| Evidence | Every claim backed by a number, name, or example? |
| Order | Arranged for the reader's logic, not the writer's? |

**Threshold: 35/50.**

---

```
BRIEF QUALITY GATE
─────────────────────────────────────────
Layer 1: Strategic Integrity    ___/50
Layer 2: Voice Quality          ___/50
Layer 3: Polish (client only)   ___/50
─────────────────────────────────────────
All layers must hit 35/50 to lock.
Layer 3 applies to client-facing versions only.

RALLYING CRY CHECK (pass/fail):
[ ] 2-5 words
[ ] Makes a choice a competitor wouldn't make
[ ] Designer can gut-check a layout against it
[ ] Developer can resolve an edge case against it
[ ] Someone not in the room can repeat it after hearing it once
```

---

## Research Dossier Scoring (Wave 2 output quality gate)

The dossier is an evidence document, not a strategy document. Scored differently.
Calibrated against the Punt Research Dossier.

| Dimension | 10 | 7 | 4 | 1 |
|---|---|---|---|---|
| **Headlines as arguments** | Every section headline IS the claim. "No one combines all four verticals. Betr tried. It's struggling." | Most headlines are claims, some are labels. | Headlines are section labels. Arguments buried in body. | Generic headers ("Market Overview"). |
| **Data density** | Every claim has a number, a name, or a date. Sources cited. | Most claims sourced. Some assertions unsupported. | Some data, lots of assertions. | Opinion dressed as research. |
| **Assumption/Reality framing** | Key misconceptions corrected with data. "The Assumption: X. The Reality: Y." | Some assumptions challenged. | Research confirms what everyone already believes. | No original perspective. |
| **Competitive specificity** | Named competitors, named their weakness, named the opening. One line per competitor. | Competitors named, surface-level analysis. | "Competitive landscape" section with logos and no analysis. | Missing or generic. |
| **Tension extraction** | 2-3 real tradeoffs the strategy must resolve. Each forces a choice. | Tensions identified but framed as problems, not choices. | Observations, not tensions. | No tensions. Just a market summary. |

**Threshold: 35/50. Below this, Wave 2 output isn't ready to feed Wave 3.**

---

*v2. Rewritten as wave-based flow. April 2026.*
