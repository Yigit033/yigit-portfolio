export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
  url?: string;
}

export const education: Education[] = [
  {
    id: "itu",
    degree: "Bachelor's Degree, Ship and Marine Technology Engineering",
    institution: "Istanbul Technical University",
    location: "Istanbul, Türkiye",
    startDate: "September 2020",
    endDate: "August 2026",
    description:
      "Analytical engineering foundation in marine systems, naval architecture and applied mathematics — the background behind my work on autonomous surface vehicles and industrial computer vision.",
    url: "https://www.itu.edu.tr/en",
  },
  {
    id: "anadolu",
    degree: "Open Education Student, Computer Programming",
    institution: "Anadolu University",
    location: "Eskişehir, Türkiye",
    startDate: "October 2022",
    endDate: "Present",
    description:
      "Second degree pursued in parallel, covering software engineering fundamentals, algorithms and database systems.",
    url: "https://www.anadolu.edu.tr/en",
  },
  {
    id: "upc",
    degree: "Erasmus+ Student Exchange Program",
    institution: "Universitat Politècnica de Catalunya · Barcelona Tech (UPC)",
    location: "Barcelona, Spain",
    startDate: "February 2024",
    endDate: "July 2024",
    description:
      "One semester of engineering coursework abroad at the Barcelona School of Nautical Studies (FNB).",
    url: "https://www.fnb.upc.edu/",
  },
];
