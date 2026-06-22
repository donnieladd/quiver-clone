---
id: church.content.extract_quotable_lines
tier: production
vertical: church
title: "Extract quotable lines from sermon transcript"
inputs: [sermon_transcript, speaker_name, scripture_reference]
outputs: [quote_candidates_md, selected_quotes_for_graphics]
related: [church.content.receive_sermon_transcript, church.social.template_sermon_quote, church.qa.theology_sensitive_language]
---

# Extract quotable lines from sermon transcript

## Purpose

Find **5–10 standalone lines** from a sermon that work on social graphics without surrounding context — the core of the sermon-to-social workflow.

## When to use

- Transcript or outline exists after Sunday (or preview before Sunday for launch).
- You are running `workflows/sermon-to-social.md` Phase 1.

## When NOT to use

- Before rough transcript exists (use `church.content.receive_sermon_transcript` first).
- For full clip selection (use `church.content.extract_sermon_clips` with timestamps).

## Inputs

- Full sermon transcript (text file or VTT)
- Speaker name and title (for attribution)
- Primary scripture reference
- Optional: teaching pastor notes on "main idea"

## Decision rules

- **Length:** Target **8–25 words** per quote; hard max **30 words** for Instagram.
- **Standalone test:** A visitor must understand the line without hearing the sermon (may lack nuance but must not misrepresent).
- **Theology:** Flag lines about healing, money, politics, or other churches for `church.qa.theology_sensitive_language`.
- **Avoid:** Inside jokes, "as I said earlier," pronouns without antecedent ("this is why…").
- **Prefer:** Imperatives, vivid metaphors, gospel-centered declarations, application lines.
- **Scripture:** If quoting Bible, use version church standard (ESV/NIV/etc.) and include reference on graphic.

## Steps

1. Read transcript once for **big idea** (one sentence).
2. Highlight sentences that pass standalone test.
3. Merge or trim adjacent sentences to hit word count.
4. Rank quotes: gospel clarity > application > illustration punch.
5. Select top 5 for graphics; keep 3 alternates.
6. Send doctrinally sensitive lines to pastoral review before design.
7. Pass selected lines to `church.social.template.sermon_quote` with attribution string.

## Export specs

Output markdown table:

| # | Quote | Words | Graphic? | Review? |
|---|-------|-------|----------|---------|
| 1 | "…" | 14 | Yes | No |

## QA checks

- [ ] Each quote ≤ 30 words
- [ ] Scripture refs verified against chosen Bible version
- [ ] No misrepresentation when read alone
- [ ] Pastor approved flagged lines
- [ ] Speaker attribution spelling verified

## Examples

**Strong:** "Grace isn't a backup plan — it's the whole story." (11 words)

**Weak:** "That's what I mean when I talk about the third point." (fails standalone)

## Related skills

- `church.content.identify_teaching_points` — for carousels, not quote cards
- `church.social.template.sermon_quote` — production
- `church.qa.theology_sensitive_language` — gate before publish
