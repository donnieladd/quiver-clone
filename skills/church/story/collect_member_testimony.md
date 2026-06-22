---
id: church.story.collect_member_testimony
tier: production
vertical: church
title: Collect member testimony
inputs: [church_profile, intake_channel, story_prompt]
outputs: [raw_testimony, photo_optional, consent_status]
related: [church.story.consent_and_privacy_check, church.story.share_your_story_intake_form]
profiles: [all]
---

# Collect member testimony

## Purpose

Gather **member voice** with structured prompts before any design — foundation of community story.

## Prompts (adapt per profile voice)

1. What was life like before / what changed?
2. What role did community (groups, serve, church) play?
3. One sentence you'd tell a friend about this church.
4. Optional photo (high resolution only — Faith Chapel: no low-res).

## Steps

1. Route intake: Faith Chapel → `share_your_story_intake_form`; others → connect form + consent.
2. Run **`church.story.consent_and_privacy_check`** before creative.
3. Pass to **`church.story.edit_testimony_for_publication`**.
