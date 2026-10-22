"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Sparkles, Activity, ExternalLink, CheckCircle2, ArrowRight, Monitor } from "lucide-react";

type DiagnosticMode = "screenshot" | "serp" | "vitals" | "ai";

interface SerpQuery {
  query: string;
  title: string;
  snippet: string;
  sitelinks: { title: string; desc: string }[];
}

const QUERIES: Record<string, SerpQuery> = {
  "madeena warriors": {
    query: "madeena warriors",
    title: "Madeena Warriors | Batch 2018 Official Portal",
    snippet:
      "Official digital platform for Madeena Warriors 2018 — the first O/L batch of KM Maruthamunai Al-Madeena Vidyalaya, Ampara, Sri Lanka. Complete batch registry, memories, and leadership directory.",
    sitelinks: [
      { title: "Najmul Fowz", desc: "Batch Archive & Representative Profile" },
      { title: "Safa Ahamed", desc: "Community Record & Student Directory" },
      { title: "Batch Memories", desc: "High-resolution timeline & archive media" },
      { title: "Batch Roster", desc: "Verified member profiles & roll index" },
    ],
  },
  "madeena warriors 2018": {
    query: "madeena warriors 2018",
    title: "Madeena Warriors 2018 — Official Batch Platform & Media Archive",
    snippet:
      "Explore the 2018 batch archive of Al-Madeena Vidyalaya Maruthamunai. Verified alumni records, batch leadership, historical milestones, and digital student network.",
    sitelinks: [
      { title: "Leadership Team", desc: "Batch organizers & coordinators" },
      { title: "Alumni Directory", desc: "Searchable member registry database" },
      { title: "Milestones", desc: "School achievements & batch history" },
      { title: "Contact Desk", desc: "Community outreach & announcements" },
    ],
  },
  "al madeena batch 2018": {
    query: "al madeena batch 2018",
    title: "Al-Madeena Vidyalaya Batch 2018 (Madeena Warriors) Directory",
    snippet:
      "The premier alumni network for KM Al-Madeena Vidyalaya 2018. Fast server-rendered directory engineered with sub-second performance and structured entity schema.",
    sitelinks: [
      { title: "Verified Roster", desc: "Authentic student batch records" },
      { title: "School Legacy", desc: "The inaugural O/L legacy archive" },
      { title: "Photo Galleries", desc: "Curated batch event photography" },
      { title: "Live Portal", desc: "Cloud-hosted on Vercel Global Edge" },
    ],
  },
};

