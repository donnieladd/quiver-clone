---
id: church.workflow.worship_visuals
title: Worship Visuals Workflow
skills_used:
  - church.worship.select_ambient_vs_dynamic_loop
  - church.worship.select_loop_for_song
  - church.worship.optimize_for_led_vs_projector
  - church.worship.avoid_motion_behind_speaker
  - church.slides.prepare_worship_lyric_slides
  - church.motion.export.projection_1080
  - church.qa.projection_legibility
  - church.qa.motion_not_distracting_behind_speaker
---

# Workflow: Worship Visuals

Background loops, lyric support, and stage motion that **support** worship without competing with lyrics or the speaker.

## Purpose

Worship visuals are environmental, not promotional. Prioritize legibility, tempo match, and technical compatibility with ProPresenter / Resolume / Sunday Keys.

## Decision: ambient vs dynamic

Use **`church.worship.select_ambient_vs_dynamic_loop`**:

| Context | Loop type | Examples |
|---------|-----------|----------|
| Prayer, communion, response | Ambient, slow drift | Soft gradients, particles, slow light leaks |
| Up-tempo worship | Dynamic, rhythmic | Motion synced loosely to BPM, not strobe |
| Teaching / sermon | Static or minimal | Series still or subtle loop |
| Lyric slides | Often static background | Loop behind lyrics only if contrast holds |

## Production steps

1. Confirm **output surface**: LED wall vs projector (`church.worship.optimize_for_led_vs_projector`).
2. Pull series motion kit or create song-specific loop (`church.worship.select_loop_for_song`).
3. Export **`church.motion.export.projection_1080`** — H.264, 1920×1080, 30fps typical.
4. Build lyric slides — **`church.slides.prepare_worship_lyric_slides`** + **`church.worship.lyric_line_break_rules`**.
5. Rehearsal: view from back row; run **`church.qa.motion_not_distracting_behind_speaker`**.

## Technical defaults

- Resolution: 1920×1080 (match sanctuary switcher)
- Codec: H.264 MP4 for broad compatibility
- Loop length: 30–120s seamless loop
- Lyric type: sans-serif, high contrast, max 4 lines per slide

## When NOT to use heavy motion

- Guest preacher / unfamiliar room
- Broadcast IMAG where camera picks up moiré on fine patterns
- Accessibility request for reduce-motion (`church.worship.provide_static_fallback`)

## Sources

- [Ruah motion graphics guide](https://ruahcreativehouse.org/blog/church-motion-graphics/)
- [Adobe MOGRT / Essential Graphics](https://helpx.adobe.com/after-effects/using/creating-motion-graphics-templates.html)
