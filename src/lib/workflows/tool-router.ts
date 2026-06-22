/** Maps workflow job types → media model IDs (see marketing-stack/route_tool_for_job.md) */

export interface ToolRoute {
  modelId: string;
  provider: string;
  modality: "image" | "video" | "svg";
  fallbackModelId?: string;
}

const ROUTES: Record<string, ToolRoute> = {
  vector_logo_icon: {
    modelId: "quiver/arrow-1.1",
    provider: "quiver",
    modality: "svg",
  },
  campaign_photo: {
    modelId: "higgsfield/bytedance/seedream/v4/text-to-image",
    provider: "higgsfield",
    modality: "image",
    fallbackModelId: "openai/gpt-image-1",
  },
  product_photo: {
    modelId: "higgsfield/nano-banana-pro",
    provider: "higgsfield",
    modality: "image",
    fallbackModelId: "openai/gpt-image-1",
  },
  fashion_moodboard: {
    modelId: "higgsfield/soul/v2/text-to-image",
    provider: "higgsfield",
    modality: "image",
    fallbackModelId: "higgsfield/bytedance/seedream/v4/text-to-image",
  },
  image_to_video_social: {
    modelId: "higgsfield/v1/image2video/dop",
    provider: "higgsfield",
    modality: "video",
  },
  cinematic_video: {
    modelId: "higgsfield/google/veo-3.1",
    provider: "higgsfield",
    modality: "video",
  },
  branded_marketing_video: {
    modelId: "higgsfield/marketing-studio/video",
    provider: "higgsfield",
    modality: "video",
  },
  corporate_hero: {
    modelId: "higgsfield/bytedance/seedream/v4/text-to-image",
    provider: "higgsfield",
    modality: "image",
  },
  editorial_hero: {
    modelId: "openai/gpt-image-1",
    provider: "openai",
    modality: "image",
  },
};

export function routeToolForJob(jobType: string): ToolRoute | undefined {
  return ROUTES[jobType];
}

export function listJobTypes(): string[] {
  return Object.keys(ROUTES);
}

/** Platform hints by marketing objective */
export const PLATFORM_MATRIX: Record<
  string,
  { primary: string[]; contentShape: string; aiRole: string }
> = {
  b2b_pipeline: {
    primary: ["LinkedIn", "Email", "Sales deck"],
    contentShape: "Thought leadership, case studies",
    aiRole: "LLM drafts; human exec voice on publish",
  },
  product_launch: {
    primary: ["Landing page", "Product Hunt", "Email"],
    contentShape: "Launch narrative, demo clips",
    aiRole: "Product shots + demo storyboard",
  },
  dtc_ecommerce: {
    primary: ["Meta", "TikTok Shop", "Amazon A+"],
    contentShape: "UGC-style, product loops",
    aiRole: "Product photo AI + Quiver icons",
  },
  luxury_fashion_drop: {
    primary: ["Instagram", "TikTok", "Email", "Lookbook PDF"],
    contentShape: "Editorial stills, 9:16 film",
    aiRole: "Moodboard AI; human shoot for hero",
  },
  seo_editorial: {
    primary: ["Blog", "Newsletter", "YouTube"],
    contentShape: "Long-form, clusters, repurposed clips",
    aiRole: "Outline + draft; fact-check gate before publish",
  },
  personal_executive: {
    primary: ["LinkedIn", "Podcast", "Speaking"],
    contentShape: "Essays, clips, headshots",
    aiRole: "LLM ghost; real photo only in hero",
  },
  creator_monetization: {
    primary: ["YouTube", "Substack", "Patreon"],
    contentShape: "Series, community posts",
    aiRole: "Thumbs + B-roll via media engine",
  },
  church_ministry: {
    primary: ["YouTube", "Instagram", "Email"],
    contentShape: "Sermon clips, invite cards",
    aiRole: "Quiver SVG + brand tokens",
  },
};

export function routePlatformForObjective(objective: string) {
  return PLATFORM_MATRIX[objective];
}
