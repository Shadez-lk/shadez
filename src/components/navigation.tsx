"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/90 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with Trademark Monogram */}
        <BrandLogo size="md" />

        {/* Desktop Navigation Links (Section 5.1) */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200 min-h-[44px] inline-flex items-center ${
                  isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-1 left-0 h-[1.5px] bg-primary transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Action, Theme Toggle & Studio Status */}
        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle showLabel={true} />

          <div
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground border-l border-border pl-5"
            aria-label="Studio active in Maruthamunai, Sri Lanka"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-primary" />
            </span>
            <span>Maruthamunai, LK</span>
          </div>

          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-none bg-primary min-h-[44px] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-primary-foreground font-bold transition-all duration-200 hover:bg-brand-orange-hover hover:translate-y-[-1px] active:translate-y-0 shadow-sm"
          >
            <span>Start Your Project</span>
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
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground border border-border bg-card/60"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden border-b border-border bg-card px-4 py-6 transition-colors">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground py-2.5 min-h-[44px] flex items-center border-b border-border/40"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center justify-between py-2 border-b border-border/40">
                <span className="font-mono text-xs uppercase text-muted-foreground">Appearance</span>
                <ThemeToggle showLabel={true} />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-muted-foreground py-1">
                <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
                <span>Maruthamunai, Sri Lanka — Active 2026</span>
              </div>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 min-h-[44px] text-xs font-mono uppercase tracking-wider text-primary-foreground font-semibold"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
