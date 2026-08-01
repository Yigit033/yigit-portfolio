import type { MetadataRoute } from "next";
import { contactInfo } from "@/data/social";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${contactInfo.website}/sitemap.xml`,
    host: contactInfo.website,
  };
}
