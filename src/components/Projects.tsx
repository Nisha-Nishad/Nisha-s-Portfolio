import React from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projects } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export const Projects: React.FC = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader lead="Featured" highlight="Project" id="projects-heading" align="center" />
        </Reveal>

        <div className="mt-12 grid gap-12">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 120}>
              <article className="group grid items-center gap-6 rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl lg:grid-cols-[1.25fr_1fr] lg:gap-12">
                {/* Image Showcase Container */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 bg-cream/50 shadow-md transition-all duration-700 group-hover:scale-[1.01] group-hover:shadow-xl">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    width={1920}
                    height={1080}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Details Column */}
                <div>
                  <h3 className="text-xl sm:text-3xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p className="mt-3 sm:mt-4 text-xs sm:text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <ul className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-lg border border-primary/20 bg-primary/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-bold text-primary transition-colors"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-6 text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-105 active:scale-95"
                      style={{
                        backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))",
                        boxShadow: "0 6px 18px -4px var(--primary)",
                      }}
                    >
                      Live Demo
                      <ArrowUpRight className="size-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-sm active:scale-95"
                    >
                      <GithubIcon className="size-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
