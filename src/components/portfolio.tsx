"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

type ProjectCategory = "all" | "digital" | "brand" | "architecture";

interface Project {
  id: string;
  title: string;
  client: string;
  category: "digital" | "brand" | "architecture";
  categoryLabel: string;
  summary: string;
  stack: string[];
  metrics: string;
  href?: string;
  isConcept?: boolean;
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: "madeena-warriors",
      title: "Madeena Warriors Community Platform",
      client: "KM Maruthamunai Al-Madeena Vidyalaya Batch 2018",
      category: "digital",
      categoryLabel: "Digital & Software",
      summary:
        "Official digital alumni archive, batch directory, and social platform. Engineered with high-velocity code and structured metadata to achieve the #1 Google ranking with sitelinks and AI Overview inclusion.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Top-Tier SEO"],
      metrics: "#1 Google Search Rank • Rich Sitelinks & AI Overview Featured",
      href: "https://madeenawarriors2k18.vercel.app/",
      isConcept: false,
    },
    {
      id: "commercial-retail-framework",
      title: "Commercial Retail & Spatial Framework",
      client: "Studio Architecture & Spatial Blueprint",
      category: "architecture",
      categoryLabel: "Architecture & Spatial",
      summary:
        "Feasible commercial shop layout blueprint incorporating optimized customer circulation flow, display millwork, natural ventilation, and attractive storefront facade design.",
      stack: ["Spatial Planning", "Storefront Facade", "Shop Interior", "Feasibility Blueprint"],
      metrics: "Optimized Customer Flow • Attractive Spatial Impact",
      isConcept: true,
    },
    {
      id: "brand-identity-system",
      title: "Brand & Visual Identity System",
      client: "Modern Enterprise Identity Framework",
      category: "brand",
      categoryLabel: "Brand & Design",
      summary:
        "Disciplined brand identity system unifying logo design, Swiss typography hierarchy, commercial marketing posters, and digital showcase standards across all customer touchpoints.",
      stack: ["Logo Design", "Visual Guidelines", "Product Showcases", "Poster Systems"],
      metrics: "Unified Brand System • Multi-Platform Consistency",
      isConcept: true,
    },
    {
      id: "digital-growth-framework",
      title: "Algorithmic Growth & Web Framework",
      client: "Digital Marketing & Platform Prototype",
      category: "digital",
      categoryLabel: "Digital & Marketing",
      summary:
        "Full-funnel digital marketing model connecting high-converting web landing pages with targeted social media advertising campaigns and conversion tracking.",
      stack: ["High-Converting Web", "Meta Ads", "Google Search", "Funnel Analytics"],
      metrics: "Targeted Audience Reach • Data-Driven Conversions",
      isConcept: true,
    },
  ];

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="work" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8 mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              04 / SELECTED WORK
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Ideas to impact.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground font-sans leading-relaxed">
            A curated showcase of high-ranking software platforms, disciplined visual identities, and commercial spatial blueprints.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { key: "all", label: "All Projects" },
            { key: "digital", label: "Digital & Software" },
            { key: "architecture", label: "Architecture & Spatial" },
            { key: "brand", label: "Brand & Design" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as ProjectCategory)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border ${
                activeTab === tab.key
                  ? "border-primary bg-primary text-primary-foreground font-bold shadow-md shadow-primary/10"
                  : "border-border bg-card/60 text-muted-foreground hover:text-foreground hover:border-border/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative border border-border bg-card p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Corner markers */}
              <span className="absolute -top-1 -left-1 text-primary/40 font-mono text-[10px] select-none">┌</span>
              <span className="absolute -top-1 -right-1 text-primary/40 font-mono text-[10px] select-none">┐</span>
              <span className="absolute -bottom-1 -left-1 text-primary/40 font-mono text-[10px] select-none">└</span>
              <span className="absolute -bottom-1 -right-1 text-primary/40 font-mono text-[10px] select-none">┘</span>

              <div>
                <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-6">
                  <span className="font-mono text-xs text-primary font-semibold uppercase">
                    {project.categoryLabel}
                  </span>
                  {project.isConcept ? (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                      Studio Framework
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/40 bg-primary/5 px-2 py-0.5 font-bold">
                      Live Showcase
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-foreground mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      aria-label={`Visit live project ${project.title}`}
                    >
                      <ExternalLink className="size-5" />
                    </a>
                  ) : (
                    <ArrowUpRight className="size-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  )}
                </h3>

                <div className="font-mono text-xs text-muted-foreground mb-4">
                  Client / Context: {project.client}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6">
                  {project.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="bg-background border border-border px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="border-t border-border/80 pt-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span className="text-[10px] uppercase tracking-wider">Impact</span>
                  <span className="text-foreground font-semibold">{project.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
