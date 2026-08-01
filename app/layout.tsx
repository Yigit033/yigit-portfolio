import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yiğit Tilaver | AI & Software Developer",
  description:
    "AI & Software Developer with a marine engineering background. I build computer vision pipelines, machine learning systems and full-stack products for autonomous marine and industrial applications.",
  metadataBase: new URL("https://yigittilaver.com"),

  // Basic metadata
  applicationName: "Yiğit Tilaver Portfolio",
  authors: [{ name: "Yiğit Tilaver", url: "https://github.com/Yigit033" }],
  creator: "Yiğit Tilaver",
  publisher: "Yiğit Tilaver",
  keywords: [
    "Yiğit Tilaver",
    "AI Developer",
    "Software Developer",
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Python Developer",
    "YOLO",
    "OpenCV",
    "Digital Twin",
    "Autonomous Surface Vehicle",
    "Istanbul Technical University",
    "Next.js",
    "TypeScript",
  ],

  openGraph: {
    type: "website",
    url: "https://yigittilaver.com",
    title: "Yiğit Tilaver | AI & Software Developer",
    description:
      "AI & Software Developer with a marine engineering background. Computer vision, machine learning and full-stack engineering for autonomous marine and industrial systems.",
    siteName: "Yiğit Tilaver",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yiğit Tilaver — AI & Software Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Yiğit Tilaver | AI & Software Developer",
    description:
      "AI & Software Developer with a marine engineering background. Computer vision, machine learning and full-stack engineering.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://yigittilaver.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientLayout>
      <JsonLd />
      {children}
    </ClientLayout>
  );
}
