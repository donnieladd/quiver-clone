---
id: church.series.ship_open_network_elevation_kit
tier: production
vertical: church
title: Ship Open Network Elevation kit
inputs: [series_name, kit_assets_from_open_network, church_profile]
outputs: [localized_kit_package, campus_variants]
related: [church.series.package_open_network_style_kit, church.ops.multi_campus_variant_switcher]
profiles: [church.elevation-church]
---

# Ship Open Network Elevation kit

## Purpose

Deploy **Elevation Open Network** series kits with local campus layers — same taxonomy as Highlands kit workflow, Elevation brand rules.

## Steps

1. Download kit from Open Network / elevation resources (sermon, graphics, social).
2. Apply Elevation type + color from profile `brand`.
3. Run campus variants via **`church.ops.multi_campus_variant_switcher`**.
4. Schedule with clip-forward social (`steven_furtick_clip_strategy`).

## Kit checklist

- [ ] Series title lockup
- [ ] Sermon notes / discussion guide linked
- [ ] Social templates (16:9 + 9:16)
- [ ] Worship tie-in if Elevation Worship series

## Reference

- `playbooks/elevation-church.md`
- Open Network: resources.elevationchurch.org
