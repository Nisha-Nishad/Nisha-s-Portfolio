import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { navLinks } from "../data/portfolio";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b border-border bg-card/90 backdrop-blur-xl",
        isScrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="mx-auto flex h-16 sm:h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Brand / Enhanced Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 sm:gap-3 transition-transform duration-200 hover:opacity-95"
        >
          {/* Enhanced Gold Emblem in Luxury Obsidian Capsule */}
          <div className="relative flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-1 sm:p-1.5 shadow-md shadow-slate-950/25 ring-1 ring-slate-800 transition-all duration-300 group-hover:scale-105 group-hover:ring-amber-400/50">
            <img
              src="/logo-icon.png"
              alt="Nisha Nishad Emblem"
              className="size-full object-contain filter drop-shadow-[0_2px_4px_rgba(234,179,8,0.45)]"
            />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-base sm:text-xl font-black tracking-tight text-foreground transition-colors group-hover:text-primary">
              Nisha <span className="text-primary">Nishad</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
              Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Switcher, Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />

          <a
            href="#contact"
            className="hidden rounded-full px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:inline-flex"
            style={{
              backgroundImage: "linear-gradient(to right, var(--primary), var(--secondary))",
            }}
          >
            Let's Work Together
          </a>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-9 sm:size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
          >
            {isMobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-border bg-card/98 backdrop-blur-2xl transition-[max-height,opacity] duration-300 md:hidden",
          isMobileOpen ? "max-h-[28rem] opacity-100 shadow-xl" : "max-h-0 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="rounded-xl px-3.5 py-3 text-base font-bold text-foreground transition-colors hover:bg-accent hover:text-primary active:bg-accent"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 pb-2">
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold text-primary-foreground shadow-md transition-all"
              style={{
                backgroundImage: "linear-gradient(to right, var(--primary), var(--secondary))",
              }}
            >
              Let's Work Together
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
