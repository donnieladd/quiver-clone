# Quiver Clone

A functional QuiverAI-style application with a **QuiverAI-compatible REST API** at `/v1`.

## Features

- **Text to SVG** — `POST /v1/svgs/generations`
- **Image to SVG** — `POST /v1/svgs/vectorizations`
- **Model discovery** — `GET /v1/models`, `GET /v1/models/{model}`
- **OpenAPI spec** — `GET /v1/openapi.json`
- Playground UI, gallery, export (SVG/PNG)

## Quick start

```bash
npm install
npm run dev
```

Base URL: `http://localhost:3000/v1`

Default API key (local dev): `qv_dev_local_key`

## Authentication

```http
Authorization: Bearer qv_dev_local_key
Content-Type: application/json
```

Set custom keys in `.env.local`:

```bash
QUIVER_CLONE_API_KEYS=qv_live_key_1,qv_live_key_2
OPENAI_API_KEY=sk-...          # optional, for AI text-to-SVG
ANTHROPIC_API_KEY=sk-ant-...    # optional
```

## API examples

### List models

```bash
curl http://localhost:3000/v1/models \
  -H "Authorization: Bearer qv_dev_local_key"
```

### Text to SVG

```bash
curl -X POST http://localhost:3000/v1/svgs/generations \
  -H "Authorization: Bearer qv_dev_local_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "arrow-1.1",
    "prompt": "a minimalist logo of a mountain",
    "stream": false
  }'
```

### Image to SVG

```bash
curl -X POST http://localhost:3000/v1/svgs/vectorizations \
  -H "Authorization: Bearer qv_dev_local_key" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "arrow-1.1",
    "image": { "url": "https://example.com/logo.png" },
    "auto_crop": true
  }'
```

### Streaming

Set `"stream": true` on generation or vectorization. The response is `text/event-stream` with `event:` lines (`generating`, `reasoning`, `draft`, `content`) and terminates with `data: [DONE]`.

## SDK compatibility

Drop-in replacement for QuiverAI SDK calls by changing the base URL:

```typescript
import { QuiverAI } from "@quiverai/sdk";

const client = new QuiverAI({
  bearerAuth: "qv_dev_local_key",
  baseUrl: "http://localhost:3000", // instead of https://api.quiver.ai
});
```

Or use cURL with the same request bodies from [QuiverAI docs](https://docs.quiver.ai).

## Response shape

Non-streaming responses match QuiverAI:

```json
{
  "id": "resp_...",
  "created": 1704067200,
  "credits": 20,
  "data": [{ "mime_type": "image/svg+xml", "svg": "<svg ...>" }],
  "usage": { "input_tokens": 0, "output_tokens": 0, "total_tokens": 0 }
}
```

Errors use the same envelope:

```json
{
  "status": 401,
  "code": "invalid_api_key",
  "message": "Invalid API key",
  "request_id": "..."
}
```

## Rate limits & credits

- **Rate limit:** 20 requests / 60 seconds per API key (headers: `X-RateLimit-*`)
- **Credits:** 10,000 starting balance per org (in-memory; resets on server restart)

| Model | Generate | Vectorize |
|-------|----------|-----------|
| arrow-1 | 30 | 30 |
| arrow-1.1 | 20 | 15 |
| arrow-1.1-max | 25 | 20 |

## Legacy routes

Simplified playground routes still work without auth:

- `GET /api/models`
- `POST /api/generate`
- `POST /api/vectorize`

## Note

Independent recreation inspired by [QuiverAI](https://quiver.ai). Uses local templates + ImageTracer for vectorization, with optional OpenAI/Anthropic for AI generation — not Quiver's proprietary Arrow models.
