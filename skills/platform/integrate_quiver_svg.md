---
id: platform.brand_studio.integrate_quiver_svg
tier: production
vertical: platform
title: "Integrate Quiver SVG generation"
inputs: []
outputs: []
related: [brand-system.qa.run_token_lint_on_asset]
---

# Integrate Quiver SVG generation

## Purpose

Call /v1/svgs/generations with project auth and lint.

## Steps

1. POST to Quiver-compatible endpoint.
2. Sanitize SVG output.
3. Run token lint before template placement.
