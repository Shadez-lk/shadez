import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, Building2, Compass, Layers, Megaphone, Check } from "lucide-react";

export function Services() {
  const primaryDual = [
    {
      id: "02",
      title: "Software & Web Systems",
      discipline: "Digital & Engineering Core",
      lead: "Led by Computer Engineering Rigor",
      tagline: "Dynamic web applications engineered for #1 Google search ranking.",
      description:
        "We build high-speed, dynamic web platforms and custom digital systems designed not merely to exist, but to dominate Google search results and convert visitors into long-term clients.",
      deliverables: [
        "Dynamic Next.js Web Engineering",
        "Top-Tier Google SEO Architecture",
        "Custom APIs & System Integrations",
        "High-Velocity Core Web Vitals Optimization",
      ],
      icon: Code2,
      accent: true,
    },
    {
      id: "04",
      title: "Architecture & Spatial Design",
      discipline: "Physical & Spatial Core",
      lead: "Led by Landscape Architecture Discipline",
      tagline: "Feasible, attractive commercial shop & interior layout design.",
      description:
        "We design physical commercial environments and retail stores that are feasible, structurally disciplined, and visually compelling. We optimize customer circulation, storefront aesthetics, and spatial ambiance.",
      deliverables: [
        "Retail Store Layout & Circulation Planning",
        "Storefront Façade & Exterior Identity",
        "Commercial Interior Styling & Joinery Specs",
        "Spatial Experience & Feasibility Blueprints",
      ],
      icon: Building2,
      accent: true,
    },
  ];

  const supportingTriad = [
    {
      id: "01",
      title: "Strategy",
      discipline: "Research & Direction",
      tagline: "Actionable growth direction for emerging businesses.",
      description:
        "We uncover real market gaps, define strategic brand positioning, and build practical roadmaps to modernize your business operations and capture new market share.",
      deliverables: [
        "Business Growth Roadmaps",
        "Market Opportunity Analysis",
        "Digital Modernization Planning",
        "Competitive Positioning Specs",
      ],
      icon: Compass,
    },
    {
      id: "03",
      title: "Product Design",
      discipline: "Visual & Catalog Systems",
      tagline: "Disciplined visual systems that elevate your products.",
      description:
        "Transforming how your products and brand are showcased to the world. We design memorable logos, commercial marketing posters, and disciplined digital catalog showcases.",
      deliverables: [
        "Logo & Brand Identity Systems",
        "Digital Product Showcases & Catalogs",
        "Commercial Marketing Posters & Print",
        "Swiss Grid Visual Guidelines",
      ],
      icon: Layers,
    },
    {
      id: "05",
      title: "Marketing",
      discipline: "Campaigns & Distribution",
      tagline: "Targeted digital campaigns & algorithmic growth.",
      description:
        "Putting your business in front of ready-to-buy customers. We execute high-impact social media marketing, targeted ad campaigns, and algorithm-informed distribution to drive sales.",
      deliverables: [
        "Social Media Ad Campaigns",
        "Platform Algorithm Optimization",
        "Audience Targeting & Retargeting",
        "Multi-Channel Campaign Rollouts",
      ],
      icon: Megaphone,
    },
  ];

  return (
    <section id="services" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Asymmetric Editorial Framing */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>02 / DISCIPLINES</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">THE 5-PILLAR ARCHITECTURAL SUITE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Built across five core areas.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              No generic cards, no disconnected freelancers. We eliminate the chaos of coordinating multiple agencies by unifying digital software, spatial architecture, brand design, and marketing under one roof.
            </p>
          </div>
        </div>

        {/* Feature 1: The Core Dual Pillars (Software + Architecture) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
              The Primary Duality: Physical Space + High-Speed Digital
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-primary hidden sm:inline-block">
              Founders&apos; Direct Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {primaryDual.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative border-2 border-border bg-card p-7 sm:p-9 transition-all duration-300 hover:border-primary/80 flex flex-col justify-between shadow-sm"
                >
                  {/* Corner Markers */}
                  <span className="absolute -top-1 -left-1 text-primary font-mono text-xs select-none">┌</span>
                  <span className="absolute -top-1 -right-1 text-primary font-mono text-xs select-none">┐</span>
                  <span className="absolute -bottom-1 -left-1 text-primary font-mono text-xs select-none">└</span>
                  <span className="absolute -bottom-1 -right-1 text-primary font-mono text-xs select-none">┘</span>

                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-primary">
                          {item.id} /
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                          {item.discipline}
                        </span>
                      </div>
                      <div className="size-8 rounded-none bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Icon className="size-4" />
                      </div>
                    </div>

                    <div className="font-mono text-[11px] uppercase tracking-wider text-primary font-semibold mb-2">
                      {item.lead}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase text-foreground mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm font-medium text-foreground mb-3 font-sans">
                      {item.tagline}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Architectural Deliverable Matrix (Replacing Pill Soup) */}
                    <div className="border-t border-border pt-4 mb-6">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                        Technical Deliverable Specifications
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.deliverables.map((deliv) => (
                          <div
                            key={deliv}
                            className="flex items-start gap-2 text-xs font-mono text-foreground border-b border-border/50 pb-2"
                          >
                            <Check className="size-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary font-semibold hover:text-brand-orange-hover transition-colors"
                    >
                      <span>Commission this pillar</span>
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature 2: Supporting Triad (Strategy, Product Design, Marketing) */}
        <div>
          <div className="flex items-center justify-between mb-3 pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
              The Supporting Triad: Strategy, Visual Identity & Market Distribution
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hidden sm:inline-block">
              Integrated Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingTriad.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative border border-border bg-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-primary/60"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-primary">
                          {item.id} /
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          {item.discipline}
                        </span>
                      </div>
                      <Icon className="size-4 text-muted-foreground" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-foreground mb-2">
                      {item.title}
                    </h3>

                    <div className="font-mono text-xs text-primary/90 mb-3">
                      {item.tagline}
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed font-sans mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Tabular Specification List */}
                    <div className="border-t border-border pt-4 mb-5 space-y-1.5">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                        Deliverable Matrix
                      </div>
                      {item.deliverables.map((deliv) => (
                        <div
                          key={deliv}
                          className="flex items-center gap-2 text-[11px] font-mono text-foreground"
                        >
                          <span className="size-1 bg-primary rounded-full shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-foreground hover:text-primary transition-colors"
                    >
                      <span>Inquire about {item.title}</span>
                      <ArrowUpRight className="size-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Studio Synergy Note */}
        <div className="mt-8 border border-border bg-background p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
              The Full-Spectrum Advantage:
            </span>
            <span className="text-xs text-muted-foreground font-sans hidden md:inline">
              Your physical shop, online platform, visual identity, and advertising execute as one coordinated campaign.
            </span>
          </div>
          <Link
            href="#contact"
            className="font-mono text-xs uppercase tracking-wider text-primary font-semibold hover:underline shrink-0"
          >
            Start your project consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}
