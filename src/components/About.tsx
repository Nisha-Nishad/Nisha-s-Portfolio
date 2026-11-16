import React from "react";
import { GraduationCap, CodeXml, Terminal } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const aboutCards = [
  {
    icon: GraduationCap,
    title: "B.Tech (AIML)",
    note: "Graduate in CS & AIML",
  },
  {
    icon: CodeXml,
    title: "Web Developer",
    note: "Frontend & Full Stack",
  },
  {
    icon: Terminal,
    title: "Programming Languages",
    note: "C, C++, Java, Python, Flutter",
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader lead="About" highlight="Me" id="about-heading" align="left" />
        </Reveal>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal delay={80}>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {personalInfo.aboutP1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {personalInfo.aboutP2}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
              {aboutCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={140 + idx * 90}>
                    <div className="group h-full rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card">
                      <span className="inline-flex size-9 sm:size-10 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-4.5 sm:size-5" />
                      </span>
                      <h3 className="mt-3 sm:mt-4 text-sm font-bold text-foreground">{card.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{card.note}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right Column: Real Working Photo (photo2.jpeg) with Theme Harmonized Frame */}
          <Reveal delay={120} className="relative mx-auto w-full flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[350px]">
              {/* Dynamic Theme Glow Light */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2.5rem] opacity-30 sm:opacity-35 blur-2xl transition-all duration-700"
                style={{
                  backgroundImage: "linear-gradient(to top right, var(--primary), var(--secondary))",
                }}
              />

              {/* Framed Photo Card */}
              <div
                className="relative overflow-hidden rounded-[2rem] border-4 sm:border-[4px] bg-card shadow-2xl transition-all duration-500 ring-4 ring-primary/20"
                style={{
                  borderColor: "var(--primary)",
                  boxShadow: "0 20px 45px -12px var(--primary)",
                }}
              >
                <img
                  src="/assets/photo2.jpeg"
                  alt={`${personalInfo.name} working on a laptop`}
                  loading="lazy"
                  className="h-[360px] xs:h-[420px] sm:h-[490px] w-full object-cover object-[50%_35%]"
                />
              </div>

              {/* Bottom Floating Pill with Theme Styling */}
              <div
                className="absolute left-2 -bottom-3 sm:-bottom-4 sm:-left-4 flex items-center gap-2 rounded-2xl border-2 bg-card/95 px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl backdrop-blur transition-all duration-500 z-10"
                style={{ borderColor: "var(--primary)" }}
              >
                <span
                  className="flex size-2.5 rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                />
                <span className="text-xs font-bold text-foreground">Dedicated &amp; Focused</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
