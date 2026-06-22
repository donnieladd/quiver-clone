# Higgsfield Clone — Media Engine

Brand Studio’s **unified generation layer** — same idea as [Higgsfield Cloud](https://cloud.higgsfield.ai): one API, many models, job polling.

## API (this repo)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/v1/media/models` | GET | List models (`?modality=image&provider=higgsfield`) |
| `/v1/media/generations` | POST | Submit job (`wait: true` sync default) |
| `/v1/media/generations` | GET | List recent jobs |
| `/v1/media/generations/{id}` | GET | Job status + outputs |

### Auth

Same as Quiver: `Authorization: Bearer qv_dev_local_key`

### Example

```bash
curl -X POST http://localhost:3000/v1/media/generations \
  -H "Authorization: Bearer qv_dev_local_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "local/mock-image",
    "prompt": "minimal personal brand icon",
    "wait": true
  }'
```

With Higgsfield credentials:

```bash
# .env.local
HIGGSFIELD_CREDENTIALS=KEY_ID:KEY_SECRET
```

```bash
curl -X POST http://localhost:3000/v1/media/generations \
  -H "Authorization: Bearer qv_dev_local_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "higgsfield/bytedance/seedream/v4/text-to-image",
    "prompt": "Editorial portrait, soft light",
    "parameters": { "resolution": "2K", "aspect_ratio": "1:1" }
  }'
```

## UI

`/app/studio` — Media Studio (model picker, prompt, preview)

## Providers

| Provider | Env | Models |
|----------|-----|--------|
| `local` | none | mock-image, mock-video |
| `quiver` | optional AI keys | arrow SVG |
| `openai` | `OPENAI_API_KEY` | gpt-image-1 |
| `higgsfield` | `HIGGSFIELD_CREDENTIALS` | Seedream, FLUX, Soul, DoP, Kling, Veo, Marketing Studio |

## CLI parity

Install official CLI for catalog sync and batch jobs:

```bash
npm install -g @higgsfield/cli
higgsfield auth login
higgsfield model list
```

Skill: `media.higgsfield.sync_model_catalog_cli` · `media.higgsfield.cli_generate_wrapper`

## Skills

See `skills/media/INDEX.md` — 26 integration skills.

## Extend

Add models in `src/lib/media/catalog.ts`, implement provider in `src/lib/media/providers.ts`.
