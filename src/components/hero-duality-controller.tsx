"use client";

import React, { useState, useRef } from "react";
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
    tabLabel: "01 / Spatial",
    leadRole: "Landscape Architecture Lead",
    headline: "Commercial Retail & Shop Layouts",
    summary:
      "Physical store design engineered for customer retention, optimal aisle circulation, and impactful storefront street visibility.",
    specs: [
      { label: "Circulation Flow", value: "Dual-Aisle Guided Path" },
      { label: "Zoning Strategy", value: "High-Margin Focal Points" },
      { label: "Façade Identity", value: "Swiss Grid Exterior Elevation" },
      { label: "Execution Standard", value: "Feasibility Millwork Drawings" },
    ],
    deliverableBadge: "Spatial Deliverable",
    deliverableText: "Architectural floorplans & commercial interior specs ready for build.",
    icon: Building2,
  },
  digital: {
    id: "digital",
    tabLabel: "02 / Digital",
    leadRole: "Computer Engineering Lead",
    headline: "Next.js Web Systems & #1 Google SEO",
    summary:
      "High-velocity dynamic web applications engineered to dominate Google organic rankings and convert traffic with sub-second speeds.",
    specs: [
      { label: "Search Standing", value: "Rank #1 Google SERP" },
      { label: "Architecture", value: "Next.js 16 + Server Components" },
      { label: "Performance LCP", value: "≤ 0.6s on Vercel Global Edge" },
      { label: "Structured Data", value: "Rich JSON-LD Sitelinks & AI Schema" },
    ],
    deliverableBadge: "Digital Deliverable",
    deliverableText: "#1 Google Search presence with sub-second page performance.",
    icon: Code2,
  },
  synergy: {
    id: "synergy",
    tabLabel: "03 / Studio Synergy",
    leadRole: "Unified Studio Contract",
    headline: "The Load-Bearing Dual Engine",
    summary:
      "For retail clients: We design your physical commercial shop, build your #1 Google-ranked web platform, and launch your targeted social ads.",
    specs: [
      { label: "Studio Contract", value: "Single Point of Accountability" },
      { label: "Agency Disconnect", value: "100% Eliminated (Zero Handoffs)" },
      { label: "Cross-Discipline", value: "Façade + Web + Social Ads Aligned" },
      { label: "Founder Access", value: "Direct Collaboration With Makers" },
    ],
    deliverableBadge: "Unified Value",
    deliverableText: "Physical space + digital engine launched seamlessly together.",
    icon: Sparkles,
  },
};

export function HeroDualityController() {
  const [activeLens, setActiveLens] = useState<DualityLens>("synergy");
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    setCoords({ x, y });
  };

  const current = LENS_DATA[activeLens];
  const Icon = current.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative border border-border bg-card p-6 sm:p-7 backdrop-blur-md shadow-2xl shadow-black/10 transition-all duration-300 hover:border-primary/70"
    >
      {/* Swiss Architectural Corner Registration Ticks */}
      <span className="absolute -top-1.5 -left-1.5 text-primary font-mono text-xs select-none">┌</span>
      <span className="absolute -top-1.5 -right-1.5 text-primary font-mono text-xs select-none">┐</span>
      <span className="absolute -bottom-1.5 -left-1.5 text-primary font-mono text-xs select-none">└</span>
      <span className="absolute -bottom-1.5 -right-1.5 text-primary font-mono text-xs select-none">┘</span>

      {/* Terminal Header & Telemetry Bar (Arc UI + Componentry) */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3.5 mb-5">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">
            DUALITY SPECIFICATION ENGINE
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground">
          <span className="hidden sm:inline">
            POS: [X: {coords.x}, Y: {coords.y}]
          </span>
          <span className="text-border">|</span>
          <span className="text-primary font-semibold">REV 2026.02</span>
        </div>
      </div>

      {/* Tactile Segmented Lens Switcher (Space UI / Arc UI pattern) */}
      <div className="mb-5">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 flex items-center justify-between">
          <span>SELECT INTERACTIVE LENS:</span>
          <span className="text-primary font-semibold">CLICK TO SWITCH</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 p-1 bg-background border border-border">
          {(["spatial", "digital", "synergy"] as DualityLens[]).map((lens) => (
            <button
              key={lens}
              type="button"
              onClick={() => setActiveLens(lens)}
              className={`py-2 px-2 text-[11px] font-mono uppercase tracking-wider transition-all duration-200 text-center font-bold relative ${
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

      {/* Dynamic Specification Display */}
      <div className="space-y-4 min-h-[220px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between font-mono text-xs text-primary font-bold uppercase mb-1">
            <span className="inline-flex items-center gap-1.5">
              <Icon className="size-3.5 text-primary" />
              <span>{current.headline}</span>
            </span>
            <span className="text-muted-foreground font-normal text-[10px]">
              {current.leadRole}
            </span>
          </div>

          <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-3">
            {current.summary}
          </p>

          {/* Micro Specification Grid */}
          <div className="border border-border/80 bg-background/90 divide-y divide-border/60">
            {current.specs.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-3 py-1.5 text-[11px] font-mono"
              >
                <span className="text-muted-foreground">{item.label}</span>
                <span className="text-foreground font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverable Callout */}
        <div className="border-l-2 border-primary bg-primary/5 px-3 py-2 font-mono text-[11px]">
          <div className="text-primary font-bold uppercase text-[10px] tracking-wider mb-0.5">
            {current.deliverableBadge}
          </div>
          <div className="text-foreground/90 font-sans text-xs">
            {current.deliverableText}
          </div>
        </div>
      </div>

      {/* Terminal Verified Proof Footer */}
      <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          <span>Maruthamunai, Sri Lanka</span>
        </div>
        <Link
          href="#work"
          className="text-primary font-bold inline-flex items-center gap-1 hover:underline"
        >
          <CheckCircle2 className="size-3" />
          <span>See Live Proof</span>
          <ArrowRight className="size-3" />
        </Link>
      </div>
    </div>
  );
}
