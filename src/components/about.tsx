import React from "react";
import { ShieldCheck, Cpu, DraftingCompass, Users } from "lucide-react";

export function About() {
  const metrics = [
    {
      num: "02",
      label: "Co-Founders",
      spec: "Computer Engineering + Landscape Architecture",
      desc: "Direct maker collaboration with zero bureaucratic middlemen.",
    },
    {
      num: "05",
      label: "Integrated Disciplines",
      spec: "Strategy • Software • Design • Architecture • Marketing",
      desc: "Full physical and digital suite executed under one contract.",
    },
    {
      num: "2026",
      label: "Active Studio",
      spec: "Maruthamunai, Eastern Province, Sri Lanka",
      desc: "Rooted regionally, building to international engineering standards.",
    },
    {
      num: "#1",
      label: "Google SEO Standard",
      spec: "Verified Top-Tier Organic Search Presence",
      desc: "Live search dominance with rich sitelinks and AI citations.",
    },
  ];

  const pillars = [
    {
      title: "Full-Spectrum Modernization",
      lead: "From store doors to digital screens",
      desc: "We bring high-caliber digital engineering and spatial design standards to emerging and established businesses, empowering them to modernize without fragmented freelancers.",
      icon: Cpu,
    },
    {
      title: "Structural Rigor Meets Spatial Aesthetics",
      lead: "Code with architectural permanence",
      desc: "We approach web code and digital marketing with the same structural discipline, precision, and longevity as physical commercial architecture.",
      icon: DraftingCompass,
    },
    {
      title: "Zero Agency Middlemen",
      lead: "Direct maker collaboration",
      desc: "You collaborate directly with the creators building your software, brand assets, and shop spaces. Decisions happen in hours, not weeks of bureaucratic handoffs.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>05 / STUDIO ORIGIN</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">MARUTHAMUNAI, SRI LANKA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Two disciplines. One load-bearing standard.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-sm text-muted-foreground font-sans leading-relaxed">
              Founded in 2026 in Maruthamunai by a computer engineering lead and a landscape architecture lead, Shadez was created to solve the fatal flaw of modern business consulting: fragmented execution.
            </p>
          </div>
        </div>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Story Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground leading-snug">
              Why an engineer and an architect joined forces.
            </h3>

            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              When a retail business or company wants to scale today, they are forced to deal with chaos: they hire a graphic designer for a logo, a web agency for a static website, a local carpenter with no design training for their shop, and an ad person who doesn&apos;t understand their business.
            </p>

            <p className="text-base text-foreground/90 font-sans leading-relaxed">
              The result is always the same: wasted budget, inconsistent brand identity, poor Google rankings, and an uninspiring physical shop.
            </p>

            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              Shadez connects both sides of reality. We marry the digital speed, clean modular code, and top-tier Google search visibility of computer engineering with the spatial planning, customer circulation, and aesthetic discipline of architecture.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary font-bold">
                <ShieldCheck className="size-4" />
                <span>One team. One unified contract. Zero finger-pointing.</span>
              </div>
            </div>
          </div>

          {/* Architectural Metrics Matrix (Replaces boxy cards) */}
          <div className="lg:col-span-5 border border-border bg-card p-6 sm:p-8">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold border-b border-border pb-3 mb-6">
              Studio Ground Truth / 2026
            </div>

            <div className="space-y-6">
              {metrics.map((item) => (
                <div key={item.label} className="border-b border-border/60 pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                      {item.num}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                      {item.label}
                    </span>
                  </div>
                  <div className="font-mono text-xs text-foreground font-medium mb-1">
                    {item.spec}
                  </div>
                  <div className="text-xs text-muted-foreground font-sans">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars of Rigor */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border bg-card">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="border-r border-b border-border p-6 sm:p-8 flex flex-col justify-between hover:bg-background transition-colors"
              >
                <div>
                  <div className="size-9 rounded-none bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="font-display text-xl font-bold uppercase text-foreground mb-1.5">
                    {item.title}
                  </h4>
                  <div className="font-mono text-xs text-primary mb-3">
                    {item.lead}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
