"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";

type ShowcaseTab = "architecture" | "software" | "branding";

interface ShowcaseItem {
  id: ShowcaseTab;
  tabLabel: string;
  tag: string;
  headline: string;
  subline: string;
  image: string;
  imageAlt: string;
  spec1: string;
  spec2: string;
  spec3: string;
}

const SHOWCASE_DATA: Record<ShowcaseTab, ShowcaseItem> = {
  architecture: {
    id: "architecture",
    tabLabel: "01 / Shop Architecture",
    tag: "Physical & Spatial Design",
    headline: "Commercial Retail Store & Circulation Design",
    subline: "Feasible commercial interiors, customer-guided traffic paths, and modern storefront elevations.",
    image: "/work/shop-concept.webp",
    imageAlt: "Commercial Retail Store Architecture Concept - Interior 3D Rendering with birch joinery",
    spec1: "Dual-Aisle Guided Circulation",
    spec2: "Custom Birch Millwork Specs",
    spec3: "Storefront Façade Identity",
  },
  software: {
    id: "software",
    tabLabel: "02 / Web Engineering",
    tag: "Software & Search Visibility",
    headline: "High-Speed Next.js Web Platforms",
    subline: "Clean semantic architecture, sub-second edge performance, and verified organic search discoverability.",
    image: "/work/madeena-warriors.webp",
    imageAlt: "Madeena Warriors Platform verified live web interface",
    spec1: "Next.js 16 + Server Components",
    spec2: "Sub-Second Global Edge Load",
    spec3: "Verified Brand Search Standing",
  },
  branding: {
    id: "branding",
    tabLabel: "03 / Brand Systems",
    tag: "Visual & Catalog Systems",
    headline: "Swiss Grid Brand & Visual Identity",
    subline: "Disciplined isometric logo marks, high-contrast typography specimens, and commercial print guidelines.",
    image: "/work/brand-concept.webp",
    imageAlt: "Swiss Grid Brand Identity Concept - Stationery mockup with typography sheets",
    spec1: "Isometric Monogram System",
    spec2: "Rajdhani + Inter Typography",
    spec3: "Commercial Print & Foil Kits",
  },
};

export function Hero() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("architecture");
  const activeShowcase = SHOWCASE_DATA[activeTab];

  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-border transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Subtle Top Metadata Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-10 text-xs font-mono">
          <div className="inline-flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-foreground font-semibold uppercase tracking-wider">
              Shadez Studio
            </span>
            <span className="text-muted-foreground" aria-hidden="true">•</span>
            <span className="text-muted-foreground uppercase tracking-wider">
              Maruthamunai, Sri Lanka
            </span>
          </div>
          <div className="text-muted-foreground uppercase tracking-wider hidden sm:block">
            Physical Architecture + Digital Software
          </div>
        </div>

        {/* Big Confident Headline & Deck (Airy Editorial Layout per Mission Control reference) */}
        <div className="max-w-4xl mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight leading-[0.95] text-foreground mb-6 break-words">
            You&apos;re building a brand.
            <span className="block text-primary">We build the space and the software.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed max-w-2xl mb-8">
            A multidisciplinary studio in Sri Lanka uniting commercial shop architecture, high-speed web engineering, and brand systems under one contract.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-primary px-8 py-3.5 min-h-[48px] text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold transition-all duration-200 hover:bg-brand-orange-hover hover:translate-y-[-1px] shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>

            <Link
              href="#work"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3.5 min-h-[48px] text-xs font-mono uppercase tracking-widest text-foreground transition-all duration-200 hover:border-foreground hover:bg-card/80"
            >
              <span>Explore Work ↓</span>
            </Link>

            <a
              href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp inquiry with Shadez founders"
              className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors min-h-[44px] ml-auto sm:ml-0"
            >
              <MessageSquare className="size-3.5 text-primary" aria-hidden="true" />
              <span>WhatsApp: +94 76 434 6350</span>
            </a>
          </div>
        </div>

        {/* The Cinematic Showcase Box (Visual Anchor inspired by reference) */}
        <div className="relative border border-border bg-card overflow-hidden shadow-2xl transition-all">
          {/* Showcase Top Bar: Interactive Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2.5 sm:px-6">
            <div className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground" role="tablist" aria-label="Discipline Showcase">
              {(["architecture", "software", "branding"] as ShowcaseTab[]).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    role="tab"
                    id={`hero-tab-${tab}`}
                    aria-selected={isActive}
                    aria-controls={`hero-panel-${tab}`}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 min-h-[40px] text-xs font-mono uppercase tracking-wider transition-all border ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground font-bold shadow-sm"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {SHOWCASE_DATA[tab].tabLabel}
                  </button>
                );
              })}
            </div>

            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hidden md:inline-block">
              {activeShowcase.tag}
            </span>
          </div>

          {/* Showcase Viewport & Overlay */}
          <div
            role="tabpanel"
            id={`hero-panel-${activeTab}`}
            aria-labelledby={`hero-tab-${activeTab}`}
            className="grid grid-cols-1 lg:grid-cols-12 items-center"
          >
            {/* Visual Media Canvas (8 cols) */}
            <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden group">
              <Image
                src={activeShowcase.image}
                alt={activeShowcase.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Badge Over Image */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex flex-wrap items-center gap-2">
                <span className="bg-black/80 backdrop-blur-md border border-white/20 text-white px-3 py-1 font-mono text-[11px] uppercase tracking-wider font-semibold">
                  {activeShowcase.tag}
                </span>
                <span className="bg-primary/90 text-primary-foreground px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest font-bold">
                  Verified Concept Specimen
                </span>
              </div>
            </div>

            {/* Spec & Detail Panel (4 cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-card border-t lg:border-t-0 lg:border-l border-border">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold mb-2">
                  Integrated Execution
                </div>
                <h2 className="text-2xl font-display font-bold uppercase text-foreground mb-3 leading-snug">
                  {activeShowcase.headline}
                </h2>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-6">
                  {activeShowcase.subline}
                </p>

                {/* 3 Core Specs */}
                <div className="space-y-2 border-t border-border pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                    Discipline Specifications:
                  </div>
                  {[activeShowcase.spec1, activeShowcase.spec2, activeShowcase.spec3].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs font-mono text-foreground">
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">Founders&apos; Lead</span>
                <Link
                  href="#work"
                  className="text-primary font-bold hover:underline inline-flex items-center gap-1 min-h-[44px] items-center"
                >
                  <span>View in Work</span>
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
