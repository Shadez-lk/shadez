import React from "react";
import Link from "next/link";
import { ArrowUpRight, CornerDownRight, MessageSquare } from "lucide-react";
import { HeroDualityController } from "./hero-duality-controller";

export function Hero() {
  const disciplines = [
    {
      num: "01",
      name: "Websites & Software",
      role: "Web Engineering",
      desc: "Fast, search-friendly web apps built with Next.js for speed and search visibility.",
      href: "#software",
      accent: "#4FA3FF",
    },
    {
      num: "02",
      name: "Shop & Interior Design",
      role: "Spatial Architecture",
      desc: "Attractive commercial shop layouts, customer circulation, and storefront styling.",
      href: "#architecture",
      accent: "#3DD6A0",
    },
    {
      num: "03",
      name: "Business Strategy",
      role: "Growth Planning",
      desc: "Market opportunity analysis and practical roadmaps for emerging enterprises.",
      href: "#strategy",
      accent: "#F5B942",
    },
    {
      num: "04",
      name: "Branding & Design",
      role: "Visual Systems",
      desc: "Disciplined brand identities, memorable logos, and digital product showcases.",
      href: "#branding",
      accent: "#B07CFF",
    },
    {
      num: "05",
      name: "Social Media & Ads",
      role: "Targeted Growth",
      desc: "Targeted social media campaigns and audience distribution to drive real sales.",
      href: "#marketing",
      accent: "#FF5A1F",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background swiss-grid-pattern">
      {/* Decorative Technical Crosshairs (Screen-reader hidden) */}
      <div aria-hidden="true" className="absolute top-6 left-6 text-muted-foreground/30 font-mono text-sm select-none pointer-events-none hidden sm:block">
        +
      </div>
      <div aria-hidden="true" className="absolute top-6 right-6 text-muted-foreground/30 font-mono text-sm select-none pointer-events-none hidden sm:block">
        +
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-24">
        {/* Top Identification Anchor (Plain Language per Section 4.1) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4 mb-10">
          <div className="inline-flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              Shop Design, Websites, Branding & Ads
            </span>
            <span className="h-px w-6 bg-border hidden sm:inline-block" aria-hidden="true" />
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest hidden sm:inline-block">
              Maruthamunai, Sri Lanka • Active 2026
            </span>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            All Disciplines Under One Team
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

            {/* Above-the-fold Plain Language Value Proposition (Section 4.1) */}
            <div className="space-y-3 pt-1">
              <div className="font-mono text-xs sm:text-sm uppercase tracking-wider text-foreground font-semibold flex items-center gap-2">
                <span className="size-2 bg-primary inline-block shrink-0" aria-hidden="true" />
                <span>Shop + Website, Built Together</span>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
                We design your shop, build your website, create your brand and run your ads, so everything looks and works as one business. No juggling five different agencies.
              </p>
            </div>

            {/* Above-the-fold The Contrast (Section 4.1) */}
            <div className="border-l-2 border-primary/60 pl-4 py-1 text-sm text-muted-foreground font-sans leading-relaxed">
              <strong className="text-foreground font-medium font-mono text-xs uppercase tracking-wide block mb-1">
                The Disjointed Agency Problem: Solved.
              </strong>
              Traditional business growth is fragmented: one freelancer designs a logo, another codes a generic site, and no one plans your physical retail space. Shadez connects physical architecture, software engineering, and targeted marketing under one clear contract.
            </div>

            {/* Focal Point 2 & Primary CTAs (Section 4.1 & 5.7) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-primary min-h-[48px] px-8 text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold transition-all duration-200 hover:bg-brand-orange-hover hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/20 active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center gap-2 border border-border bg-card/80 backdrop-blur-sm min-h-[48px] px-6 text-xs font-mono uppercase tracking-widest text-foreground transition-all duration-200 hover:border-primary/60 hover:bg-card"
              >
                <span>See Our Work</span>
                <CornerDownRight className="size-3.5 text-primary" />
              </Link>
            </div>

            {/* Fast direct access trigger (Section 2.6 & 5.3) */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-1">
              <a
                href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors min-h-[44px]"
                aria-label="Direct WhatsApp Inquiry to +94 76 434 6350"
              >
                <MessageSquare className="size-3.5 text-primary" />
                <span>WhatsApp: +94 76 434 6350</span>
              </a>
              <span className="text-border" aria-hidden="true">•</span>
              <span className="text-foreground font-medium">We reply within 24 business hours</span>
            </div>
          </div>

          {/* Right Visual Column: Studio Specification Terminal */}
          <div className="lg:col-span-5 relative">
            <HeroDualityController />
          </div>
        </div>

        {/* 5 Discipline Strip: Consistent 01-05 Ordering (Section 3.4 & 3.7) */}
        <div className="mt-14 pt-8 border-t border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              The 5 Core Disciplines
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Full-Spectrum Execution ↓
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-border bg-card">
            {disciplines.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                className="group border-r border-b border-border p-5 transition-all duration-200 hover:bg-background relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs mb-2 text-muted-foreground">
                    <span className="font-bold" style={{ color: item.accent }}>
                      {item.num} /
                    </span>
                    <span className="font-mono text-[11px] uppercase text-muted-foreground group-hover:text-foreground transition-colors">
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

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-mono text-muted-foreground group-hover:text-primary">
                  <span>View service</span>
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
