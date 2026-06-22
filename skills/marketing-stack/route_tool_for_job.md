# Route AI tool for job

## Purpose

**One decision** — you should not pick 30 AI tools manually. This skill maps job → provider.

## Job → tool matrix

| Job type | Primary | API model id | Fallback |
|----------|---------|--------------|----------|
| vector_logo_icon | Quiver | `quiver/arrow-1.1` | local mock |
| campaign_photo | Higgsfield | `higgsfield/bytedance/seedream/v4/text-to-image` | `openai/gpt-image-1` |
| product_photo | Higgsfield | `higgsfield/nano-banana-pro` | OpenAI |
| fashion_moodboard | Higgsfield | `higgsfield/soul/v2/text-to-image` | Seedream |
| image_to_video_social | Higgsfield | `higgsfield/v1/image2video/dop` | Kling |
| cinematic_video | Higgsfield | `higgsfield/google/veo-3.1` | Kling |
| branded_marketing_video | Higgsfield | `higgsfield/marketing-studio/video` | — |
| long_copy_positioning | LLM | claude/gpt (external) | — |
| seo_outline | LLM + Perplexity | `media.research.perplexity_research_brief` | — |
| voiceover | ElevenLabs | `media.audio.elevenlabs_voice_generate` | — |
| avatar_explainer | HeyGen | `media.video.heygen_avatar_video` | — |

## Execution

Call `POST /v1/media/generations` with returned `model_id` when modality is image/video/svg.

## Vertical overrides

- **fashion-luxury**: prefer Soul + human shoot for hero; AI for mood only
- **corporate-marketing**: no uncanny AI faces in exec comms
- **editorial-marketing**: AI outline OK; publish requires `editorial-marketing.ai.ai_fact_check_and_citation_gate`
