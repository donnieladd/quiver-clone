# Church / Ministry Media — Agent Instructions

You are operating inside the **Church Media Skills** system for this repository. Before generating, editing, or approving any church/ministry visual asset, follow this protocol.

## Required reading order

1. **Client profile** — `profiles/{slug}.json`  
   - `faith-chapel` · `union-church` · `transformation-church` · `church-of-the-highlands` · `elevation-church`
2. **Linked playbook** — path in profile's `playbook` field.
3. **`INDEX.md`** — route the request to the correct workflow and skill(s).
4. **Relevant workflow** in `workflows/` — understand end-to-end steps and gates.
5. **Every skill** listed in the workflow's `skills_used` frontmatter — apply decision rules literally.
6. **`brand/` skills** — profile `brand.forbidden` and hub URL override generic defaults.

## Non-negotiables

- **Never redesign from scratch** when an approved template exists — duplicate and swap content.
- **Legibility first** — projection, LED walls, and mobile social are harsher than print; test at small size.
- **One sermon → many assets** — always plan repurposing (clips, quotes, carousels, stories) not a single graphic.
- **Approval before publish** — pastoral/comms sign-off for anything public-facing unless ops skill says otherwise.
- **Export to spec** — use platform dimensions from `social/` and `motion/` skills; do not guess sizes.
- **Accessibility** — contrast, readable type on photos (scrims), captions on video; see `qa/` skills.

## Skill file format

Each skill under `skills/church/` uses YAML frontmatter:

```yaml
---
id: church.social.template.sermon_quote
tier: template
vertical: church
inputs: [quote_text, series_brand, speaker_name_optional]
outputs: [1080x1080_png, 1080x1350_png, caption_snippet]
related: [church.content.extract_quotable_lines, church.qa.text_legibility_mobile]
---
```

Sections in every skill: **Purpose**, **When to use**, **When NOT to use**, **Inputs**, **Decision rules**, **Steps**, **Export specs**, **QA checks**, **Examples**, **Related skills**.

## Quiver / SVG integration

When a skill calls for **icons, logos, patterns, lower-thirds, or series marks**:

1. Prefer **vector (SVG)** from the Quiver generation API (`POST /v1/svgs/generations`).
2. Run **brand lint** (`church.qa.logo_and_color_compliance`) before dropping into templates.
3. For raster photos → vector overlays, use vectorization only when editability is required.

## Default workflow routing

| User intent | Start workflow |
|-------------|----------------|
| New sermon series look | `workflows/series-launch.md` |
| This Sunday's slides + social | `workflows/weekly-service-kit.md` |
| Turn sermon into posts | `workflows/sermon-to-social.md` |
| Worship backgrounds / lyrics | `workflows/worship-visuals.md` |
| Train volunteers on Canva | `workflows/volunteer-template-ops.md` |
| Who approves what | `workflows/approval-governance.md` |
| Community story / testimony / values campaign | `story/INDEX.md` → `church.story.plan_story_content_calendar` |

## Story domain

Community-first narrative lives in **`story/`** — not event flyers alone. Always:

1. `church.story.route_by_profile`
2. `church.story.plan_story_content_calendar` for multi-asset requests
3. `church.story.balance_pastor_vs_community_faces` against profile cap
4. `church.story.consent_and_privacy_check` when featuring people

## Output expectations

When completing a task, always return:

1. **Workflow used**
2. **Skills applied** (IDs)
3. **Deliverable list** with dimensions/format
4. **QA checklist** pass/fail
5. **Next recommended skills** (e.g., schedule, archive series art)
