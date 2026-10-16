"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
  isConcept?: boolean;
}

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      id: "nexcart",
      title: "NexCart Omnichannel Platform",
      client: "NexCart Retail Group",
      category: "digital",
      categoryLabel: "Digital & Software",
      summary:
        "Unified e-commerce infrastructure, warehouse sync, and multi-terminal in-store point of sale for family fashion retailers.",
      stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      metrics: "3.4x Faster Checkout • 99.98% Uptime",
    },
    {
      id: "belivewave",
      title: "BeliveWave ECS406 Fraud Detection",
      client: "Financial Technology Core",
      category: "digital",
      categoryLabel: "Digital & AI/ML",
      summary:
        "High-throughput machine learning pipeline classifying credit card anomalies with ultra-low latency inference.",
      stack: ["FastAPI", "Python", "XGBoost", "Docker"],
      metrics: "95.4% Precision • <45ms Latency",
    },
    {
      id: "maruthamunai",
      title: "MaruthamunAI Predictive Analytics",
      client: "Enterprise Decision Systems",
      category: "digital",
      categoryLabel: "Digital & AI/ML",
      summary:
        "Regional economic forecasting dashboard combining real-time data ingestion, automated reporting, and interactive visualizations.",
      stack: ["Python", "FastAPI", "React", "Tailwind CSS"],
      metrics: "12,000+ Daily Records Analyzed",
    },
    {
      id: "kandyan-heritage",
      title: "Kandyan Heritage Flagship Store",
      client: "Commercial Retail Client",
      category: "architecture",
      categoryLabel: "Architecture & Spatial",
      summary:
        "Turnkey commercial interior layout, customer circulation planning, custom display joinery, and lighting system for a 2,400 sq.ft retail space.",
      stack: ["Spatial Planning", "Interior Architecture", "Custom Millwork", "Lighting Design"],
      metrics: "40% Higher Floor Retention",
      isConcept: false,
    },
    {
      id: "galle-coastal-pavilion",
      title: "Southern Coastal Pavilion & Cafe",
      client: "Hospitality Collective Galle",
      category: "architecture",
      categoryLabel: "Architecture & Spatial",
      summary:
        "Open-plan beachfront commercial structure featuring climate-responsive natural ventilation, timber canopy framing, and integrated POS counters.",
      stack: ["Tropical Modernism", "Structural Systems", "Commercial Layout"],
      metrics: "Zero AC Operating Footprint",
      isConcept: true,
    },
    {
      id: "madeena-warriors",
      title: "Madeena Warriors Community Platform",
      client: "Sports & Youth Organization",
      category: "brand",
      categoryLabel: "Brand & Design",
      summary:
        "Complete visual identity redesign, typography system, merchandise branding, and member registration digital portal.",
      stack: ["Visual Identity", "UI/UX Design", "Next.js", "Tailwind CSS"],
      metrics: "15,000+ Active Members",
    },
    {
      id: "hdl-parking",
      title: "HDL Smart Urban Parking System",
      client: "Municipal Infrastructure",
      category: "digital",
      categoryLabel: "Digital & IoT",
      summary:
        "Sensor-driven automated parking spot management with real-time mobile availability guidance and toll reconciliation.",
      stack: ["IoT", "WebSockets", "React Native", "Go"],
      metrics: "500+ Sensor Endpoints",
    },
    {
      id: "aura-botanicals",
      title: "Aura Botanicals Brand & Space",
      client: "Organic Wellness Retail",
      category: "brand",
      categoryLabel: "Brand + Physical Synergy",
      summary:
        "A holistic dual project: designed the sustainable retail store layout alongside the brand packaging system and e-commerce portal.",
      stack: ["Store Interior", "Packaging Design", "E-Commerce"],
      metrics: "Complete Studio Synergy",
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
            A curated showcase of software systems, brand systems, and physical commercial spaces created with structural discipline.
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
                  {project.isConcept && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                      Studio Concept
                    </span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-foreground mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="size-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                <div className="font-mono text-xs text-muted-foreground mb-4">
                  Client: {project.client}
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

