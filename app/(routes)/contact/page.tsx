import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Yiğit Tilaver — AI & Software Developer based in Istanbul. Open to collaboration and new opportunities.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Yiğit Tilaver",
    description: "Get in touch with Yiğit Tilaver, AI & Software Developer based in Istanbul.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
