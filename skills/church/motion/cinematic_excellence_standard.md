---
id: church.motion.cinematic_excellence_standard
tier: qa
vertical: church
title: Cinematic excellence standard for motion and stage
inputs: [motion_or_stage_asset, playback_context]
outputs: [pass_fail_report]
related: [church.motion.export_projection_1080, church.qa.motion_not_distracting_behind_speaker]
profiles: [church.transformation-church]
---

# Cinematic excellence standard for motion and stage

## Purpose

QC bar for TC-profile motion: **excellence as worship** — immersive but readable, broadcast-safe, clip-friendly.

## Checklist

- [ ] 1920×1080 H.264 for projection; ProRes master archived separately
- [ ] No moiré on IMAG camera test
- [ ] Text readable at back row (if text in motion)
- [ ] Loop seamless 30–120s
- [ ] YouTube pause-frame still looks intentional
- [ ] Not distracting behind speaker during teaching (`church.qa.motion_not_distracting_behind_speaker`)
- [ ] Color grade matches series kit LUT/palette

## Fail actions

- Reduce fine pattern / grain causing moiré
- Lower motion speed behind teaching segments
- Re-export bitrate for stream band (`church.motion.optimize_bitrate_for_venue_wifi`)
