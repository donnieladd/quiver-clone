---
id: church.social.use_highlands_scheduling_grid
tier: ops
vertical: church
title: Use Highlands social scheduling grid
inputs: [church_profile, month_calendar, content_pillars]
outputs: [scheduled_posts_grid, pillar_balance_report]
related: [church.content.build_weekly_content_calendar, church.content.map_points_to_content_pillars]
profiles: [church.church-of-the-highlands]
---

# Use Highlands social scheduling grid

## Purpose

Plan social from **Highlands scheduling spreadsheet model** ([Open Network doc 4431](https://open.life.church/resources/4431-church-social-media-strategy-documents)) — not ad-hoc posting.

## Grid columns (minimum)

| Column | Content |
|--------|---------|
| Date | Publish date/time |
| Platform | IG, FB, YT, etc. |
| Pillar | Know God / Freedom / Purpose / Difference |
| Asset type | Quote, clip, serve, groups, event |
| Template skill | e.g. `church.social.template_sermon_quote` |
| Campus | Central or campus ID |
| Status | Draft / review / scheduled |
| Owner | Role from approval chain |

## Monthly balance rules

- All **four mission pillars** represented at least once per month
- Pastor-face posts ≤ profile max (45% for Highlands)
- Series promos clustered Thu–Sat before weekend

## Steps

1. Duplicate grid from `dam.template_paths.social_scheduling`.
2. Fill month from sermon plan + serve calendar.
3. Run `church.story.balance_pastor_vs_community_faces`.
4. Run `church.content.map_points_to_content_pillars` for alignment check.

## QA checks

- [ ] No empty weekend slots without intentional reason
- [ ] Campus-specific rows approved by campus pastor
