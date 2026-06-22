---
id: church.worship.union_sound_release_kit
tier: production
vertical: church
title: Union Sound release kit
inputs: [song_title, release_date, artwork, church_profile]
outputs: [spotify_canvas, vertical_teaser, youtube_thumbnail, social_announcement]
related: [church.worship.select_loop_for_song, church.social.template_worship_highlight]
profiles: [church.union-church]
---

# Union Sound release kit

## Purpose

Ship worship releases on the **Union Sound** lane — separate from sermon series templates ([Union Sound](https://theunionchurch.com/unionsound/)).

## Tagline (from profile)

> "Every movement has a sound." / "Songs of today are altars of yesterday." — Pastor Stephen Chandler

## Kit checklist

| Asset | Spec |
|-------|------|
| Cover art | 3000×3000 (streaming) |
| Spotify canvas | 720×1280 loop |
| Vertical teaser | 1080×1920, 15–30s |
| YouTube thumbnail | 1280×720 |
| Feed announcement | 1080×1080 Union Sound template family |
| Newsletter blurb | Union Sound list |

## Decision rules

- **Do not** use sermon series title treatment on worship art
- Use `dam.template_paths.social_union_sound` only
- Worship Director approves before Creative Lead (see profile approval chain)

## QA checks

- [ ] Union Sound lockup, not generic Union Church series mark
- [ ] CCLI / licensing noted if lyrics on graphics
