import React, { useState } from "react";
import { Copy, Check, Terminal, FileCode2, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export const CodeWindow: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "stack" | "contact">("profile");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "profile", label: "Developer.tsx", icon: FileCode2 },
    { id: "stack", label: "TechStack.json", icon: Terminal },
    { id: "contact", label: "Connect.ts", icon: Sparkles },
  ] as const;

  const codeSnippets = {
    profile: `// Modern Frontend & Full-Stack Engineer
interface DeveloperProfile {
  name: string;
  role: string;
  passions: string[];
  status: string;
}

export const developer: DeveloperProfile = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  passions: [
    "Pixel-Perfect UI Architecture",
    "Performant React Engineering",
    "Clean Database Systems (Supabase)"
  ],
  status: "🟢 Available for projects",
};`,
    stack: `{
  "core_tools": [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React 18",
    "TypeScript",
    "Tailwind CSS"
  ],
  "backend_database": [
    "Supabase",
    "PostgreSQL",
    "Row Level Security (RLS)"
  ],
  "programming_languages": [
    "C",
    "C++",
    "Java",
    "Python",
    "Flutter"
  ]
}`,
    contact: `export async function initiateCollaboration() {
  return {
    email: "${personalInfo.email}",
    linkedin: "${personalInfo.linkedinDisplay}",
    response_time: "< 24 hours",
    lets_build: "Something extraordinary together"
  };
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mx-auto w-full max-w-xl rounded-2xl border border-white/15 bg-[#0a0f1d]/90 p-1 shadow-2xl backdrop-blur-xl">
      {/* Ambient glow behind window */}
      <div
        className="absolute -inset-1 -z-10 rounded-2xl opacity-40 blur-xl transition-colors duration-500"
        style={{
          background: "linear-gradient(135deg, var(--secondary), var(--primary))",
        }}
      />

      {/* Window Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f56] shadow-sm" />
          <span className="size-3 rounded-full bg-[#ffbd2e] shadow-sm" />
          <span className="size-3 rounded-full bg-[#27c93f] shadow-sm" />
          <span className="ml-2 text-xs font-mono text-white/50 hidden sm:inline">
            workspace/portfolio
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-colors ${
                  isActive
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/50 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <Icon className="size-3" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Copy code button */}
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy code snippet"
          className="inline-flex size-7 items-center justify-center rounded-md border border-white/10 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          title="Copy snippet"
        >
          {copied ? (
            <Check className="size-3.5 text-emerald-400" />
          ) : (
            <Copy className="size-3.5" />
          )}
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-white/90">
        <pre className="selection:bg-secondary/40">
          <code>
            {codeSnippets[activeTab].split("\n").map((line, i) => (
              <div key={i} className="table-row">
                <span className="table-cell select-none pr-4 text-right text-white/25">
                  {i + 1}
                </span>
                <span className="table-cell whitespace-pre">
                  {line.startsWith("//") ? (
                    <span className="text-white/40 italic">{line}</span>
                  ) : line.includes("export") || line.includes("interface") || line.includes("const") ? (
                    <span className="text-pink-400 font-semibold">{line}</span>
                  ) : line.includes(":") && !line.includes("{") ? (
                    <span>
                      <span className="text-cyan-300">{line.split(":")[0]}</span>:
                      <span className="text-amber-300">{line.split(":")[1]}</span>
                    </span>
                  ) : (
                    line
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Editor Status Bar */}
      <div className="flex items-center justify-between border-t border-white/10 px-4 py-2 text-[11px] font-mono text-white/40">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            TypeScript 5.7
          </span>
          <span>UTF-8</span>
        </div>
        <span>React • Tailwind • Supabase</span>
      </div>
    </div>
  );
};
