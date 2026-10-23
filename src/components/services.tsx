import React from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, Building2, Compass, Layers, Megaphone, ShieldCheck } from "lucide-react";

export function Services() {
  const impactCards = [
    {
      metric: "< 0.8s",
      badge: "Performance Standard",
      title: "Fast Web Architecture",
      desc: "Sub-second load times on global edge CDN with Next.js App Router, structured schema, and 100 Lighthouse optimization.",
      stat1: "Sub-second LCP",
      stat2: "100 SEO Score",
      bgLight: "bg-[#EBF7F0]",
      borderLight: "border-[#C7EBD5]",
      textAccent: "text-[#0D9668]",
      bgDark: "dark:bg-[#11261D]",
      borderDark: "dark:border-[#1F4534]",
    },
    {
      metric: "100%",
      badge: "Spatial Discipline",
      title: "Feasible Shop Layouts",
      desc: "Architectural retail store drawings engineered for customer circulation flow, display millwork joins, and storefront visibility.",
      stat1: "Guided Aisles",
      stat2: "Millwork Plans",
      bgLight: "bg-[#F3EEFA]",
      borderLight: "border-[#DCCDF3]",
      textAccent: "text-[#793FE7]",
      bgDark: "dark:bg-[#20182E]",
      borderDark: "dark:border-[#3B2C54]",
    },
    {
      metric: "1 Team",
      badge: "Contract Guarantee",
      title: "Zero Agency Bloat",
      desc: "Direct maker collaboration with the two founding leads. Decisions happen in hours with zero junior handoffs or finger-pointing.",
      stat1: "Direct Access",
      stat2: "24h Response SLA",
      bgLight: "bg-[#FFF4E5]",
      borderLight: "border-[#FFE0B8]",
      textAccent: "text-[#D98200]",
      bgDark: "dark:bg-[#2A2016]",
      borderDark: "dark:border-[#4D3925]",
    },
  ];

  const disciplines = [
    {
      num: "01",
      slug: "software",
      title: "Software & Web",
      lead: "Computer Engineering Lead",
      desc: "High-speed Next.js web applications, APIs, search engine discoverability, and sub-second edge deployment.",
      icon: Code2,
      accent: "#1E6BE6",
    },
    {
      num: "02",
      slug: "architecture",
      title: "Shop Architecture",
      lead: "Landscape Architecture Lead",
      desc: "Commercial retail shop interiors, customer circulation ergonomics, joinery millwork, and storefront elevations.",
      icon: Building2,
      accent: "#0D9668",
    },
    {
      num: "03",
      slug: "strategy",
      title: "Business Strategy",
      lead: "Market Roadmaps",
      desc: "Actionable growth planning, market gap analysis, and digital modernization roadmaps for emerging brands.",
      icon: Compass,
      accent: "#D98200",
    },
    {
      num: "04",
      slug: "branding",
      title: "Brand & Systems",
      lead: "Visual Discipline",
      desc: "Monograms, Swiss typography guidelines, commercial posters, and high-impact digital catalog showcases.",
      icon: Layers,
      accent: "#8E44EC",
    },
    {
      num: "05",
      slug: "marketing",
      title: "Social & Growth",
      lead: "Targeted Reach",
      desc: "Algorithmic social campaigns, targeted audience acquisition, and platform-optimized distribution.",
      icon: Megaphone,
      accent: "#F25623",
    },
  ];

  return (
    <section id="services" className="relative scroll-mt-20 border-b border-border bg-background py-16 sm:py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Philosophy Block (Inspired by reference "About us" statement) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16 border-b border-border">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold">
              <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
              <span>About Shadez</span>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold uppercase tracking-tight text-foreground leading-tight max-w-3xl">
              We connect the shop door to the digital screen. No fragmented agencies.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-muted-foreground font-sans leading-relaxed pt-2">
              <p>
                When a retail business or company scales today, they are forced to juggle chaos: an ad freelancer for social media, an outsourced coder for a slow website, and an untrained carpenter with no design training for their shop. The result is wasted budget and a fragmented brand.
              </p>
              <p>
                We founded Shadez to connect both sides under one roof. We combine the speed, clean code, and search visibility of computer engineering with the spatial planning, customer circulation, and aesthetic discipline of physical architecture.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="#about"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-primary font-semibold hover:underline min-h-[44px] items-center"
              >
                <span>Read founder origin story ↓</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Client Impact & Performance (The 3 Tinted Cards per reference) */}
        <div className="py-16 sm:py-20 border-b border-border">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-1 block">
                Quantified Outcomes
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase text-foreground">
                Measurable Impact & Proof
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-md">
              Grounded, verifiable deliverables executed without agency bloat or unproven guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className={`p-7 sm:p-8 border flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${card.bgLight} ${card.borderLight} ${card.bgDark} ${card.borderDark}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                      {card.badge}
                    </span>
                    <ShieldCheck className={`size-4 ${card.textAccent}`} aria-hidden="true" />
                  </div>

                  {/* Huge Punchy Metric */}
                  <div className={`font-display text-5xl sm:text-6xl font-bold mb-4 tracking-tight ${card.textAccent}`}>
                    {card.metric}
                  </div>

                  <h4 className="text-xl font-display font-bold uppercase text-foreground mb-2">
                    {card.title}
                  </h4>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="border-t border-border/40 pt-4 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-foreground font-medium">{card.stat1}</span>
                  <span aria-hidden="true">•</span>
                  <span className="text-foreground font-medium">{card.stat2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities (5 Minimal Scannable Columns per reference) */}
        <div className="pt-16 sm:pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-1 block">
                Integrated Capabilities
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase text-foreground">
                Five Disciplines. One Contract.
              </h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider border border-border px-3 py-1 self-start sm:self-auto">
              No Middlemen • Direct Leads
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {disciplines.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  id={item.slug}
                  className="border border-border bg-card p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/70 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold" style={{ color: item.accent }}>
                        {item.num} /
                      </span>
                      <div
                        className="size-8 rounded-none border flex items-center justify-center"
                        style={{ borderColor: `${item.accent}40`, backgroundColor: `${item.accent}15`, color: item.accent }}
                      >
                        <Icon className="size-4" aria-hidden="true" />
                      </div>
                    </div>

                    <h4 className="text-xl font-display font-bold uppercase text-foreground mb-1">
                      {item.title}
                    </h4>

                    <div className="font-mono text-[11px] text-primary mb-3">
                      {item.lead}
                    </div>

                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border mt-6">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-foreground font-semibold hover:text-primary transition-colors min-h-[44px] items-center"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight className="size-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
