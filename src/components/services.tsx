import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, Building2, Compass, Layers, Megaphone, Check } from "lucide-react";

export function Services() {
  const primaryDual = [
    {
      id: "01",
      slug: "software",
      title: "Websites & Software",
      discipline: "Web & Software Engineering",
      lead: "Led by Computer Engineering Lead",
      tagline: "Fast, search-friendly web apps built with Next.js.",
      description:
        "We build high-speed web platforms with clean structure, fast load times and proper metadata so search engines can find and understand your site, converting visitors into customers.",
      deliverables: [
        "Modern Next.js 16 Web Engineering",
        "Search-Friendly Web Architecture & Schema",
        "Custom APIs & System Integrations",
        "Fast Page Speed (Core Web Vitals Optimized)",
      ],
      icon: Code2,
      accentColor: "#4FA3FF",
    },
    {
      id: "02",
      slug: "architecture",
      title: "Shop & Interior Design",
      discipline: "Physical & Spatial Architecture",
      lead: "Led by Landscape Architecture Lead",
      tagline: "Feasible, attractive commercial shop & interior layout design.",
      description:
        "We design physical commercial environments and retail stores that are feasible, structurally disciplined, and visually compelling. We optimize customer circulation, storefront aesthetics, and spatial ambiance.",
      deliverables: [
        "Retail Store Layout & Circulation Planning",
        "Storefront Façade & Exterior Elevation",
        "Commercial Interior Styling & Joinery Specs",
        "Feasibility Plans and Working Drawings",
      ],
      icon: Building2,
      accentColor: "#3DD6A0",
    },
  ];

  const supportingTriad = [
    {
      id: "03",
      slug: "strategy",
      title: "Business Strategy",
      discipline: "Research & Planning",
      tagline: "Actionable growth direction for emerging businesses.",
      description:
        "We uncover real market opportunities, define strategic brand positioning, and build practical roadmaps to modernize your business operations and capture new market share.",
      deliverables: [
        "Business Growth Roadmaps",
        "Market Opportunity Analysis",
        "Digital Modernization Planning",
        "Target Audience Research",
      ],
      icon: Compass,
      accentColor: "#F5B942",
    },
    {
      id: "04",
      slug: "branding",
      title: "Branding & Design",
      discipline: "Visual & Catalog Systems",
      tagline: "Disciplined visual systems that elevate your products.",
      description:
        "Transforming how your products and brand are showcased to the world. We design memorable logos, commercial marketing posters, and disciplined digital catalog showcases.",
      deliverables: [
        "Logo & Brand Identity Systems",
        "Digital Product Showcases & Catalogs",
        "Commercial Marketing Posters & Print",
        "Brand Guidelines & Asset Kits",
      ],
      icon: Layers,
      accentColor: "#B07CFF",
    },
    {
      id: "05",
      slug: "marketing",
      title: "Social Media & Ads",
      discipline: "Campaigns & Distribution",
      tagline: "Targeted digital campaigns and social media growth.",
      description:
        "Putting your business in front of ready-to-buy customers. We execute high-impact social media marketing, targeted ad campaigns, and platform-optimized distribution to drive sales.",
      deliverables: [
        "Social Media Ad Campaigns",
        "Targeted Audience Ads (Meta / TikTok)",
        "Multi-Channel Campaign Distribution",
        "Performance Analytics & Reporting",
      ],
      icon: Megaphone,
      accentColor: "#FF5A1F",
    },
  ];

  return (
    <section id="services" className="relative scroll-mt-20 border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Plain language per Section 4.1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>Services</span>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <span className="text-muted-foreground">What We Do</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Built across five core areas.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              We design your shop, build your website, create your brand, and run your ads, so everything works together under one roof.
            </p>
          </div>
        </div>

        {/* Feature 1: The Core Foundation (Websites + Spatial Architecture) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
              The Physical + Digital Foundation
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-primary hidden sm:inline-block">
              Founders&apos; Direct Leads
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {primaryDual.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={item.slug}
                  className="relative scroll-mt-24 border-2 border-border bg-card p-7 sm:p-9 transition-all duration-300 hover:border-primary/80 flex flex-col justify-between shadow-sm"
                >
                  {/* Decorative Corner Markers */}
                  <span aria-hidden="true" className="absolute -top-1 -left-1 text-primary font-mono text-xs select-none">┌</span>
                  <span aria-hidden="true" className="absolute -top-1 -right-1 text-primary font-mono text-xs select-none">┐</span>
                  <span aria-hidden="true" className="absolute -bottom-1 -left-1 text-primary font-mono text-xs select-none">└</span>
                  <span aria-hidden="true" className="absolute -bottom-1 -right-1 text-primary font-mono text-xs select-none">┘</span>

                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold" style={{ color: item.accentColor }}>
                          {item.id} /
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                          {item.discipline}
                        </span>
                      </div>
                      <div
                        className="size-8 rounded-none border flex items-center justify-center"
                        style={{ borderColor: `${item.accentColor}40`, backgroundColor: `${item.accentColor}15`, color: item.accentColor }}
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="font-mono text-xs uppercase tracking-wider text-primary font-semibold mb-2">
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
                    {/* Deliverables: Plain language per Section 4.1 */}
                    <div className="border-t border-border pt-4 mb-6">
                      <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                        What You Get
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.deliverables.map((deliv) => (
                          <div
                            key={deliv}
                            className="flex items-start gap-2 text-xs font-mono text-foreground border-b border-border/50 pb-2"
                          >
                            <Check className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary font-semibold hover:text-brand-orange-hover transition-colors min-h-[44px]"
                    >
                      <span>Discuss {item.title}</span>
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Feature 2: Strategy, Branding & Marketing */}
        <div>
          <div className="flex items-center justify-between mb-4 pt-2">
            <span className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold">
              Strategy, Brand Design & Growth
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground hidden sm:inline-block">
              Integrated Capabilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportingTriad.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  id={item.slug}
                  className="relative scroll-mt-24 border border-border bg-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-primary/60"
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold" style={{ color: item.accentColor }}>
                          {item.id} /
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">
                          {item.discipline}
                        </span>
                      </div>
                      <div
                        className="size-7 rounded-none border flex items-center justify-center"
                        style={{ borderColor: `${item.accentColor}40`, backgroundColor: `${item.accentColor}15`, color: item.accentColor }}
                      >
                        <Icon className="size-3.5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="text-xl font-display font-bold uppercase text-foreground mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-foreground mb-2 font-sans">
                      {item.tagline}
                    </p>

                    <p className="text-xs text-muted-foreground leading-relaxed font-sans mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    <div className="border-t border-border pt-3 mb-4">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                        What You Get
                      </div>
                      <div className="space-y-1.5">
                        {item.deliverables.map((deliv) => (
                          <div
                            key={deliv}
                            className="flex items-start gap-2 text-xs font-mono text-muted-foreground"
                          >
                            <span className="text-primary" aria-hidden="true">•</span>
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-primary font-semibold hover:underline min-h-[44px]"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
