import React from "react";
import { Search, Compass, Palette, Wrench, Rocket } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      icon: Search,
      desc: "Deep research into your business model, customer behaviors, physical spatial constraints, and technical requirements.",
      deliverable: "Discovery Synthesis & Opportunity Map",
    },
    {
      num: "02",
      title: "Plan",
      icon: Compass,
      desc: "Strategic roadmapping, architectural feasibility, software architecture blueprints, and spatial zoning layouts.",
      deliverable: "Technical & Spatial Architecture Specs",
    },
    {
      num: "03",
      title: "Design",
      icon: Palette,
      desc: "High-fidelity interactive UI/UX prototypes, 3D architectural interior visualizations, and complete brand design systems.",
      deliverable: "Design System & Visual Blueprints",
    },
    {
      num: "04",
      title: "Build",
      icon: Wrench,
      desc: "Rigorous full-stack software development, CI/CD automated deployment, and commercial spatial construction oversight.",
      deliverable: "Tested Production Code & Physical Spaces",
    },
    {
      num: "05",
      title: "Deliver",
      icon: Rocket,
      desc: "Public product launch, marketing campaign rollout, performance analytics, and ongoing continuous enhancement.",
      deliverable: "Live Product, Launch Campaign & KPI Reports",
    },
  ];

  return (
    <section id="process" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              03 / STUDIO PROCESS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              A transparent path from idea to reality.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground font-sans leading-relaxed">
            Every project follows a disciplined five-stage progression connecting rigorous strategic inquiry with tangible execution.
          </p>
        </div>

        {/* 5-Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative border border-border bg-card p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/60 group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/80 pb-3 mb-4">
                    <span className="font-mono text-xs font-bold text-primary">
                      STAGE {step.num}
                    </span>
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed font-sans mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="border-t border-border/60 pt-3">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                    Output
                  </div>
                  <div className="font-mono text-[11px] text-foreground font-medium">
                    {step.deliverable}
                  </div>
                </div>

                {/* Connection Arrow for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-border group-hover:text-primary transition-colors font-mono text-xs bg-background px-0.5">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

