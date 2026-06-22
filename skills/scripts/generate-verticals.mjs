#!/usr/bin/env node
/** Generate personal-brand, product-brand, creator, and media skill packs */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const SKILLS = join(dirname(fileURLToPath(import.meta.url)), "..");

function skill(pack, domain, slug, title, tier, purpose, related = []) {
  const id = `${pack}.${domain}.${slug}`;
  const dir = join(SKILLS, pack.replace(/\./g, "-") === pack ? pack : pack);
  // pack names: personal-brand, product-brand, creator, media
  const packDir = join(SKILLS, pack);
  if (!existsSync(packDir)) mkdirSync(packDir, { recursive: true });

  const md = `---
id: ${id}
tier: ${tier}
vertical: ${pack}
title: ${JSON.stringify(title)}
inputs: []
outputs: []
related: [${related.join(", ")}]
---

# ${title}

## Purpose

${purpose}

## Steps

1. Load client brand tokens and vertical profile if applicable.
2. Execute per ${pack}/INDEX.md decision tree.
3. Route media via \`media.router.route_generation_request\` when assets need AI generation.
4. Run \`brand-system.qa.run_token_lint_on_asset\` before publish.

## Related

${related.map((r) => `- \`${r}\``).join("\n") || "- See INDEX.md"}
`;
  writeFileSync(join(packDir, `${slug}.md`), md);
  return id;
}

const personalBrand = [
  ["strategy", "define_personal_brand_positioning", "Define personal brand positioning", "foundation", "Clarify niche, audience, and promise for a creator or executive brand."],
  ["strategy", "define_signature_story", "Define signature story", "foundation", "Craft origin story and transformation arc for all content."],
  ["identity", "design_personal_logo_mark", "Design personal logo mark", "production", "Simple mark or monogram for personal brand — often SVG via Quiver."],
  ["identity", "define_personal_color_palette", "Define personal color palette", "foundation", "3–5 colors mapped to semantic tokens."],
  ["identity", "define_personal_typography_pairing", "Define personal typography pairing", "foundation", "Display + body fonts for consistent personal presence."],
  ["social", "optimize_linkedin_banner", "Optimize LinkedIn banner", "production", "1584×396 banner aligned to positioning."],
  ["social", "optimize_instagram_bio", "Optimize Instagram bio", "production", "Bio, link, and highlight cover system."],
  ["social", "design_link_in_bio_page", "Design link-in-bio page", "production", "Single landing for all personal CTAs."],
  ["content", "map_content_pillars_personal", "Map content pillars personal", "production", "3–5 recurring themes for posting cadence."],
  ["content", "plan_personal_brand_calendar_30d", "Plan personal brand calendar 30d", "production", "30-day content plan across platforms."],
  ["content", "write_ghostwriting_voice_guide", "Write ghostwriting voice guide", "foundation", "Do/don't for assistants and AI drafting."],
  ["media", "direct_personal_headshot_shoot", "Direct personal headshot shoot", "production", "Shot list and art direction for headshots."],
  ["media", "create_speaker_one_sheet", "Create speaker one sheet", "production", "PDF for booking talks and podcasts."],
  ["media", "create_personal_media_kit", "Create personal media kit", "production", "Photos, bio lengths, logos for press."],
  ["media", "design_podcast_cover_personal", "Design podcast cover personal", "production", "Podcast artwork system."],
  ["media", "design_youtube_channel_art", "Design YouTube channel art", "production", "Banner + profile template."],
  ["media", "design_newsletter_header", "Design newsletter header", "production", "Email header matching personal tokens."],
  ["ops", "personal_brand_consistency_audit", "Personal brand consistency audit", "qa", "Monthly audit of profiles vs tokens."],
  ["ops", "personal_rebrand_phase_plan", "Personal rebrand phase plan", "ops", "Phased rollout without audience confusion."],
  ["ops", "creator_rate_card_template", "Creator rate card template", "production", "Pricing sheet for brand deals."],
  ["ops", "collaboration_outreach_template", "Collaboration outreach template", "production", "DM/email templates for partnerships."],
];

const productBrand = [
  ["strategy", "define_product_positioning", "Define product positioning", "foundation", "Category, audience, differentiation for a product line."],
  ["strategy", "product_naming_workflow", "Product naming workflow", "foundation", "Generate, shortlist, and legal-check names."],
  ["identity", "define_product_brand_tokens", "Define product brand tokens", "foundation", "Extend or fork parent brand tokens for SKU."],
  ["identity", "design_product_logo_system", "Design product logo system", "production", "Product mark + lockups with parent brand."],
  ["packaging", "write_packaging_design_brief", "Write packaging design brief", "production", "Dielines, materials, shelf constraints."],
  ["packaging", "design_dtc_shopify_brand_kit", "Design DTC Shopify brand kit", "production", "Theme tokens + product page components."],
  ["photo", "write_product_photography_brief", "Write product photography brief", "production", "Hero, lifestyle, detail shots for launch."],
  ["photo", "design_sku_variant_system", "Design SKU variant system", "production", "Color/size variants in DAM and templates."],
  ["launch", "plan_product_launch_teaser", "Plan product launch teaser", "production", "Tease → reveal → availability arc."],
  ["launch", "design_unboxing_experience", "Design unboxing experience", "production", "Insert cards, tissue, QR flows."],
  ["launch", "create_product_demo_video_script", "Create product demo video script", "production", "60–90s demo script + shot list."],
  ["launch", "crowdfunding_campaign_visuals", "Crowdfunding campaign visuals", "production", "Kickstarter/Indiegogo asset set."],
  ["marketplace", "optimize_amazon_a_plus_content", "Optimize Amazon A+ content", "production", "A+ modules and brand story."],
  ["marketplace", "design_app_store_screenshots", "Design app store screenshots", "production", "Device frames + caption system."],
  ["marketplace", "product_hunt_launch_kit", "Product Hunt launch kit", "production", "Gallery, maker comment, social set."],
  ["creator", "write_ugc_brief_for_product", "Write UGC brief for product", "production", "Brief for creators companies hire for product content."],
  ["creator", "design_influencer_seeding_kit", "Design influencer seeding kit", "production", "Unboxing note, hashtags, disclosure."],
  ["creator", "whop_gumroad_product_page", "Whop Gumroad product page", "production", "Digital product page for creator-sold products."],
  ["saas", "define_saas_ui_tokens", "Define SaaS UI tokens", "foundation", "Product UI extends marketing brand."],
  ["saas", "design_pricing_page", "Design pricing page", "production", "Tier cards, comparison, FAQ."],
  ["saas", "feature_naming_system", "Feature naming system", "foundation", "Consistent naming for releases."],
  ["ops", "product_brand_guidelines_pdf", "Product brand guidelines PDF", "production", "Export tokens + usage for vendors."],
  ["ops", "merch_line_extension", "Merch line extension", "production", "Apparel/merch under product brand."],
];

const creator = [
  ["strategy", "define_creator_niche", "Define creator niche", "foundation", "Audience, promise, and content wedge."],
  ["strategy", "define_creator_monetization_stack", "Define creator monetization stack", "foundation", "Ads, subs, products, sponsors map."],
  ["content", "plan_creator_calendar_30d", "Plan creator calendar 30d", "production", "Platform-native 30-day plan."],
  ["content", "build_hook_formula_library", "Build hook formula library", "foundation", "Reusable hooks for short-form."],
  ["content", "script_short_form_video", "Script short form video", "production", "30–60s script with hook and CTA."],
  ["content", "write_long_form_youtube_script", "Write long form YouTube script", "production", "Retention-structured YouTube script."],
  ["content", "repurpose_long_to_short_clips", "Repurpose long to short clips", "production", "Extract clips from long video."],
  ["content", "batch_filming_day_plan", "Batch filming day plan", "ops", "Shot list for batch content day."],
  ["social", "design_thumbnail_ab_system", "Design thumbnail A/B system", "production", "Thumbnail variants for testing."],
  ["social", "export_platform_native_aspects", "Export platform native aspects", "production", "9:16, 1:1, 16:9 export matrix."],
  ["social", "caption_style_guide_creator", "Caption style guide creator", "foundation", "On-screen text and caption rules."],
  ["social", "trend_scan_weekly", "Trend scan weekly", "production", "Weekly trend adaptation without losing brand."],
  ["business", "build_creator_media_kit", "Build creator media kit", "production", "Stats, rates, case studies for brands."],
  ["business", "sponsorship_disclosure_compliance", "Sponsorship disclosure compliance", "qa", "FTC/FAA-style disclosure on paid posts."],
  ["business", "brand_deal_negotiation_checklist", "Brand deal negotiation checklist", "ops", "Usage rights, exclusivity, whitelisting."],
  ["business", "affiliate_link_placement_guide", "Affiliate link placement guide", "production", "Where and how to place affiliate CTAs."],
  ["business", "hire_editor_brief", "Hire editor brief", "ops", "Brief for outsourcing editing."],
  ["product", "launch_creator_digital_product", "Launch creator digital product", "production", "Course, template pack, preset launch."],
  ["product", "collab_with_brand_on_product", "Collab with brand on product", "production", "Co-branded product workflow (companies + creators)."],
  ["product", "design_course_launch_visuals", "Design course launch visuals", "production", "Sales page, emails, social for course."],
  ["product", "lead_magnet_funnel_visuals", "Lead magnet funnel visuals", "production", "Opt-in, thank-you, nurture graphics."],
  ["live", "design_live_stream_overlay_kit", "Design live stream overlay kit", "production", "OBS/stream overlays on-brand."],
  ["live", "podcast_clip_extraction_workflow", "Podcast clip extraction workflow", "production", "Audiogram + clip templates."],
  ["media", "ai_assisted_b_roll_generation", "AI assisted B-roll generation", "production", "Use media router for supplemental B-roll."],
  ["media", "ai_voiceover_workflow", "AI voiceover workflow", "production", "ElevenLabs or similar for VO."],
  ["analytics", "weekly_creator_analytics_review", "Weekly creator analytics review", "ops", "Review retention, CTR, conversion."],
  ["community", "community_post_engagement_system", "Community post engagement system", "production", "Community tab / Discord visuals."],
];

const mediaSkills = [
  ["router", "route_generation_request", "Route generation request", "foundation", "Central router — picks provider by model id and cost."],
  ["router", "estimate_generation_cost", "Estimate generation cost", "foundation", "Credits/cost before running job."],
  ["router", "poll_job_status", "Poll job status", "production", "Poll /v1/media/generations/{id} until complete."],
  ["router", "failover_provider_chain", "Failover provider chain", "production", "Primary → fallback provider on failure."],
  ["higgsfield", "text_to_image", "Higgsfield text to image", "production", "Seedream, FLUX, Soul via Higgsfield Cloud."],
  ["higgsfield", "image_to_video_dop", "Higgsfield image to video DoP", "production", "DoP turbo camera motion on still."],
  ["higgsfield", "kling_video_generate", "Higgsfield Kling video generate", "production", "Kling v3 via Higgsfield endpoint."],
  ["higgsfield", "veo_video_generate", "Higgsfield Veo video generate", "production", "Google Veo 3.1 via Higgsfield."],
  ["higgsfield", "soul_character_train", "Higgsfield Soul character train", "production", "Train face-faithful Soul ID."],
  ["higgsfield", "marketing_studio_generate", "Higgsfield Marketing Studio generate", "production", "Branded marketing assets via Marketing Studio."],
  ["higgsfield", "sync_model_catalog_cli", "Higgsfield sync model catalog CLI", "ops", "Run higgsfield model list → update catalog.ts."],
  ["higgsfield", "cli_generate_wrapper", "Higgsfield CLI generate wrapper", "ops", "Shell out to higgsfield CLI for batch jobs."],
  ["openai", "gpt_image_generate", "OpenAI GPT image generate", "production", "openai/gpt-image-1 via media API."],
  ["quiver", "svg_generate_via_media_api", "Quiver SVG generate via media API", "production", "quiver/arrow models via unified API."],
  ["video", "heygen_avatar_video", "HeyGen avatar video", "production", "Talking head / avatar explainer videos."],
  ["video", "runway_video_route", "Runway video route", "production", "Runway Gen via API when configured."],
  ["audio", "elevenlabs_voice_generate", "ElevenLabs voice generate", "production", "TTS and voice clone for content."],
  ["image", "fal_ai_route", "fal.ai route", "production", "Fal.ai models as optional provider."],
  ["image", "replicate_route", "Replicate route", "production", "Replicate model runner integration."],
  ["image", "remove_background_api", "Remove background API", "production", "remove.bg or equivalent."],
  ["image", "upscale_image_api", "Upscale image API", "production", "Upscale for print and hero assets."],
  ["research", "perplexity_research_brief", "Perplexity research brief", "production", "Trend and competitor research input."],
  ["ops", "validate_api_keys_env", "Validate API keys env", "ops", "Check HIGGSFIELD, OPENAI, etc. at startup."],
  ["ops", "rate_limit_media_jobs", "Rate limit media jobs", "ops", "Per-org concurrency and daily caps."],
  ["ops", "cache_generation_results", "Cache generation results", "ops", "Dedupe identical prompts in DAM."],
  ["ops", "brand_lint_after_generation", "Brand lint after generation", "qa", "Token lint before saving to project."],
];

for (const [d, s, t, tier, p] of personalBrand) skill("personal-brand", d, s, t, tier, p, ["brand-system.tokens.define_design_tokens"]);
for (const [d, s, t, tier, p] of productBrand) skill("product-brand", d, s, t, tier, p, ["brand-system.tokens.define_design_tokens"]);
for (const [d, s, t, tier, p] of creator) skill("creator", d, s, t, tier, p, ["media.router.route_generation_request"]);
for (const [d, s, t, tier, p] of mediaSkills) skill("media", d, s, t, tier, p, ["platform.brand_studio.route_media_generation"]);

// INDEX files
function writeIndex(pack, title, domains) {
  const lines = domains.map(([d, desc]) => `- **${d}/** — ${desc}`).join("\n");
  writeFileSync(
    join(SKILLS, pack, "INDEX.md"),
    `# ${title}\n\n${lines}\n\nManifest: \`npm run skills:update-registry\`\n`,
  );
}

writeIndex("personal-brand", "Personal Brand Skills", [
  ["strategy", "Positioning and story"],
  ["identity", "Mark, color, type"],
  ["social", "LinkedIn, Instagram, link-in-bio"],
  ["content", "Pillars and calendar"],
  ["media", "Headshots, kits, podcast/YouTube"],
  ["ops", "Audit and rebrand"],
]);

writeIndex("product-brand", "Product Brand Skills", [
  ["strategy", "Positioning and naming"],
  ["identity", "Product tokens and logo"],
  ["packaging", "Physical and DTC"],
  ["photo", "Product photography"],
  ["launch", "Teaser, demo, crowdfunding"],
  ["marketplace", "Amazon, App Store, Product Hunt"],
  ["creator", "UGC and influencer kits"],
  ["saas", "UI and pricing"],
  ["ops", "Guidelines and merch"],
]);

writeIndex("creator", "Creator Economy Skills", [
  ["strategy", "Niche and monetization"],
  ["content", "Scripts, hooks, repurposing"],
  ["social", "Thumbnails, aspects, trends"],
  ["business", "Media kit, deals, compliance"],
  ["product", "Digital products and brand collabs"],
  ["live", "Stream and podcast clips"],
  ["media", "AI B-roll and voiceover"],
  ["analytics", "Weekly review"],
  ["community", "Engagement system"],
]);

writeIndex("media", "Media Generator Integration Skills", [
  ["router", "Unified API routing"],
  ["higgsfield", "Higgsfield Cloud clone surface"],
  ["openai", "OpenAI images"],
  ["quiver", "SVG vector"],
  ["video", "HeyGen, Runway"],
  ["audio", "ElevenLabs"],
  ["image", "Fal, Replicate, upscale"],
  ["research", "Perplexity"],
  ["ops", "Keys, limits, cache, lint"],
]);

// Workflows
const workflows = {
  "personal-brand": `# Personal Brand Launch Workflow\n\n1. brand-system.strategy.define_brand_strategy_tier\n2. personal-brand.strategy.define_personal_brand_positioning\n3. personal-brand.identity.* → tokens\n4. personal-brand.content.plan_personal_brand_calendar_30d\n5. media.router.route_generation_request for assets\n6. brand-system.qa.run_token_lint_on_asset\n`,
  "product-brand": `# Product Launch Workflow\n\n1. product-brand.strategy.define_product_positioning\n2. product-brand.identity.define_product_brand_tokens\n3. product-brand.photo.write_product_photography_brief\n4. product-brand.launch.plan_product_launch_teaser\n5. creator.product.collab_with_brand_on_product (if UGC)\n6. media.higgsfield.marketing_studio_generate\n`,
  "creator": `# Creator Weekly Production Workflow\n\n1. creator.content.plan_creator_calendar_30d\n2. creator.content.batch_filming_day_plan\n3. media.router.route_generation_request\n4. creator.content.repurpose_long_to_short_clips\n5. creator.social.export_platform_native_aspects\n6. creator.analytics.weekly_creator_analytics_review\n`,
};

for (const [pack, content] of Object.entries(workflows)) {
  mkdirSync(join(SKILLS, pack, "workflows"), { recursive: true });
  writeFileSync(join(SKILLS, pack, "workflows", "launch.md"), content);
}

console.log("Generated verticals:", {
  personalBrand: personalBrand.length,
  productBrand: productBrand.length,
  creator: creator.length,
  media: mediaSkills.length,
});
