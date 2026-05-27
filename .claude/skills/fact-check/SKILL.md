---
name: fact-check
description: Fact-check a Sequences chapter by extracting claims, running prove/disprove research subagents in parallel, synthesizing verdicts, and inserting talmud-style margin notes directly into the JSX. Use this skill whenever the user asks to fact-check, audit, annotate, or add margin commentary to a chapter, even if they don't explicitly say "fact-check."
---

# Skill: Fact-Check Chapter

You are the coordinator of a fact-checking pipeline for the Sequences. The user names a chapter; you orchestrate the `fc-extract-claims`, `fc-prove-claim`, and `fc-disprove-claim` subagents, synthesize their outputs into LessWrong-style margin notes, and insert those notes directly into the chapter's JSX file.

Your job is *coordination and synthesis*, not research. The subagents do the actual web research. You dispatch them, read their reports, weigh prove against disprove, and produce the final margin notes. The synthesis is where you add value — calibrating verdicts, writing tight commentary, and deciding which claims warrant a note.

**Output is real file modifications.** You're not producing a report; you're writing margin notes into the user's source code. The end state of this skill is: the chapter file has new `<MarginNote>` elements inserted at the right locations, and the rendered Sequence shows them in the margins. Treat that as a real operation — match existing patterns, don't break JSX, get the quote anchors right.

---

## Inputs

The user provides a chapter name:
- `FeelingRational`, `WhyTruth`, `feeling-rational`, "the feeling rational chapter" — anything close enough that `fc-extract-claims` can locate the file.

If the input is genuinely ambiguous or you can't figure out which chapter is meant, ask the user before dispatching anything.

---

## Workflow

Copy this checklist into the todo tool and track your progress:

```
- [ ] Step 1: Extract claims (dispatch fc-extract-claims)
- [ ] Step 2: Process claims in batches of 3-5 (prove + disprove in parallel)
- [ ] Step 3: Synthesize each claim into a verdict and (if warranted) margin note text
- [ ] Step 4: Apply margin notes to the JSX file
- [ ] Step 5: Report summary
```

---

## Step 1: Extract claims

Dispatch the `fc-extract-claims` subagent with the chapter name. Wait for its structured claim list. The agent returns the file path, chapter title, and ordered list of claims with quote + distilled claim + context + attribution + type for each.

If `fc-extract-claims` returns an error (file not found, multiple matches), surface the error to the user and stop. Don't guess.

After receiving the claim list, give the user a quick one-line preview: "Extracted N claims from [chapter]. Starting research." Don't dump the full list — just signal that extraction succeeded and you're proceeding.

---

## Step 2: Process claims in batches of 3-5

Process claims in document order (the order `fc-extract-claims` returned them). For each batch:

1. **Dispatch prove + disprove in parallel.** Send a single message with multiple `Agent` tool calls — one `fc-prove-claim` and one `fc-disprove-claim` per claim in the batch. A batch of 4 claims means 8 concurrent subagent dispatches, all in one message.
2. **Wait for the batch to complete.** Receive all reports.
3. **Don't start the next batch until the current one finishes.** Chrome MCP shares browser state across agents; batching prevents tab contention.

For each subagent, the prompt should include:
- The claim (distilled form)
- The exact quote (for context)
- Surrounding context from extraction
- Attribution

Example dispatch (mentally — actual tool calls go via `Agent`):
```
fc-prove-claim: "Claim: Asch's conformity experiments showed 75% of participants
conformed to the group's wrong answer at least once. Context: [...]. Attribution: Asch 1951."

fc-disprove-claim: [same claim text]
```

Both agents need the same inputs. The asymmetry is in their roles, not their starting information.

### Batch size

Default: 3-5 claims per batch (6-10 concurrent subagents). If the chapter has very few claims (< 6 total), do them all in one batch. If Chrome MCP shows signs of struggle (tab errors, blocked requests), reduce to 2-3.

---

## Step 3: Synthesize verdicts and draft margin notes

For each claim, you now have a prove report (with `Support level: STRONG | MODERATE | WEAK | NONE_FOUND`) and a disprove report (with `Counterevidence level: STRONG | MODERATE | WEAK | NONE_FOUND`). Synthesize them in the main conversation thread — don't delegate this; the cross-claim consistency and judgment is yours.

### Verdict matrix

|              | Counter: NONE | Counter: WEAK | Counter: MOD | Counter: STRONG |
|--------------|---------------|---------------|--------------|-----------------|
| Support: STRONG | CONFIRMED | CONFIRMED (note caveat) | CONTESTED | CONTESTED |
| Support: MOD    | LIKELY_TRUE | LIKELY_TRUE (note caveat) | CONTESTED | LIKELY_FALSE |
| Support: WEAK   | UNDERDETERMINED | UNDERDETERMINED | LIKELY_FALSE | FALSIFIED |
| Support: NONE   | UNDERDETERMINED | LIKELY_FALSE | LIKELY_FALSE | FALSIFIED |

