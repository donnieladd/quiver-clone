#!/usr/bin/env node
/**
 * Corporate, PMM, fashion-luxury, editorial, marketing-stack skill packs
 */
import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function skill(pack, domain, slug, title, tier, purpose, related = []) {
  const id = `${pack}.${domain}.${slug}`;
  const dir = join(ROOT, pack);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
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

## AI + platform

See \`marketing-stack.platform.select_platform_for_objective\` and \`marketing-stack.ai.route_tool_for_job\` before generating assets.

## Steps

1. Load brand tokens (\`brand-system/*\`) and vertical playbook.
2. Select platform + AI tool from marketing-stack INDEX.
3. Execute workflow in \`${pack}/workflows/\`.
4. \`media.router.route_generation_request\` → \`brand-system.qa.run_token_lint_on_asset\`.
`;
  writeFileSync(join(dir, `${slug}.md`), md);
}

const corporate = [
  ["strategy", "define_corporate_brand_architecture", "Define corporate brand architecture", "foundation", "Parent brand, divisions, subsidiaries, co-brand rules for enterprise."],
  ["strategy", "map_stakeholder_messaging_matrix", "Map stakeholder messaging matrix", "foundation", "Investors, employees, customers, press — message per audience."],
  ["content", "write_annual_report_narrative", "Write annual report narrative", "production", "Chairman letter + business highlights for AR."],
  ["content", "design_earnings_visual_summary", "Design earnings visual summary", "production", "Quarterly results one-pager for social/investor."],
  ["content", "employer_branding_campaign", "Employer branding campaign", "production", "Recruitment and culture marketing, not consumer ads."],
  ["content", "internal_comms_visual_system", "Internal comms visual system", "foundation", "Town hall, intranet, Slack headers — on-brand."],
  ["content", "executive_thought_leadership_program", "Executive thought leadership program", "production", "CEO/CMO LinkedIn, bylines, conference keynotes."],
  ["content", "csr_esg_storytelling", "CSR ESG storytelling", "production", "Sustainability and impact reports with dignity."],
  ["sales", "sales_enablement_deck_system", "Sales enablement deck system", "production", "Master deck + modular slides for AEs."],
  ["sales", "case_study_production_workflow", "Case study production workflow", "production", "Customer story: interview → PDF → web → social."],
  ["sales", "rfp_response_visual_standards", "RFP response visual standards", "production", "Proposal template system for enterprise sales."],
  ["events", "corporate_event_brand_system", "Corporate event brand system", "production", "Conference booth, signage, keynote deck."],
  ["events", "webinar_production_kit", "Webinar production kit", "production", "Registration, reminders, slides, follow-up."],
  ["pr", "press_release_visual_companion", "Press release visual companion", "production", "Hero image + social cutdown for news."],
  ["pr", "crisis_comms_hold_message_templates", "Crisis comms hold message templates", "foundation", "Pre-approved visual + copy shells."],
  ["digital", "corporate_website_information_architecture", "Corporate website information architecture", "foundation", "About, leadership, investors, careers IA."],
  ["digital", "linkedin_company_page_system", "LinkedIn company page system", "production", "B2B primary — banner, posts, life tab."],
  ["ops", "brand_governance_committee_charter", "Brand governance committee charter", "ops", "Who approves what in enterprise org."],
  ["ops", "agency_of_record_brief", "Agency of record brief", "ops", "Brief external AOR with token export."],
  ["ops", "dam_taxonomy_enterprise", "DAM taxonomy enterprise", "ops", "Folder rules for global + regional assets."],
];

