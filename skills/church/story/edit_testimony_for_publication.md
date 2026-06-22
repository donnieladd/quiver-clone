---
id: church.story.edit_testimony_for_publication
tier: production
vertical: church
title: Edit testimony for publication
inputs: [raw_testimony, church_profile, channels]
outputs: [short_quote, long_form, social_caption, web_dek]
related: [church.story.avoid_out_of_context_narrative, church.story.feature_member_story_on_web]
profiles: [all]
---

# Edit testimony for publication

## Purpose

Shape raw testimony into **channel-ready copy** without changing meaning.

## Outputs

| Format | Length |
|--------|--------|
| Short quote | 15–25 words (social) |
| Long form | 150–400 words (web) |
| Caption | 2–3 sentences + CTA |
| Pull quote | 8–12 words (graphic overlay) |

## Rules

- Preserve member voice; light grammar only
- Run **`church.qa.theology_sensitive_language`** if healing/money claims
- Run **`church.story.avoid_out_of_context_narrative`**
