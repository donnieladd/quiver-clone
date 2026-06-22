---
id: fashion-luxury.capsule_drop
title: "Capsule drop hype sequence"
vertical: fashion-luxury
skills_used:
  - fashion-luxury.campaign.capsule_drop_hype_sequence
  - fashion-luxury.ai.ai_look_generation_moodboard
  - fashion-luxury.social.instagram_reels_fashion_native
estimated_minutes: 360
primary_platforms: ["Instagram","TikTok","Email","Ecommerce"]
---

# Workflow: Capsule drop hype sequence

Tease → drop → sellout narrative → archive. Full luxury drop workflow.

## When to use

- Limited capsule or collab drop
- Seasonal micro-collection

## When NOT to use

- Full season lookbook (use lookbook workflow)
- Evergreen catalog

## Primary platforms

Instagram · TikTok · Email · Ecommerce

## Steps

### Step 1 — Drop concept

**Type:** `input`

undefined

**Inputs:**
- Drop name (required)
- Drop date & time (required)
- Unit count (scarcity) (required)
- Creative concept (required)

### Step 2 — Luxury brand codes check

**Type:** `skill`
**Skill:** `fashion-luxury.strategy.define_luxury_brand_codes`

undefined

### Step 3 — AI moodboard (refs only)

**Type:** `generate`
**Generate job:** `fashion_moodboard`

AI for mood only — hero assets from human shoot.

### Step 4 — Tease phase (T-7 to T-1)

**Type:** `skill`
**Skill:** `fashion-luxury.campaign.capsule_drop_hype_sequence`

undefined

### Step 5 — Reels / TikTok motion

**Type:** `generate`
**Generate job:** `image_to_video_social`

undefined

### Step 6 — VIP early access email

**Type:** `checklist`

undefined

**Checklist:**
- [ ] VIP segment defined
- [ ] Early access link tested
- [ ] Sold-out waitlist ready

### Step 7 — Drop day

**Type:** `checklist`

undefined

**Checklist:**
- [ ] PDP live
- [ ] IG/TikTok posted at drop time
- [ ] Inventory sync verified
- [ ] Archive plan for sold-out state

### Step 8 — Creative director sign-off

**Type:** `gate`
**Skill:** `fashion-luxury.ai.ai_on_model_vs_ghost_mannequin_policy`

undefined

**Gate criteria:**
- Hero imagery from human shoot
- Model releases on file
- AI policy compliant


## Outputs

- [ ] Tease assets
- [ ] Drop day assets
- [ ] Email flows
- [ ] Post-drop archive

## Related workflows

- `fashion-luxury.lookbook_season`
- `fashion-luxury.collab_announce`

## Runtime

Start in Brand Studio: **Workflows** (`/app/workflows`) or `POST /v1/workflows/fashion-luxury.capsule_drop/runs`
