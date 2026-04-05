# Recursive Loops

The strategy flow is not strictly linear. Loops return to earlier waves when the work demands it.
Every loop is a human decision — the agent surfaces the trigger, the human decides whether to go back.

There are two loop types: **internal** (discovery inside the work) and **external** (client input from outside).

---

## Internal Loops

### 1. Gather Gap Loop

**Trigger:** Wave 3 synthesis reveals missing data — something that can't be synthesized because it wasn't gathered.

**Who decides:** Human. The agent surfaces the gap and its implications; the human decides whether the gap is worth going back for.

**Questions the human is answering:**
- Is this gap significant enough to change the synthesis?
- Is it worth the time to fill it?
- Is there a workstream that can produce this, or does it require new primary research?

**What happens:**
- Human approves the loop
- Specific workstream(s) in Wave 2 reopen for targeted gather
- Agent returns with new material
- Synthesis for the affected workstream reruns

**Agent's job at trigger:** Name the specific gap. State what's missing and why it matters — not just "we need more data." Name the workstream most likely to fill it. Estimate the cost of going back vs. proceeding without it.

**Record in audit:** `type: "gather-gap"`, `fromWave: 3`, `toWave: 2`

---

### 2. Reframe Loop

**Trigger:** Wave 4 cross-synthesis changes the actual question being answered. The original framing from Wave 1 no longer fits what the research is showing.

**Who decides:** Human. The agent names the reframe and its implications; the human decides how far back to go.

**Questions the human is answering:**
- Is the new question actually better, or just different?
- Do we go back to Wave 2 (gather under the new frame) or just Wave 3 (re-synthesize what we have)?
- Do we need to reopen Wave 1 entirely?

**What happens:**
- Option A: Return to Wave 2 — reopen workstreams to gather under the new framing
- Option B: Return to Wave 3 — re-synthesize existing material through the new lens
- Agent restarts from the chosen point

**Agent's job at trigger:** Make the reframe concrete. State the original question and the new one. Name the specific finding that forced the reframe. Don't hedge — if the research is pointing somewhere, say so clearly.

**Record in audit:** `type: "reframe"`, `fromWave: 4`, `toWave: 2 or 3`

---

### 3. Challenge Reframe Loop

**Trigger:** Wave 5 strategy development reveals the original brief (from Wave 1) was wrong. The strategic question the team set out to answer isn't the right one.

**Who decides:** Human. This is the most disruptive loop — it means returning to the beginning.

**Questions the human is answering:**
- Is the original brief wrong, or just incomplete?
- Can we amend it (partial loop) or does the whole framing need to reset?
- What specifically was wrong — the business outcomes, the scope, the audience, the competitive framing?

**What happens:**
- Human decides the scope of the reset
- Wave 1 reopens for revised framing and business outcome definition
- Some or all of Waves 2-4 may need to rerun

**Agent's job at trigger:** State the contradiction precisely. "The original brief assumed X. The strategy development work shows Y. These are incompatible." Don't soften it. The human needs to understand what's actually broken before deciding how far back to go.

**Record in audit:** `type: "challenge-reframe"`, `fromWave: 5`, `toWave: 1`

---

### 4. Hypothesis Loop

**Trigger:** Primary research (Wave 2) disproves or significantly complicates a hypothesis that was formed before fieldwork.

**Who decides:** Human. The agent surfaces what changed and why; the human decides whether to revise hypotheses before continuing.

**Questions the human is answering:**
- Is this hypothesis dead, revised, or just complicated?
- Do the revised hypotheses change what the primary research needs to probe?
- Does this change which workstreams are still open in Wave 2?

**What happens:**
- Hypotheses are revised in the Hypotheses / Provocations section of Wave 2
- If the revised hypotheses require different primary research, the discussion guide gets updated
- Primary research fieldwork may need to extend or reopen

**Agent's job at trigger:** Quote the hypothesis and the finding that challenged it. State clearly whether it's disproved (abandon), complicated (revise), or confirmed with nuance (deepen). Propose a revised hypothesis and ask the human to shape it.

**Record in audit:** `type: "hypothesis"`, `fromWave: 2` (primary research), `toWave: 2` (hypotheses)

---

## External Validation Loop

A separate loop type. Unlike internal loops, this brings in business reality and political context that can't come from research alone. The client or key stakeholder is brought in to pressure-test the team's thinking.

**When it can be triggered (human decides):**
- After hypotheses / provocations are formed (Wave 2) — to shape what primary research tests
- After cross-synthesis (Wave 4) — to sense-check strategic direction before development begins

**What happens:**
1. Human prepares a provocation or synthesis for the client — framed to generate reaction, not seek approval
2. **[Human task: client session]** — agent can't participate in this step
3. Human inputs what the client confirmed, challenged, revealed, or reframed
4. Agent helps process what changed and what it means for the work
5. Human decides: adjust hypotheses, reopen a workstream, or proceed

**Why this loop is different:**
The client reveals what's politically possible, what's already been tried, what the business actually needs vs. what the brief says. This can redirect the entire engagement — or sharpen it significantly. It's not a quality check. It's a reality check.

**Agent's job at trigger:** Help the human prepare the provocation. Make it sharp enough to generate real reaction — not a summary deck, not a status report. After the session, help the human process what the client revealed: what was surprising, what was confirming, what was redirecting.

**Record in audit:** `type: "external-validation"`, `fromWave: 2 or 4`, `toWave: 2 or 4`

---

## Loop Trigger Signals

The agent should watch for these signals and surface the relevant loop:

| Signal | Loop type |
|--------|-----------|
| "We don't have data on X" / "I wish we'd asked about Y" | Gather gap |
| "Actually the real question is..." / "This changes what we're trying to solve" | Reframe |
| "The brief might have been wrong about..." / "We're solving the wrong problem" | Challenge reframe |
| "This contradicts what we believed about..." / "The research is saying the opposite" | Hypothesis |
| "We should bring this to the client before we go further" | External validation |

Surface the loop. Don't assume the human noticed it. Name it clearly:
> "I want to flag a potential [loop type]. [What I'm seeing]. Do you want to [specific action] before continuing?"
