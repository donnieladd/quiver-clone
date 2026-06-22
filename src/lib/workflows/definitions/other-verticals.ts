import type { WorkflowDefinition } from "../types";

export const PRODUCT_BRAND_WORKFLOWS: WorkflowDefinition[] = [
  {
    id: "product-brand.dtc_launch",
    title: "DTC product launch",
    vertical: "product-brand",
    summary: "Positioning → tokens → product photo → teaser → launch → Amazon/Shopify assets.",
    whenToUse: ["New SKU or product line", "DTC-first brand"],
    whenNotToUse: ["B2B SaaS (use PMM tier 1)"],
    estimatedMinutes: 360,
    primaryPlatforms: ["Shopify", "Meta", "Amazon A+", "Product Hunt"],
    skillsUsed: [
      "product-brand.strategy.define_product_positioning",
      "product-brand.photo.write_product_photography_brief",
      "product-brand.launch.plan_product_launch_teaser",
    ],
    docPath: "product-brand/workflows/dtc-launch.md",
    steps: [
      {
        id: "positioning",
        title: "Product positioning",
        type: "skill",
        skillId: "product-brand.strategy.define_product_positioning",
      },
      {
        id: "tokens",
        title: "Product brand tokens",
        type: "skill",
        skillId: "product-brand.identity.define_product_brand_tokens",
      },
      {
        id: "photo_brief",
        title: "Photography brief",
        type: "skill",
        skillId: "product-brand.photo.write_product_photography_brief",
      },
      {
        id: "product_shot",
        title: "Product hero shot",
        type: "generate",
        jobType: "product_photo",
        promptTemplate: "{{product_name}} product photography, studio lighting, ecommerce hero",
      },
      {
        id: "teaser",
        title: "Launch teaser plan",
        type: "skill",
        skillId: "product-brand.launch.plan_product_launch_teaser",
      },
      {
        id: "platform",
        title: "Commerce channels",
        type: "route",
        routeObjective: "dtc_ecommerce",
      },
      {
        id: "gate",
        title: "Launch QA",
        type: "gate",
        gateCriteria: ["PDP copy approved", "Pack shots consistent", "UGC rights if used"],
      },
    ],
    outputChecklist: ["Shopify live", "Meta ads assets", "Amazon A+ if applicable"],
    relatedWorkflows: ["product-marketing.tier1_launch"],
  },
];

export const PERSONAL_BRAND_WORKFLOWS: WorkflowDefinition[] = [
  {
    id: "personal-brand.thirty_day",
    title: "30-day personal brand launch",
    vertical: "personal-brand",
    summary: "Position → visual identity → 30-day calendar → batch content → publish rhythm.",
    whenToUse: ["New executive or creator establishing presence", "Rebrand of personal brand"],
    whenNotToUse: ["Anonymous brand"],
    estimatedMinutes: 480,
    primaryPlatforms: ["LinkedIn", "YouTube", "Newsletter"],
    skillsUsed: [
      "personal-brand.strategy.define_personal_brand_positioning",
      "personal-brand.content.plan_personal_brand_calendar_30d",
    ],
    docPath: "personal-brand/workflows/thirty-day-launch.md",
    steps: [
      {
        id: "positioning",
        title: "Personal positioning",
        type: "skill",
        skillId: "personal-brand.strategy.define_personal_brand_positioning",
      },
      {
        id: "tokens",
        title: "Visual identity",
        type: "skill",
        skillId: "brand-system.strategy.define_brand_strategy_tier",
      },
      {
        id: "headshot",
        title: "Real headshot only",
        type: "gate",
        gateCriteria: ["Professional photo shoot scheduled — no AI face as primary"],
      },
      {
        id: "calendar",
        title: "30-day calendar",
        type: "skill",
        skillId: "personal-brand.content.plan_personal_brand_calendar_30d",
      },
      {
        id: "batch",
        title: "Batch supporting visuals",
        type: "generate",
        jobType: "campaign_photo",
        promptTemplate: "Personal brand social template background, no faces, {{brand_colors}}",
      },
      {
        id: "platform",
        title: "Primary channel",
        type: "route",
        routeObjective: "personal_executive",
      },
    ],
    outputChecklist: ["30-day calendar", "Profile assets", "5 posts pre-scheduled"],
    relatedWorkflows: ["creator.weekly_production"],
  },
];

export const CREATOR_WORKFLOWS: WorkflowDefinition[] = [
  {
    id: "creator.weekly_production",
    title: "Creator weekly production",
    vertical: "creator",
    summary: "Plan → batch film → generate B-roll/thumbs → repurpose → publish → review.",
    whenToUse: ["Weekly content cadence", "YouTube-first creators"],
    whenNotToUse: ["One-off viral attempt without series plan"],
    estimatedMinutes: 480,
    primaryPlatforms: ["YouTube", "TikTok", "Instagram"],
    skillsUsed: [
      "creator.content.plan_creator_calendar_30d",
      "creator.content.batch_filming_day_plan",
      "creator.content.repurpose_long_to_short_clips",
    ],
    docPath: "creator/workflows/weekly-production.md",
    steps: [
      {
        id: "calendar",
        title: "Week plan",
        type: "skill",
        skillId: "creator.content.plan_creator_calendar_30d",
      },
      {
        id: "batch",
        title: "Batch filming day",
        type: "skill",
        skillId: "creator.content.batch_filming_day_plan",
      },
      {
        id: "thumb",
        title: "Thumbnail generation",
        type: "generate",
        jobType: "campaign_photo",
        promptTemplate: "YouTube thumbnail style, bold text space, high contrast, {{video_topic}}",
      },
      {
        id: "broll",
        title: "B-roll / motion",
        type: "generate",
        jobType: "image_to_video_social",
        promptTemplate: "Creator B-roll motion background, abstract, trendy",
        optional: true,
      },
      {
        id: "repurpose",
        title: "Long → short clips",
        type: "skill",
        skillId: "creator.content.repurpose_long_to_short_clips",
      },
      {
        id: "aspects",
        title: "Platform-native exports",
        type: "skill",
        skillId: "creator.social.export_platform_native_aspects",
      },
      {
        id: "review",
        title: "Weekly analytics",
        type: "skill",
        skillId: "creator.analytics.weekly_creator_analytics_review",
      },
    ],
    outputChecklist: ["1 long-form", "3+ shorts", "Thumbnails", "Analytics notes"],
    relatedWorkflows: ["personal-brand.thirty_day"],
  },
];
