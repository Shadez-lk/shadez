import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Code2, Layers, Building2, Megaphone } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "01",
      title: "Strategy",
      tagline: "Clarity before code & construction.",
      description:
        "We uncover market opportunities, define brand positioning, and architect actionable roadmaps. We connect strategic research directly with execution so every investment has purpose.",
      deliverables: ["Product Discovery", "Market Positioning", "Digital Transformation", "Feasibility Studies"],
      icon: Compass,
    },
    {
      id: "02",
      title: "Software",
      tagline: "Scalable, high-velocity digital engineering.",
      description:
        "Full-stack web applications, custom APIs, AI/ML models, and cloud infrastructure engineered for longevity, resilience, and rapid deployment cycles.",
      deliverables: ["Web & Mobile Apps", "AI & Machine Learning", "Cloud Architecture", "API Integration"],
      icon: Code2,
    },
    {
      id: "03",
      title: "Product Design",
      tagline: "Intuitive systems people love using.",
      description:
        "Human-centered UI/UX design, rapid prototyping, and living design systems that bridge visual emotion with mechanical interface rigor.",
      deliverables: ["UI/UX Design", "Interactive Prototypes", "Design Systems", "Usability Audits"],
      icon: Layers,
    },
    {
      id: "04",
      title: "Architecture",
      tagline: "Physical space design & commercial environments.",
      description:
        "Commercial interiors, retail store layouts, physical space planning, and spatial experience. Designed by trained architectural discipline to connect physical spaces with digital workflows.",
      deliverables: ["Retail Store Layouts", "Commercial Interiors", "Spatial Experience", "Built Environment Specs"],
      icon: Building2,
    },
    {
      id: "05",
      title: "Marketing",
      tagline: "Narratives that command attention.",
      description:
        "Strategic brand identities, digital growth campaigns, content narratives, and launch marketing that turn initial curiosity into lasting customer loyalty.",
      deliverables: ["Brand Identity", "Growth Campaigns", "Content Narrative", "Conversion Optimization"],
      icon: Megaphone,
    },
  ];

  return (
    <section id="services" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8 mb-12">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              02 / DISCIPLINES
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Built across five core areas.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground font-sans leading-relaxed">
            From spatial store layouts to high-performance software — we combine multiple disciplines under one roof so you never have to mediate between five disconnected vendors.
          </p>
        </div>

        {/* The 5 Service Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index === 3; // Highlight Architecture
            return (
              <div
                key={service.id}
                className={`group relative border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5 flex flex-col justify-between ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-primary">
                        {service.id} /
                      </span>
                      <Icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      Pillar {service.id}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="font-mono text-xs text-primary/90 mb-4">
                    {service.tagline}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                <div>
                  <div className="border-t border-border/60 pt-4 mb-6">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                      Key Deliverables
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="bg-background border border-border/80 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-foreground group-hover:text-primary transition-colors"
                  >
                    <span>Commission this discipline</span>
                    <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Special Feature Card: The Physical + Digital Fusion */}
          <div className="border border-primary/40 bg-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 size-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-primary uppercase">
                  Case Study Highlight
                </span>
                <span className="size-2 rounded-full bg-primary" />
              </div>

              <h3 className="text-2xl font-display font-bold uppercase text-foreground mb-3">
                The Retail Synergy
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Imagine launching a retail store: Shadez designs the physical shop layout and interior customer experience, crafts the brand packaging, builds the e-commerce & POS systems, and drives the grand opening marketing campaign.
              </p>
            </div>

            <div className="border-t border-border/80 pt-4">
              <span className="font-mono text-xs text-primary font-semibold">
                Different shades. One business.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

