"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card text-foreground transition-colors overflow-hidden">
      {/* Giant Running Studio Wordmark (Signature Mission Control Edge-to-Edge Vibe) */}
      <div className="pt-12 pb-6 sm:pt-20 sm:pb-12 border-b border-border select-none text-center overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="font-display font-bold uppercase tracking-tight text-foreground/90 text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] xl:text-[15rem] leading-[0.85] transition-colors hover:text-primary transition-duration-300">
            shadez
          </div>
        </div>
      </div>

      {/* Main Studio Navigation & Information Columns */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-border">
          {/* Col 1: Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <BrandLogo size="md" />
              <p className="text-sm text-muted-foreground font-sans max-w-sm leading-relaxed">
                A multidisciplinary studio in Maruthamunai, Sri Lanka. Connecting business strategy, web engineering, brand design, commercial spatial architecture, and targeted marketing under one contract.
              </p>
              <div className="font-mono text-xs text-primary font-bold tracking-wider uppercase">
                Different shades. One business.
              </div>
            </div>

            <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground border border-border/80 bg-background/50 px-3 py-1.5 self-start">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span>Founded 2026 • Computer Eng + Spatial Arch</span>
            </div>
          </div>

          {/* Col 2: The 5 Disciplines (3 cols) */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-4 flex items-center gap-2">
              <span>01 / Disciplines</span>
            </div>
            <ul className="space-y-3 text-xs font-mono text-muted-foreground">
              <li>
                <Link href="#software" className="hover:text-primary transition-colors py-1 inline-flex items-center gap-1.5 group">
                  <span>01 / Software & Web</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="hover:text-primary transition-colors py-1 inline-flex items-center gap-1.5 group">
                  <span>02 / Shop Architecture</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#strategy" className="hover:text-primary transition-colors py-1 inline-flex items-center gap-1.5 group">
                  <span>03 / Business Strategy</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#branding" className="hover:text-primary transition-colors py-1 inline-flex items-center gap-1.5 group">
                  <span>04 / Brand & Systems</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </Link>
              </li>
              <li>
                <Link href="#marketing" className="hover:text-primary transition-colors py-1 inline-flex items-center gap-1.5 group">
                  <span>05 / Social & Growth</span>
                  <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Sitemap (2 cols) */}
          <div className="lg:col-span-2">
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-4">
              <span>02 / Navigation</span>
            </div>
            <ul className="space-y-3 text-xs font-mono text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors py-1 inline-block">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-primary transition-colors py-1 inline-block">
                  Selected Work (3)
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-primary transition-colors py-1 inline-block">
                  5-Stage Process
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-primary transition-colors py-1 inline-block">
                  About Founders
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-primary transition-colors py-1 inline-block">
                  Common Questions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors py-1 inline-block">
                  Commission Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Coordinates & Fast Channels (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-4">
                <span>03 / Studio Hub</span>
              </div>
              <div className="space-y-2 text-xs font-mono text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-2">
                  <MapPin className="size-3.5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Maruthamunai, Eastern Province<br />Sri Lanka (UTC+05:30)</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Mail className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                  <a href="mailto:believewave4u@gmail.com" className="hover:text-primary transition-colors truncate">
                    believewave4u@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                  <a href="tel:+94764346350" className="hover:text-primary transition-colors">
                    +94 76 434 6350
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
              <a
                href="https://github.com/Shadez-lk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Shadez on GitHub"
                className="hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                GitHub
              </a>
              <span className="text-border" aria-hidden="true">•</span>
              <a
                href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Shadez on WhatsApp"
                className="hover:text-primary transition-colors min-h-[44px] flex items-center text-primary font-semibold"
              >
                WhatsApp
              </a>
              <span className="text-border" aria-hidden="true">•</span>
              <a
                href="#privacy"
                className="hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Minimal Utility Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {currentYear} shadez. All rights reserved.</span>
            <span className="hidden sm:inline text-border" aria-hidden="true">•</span>
            <span className="hidden sm:inline">Maruthamunai, Sri Lanka</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[11px]">
              <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span>Studio Active</span>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-foreground hover:text-primary transition-colors min-h-[44px] px-2 py-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary font-semibold"
              aria-label="Scroll back to top of the page"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
