"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { ArrowUpRight, Menu, X, MessageSquare, Phone, MapPin } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services", index: "01" },
  { label: "Work", href: "#work", index: "02" },
  { label: "Process", href: "#process", index: "03" },
  { label: "About", href: "#about", index: "04" },
  { label: "FAQ", href: "#faq", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Track active section on scroll
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
      <div className="mx-auto flex h-16 sm:h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo with Monogram & Lowercase Wordmark */}
        <BrandLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 min-h-[44px] inline-flex items-center rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? "text-primary font-bold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Studio Status, Theme Toggle & Primary Action */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Live Studio Status Badge */}
          <div
            className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider text-muted-foreground border-l border-border pl-4"
            title="Studio active in Maruthamunai, Sri Lanka (UTC+05:30)"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
            </span>
            <span>Maruthamunai, LK</span>
          </div>

          <ThemeToggle showLabel={false} />

          {/* Primary CTA */}
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 bg-primary min-h-[44px] px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-primary-foreground font-bold transition-all duration-200 hover:bg-brand-orange-hover hover:translate-y-[-1px] active:translate-y-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Start Project</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle showLabel={false} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground border border-border bg-card hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {mobileMenuOpen ? (
              <X className="size-5 text-primary" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-x-0 top-16 z-50 h-[calc(100dvh-4rem)] bg-background/98 backdrop-blur-xl border-b border-border flex flex-col justify-between p-6 overflow-y-auto md:hidden transition-all duration-300"
        >
          {/* Main Navigation Links */}
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-border/60">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-4 text-2xl font-display font-bold uppercase tracking-tight min-h-[52px] transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-muted-foreground font-normal">
                    {link.index} /
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Direct Maker Channels & Quick Actions */}
          <div className="pt-6 border-t border-border space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pb-2">
              <span className="uppercase tracking-wider">Studio Status</span>
              <div className="inline-flex items-center gap-1.5 text-foreground font-medium">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span>Accepting Q4 Commissions</span>
              </div>
            </div>

            {/* Direct Channel Buttons */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href="https://wa.me/94764346350?text=Hi%20Shadez%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border bg-card p-3 min-h-[44px] text-foreground hover:text-primary hover:border-primary transition-colors font-semibold"
              >
                <MessageSquare className="size-3.5 text-primary" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+94764346350"
                className="flex items-center justify-center gap-2 border border-border bg-card p-3 min-h-[44px] text-foreground hover:text-primary hover:border-primary transition-colors font-semibold"
              >
                <Phone className="size-3.5 text-primary" aria-hidden="true" />
                <span>Call Studio</span>
              </a>
            </div>

            <div className="pt-1">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary min-h-[48px] px-6 text-xs font-mono uppercase tracking-widest text-primary-foreground font-bold shadow-lg"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Studio Origin Tag */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-muted-foreground pt-2">
              <MapPin className="size-3 text-primary" aria-hidden="true" />
              <span>Maruthamunai, Sri Lanka • UTC+05:30</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
