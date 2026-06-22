---
id: church.story.balance_pastor_vs_community_faces
tier: production
vertical: church
title: Balance pastor vs community faces in content calendar
inputs: [church_profile, content_calendar_30d, platform_grid_optional]
outputs: [balance_report, rebalanced_calendar]
related: [church.content.build_weekly_content_calendar, church.qa.approval_status_recorded]
profiles: [church.faith-chapel, church.union-church]
---

# Balance pastor vs community faces in content calendar

## Purpose

Enforce each church profile's **`story.pastor_face_ratio_max_30d`** so media tells a **community story**, not a solo pastor brand.

## Profile limits

| Profile | Max pastor-face posts (30 days) |
|---------|----------------------------------|
| `church.faith-chapel` | 50% |
| `church.union-church` | 40% |

## When to use

- Weekly content planning (`church.content.build_weekly_content_calendar`)
- Before scheduling a batch of social posts
- Audit of Instagram grid before publish

## Decision rules

- **Pastor-face post** = lead pastor clearly visible (photo, reel, thumbnail face > 30% frame).
- **Community post** = members, worship artists, teams, stories, Union Sound (Union), The Bridge (Faith Chapel).
- Teaching **quote graphics without face** do not count toward pastor ratio.
- Union Sound releases count as **community/worship**, not pastor.

## Steps

1. Load `profiles/{slug}.json` → read `pastor_face_ratio_max_30d`.
2. Tag each scheduled post in next 30 days: `pastor_face` | `community` | `neutral`.
3. Calculate ratio = pastor_face / total posts.
4. If over limit: swap pastor reel for community story, worship highlight, or testimony.
5. Document in balance report.

## QA checks

- [ ] Ratio at or below profile max
- [ ] At least 2 community pillars represented per week
- [ ] Union Sound lane used for worship drops (Union only)

## Related skills

- `church.story.run_share_your_story_campaign`
- `church.social.template_community_story`
