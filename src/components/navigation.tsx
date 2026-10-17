"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "01 Services", href: "#services" },
    { label: "02 Work", href: "#work" },
    { label: "03 Process", href: "#process" },
    { label: "04 About", href: "#about" },
    { label: "05 Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with Image Monogram */}
        <BrandLogo showTagline={true} size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action, Theme Toggle & Studio Status */}
        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle showLabel={true} />

          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground border-l border-border pl-5">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Maruthamunai, LK</span>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-none bg-primary px-4 py-2 text-xs font-mono uppercase tracking-wider text-primary-foreground transition-all duration-200 hover:bg-brand-orange-hover"
          >
            <span>Scale Yours</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-muted-foreground hover:text-foreground border border-border bg-card/60"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-card px-4 py-6 transition-colors">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground py-2 border-b border-border/40"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center justify-between py-2 border-b border-border/40">
                <span className="font-mono text-xs uppercase text-muted-foreground">Appearance</span>
                <ThemeToggle showLabel={true} />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-muted-foreground">
                <span className="size-2 rounded-full bg-primary" />
                <span>Maruthamunai, Sri Lanka — Active 2026</span>
              </div>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 text-xs font-mono uppercase tracking-wider text-primary-foreground font-semibold"
              >
                <span>Scale Yours</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
