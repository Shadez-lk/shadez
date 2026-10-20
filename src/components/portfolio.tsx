"use client";

import React, { useState } from "react";
import { ExternalLink, CheckCircle2, Globe, Sparkles } from "lucide-react";
import { SerpTerminal } from "./serp-terminal";

type ProjectCategory = "all" | "digital" | "brand" | "architecture";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const frameworks = [
    {
      id: "commercial-retail-framework",
      title: "Commercial Retail & Spatial Layout Blueprint",
      client: "Commercial Shop Architecture Specification",
      category: "architecture",
      categoryLabel: "Spatial & Architecture Lead",
      summary:
        "Feasible commercial store layout incorporating optimized customer movement paths, display millwork joins, natural airflow, and modern storefront façade identity.",
      specs: [
        { label: "Discipline", val: "Landscape & Spatial Architecture" },
        { label: "Deliverable", val: "Feasibility Blueprint & Millwork Drawing" },
        { label: "Customer Flow", val: "Optimized Dual-Aisle Circulation" },
        { label: "Status", val: "Turnkey Execution Blueprint" },
      ],
      impact: "Maximized Retail Floor Retention & Visual Appeal",
      badge: "Architecture Framework",
    },
    {
      id: "brand-identity-system",
      title: "Swiss Grid Brand & Visual Identity System",
      client: "Enterprise Brand & Product Design Standard",
      category: "brand",
      categoryLabel: "Product & Visual Design Lead",
      summary:
        "Disciplined brand identity architecture uniting minimalist isometric monogram design, high-contrast Swiss typography rules, commercial posters, and digital product showcase guidelines.",
      specs: [
        { label: "Discipline", val: "Product Design & Brand Systems" },
        { label: "Deliverable", val: "Logo Monogram & Guidelines Spec" },
        { label: "Typography", val: "Rajdhani Condensed Display + Inter" },
        { label: "Status", val: "Multi-Platform Asset Kit" },
      ],
      impact: "Unified Multi-Channel Customer Trust",
      badge: "Brand Identity Framework",
    },
  ];

  return (
    <section id="work" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>04 / SELECTED WORK</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">VERIFIED PROOF & PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Ideas to impact.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              We judge studio quality by real-world performance. From verified #1 Google organic rankings to complete architectural shop layouts.
            </p>
          </div>
        </div>

        {/* Highlight 1: Flagship Live Verified Case Study (Madeena Warriors) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold flex items-center gap-2">
              <span className="size-2 bg-primary rounded-full animate-pulse" />
              <span>Flagship Live Case Study • Verified Top-Rank SEO Engineering</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary font-bold hidden sm:inline-block">
              Live in Production
            </span>
          </div>

          <div className="relative border-2 border-primary bg-card p-7 sm:p-10 shadow-xl shadow-primary/5">
            {/* Corner Markers */}
            <span className="absolute -top-1.5 -left-1.5 text-primary font-mono text-sm select-none">┌</span>
            <span className="absolute -top-1.5 -right-1.5 text-primary font-mono text-sm select-none">┐</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-primary font-mono text-sm select-none">└</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-primary font-mono text-sm select-none">┘</span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main Content */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                      DIGITAL & SOFTWARE ENGINEERING
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-bold">
                      VERIFIED #1 GOOGLE RANK
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                      MARUTHAMUNAI, LK
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase text-foreground mb-3 leading-tight">
                    Madeena Warriors Community Platform
                  </h3>

                  <div className="font-mono text-xs text-muted-foreground mb-4">
                    Client: KM Maruthamunai Al-Madeena Vidyalaya Batch 2018
                  </div>

                  <p className="text-sm text-foreground/90 font-sans leading-relaxed mb-4">
                    Engineered from the ground up as a high-speed digital alumni platform and media archive. Leveraging Next.js App Router, structured JSON-LD schemas, and clean crawlable hierarchies, the platform conquered Google search to secure the <strong>#1 organic position</strong> with rich sitelinks and direct Google AI Overview citations.
                  </p>
                </div>

                {/* Proof Metrics Table */}
                <div className="border border-border/80 bg-background/80 p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Google Search
                    </div>
                    <div className="font-display text-2xl font-bold text-primary mt-0.5">
                      Rank #1
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground">
                      Query: &ldquo;madeena warriors&rdquo;
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Rich Features
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground mt-0.5">
                      Sitelinks
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground">
                      Multi-tier SERP presence
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      AI Overview
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground mt-0.5 flex items-center gap-1.5">
                      <Sparkles className="size-5 text-primary" />
                      <span>Cited</span>
                    </div>
                    <div className="text-[11px] font-mono text-muted-foreground">
                      Direct Google Knowledge source
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://madeenawarriors2k18.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold hover:bg-brand-orange-hover transition-all"
                  >
                    <Globe className="size-3.5" />
                    <span>Launch Live Platform</span>
                    <ExternalLink className="size-3.5" />
                  </a>

                  <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" />
                    <span>Tested on Vercel Edge Global CDN</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Visual Search Proof Terminal */}
              <div className="lg:col-span-5">
                <SerpTerminal />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters for Studio Frameworks */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Studio Framework Blueprints:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { key: "all", label: "All Frameworks" },
              { key: "architecture", label: "Spatial & Shop Layouts" },
              { key: "brand", label: "Brand & Visual Identity" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as ProjectCategory)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all border ${
                  activeTab === tab.key
                    ? "border-primary bg-primary text-primary-foreground font-bold"
                    : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-border/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Framework Blueprints Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworks
            .filter((item) => activeTab === "all" || item.category === activeTab)
            .map((item) => (
              <div
                key={item.id}
                className="relative border border-border bg-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/60"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
                    <span className="font-mono text-xs text-primary font-semibold uppercase">
                      {item.categoryLabel}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold uppercase text-foreground mb-3">
                    {item.title}
                  </h3>

                  <div className="font-mono text-xs text-muted-foreground mb-4">
                    Context: {item.client}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6">
                    {item.summary}
                  </p>
                </div>

                <div>
                  {/* Specification Table */}
                  <div className="border border-border/70 bg-background/60 p-4 mb-5 space-y-2">
                    {item.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between text-xs font-mono"
                      >
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="text-foreground font-medium">{spec.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 flex items-center justify-between font-mono text-xs">
                    <span className="text-muted-foreground uppercase text-[10px] tracking-wider">
                      Studio Impact:
                    </span>
                    <span className="text-foreground font-semibold">{item.impact}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
