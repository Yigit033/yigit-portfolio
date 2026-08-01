// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Sparkles, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, type SkillCategory } from "@/data/skills";
import { StarHeader } from "@/components/shared/star-header";

const highlights = [
  { highlight: "ASV", label: "Computer vision pose estimation pipeline at D7 Tech" },
  { highlight: "14", label: "Languages the corporate platform was localized into" },
  { highlight: "8", label: "Certifications in ML, data science and cloud" },
  { highlight: "3", label: "Marine engineering internships at Istanbul shipyards" },
  { highlight: "2", label: "Degrees pursued in parallel — ITU and Anadolu University" },
  { highlight: "Erasmus+", label: "Exchange semester at UPC Barcelona Tech" },
  { highlight: "Google Play", label: "Published Android app — Matematik Macerası" },
];

export default function AboutPage() {
  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my background and skills
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Bio + Skills — 2-column grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left — Bio + Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Who I Am</h2>
              <Card>
                <CardContent className="space-y-4 p-6 leading-relaxed">
                  <p>
                    I&apos;m Yiğit Tilaver, an AI &amp; Software Developer based in Istanbul. I came
                    to software from marine engineering — I study Ship and Marine Technology
                    Engineering at Istanbul Technical University — and that analytical background
                    shapes how I build: systems that have to hold up against real physical
                    constraints, not only inside a notebook.
                  </p>
                  <p>
                    At <span className="font-medium text-foreground">D7 Tech</span> I build
                    AI-driven software for autonomous marine and industrial systems. I developed a
                    data-driven 3D digital twin web interface and engineered an AprilTag-based
                    computer vision pipeline for camera and ASV (Autonomous Surface Vehicle) pose
                    estimation, deploying the architecture to cloud environments. Previously at{" "}
                    <span className="font-medium text-foreground">Mindhunters AI</span> I
                    architected automated operational workflows with n8n and managed a localization
                    pipeline that took the corporate platform into 14 languages.
                  </p>
                  <p>
                    My independent work spans real-time computer vision, explainable machine
                    learning and AI automation — from YOLO-based industrial PPE detection to an
                    event-driven trading system built on XGBoost with SHAP explainability, and
                    OCR-driven document processing. I work across Python, TypeScript and the modern
                    full stack, with Docker and cloud deployment.
                  </p>
                </CardContent>
              </Card>

              <h2 className="mt-8 mb-4 text-2xl font-bold">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id}>
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{edu.degree}</h3>
                        {edu.url ? (
                          <a
                            href={edu.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                          >
                            {edu.institution}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        )}
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.startDate} – {edu.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                        {edu.description && (
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {edu.description}
                          </p>
                        )}
                        {edu.gpa && (
                          <Badge variant="outline" className="mt-2">
                            CGPA: {edu.gpa}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Right — Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Skills</h2>
              <div className="space-y-4">
                {Object.keys(skills).map((category) => (
                  <Card key={category}>
                    <CardContent className="p-5">
                      <h3 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills[category as SkillCategory].map((skill) => (
                          <Badge key={skill.name} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Highlights — full-width section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="mb-6 flex items-center justify-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Highlights</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * i }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="flex h-full flex-col items-center justify-center p-5">
                      <span className="text-2xl font-bold text-primary">{item.highlight}</span>
                      <span className="mt-1 text-sm text-muted-foreground">{item.label}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
