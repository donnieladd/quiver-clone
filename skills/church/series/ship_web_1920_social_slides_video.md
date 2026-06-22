---
id: church.series.ship_web_1920_social_slides_video
tier: production
vertical: church
title: Ship web 1920 social slides video kit
inputs: [series_kit, church_profile]
outputs: [web_1920_assets, social_set, slides_deck, video_loops]
related: [church.series.package_open_network_style_kit, church.series.include_master_painting_layer]
profiles: [church.church-of-the-highlands, church.elevation-church]
---

# Ship web 1920 social slides video kit

## Purpose

Package **Highlands-style series bundle**: master painting, web 1920 hero, social templates, message slides, video loops.

## Kit contents

- [ ] Master painting / key art layer
- [ ] Web hero 1920×800 (or profile spec)
- [ ] Social 1080×1080 + 1080×1920
- [ ] ProPresenter / slide master
- [ ] Loop / stinger MP4

## Steps

1. Run `church.series.include_master_painting_layer`
2. Export web hero per `church.web.design_series_hero`
3. Duplicate social templates with series token override
4. Publish to DAM via `church.ops.publish_series_kit_to_dam`
