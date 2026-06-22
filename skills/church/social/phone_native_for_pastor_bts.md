---
id: church.social.phone_native_for_pastor_bts
tier: production
vertical: church
title: Phone-native capture for pastor BTS social
inputs: [church_profile, content_type, platform]
outputs: [phone_native_photo_or_video, caption]
related: [church.story.balance_pastor_vs_community_faces]
profiles: [church.transformation-church]
---

# Phone-native capture for pastor BTS social

## Purpose

Transformation Church model: **pastor personal channel** uses phone/selfie-native capture for authenticity — not pro-camera faux casual ([Pro Church Tools](https://prochurchtools.com/blog-post/how-pastor-mike-todd-dominates-social-media)).

## When to use

- Sub-brand: `mike-todd-personal` in profile
- BTS, family, fitness, faith moments — humanity lane

## When NOT to use

- Church YouTube thumbnails (cinematic lane)
- Stage IMAG, series key art, openers

## Decision rules

- Capture on phone front/rear camera; minimal color grade
- Vertical 9:16 for Stories/Reels; square optional for feed
- Church account may repost clip — still phone-origin

## Export specs

- 1080×1920 MP4 or MOV (Reels/Stories)
- 1080×1080 JPG for feed stills

## QA checks

- [ ] Does not look like broadcast screenshot cropped to social
- [ ] Caption passes `church.story.apply_represent_language_filter` if church repost
