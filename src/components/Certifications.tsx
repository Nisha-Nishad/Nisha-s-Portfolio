import React, { useState, useEffect } from "react";
import { Award, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

interface CertItem {
  title: string;
  issuer: string;
  category: string;
  credentialUrl: string;
  thumbnail: string;
}

// 1. Box 1: MERN Stack Developer
const mernCert: CertItem = {
  title: "Full Stack Web Development (MERN)",
  issuer: "Apna College (Delta)",
  category: "Web Development",
  credentialUrl: "/certifications/MernStack_developer certificate.pdf",
  thumbnail: "/certifications/thumbnails/mern_thumb.png",
};

// 2. Box 2: IBM & AI / Python Certifications (10s slide)
const ibmCerts: CertItem[] = [
  {
    title: "Generative AI - Virtual Internship",
    issuer: "IBM Developer Skills Network",
    category: "Artificial Intelligence",
    credentialUrl: "/certifications/IBM_1_Certificate.pdf",
    thumbnail: "/certifications/thumbnails/ibm1_thumb.png",
  },
  {
    title: "Python Programming Achievement",
    issuer: "GUVI / HCL (Google for Education Partner)",
    category: "Python Development",
    credentialUrl: "/certifications/IBM_2_Certificate.pdf",
    thumbnail: "/certifications/thumbnails/ibm2_thumb.png",
  },
];

// 3. Box 3: NPTEL Certifications (10s slide)
const nptelCerts: CertItem[] = [
  {
    title: "Foundation of Cloud IoT Edge ML",
    issuer: "NPTEL (IIT Kharagpur)",
    category: "Cloud IoT & Edge ML",
    credentialUrl: "/certifications/NPTL_1_Certificate.pdf",
    thumbnail: "/certifications/thumbnails/nptl1_thumb.png",
  },
  {
    title: "Big Data Computing",
    issuer: "NPTEL (IIT Madras)",
    category: "Big Data Computing",
    credentialUrl: "/certifications/NPTL_2_certificate.pdf",
    thumbnail: "/certifications/thumbnails/nptl2_thumb.png",
  },
];

/** Sliding Certification Card with 10s auto delay */
const SlidingCertBox: React.FC<{
  certs: CertItem[];
  boxTitle: string;
}> = ({ certs, boxTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 10-second auto-slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certs.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [certs.length]);

  const current = certs[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + certs.length) % certs.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % certs.length);
  };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
      {/* Top Header with Box Title & Navigation Dots */}
      <div className="mb-3.5 sm:mb-4 flex items-center justify-between">
        <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
          {boxTitle}
        </span>
        <div className="flex items-center gap-1.5 z-20">
          {certs.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Certificate Thumbnail Preview */}
      <a
        href={current.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 bg-cream/40 shadow-inner group/img"
      >
        <img
          key={current.thumbnail}
          src={current.thumbnail}
          alt={current.title}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105 animate-in fade-in zoom-in-95 duration-500"
        />

        {/* Category Pill on Thumbnail */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 rounded-lg border border-border/70 bg-card/90 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-primary shadow-sm backdrop-blur z-10">
          {current.category}
        </div>

        {/* Prev / Next Arrows - Visible on mobile touch screens */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous certificate"
          className="absolute top-1/2 left-2 -translate-y-1/2 flex size-7 sm:size-8 items-center justify-center rounded-full bg-card/95 text-foreground shadow-md backdrop-blur opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground z-20 transition-all active:scale-90"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next certificate"
          className="absolute top-1/2 right-2 -translate-y-1/2 flex size-7 sm:size-8 items-center justify-center rounded-full bg-card/95 text-foreground shadow-md backdrop-blur opacity-90 sm:opacity-0 sm:group-hover:opacity-100 hover:bg-primary hover:text-primary-foreground z-20 transition-all active:scale-90"
        >
          <ChevronRight className="size-4" />
        </button>
      </a>

      {/* Content Details */}
      <div className="mt-4 sm:mt-5 flex flex-1 flex-col">
        <div className="flex items-start gap-3">
          <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Award className="size-4.5 sm:size-5" />
          </span>
          <div className="flex-1">
            <h3 className="text-sm sm:text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
              {current.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
              {current.issuer}
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-auto flex items-center justify-end pt-4 sm:pt-5 border-t border-border/70">
          <a
            href={current.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-105 active:scale-95"
            style={{
              backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))",
            }}
          >
            View Credential
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
};

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="relative bg-cream/70 py-20 sm:py-24 border-t border-border/80 transition-colors duration-500 overflow-hidden"
    >
      {/* Subtle Section Divider Glow */}
      <div
        className="absolute top-0 inset-x-0 h-1 opacity-70 transition-all duration-500"
        style={{
          backgroundImage: "linear-gradient(to right, transparent, var(--primary), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            lead="My"
            highlight="Certifications"
            id="certifications-heading"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {/* BOX 1: MERN Stack Developer Certificate (Static) */}
          <Reveal delay={80}>
            <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-card p-4 sm:p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl">
              <div className="mb-3.5 sm:mb-4 flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  MERN Developer
                </span>
                <span className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold text-primary">
                  Featured
                </span>
              </div>

              {/* Certificate Thumbnail Preview */}
              <a
                href={mernCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl border border-border/80 bg-cream/40 shadow-inner group/img"
              >
                <img
                  src={mernCert.thumbnail}
                  alt={mernCert.title}
                  loading="lazy"
                  className="size-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 rounded-lg border border-border/70 bg-card/90 px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-primary shadow-sm backdrop-blur">
                  {mernCert.category}
                </div>
              </a>

              {/* Content Details */}
              <div className="mt-4 sm:mt-5 flex flex-1 flex-col">
                <div className="flex items-start gap-3">
                  <span className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Award className="size-4.5 sm:size-5" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {mernCert.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-muted-foreground">
                      {mernCert.issuer}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-auto flex items-center justify-end pt-4 sm:pt-5 border-t border-border/70">
                  <a
                    href={mernCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-105 active:scale-95"
                    style={{
                      backgroundImage: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    }}
                  >
                    View Credential
                    <ExternalLink className="size-3.5" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* BOX 2: IBM & AI / Python Certifications (10s Auto Slide) */}
          <Reveal delay={160}>
            <SlidingCertBox certs={ibmCerts} boxTitle="IBM &amp; Python" />
          </Reveal>

          {/* BOX 3: NPTEL Certifications (10s Auto Slide) */}
          <Reveal delay={240}>
            <SlidingCertBox certs={nptelCerts} boxTitle="NPTEL Certifications" />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
