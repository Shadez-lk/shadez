import React from "react";
import Link from "next/link";
import { ArrowUpRight, CornerDownRight, MessageSquare } from "lucide-react";
import { HeroDualityController } from "./hero-duality-controller";

export function Hero() {
  const disciplines = [
    {
      num: "01",
      name: "Strategy",
      role: "Growth Roadmaps",
      desc: "Market gap analysis and digital modernization for emerging enterprises.",
      href: "#services",
    },
    {
      num: "02",
      name: "Software",
      role: "Web Engineering",
      desc: "High-speed dynamic web applications engineered for #1 Google SEO rank.",
      href: "#services",
    },
    {
      num: "03",
      name: "Product Design",
      role: "Visual Systems",
      desc: "Disciplined brand identities, memorable logos, and digital product showcases.",
      href: "#services",
    },
    {
      num: "04",
      name: "Architecture",
      role: "Spatial Design",
      desc: "Attractive commercial shop layouts, customer flow, and physical styling.",
      href: "#services",
    },
    {
      num: "05",
      name: "Marketing",
      role: "Algorithmic Ads",
      desc: "Targeted social media advertising and multi-channel campaign distribution.",
      href: "#services",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background swiss-grid-pattern">
      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-6 left-6 text-muted-foreground/30 font-mono text-sm select-none pointer-events-none hidden sm:block">
        +
      </div>
      <div className="absolute top-6 right-6 text-muted-foreground/30 font-mono text-sm select-none pointer-events-none hidden sm:block">
        +
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Top Identification Anchor */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4 mb-10">
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              01 / STUDIO MANIFESTO
            </span>
            <span className="h-px w-6 bg-border hidden sm:inline-block" />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline-block">
              MARUTHAMUNAI, SRI LANKA • 2026 ACTIVE
            </span>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            WHAT WE ARE • WHO WE SERVE • HOW WE SCALE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Manifesto Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Focal Point 1: Display Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.9] text-foreground">
              Different shades.
              <span className="block text-primary">One business.</span>
            </h1>

            {/* Above-the-fold Question 1 & 2: What it is & Who it is for */}
            <div className="space-y-3 pt-1">
              <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
                <span className="size-2 bg-primary inline-block shrink-0" />
                <span>All-in-One Digital Marketing, Web Engineering & Commercial Spatial Studio</span>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
                Built for ambitious retail brands, growing enterprises, and founders who need a cohesive brand identity, a high-speed website with #1 Google ranking, and attractive commercial shop styling — without the friction of coordinating five disconnected agencies.
              </p>
            </div>

            {/* Above-the-fold Question 3: Why it matters */}
            <div className="border-l-2 border-primary/60 pl-4 py-1 text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
              <strong className="text-foreground font-medium font-mono text-xs uppercase tracking-wide block mb-1">
                The Disjointed Agency Problem: Solved.
              </strong>
              Traditional growth is fragmented: one freelancer designs a logo, another codes a generic site, and no one plans your physical retail layout. Shadez connects computer engineering rigor, landscape architecture, and algorithmic marketing into a single load-bearing growth engine.
            </div>

            {/* Focal Point 2 & Question 4: What to do next (Dominant Primary CTA) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary h-13 px-8 text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold transition-all duration-200 hover:bg-brand-orange-hover hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/20 active:translate-y-0"
              >
                <span>Scale Your Brand</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card/80 backdrop-blur-sm h-13 px-6 text-xs font-mono uppercase tracking-widest text-foreground transition-all duration-200 hover:border-primary/60 hover:bg-card"
              >
                <span>Explore Verified Work</span>
                <CornerDownRight className="size-3.5 text-primary" />
              </Link>
            </div>

            {/* Fast direct access trigger */}
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground pt-1">
              <a
                href="https://wa.me/94764346350"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                <MessageSquare className="size-3.5 text-primary" />
                <span>Quick WhatsApp Inquiry: +94 76 434 6350</span>
              </a>
              <span className="text-border">•</span>
              <span className="text-foreground font-medium">24h Direct Founder SLA</span>
            </div>
          </div>

          {/* Right Visual Column: Studio Specification Terminal */}
          <div className="lg:col-span-5 relative">
            <HeroDualityController />
          </div>
        </div>

        {/* 5 Discipline Strip: Precision Architectural Specification Bar */}
        <div className="mt-14 pt-8 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
              The 5 Core Disciplines
            </span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
              Full-Spectrum Execution ↓
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-border bg-card">
            {disciplines.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group border-r border-b border-border p-5 transition-all duration-200 hover:bg-background hover:border-primary/50 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2 text-muted-foreground">
                    <span className="text-primary font-bold">{item.num} /</span>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground group-hover:text-primary transition-colors">
                      {item.role}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground group-hover:text-primary">
                  <span>Explore discipline</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
