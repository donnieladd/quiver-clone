---
id: church.series.define_series_creative_brief
tier: foundation
vertical: church
title: "Define series creative brief"
inputs: [series_title, teaching_outline, week_count, pastor_input]
outputs: [series_creative_brief_pdf, moodboard_link]
related: [church.workflow.series_launch, church.series.design_key_art, church.brand.handoff_brand_to_series_team]
---

# Define series creative brief

## Purpose

Align teaching pastor and creative team **before** any pixels — prevents expensive rework on series art, motion, and templates.

## When to use

- Starting `workflows/series-launch.md`
- 4+ weeks planned series or high-visibility campaign (Easter, Advent)

## When NOT to use

- Single-week standalone sermon (use weekly kit only)
- Reusing prior series kit unchanged (duplicate archive)

## Inputs

- Working series title + subtitle
- One-sentence **big idea**
- Week count and rough week titles (if known)
- Scripture anchor
- Teaching pastor interview (15 min) or written answers
- Brand kit link

## Brief template (fill every field)

```markdown
# Series Creative Brief: [Title]

## Big idea
One sentence.

## Tone (pick 2)
[ ] Welcoming  [ ] Bold  [ ] Contemplative  [ ] Joyful  [ ] Urgent  [ ] Hopeful

## Audience
Who is this for? (seekers, members, youth parents, etc.)

## Scripture anchor
Book chapter:verse — translation

## Weeks
| Week | Title | Date |
|------|-------|------|

## Visual metaphors (approved / rejected)
Approved: 
Rejected (theology or cliché): 

## Environments needed
[ ] Social  [ ] Slides  [ ] Motion  [ ] Print  [ ] Web  [ ] Stage

## References (mood only — not to copy)
Links or images

## Deadline
Kit due date before week 1:

## Approvers
Teaching pastor: 
Comms lead: 
```

## Decision rules

- Pastor must sign brief before **`church.series.design_key_art`** concepts.
- If metaphor touches cross, fire, lion, dove — document **why** (`church.brand.avoid_cliche_religious_symbols`).
- Series palette may **extend** brand palette but not replace church primary logo colors without leadership OK.

## Steps

1. Schedule 15-min intake with teaching pastor.
2. Fill brief template; share moodboard (Pinterest/Milanote/Canva board).
3. Review with comms + creative; resolve conflicts before design.
4. Store in DAM: `Series/[Title]/00_Brief/`
5. Trigger series launch workflow asset list.

## QA checks

- [ ] Pastor signed brief
- [ ] Big idea one sentence only
- [ ] Week count matches teaching plan
- [ ] Brand kit attached

## Related skills

- `church.series.design_key_art`
- `church.series.launch_asset_kit_checklist`
- `church.brand.handoff_brand_to_series_team`
