import React from "react";
import { cn } from "../lib/utils";

interface SectionHeaderProps {
  lead: string;
  highlight: string;
  id?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  lead,
  highlight,
  id,
  align = "center",
  className,
}) => {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <h2 id={id} className="section-title text-3xl text-foreground sm:text-4xl">
        {lead} <span className="text-primary">{highlight}</span>
      </h2>
      <div
        className={cn(
          "mt-3 flex items-center gap-1.5",
          align === "center" ? "justify-center" : "justify-start"
        )}
        aria-hidden="true"
      >
        <span className="h-0.5 w-10 rounded-full bg-primary"></span>
        <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
        <span className="h-0.5 w-4 rounded-full bg-secondary/60"></span>
      </div>
    </div>
  );
};
