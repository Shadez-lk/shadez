import React from "react";
import Image from "next/image";
import { ExternalLink, ShieldCheck, MapPin } from "lucide-react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export function About() {
  const founders = [
    {
      name: "Inshaf Rajaei",
      role: "Co-Founder & Computer Engineering Lead",
      university: "Computer Engineering Undergraduate • University of Ruhuna",
      specialty: "Next.js 16 Web Engineering, Clean Architecture, APIs & Search Standing",
      bio: "Leads digital architecture, sub-second edge performance, structured schemas, and dynamic software systems. Building fast web applications with clean semantic code, sub-second load times, and maximum search visibility.",
      image: "/team/inshaf.webp",
      linkedin: "https://www.linkedin.com/in/inshafrmnaazir",
      linkedinHandle: "in/inshafrmnaazir",
    },
    {
      name: "Safa Ahamed",
      role: "Co-Founder & Spatial Architecture Lead",
      university: "Landscape Architecture Undergraduate • University of Moratuwa",
      specialty: "Commercial Retail Store Layouts, Customer Circulation & Storefront Elevations",
      bio: "Leads spatial planning, commercial retail layouts, storefront elevations, and interior circulation ergonomics. Bridging physical environment design with disciplined brand presentation.",
      image: "/team/safa.webp",
      linkedin: "https://www.linkedin.com/in/mohamed-roomil-safa-ahamed-97b046275/",
      linkedinHandle: "in/safa-ahamed",
    },
  ];

  return (
    <section id="about" className="relative scroll-mt-20 bg-[#121212] text-white py-20 sm:py-28 border-y border-neutral-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header: Dark Contrast Transition (Inspired by reference) */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F25623] font-bold mb-3">
            <span className="size-2 rounded-full bg-[#F25623]" aria-hidden="true" />
            <span>Direct Maker Collaboration</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-white mb-6 leading-[0.95]">
            Two Founders. Here from day one.
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 font-sans leading-relaxed">
            No account managers, no junior handoffs. You work directly with the computer engineering lead building your code and the landscape architecture lead designing your commercial shop space.
          </p>
        </div>

        {/* 2 Founders Cards Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {founders.map((f) => (
            <div
              key={f.name}
              className="border border-neutral-800 bg-[#1A1A1A] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
                  <div className="relative size-20 sm:size-24 shrink-0 border-2 border-[#F25623]/50 bg-neutral-900 overflow-hidden">
                    <Image
                      src={f.image}
                      alt={`${f.name} - ${f.role}`}
                      width={96}
                      height={96}
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase text-white">
                      {f.name}
                    </h3>
                    <div className="font-mono text-xs text-[#F25623] font-semibold mt-0.5">
                      {f.role}
                    </div>
                    <div className="font-mono text-[11px] text-neutral-400 mt-1">
                      {f.university}
                    </div>
                  </div>
                </div>

                <div className="border-l-2 border-[#F25623]/40 pl-3 mb-5">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                    Discipline Focus
                  </div>
                  <div className="font-mono text-xs text-neutral-200 mt-0.5">
                    {f.specialty}
                  </div>
                </div>

                <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
                  {f.bio}
                </p>
              </div>

              <div className="border-t border-neutral-800 pt-4 flex items-center justify-between">
                <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  Verified Profile
                </span>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect with ${f.name} on LinkedIn`}
                  className="inline-flex items-center gap-2 border border-neutral-700 bg-neutral-900 px-3.5 py-1.5 min-h-[44px] text-xs font-mono text-white hover:text-[#F25623] hover:border-[#F25623] transition-colors"
                >
                  <LinkedInIcon className="size-3.5 text-[#F25623]" aria-hidden="true" />
                  <span>{f.linkedinHandle}</span>
                  <ExternalLink className="size-3 text-neutral-400" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Origin & Duality Manifesto Strip */}
        <div className="border border-neutral-800 bg-[#171717] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F25623]">
              <MapPin className="size-3.5" aria-hidden="true" />
              <span>Maruthamunai, Eastern Province, Sri Lanka</span>
            </div>
            <div className="text-sm font-sans text-neutral-300">
              Rooted regionally, building to international engineering and spatial standards. Open for custom client commissions.
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-400 border border-neutral-800 px-3 py-1.5">
              <ShieldCheck className="size-3.5 text-[#F25623]" aria-hidden="true" />
              <span>One Unified Contract</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
