---
name: performance-report
description: |
  Measurement framework builder and campaign performance interpreter. Takes the theory
  of change from Wave 5, the campaign plan's measurement logic, and live or post-campaign
  data to build a measurement framework or interpret actual results against it.
  Use for "build a measurement framework," "what should we track," "read the results,"
  "did the campaign work," or in Wave 6 when the measurement deliverable is needed.
---

<required_reading>
Read before doing ANY work:
1. `feedback-log.md` — Binding corrections from the user
2. `rules/voice.md` — Voice rules apply to all output
3. `rules/quality-gates.md` — Quality gates apply
4. `references/measurement-thread.md` — Measurement state accumulated across waves
</required_reading>

# /strategy:performance-report

Two modes in one skill: **build a measurement framework** before the campaign runs, or **interpret results** after it does. Both modes are grounded in the same logic: measurement must follow from the theory of change, not from what's easy to pull from a dashboard.

## Philosophy

1. **Measure what matters, not what's measurable.** Every platform produces data. The skill is choosing which data to care about. A metric that doesn't connect to the campaign's objective is noise — including metrics everyone expects to see.
2. **Leading indicators before lagging indicators.** By the time you know whether the campaign achieved its business objective, it's over. Useful measurement identifies early signals that predict whether you're on track.
3. **The theory of change is the measurement framework.** If the strategy says "shift audience perception," the measurement framework measures perception shift. If it says "drive trial," the measurement framework measures trial. The theory of change is the compass.
4. **Context or the numbers are worthless.** 2M impressions means nothing without: what was the expected reach? What was baseline? What did competitors achieve? Numbers without context are vanity.

## Modes

### Mode A: Build a Measurement Framework (pre-campaign)
Use when: the campaign plan is locked and the team needs to know what to measure and how, before the campaign launches.

**Input:** Theory of change (from Wave 5 / `outputs/flow-audit.json` measurementThread), campaign plan, brief.

### Mode B: Interpret Results (post-campaign)
Use when: the campaign has run and the team has data that needs to be interpreted against what was expected.

**Input:** Measurement framework (from Mode A), actual data provided by the user.

---

## Mode A: Build a Measurement Framework

### Step 1: Theory of Change Read

Load the theory of change from `outputs/flow-audit.json` → `measurementThread.theoryOfChange`, or ask the user to state it directly.

The theory of change format:
```
If [brand does X],
Then [audience does or believes Y],
Which leads to [business outcome Z].
```

State back the theory of change and confirm it's correct before building the framework.

### Step 2: Objective Decomposition

Break the campaign objective into measurable components:

```markdown
## Objective Decomposition

**Campaign objective:** [From the brief]
**Theory of change:** [Full statement]

### What has to happen for this theory to be true?

1. **[Audience behavior/belief shift]:** The audience must [specific behavioral or attitudinal change]. This is the core mechanism.

2. **[Brand action]:** The brand must [specific campaign action] at sufficient scale to produce the mechanism.

3. **[Business outcome]:** If 1 and 2 happen, [business outcome] should follow.

### What could cause the theory to fail?

- [Failure mode 1: e.g., "The audience is aware of the brand but the campaign fails to shift consideration"]
- [Failure mode 2: e.g., "The campaign reaches the right audience but the message doesn't land"]
- [Failure mode 3: e.g., "Consideration shifts but conversion is blocked by a non-campaign factor (pricing, availability)"]
```

### Step 3: Metric Selection

For each layer of the objective decomposition, select metrics:

```markdown
## Metric Framework

### Leading Indicators
*(These appear during or immediately after the campaign — they predict whether the lagging indicators will follow.)*

| Metric | What it measures | Source | Baseline | Direction wanted | When to check |
|--------|-----------------|--------|----------|-----------------|--------------|
| [Metric 1] | [What behavior/signal] | [Platform / tool] | [Current state if known] | ↑ / ↓ / = | [In-campaign / Post-launch / Weekly] |
| [Metric 2] | | | | | |
| [Metric 3] | | | | | |

### Lagging Indicators
*(These appear after the campaign — the business outcomes. Longer lag, higher stakes.)*

| Metric | What it measures | Source | Baseline | Direction wanted | When to see results |
|--------|-----------------|--------|----------|-----------------|-------------------|
| [Metric 1] | [Business outcome] | [Source] | [Current] | ↑ / ↓ | [Weeks / Months post-campaign] |
| [Metric 2] | | | | | |

### Diagnostic Metrics
*(These help explain *why* results are what they are — not measures of success themselves.)*

| Metric | What it diagnoses | Source |
|--------|------------------|--------|
| [Metric] | [e.g., "Reach without frequency indicates awareness without depth"] | [Source] |
| [Metric] | | |

### Metrics to Ignore
[Metrics the team will likely track by default that are not meaningful for this campaign's objective — and why. This section prevents dashboard noise from crowding out signal.]

| Metric | Why we're deprioritizing it |
|--------|---------------------------|
| [Metric] | [e.g., "Impressions are a reach proxy — we have a more direct reach measure"] |
```

