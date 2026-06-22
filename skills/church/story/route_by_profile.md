---
id: church.story.route_by_profile
tier: foundation
vertical: church
title: Route story task by church profile
inputs: [client_slug, task_description]
outputs: [profile_path, playbook_path, recommended_story_skills]
related: [church.story.plan_story_content_calendar]
profiles: [all]
---

# Route story task by church profile

## Purpose

Resolve **which church** and return profile-specific story rules before any creative work.

## Slugs

| Slug | Profile | Story emphasis |
|------|---------|----------------|
| `faith-chapel` | movement-institution | Share Your Story, The Bridge |
| `union-church` | community-mix | Union Sound, seeker-first, 40% pastor max |
| `transformation-church` | cinematic-pastor-human | RE-present, clips, 55% pastor max |
| `church-of-the-highlands` | systems-multi-campus | 4 mission pillars, scheduling grid |
| `elevation-church` | distributed-clips-community | eFam, clips, Open Network, 50% pastor max |

## Steps

1. Read `profiles/index.json` → match slug.
2. Load `profiles/{slug}.json`.
3. Load playbook from `profile.playbook`.
4. Return `skill_priorities` + `story.pastor_face_ratio_max_30d` + `content_pillars`.
