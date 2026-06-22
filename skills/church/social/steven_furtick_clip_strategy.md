---
id: church.social.steven_furtick_clip_strategy
tier: production
vertical: church
title: Steven Furtick clip strategy
inputs: [sermon_recording, clip_moments, church_profile]
outputs: [clip_edit_list, caption_set, posting_schedule]
related: [church.content.design_sermon_for_clip_extraction, church.social.phone_native_for_pastor_bts]
profiles: [church.elevation-church]
---

# Steven Furtick clip strategy

## Purpose

**Clip-first distribution** for Elevation — sermon moments as standalone social, balanced with community story per profile ratio.

## Clip selection

1. Hook in first 3 seconds (question or bold statement)
2. 30–90s primary; 15s teaser for Stories
3. Burn captions; vertical crop safe for faces
4. Run **`church.story.avoid_out_of_context_narrative`**

## Calendar rule

- Max **50% pastor-face** in 30 days (profile `story.pastor_face_ratio_max_30d`)
- Pattern: clip → community story → clip → eFam / outreach

## Formats

| Platform | Aspect | Length |
|----------|--------|--------|
| Reels / TikTok | 9:16 | 30–60s |
| YouTube Shorts | 9:16 | 30–90s |
| Feed cross-post | 1:1 or 4:5 | teaser + link |
