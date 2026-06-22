# Church Client Profiles

Machine-readable context for registered church clients. Agents must load the active profile before generating assets.

## Files

| File | Client |
|------|--------|
| [`faith-chapel.json`](./faith-chapel.json) | Faith Chapel · Birmingham · institutional premium |
| [`union-church.json`](./union-church.json) | Union Church · multi-campus · Union Sound + BLDRS |
| [`transformation-church.json`](./transformation-church.json) | Transformation Church · cinematic · RE-present |
| [`church-of-the-highlands.json`](./church-of-the-highlands.json) | Church of the Highlands · 26 campuses · resource kits |
| [`elevation-church.json`](./elevation-church.json) | Elevation Church · clips + eFam · Open Network |
| [`schema.json`](./schema.json) | JSON Schema for validation |
| [`index.json`](./index.json) | Profile registry |

## Agent protocol

1. Resolve client slug from `profiles/index.json` (e.g. `elevation-church`).
2. Read `profiles/{slug}.json`.
3. Read linked `playbook` path from profile.
4. Apply `story.pastor_face_ratio_max_30d`, `voice.do` / `voice.dont`, and `approval.chain`.
5. Route templates via `content_pillars[].template_skills`.
6. For story-heavy work, start at [`../story/INDEX.md`](../story/INDEX.md).
7. Use `dam.template_paths` for duplicate-not-redesign workflows.

## Validate profiles

```bash
npm run skills:validate-profiles
```

## Profile comparison

| | Faith Chapel | Union | Transformation | Highlands | Elevation |
|---|--------------|-------|----------------|-----------|-----------|
| **Story model** | Movement institution | Community mix | Cinematic pastor-human | Systems multi-campus | Distributed clips + community |
| **Pastor face max** | 50% | 40% | 55% | 45% | 50% |
| **Campuses** | 1 | 3 | 1 (+ global) | 26 | Multi (US/Canada) |
| **Visual bar** | Institutional | Institutional | Site Inspire forward | Institutional + kits | Broadcast + kits |

## Playbooks

- [Faith Chapel](../playbooks/faith-chapel.md)
- [Union / BLDRS](../playbooks/union-bldrs.md)
- [Transformation Church](../playbooks/transformation-church.md)
- [Church of the Highlands](../playbooks/highlands-resources.md)
- [Elevation Church](../playbooks/elevation-church.md)
