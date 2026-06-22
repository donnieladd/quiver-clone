---
id: fashion-luxury.collab_announce
title: "Collaboration announcement"
vertical: fashion-luxury
skills_used:
  - fashion-luxury.campaign.collaboration_co_brand_announcement
estimated_minutes: 180
primary_platforms: ["Instagram","Press","Email"]
---

# Workflow: Collaboration announcement

Co-brand announcement for luxury × luxury or luxury × street collabs.

## When to use

- Confirmed collaboration
- Dual-brand legal cleared

## When NOT to use

- Rumor phase

## Primary platforms

Instagram · Press · Email

## Steps

### Step 1 — Partner details

**Type:** `input`

undefined

**Inputs:**
- Brand A (required)
- Brand B (required)
- Announce date (required)

### Step 2 — Co-brand lockup rules

**Type:** `skill`
**Skill:** `fashion-luxury.campaign.collaboration_co_brand_announcement`

undefined

### Step 3 — Announcement hero

**Type:** `generate`
**Generate job:** `fashion_moodboard`

undefined

### Step 4 — Both brands approve

**Type:** `gate`

undefined

**Gate criteria:**
- Dual brand sign-off
- Legal co-brand agreement


## Outputs

- [ ] Hero asset
- [ ] Press release
- [ ] Social cutdowns

## Related workflows

- `fashion-luxury.capsule_drop`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/fashion-luxury.collab_announce/runs`
