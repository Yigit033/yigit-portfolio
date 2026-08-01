// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  /** Optional — omitted where the CV states no dates. */
  startDate?: string;
  endDate?: string;
  description: string;
  achievements: string[];
  type?: "work" | "volunteering" | "education" | "leadership";
  url?: string;
}

export const experiences: Experience[] = [
  // ── Professional Experience ────────────────────────────────────────
  {
    id: "d7tech",
    title: "Software Developer",
    company: "D7 Tech",
    location: "Istanbul, Türkiye",
    startDate: "2026",
    endDate: "2026",
    description:
      "Building AI-driven software for autonomous marine and industrial systems — from 3D digital twin interfaces to production computer vision pipelines.",
    achievements: [
      "Developed a data-driven 3D digital twin web interface by analyzing core business needs",
      "Engineered an AprilTag-based computer vision pipeline for camera and ASV (Autonomous Surface Vehicle) pose estimation",
      "Deployed project architectures to cloud environments",
    ],
    type: "work",
  },
  {
    id: "mindhunters-ai",
    title: "Integration & AI Training Specialist",
    company: "Mindhunters AI",
    location: "Istanbul, Türkiye",
    startDate: "2025",
    endDate: "2026",
    description:
      "Automated operational workflows and led the multi-language rollout of the corporate platform.",
    achievements: [
      "Architected automated operational workflows via n8n, tracking and coordinating projects to ensure alignment on deliverables, timelines and business unit requirements",
      "Managed a comprehensive localization pipeline, successfully translating and integrating the corporate platform into 14 different languages",
    ],
    type: "work",
  },

  // ── Engineering Internships ────────────────────────────────────────
  {
    id: "bulutlu-marine",
    title: "Sales Support Engineer Intern",
    company: "Bulutlu Marine",
    location: "Istanbul, Türkiye",
    startDate: "2024",
    endDate: "2024",
    description: "Supported technical sales operations for marine machinery and equipment systems.",
    achievements: [
      "Assisted the technical sales process for marine machinery and equipment",
      "Prepared technical documentation and specifications supporting client proposals",
    ],
    type: "work",
    url: "https://www.bulutlumarine.com/en-US",
  },
  {
    id: "bilgin-yachts",
    title: "Production Engineering Specialist Intern",
    company: "Bilgin Yachts",
    location: "Istanbul, Türkiye",
    startDate: "2023",
    endDate: "2023",
    description: "Worked within production engineering on the build process of custom superyachts.",
    achievements: [
      "Supported production engineering workflows across custom yacht build stages",
      "Gained hands-on experience translating engineering drawings into manufacturing steps",
    ],
    type: "work",
    url: "https://bilginyacht.com/",
  },
  {
    id: "art-shipyard",
    title: "Design and Project Engineer Intern",
    company: "ART Shipyard",
    location: "Istanbul, Türkiye",
    startDate: "2023",
    endDate: "2023",
    description: "Contributed to vessel design and project engineering activities.",
    achievements: [
      "Supported vessel design and project engineering tasks",
      "Assisted in project documentation and technical drawing review",
    ],
    type: "work",
    url: "http://www.artshipyard.com/",
  },

  // ── Volunteering ───────────────────────────────────────────────────
  {
    id: "itu-akut",
    title: "Volunteer Member",
    company: "ITU Search and Rescue Team",
    location: "Istanbul, Türkiye",
    startDate: "2023",
    endDate: "Present",
    description:
      "Volunteer member of Istanbul Technical University's search and rescue team, taking part in field and training projects.",
    achievements: ["Took part in various volunteer search and rescue projects"],
    type: "volunteering",
    url: "https://akut.itu.edu.tr/anasayfa",
  },
  {
    id: "itu-gonullu",
    title: "Volunteer Member",
    company: "ITU Volunteering Student Club",
    location: "Istanbul, Türkiye",
    startDate: "2023",
    endDate: "Present",
    description:
      "Active member of Istanbul Technical University's volunteering student club, contributing to community and social impact projects.",
    achievements: ["Took part in various volunteer projects"],
    type: "volunteering",
    url: "https://www.gonullu.itu.edu.tr/",
  },
];
