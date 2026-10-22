import React from "react";
import { Search, Compass, Palette, Wrench, TrendingUp, CheckCircle2 } from "lucide-react";

export function Process() {
  const stages = [
    {
      num: "01",
      name: "Understand",
      subtitle: "Discovery & Opportunity Mapping",
      icon: Search,
      execution:
        "We analyze your business model, customer footfall or web behavior, physical constraints, and regional market opportunities.",
      deliverable: "Discovery summary & project roadmap",
    },
    {
      num: "02",
      name: "Plan",
      subtitle: "Architecture & Specifications",
      icon: Compass,
      execution:
        "We draft clear specifications: shop zoning and layout, website structure and metadata, and campaign timelines.",
      deliverable: "Technical & spatial blueprint",
    },
    {
      num: "03",
      name: "Design",
      subtitle: "Visual Identity & Spatial Drawings",
      icon: Palette,
      execution:
        "We design brand assets, logos, commercial posters, and 3D shop layouts before writing code or cutting materials.",
      deliverable: "Brand asset kit & floor plans",
    },
    {
      num: "04",
      name: "Build",
      subtitle: "Engineering & Construction",
      icon: Wrench,
      execution:
        "We code fast Next.js web applications with clean structure and coordinate physical store styling, joinery specs, and signage.",
      deliverable: "Live website & finished retail space",
    },
    {
      num: "05",
      name: "Launch & Support",
      subtitle: "Launch & Continuous Growth",
      icon: TrendingUp,
      execution:
        "We deploy your digital platform, launch targeted social ads, track search performance and report regularly, and iterate for continuous growth.",
      deliverable: "Live presence & ongoing support",
      isHighlight: true,
    },
  ];

  return (
    <section id="process" className="relative scroll-mt-20 border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Plain language per Section 3.6 & 4.1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>Process</span>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <span className="text-muted-foreground">How We Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Clear stages. Clear signoffs.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              Every project follows a transparent 5-stage roadmap from initial discovery to live launch. Each stage concludes with your formal review and sign-off.
            </p>
          </div>
        </div>

        {/* 5-Step Timeline Grid (Section 3.6 Compact Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.num}
                className={`relative border p-6 flex flex-col justify-between transition-all duration-300 ${
                  stage.isHighlight
                    ? "border-primary bg-card shadow-sm"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                    <span className="font-mono text-lg font-bold text-primary">
                      {stage.num}
                    </span>
                    <div
                      className={`size-8 flex items-center justify-center ${
                        stage.isHighlight ? "bg-primary text-primary-foreground" : "bg-background border border-border text-foreground"
                      }`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-foreground mb-1">
                    {stage.name}
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
                    {stage.subtitle}
                  </div>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-6">
                    {stage.execution}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/70">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                    Deliverable:
                  </div>
                  <div className="font-mono text-xs text-foreground font-medium flex items-start gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{stage.deliverable}</span>
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
