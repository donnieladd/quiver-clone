---
id: church.story.map_values_to_content_pillars
tier: production
vertical: church
title: Map values to content pillars
inputs: [church_profile, campaign_or_series_brief]
outputs: [pillar_assignment_map, template_skill_list]
related: [church.content.map_points_to_content_pillars, church.story.plan_story_content_calendar]
profiles: [all]
---

# Map values to content pillars

## Purpose

Connect **`profile.story.values`** and **`content_pillars[]`** to a concrete asset list — story is values made visible, not random posts.

## Steps

1. List each value from profile (e.g. Faith Chapel movement, Union destiny, TC RE-present).
2. Assign 1+ pillars per value from `content_pillars`.
3. Pick `template_skills` from each pillar — no blank pillars in 30-day plan.
4. Flag gaps (value with no planned asset → add community or story skill).

## QA checks

- [ ] Every active series ties to at least one value
- [ ] At least one community-facing pillar per month
