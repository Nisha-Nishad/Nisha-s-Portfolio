import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
  Heart,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "./Icons";
import { personalInfo, navLinks } from "../data/portfolio";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const featuredLinks = [
    { label: "ShopEase (E-Commerce)", href: "#projects", isExternal: false },
    {
      label: "MERN Stack Credential",
      href: "/certifications/MernStack_developer certificate.pdf",
      isExternal: true,
    },
    {
      label: "IBM Generative AI",
      href: "/certifications/IBM_1_Certificate.pdf",
      isExternal: true,
    },
    {
      label: "NPTEL Cloud IoT & Edge ML",
      href: "/certifications/NPTL_1_Certificate.pdf",
      isExternal: true,
    },
    {
      label: "NPTEL Big Data Computing",
      href: "/certifications/NPTL_2_certificate.pdf",
      isExternal: true,
    },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden border-t border-slate-800/80 transition-colors duration-500">
      {/* Top Accent Gradient Line Synced with Theme */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--primary), var(--secondary), var(--primary))",
        }}
      />

      {/* Dynamic Theme Ambient Glow Orb in Footer Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/4 size-96 rounded-full blur-[140px] opacity-15 transition-all duration-700"
        style={{ backgroundColor: "var(--primary)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 size-80 rounded-full blur-[120px] opacity-10 transition-all duration-700"
        style={{ backgroundColor: "var(--secondary)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 sm:px-6">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo & Name */}
              <a
                href="#home"
                className="group inline-flex items-center gap-3 transition-transform duration-200"
              >
                <div className="relative flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-1.5 shadow-md shadow-slate-950/40 ring-1 ring-slate-800 transition-all duration-300 group-hover:scale-105 group-hover:ring-amber-400/50">
                  <img
                    src="/logo-icon.png"
                    alt="Nisha Nishad Emblem"
                    className="size-full object-contain filter drop-shadow-[0_2px_4px_rgba(234,179,8,0.45)]"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="inline-flex items-center gap-1.5 text-xl font-black tracking-tight text-white group-hover:text-amber-300 transition-colors">
                    <span>Nisha <span className="text-amber-400">Nishad</span></span>
                    <Heart className="size-4.5 shrink-0 animate-pulse inline-block" fill="#ef4444" color="#ef4444" stroke="#ef4444" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    Portfolio
                  </span>
                </div>
              </a>

              <p className="mt-4 text-xs sm:text-sm font-semibold text-slate-300">
                {personalInfo.title}
              </p>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                Building scalable web applications, engineering responsive interfaces,
                and exploring AI/ML innovations to deliver robust, production-ready solutions.
              </p>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured & Credentials (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Featured &amp; Credentials
            </h3>
            <ul className="mt-4 space-y-2.5">
              {featuredLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="truncate">{item.label}</span>
                    {item.isExternal && (
                      <ExternalLink className="size-3 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Socials (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="mt-4 space-y-3">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 text-xs sm:text-sm text-slate-300 transition-colors hover:text-white"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors group-hover:border-primary group-hover:text-primary">
                  <Mail className="size-4" />
                </span>
                <span className="truncate">{personalInfo.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="group flex items-center gap-3 text-xs sm:text-sm text-slate-300 transition-colors hover:text-white"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors group-hover:border-primary group-hover:text-primary">
                  <Phone className="size-4" />
                </span>
                <span>+91 {personalInfo.phoneDisplay}</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400">
                  <MapPin className="size-4" />
                </span>
                <span>Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect With Me
              </p>
              <ul className="flex items-center gap-2.5">
                <li>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn profile"
                    className="flex size-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-lg"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="size-4" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub profile"
                    className="flex size-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 hover:bg-slate-800 hover:text-white hover:shadow-lg"
                    title="GitHub"
                  >
                    <GithubIcon className="size-4" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="X (Twitter) profile"
                    className="flex size-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:bg-sky-400/10 hover:text-sky-400 hover:shadow-lg"
                    title="X (Twitter)"
                  >
                    <TwitterIcon className="size-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    aria-label="Send Email"
                    className="flex size-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-400 hover:bg-rose-400/10 hover:text-rose-400 hover:shadow-lg"
                    title="Email"
                  >
                    <Mail className="size-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-slate-900 bg-slate-950/80 px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-4 text-center text-xs text-slate-400 sm:flex-row sm:text-left">
          <p className="flex items-center gap-1.5 justify-center sm:justify-start">
            <span>© {currentYear}{" "}
            <span className="font-semibold text-slate-200">{personalInfo.name}</span></span>
            <Heart className="size-3.5 shrink-0 animate-pulse inline-block" fill="#ef4444" color="#ef4444" stroke="#ef4444" />
            <span>. All rights reserved.</span>
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
