---
id: church.story.apply_represent_language_filter
tier: production
vertical: church
title: Apply RE-present vision language filter
inputs: [church_profile, draft_copy, asset_type]
outputs: [approved_copy, revision_notes]
related: [church.content.extract_quotable_lines, church.social.write_caption_from_template]
profiles: [church.transformation-church]
---

# Apply RE-present vision language filter

## Purpose

Every Transformation Church touchpoint passes through **vision vocabulary** — notably **RE-present** (represent God to the world), not generic church copy.

## When to use

- Profile: `church.transformation-church`
- Any social caption, quote graphic, thumbnail title, or series tagline before publish

## Decision rules

- Ask: "Does this **RE-present** God / transformation, or only promote an event?"
- Prefer memorable, repeatable phrases over one-off cleverness
- Quote graphics: scripture + application, not punchline-only
- Reject copy that could belong to any church without TC voice

## Steps

1. Load profile `story.vision_phrases`.
2. Score draft 1–5 on vision alignment.
3. If < 4: rewrite using pillar language from profile.
4. Log approved phrase in series glossary for kit consistency.

## QA checks

- [ ] Vision phrase or clear transformation theme present
- [ ] Not ego/personality-only for church account (pastor personal lane exempt)
