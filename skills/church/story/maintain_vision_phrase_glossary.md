---
id: church.story.maintain_vision_phrase_glossary
tier: foundation
vertical: church
title: Maintain vision phrase glossary
inputs: [church_profile, new_copy_draft]
outputs: [glossary_entry_or_match, copy_corrections]
related: [church.story.apply_represent_language_filter, church.brand.maintain_brand_glossary]
profiles: [church.transformation-church, church.faith-chapel]
---

# Maintain vision phrase glossary

## Purpose

Keep **vision language consistent** — TC RE-present, Faith Chapel movement phrases — across all story copy.

## TC required terms

| Use | Avoid |
|-----|-------|
| RE-present | represent (lowercase generic) |
| Presence | presence (when meaning divine) |
| Community story | member spotlight (generic) |

## Steps

1. Load profile `story.vision_phrases` or playbook glossary.
2. Scan draft; auto-suggest replacements.
3. Add new approved phrases to glossary with date + approver.

## Output

Updated glossary snippet for `brand/maintain_brand_glossary` merge.
