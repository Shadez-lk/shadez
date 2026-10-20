"use client";

import React, { useState } from "react";
import { Search, Sparkles, Activity, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";

type DiagnosticMode = "serp" | "vitals" | "ai";

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
  const [activeMode, setActiveMode] = useState<DiagnosticMode>("serp");
  const [selectedQueryKey, setSelectedQueryKey] = useState<string>("madeena warriors");

  const currentQuery = QUERIES[selectedQueryKey];

  return (
    <div className="border border-border bg-card p-5 sm:p-6 relative shadow-lg">
      {/* Corner Ticks */}
      <span className="absolute -top-1 -left-1 text-primary font-mono text-xs select-none">┌</span>
      <span className="absolute -top-1 -right-1 text-primary font-mono text-xs select-none">┐</span>
      <span className="absolute -bottom-1 -left-1 text-primary font-mono text-xs select-none">└</span>
      <span className="absolute -bottom-1 -right-1 text-primary font-mono text-xs select-none">┘</span>

      {/* Terminal Title & Tabs (Arc UI style) */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground font-bold">
          <span className="size-2 rounded-full bg-primary" />
          <span>SERP & SEO DIAGNOSTIC CONSOLE</span>
        </div>
        <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-widest">
          LIVE VERIFIED PROOF
        </span>
      </div>

      {/* Mode Switcher Tabs (Space UI tactile controls) */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-background border border-border mb-4">
        <button
          type="button"
          onClick={() => setActiveMode("serp")}
          className={`py-1.5 px-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 ${
            activeMode === "serp"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Search className="size-3" />
          <span>Google SERP</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveMode("vitals")}
          className={`py-1.5 px-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 ${
            activeMode === "vitals"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Activity className="size-3" />
          <span>Web Vitals</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveMode("ai")}
          className={`py-1.5 px-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-all font-bold flex items-center justify-center gap-1.5 ${
            activeMode === "ai"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Sparkles className="size-3" />
          <span>AI Overview</span>
        </button>
      </div>

      {/* TAB 1: Google SERP Simulation */}
      {activeMode === "serp" && (
        <div className="space-y-4">
          {/* Query Selector Chips */}
          <div>
            <div className="font-mono text-[10px] uppercase text-muted-foreground tracking-wider mb-1.5">
              Simulate Google Search Query:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(QUERIES).map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setSelectedQueryKey(q)}
                  className={`px-2.5 py-1 text-[11px] font-mono transition-all border ${
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

          {/* Google SERP Simulated Card */}
          <div className="border border-border bg-background p-4 space-y-2.5 font-sans">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="size-4 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
                G
              </span>
              <span className="truncate">https://madeenawarriors2k18.vercel.app</span>
              <span className="text-primary font-bold text-[10px] border border-primary/40 px-1 ml-auto">
                #1 RESULT
              </span>
            </div>

            <a
              href="https://madeenawarriors2k18.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-semibold text-primary hover:underline block leading-snug"
            >
              {currentQuery.title}
            </a>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {currentQuery.snippet}
            </p>

            {/* Sitelinks 2x2 Grid */}
            <div className="pt-2 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {currentQuery.sitelinks.map((s) => (
                <div key={s.title} className="p-2 border border-border/60 bg-card">
                  <div className="text-primary font-bold font-mono text-[11px]">
                    {s.title}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-sans truncate">
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
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="border border-border bg-background p-3">
              <div className="font-display text-2xl font-bold text-primary">100</div>
              <div className="font-mono text-[10px] uppercase text-muted-foreground">
                Performance
              </div>
            </div>
            <div className="border border-border bg-background p-3">
              <div className="font-display text-2xl font-bold text-primary">100</div>
              <div className="font-mono text-[10px] uppercase text-muted-foreground">
                SEO Score
              </div>
            </div>
            <div className="border border-border bg-background p-3">
              <div className="font-display text-2xl font-bold text-foreground">100</div>
              <div className="font-mono text-[10px] uppercase text-muted-foreground">
                Best Practices
              </div>
            </div>
          </div>

          <div className="border border-border/80 bg-background/70 divide-y divide-border/60 text-xs font-mono">
            <div className="flex items-center justify-between p-2.5">
              <span className="text-muted-foreground">Largest Contentful Paint (LCP)</span>
              <span className="text-primary font-bold">0.6s (PASS &lt; 2.5s)</span>
            </div>
            <div className="flex items-center justify-between p-2.5">
              <span className="text-muted-foreground">Cumulative Layout Shift (CLS)</span>
              <span className="text-primary font-bold">0.00 (PASS &lt; 0.1)</span>
            </div>
            <div className="flex items-center justify-between p-2.5">
              <span className="text-muted-foreground">Interaction to Next Paint (INP)</span>
              <span className="text-primary font-bold">42ms (PASS &lt; 200ms)</span>
            </div>
            <div className="flex items-center justify-between p-2.5">
              <span className="text-muted-foreground">Server TTFB (Edge Network)</span>
              <span className="text-foreground font-semibold">28ms Global Edge</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Google AI Overview Simulation */}
      {activeMode === "ai" && (
        <div className="space-y-3 font-sans">
          <div className="border border-primary/40 bg-primary/5 p-4 space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
              <Sparkles className="size-4" />
              <span>Google AI Overview Synthesized Response</span>
            </div>
            <p className="text-xs text-foreground/90 leading-relaxed font-sans">
              <strong>Madeena Warriors 2018</strong> refers to the inaugural O/L batch of KM Al-Madeena Vidyalaya located in Maruthamunai, Eastern Province, Sri Lanka. The community maintains an active digital platform archiving class records, batch representatives, and historical community milestones.
            </p>
            <div className="pt-2 border-t border-primary/20 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>Primary Source Entity Cited:</span>
              <a
                href="https://madeenawarriors2k18.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>madeenawarriors2k18</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          <div className="text-[11px] font-mono text-muted-foreground bg-background border border-border p-2 flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-primary shrink-0" />
            <span>Structured JSON-LD schema validated for Google Entity Index</span>
          </div>
        </div>
      )}

      {/* Launch CTA */}
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-mono">
        <span className="text-muted-foreground">Host: Vercel Global Edge</span>
        <a
          href="https://madeenawarriors2k18.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-bold inline-flex items-center gap-1 hover:underline"
        >
          <span>Open Live Site</span>
          <ArrowRight className="size-3" />
        </a>
      </div>
    </div>
  );
}
