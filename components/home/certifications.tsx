"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  BrainCircuit,
  Cloud,
  Code,
  Cpu,
  ExternalLink,
  Medal,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications, certificationTags } from "@/data/certifications";

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "book-open": BookOpen,
  brain: BrainCircuit,
  cloud: Cloud,
  code: Code,
  cpu: Cpu,
  medal: Medal,
  shield: ShieldCheck,
  zap: Zap,
};

export function Certifications() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-12 md:py-24">
      <div className="container mx-auto px-4 text-center md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Verified training in machine learning, data science and cloud
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {certifications.map((certification, index) => {
            const Icon = iconMap[certification.icon] ?? Award;

            const body = (
              <Card className="h-full border-2 transition-all duration-300 hover:border-primary">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className={`${certification.colorClass} shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="font-medium">{certification.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {certification.issuer} · {certification.year}
                    </p>
                  </div>
                  {certification.url && (
                    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" />
                  )}
                </CardContent>
              </Card>
            );

            return (
              <motion.div
                key={certification.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
              >
                {certification.url ? (
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full rounded-xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
                    aria-label={`Verify ${certification.title} certificate from ${certification.issuer}`}
                  >
                    {body}
                  </a>
                ) : (
                  body
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          {certificationTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-3 py-1.5 text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