const pmm = [
  ["strategy", "write_positioning_and_messaging_doc", "Write positioning and messaging doc", "foundation", "Classic PMM: category, differentiation, pillars, proof."],
  ["strategy", "build_buyer_persona_research_synthesis", "Build buyer persona research synthesis", "foundation", "Jobs, pains, objections from research."],
  ["strategy", "competitive_battlecard_system", "Competitive battlecard system", "production", "Sales-ready competitor comparisons."],
  ["launch", "gtm_launch_tier_selection", "GTM launch tier selection", "foundation", "Tier 1/2/3 launch — asset scope by tier."],
  ["launch", "launch_narrative_and_hook", "Launch narrative and hook", "production", "One sentence + story arc for release."],
  ["launch", "sales_launch_kit", "Sales launch kit", "production", "One-pager, deck, email, talk track for sales."],
  ["launch", "customer_announcement_email_sequence", "Customer announcement email sequence", "production", "Existing user comms for feature/product launch."],
  ["launch", "analyst_and_press_briefing_kit", "Analyst and press briefing kit", "production", "Briefing doc + FAQ for launch."],
  ["content", "product_demo_storyboard", "Product demo storyboard", "production", "Demo flow for video and live."],
  ["content", "feature_adoption_campaign", "Feature adoption campaign", "production", "Post-launch adoption, not awareness."],
  ["content", "changelog_to_marketing_repurpose", "Changelog to marketing repurpose", "production", "Ship notes → blog, social, email."],
  ["content", "comparison_landing_page", "Comparison landing page", "production", "Us vs competitor SEO/SEM page."],
  ["enablement", "objection_handling_one_pagers", "Objection handling one pagers", "production", "Visual one-pagers per top objection."],
  ["enablement", "pricing_and_packaging_visual", "Pricing and packaging visual", "production", "Tier cards aligned to positioning."],
  ["analytics", "launch_metrics_dashboard_spec", "Launch metrics dashboard spec", "ops", "Awareness, activation, pipeline KPIs."],
  ["analytics", "win_loss_interview_synthesis", "Win loss interview synthesis", "production", "Turn interviews into messaging updates."],
  ["ai", "ai_generate_pmm_draft_from_prd", "AI generate PMM draft from PRD", "production", "PRD → positioning draft with human edit gate."],
  ["ai", "ai_synthetic_user_quotes_guardrails", "AI synthetic user quotes guardrails", "qa", "Never fake testimonials — rules for AI copy."],
];

const fashion = [
  ["strategy", "define_luxury_brand_codes", "Define luxury brand codes", "foundation", "Heritage, craftsmanship, scarcity, world-building."],
  ["strategy", "season_narrative_concept", "Season narrative concept", "foundation", "SS/FW story — one poetic concept per season."],
  ["campaign", "lookbook_art_direction_brief", "Lookbook art direction brief", "production", "Photographer, styling, location, light."],
  ["campaign", "runway_to_retail_campaign_bridge", "Runway to retail campaign bridge", "production", "Show moment → accessible retail creative."],
  ["campaign", "capsule_drop_hype_sequence", "Capsule drop hype sequence", "production", "Tease → drop → sellout → archive."],
  ["campaign", "collaboration_co_brand_announcement", "Collaboration co-brand announcement", "production", "Luxury × luxury or luxury × street collab."],
  ["editorial", "fashion_editorial_layout_system", "Fashion editorial layout system", "production", "Grid, full-bleed, type-over-image rules."],
  ["editorial", "ecommerce_pdp_premium_template", "Ecommerce PDP premium template", "production", "Product detail — gallery, copy, size guide."],
  ["editorial", "journal_content_format", "Journal content format", "production", "Brand journal / magazine long-form."],
  ["social", "instagram_reels_fashion_native", "Instagram Reels fashion native", "production", "Motion, sound, pacing for fashion Reels."],
  ["social", "tiktok_fashion_discovery_hooks", "TikTok fashion discovery hooks", "production", "Hook patterns for discovery algorithm."],
  ["social", "pinterest_seasonal_boards", "Pinterest seasonal boards", "production", "Seasonal inspiration boards for traffic."],
  ["print", "luxury_invitation_and_event_print", "Luxury invitation and event print", "production", "Emboss, foil, paper stock specs."],
  ["print", "packaging_unboxing_luxury", "Packaging unboxing luxury", "production", "Box, tissue, ribbon, scent — full ritual."],
  ["retail", "visual_merchandising_guidelines", "Visual merchandising guidelines", "production", "Window, table, rail standards."],
  ["retail", "flagship_store_digital_companion", "Flagship store digital companion", "production", "QR, app, in-store screen content."],
  ["ai", "ai_look_generation_moodboard", "AI look generation moodboard", "production", "Generate mood refs — human shoot still primary."],
  ["ai", "ai_on_model_vs_ghost_mannequin_policy", "AI on-model vs ghost mannequin policy", "qa", "When AI product shots are allowed."],
  ["ops", "model_release_and_usage_rights", "Model release and usage rights", "qa", "Fashion-specific rights management."],
  ["ops", "sample_tracking_campaign_assets", "Sample tracking campaign assets", "ops", "Sample loans for shoots and influencers."],
];

