---
id: church.series.package_open_network_style_kit
tier: production
vertical: church
title: Package Open Network style series kit
inputs: [series_creative_brief, master_art_layers, church_profile]
outputs: [kit_zip_structure, open_network_metadata, kit_manifest_json]
related: [church.series.include_master_painting_layer, church.ops.publish_series_kit_to_dam]
profiles: [church.church-of-the-highlands]
---

# Package Open Network style series kit

## Purpose

Ship Highlands/Elevation-style **complete series bundles** — what other churches download from [Open Network](https://open.life.church/) / [Highlands Resources](https://www.churchofthehighlands.com/resources).

## Folder structure (canonical)

```
{SeriesName}_Kit/
├── BrandGuidelines.pdf
├── MasterPainting/
│   ├── master_flatten.png
│   ├── master_layers.psd
│   └── master_painting_1-4.png
├── SeriesProduction/
│   ├── production_01.png
│   └── production_02.png
├── LED/
│   ├── giving_example.png
│   └── giving_info.png
├── Web1920/
│   ├── web_01.jpg
│   └── web_02.jpg
├── MessageNotes/
│   ├── notes_01.pdf
│   └── notes_02.pdf
├── Social/
├── Video/
│   └── series_opener.mp4
└── manifest.json
```

## manifest.json fields

- `series_title`, `week_count`, `speaker`, `scripture`, `brand_guidelines_version`, `file_index[]`

## QA checks

- [ ] All layers named per convention
- [ ] Web exports exactly 1920×1080
- [ ] Brand guidelines PDF included
- [ ] Ready for Highlands Resources / Open Network upload
