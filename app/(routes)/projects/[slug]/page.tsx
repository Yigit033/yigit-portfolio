import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { ProjectContent } from "./project-content";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const url = `/projects/${project.id}`;

  return {
    title: project.title,
    description: project.description,
    keywords: project.technologies,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.title} | Yiğit Tilaver`,
      description: project.description,
      url,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Yiğit Tilaver`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