const editorial = [
  ["strategy", "define_editorial_voice_and_pillars", "Define editorial voice and pillars", "foundation", "Magazine voice distinct from brand voice."],
  ["strategy", "content_pillar_research_backed", "Content pillar research backed", "foundation", "Pillars from search intent + audience need."],
  ["seo", "topic_cluster_and_pillar_page_plan", "Topic cluster and pillar page plan", "foundation", "Hub-spoke SEO architecture."],
  ["seo", "programmatic_seo_governance", "Programmatic SEO governance", "ops", "When/how to scale pages without spam."],
  ["seo", "search_intent_content_brief", "Search intent content brief", "production", "Brief writer from SERP analysis."],
  ["writing", "long_form_article_structure", "Long form article structure", "production", "H2/H3, pull quotes, CTA placement."],
  ["writing", "executive_byline_ghostwriting", "Executive byline ghostwriting", "production", "Fortune/HBR-style bylines."],
  ["writing", "newsletter_edition_template", "Newsletter edition template", "production", "Recurring editorial newsletter format."],
  ["visual", "editorial_hero_typography", "Editorial hero typography", "production", "Site Inspire tier — type-led heroes."],
  ["visual", "data_visualization_brand_style", "Data visualization brand style", "production", "Charts and infographics on-brand."],
  ["visual", "quote_pull_and_callout_system", "Quote pull and callout system", "production", "Pull quotes, sidebars, key stats."],
  ["distribution", "organic_social_teaser_ladder", "Organic social teaser ladder", "production", "Article → thread → carousel → quote cards."],
  ["distribution", "syndication_and_republish_rules", "Syndication and republish rules", "ops", "Medium, LinkedIn, partner republish."],
  ["distribution", "podcast_and_video_derivative", "Podcast and video derivative", "production", "Article → audio → short video."],
  ["ai", "ai_outline_from_keyword_research", "AI outline from keyword research", "production", "Ahrefs/Semrush data → outline draft."],
  ["ai", "ai_fact_check_and_citation_gate", "AI fact check and citation gate", "qa", "No publish without sources for claims."],
  ["ai", "ai_refresh_decaying_content", "AI refresh decaying content", "production", "Identify and update stale SEO pages."],
  ["analytics", "content_performance_review_quarterly", "Content performance review quarterly", "ops", "Traffic, rank, conversion by pillar."],
];

