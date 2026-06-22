#!/usr/bin/env node
/**
 * Generates church/ministry media skill markdown files from embedded catalog.
 * Run: node skills/church/scripts/generate-skills.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

function skill(
  domain,
  slug,
  {
    title,
    purpose,
    tier = "production",
    inputs = [],
    outputs = [],
    related = [],
    whenToUse = "",
    whenNotToUse = "",
    steps = [],
    decisionRules = [],
    exportSpecs = "",
    qaChecks = [],
    examples = "",
  }
) {
  const id = `church.${domain}.${slug.replace(/\//g, ".")}`;
  return {
    id,
    domain,
    slug,
    file: `${slug.split("/").pop()}.md`,
    path: slug.includes("/") ? join(domain, ...slug.split("/")) : join(domain, slug),
    title,
    purpose,
    tier,
    inputs,
    outputs,
    related,
    whenToUse,
    whenNotToUse,
    steps,
    decisionRules,
    exportSpecs,
    qaChecks,
    examples,
  };
}

function renderMarkdown(s) {
  const fm = `---
id: ${s.id}
tier: ${s.tier}
vertical: church
title: ${JSON.stringify(s.title)}
inputs: [${s.inputs.join(", ")}]
outputs: [${s.outputs.join(", ")}]
related: [${s.related.join(", ")}]
---

# ${s.title}

## Purpose

${s.purpose}

## When to use

${s.whenToUse || "Apply when this task appears in an active church media workflow (see `INDEX.md`)."}

## When NOT to use

${s.whenNotToUse || "Skip when a higher-level workflow has not locked brand/series prerequisites, or when approval gates in `workflows/approval-governance.md` are not satisfied."}

## Inputs

${s.inputs.length ? s.inputs.map((i) => `- \`${i}\``).join("\n") : "- See workflow for required inputs."}

## Decision rules

${s.decisionRules.length ? s.decisionRules.map((r) => `- ${r}`).join("\n") : "- Follow brand guide and series kit when present.\n- Prefer template duplication over new layout.\n- Escalate theology-sensitive copy to pastoral review."}

## Steps

${s.steps.length ? s.steps.map((st, i) => `${i + 1}. ${st}`).join("\n") : "1. Confirm inputs and brand/series kit.\n2. Execute production per export specs.\n3. Run QA checks before handoff.\n4. Record approval status."}

## Export specs

${s.exportSpecs || "See `INDEX.md` platform format reference for dimensions and color space."}

## QA checks

${s.qaChecks.length ? s.qaChecks.map((q) => `- [ ] ${q}`).join("\n") : "- [ ] `church.qa.logo_and_color_compliance`\n- [ ] `church.qa.approval_status_recorded`"}

## Examples

${s.examples || "_Add church-specific examples when implementing this skill in production._"}

## Related skills

${s.related.length ? s.related.map((r) => `- \`${r}\``).join("\n") : "- See `INDEX.md` decision trees."}
`;
  return fm;
}

// --- Catalog builders ---

const brandSkills = [
  skill("brand", "write_mission_in_guide", {
    title: "Write mission and vision in brand guide",
    tier: "foundation",
    purpose: "Anchor all church media in stated mission, vision, and values so volunteers make consistent tone choices.",
    inputs: ["mission_statement", "vision_statement", "core_values_list"],
    outputs: ["brand_guide_section_pdf"],
    related: ["church.brand.define_voice_attributes", "church.brand.create_one_page_quick_guide"],
    whenToUse: "Creating or refreshing the church brand guide.",
    steps: [
      "Paste approved mission/vision from leadership (do not paraphrase without sign-off).",
      "List 3–7 values with one-sentence behavioral definitions each.",
      "Add 'what we sound like' examples for social and stage.",
      "Publish to brand hub and Canva kit description field.",
    ],
    qaChecks: ["Leadership signed PDF", "Matches website About page"],
  }),
  skill("brand", "define_voice_attributes", {
    title: "Define brand voice attributes",
    tier: "foundation",
    purpose: "Translate theology and culture into 3–5 voice adjectives (e.g. welcoming, bold, hopeful).",
    inputs: ["mission_vision", "congregation_demographics"],
    outputs: ["voice_chart_md"],
    related: ["church.brand.write_messaging_do_dont"],
  }),
  skill("brand", "write_messaging_do_dont", {
    title: "Write messaging do and don't examples",
    tier: "foundation",
    purpose: "Give volunteers concrete copy examples instead of abstract brand adjectives.",
    inputs: ["voice_attributes"],
    outputs: ["do_dont_table"],
    related: ["church.qa.theology_sensitive_language"],
  }),
  skill("brand", "setup_canva_brand_kit", {
    title: "Set up Canva brand kit",
    tier: "foundation",
    purpose: "Lock logos, colors, and fonts so volunteers cannot drift off-brand.",
    inputs: ["logo_files", "hex_palette", "font_names"],
    outputs: ["canva_brand_kit_configured"],
    related: ["church.ops.train_volunteers_duplicate_templates"],
    steps: [
      "Upload primary, reversed, and submark logos.",
      "Add hex colors only (no unnamed swatches).",
      "Add max 2–3 font pairs with usage notes in kit description.",
      "Restrict brand kit editing to comms staff.",
    ],
  }),
  skill("brand", "define_template_folder_structure", {
    title: "Define template folder structure",
    tier: "foundation",
    purpose: "Standardize where templates live: Social, Slides, Print, Series, Archive.",
    inputs: ["dam_or_canva_team"],
    outputs: ["folder_tree_doc"],
    related: ["church.ops.publish_series_kit_to_dam"],
  }),
  skill("brand", "document_logo_clear_space", {
    title: "Document logo clear space and minimum size",
    tier: "foundation",
    purpose: "Prevent illegible logo usage on social avatars and bulletins.",
    inputs: ["logo_master"],
    outputs: ["logo_usage_page"],
    related: ["church.qa.logo_and_color_compliance"],
    exportSpecs: "Digital min height 32px favicon; social avatar 400×400 center mark.",
  }),
  skill("brand", "design_submark_for_social_avatar", {
    title: "Design submark for social avatar",
    tier: "foundation",
    purpose: "Simplified mark readable at 32–64px for Instagram/Facebook profile photos.",
    inputs: ["primary_logo"],
    outputs: ["avatar_400x400_png"],
    related: ["church.brand.document_logo_clear_space"],
  }),
  skill("brand", "select_typeface_for_projection", {
    title: "Select typeface for projection legibility",
    tier: "foundation",
    purpose: "Choose sans-serif fonts with robust weights for sanctuary screens.",
    inputs: ["brand_fonts", "projector_resolution"],
    outputs: ["type_recommendation"],
    decisionRules: [
      "Prefer sans-serif for lyrics and sermon points.",
      "Avoid thin weights below 1080p.",
      "License fonts for worship streaming if applicable.",
    ],
    related: ["church.qa.projection_legibility"],
  }),
  skill("brand", "create_one_page_quick_guide", {
    title: "Create one-page quick brand guide",
    tier: "foundation",
    purpose: "Single PDF volunteers can pin: logo, colors, fonts, do/don't.",
    inputs: ["full_brand_guide"],
    outputs: ["quick_guide_pdf"],
    related: ["church.brand.setup_canva_brand_kit"],
  }),
  skill("brand", "define_photography_style", {
    title: "Define photography style for church",
    tier: "foundation",
    purpose: "Document candid vs staged, diversity representation, and editing look.",
    inputs: ["brand_mood", "sample_photos"],
    outputs: ["photo_style_guide"],
    related: ["church.social.production.swap_photo_keep_layout"],
  }),
  skill("brand", "define_subbrand_ministries", {
    title: "Define sub-brand rules for ministries",
    tier: "foundation",
    purpose: "Kids, youth, worship album releases may have accent colors but share master logo.",
    inputs: ["ministry_list"],
    outputs: ["subbrand_rules_md"],
    related: ["church.env.design_child_ministry_visual_system"],
  }),
  skill("brand", "align_brand_to_denominational_guidelines", {
    title: "Align brand to denominational guidelines",
    tier: "foundation",
    purpose: "When denomination supplies marks or copy requirements, integrate without breaking local identity.",
    inputs: ["denominational_assets"],
    outputs: ["compliance_checklist"],
    related: ["church.qa.logo_and_color_compliance"],
  }),
  skill("brand", "create_brand_hub_url", {
    title: "Create digital brand hub URL",
    tier: "foundation",
    purpose: "Single link for staff/volunteers: guides, templates, request forms.",
    inputs: ["all_brand_assets"],
    outputs: ["brand_hub_link"],
    related: ["church.ops.create_asset_request_form"],
  }),
  skill("brand", "define_welcoming_vs_bold_tone", {
    title: "Define welcoming vs bold tone for outreach",
    tier: "foundation",
    purpose: "Calibrate visual boldness for invite cards vs internal comms.",
    inputs: ["church_culture_assessment"],
    outputs: ["tone_spectrum_doc"],
    related: ["church.brand.define_voice_attributes"],
  }),
  skill("brand", "avoid_cliche_religious_symbols", {
    title: "Avoid cliché religious symbol overload",
    tier: "foundation",
    purpose: "Reduce generic crosses/doves when they don't differentiate the church.",
    inputs: ["concept_moodboard"],
    outputs: ["symbol_rationale"],
    decisionRules: [
      "Use symbols only when tied to series meaning.",
      "Prefer typography-led or photography-led identity when appropriate.",
    ],
    related: ["church.series.design_key_art"],
  }),
  skill("brand", "license_fonts_for_team", {
    title: "License fonts for team and streaming",
    tier: "foundation",
    purpose: "Ensure worship streaming and Canva use legal font licenses.",
    inputs: ["font_choices"],
    outputs: ["license_record"],
    related: ["church.brand.select_typeface_for_projection"],
  }),
  skill("brand", "define_color_semantic_meanings", {
    title: "Define semantic color meanings",
    tier: "foundation",
    purpose: "Map primary/accent/neutral to CTAs, scripture blocks, alerts.",
    inputs: ["hex_palette"],
    outputs: ["semantic_color_doc"],
    related: ["church.qa.logo_and_color_compliance"],
  }),
  skill("brand", "handoff_brand_to_series_team", {
    title: "Hand off brand to series creative team",
    tier: "foundation",
    purpose: "Transfer locked brand kit before any series art exploration.",
    inputs: ["brand_kit_link"],
    outputs: ["handoff_checklist_signed"],
    related: ["church.series.define_series_creative_brief"],
  }),
];

const seriesSlugs = [
  ["define_series_creative_brief", "Define series creative brief", "foundation"],
  ["design_key_art", "Design series key art", "production"],
  ["design_title_treatment", "Design series title treatment", "production"],
  ["define_series_color_palette", "Define series color palette override", "production"],
  ["create_motion_background_set", "Create motion background set for series", "production"],
  ["design_stage_slide_master", "Design stage slide master for series", "production"],
  ["launch_asset_kit_checklist", "Run series launch asset kit checklist", "production"],
  ["archive_series_assets", "Archive series assets after end", "ops"],
  ["design_week_specific_variant", "Design week-specific art variant", "production"],
  ["create_countdown_to_series", "Create countdown graphics to series start", "production"],
  ["design_series_logo_lockup", "Design series logo lockup with church mark", "production"],
  ["export_key_art_sizes", "Export key art size variants", "production"],
  ["test_key_art_on_stage_photo", "Test key art on stage photo mockup", "qa"],
  ["document_series_typography", "Document series typography rules", "production"],
  ["create_series_pattern_library", "Create series pattern library", "production"],
  ["design_offering_series_slide", "Design offering slide in series style", "production"],
  ["design_baptism_weekend_variant", "Design baptism weekend series variant", "production"],
  ["sync_series_to_planning_center", "Sync series metadata to Planning Center", "ops"],
  ["create_series_qr_code_graphic", "Create QR code graphic for series resources", "production"],
  ["design_parking_signage_series", "Design parking signage for series event", "env"],
  ["review_series_with_teaching_pastor", "Review series art with teaching pastor", "ops"],
  ["rollback_series_kit_version", "Rollback series kit to prior version", "ops"],
  ["extend_series_art_for_one_week", "Extend series art for bonus week", "production"],
  ["merge_two_series_brands_transition", "Merge two series brands for transition week", "production"],
];

const seriesSkills = seriesSlugs.map(([slug, title, tier]) =>
  skill("series", slug, {
    title,
    tier,
    purpose: `${title} for multi-week sermon series branding.`,
    inputs: ["series_creative_brief", "brand_kit"],
    outputs: ["series_asset"],
    related: ["church.workflow.series_launch", "church.series.design_key_art"],
    relatedOverride: undefined,
  })
);

// Fix related for series
seriesSkills.forEach((s) => {
  s.related = ["church.workflow.series_launch", "church.series.define_series_creative_brief"];
});

const socialTemplates = [
  ["template_sermon_quote", "Sermon quote card template", "1080x1080_png", "1080x1350_png"],
  ["template_scripture_verse", "Scripture verse template", "1080x1080_png"],
  ["template_series_launch", "Series launch announcement template", "1080x1080_png"],
  ["template_series_week_promo", "Series week N promo template", "1080x1350_png"],
  ["template_event_promo", "Event promo template", "1080x1080_png"],
  ["template_community_story", "Community story / testimony template", "1080x1080_png"],
  ["template_volunteer_recruitment", "Volunteer recruitment template", "1080x1080_png"],
  ["template_giving_campaign", "Giving campaign template", "1080x1080_png"],
  ["template_service_times_reminder", "Service times reminder template", "1080x1080_png"],
  ["template_pastoral_message", "Pastoral message template", "1080x1080_png"],
  ["template_worship_highlight", "Worship highlight template", "1080x1080_png"],
  ["template_teaching_carousel", "Teaching points carousel template", "carousel_5_slides"],
  ["template_reel_cover", "Reel / short cover template", "1080x1920_png"],
  ["template_story_announcement", "Stories announcement frame template", "1080x1920_png"],
  ["template_youtube_thumbnail", "YouTube sermon thumbnail template", "1280x720_png"],
  ["template_prayer_request", "Prayer request graphic template", "1080x1080_png"],
  ["template_new_here", "New here / first-time guest template", "1080x1080_png"],
  ["template_baptism_celebration", "Baptism celebration template", "1080x1080_png"],
];

const socialProduction = [
  ["duplicate_template_not_redesign", "Duplicate social template without redesign"],
  ["batch_weekly_content", "Batch weekly social content in one sitting"],
  ["swap_photo_keep_layout", "Swap photo while keeping layout locked"],
  ["enforce_two_font_weights_max", "Enforce max two font weights per graphic"],
  ["apply_scrim_for_text_on_photo", "Apply scrim for text on photo"],
  ["write_caption_from_template", "Write caption from template formula"],
  ["add_hashtags_local_and_church", "Add local and church hashtags"],
  ["schedule_via_meta_planner", "Schedule via Meta content planner"],
  ["crosspost_adapt_not_identical", "Cross-post with platform adaptation"],
  ["maintain_feed_grid_rhythm", "Maintain Instagram feed grid rhythm"],
];

const socialExport = [
  ["export_instagram_square", "Export Instagram square", "1080×1080 PNG sRGB"],
  ["export_instagram_portrait", "Export Instagram portrait", "1080×1350 PNG sRGB"],
  ["export_story_reel", "Export story and reel vertical", "1080×1920 PNG sRGB"],
  ["export_youtube_thumbnail", "Export YouTube thumbnail", "1280×720 PNG sRGB"],
  ["export_facebook_link_preview", "Export Facebook link preview", "1200×630 PNG"],
  ["export_email_inline", "Export email-inline graphic", "600px max width PNG"],
];

const socialSkills = [
  ...socialTemplates.map(([slug, title, ...outs]) =>
    skill("social", slug, {
      title,
      tier: "template",
      purpose: `Produce ${title.toLowerCase()} using locked layout and series/church brand kit.`,
      inputs: ["template_duplicate", "copy", "series_brand"],
      outputs: outs.map((o) => o.replace(/_/g, "")),
      related: ["church.ops.duplicate_template_not_redesign", "church.qa.text_legibility_mobile"],
      exportSpecs: outs.join(", "),
      qaChecks: ["Text readable at phone width", "Logo from brand kit only", "Contrast on photos"],
    })
  ),
  ...socialProduction.map(([slug, title]) =>
    skill("social", slug, {
      title,
      tier: "production",
      purpose: title + " for church social workflow efficiency.",
      inputs: ["approved_templates"],
      outputs: ["scheduled_posts"],
      related: ["church.workflow.sermon_to_social"],
    })
  ),
  ...socialExport.map(([slug, title, spec]) =>
    skill("social", slug, {
      title,
      tier: "production",
      purpose: `Export social asset: ${title}.`,
      inputs: ["designed_template"],
      outputs: ["png_export"],
      exportSpecs: spec,
      related: ["church.qa.safe_zones_platform_ui"],
    })
  ),
];

const slidesSlugs = [
  "build_sermon_slide_deck",
  "build_announcement_slides",
  "prepare_worship_lyric_slides",
  "build_propresenter_theme",
  "design_sermon_title_slide",
  "design_scripture_slide",
  "design_point_slide_max_seven_words",
  "design_illustration_slide",
  "design_blank_transition_slide",
  "import_slides_from_google_docs",
  "sync_slides_with_speaker_notes",
  "export_propresenter",
  "export_powerpoint_backup",
  "apply_series_master_to_deck",
  "limit_announcements_to_five",
  "announcement_seven_second_rule",
  "lyric_line_break_rules",
  "lyric_capitalization_style",
  "song_title_slide_style",
  "bilingual_lyric_slide_layout",
  "communion_slide_minimal",
  "baptism_slide_template",
  "guest_speaker_slide_template",
  "campus_specific_announcement_variant",
];

const slidesSkills = slidesSlugs.map((slug) =>
  skill("slides", slug, {
    title: slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tier: "production",
    purpose: `Church presentation slide skill: ${slug.replace(/_/g, " ")}.`,
    inputs: ["sermon_or_worship_content", "series_theme"],
    outputs: ["slide_deck"],
    exportSpecs: "1920×1080; ProPresenter 7+ or PPTX backup.",
    related: ["church.qa.projection_legibility", "church.workflow.weekly_service_kit"],
    qaChecks: ["Readable from back row", "No more than 5 announcements"],
  })
);

const worshipSlugs = [
  "select_ambient_vs_dynamic_loop",
  "select_loop_for_song",
  "optimize_for_led_vs_projector",
  "avoid_motion_behind_speaker",
  "lyric_line_break_rules",
  "provide_static_fallback",
  "match_loop_tempo_to_song_bpm",
  "test_loop_on_camera_imag",
  "design_communion_ambient",
  "design_baptism_motion",
  "coordinate_with_lighting_team",
  "select_still_vs_motion_for_hymns",
  "caption_lyrics_for_stream",
  "ccli_reporting_reminder",
  "rehearsal_walkthrough_checklist",
  "emergency_static_slide_kit",
  "ihop_style_prayer_visuals",
  "congregational_reading_slide",
];

const worshipSkills = worshipSlugs.map((slug) =>
  skill("worship", slug, {
    title: slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tier: "production",
    purpose: `Worship environment visual: ${slug.replace(/_/g, " ")}.`,
    inputs: ["set_list", "series_motion_kit"],
    outputs: ["projection_media"],
    related: ["church.workflow.worship_visuals", "church.motion.export.projection_1080"],
  })
);

const motionSlugs = [
  ["design_lower_third", "Design lower third name strap"],
  ["design_series_opener", "Design series video opener"],
  ["design_stinger_transition", "Design stinger transition bumper"],
  ["build_mogrt_template", "Build After Effects MOGRT template"],
  ["export_projection_1080", "Export projection 1080p H.264", "1920×1080 H.264 MP4 30fps"],
  ["export_loop_seamless", "Export seamless motion loop", "30–120s loop"],
  ["add_film_grain_brand", "Add brand-approved film grain"],
  ["burn_in_captions_sermon_clip", "Burn in captions on sermon clip"],
  ["design_countdown_timer", "Design countdown timer motion"],
  ["optimize_bitrate_for_venue_wifi", "Optimize bitrate for venue streaming"],
  ["create_alpha_channel_lower_third", "Create alpha channel lower third PNG sequence"],
  ["sync_motion_to_click_track", "Sync motion to worship click track"],
  ["avoid_moire_on_patterns", "Avoid moiré on fine patterns for IMAG"],
  ["test_export_on_propresenter", "Test motion export in ProPresenter"],
  ["archive_motion_to_dam", "Archive motion files to DAM"],
  ["create_vertical_crop_for_reels", "Create vertical crop for reels from 16:9"],
  ["design_offering_motion", "Design offering motion background"],
  ["design_baptism_video_overlay", "Design baptism video overlay"],
  ["render_prores_master_archive", "Render ProRes master for archive"],
  ["document_motion_codec_standards", "Document motion codec standards for church"],
];

const motionSkills = motionSlugs.map(([slug, title, exportSpec]) =>
  skill("motion", slug, {
    title,
    tier: "production",
    purpose: `${title} for church motion pipeline.`,
    inputs: ["series_brand", "after_effects_or_canva_video"],
    outputs: ["video_file"],
    exportSpecs: exportSpec || "See church.motion.export.projection_1080",
    related: ["church.worship.select_ambient_vs_dynamic_loop"],
  })
);

const printSlugs = [
  "design_weekly_bulletin",
  "design_bulletin_cover",
  "design_event_poster",
  "design_banner_standee",
  "design_invite_card",
  "design_connection_card",
  "set_bleed_0125in",
  "export_300dpi_cmyk",
  "preflight_bulletin_pdf",
  "embed_fonts_in_pdf",
  "design_envelope_mailout",
  "design_sermon_notes_insert",
  "design_giving_envelope",
  "design_wayfinding_poster",
];

const printSkills = printSlugs.map((slug) =>
  skill("print", slug, {
    title: slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tier: "production",
    purpose: `Print production: ${slug.replace(/_/g, " ")}.`,
    inputs: ["copy", "series_art"],
    outputs: ["print_pdf"],
    exportSpecs: "300 DPI at final size; 0.125in bleed; CMYK or PDF/X-1a per printer.",
    related: ["church.workflow.weekly_service_kit"],
  })
);

const webSlugs = [
  "design_series_hero",
  "update_home_hero_for_series",
  "design_email_header",
  "design_event_landing_hero",
  "design_giving_page_banner",
  "design_sermon_archive_thumbnail",
  "optimize_hero_for_mobile_crop",
  "export_hero_web",
  "export_email_header",
  "sync_hero_to_cms",
  "design_watch_live_banner",
  "design_plan_your_visit_section",
  "design_staff_page_headshots_grid",
  "design_ministry_landing_template",
  "add_open_graph_meta_companion",
  "compress_web_images_srgb",
];

const webSkills = webSlugs.map((slug) =>
  skill("web", slug, {
    title: slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tier: "production",
    purpose: `Church website media: ${slug.replace(/_/g, " ")}.`,
    inputs: ["series_kit", "cms_specs"],
    outputs: ["web_asset"],
    exportSpecs: "sRGB; hero max 2400×1200; email header 600×200.",
    related: ["church.workflow.weekly_service_kit"],
  })
);

const contentSlugs = [
  "receive_sermon_transcript",
  "extract_quotable_lines",
  "identify_teaching_points",
  "map_points_to_content_pillars",
  "build_weekly_content_calendar",
  "extract_sermon_clips",
  "write_carousel_slide_copy",
  "write_youtube_description",
  "timestamp_key_moments",
  "normalize_caption_file",
  "select_clips_under_sixty_seconds",
  "select_clips_under_ninety_seconds",
  "create_quote_attribution_line",
  "avoid_out_of_context_quotes",
  "tag_sermon_topic_taxonomy",
  "repurpose_archive_sermon",
  "create_podcast_cover_from_series",
  "plan_advent_content_calendar",
  "plan_easter_content_calendar",
  "sync_content_to_sermon_notes_app",
  "create_study_guide_pdf_cover",
  "batch_export_clips_for_scheduler",
];

const contentSkills = contentSlugs.map((slug) =>
  skill("content", slug, {
    title: slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tier: "production",
    purpose: `Sermon content multiplication: ${slug.replace(/_/g, " ")}.`,
    inputs: ["transcript_or_video", "series_metadata"],
    outputs: ["content_package"],
    related: ["church.workflow.sermon_to_social"],
    qaChecks: ["Pastoral review on quotes", "Scripture references verified"],
  })
);

const envSlugs = [
  "design_stage_backdrop",
  "design_stage_side_panels",
  "design_wayfinding_signage",
  "design_parking_sign",
  "design_greeting_team_badge",
  "design_child_ministry_visual_system",
  "design_youth_group_subbrand",
  "design_conference_stage_graphics",
  "design_outdoor_banner",
  "design_gazebo_tent_graphic",
  "design_seating_card",
  "design_photo_op_frame",
];

const envSkills = envSlugs.map((slug) =>
  skill("env", slug, {
    title: slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tier: "production",
    purpose: `Environmental church graphics: ${slug.replace(/_/g, " ")}.`,
    inputs: ["dimensions", "series_or_brand"],
    outputs: ["print_or_digital_env_asset"],
    related: ["church.series.design_key_art"],
  })
);

const opsSlugs = [
  "define_approval_chain",
  "submit_for_pastoral_review",
  "assign_approval_owner",
  "train_volunteers_duplicate_templates",
  "duplicate_template_not_redesign",
  "create_asset_request_form",
  "publish_series_kit_to_dam",
  "schedule_content_planner",
  "archive_week_assets",
  "version_brand_assets",
  "sunday_morning_checklist",
  "intake_creative_brief_form",
  "run_monthly_brand_audit",
  "onboard_new_volunteer",
  "document_software_stack",
  "backup_canva_team_assets",
  "set_slack_notification_channel",
  "track_ccli_license_on_graphics",
];

const opsSkills = opsSlugs.map((slug) =>
  skill("ops", slug, {
    title: slug.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    tier: "ops",
    purpose: `Church media operations: ${slug.replace(/_/g, " ")}.`,
    inputs: ["team_roles"],
    outputs: ["process_artifact"],
    related: ["church.workflow.approval_governance"],
  })
);

const qaSlugs = [
  ["text_legibility_mobile", "Verify text legibility on mobile", ["18pt+ equivalent on quotes", "Scrim if on photo"]],
  ["projection_legibility", "Verify projection legibility", ["36pt+ body on 1080p", "High contrast"]],
  ["logo_and_color_compliance", "Verify logo and color compliance", ["Brand kit colors only", "Correct logo variant"]],
  ["safe_zones_platform_ui", "Verify platform UI safe zones", ["No text in story UI overlap"]],
  ["theology_sensitive_language", "Review theology-sensitive language", ["Pastor sign-off recorded"]],
  ["approval_status_recorded", "Record approval status", ["Approver name and date"]],
  ["motion_not_distracting_behind_speaker", "Check motion not distracting behind speaker", ["No rapid strobe"]],
  ["announcement_count_limit", "Enforce announcement count limit", ["Max 5 slides"]],
  ["contrast_wcag_aa_social", "Check WCAG AA contrast on social", ["4.5:1 body text"]],
  ["spellcheck_and_names", "Spellcheck and verify names", ["Leader names correct"]],
  ["copyright_image_license", "Verify image copyright license", ["Stock or owned photos only"]],
  ["ccli_song_display", "Verify CCLI song display compliance", ["Song IDs where required"]],
  ["export_dimensions_correct", "Verify export dimensions correct", ["Match INDEX format table"]],
  ["file_size_under_platform_limit", "Verify file size under platform limit", ["Instagram PNG limits"]],
  ["qr_code_scans", "Test QR code scans on final graphic", ["Works on print size"]],
  ["archive_metadata_complete", "Verify archive metadata complete", ["Date series folder"]],
];

const qaSkills = qaSlugs.map(([slug, title, checks]) =>
  skill("qa", slug, {
    title,
    tier: "qa",
    purpose: `Quality assurance: ${title}.`,
    inputs: ["candidate_asset"],
    outputs: ["pass_fail_report"],
    qaChecks: checks,
    related: ["church.workflow.approval_governance"],
  })
);

const ALL_SKILLS = [
  ...brandSkills,
  ...seriesSkills,
  ...socialSkills,
  ...slidesSkills,
  ...worshipSkills,
  ...motionSkills,
  ...printSkills,
  ...webSkills,
  ...contentSkills,
  ...envSkills,
  ...opsSkills,
  ...qaSkills,
];

// Write files
let written = 0;
for (const s of ALL_SKILLS) {
  const dir = join(ROOT, s.domain);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const filePath = join(dir, s.file.endsWith(".md") ? s.file : `${s.slug}.md`);
  const outPath = join(dir, `${s.slug.split("/").pop()}.md`);
  writeFileSync(outPath, renderMarkdown(s));
  written++;
}

const registry = {
  version: "1.0.0",
  vertical: "church",
  generated_at: new Date().toISOString(),
  skill_count: ALL_SKILLS.length,
  workflows: [
    "workflows/sermon-to-social.md",
    "workflows/weekly-service-kit.md",
    "workflows/series-launch.md",
    "workflows/worship-visuals.md",
    "workflows/volunteer-template-ops.md",
    "workflows/approval-governance.md",
  ],
  domains: {
    brand: brandSkills.length,
    series: seriesSkills.length,
    social: socialSkills.length,
    slides: slidesSkills.length,
    worship: worshipSkills.length,
    motion: motionSkills.length,
    print: printSkills.length,
    web: webSkills.length,
    content: contentSkills.length,
    env: envSkills.length,
    ops: opsSkills.length,
    qa: qaSkills.length,
  },
  skills: ALL_SKILLS.map(({ id, domain, slug, title, tier, inputs, outputs, related }) => ({
    id,
    domain,
    slug,
    title,
    tier,
    inputs,
    outputs,
    related,
    path: `${domain}/${slug}.md`,
  })),
};

writeFileSync(join(ROOT, "registry.json"), JSON.stringify(registry, null, 2));

console.log(`Generated ${written} skill files in ${ROOT}`);
console.log(`Registry: ${ALL_SKILLS.length} skills`);
console.log("Domains:", registry.domains);
