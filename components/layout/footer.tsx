// components/layout/footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Copyright, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/social";
import { getIconComponent } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background/60 pt-8 pb-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Yiğit Tilaver</h3>
            <p className="max-w-xs text-sm text-muted-foreground">
              AI &amp; Software Developer based in Istanbul. Building computer vision pipelines,
              machine learning systems and full-stack products.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Resume <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.id}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full bg-muted/50 hover:bg-primary/10"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {getIconComponent(social.icon)}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Keyboard Shortcuts */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Keyboard Shortcuts</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex gap-1">
                  <kbd className="rounded border bg-muted px-2 py-1 font-mono text-[10px]">⌘</kbd>
                  <kbd className="rounded border bg-muted px-2 py-1 font-mono text-[10px]">K</kbd>
                </div>
                <span>Search</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex gap-1">
                  <kbd className="rounded border bg-muted px-2 py-1 font-mono text-[10px]">T</kbd>
                </div>
                <span>Toggle theme</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 border-t pt-4"
        >
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Copyright className="mr-1 h-3.5 w-3.5" />
            <span>{new Date().getFullYear()} Yiğit Tilaver. All rights reserved.</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
