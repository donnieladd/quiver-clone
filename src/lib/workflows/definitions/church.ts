import type { WorkflowDefinition } from "../types";

/** Church workflows are documented in skills/church/workflows — runtime mirrors those paths */
export const CHURCH_WORKFLOWS: WorkflowDefinition[] = [
  {
    id: "church.sermon_to_social",
    title: "Sermon → social content",
    vertical: "church",
    summary: "One sermon → 8–30 social assets using approved templates.",
    whenToUse: ["Sermon transcribed", "Series brand kit exists"],
    whenNotToUse: ["Series launch week", "Crisis comms"],
    estimatedMinutes: 180,
    primaryPlatforms: ["Instagram", "Facebook", "YouTube"],
    skillsUsed: [
      "church.content.receive_sermon_transcript",
      "church.content.extract_quotable_lines",
      "church.social.template.sermon_quote",
    ],
    docPath: "church/workflows/sermon-to-social.md",
    steps: [
      {
        id: "transcript",
        title: "Receive transcript",
        type: "skill",
        skillId: "church.content.receive_sermon_transcript",
      },
      {
        id: "quotes",
        title: "Extract quotable lines",
        type: "skill",
        skillId: "church.content.extract_quotable_lines",
      },
      {
        id: "points",
        title: "Teaching points",
        type: "skill",
        skillId: "church.content.identify_teaching_points",
      },
      {
        id: "calendar",
        title: "Weekly content calendar",
        type: "skill",
        skillId: "church.content.build_weekly_content_calendar",
      },
      {
        id: "templates",
        title: "Produce from templates",
        type: "checklist",
        checklistItems: ["3 quote graphics", "1 carousel", "2 reel covers", "Caption doc"],
      },
      {
        id: "svg",
        title: "Series SVG accents",
        type: "generate",
        jobType: "vector_logo_icon",
        promptTemplate: "Minimal church series motif, vector style, {{series_name}}",
      },
      {
        id: "qa",
        title: "QA & pastoral review",
        type: "gate",
        gateCriteria: ["Legibility mobile", "Theology review", "Pastor approved batch"],
      },
    ],
    outputChecklist: ["8+ assets scheduled", "Archive folder created"],
    relatedWorkflows: ["church.weekly_service_kit", "church.series_launch"],
  },
  {
    id: "church.weekly_service_kit",
    title: "Weekly service kit",
    vertical: "church",
    summary: "Slides, lyrics, bulletin, email header, service reminder for one Sunday.",
    whenToUse: ["Standard Sunday prep"],
    whenNotToUse: ["Special event only"],
    estimatedMinutes: 240,
    primaryPlatforms: ["ProPresenter", "Print", "Web", "Social"],
    skillsUsed: [
      "church.slides.build_sermon_slide_deck",
      "church.print.design_weekly_bulletin",
      "church.social.template.service_times_reminder",
    ],
    docPath: "church/workflows/weekly-service-kit.md",
    steps: [
      {
        id: "slides",
        title: "Sermon + announcement slides",
        type: "skill",
        skillId: "church.slides.build_sermon_slide_deck",
      },
      {
        id: "lyrics",
        title: "Worship lyric slides",
        type: "skill",
        skillId: "church.slides.prepare_worship_lyric_slides",
      },
      {
        id: "bulletin",
        title: "Bulletin PDF",
        type: "skill",
        skillId: "church.print.design_weekly_bulletin",
      },
      {
        id: "digital",
        title: "Email + web + social",
        type: "checklist",
        checklistItems: ["Email header", "Hero if needed", "Sat service times post"],
      },
      {
        id: "sunday_qa",
        title: "Sunday morning QA",
        type: "gate",
        gateCriteria: ["Projector test", "Announcement order match", "Checklist signed"],
      },
    ],
    outputChecklist: ["Decks exported", "Bulletin print-ready", "Digital touchpoints live"],
    relatedWorkflows: ["church.sermon_to_social"],
  },
];
