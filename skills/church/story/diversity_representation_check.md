---
id: church.story.diversity_representation_check
tier: qa
vertical: church
title: Diversity representation check
inputs: [content_calendar_30d, church_profile]
outputs: [representation_report, gaps]
related: [church.story.balance_pastor_vs_community_faces, church.story.plan_story_content_calendar]
profiles: [all]
---

# Diversity representation check

## Purpose

Ensure **faces and stories** reflect the actual congregation — age, ethnicity, gender, campus — not a single demo.

## Steps

1. Tag featured people in 30-day calendar (pastor / staff / member / stock).
2. Compare to profile `story.representation_targets` if present.
3. Flag if >70% one demographic or all one campus when multi-site.
4. Suggest `collect_member_testimony` or campus-specific `localize_story_for_campus`.

## Not a quota system — a **gap detector** for intentional inclusion.
