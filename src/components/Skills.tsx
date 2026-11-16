import React from "react";
import {
  Code2,
  Server,
  Cpu,
  Layers,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { skillCategories } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

// Marquee highlight pills
const marqueeSkills = [
  "React",
  "TypeScript",
  "Python",
  "C++",
  "Java",
  "Flutter",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Generative AI",
  "Next.js",
  "Supabase",
  "Express.js",
  "Big Data",
  "Git & GitHub",
  "Machine Learning",
];

// Category header icon & theme mapping
const categoryMeta: Record<
  string,
  { icon: React.FC<{ className?: string }>; badge: string; colorClass: string }
> = {
  "Frontend Engineering": {
    icon: Code2,
    badge: "User Interface",
    colorClass: "from-blue-500/20 to-indigo-500/10 text-blue-600",
  },
  "Backend & Database": {
    icon: Server,
    badge: "APIs & Data",
    colorClass: "from-emerald-500/20 to-teal-500/10 text-emerald-600",
  },
  "AI & Machine Learning": {
    icon: Cpu,
    badge: "Core AIML",
    colorClass: "from-purple-500/20 to-pink-500/10 text-purple-600",
  },
  "Programming & Developer Tools": {
    icon: Terminal,
    badge: "Languages & Tools",
    colorClass: "from-amber-500/20 to-orange-500/10 text-amber-600",
  },
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-cream py-20 sm:py-24 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            lead="My"
            highlight="Skills"
            id="skills-heading"
            align="center"
          />
        </Reveal>

        {/* 1. Infinite Tech Marquee Ribbon */}
        <div className="mt-6 sm:mt-8 mb-10 sm:mb-12 relative overflow-hidden py-2 sm:py-3">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-cream to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-cream to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-2.5 sm:gap-3">
            {[...marqueeSkills, ...marqueeSkills].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs sm:text-sm font-bold text-foreground shadow-sm transition-all hover:border-primary hover:text-primary whitespace-nowrap"
              >
                <span
                  className="size-2 rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Interactive 4-Card Bento Grid (Option A) */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const meta = categoryMeta[category.title] || {
              icon: Layers,
              badge: "Tech Stack",
              colorClass: "from-primary/20 to-secondary/10 text-primary",
            };
            const Icon = meta.icon;

            return (
              <Reveal key={category.title} delay={idx * 100}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl">
                  {/* Subtle Theme Ambient Corner Light */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-14 -right-14 size-40 rounded-full blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-30"
                    style={{ backgroundColor: "var(--primary)" }}
                  />

                  {/* Card Header */}
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-accent text-primary shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="size-5 sm:size-6" />
                        </span>
                        <div>
                          <h3 className="text-base sm:text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {category.title}
                          </h3>
                          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                            {meta.badge}
                          </span>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full border border-border bg-accent/60 px-2.5 py-1 text-[11px] sm:text-xs font-bold text-primary">
                        {category.skills.length} Skills
                      </span>
                    </div>

                    <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {/* Skill Badges with Theme Hover Illumination */}
                  <div className="mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-border/70">
                    <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                      {category.skills.map((skill) => (
                        <li
                          key={skill}
                          className="group/pill inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-background/80 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-accent hover:text-primary hover:shadow"
                        >
                          <CheckCircle2 className="size-3.5 text-primary opacity-70 transition-opacity group-hover/pill:opacity-100" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
