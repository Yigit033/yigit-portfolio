import { contactInfo, socialLinks } from "@/data/social";

/**
 * Person structured data. Server-rendered into the HTML so crawlers that do
 * not execute JavaScript still see it.
 */
export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: contactInfo.displayName,
    alternateName: contactInfo.name,
    url: contactInfo.website,
    image: `${contactInfo.website}/images/profile.jpg`,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    jobTitle: "AI & Software Developer",
    description:
      "AI & Software Developer with a marine engineering background, building computer vision pipelines, machine learning systems and full-stack products.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    worksFor: {
      "@type": "Organization",
      name: "D7 Tech",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Istanbul Technical University",
        sameAs: "https://www.itu.edu.tr/en",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Universitat Politècnica de Catalunya · Barcelona Tech",
        sameAs: "https://www.upc.edu/en",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Deep Learning",
      "Python",
      "YOLO",
      "OpenCV",
      "Digital Twin",
      "Autonomous Surface Vehicles",
      "Full Stack Development",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Turkish" },
      { "@type": "Language", name: "English" },
    ],
    sameAs: socialLinks.filter((link) => link.url.startsWith("https://")).map((link) => link.url),
  };

  return (
    <script
      type="application/ld+json"
      // Serialised JSON from local data only — no user input reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
