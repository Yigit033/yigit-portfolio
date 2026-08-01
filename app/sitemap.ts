import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { contactInfo } from "@/data/social";

const BASE_URL = contactInfo.website;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/experience`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.id}`,
    changeFrequency: "yearly",
    priority: project.featured ? 0.8 : 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
