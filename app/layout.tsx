import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

const SITE_NAME = "Yiğit Tilaver";
const SITE_TITLE = "Yiğit Tilaver | AI & Software Developer";

/** Kept in one place so the page description, OG card and JSON-LD cannot drift. */
export const SITE_DESCRIPTION =
  "Product-oriented AI & Software Developer based in Istanbul. Building and operating LLM-powered features end to end, turning complex requirements into scalable, production-ready applications.";

export const metadata: Metadata = {
  title: {
    default: SITE_TITLE,
    // Sub-pages set a short title; this appends the name for them.
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://yigittilaver.com"),

  applicationName: `${SITE_NAME} Portfolio`,
  authors: [{ name: SITE_NAME, url: "https://github.com/Yigit033" }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Yiğit Tilaver",
    "AI Developer",
    "Software Developer",
    "Full Stack Developer",
    "LLM",
    "Large Language Models",
    "Generative AI",
    "Machine Learning",
    "Computer Vision",
    "Python Developer",
    "Next.js",
    "TypeScript",
    "Istanbul",
  ],

  openGraph: {
    type: "website",
    url: "https://yigittilaver.com",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
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
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
    canonical: "/",
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