### Step 4: Benchmarks and Expectations

```markdown
## Benchmarks and Expectations

### What would good look like?
[Directional description of a strong result — not necessarily a number, but a meaningful threshold. "Better than our pre-campaign baseline for brand consideration across our primary audience" is valid if no precise benchmarks exist.]

### What would bad look like?
[Early signals that the campaign is not working and a decision is needed. Be specific about what triggers a reassessment.]

### External context
[Industry benchmarks or comparable campaign results, if available. Source these — don't invent them. If none are available, say so.]
```

### Step 5: Reporting Structure

```markdown
## Reporting Structure

### Weekly check-in (during campaign)
Track: [2–3 leading indicators most sensitive to early performance]
Ask: Is the campaign reaching the right audience at sufficient scale? Is early engagement signaling the message is landing?

### Mid-campaign review
Track: [Full leading indicator set + early diagnostic metrics]
Ask: Is the mechanism working? What's the ratio of reach to engagement to conversion-intent? Are any failure modes appearing?
Decision point: Continue / Adjust message / Adjust channel mix / Escalate

### Post-campaign read
Track: [Full metric set, including lagging indicators]
Ask: Did the theory of change hold? What did we learn about the audience, the channels, and the idea?

### 90-day read (for lagging business metrics)
Track: [Business outcome metrics]
Ask: Did the campaign contribution to business results match expectations? What's the residual effect?
```

---

## Mode B: Interpret Results

### Step 1: Load the Framework

Read the measurement framework from `outputs/measurement-framework.md` (if Mode A was run), or reconstruct it from the brief, theory of change, and campaign plan.

### Step 2: Data Intake

Ask the user to provide the data. Structure it:

```markdown
## Results Intake

**Campaign period:** [Dates]
**Data provided by:** [the user / Agency / Platform exports]

### Actuals vs. Expected

| Metric | Expected (directional) | Actual | Delta | Source |
|--------|----------------------|--------|-------|--------|
| [Leading indicator 1] | | | | |
| [Leading indicator 2] | | | | |
| [Lagging indicator 1] | | | | |

### What's missing
[Metrics in the framework that don't have data yet — and when they'll be available]
```

### Step 3: Theory of Change Assessment

Work back from the data to the theory of change:

```markdown
## Theory of Change Assessment

**The theory:** [Restate the ToC]

**Did [brand do X] at sufficient scale?**
[Evidence from reach/frequency/spend data]
Verdict: YES / PARTIALLY / NO — [Rationale]

**Did [audience do/believe Y]?**
[Evidence from engagement, consideration, perception, intent metrics]
Verdict: YES / PARTIALLY / NO — [Rationale]

**Did [business outcome Z] follow?**
[Evidence from conversion, revenue, retention metrics — acknowledging lag if applicable]
Verdict: YES / PARTIALLY / NO / TOO EARLY — [Rationale]

**Overall theory of change verdict:**
[HELD / PARTIALLY HELD / FAILED / INCONCLUSIVE — with the most important finding in one sentence]
```

### Step 4: What We Learned

```markdown
## What We Learned

### About the audience
[1–3 specific things the campaign data reveals about how the audience behaves, responds, or moves — things we didn't know before or that confirm/challenge hypotheses]

### About the channels
[1–3 specific things about how the channels performed — which delivered and which didn't, what format worked, what interaction model produced results]

### About the idea
[1–2 things the results tell us about the campaign idea itself — did the message land? Where did it resonate? Where did it bounce?]

### What we'd do differently
[2–3 specific changes to channel mix, content format, sequencing, or message — grounded in the data, not intuition]

### What this tells us for the next engagement
[1–2 implications for future campaigns or the brand's strategic positioning — the kind of learning that doesn't expire when this campaign does]
```

### Step 5: Update Measurement Thread

Update `outputs/flow-audit.json` → `measurementThread` with:
- `laggingIndicators`: actual results vs. expected
- Add a `campaignLearning` note with the theory of change verdict

---

## Quality Check

| Check | Pass/Fail |
|-------|-----------|
| Every metric connects to the theory of change | |
| Leading indicators appear before the business result — not as proxies for it | |
| Benchmarks are sourced, not invented | |
| "Metrics to Ignore" section is present and honest | |
| Mode B interpretation states the ToC verdict explicitly | |
| Learnings are specific enough to act on in the next brief | |
| No timeline estimates in the framework | |

## Observation

Log per `rules/observation.md`. Track: which mode was run (A/B), the theory of change verdict (Mode B only), how many metrics were in the framework, which metric was named as the primary signal, and whether the user accepted the framework or redirected on which metrics to prioritize.

## Integration

### Wave 5 → Performance Report
The theory of change from Wave 5 (`measurementThread.theoryOfChange`) is the direct input to Mode A. The performance report is the measurement layer the theory of change enables.

### Campaign Plan → Performance Report
The measurement logic in the campaign plan defines what Mode B tracks. The two documents must be consistent.

### Performance Report → Next Wave
Learnings from Mode B feed into the next engagement's Wave 1 as historical context — especially the "what we learned about the audience" section.
