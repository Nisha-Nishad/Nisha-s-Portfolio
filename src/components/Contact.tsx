import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  User,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon, TwitterIcon } from "./Icons";
import { personalInfo } from "../data/portfolio";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { submitContactMessage } from "../lib/supabase";

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errs.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await submitContactMessage(formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setStatusMessage("Thanks for reaching out! Your message has been received.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      setSubmitStatus("error");
      setStatusMessage("Failed to send message. Please contact directly via email.");
    }
  };

  const contactList = [
    {
      icon: Mail,
      label: "Email Address",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      target: undefined,
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: `+91 ${personalInfo.phoneDisplay}`,
      href: `tel:${personalInfo.phone}`,
      target: undefined,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn Profile",
      value: "Nisha Nishad",
      href: personalInfo.linkedin,
      target: "_blank",
    },
    {
      icon: TwitterIcon,
      label: "Twitter / X",
      value: "@Snisha0908",
      href: personalInfo.twitter,
      target: "_blank",
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-cream py-14 sm:py-24 transition-colors duration-500 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeader
            lead="Let's"
            highlight="Connect"
            id="contact-heading"
            align="center"
          />
        </Reveal>

        <div className="mt-8 sm:mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Contact Cards Matrix (5 cols on lg) */}
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <div className="rounded-3xl border border-border bg-card/60 p-5 sm:p-7 shadow-soft backdrop-blur-sm">
                <h3 className="text-lg sm:text-xl font-black tracking-tight text-foreground">
                  Get in Touch
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  Have a project in mind, want to collaborate, or just feel like saying hello?
                  Feel free to reach out via any platform below or use the form.
                </p>

                {/* Unified Clickable Contact Cards */}
                <div className="mt-6 space-y-3">
                  {contactList.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.target}
                        rel={item.target ? "noreferrer noopener" : undefined}
                        className="group flex items-center justify-between rounded-2xl border border-border bg-card p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md active:scale-[0.98]"
                      >
                        <div className="flex items-center gap-3.5 min-w-0 flex-1">
                          {/* Left Icon Pill */}
                          <span className="flex size-11 sm:size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-accent text-primary shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="size-5" />
                          </span>

                          {/* Info Text */}
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] sm:text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
                              {item.label}
                            </p>
                            <p className="truncate text-xs sm:text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                              {item.value}
                            </p>
                          </div>
                        </div>

                        {/* Arrow Action Indicator */}
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/60 text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:translate-x-0.5">
                          <ArrowUpRight className="size-4" />
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Theme-Harmonized Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-9 shadow-xl transition-colors duration-500"
              >
                {/* Top Accent Gradient Bar Matching Theme */}
                <div
                  className="absolute top-0 inset-x-0 h-1.5 transition-all duration-500"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--primary), var(--secondary))",
                  }}
                />

                {/* Ambient Glow Orb */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 size-48 rounded-full blur-3xl opacity-15"
                  style={{ backgroundColor: "var(--primary)" }}
                />

                {/* Form Header */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-2xl font-black tracking-tight text-foreground">
                    Send a Message
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Status Alerts */}
                {submitStatus === "success" && (
                  <div className="mb-5 flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-800 text-sm animate-in fade-in zoom-in-95">
                    <CheckCircle2 className="size-5 shrink-0 text-emerald-600" />
                    <p className="font-semibold">{statusMessage}</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-5 flex items-center gap-3 rounded-2xl bg-rose-50 border border-rose-200 p-4 text-rose-800 text-sm animate-in fade-in zoom-in-95">
                    <AlertCircle className="size-5 shrink-0 text-rose-600" />
                    <p className="font-semibold">{statusMessage}</p>
                  </div>
                )}

                <div className="space-y-4 sm:space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground/60">
                          <User className="size-4 text-primary" />
                        </div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          maxLength={100}
                          autoComplete="name"
                          placeholder="Nisha Nishad"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-border bg-background/80 pl-10 pr-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/40 shadow-sm"
                          aria-invalid={!!errors.name}
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-semibold text-rose-600">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        Your Email <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground/60">
                          <Mail className="size-4 text-primary" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          maxLength={255}
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full rounded-xl border border-border bg-background/80 pl-10 pr-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/40 shadow-sm"
                          aria-invalid={!!errors.email}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-semibold text-rose-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Subject <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted-foreground/60">
                        <FileText className="size-4 text-primary" />
                      </div>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        maxLength={150}
                        placeholder="Project collaboration / Inquiry"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background/80 pl-10 pr-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/40 shadow-sm"
                        aria-invalid={!!errors.subject}
                      />
                    </div>
                    {errors.subject && (
                      <p className="mt-1.5 text-xs font-semibold text-rose-600">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
                    >
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        maxLength={1000}
                        placeholder="Tell me a little about your project, idea, or questions…"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-base sm:text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground/50 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/40 shadow-sm resize-y"
                        aria-invalid={!!errors.message}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-semibold text-rose-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 text-sm font-bold text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, var(--primary), var(--secondary))",
                        boxShadow: "0 8px 24px -5px var(--primary)",
                      }}
                    >
                      <Send className="size-4" />
                      {isSubmitting ? "Sending Message…" : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
