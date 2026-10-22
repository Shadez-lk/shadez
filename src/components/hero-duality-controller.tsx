"use client";

import React, { useState } from "react";
import { CheckCircle2, Code2, Building2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

type DualityLens = "spatial" | "digital" | "synergy";

interface LensData {
  id: DualityLens;
  tabLabel: string;
  leadRole: string;
  headline: string;
  summary: string;
  specs: { label: string; value: string }[];
  deliverableBadge: string;
  deliverableText: string;
  icon: React.ElementType;
}

const LENS_DATA: Record<DualityLens, LensData> = {
  spatial: {
    id: "spatial",
    tabLabel: "Shop Design",
    leadRole: "Landscape Architecture Lead",
    headline: "Commercial Shop & Spatial Design",
    summary:
      "Physical store design planned for customer retention, optimal aisle circulation, and impactful storefront street visibility.",
    specs: [
      { label: "Circulation Flow", value: "Clear customer-guided path" },
      { label: "Zoning Strategy", value: "High-margin display focal points" },
      { label: "Storefront Façade", value: "Modern exterior brand elevation" },
      { label: "Drawings", value: "Feasibility plans and millwork drawings" },
    ],
    deliverableBadge: "Spatial Deliverables",
    deliverableText: "Architectural floor plans and commercial interior drawings ready for build.",
    icon: Building2,
  },
  digital: {
    id: "digital",
    tabLabel: "Websites",
    leadRole: "Computer Engineering Lead",
    headline: "Fast, Search-Friendly Websites",
    summary:
      "Custom web applications engineered with Next.js, clean structure, fast loading times, and proper metadata so search engines find your site.",
    specs: [
      { label: "Architecture", value: "Next.js 16 + React Server Components" },
      { label: "Performance", value: "Sub-second load times on global edge CDN" },
      { label: "Search Visibility", value: "Clean semantic markup and structured schema" },
      { label: "Mobile First", value: "Responsive across 100% of device screen sizes" },
    ],
    deliverableBadge: "Web Deliverables",
    deliverableText: "Fast, search-ready web application built to convert visitors.",
    icon: Code2,
  },
  synergy: {
    id: "synergy",
    tabLabel: "Shop + Web Together",
    leadRole: "Unified Studio Contract",
    headline: "Shop + Website, Built Together",
    summary:
      "For retail clients: We design your physical commercial shop, build your search-optimized website, and launch your targeted social ads.",
    specs: [
      { label: "Studio Contract", value: "One team, one contract" },
      { label: "Collaboration", value: "Direct collaboration with makers" },
      { label: "Consistency", value: "Storefront, website, and ads aligned" },
      { label: "Communication", value: "Zero fragmented agency handoffs" },
    ],
    deliverableBadge: "Unified Value",
    deliverableText: "Physical space and digital presence launched together without agency confusion.",
    icon: Sparkles,
  },
};

export function HeroDualityController() {
  const [activeLens, setActiveLens] = useState<DualityLens>("synergy");

  const current = LENS_DATA[activeLens];
  const Icon = current.icon;

  return (
    <div className="relative border border-border bg-card p-6 sm:p-7 backdrop-blur-md shadow-2xl shadow-black/10 transition-all duration-300 hover:border-primary/70">
      {/* Swiss Architectural Corner Registration Ticks (Screen-reader hidden) */}
      <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 text-primary font-mono text-xs select-none">┌</span>
      <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 text-primary font-mono text-xs select-none">┐</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -left-1.5 text-primary font-mono text-xs select-none">└</span>
      <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 text-primary font-mono text-xs select-none">┘</span>

      {/* Terminal Header (Plain language per Section 3.5 & 4.1) */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3.5 mb-5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
            What We Do • Physical & Digital
          </span>
        </div>
        <div className="font-mono text-[11px] text-muted-foreground">
          <span className="text-primary font-semibold">Two Leads. One Team.</span>
        </div>
      </div>

      {/* Tactile Accessible Segmented Lens Switcher (Section 5.5) */}
      <div className="mb-5">
        <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-2 flex items-center justify-between">
          <span>Explore Discipline:</span>
          <span className="text-primary font-medium text-[10px]">Click to view details</span>
        </div>
        <div
          role="tablist"
          aria-label="Discipline Switcher"
          className="grid grid-cols-3 gap-1.5 p-1 bg-background border border-border"
        >
          {(["spatial", "digital", "synergy"] as DualityLens[]).map((lens) => (
            <button
              key={lens}
              role="tab"
              id={`tab-${lens}`}
              aria-selected={activeLens === lens}
              aria-controls={`panel-${lens}`}
              type="button"
              onClick={() => setActiveLens(lens)}
              className={`py-2 px-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 text-center font-bold relative min-h-[44px] ${
                activeLens === lens
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              {LENS_DATA[lens].tabLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Specification Display (Accessible Tabpanel) */}
      <div
        role="tabpanel"
        id={`panel-${activeLens}`}
        aria-labelledby={`tab-${activeLens}`}
        className="space-y-4 min-h-[220px] flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between font-mono text-xs text-primary font-bold uppercase mb-1">
            <span className="inline-flex items-center gap-1.5">
              <Icon className="size-3.5 text-primary" aria-hidden="true" />
              <span>{current.headline}</span>
            </span>
            <span className="text-muted-foreground font-normal text-[11px]">
              {current.leadRole}
            </span>
          </div>

          <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-3">
            {current.summary}
          </p>

          {/* Specification Grid (Plain language) */}
          <div className="border border-border/80 bg-background/90 divide-y divide-border/60">
            {current.specs.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-3 py-2 text-xs font-mono"
              >
                <span className="text-muted-foreground">{item.label}</span>
                <span className="text-foreground font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverable Callout */}
        <div className="border-l-2 border-primary bg-primary/5 px-3.5 py-2.5 font-mono text-xs">
          <div className="text-primary font-bold uppercase text-[11px] tracking-wider mb-0.5">
            {current.deliverableBadge}
          </div>
          <div className="text-foreground/90 font-sans text-xs">
            {current.deliverableText}
          </div>
        </div>
      </div>

      {/* Terminal Verified Proof Footer */}
      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          <span>Maruthamunai, Sri Lanka</span>
        </div>
        <Link
          href="#work"
          className="text-primary font-bold inline-flex items-center gap-1 hover:underline min-h-[44px] items-center"
        >
          <CheckCircle2 className="size-3.5" aria-hidden="true" />
          <span>See Real Projects</span>
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