const stack = [
  ["platform", "select_platform_for_objective", "Select platform for objective", "foundation", "Objective → primary channel (B2B LinkedIn, fashion IG, etc.)."],
  ["platform", "corporate_channel_matrix", "Corporate channel matrix", "foundation", "Enterprise: LinkedIn, email, events, PR — priority order."],
  ["platform", "fashion_channel_matrix", "Fashion channel matrix", "foundation", "IG, TikTok, Pinterest, journal, retail."],
  ["platform", "editorial_channel_matrix", "Editorial channel matrix", "foundation", "SEO blog, newsletter, podcast, syndication."],
  ["platform", "creator_commerce_channel_matrix", "Creator commerce channel matrix", "foundation", "Where creators sell — Whop, TikTok Shop, etc."],
  ["ai", "route_tool_for_job", "Route AI tool for job", "foundation", "Master router: job type → provider + model id."],
  ["ai", "image_generation_tool_matrix", "Image generation tool matrix", "foundation", "When Higgsfield vs OpenAI vs Midjourney vs local."],
  ["ai", "video_generation_tool_matrix", "Video generation tool matrix", "foundation", "Kling, Veo, DoP, HeyGen, Runway by use case."],
  ["ai", "copy_generation_tool_matrix", "Copy generation tool matrix", "foundation", "Claude/GPT/Gemini by task type."],
  ["ai", "voice_and_audio_tool_matrix", "Voice and audio tool matrix", "foundation", "ElevenLabs, etc."],
  ["ai", "research_tool_matrix", "Research tool matrix", "foundation", "Perplexity, Gemini workspace, manual SERP."],
  ["ai", "design_tool_matrix", "Design tool matrix", "foundation", "Figma, Canva, Brand Studio, Quiver SVG."],
  ["ai", "automation_stack_zapier_make", "Automation stack Zapier Make", "ops", "When to automate handoffs between tools."],
  ["ai", "cli_vs_api_vs_ui_decision", "CLI vs API vs UI decision", "foundation", "Batch → CLI; product → API; ad hoc → UI."],
  ["ops", "marketing_tool_budget_tiers", "Marketing tool budget tiers", "ops", "Starter / growth / enterprise stack."],
  ["ops", "api_key_vault_and_rotation", "API key vault and rotation", "ops", "Secure keys for all generators."],
  ["ops", "asset_handoff_figma_to_dam", "Asset handoff Figma to DAM", "ops", "Design → approved → DAM → channels."],
  ["ops", "weekly_marstack_review", "Weekly marstack review", "ops", "Review tools, costs, redundancies."],
  ["workflow", "end_to_end_campaign_orchestration", "End to end campaign orchestration", "production", "Brief → create → approve → publish → measure."],
  ["workflow", "ai_human_qa_gates", "AI human QA gates", "qa", "Mandatory human checkpoints by asset type."],
];

for (const [d, s, t, tier, p] of corporate)
  skill("corporate-marketing", d, s, t, tier, p, ["marketing-stack.platform.corporate_channel_matrix"]);
for (const [d, s, t, tier, p] of pmm)
  skill("product-marketing", d, s, t, tier, p, ["product-brand.strategy.define_product_positioning"]);
for (const [d, s, t, tier, p] of fashion)
  skill("fashion-luxury", d, s, t, tier, p, ["marketing-stack.platform.fashion_channel_matrix"]);
for (const [d, s, t, tier, p] of editorial)
  skill("editorial-marketing", d, s, t, tier, p, ["marketing-stack.platform.editorial_channel_matrix"]);
for (const [d, s, t, tier, p] of stack)
  skill("marketing-stack", d, s, t, tier, p, ["media.router.route_generation_request"]);

