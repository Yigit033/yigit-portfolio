import type { Metadata } from "next";
import { AboutContent } from "./about-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yiğit Tilaver — AI & Software Developer in Istanbul. Background, education at Istanbul Technical University, and the skills behind the work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Yiğit Tilaver",
    description:
      "Background, education and the skills behind the work of Yiğit Tilaver, AI & Software Developer.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
