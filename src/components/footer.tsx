"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-border">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <BrandLogo size="lg" />
            <p className="text-sm text-muted-foreground font-sans max-w-sm leading-relaxed mt-2">
              A multidisciplinary studio founded by an independent developer and an architect in Galle, Sri Lanka. Connecting strategy, software, product design, physical architecture, and marketing.
            </p>
            <div className="font-mono text-xs text-primary font-semibold tracking-wider uppercase mt-2">
              Different shades. One business.
            </div>
          </div>

          {/* Disciplines Col */}
          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-4">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  01 / Strategy & Discovery
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  02 / Software Engineering
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  03 / Product & UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  04 / Spatial & Retail Architecture
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors">
                  05 / Growth & Brand Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Presence Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-4">
                Location & Network
              </div>
              <p className="text-xs font-mono text-muted-foreground leading-relaxed mb-4">
                Shadez Studio<br />
                Galle, Southern Province<br />
                Sri Lanka (UTC+05:30)
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <a
                href="https://github.com/Shadez-lk"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-muted-foreground">
          <div>
            © {currentYear} shadez studio. All rights reserved. Built with Next.js & continuous integration.
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle showLabel={true} />
            <span>•</span>
            <span>THINK. BUILD.</span>
            <span>•</span>
            <span className="text-primary font-semibold">MAKE A MARK.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