These are heuristics, not rules. Adjust when the evidence quality clearly warrants it — e.g., a single failed registered replication is stronger than the matrix suggests if the original paper has no successful replications.

### Filter: which claims get a margin note

- **Skip ONLY:** `UNDERDETERMINED` claims where neither side found meaningful evidence. There's nothing useful to say.
- **Skip:** trivially-true claims that `fc-extract-claims` shouldn't have included but did (e.g., "humans have brains"). Note this in the summary so we can tune extraction.
- **Keep everything else.** CONFIRMED, LIKELY_TRUE, CONTESTED, LIKELY_FALSE, FALSIFIED — all worth a margin note. The note's *tone* differentiates them; the *presence* of a note signals "we checked this."

### Writing the margin note

The voice you're aiming for is a thoughtful friend leaving a comment on the chapter, not an academic footnote. The existing margin notes in this codebase (Hanson, Wei Dai, Datawitch, etc.) are blog comments — match that register. Aim for 1-3 sentences of flowing prose. No "Yudkowsky says" or "the author claims"; just the commentary, the way an inline annotation reads.

State facts as prose. Embed the verdict in how you describe the substance, rather than declaring it. If a reader can tell from your description whether the claim is right or wrong, you don't need to spell it out with a "Confirmed." or "Half right." opener.

**Gold-standard example (CONTESTED, the phlogiston note from "What's a Bias, Again?"):**

> The theory of phlogiston described the process of burning as the emission of a fire-thing from the burning substance. However, the "alchemical transmutation" is the wrong direction because the theory of phlogiston replaced the alchemical approach during the beginning of the eighteenth century, and Stahl himself was known for his "vigorously attacking alchemy".

What this does well:
- Opens by stating the substance, not a verdict.
- Pivots to the counter-side with a natural "However."
- Light use of quote marks for two specific phrases drawn from sources, not for everything.
- No parenthetical citations, no italicized titles, no em-dashes, no list structure.
- The reader can tell that part of the original framing is wrong without the note labeling it as such.

**LLM tells to avoid:**

- **Em-dashes.** Use periods, "however," or rephrase. Em-dashes scream LLM.
- **Punchy meta-openers.** "Half right.", "This checks out.", "Confirmed:", "Fun one." All read as bot-flavored.
- **Parenthetical academic citations.** "(Champion 1938)" or "(Smith et al., 2017)" — drop these unless the date is doing real work.
- **Dates for their own sake.** Mention a year only when the timing is the point ("predates this essay by 70 years" earns the date; "Smith demonstrated in 2017" does not).
- **Italicized titles.** Yudkowsky's main text italicizes book titles; in the margin notes, plain quote marks or unmarked references are fine. Reserve `<em>` for actual emphasis, and use it almost never.
- **"Specifically," "explicitly," "particularly."** Classic LLM filler.
- **List or stack structures.** Notes are flowing prose, not a fact ladder.
- **Tidy parallel structure.** Real writers vary sentence shapes; resist the urge to balance every clause.

**When inline references help:**

A name embedded in the prose ("Stahl himself was known for vigorously attacking alchemy") gives the reader a handle to follow up without cluttering the sentence. Do that when the source is striking, famous, or central to the point. Don't do it just to look rigorous.

**Patterns by verdict (loose guidance):**

- **CONFIRMED:** Add useful specificity the reader didn't have. If a famous study replicates, describe the replication briefly. If a proverb is real, sketch its actual origin.
- **LIKELY_TRUE:** State the support and let the caveat follow as a natural continuation. "The study itself is solid, though the popular framing inflates the number..."
- **CONTESTED:** State each side as prose with a natural pivot between them. The phlogiston example above is the template.
- **LIKELY_FALSE:** Lead with what the evidence actually shows; let the contrast with the original claim do the work.
- **FALSIFIED:** State directly what's true. Don't moralize about the original claim being wrong.

**Other guidance:**

- **Use the strongest evidence, not the most.** A pre-registered replication is worth ten skeptical blog posts.
- **Don't moralize.** Disagreement backed by evidence is fine; "Yudkowsky should have checked this" is not your tone.
- **Watch for compounding.** If several nearby claims relate to the same study, decide whether they deserve separate notes or one consolidated note. Lean toward separate notes if the quotes are in different paragraphs.

### Draft, don't apply, until all are written

Hold all the proposed margin notes in your head (or in your scratchpad) before moving to Step 4. Don't insert notes one at a time as you draft them — that risks losing track and ending up with a chapter half-annotated if you hit an issue.

---

## Step 4: Apply margin notes to the JSX file

Now you write the changes into the chapter file. Read the chapter file once to understand its current state, then make edits.

### Pre-flight setup

Check the chapter file for:

1. **`import MarginNote from "@/components/MarginNote/MarginNote";`** — if missing, add it to the imports.
2. **`<Chapter title={...} marginNotes>`** — the `marginNotes` boolean prop on the `<Chapter>` element. If missing, add it; otherwise the margin notes won't render even after insertion.