export function SerpTerminal() {
  const [activeMode, setActiveMode] = useState<DiagnosticMode>("screenshot");
  const [selectedQueryKey, setSelectedQueryKey] = useState<string>("madeena warriors");

  const currentQuery = QUERIES[selectedQueryKey];

  return (
    <div className="border border-border bg-card p-5 sm:p-6 relative shadow-lg">
      {/* Corner Ticks (Screen-reader hidden) */}
      <span aria-hidden="true" className="absolute -top-1 -left-1 text-primary font-mono text-xs select-none">┌</span>
      <span aria-hidden="true" className="absolute -top-1 -right-1 text-primary font-mono text-xs select-none">┐</span>
      <span aria-hidden="true" className="absolute -bottom-1 -left-1 text-primary font-mono text-xs select-none">└</span>
      <span aria-hidden="true" className="absolute -bottom-1 -right-1 text-primary font-mono text-xs select-none">┘</span>

      {/* Terminal Title & Honest Badge (Section 2.2) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground font-bold">
          <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
          <span>Production Platform Proof</span>
        </div>
        <span className="font-mono text-[11px] text-primary uppercase font-semibold border border-primary/40 bg-primary/5 px-2 py-0.5">
          {activeMode === "screenshot" && "Verified Live Interface"}
          {activeMode === "serp" && "Illustrative SERP preview"}
          {activeMode === "vitals" && "Measured Web Vitals"}
          {activeMode === "ai" && "Simulated AI Citation"}
        </span>
      </div>

      {/* Mode Switcher Tabs (Section 5.5 Accessibility) */}
      <div
        role="tablist"
        aria-label="Diagnostic Console Tabs"
        className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-background border border-border mb-4"
      >
        <button
          role="tab"
          id="tab-screenshot"
          aria-selected={activeMode === "screenshot"}
          aria-controls="panel-screenshot"
          type="button"
          onClick={() => setActiveMode("screenshot")}
          className={`py-2 px-2 text-xs font-mono uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 min-h-[44px] ${
            activeMode === "screenshot"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Monitor className="size-3.5" aria-hidden="true" />
          <span>Live Site</span>
        </button>
        <button
          role="tab"
          id="tab-serp"
          aria-selected={activeMode === "serp"}
          aria-controls="panel-serp"
          type="button"
          onClick={() => setActiveMode("serp")}
          className={`py-2 px-2 text-xs font-mono uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 min-h-[44px] ${
            activeMode === "serp"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Search className="size-3.5" aria-hidden="true" />
          <span>SERP Rank</span>
        </button>
        <button
          role="tab"
          id="tab-vitals"
          aria-selected={activeMode === "vitals"}
          aria-controls="panel-vitals"
          type="button"
          onClick={() => setActiveMode("vitals")}
          className={`py-2 px-2 text-xs font-mono uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 min-h-[44px] ${
            activeMode === "vitals"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Activity className="size-3.5" aria-hidden="true" />
          <span>Vitals</span>
        </button>
        <button
          role="tab"
          id="tab-ai"
          aria-selected={activeMode === "ai"}
          aria-controls="panel-ai"
          type="button"
          onClick={() => setActiveMode("ai")}
          className={`py-2 px-2 text-xs font-mono uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 min-h-[44px] ${
            activeMode === "ai"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Sparkles className="size-3.5" aria-hidden="true" />
          <span>AI Entity</span>
        </button>
      </div>

      {/* TAB 0: Verified Production Screenshot */}
      {activeMode === "screenshot" && (
        <div role="tabpanel" id="panel-screenshot" aria-labelledby="tab-screenshot" className="space-y-3">
          <div className="border border-border bg-background overflow-hidden">
            {/* Browser Header Bar */}
            <div className="bg-card border-b border-border px-3 py-2 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
              </div>
              <div className="bg-background border border-border px-3 py-0.5 text-center truncate text-[11px] text-foreground max-w-[220px] sm:max-w-[280px]">
                madeenawarriors2k18.vercel.app/about
              </div>
              <span className="text-[10px] uppercase font-bold text-primary border border-primary/40 px-1.5 bg-primary/5">
                Active
              </span>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-card">
              <Image
                src="/work/madeena-warriors.webp"
                alt="Madeena Warriors Platform verified live production interface snapshot"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted-foreground pt-1">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />
              <span>Verified snapshot • October 2026</span>
            </span>
            <a
              href="https://madeenawarriors2k18.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline inline-flex items-center gap-1 min-h-[44px] items-center"
            >
              <span>Launch Live Site</span>
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}

      {/* TAB 1: Google SERP Simulation */}
      {activeMode === "serp" && (
        <div role="tabpanel" id="panel-serp" aria-labelledby="tab-serp" className="space-y-4">
          <div>
            <div className="font-mono text-xs uppercase text-muted-foreground tracking-wider mb-2 font-medium">
              Simulate Brand Query:
            </div>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Query selections">
              {Object.keys(QUERIES).map((q) => (
                <button
                  key={q}
                  type="button"
                  aria-pressed={selectedQueryKey === q}
                  onClick={() => setSelectedQueryKey(q)}
                  className={`px-3 py-1.5 text-xs font-mono transition-all border min-h-[44px] flex items-center ${
                    selectedQueryKey === q
                      ? "border-primary bg-primary/10 text-primary font-bold"
                      : "border-border bg-background text-muted-foreground hover:text-foreground hover:border-border/80"
                  }`}
                >
                  &ldquo;{q}&rdquo;
                </button>
              ))}
            </div>
          </div>

          <div className="border border-border bg-background p-4 space-y-2.5 font-sans">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="size-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold" aria-hidden="true">
                G
              </span>
              <span className="truncate">https://madeenawarriors2k18.vercel.app</span>
              <span className="text-primary font-bold text-xs border border-primary/40 px-1.5 ml-auto">
                #1 RESULT
              </span>
            </div>

            <a
              href="https://madeenawarriors2k18.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-primary hover:underline block leading-snug"
            >
              {currentQuery.title}
            </a>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {currentQuery.snippet}
            </p>

            <div className="pt-2 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {currentQuery.sitelinks.map((s) => (
                <div key={s.title} className="p-2 border border-border/60 bg-card">
                  <div className="text-primary font-bold font-mono text-xs">
                    {s.title}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-sans truncate">
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Core Web Vitals Telemetry */}
      {activeMode === "vitals" && (
        <div role="tabpanel" id="panel-vitals" aria-labelledby="tab-vitals" className="space-y-4">
          <div className="text-xs font-mono text-muted-foreground mb-1">
            Lighthouse Audit run (Observed on Vercel Global Edge, Oct 2026):
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="border border-border bg-background p-3">
              <div className="font-display text-2xl font-bold text-primary">100</div>
              <div className="font-mono text-xs uppercase text-muted-foreground">
                Performance
              </div>
            </div>
            <div className="border border-border bg-background p-3">
              <div className="font-display text-2xl font-bold text-primary">100</div>
              <div className="font-mono text-xs uppercase text-muted-foreground">
                SEO Score
              </div>
            </div>
            <div className="border border-border bg-background p-3">
              <div className="font-display text-2xl font-bold text-foreground">100</div>
              <div className="font-mono text-xs uppercase text-muted-foreground">
                Best Practices
              </div>
            </div>
          </div>

          <div className="border border-border/80 bg-background/70 divide-y divide-border/60 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5">
              <span className="text-muted-foreground">Largest Contentful Paint (LCP)</span>
              <span className="text-primary font-bold">0.6s (Target &lt; 2.5s)</span>
            </div>
            <div className="flex items-center justify-between p-2.5">
              <span className="text-muted-foreground">Cumulative Layout Shift (CLS)</span>
              <span className="text-primary font-bold">0.00 (Target &lt; 0.1)</span>
            </div>
            <div className="flex items-center justify-between p-2.5">
              <span className="text-muted-foreground">Interaction to Next Paint (INP)</span>
              <span className="text-primary font-bold">42ms (Target &lt; 200ms)</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Google AI Overview Simulation */}
      {activeMode === "ai" && (
        <div role="tabpanel" id="panel-ai" aria-labelledby="tab-ai" className="space-y-3 font-sans">
          <div className="border border-primary/40 bg-primary/5 p-4 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
              <Sparkles className="size-4" aria-hidden="true" />
              <span>Simulated AI Overview Entity Citation</span>
            </div>
            <p className="text-xs text-foreground/90 leading-relaxed font-sans">
              <strong>Madeena Warriors 2018</strong> refers to the inaugural O/L batch of KM Al-Madeena Vidyalaya located in Maruthamunai, Eastern Province, Sri Lanka. The community maintains an active digital platform archiving class records, batch representatives, and historical community milestones.
            </p>
            <div className="pt-2 border-t border-primary/20 flex items-center justify-between text-xs font-mono text-muted-foreground">
              <span>Primary Source Entity:</span>
              <a
                href="https://madeenawarriors2k18.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1 min-h-[44px] items-center"
              >
                <span>madeenawarriors2k18</span>
                <ExternalLink className="size-3" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="text-xs font-mono text-muted-foreground bg-background border border-border p-2.5 flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-primary shrink-0" aria-hidden="true" />
            <span>Structured JSON-LD schema validated for search entity recognition</span>
          </div>
        </div>
      )}

      {/* Launch CTA */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-mono">
        <span className="text-muted-foreground">Hosted on Vercel Global Edge</span>
        <a
          href="https://madeenawarriors2k18.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold inline-flex items-center gap-1 hover:underline min-h-[44px] items-center"
        >
          <span>Open Live Site</span>
          <ArrowRight className="size-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
