"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle2, Globe, Sparkles, Building2, Layers } from "lucide-react";
import { SerpTerminal } from "./serp-terminal";

type ProjectCategory = "all" | "digital" | "brand" | "architecture";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const concepts = [
    {
      id: "commercial-retail-concept",
      title: "Commercial Retail & Shop Layout Concept",
      context: "Studio Speculative Prototype / Retail Spatial Design",
      category: "architecture",
      categoryLabel: "Landscape & Spatial Architecture Lead",
      summary:
        "Feasible commercial shop layout incorporating optimized customer movement paths, display millwork joins, natural airflow, and modern storefront façade identity.",
      image: "/work/shop-concept.webp",
      imageAlt: "Commercial Retail & Shop Layout Concept - Architectural 3D interior with birch millwork and guided circulation corridor",
      imageBadge: "3D Spatial Prototype",
      specs: [
        { label: "Discipline", val: "Spatial & Shop Architecture" },
        { label: "Deliverables", val: "Floor plan, elevations, millwork details" },
        { label: "Circulation Flow", val: "Dual-aisle guided path" },
        { label: "Status", val: "Studio concept blueprint" },
      ],
      badge: "Studio Concept",
      icon: Building2,
    },
    {
      id: "brand-identity-concept",
      title: "Swiss Grid Brand & Visual Identity Concept",
      context: "Enterprise Brand System & Product Guidelines",
      category: "brand",
      categoryLabel: "Product & Brand Design Lead",
      summary:
        "Disciplined brand identity architecture uniting minimalist isometric monogram design, high-contrast typography specifications, commercial poster layouts, and digital product showcase guidelines.",
      image: "/work/brand-concept.webp",
      imageAlt: "Swiss Grid Brand & Visual Identity Concept - Mockup specimen with typography sheets and orange foil details",
      imageBadge: "Brand System Specimen",
      specs: [
        { label: "Discipline", val: "Brand & Visual Identity Design" },
        { label: "Deliverables", val: "Logo mark, color palette, type specimen" },
        { label: "Typography", val: "Rajdhani Condensed Display + Inter" },
        { label: "Status", val: "Studio concept guideline" },
      ],
      badge: "Studio Concept",
      icon: Layers,
    },
  ];

  return (
    <section id="work" className="relative scroll-mt-20 border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Plain language per Section 2.1 & 4.1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>Work</span>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <span className="text-muted-foreground">Projects & Concepts</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Real projects. Real results.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              We judge studio quality by real-world performance. From live search-friendly community web platforms to commercial shop concepts.
            </p>
          </div>
        </div>

        {/* Highlight 1: Flagship Live Production Case Study (Madeena Warriors) */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold flex items-center gap-2">
              <span className="size-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              <span>Live Case Study • Digital Alumni Platform</span>
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold hidden sm:inline-block">
              Live in Production
            </span>
          </div>

          <div className="relative border-2 border-primary bg-card p-7 sm:p-10 shadow-xl shadow-primary/5">
            {/* Corner Markers (Screen-reader hidden) */}
            <span aria-hidden="true" className="absolute -top-1.5 -left-1.5 text-primary font-mono text-sm select-none">┌</span>
            <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 text-primary font-mono text-sm select-none">┐</span>
            <span aria-hidden="true" className="absolute -bottom-1.5 -left-1.5 text-primary font-mono text-sm select-none">└</span>
            <span aria-hidden="true" className="absolute -bottom-1.5 -right-1.5 text-primary font-mono text-sm select-none">┘</span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Main Content */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                      Websites & Software
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-primary border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-bold">
                      Ranks #1 for its brand name
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                      Maruthamunai, LK
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase text-foreground mb-2 leading-tight">
                    Madeena Warriors Platform
                  </h3>

                  <div className="font-mono text-xs text-muted-foreground mb-4 font-medium">
                    Client: KM Maruthamunai Al-Madeena Vidyalaya Batch 2018 (community project)
                  </div>

                  <p className="text-sm text-foreground/90 font-sans leading-relaxed mb-4">
                    Engineered as a fast digital alumni directory and media archive for a local school batch. Built with Next.js App Router, clean semantic structure, and JSON-LD schema, the platform ranks #1 on Google for its exact brand query &ldquo;madeena warriors&rdquo; with multi-tier sitelinks.
                  </p>
                </div>

                {/* Proof Metrics Table */}
                <div className="border border-border/80 bg-background/80 p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Search Standing
                    </div>
                    <div className="font-display text-2xl font-bold text-primary mt-0.5">
                      Rank #1
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      Query: &ldquo;madeena warriors&rdquo;
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Google Features
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground mt-0.5">
                      Sitelinks
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      Multi-tier SERP presence
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      Search Entity
                    </div>
                    <div className="font-display text-2xl font-bold text-foreground mt-0.5 flex items-center gap-1.5">
                      <Sparkles className="size-4 text-primary" aria-hidden="true" />
                      <span>Indexed</span>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">
                      Structured entity data
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <a
                    href="https://madeenawarriors2k18.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary px-6 py-3 min-h-[44px] text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold hover:bg-brand-orange-hover transition-all"
                  >
                    <Globe className="size-3.5" aria-hidden="true" />
                    <span>Launch Live Platform</span>
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>

                  <div className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" aria-hidden="true" />
                    <span>Hosted on Vercel Global Edge CDN</span>
                  </div>
                </div>

                {/* Footnote per Section 2.1 */}
                <p className="text-xs text-muted-foreground font-mono mt-1 border-t border-border/40 pt-3">
                  * Ranking observed on October 2026 for the query &ldquo;madeena warriors&rdquo;. Search engine rankings change over time.
                </p>
              </div>

              {/* Right Side: Visual Search Proof Terminal */}
              <div className="lg:col-span-5">
                <SerpTerminal />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters for Studio Concepts (Section 2.3) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Filter Studio Concepts:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Category filters">
            {[
              { key: "all", label: "All Concepts" },
              { key: "architecture", label: "Shop & Spatial Design" },
              { key: "brand", label: "Brand Identity" },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key as ProjectCategory)}
                className={`px-3 py-1.5 min-h-[44px] font-mono text-xs uppercase tracking-wider transition-all border ${
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

        {/* Concept Cards Grid (Section 2.3 Factual & Honest) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts
            .filter((item) => activeTab === "all" || item.category === activeTab)
            .map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative border border-border bg-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/60"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
                      <span className="font-mono text-xs text-primary font-semibold uppercase flex items-center gap-1.5">
                        <Icon className="size-3.5" aria-hidden="true" />
                        <span>{item.categoryLabel}</span>
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold uppercase text-foreground mb-2">
                      {item.title}
                    </h3>

                    <div className="font-mono text-xs text-muted-foreground mb-4">
                      Context: {item.context}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6">
                      {item.summary}
                    </p>

                    {/* Concept Visual Asset */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden border border-border bg-background mb-6 group">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2.5 left-2.5 bg-background/90 backdrop-blur-sm border border-border px-2.5 py-1 font-mono text-[10px] text-foreground uppercase tracking-wider flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                        <span>{item.imageBadge}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    {/* Specification Table */}
                    <div className="border border-border/70 bg-background/60 p-4 mb-4 space-y-2">
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
                      <span className="text-muted-foreground uppercase text-[11px] tracking-wider">
                        Engagement Scope:
                      </span>
                      <span className="text-foreground font-semibold">Available for Custom Client Commission</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
