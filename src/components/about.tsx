import React from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, DraftingCompass, Users, ExternalLink } from "lucide-react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function About() {
  const metrics = [
    {
      num: "02",
      label: "Co-Founders",
      spec: "Landscape Architecture + Computer Engineering",
      desc: "Direct maker collaboration with zero bureaucratic middlemen.",
    },
    {
      num: "05",
      label: "Integrated Disciplines",
      spec: "Strategy • Software • Design • Architecture • Marketing",
      desc: "Full physical and digital suite executed under one contract.",
    },
    {
      num: "2026",
      label: "Active Studio",
      spec: "Maruthamunai, Eastern Province, Sri Lanka",
      desc: "Rooted regionally, building to international engineering standards.",
    },
    {
      num: "01",
      label: "Live Production Platform",
      spec: "Madeena Warriors Community Portal",
      desc: "Live search-friendly platform serving alumni and community records.",
    },
  ];

  const pillars = [
    {
      title: "Physical + Digital Modernization",
      lead: "From store doors to digital screens",
      desc: "We bring high-caliber digital engineering and spatial design standards to emerging and established businesses, empowering them to modernize without fragmented freelancers.",
      icon: Cpu,
    },
    {
      title: "Structural Discipline Meets Spatial Aesthetics",
      lead: "Code with architectural permanence",
      desc: "We approach web code and marketing with the same structural discipline, precision, and longevity as physical commercial architecture.",
      icon: DraftingCompass,
    },
    {
      title: "Direct Maker Collaboration",
      lead: "Work directly with the builders",
      desc: "You collaborate directly with the creators building your software, brand assets, and shop spaces. Decisions happen in hours, not weeks of bureaucratic handoffs.",
      icon: Users,
    },
  ];

  const founders = [
    {
      name: "Inshaf Rajaei",
      role: "Co-Founder & Computer Engineering Lead",
      credentials: "Computer Engineering Undergraduate • University of Ruhuna",
      focus: "Web Engineering, Next.js App Router, Search Optimization & APIs",
      bio: "Leads digital architecture, frontend performance, structured schemas, and dynamic software systems. Focused on high-speed web platforms with clean semantic code, sub-second load times, and maximum search visibility.",
      image: "/team/inshaf.webp",
      linkedin: "https://www.linkedin.com/in/inshafrmnaazir",
      linkedinHandle: "in/inshafrmnaazir",
    },
    {
      name: "Safa Ahamed",
      role: "Co-Founder & Spatial Architecture Lead",
      credentials: "Landscape Architecture Undergraduate • University of Moratuwa",
      focus: "Commercial Shop Design, Customer Circulation & Façade Architecture",
      bio: "Leads spatial planning, commercial retail layouts, storefront elevations, and interior circulation ergonomics. Bridging physical environment design with disciplined brand presentation.",
      image: "/team/safa.webp",
      linkedin: "https://www.linkedin.com/in/mohamed-roomil-safa-ahamed-97b046275/",
      linkedinHandle: "in/safa-ahamed",
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 border-b border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Plain language per Section 4.1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border pb-8 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
              <span>About</span>
              <span className="text-muted-foreground" aria-hidden="true">•</span>
              <span className="text-muted-foreground">Studio Origin</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
              Two disciplines. One unified standard.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-border pl-4">
            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              Founded in 2026 in Maruthamunai by a computer engineering lead and a landscape architecture lead, Shadez was created to connect physical spaces and digital engineering into one seamless process.
            </p>
          </div>
        </div>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Main Story Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground leading-snug">
              Why an engineer and an architect joined forces.
            </h3>

            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              When a retail business or company wants to scale today, they are forced to deal with chaos: they hire a graphic designer for a logo, a web agency for a static website, a local carpenter with no design training for their shop, and an ad person who doesn&apos;t understand their business.
            </p>

            <p className="text-base text-foreground/90 font-sans leading-relaxed">
              The result is fragmented: wasted budget, inconsistent brand identity, poor online visibility, and an uninspiring physical shop.
            </p>

            <p className="text-base text-muted-foreground font-sans leading-relaxed">
              Shadez connects both sides of reality. We marry the digital speed, clean modular code, and search visibility of computer engineering with the spatial planning, customer circulation, and aesthetic discipline of architecture.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary font-bold">
                <ShieldCheck className="size-4" aria-hidden="true" />
                <span>One team. One unified contract.</span>
              </div>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="border border-border bg-card p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-primary mb-1">
                    {m.num}
                  </div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                    {m.label}
                  </div>
                  <div className="text-xs text-primary font-mono mb-2">
                    {m.spec}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed border-t border-border/60 pt-3">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4.4: Meet the Founders Block */}
        <div className="border border-border bg-card p-6 sm:p-9 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4 mb-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-1">
                Founding Leads
              </div>
              <h3 className="text-2xl font-display font-bold uppercase text-foreground">
                Meet the Founders
              </h3>
            </div>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider border border-border px-3 py-1 self-start sm:self-auto">
              Direct Access • Maruthamunai, LK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((f) => (
              <div
                key={f.name}
                className="relative border border-border/80 bg-background/80 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                    <div className="relative size-20 sm:size-24 shrink-0 border-2 border-primary/40 bg-card overflow-hidden">
                      <Image
                        src={f.image}
                        alt={`${f.name} - ${f.role}`}
                        width={96}
                        height={96}
                        className="size-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground">
                        {f.name}
                      </h4>
                      <div className="font-mono text-xs text-primary font-semibold">
                        {f.role}
                      </div>
                      <div className="font-mono text-[11px] text-muted-foreground mt-1">
                        {f.credentials}
                      </div>
                    </div>
                  </div>

                  <div className="border-l-2 border-primary/30 pl-3 mb-4">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      Focus Discipline
                    </div>
                    <div className="font-mono text-xs text-foreground/90 font-medium">
                      {f.focus}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground font-sans leading-relaxed mb-6">
                    {f.bio}
                  </p>
                </div>

                <div className="border-t border-border pt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    Verified Profile
                  </span>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect with ${f.name} on LinkedIn (opens in new tab)`}
                    className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 min-h-[44px] text-xs font-mono text-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <LinkedInIcon className="size-3.5 text-primary" aria-hidden="true" />
                    <span>{f.linkedinHandle}</span>
                    <ExternalLink className="size-3 text-muted-foreground" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillars of Studio Discipline */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              The Three Pillars of Studio Discipline
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-primary">
              Core Principles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="border border-border bg-card p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="size-9 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                      <Icon className="size-4" aria-hidden="true" />
                    </div>
                    <h4 className="font-display text-xl font-bold uppercase text-foreground mb-1.5">
                      {p.title}
                    </h4>
                    <div className="font-mono text-xs text-primary mb-3">
                      {p.lead}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                      {p.desc}
                    </p>
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
