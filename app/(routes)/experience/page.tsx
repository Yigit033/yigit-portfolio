import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Yiğit Tilaver — software development at D7 Tech, AI integration at Mindhunters AI, engineering internships and volunteering.",
  alternates: { canonical: "/experience" },
  openGraph: {
    title: "Experience | Yiğit Tilaver",
    description:
      "Roles, engineering internships and volunteering — the professional timeline of Yiğit Tilaver.",
    url: "/experience",
  },
};

export default function ExperiencePage() {
  return <ExperienceTimeline />;
}
