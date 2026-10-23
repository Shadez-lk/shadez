import React from "react";
import { Search, Compass, Palette, Wrench, TrendingUp, CheckCircle2 } from "lucide-react";

export function Process() {
  const stages = [
    {
      num: "01",
      name: "Understand",
      subtitle: "Discovery & Opportunity",
      icon: Search,
      execution: "Analyze business model, footfall, web behavior, and regional market opportunities.",
      deliverable: "Project Roadmap",
    },
    {
      num: "02",
      name: "Plan",
      subtitle: "Architecture & Blueprints",
      icon: Compass,
      execution: "Draft clear specifications: shop zoning and layout, website structure, and timelines.",
      deliverable: "Spatial & Web Blueprint",
    },
    {
      num: "03",
      name: "Design",
      subtitle: "Visuals & 3D Drawings",
      icon: Palette,
      execution: "Craft brand identity, logo systems, commercial posters, and 3D shop layouts before construction.",
      deliverable: "Brand Kit & 3D Plans",
    },
    {
      num: "04",
      name: "Build",
      subtitle: "Engineering & Specs",
      icon: Wrench,
      execution: "Code fast Next.js applications and specify store joinery, millwork details, and signage.",
      deliverable: "Live App & Storefront Specs",
    },
    {
      num: "05",
      name: "Launch & Grow",
      subtitle: "Continuous Support",
      icon: TrendingUp,
      execution: "Deploy on global edge, launch targeted ads, track search discoverability, and support ongoing growth.",
      deliverable: "Live Launch & Support",
      isHighlight: true,
    },
  ];

  return (
    <section id="process" className="relative scroll-mt-20 border-b border-border bg-background py-16 sm:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal & Confident */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-border mb-12">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              <span>Studio Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-foreground">
              Clear stages. Clear sign-offs.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-sans max-w-md">
            Every project follows a transparent 5-stage roadmap from initial discovery to live launch. Each stage concludes with your formal review.
          </p>
        </div>

        {/* Airy 5-Stage Step Flow (Minimal, Non-Heavy Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.num}
                className={`relative border p-6 flex flex-col justify-between transition-all duration-300 ${
                  stage.isHighlight
                    ? "border-primary bg-card/90 shadow-sm"
                    : "border-border bg-card/50 hover:border-border/80 hover:bg-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/60">
                    <span className="font-mono text-base font-bold text-primary">
                      {stage.num} /
                    </span>
                    <div
                      className={`size-7 flex items-center justify-center ${
                        stage.isHighlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="size-3.5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase text-foreground mb-1">
                    {stage.name}
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    {stage.subtitle}
                  </div>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-6">
                    {stage.execution}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Deliverable
                  </div>
                  <div className="font-mono text-xs text-foreground font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-primary shrink-0" aria-hidden="true" />
                    <span className="truncate">{stage.deliverable}</span>
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
