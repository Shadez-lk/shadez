"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";

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
              A multidisciplinary studio in Maruthamunai, Sri Lanka. Connecting business strategy, web engineering, brand design, commercial spatial architecture, and targeted marketing.
            </p>
            <div className="font-mono text-xs text-primary font-semibold tracking-wider uppercase mt-1">
              Different shades. One business.
            </div>
          </div>

          {/* Disciplines Col (Section 3.7 & 5.1 Anchors) */}
          <div className="md:col-span-3">
            <div className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-4">
              Disciplines
            </div>
            <ul className="space-y-2.5 text-xs font-mono text-muted-foreground">
              <li>
                <Link href="#software" className="hover:text-primary transition-colors py-1 inline-block">
                  01 / Websites & Software
                </Link>
              </li>
              <li>
                <Link href="#architecture" className="hover:text-primary transition-colors py-1 inline-block">
                  02 / Shop & Interior Design
                </Link>
              </li>
              <li>
                <Link href="#strategy" className="hover:text-primary transition-colors py-1 inline-block">
                  03 / Business Strategy
                </Link>
              </li>
              <li>
                <Link href="#branding" className="hover:text-primary transition-colors py-1 inline-block">
                  04 / Branding & Design
                </Link>
              </li>
              <li>
                <Link href="#marketing" className="hover:text-primary transition-colors py-1 inline-block">
                  05 / Social Media & Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Verified Presence Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-foreground font-bold mb-4">
                Location & Direct Channels
              </div>
              <p className="text-xs font-mono text-muted-foreground leading-relaxed mb-4">
                Shadez Studio<br />
                Maruthamunai, Eastern Province<br />
                Sri Lanka (UTC+05:30)<br />
                <a href="mailto:believewave4u@gmail.com" className="hover:text-primary transition-colors py-0.5 inline-block">believewave4u@gmail.com</a><br />
                <a href="tel:+94764346350" className="hover:text-primary transition-colors py-0.5 inline-block">+94 76 434 6350</a>
              </p>
            </div>

            {/* Social channels (Section 2.5: Removed broken generic links) */}
            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
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
                className="hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                WhatsApp
              </a>
              <span className="text-border" aria-hidden="true">•</span>
              <a
                href="#privacy"
                className="hover:text-primary transition-colors min-h-[44px] flex items-center"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar (Section 3.9: Clean single footer bar with Back to Top) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div>
            © {currentYear} Shadez. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#main-content"
              className="hover:text-primary transition-colors min-h-[44px] flex items-center"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
