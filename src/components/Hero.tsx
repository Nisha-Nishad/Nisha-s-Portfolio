import React from "react";
import { Mail, ArrowRight, GraduationCap, FileText, Send } from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "./Icons";
import { personalInfo } from "../data/portfolio";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32 transition-colors duration-500"
      style={{
        background:
          "radial-gradient(130% 100% at 50% 0%, var(--blush) 0%, var(--background) 55%, var(--cream) 100%)",
      }}
    >
      {/* Precision modern web app grid (dynamically adapts to theme primary) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary) 1px, transparent 1px), linear-gradient(to bottom, var(--primary) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.045,
          maskImage: "radial-gradient(ellipse at 50% 45%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 30%, transparent 80%)",
        }}
      />

      {/* Dynamic theme ambient glow lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-[3%] size-[550px] rounded-full blur-[140px] opacity-25 transition-all duration-700"
        style={{ backgroundColor: "var(--primary)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-[2%] size-[480px] rounded-full blur-[130px] opacity-20 transition-all duration-700"
        style={{ backgroundColor: "var(--secondary)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/4 size-[340px] rounded-full blur-[110px] opacity-15 transition-all duration-700"
        style={{ backgroundColor: "var(--primary)" }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        {/* Left: Content Block */}
        <div className="text-center sm:text-left">
          <h1
            id="hero-heading"
            className="animate-fade-up text-3xl xs:text-4xl leading-[1.1] font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Hi, I'm{" "}
            <span
              className="bg-clip-text text-transparent transition-all duration-500"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))",
              }}
            >
              {personalInfo.name}
            </span>
          </h1>

          {/* Requested pipe-separated roles format */}
          <p className="animate-fade-up animation-delay-200 mt-3 sm:mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-sm sm:text-base lg:text-xl font-bold text-primary transition-colors duration-500">
            <span className="whitespace-nowrap">Web Developer</span>
            <span className="text-primary/40 font-normal">|</span>
            <span className="whitespace-nowrap">AI &amp; ML Enthusiast</span>
            <span className="text-primary/40 font-normal">|</span>
            <span className="whitespace-nowrap">Freelancer</span>
          </p>

          <p className="animate-fade-up animation-delay-200 mt-2.5 inline-flex items-center gap-2 text-xs sm:text-base font-semibold text-muted-foreground">
            <GraduationCap className="size-4 sm:size-4.5 text-primary transition-colors duration-500" />
            {personalInfo.degree}
          </p>

          <p className="animate-fade-up animation-delay-400 mt-4 sm:mt-5 max-w-lg mx-auto sm:mx-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {personalInfo.heroBio}
          </p>

          {/* Action Buttons Trio: Responsive Mobile Stacking */}
          <div className="animate-fade-up animation-delay-600 mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            {/* View My Work Button */}
            <a
              href="#projects"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105 active:scale-95"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))",
                boxShadow: "0 10px 25px -6px var(--primary)",
              }}
            >
              View My Work <ArrowRight className="size-4" />
            </a>

            {/* Contact Me Button - High Visibility with Theme Hover Fill */}
            <a
              href="#contact"
              className="group inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-primary bg-card px-6 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-lg active:scale-95"
              style={{
                borderColor: "var(--primary)",
                boxShadow: "0 8px 20px -6px var(--primary)",
              }}
            >
              <Send className="size-3.5 text-primary transition-colors duration-300 group-hover:text-white" />
              <span>Contact Me</span>
            </a>

            {/* Highly Visible Themed Resume Button */}
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 px-6 text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-105 active:scale-95"
              style={{
                backgroundColor: "var(--accent)",
                borderColor: "var(--primary)",
                color: "var(--primary)",
                boxShadow: "0 6px 18px -4px var(--primary)",
              }}
            >
              <FileText className="size-4" style={{ color: "var(--primary)" }} />
              Resume
            </a>
          </div>

          {/* Social Links - Filled with Theme Color */}
          <ul className="animate-fade-up animation-delay-800 mt-7 sm:mt-8 flex items-center justify-center sm:justify-start gap-3">
            {/* LinkedIn */}
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="group relative inline-flex size-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: "var(--accent)",
                  borderColor: "var(--border)",
                  color: "var(--primary)",
                  boxShadow: "0 4px 12px -2px var(--primary)",
                }}
                title="LinkedIn"
              >
                <LinkedinIcon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>

            {/* Gmail */}
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label={`Email ${personalInfo.name}`}
                className="group relative inline-flex size-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: "var(--accent)",
                  borderColor: "var(--border)",
                  color: "var(--primary)",
                  boxShadow: "0 4px 12px -2px var(--primary)",
                }}
                title="Email"
              >
                <Mail className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>

            {/* GitHub */}
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="group relative inline-flex size-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: "var(--accent)",
                  borderColor: "var(--border)",
                  color: "var(--primary)",
                  boxShadow: "0 4px 12px -2px var(--primary)",
                }}
                title="GitHub"
              >
                <GithubIcon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>

            {/* Twitter / X */}
            <li>
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="X (Twitter) profile"
                className="group relative inline-flex size-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105"
                style={{
                  backgroundColor: "var(--accent)",
                  borderColor: "var(--border)",
                  color: "var(--primary)",
                  boxShadow: "0 4px 12px -2px var(--primary)",
                }}
                title="X (Twitter)"
              >
                <TwitterIcon className="size-4 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Premium Framed Photo Card with Theme Colored Border */}
        <div className="animate-fade-up animation-delay-400 mt-2 sm:mt-0 flex justify-center md:justify-end">
          <div className="relative mx-auto w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[350px]">
            {/* Ambient Multi-Layer Theme Blur Glow */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-35 sm:opacity-40 blur-2xl transition-all duration-700"
              style={{
                backgroundImage: "linear-gradient(to top right, var(--primary), var(--secondary))",
              }}
            />

            {/* Main Portrait Card with Theme Border */}
            <div
              className="relative overflow-hidden rounded-[2rem] border-4 sm:border-[5px] bg-card shadow-2xl transition-all duration-500 ring-4 ring-primary/20"
              style={{
                borderColor: "var(--primary)",
                boxShadow: "0 20px 45px -12px var(--primary)",
              }}
            >
              <img
                src="/assets/photo1.jpeg"
                alt={personalInfo.name}
                className="h-[340px] xs:h-[390px] sm:h-[450px] w-full scale-[1.38] object-cover object-[50%_33%]"
              />
            </div>

            {/* Floating Status Pill with Theme Border */}
            <div
              className="absolute left-2 -bottom-3 sm:-bottom-4 sm:-left-4 flex items-center gap-2 rounded-2xl border-2 bg-card/95 px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-xl backdrop-blur transition-all duration-500 z-10"
              style={{
                borderColor: "var(--primary)",
              }}
            >
              <span className="relative flex size-2.5">
                <span
                  className="absolute inline-flex size-full animate-ping rounded-full opacity-75"
                  style={{ backgroundColor: "var(--primary)" }}
                />
                <span
                  className="relative inline-flex size-2.5 rounded-full"
                  style={{ backgroundColor: "var(--primary)" }}
                />
              </span>
              <span className="text-xs font-bold text-foreground">Available for Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
