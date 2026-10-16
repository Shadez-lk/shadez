import React from "react";
import Link from "next/link";
import { ArrowRight, CornerDownRight } from "lucide-react";

export function Hero() {
  const disciplines = [
    {
      num: "01",
      name: "Strategy",
      desc: "Turn ideas into clear direction & research-led positioning.",
      href: "#services",
    },
    {
      num: "02",
      name: "Software",
      desc: "High-performance web, cloud platforms & AI/ML systems.",
      href: "#services",
    },
    {
      num: "03",
      name: "Product Design",
      desc: "Intuitive UI/UX design, prototypes & living design systems.",
      href: "#services",
    },
    {
      num: "04",
      name: "Architecture",
      desc: "Physical retail stores, commercial interiors & spatial planning.",
      href: "#services",
    },
    {
      num: "05",
      name: "Marketing",
      desc: "Brand identity, narrative campaigns & measurable growth.",
      href: "#services",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background swiss-grid-pattern">
      {/* Decorative Technical Crosshairs */}
      <div className="absolute top-8 left-8 text-muted-foreground/30 font-mono text-sm select-none pointer-events-none hidden sm:block">
        +
      </div>
      <div className="absolute top-8 right-8 text-muted-foreground/30 font-mono text-sm select-none pointer-events-none hidden sm:block">
        +
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Manifesto Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Architectural Section Label */}
            <div className="inline-flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
                01 / STUDIO MANIFESTO
              </span>
              <span className="h-px w-8 bg-border" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline-block">
                GALLE • SRI LANKA
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.92] text-foreground">
              Different shades.
              <span className="block text-primary">One business.</span>
            </h1>

            {/* Subtitle / Value proposition */}
            <p className="max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed font-sans font-light">
              We connect strategy, software engineering, product design, physical architecture, and marketing into complete, cohesive solutions. Shaped by an independent developer and an architect in Galle, we bridge thinking and making.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-primary-foreground font-semibold transition-all duration-200 hover:bg-brand-orange-hover shadow-lg shadow-primary/10"
              >
                <span>Start a project</span>
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center gap-2 border border-border bg-card/60 backdrop-blur-sm px-6 py-3.5 text-xs font-mono uppercase tracking-widest text-foreground transition-colors duration-200 hover:border-primary/60 hover:bg-card"
              >
                <span>Explore our work</span>
                <CornerDownRight className="size-3.5 text-primary" />
              </Link>
            </div>
          </div>

          {/* Right Visual Panel: Swiss Architectural Board */}
          <div className="lg:col-span-4 relative">
            <div className="relative border border-border bg-card p-6 lg:p-8 backdrop-blur-sm">
              {/* Corner Registration Ticks */}
              <span className="absolute -top-1.5 -left-1.5 text-primary font-mono text-xs select-none">┌</span>
              <span className="absolute -top-1.5 -right-1.5 text-primary font-mono text-xs select-none">┐</span>
              <span className="absolute -bottom-1.5 -left-1.5 text-primary font-mono text-xs select-none">└</span>
              <span className="absolute -bottom-1.5 -right-1.5 text-primary font-mono text-xs select-none">┘</span>

              <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  DUALITY SYSTEM / 01
                </span>
                <span className="size-2 rounded-full bg-primary" />
              </div>

              {/* Physical + Digital Synergy Callout */}
              <div className="space-y-4">
                <div className="border border-border/80 bg-background/60 p-4">
                  <div className="font-mono text-xs text-primary font-semibold uppercase mb-1">
                    Digital & Software
                  </div>
                  <p className="text-xs text-muted-foreground font-sans">
                    Full-stack web/mobile platforms, custom AI models, and scalable cloud systems.
                  </p>
                </div>

                <div className="flex items-center justify-center my-1">
                  <span className="font-mono text-xs text-muted-foreground/50 tracking-widest uppercase">
                    + BRIDGED BY STUDIO +
                  </span>
                </div>

                <div className="border border-border/80 bg-background/60 p-4">
                  <div className="font-mono text-xs text-primary font-semibold uppercase mb-1">
                    Physical & Spatial
                  </div>
                  <p className="text-xs text-muted-foreground font-sans">
                    Commercial interiors, retail store planning, layout optimization, and physical build systems.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>FOUNDED IN GALLE</span>
                <span className="text-foreground">2024 / ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Discipline Ticker Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-border">
          {disciplines.map((item) => (
            <Link
              key={item.num}
              href={item.href}
              className="group border-r border-b border-border p-5 transition-all duration-200 hover:bg-card/90 hover:border-primary/50 relative"
            >
              <div className="flex items-center justify-between font-mono text-xs mb-3 text-muted-foreground">
                <span className="text-primary font-semibold">{item.num} /</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                  →
                </span>
              </div>
              <h2 className="font-display text-lg font-bold uppercase text-foreground mb-1 group-hover:text-primary transition-colors">
                {item.name}
              </h2>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 font-sans">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

