"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Globe, Search, ChevronDown, ChevronUp } from "lucide-react";
import { SerpTerminal } from "./serp-terminal";

type ProjectCategory = "all" | "digital" | "spatial" | "brand";

interface ProjectItem {
  id: string;
  category: ProjectCategory;
  categoryLabel: string;
  title: string;
  client: string;
  lead: string;
  summary: string;
  image: string;
  imageAlt: string;
  badge: string;
  isLive?: boolean;
  liveUrl?: string;
  specs: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "madeena-warriors",
    category: "digital",
    categoryLabel: "Software & Web Engineering",
    title: "Madeena Warriors Community Platform",
    client: "KM Al-Madeena Batch 2018 (Community Project)",
    lead: "Computer Engineering Lead",
    summary:
      "A fast digital alumni archive engineered with Next.js App Router, structured schema, and sub-second load times. Ranks #1 on Google for its exact brand query.",
    image: "/work/madeena-warriors.webp",
    imageAlt: "Madeena Warriors Platform verified live web interface snapshot",
    badge: "Live in Production",
    isLive: true,
    liveUrl: "https://madeenawarriors2k18.vercel.app/",
    specs: ["Next.js 16 App Router", "Sub-second Edge CDN", "Ranks #1 for Brand Name"],
  },
  {
    id: "commercial-retail-concept",
    category: "spatial",
    categoryLabel: "Physical & Spatial Architecture",
    title: "Commercial Retail Store & Spatial Layout",
    client: "Studio Speculative Concept • Retail Prototype",
    lead: "Landscape Architecture Lead",
    summary:
      "Feasible commercial shop layout incorporating guided customer circulation paths, natural airflow, birch display millwork, and modern storefront exterior elevations.",
    image: "/work/shop-concept.webp",
    imageAlt: "Commercial Retail Shop Concept - 3D architectural interior rendering with birch joinery",
    badge: "Spatial Concept Prototype",
    specs: ["Dual-Aisle Guided Flow", "Custom Millwork Specs", "Façade Brand Elevation"],
  },
  {
    id: "brand-identity-concept",
    category: "brand",
    categoryLabel: "Visual Systems & Brand Design",
    title: "Swiss Grid Brand & Visual Identity System",
    client: "Enterprise Brand System & Guidelines",
    lead: "Product & Brand Lead",
    summary:
      "Disciplined brand identity architecture uniting minimalist isometric monogram design, high-contrast typography specifications, commercial poster layouts, and digital guidelines.",
    image: "/work/brand-concept.webp",
    imageAlt: "Swiss Grid Brand Identity Concept - Stationery mockup with orange foil details",
    badge: "Brand System Specimen",
    specs: ["Isometric Monogram", "Rajdhani + Inter Type", "Foil Stamped Stationery"],
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [showDiagnostics, setShowDiagnostics] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative scroll-mt-20 border-b border-border bg-background py-16 sm:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filters (Inspired by reference Selected Work) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-border mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              <span>Selected Work ({PROJECTS.length})</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-foreground">
              Built with discipline.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Project Categories">
            {[
              { key: "all", label: "All Work" },
              { key: "digital", label: "Web & Software" },
              { key: "spatial", label: "Shop Architecture" },
              { key: "brand", label: "Brand Systems" },
            ].map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key as ProjectCategory)}
                  className={`px-4 py-2 min-h-[44px] text-xs font-mono uppercase tracking-wider transition-all border ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground font-bold"
                      : "border-border bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Tall Visual Showcase Cards Grid (Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-border bg-card flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-xl"
            >
              <div>
                {/* Visual Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-background/90 backdrop-blur-md border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-foreground font-semibold">
                      {project.badge}
                    </span>
                  </div>

                  {/* Discipline Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                    <span className="truncate">{project.categoryLabel}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold uppercase text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="font-mono text-xs text-muted-foreground mb-3">
                    {project.client}
                  </div>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Key Specifications */}
                  <div className="space-y-1.5 border-t border-border pt-4">
                    {project.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-[11px] font-mono text-foreground/90">
                        <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="p-6 pt-0 border-t border-border/60 mt-4 flex items-center justify-between">
                {project.isLive && project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-bold hover:underline min-h-[44px] items-center"
                  >
                    <Globe className="size-3.5" aria-hidden="true" />
                    <span>Launch Live Site</span>
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                    Studio Blueprint Specimen
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Search Diagnostics & SERP Proof Drawer */}
        <div className="border border-border bg-card p-6 transition-all">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-9 bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0">
                <Search className="size-4" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold uppercase text-foreground">
                  Madeena Warriors: Verified Search Telemetry
                </h4>
                <p className="text-xs text-muted-foreground font-sans">
                  Inspect the live Google SERP ranking, Core Web Vitals (100 score), and structured schema telemetry.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowDiagnostics(!showDiagnostics)}
              aria-expanded={showDiagnostics}
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 min-h-[44px] text-xs font-mono uppercase tracking-wider text-foreground hover:border-primary transition-colors self-start sm:self-auto font-semibold"
            >
              <span>{showDiagnostics ? "Hide Diagnostics" : "View SERP Proof"}</span>
              {showDiagnostics ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
            </button>
          </div>

          {showDiagnostics && (
            <div className="mt-6 pt-6 border-t border-border">
              <SerpTerminal />
              <p className="text-[11px] font-mono text-muted-foreground mt-3">
                * Ranking observed on October 2026 for the query &ldquo;madeena warriors&rdquo;. Search engine rankings change over time.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
