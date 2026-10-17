import React from "react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const stats = [
    { value: "02", label: "Founders", sub: "Software + Spatial Systems" },
    { value: "05", label: "Disciplines", sub: "All-in-One Studio" },
    { value: "2026", label: "Active Studio", sub: "Maruthamunai, Sri Lanka" },
    { value: "#1", label: "SEO Standard", sub: "Top-Rank Google Visibility" },
  ];

  const philosophies = [
    {
      title: "Full-Spectrum Modernization",
      desc: "We bring high-caliber digital engineering and spatial design standards to emerging and established businesses, empowering them to compete and win.",
    },
    {
      title: "Structural Rigor Meets Spatial Aesthetics",
      desc: "We approach web code and digital marketing with the same structural discipline, precision, and longevity as physical commercial architecture.",
    },
    {
      title: "Zero Agency Bloat",
      desc: "You collaborate directly with the founders building your software, brand assets, and shop spaces. Decisions happen in hours, not weeks of bureaucratic handoffs.",
    },
  ];

  return (
    <section id="about" className="relative border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8 mb-16">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-2">
              05 / STUDIO ORIGIN
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              A small team with big ideas.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground font-sans leading-relaxed">
            Founded in 2026 in Maruthamunai, Sri Lanka, Shadez is built on the conviction that real business growth happens when software logic, brand aesthetics, and physical commercial spaces work as one.
          </p>
        </div>

        {/* Narrative & Stats Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground leading-snug">
              Why a software engineer and a landscape architect joined forces.
            </h3>
            <p className="text-muted-foreground font-sans text-base leading-relaxed">
              Traditional agencies force businesses to manage disconnected vendors: hiring one freelancer for a logo, someone else for a basic website, and having no one to guide physical shop layouts or real algorithmic digital marketing.
            </p>
            <p className="text-muted-foreground font-sans text-base leading-relaxed">
              Shadez connects every essential touchpoint. We bring the high-performance logic, dynamic web code, and top-tier Google search visibility of computer engineering together with the spatial planning, customer circulation, and visual discipline of landscape architecture.
            </p>

            {/* Core Values / Philosophy */}
            <div className="mt-4 space-y-4">
              {philosophies.map((item) => (
                <div key={item.title} className="border border-border/80 bg-card p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span className="font-display text-lg font-bold uppercase text-foreground">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border border-border bg-card p-6 flex flex-col justify-between"
              >
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
                <div className="my-6">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-primary">
                    {stat.value}
                  </span>
                </div>
                <div className="font-mono text-xs text-muted-foreground">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
