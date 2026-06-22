---
id: church.series.include_master_painting_layer
tier: production
vertical: church
title: Include master painting layer in series kit
inputs: [series_art_psd, layer_naming_convention]
outputs: [master_painting_exports, flatten_preview]
related: [church.series.package_open_network_style_kit]
profiles: [church.church-of-the-highlands]
---

# Include master painting layer in series kit

## Purpose

Highlands kits ship **master painting** assets (flat + layered + numbered variants) for campuses and external churches to adapt ([God of Miracles kit](https://open.life.church/resources/4661-god-of-miracles)).

## Required exports

| File | Use |
|------|-----|
| `master_flatten.png` | Quick social composite |
| `master_painting_1-4.png` | Variant crops / compositions |
| `master_layers.psd` | Campus creative adaptation |
| `series_production_01-03.png` | Pre-composed slide/social backgrounds |

## Steps

1. Finalize hero illustration / photo composite in PSD.
2. Group layers: background, texture, subject, title, logo.
3. Export numbered stills + flatten.
4. Document safe zones for text overlay in BrandGuidelines.pdf.

## QA checks

- [ ] 300dpi at delivery size for print-bound variants
- [ ] Logo clear space documented on flatten export
