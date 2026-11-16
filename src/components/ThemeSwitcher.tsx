import React, { useState, useEffect, useRef } from "react";
import { Palette, Check } from "lucide-react";
import { themes, type Theme } from "../data/themes";

export const ThemeSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeThemeId, setActiveThemeId] = useState<string>("indigo");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Apply theme variables to root
  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    Object.entries(theme.variables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    setActiveThemeId(theme.id);
    localStorage.setItem("portfolio-theme", theme.id);
  };

  useEffect(() => {
    const savedThemeId = localStorage.getItem("portfolio-theme") || "indigo";
    const foundTheme = themes.find((t) => t.id === savedThemeId) || themes[0];
    applyTheme(foundTheme);

    // Close dropdown on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeTheme = themes.find((t) => t.id === activeThemeId) || themes[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Change color palette"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-blue-400 hover:text-blue-700"
        title="Change portfolio color theme"
      >
        <span
          className="size-3 rounded-full ring-1 ring-slate-300"
          style={{ backgroundColor: activeTheme.preview.primary }}
        />
        <Palette className="size-3.5" />
        <span className="hidden sm:inline">Theme</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 sm:right-0 mt-2 w-64 xs:w-72 max-w-[calc(100vw-1.5rem)] origin-top-right rounded-2xl border border-border bg-card p-2.5 shadow-card backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-2 border-b border-border mb-1.5">
            <p className="text-xs font-bold text-foreground">Select Color Palette</p>
            <p className="text-[11px] text-muted-foreground">Click to instantly preview</p>
          </div>

          <div className="space-y-1">
            {themes.map((theme) => {
              const isSelected = theme.id === activeThemeId;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    applyTheme(theme);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs transition-colors ${
                    isSelected
                      ? "bg-accent text-primary font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1.5">
                      <span
                        className="size-4 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: theme.preview.bg }}
                      />
                      <span
                        className="size-4 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: theme.preview.primary }}
                      />
                      <span
                        className="size-4 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: theme.preview.secondary }}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{theme.name}</p>
                      <p className="text-[10px] text-muted-foreground truncate max-w-[150px]">
                        {theme.tagline}
                      </p>
                    </div>
                  </div>

                  {isSelected && <Check className="size-4 text-primary shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