// Master map
writeFileSync(
  join(ROOT, "MARKETING_OS.md"),
  `# Marketing OS — The Full Map

You described a **top-to-bottom marketing system** with AI wired in. This is that map — you do not need to hold it in your head.

## Who is this for?

| If you are… | Start pack | Primary platforms | Primary AI |
|-------------|------------|-------------------|------------|
| **Corporate / B2B** | \`corporate-marketing/\` | LinkedIn, email, events, PR | Copy AI + Higgsfield for visuals |
| **Product marketer (PMM)** | \`product-marketing/\` | Web, sales deck, launch email | PRD → AI draft + human QA |
| **DTC / product brand** | \`product-brand/\` | Shopify, Amazon, PH | Marketing Studio, product photo AI |
| **Luxury / fashion** | \`fashion-luxury/\` | IG, TikTok, Pinterest, journal | Moodboard AI + human shoot |
| **Editorial / SEO content** | \`editorial-marketing/\` | Blog, newsletter, podcast | Research AI + fact-check gate |
| **Creator / personal** | \`creator/\`, \`personal-brand/\` | YouTube, TikTok, LinkedIn | Clip + B-roll + voice AI |
| **Church / mission** | \`church/\` | YouTube, IG, web | Story + Open Network kits |

## The stack (always)

\`\`\`
1. brand-system/          ← tokens, logos (every vertical)
2. marketing-stack/       ← which platform + which AI tool
3. [vertical pack]        ← corporate | pmm | fashion | editorial | …
4. media/                 ← execute generation (/v1/media)
5. brand-system.qa        ← lint before publish
\`\`\`

## AI integration (not one tool — a router)

Skill: \`marketing-stack.ai.route_tool_for_job\`

| Job | Default tool | API in this repo |
|-----|--------------|------------------|
| Logo, icon, vector | Quiver SVG | \`/v1/svgs/generations\` |
| Photo, campaign image | Higgsfield Seedream / FLUX | \`/v1/media/generations\` |
| Product video, motion | Higgsfield Kling / Veo / DoP | \`/v1/media/generations\` |
| Talking head | HeyGen (skill) | add provider |
| Voiceover | ElevenLabs (skill) | add provider |
| Long copy, positioning | Claude / GPT | external |
| Research, SERP | Perplexity | skill |
| Layout, UI | Figma + tokens | export skills |

## ADHD-friendly workflow

**One campaign = one folder in Brand Studio (future):**

\`\`\`
project/
  brief.md
  tokens → brand-system
  platform → marketing-stack decision (done for you)
  assets/  → generated + approved
\`\`\`

**Do not choose 50 tools.** Run \`marketing-stack.ai.route_tool_for_job\` — it picks.

## Vertical skill counts

See \`manifest.json\` after \`npm run skills:update-registry\`.

## Your vision (reflected back)

Traditional business marketing ✓ \`corporate-marketing/\`  
Product marketing (PMM) ✓ \`product-marketing/\`  
High-end fashion ✓ \`fashion-luxury/\`  
Editorial + big SEO/content ✓ \`editorial-marketing/\`  
AI + which platforms ✓ \`marketing-stack/\`  
Personal + creator + church ✓ already built  

All routes through **Brand Studio** + **Media Studio** (\`/app/studio\`).
`,
);

const indexes = {
  "corporate-marketing": "B2B enterprise, sales enablement, employer brand, PR, events",
  "product-marketing": "PMM: positioning, GTM launch, battlecards, sales kits",
  "fashion-luxury": "Luxury fashion, lookbooks, drops, retail, editorial fashion",
  "editorial-marketing": "SEO, long-form, newsletter, content pillars at scale",
  "marketing-stack": "Platform selection + AI tool routing for every job",
};

for (const [pack, desc] of Object.entries(indexes)) {
  writeFileSync(
    join(ROOT, pack, "INDEX.md"),
    `# ${pack}\n\n${desc}\n\nMaster map: [../MARKETING_OS.md](../MARKETING_OS.md)\n`,
  );
  mkdirSync(join(ROOT, pack, "workflows"), { recursive: true });
  writeFileSync(
    join(ROOT, pack, "workflows", "launch.md"),
    `# ${pack} workflow\n\n1. brand-system tokens\n2. marketing-stack platform + AI selection\n3. Execute skills in INDEX order\n4. media.router → QA → publish\n`,
  );
}

console.log("Marketing verticals:", {
  corporate: corporate.length,
  pmm: pmm.length,
  fashion: fashion.length,
  editorial: editorial.length,
  stack: stack.length,
});
