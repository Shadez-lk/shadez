"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Shadez different from hiring a regular agency or freelancer?",
      a: "Traditional agencies only deliver one piece: a freelancer designs a logo, an external coder builds a website, and a carpenter builds your shop without design planning. Shadez connects physical commercial shop architecture, high-speed website engineering, brand design, and social media advertising under one unified team and contract.",
    },
    {
      q: "How does quoting and pricing work?",
      a: "Send us a brief through our contact form or directly on WhatsApp. We review your requirements personally and provide an itemized, transparent quote within 2 business days. There are no hidden fees or ambiguous timelines.",
    },
    {
      q: "How long does a typical project take?",
      a: "A business website or brand identity kit typically takes 2–4 weeks. A full commercial shop layout or dual physical + digital rollout typically spans 4–8 weeks with clear milestone reviews and sign-offs at each stage.",
    },
    {
      q: "Do you work with clients outside Maruthamunai and the Eastern Province?",
      a: "Yes. While our founders are based in Maruthamunai, we serve ambitious businesses across Sri Lanka for shop interior planning and digital engineering, as well as international clients for software development and brand systems.",
    },
    {
      q: "Who owns the code, design assets, and architectural drawings?",
      a: "You do. Upon final project sign-off and completion, 100% of the codebase, vector graphics, font licenses, and architectural drawing files belong entirely to you.",
    },
    {
      q: "How do you handle website hosting and ongoing maintenance?",
      a: "We deploy web applications on global edge networks (such as Vercel Edge CDN) ensuring fast load times, automated SSL certificates, and 99.99% uptime. We also provide ongoing support packages to monitor search performance and update content.",
    },
  ];

  return (
    <section id="faq" className="relative scroll-mt-20 bg-[#121212] text-white py-20 sm:py-28 border-b border-neutral-800 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-neutral-800 pb-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F25623] font-bold mb-3">
              <span className="size-2 rounded-full bg-[#F25623]" aria-hidden="true" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white">
              Frequently asked questions.
            </h2>
          </div>
          <div className="max-w-md border-l-2 border-neutral-800 pl-4">
            <p className="text-base text-neutral-400 font-sans leading-relaxed">
              Clear answers on how we collaborate, our project timelines, pricing process, and intellectual property ownership.
            </p>
          </div>
        </div>

        {/* Accordion List (Accessible WCAG 2.2 AA) */}
        <div className="max-w-4xl mx-auto divide-y divide-neutral-800 border-y border-neutral-800">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full flex items-center justify-between text-left py-2 font-display text-xl sm:text-2xl font-bold uppercase text-white hover:text-[#F25623] transition-colors min-h-[44px]"
                >
                  <span className="pr-4 leading-snug">{item.q}</span>
                  <ChevronDown
                    className={`size-5 text-[#F25623] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="pt-3 pb-4 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

