# Strategy Engine

A strategy engine for the full range of strategic work: brand positioning, creative briefs, product vision, GTM narratives, adversarial pressure testing, and multi-agent debate. Built to self-improve over time.

## Structure

```
strategy-engine/
├── .claude-plugin/
│   └── plugin.json          # Plugin metadata
├── commands/                 # Slash command routers
├── skills/                   # Each skill = one /strategy:* command
│   ├── using-strategy/       # Bootstrap control plane
│   ├── go/                   # Entry point: routes to right mode
│   ├── narrative/            # Strategy docs → slide-ready copy
│   ├── brief/                # Creative briefs
│   ├── product/              # Product specs, vision docs
│   ├── pressure-test/        # Single-agent adversarial critique
│   ├── courtroom/            # Multi-agent debate engine
│   ├── distill/              # Compress copy without losing meaning
│   ├── insight-distill/      # Research → insights, tensions, hypotheses
│   ├── narrative-review/     # Score narrative against brief before stakeholders
│   ├── research/             # Deep desk research with verified sources
│   ├── ecosystems/           # Ecosystem map, audit, gap analysis, persona crawl
│   ├── init/                 # Initialize a new strategy project
│   ├── wave-1-frame/         # Wave 1: Frame the challenge + business outcomes
│   ├── wave-2-gather/        # Wave 2: 8 parallel workstreams
│   ├── wave-3-synthesize-within/ # Wave 3: Per-workstream synthesis
│   ├── wave-4-synthesize-across/ # Wave 4: Cross-workstream synthesis + insights
│   ├── wave-5-strategy/      # Wave 5: Strategy development
│   ├── wave-6-output/        # Wave 6: Brief + measurement framework + narrative
│   ├── brief-co-authoring/   # Socratic brief development (thinking-first)
│   ├── strategy-narrative/   # Transform strategy into compelling narrative
│   ├── strategy-assessment/  # Senior coach review of strategy documents
│   ├── competitive-brief/    # Competitive synthesis → strategic competitive brief
│   ├── brand-voice/          # Brand voice discovery from owned content audit
│   ├── campaign-planning/    # Campaign architecture, channel logic, content system
│   └── performance-report/   # Measurement framework builder + results interpreter
├── agents/
│   ├── courtroom/            # Courtroom debate panel agents
│   ├── distill/              # Research distillation agents
│   ├── review/               # Narrative review agents
│   ├── research/             # Research panel agents (academic, quantitative, cultural)
│   └── ecosystems/           # Mapper, Auditor, Persona Crawler, Synthesizer
├── rules/                    # Apply to ALL output across all modes
│   ├── voice.md              # Voice DNA + Stop-Slop enforcement
│   ├── quality-gates.md      # Scoring, anti-patterns, mandatory checks
│   ├── process.md            # Phase sequencing, approval gates
│   └── observation.md        # Structured logging after every run
├── references/               # Shared strategic knowledge
│   ├── narrative-engines.md  # Reusable narrative structures
│   ├── slide-conventions.md  # Layout types, eyebrow labels
│   ├── anti-patterns.md      # Hard failure patterns
│   ├── quality-system.md     # Scoring rubric + quick checks
│   ├── the-pipeline.md       # Wave-based flow (6 waves, depth dials, scoring rubrics)
│   ├── flow-framework.md     # Ownership model, interaction modes, audit schema
│   ├── recursive-loops.md    # 5 loops with triggers and protocols
│   └── measurement-thread.md # Measurement state across waves
├── logs/
│   └── execution-log.md      # Structured observation history
├── feedback-log.md           # the user's manual corrections (BINDING)
├── CLAUDE.md                 # This file
└── LICENSE
```

## Command Workflow

All commands use the `/strategy:` namespace prefix.

```
0. BOOTSTRAP   /strategy:using-strategy  → Control plane (auto-loaded)
1. ENTRY       /strategy:go              → Routes to right mode
2. NARRATIVE   /strategy:narrative       → Strategy docs → slide copy
3. BRIEF       /strategy:brief           → Creative briefs
4. PRODUCT     /strategy:product         → Product specs, vision docs
5. TEST        /strategy:pressure-test   → Single-agent adversarial critique
6. DEBATE      /strategy:courtroom       → Multi-agent debate engine
7. DISTILL     /strategy:distill          → Compress copy, merge slides, tighten
8. INSIGHT     /strategy:insight-distill  → Research → insights, tensions, way in
9. REVIEW      /strategy:narrative-review → Score narrative before stakeholders
10. RESEARCH   /strategy:research              → Deep desk research, verified sources
11. ECOSYSTEMS /strategy:ecosystems            → Map, audit, gap analysis, persona crawl
12. INIT       /strategy:init                 → Initialize new strategy project
13. WAVE FLOW  /strategy:wave-frame           → Wave 1: Frame
               /strategy:wave-gather          → Wave 2: Gather
               /strategy:wave-synthesize-within → Wave 3: Synthesize Within
               /strategy:wave-synthesize-across → Wave 4: Synthesize Across
               /strategy:wave-strategy        → Wave 5: Strategy Development
               /strategy:wave-output          → Wave 6: Output
14. BRIEF      /strategy:brief-co-authoring  → Socratic brief development
15. NARRATIVE  /strategy:strategy-narrative  → Transform strategy into narrative
16. ASSESS     /strategy:strategy-assessment → Coach review of strategy docs
17. COMPETITIVE /strategy:competitive-brief  → Competitive analysis → strategic brief
18. VOICE      /strategy:brand-voice        → Brand voice discovery from owned content
19. CAMPAIGN   /strategy:campaign-planning  → Campaign architecture + channel logic
20. MEASURE    /strategy:performance-report → Measurement framework + results read
```

## Key Principles

- **Lead agent orchestrates, the user decides.** The engine routes, delegates, and quality-checks. the user approves architectures, picks concepts, and gives final sign-off.
- **Quality gates are mandatory, not decorative.** Voice DNA + Stop-Slop run line-by-line on every piece of prose before it reaches the user. The Phase 4 quality gate scores everything. Below 35/50 gets revised internally.
- **Feedback log outranks everything.** the user's manual corrections are binding. They override automated improvements, default rules, and the engine's own judgment.
- **Observation compounds.** Every run logs structured data. Over time, the system learns which modes underperform and where.
- **Strategy makes choices.** If output could be endorsed by every brand in the category, it fails. Name what you're choosing NOT to do.
