---
id: church.social.template_sermon_quote
tier: template
vertical: church
title: "Sermon quote card template"
inputs: [quote_text, series_brand, speaker_name_optional, scripture_optional]
outputs: [1080x1080_png, 1080x1350_png, caption_snippet]
related: [church.content.extract_quotable_lines, church.social.apply_scrim_for_text_on_photo, church.qa.text_legibility_mobile]
---

# Sermon quote card template

## Purpose

Turn an approved sermon quote into **on-brand feed graphics** in two aspect ratios without redesigning layout each week.

## When to use

- Quote passed standalone test and QA (`church.content.extract_quotable_lines`).
- Series brand kit or default church template exists.

## When NOT to use

- Quote > 30 words (trim or use carousel `church.social.template_teaching_carousel`).
- Quote not yet pastor-approved when flagged sensitive.
- Series launch week (use `church.social.template_series_launch` instead).

## Inputs

| Input | Required | Notes |
|-------|----------|-------|
| Quote text | Yes | Use curly quotes in design; straight quotes in caption |
| Series name / art | Yes | Background or color band from series kit |
| Speaker name | Recommended | "— Pastor Name" bottom right |
| Scripture | Optional | Smaller type below quote |
| Photo background | Optional | Requires scrim skill |

## Decision rules

- **Layout locked:** Only change quote, name, scripture, optional photo.
- **Type hierarchy:** Quote largest; attribution 40–50% size; scripture smallest.
- **Max 2 font weights** (`church.social.enforce_two_font_weights_max`).
- **Photo backgrounds:** Always run `church.social.apply_scrim_for_text_on_photo` (40–60% dark scrim typical).
- **Logo:** Church submark or series mark — one only, corner placement per brand guide.

## Steps

1. Duplicate template `Templates/Social/Sermon Quote` (never blank canvas).
2. Paste quote; break lines for rhythm (max 3–4 lines).
3. Set attribution and scripture.
4. If photo swap: replace image only; do not move text boxes.
5. Export `church.social.export_instagram_square` and `church.social.export_instagram_portrait`.
6. Write caption via `church.social.write_caption_from_template`.
7. QA: `church.qa.text_legibility_mobile`, `church.qa.logo_and_color_compliance`.

## Export specs

| File | Size | Color |
|------|------|-------|
| Feed square | 1080×1080 PNG | sRGB |
| Feed portrait | 1080×1350 PNG | sRGB |

Caption snippet template:

```
"[Quote]" — [Speaker], [Series Name]

🎧 Full message: [link]

#[ChurchHashtag] #[SeriesHashtag]
```

## QA checks

- [ ] Readable on phone at arm's length
- [ ] Contrast ≥ 4.5:1 on all text (WCAG AA)
- [ ] Logo from brand kit
- [ ] No typos in scripture reference
- [ ] Safe zone clear of IG crop on portrait

## Examples

Layout anatomy (fixed):

```
┌─────────────────────────┐
│ [series mark]           │
│                         │
│   "Main quote text      │
│    wrapped 2-4 lines"   │
│                         │
│   — Speaker Name        │
│   Book 1:1 (ESV)        │
└─────────────────────────┘
```

## Related skills

- `church.content.extract_quotable_lines`
- `church.social.apply_scrim_for_text_on_photo`
- `church.ops.submit_for_pastoral_review`