Match the existing patterns from other annotated chapters (e.g., `FeelingRational.jsx`).

### Insertion strategy

For each claim that gets a margin note, in document order:

1. **Locate the enclosing `<p>` element.** The claim's quote field is the visible text. Search the file for a distinctive substring of the quote — typically 30-60 characters that's unlikely to contain `<em>` tags or be ambiguous. The substring is inside some `<p>...</p>`.
2. **Find the closing `</p>` of that paragraph.** That's your insertion point.
3. **Insert the MarginNote after the `</p>`** using `Edit` with enough surrounding context to be unique.

Format the inserted note like:

```jsx
    <MarginNote side="left">
      <p>{note text, with <em>italics</em> for emphasis where appropriate}</p>
    </MarginNote>
```

(Match indentation of the surrounding code. All existing notes use `side="left"`; use that unless the user has indicated otherwise.)

**Do not add an `author=` prop.** The user has chosen no author attribution for AI-generated notes, which visually distinguishes them from the historical Hanson/Dai/Worley margin notes.

### Edit safety

- **Process in document order** so line numbers stay predictable as you work top-down. (String-based `Edit` doesn't strictly need this, but it makes the work easier to follow.)
- **Make the `Edit` anchor unique.** If the closing `</p>` you're targeting could match multiple paragraphs (likely — every paragraph ends with `</p>`), include enough of the preceding sentence to disambiguate.
- **If an `Edit` fails** because the anchor isn't unique or doesn't match, don't retry blindly. Re-read the file, find a better anchor, retry once. If it still fails, skip that claim and note it in the summary — the user can review.
- **Don't delete or move existing `<MarginNote>` elements.** Those are pre-existing commentary (Hanson, Dai, etc.) and shouldn't be touched.

---

## Step 5: Report summary

After all edits complete, write a concise summary to the conversation. Format:

```markdown
## Fact-check complete: {Chapter Title}

**File:** `{path}`
**Claims extracted:** {N}
**Margin notes added:** {M}
**Skipped:** {N-M} ({reason breakdown})

### Verdict breakdown
- CONFIRMED: {count}
- LIKELY_TRUE: {count}
- CONTESTED: {count}
- LIKELY_FALSE: {count}
- FALSIFIED: {count}
- UNDERDETERMINED (skipped): {count}

### Notable findings
{2-5 bullets highlighting the most surprising or important results — falsified famous claims, contested ones with strong counterevidence, etc. Quote the original passage and the margin note you added.}

### Issues
{Anything that didn't go smoothly: Edit failures, claims you re-scoped during synthesis, claims you suspect fc-extract-claims shouldn't have included. Skip this section if there's nothing to report.}
```

This summary is what the user sees and what helps them decide whether to spot-check anything before moving on.

---

## Rules and judgment calls

- **Coordinate, don't research.** Your job is dispatching subagents and synthesizing their outputs. You don't browse the web yourself; the subagents have Chrome MCP for that.
- **Synthesis is yours, not a subagent's.** The cross-claim consistency, the calibrated commentary, the LessWrong voice — that lives in the main conversation thread where you have full visibility.
- **Skip the boring case.** If both prove and disprove came back NONE_FOUND, don't write a margin note. "We searched and found nothing" is not useful commentary.
- **Don't write notes that argue with the author about non-empirical points.** If the agents went hunting and found that Yudkowsky's philosophical position has critics, that's not what this skill is for. Margin notes here are about *empirical claims and citations*, not about whether his reasoning is valid.
- **One pass per chapter.** Don't re-run on a chapter that already has fact-check margin notes — you'd add duplicates. If the user wants to re-fact-check, they should remove existing AI-generated notes first (or you should, after asking).
- **If you're uncertain about applying a particular note, apply it anyway and flag it in the summary.** The user can edit or remove individual notes in the file directly. Better to err toward inclusion and let them prune than to silently drop notes.

---

## Dispatching subagents: practical notes

When calling `Agent` with `subagent_type: "fc-prove-claim"` (or `fc-disprove-claim` or `fc-extract-claims`), the prompt should be self-contained — the subagent has no context from this conversation.

Good extract dispatch:
> "Extract fact-checkable claims from the chapter `FeelingRational` (or similar — the file is in `src/app/.../predictablyWrong/`). Return the structured claim list per your spec."

Good prove dispatch:
> "Claim: Asch's (1951) conformity experiment found that ~75% of participants conformed to the group's wrong answer at least once across 12 critical trials. Context: This appears in a passage arguing that humans are systematically biased toward social conformity. Attribution: Asch 1951. Build the strongest case for this claim via Chrome MCP research, per your spec."

Disprove dispatch is the same prompt, just routed to the other subagent — the asymmetry is built into the agent definitions.

When dispatching a batch of N claims, send a single message with 2N `Agent` tool uses (one prove + one disprove per claim). They run concurrently.
