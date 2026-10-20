import React from "react";
import { Search, Compass, Palette, Wrench, TrendingUp, CheckCircle2 } from "lucide-react";

export function Process() {
  const stages = [
    {
      num: "01",
      name: "Understand",
      subtitle: "Strategic Discovery & Diagnostics",
      icon: Search,
      input: "Client business model, retail customer flow, and digital pain points",
      execution:
        "We conduct deep discovery with the business owner, analyzing regional customer behaviors in Maruthamunai and broader markets, physical shop constraints, and online search opportunities.",
      deliverable: "Discovery Blueprint & Opportunity Map",
      badge: "Stage 01",
    },
    {
      num: "02",
      name: "Plan",
      subtitle: "Technical & Spatial Architecture",
      icon: Compass,
      input: "Discovery synthesis and targeted business milestones",
      execution:
        "We architect a unified roadmap bridging web software architecture, target Google search keywords, commercial shop spatial zoning, and marketing timeline.",
      deliverable: "Unified Technical & Spatial Roadmap",
      badge: "Stage 02",
    },
    {
      num: "03",
      name: "Design",
      subtitle: "Visual Identity & Spatial Modeling",
      icon: Palette,
      input: "Strategic parameters and functional space requirements",
      execution:
        "We create disciplined brand assets, logos, commercial posters, digital product showcases, and 3D architectural shop layouts before writing a line of code or cutting physical materials.",
      deliverable: "Brand Identity Assets & Spatial Blueprints",
      badge: "Stage 03",
    },
    {
      num: "04",
      name: "Build",
      subtitle: "Rigorous Production Execution",
      icon: Wrench,
      input: "Approved designs, technical specs, and spatial drawings",
      execution:
        "We build high-speed dynamic web applications with strict SEO practices and manage physical commercial store styling, joinery specifications, and signage installation.",
      deliverable: "Production Software & Physical Retail Space",
      badge: "Stage 04",
    },
    {
      num: "05",
      name: "Launch & Grow",
      subtitle: "Continuous Improvement & Scale",
      icon: TrendingUp,
      input: "Live production platforms and operational retail spaces",
      execution:
        "We deploy public platforms, launch targeted social media advertising campaigns, monitor Google search rankings daily, and continuously iterate features and ad creatives for lasting business growth.",
      deliverable: "Live Market Presence & Continuous Optimization SLA",
      badge: "Continuous Engine",
      isHighlight: true,
    },
  ];

  return (
    <section id="process" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>03 / STUDIO PROCESS</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">THE EXECUTION BLUEPRINT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              A transparent path from idea to reality.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Every project follows an architecturally sequenced 5-stage progression. No ambiguous timelines, no surprise charges, and no abandoned handoffs.
            </p>
          </div>
        </div>

        {/* Linear Masterplan Track (Eliminates horizontal squishing) */}
        <div className="space-y-4">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.num}
                className={`relative border transition-all duration-300 p-6 sm:p-8 ${
                  stage.isHighlight
                    ? "border-primary bg-card/90 shadow-md shadow-primary/5"
                    : "border-border bg-card hover:border-primary/50"
                }`}
              >
                {/* Corner Accents for Highlight Stage */}
                {stage.isHighlight && (
                  <>
                    <span className="absolute -top-1 -left-1 text-primary font-mono text-xs">┌</span>
                    <span className="absolute -top-1 -right-1 text-primary font-mono text-xs">┐</span>
                    <span className="absolute -bottom-1 -left-1 text-primary font-mono text-xs">└</span>
                    <span className="absolute -bottom-1 -right-1 text-primary font-mono text-xs">┘</span>
                  </>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Metadata Column */}
                  <div className="lg:col-span-4 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-base font-bold text-primary">
                          STAGE {stage.num} /
                        </span>
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 border ${
                            stage.isHighlight
                              ? "border-primary bg-primary/10 text-primary font-bold"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {stage.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-2">
                        <div className="size-8 rounded-none bg-background border border-border flex items-center justify-center text-primary">
                          <Icon className="size-4" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-foreground">
                          {stage.name}
                        </h3>
                      </div>

                      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        {stage.subtitle}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                        Input Requirement
                      </div>
                      <div className="text-xs text-foreground font-sans">
                        {stage.input}
                      </div>
                    </div>
                  </div>

                  {/* Right Execution & Deliverable Column */}
                  <div className="lg:col-span-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-8">
                    <div className="mb-6">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Execution Discipline
                      </div>
                      <p className="text-sm text-foreground/90 font-sans leading-relaxed">
                        {stage.execution}
                      </p>
                    </div>

                    <div className="border border-border/80 bg-background/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Key Deliverable Output
                        </div>
                        <div className="font-mono text-xs text-primary font-bold mt-0.5 flex items-center gap-1.5">
                          <CheckCircle2 className="size-3.5" />
                          <span>{stage.deliverable}</span>
                        </div>
                      </div>
                      <div className="font-mono text-[11px] text-muted-foreground sm:text-right shrink-0">
                        {stage.isHighlight ? "Ongoing Growth Cycle" : "Milestone Gate Signoff"}
                      </div>
                    </div>
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
