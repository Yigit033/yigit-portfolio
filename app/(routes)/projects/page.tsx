import type { Metadata } from "next";
import { ProjectsContent } from "./projects-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Yiğit Tilaver — real-time PPE detection with YOLO, an explainable trading system built on XGBoost and SHAP, OCR-driven document automation and more.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Yiğit Tilaver",
    description:
      "Computer vision, machine learning and full-stack projects, with the stack and outcomes behind each one.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
