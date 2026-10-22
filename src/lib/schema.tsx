import React from "react";
import { SITE_URL, PAGES } from "@/lib/pages";

/**
 * Structured Data Helper (JSON-LD)
 * Adheres strictly to SEO/SCHEMA.md
 */

export interface OrganizationSchema {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
}

export function getHomePageSchema(): OrganizationSchema {
  const home = PAGES["/"];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${SITE_URL}/#organization`,
        name: "Shadez",
        alternateName: "Shadez Studio",
        url: SITE_URL,
        logo: `${SITE_URL}/brand/trademark_logo.png`,
        description: home.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Maruthamunai",
          addressRegion: "Eastern Province",
          addressCountry: "LK",
        },
        sameAs: [
          "https://github.com/Shadez-lk",
        ],
        founder: [
          {
            "@type": "Person",
            name: "Inshaf Rajaei",
            jobTitle: "Co-Founder & Computer Engineering Lead",
            sameAs: "https://www.linkedin.com/in/inshafrmnaazir",
          },
          {
            "@type": "Person",
            name: "Safa Ahamed",
            jobTitle: "Co-Founder & Spatial Architecture Lead",
            sameAs: "https://www.linkedin.com/in/mohamed-roomil-safa-ahamed-97b046275/",
          },
        ],
        knowsAbout: [
          "Business Strategy",
          "Websites and Web Engineering",
          "Brand and Product Design",
          "Shop and Interior Architecture",
          "Social Media and Targeted Advertising",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "believewave4u@gmail.com",
            telephone: "+94764346350",
            availableLanguage: ["English", "Tamil", "Sinhala"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Shadez",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: home.title,
        description: home.description,
        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },
        about: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What makes Shadez different from hiring a regular agency or freelancer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Traditional agencies only deliver one piece: a freelancer designs a logo, an external coder builds a website, and a carpenter builds your shop without design planning. Shadez connects physical commercial shop architecture, high-speed website engineering, brand design, and social media advertising under one unified team and contract.",
            },
          },
          {
            "@type": "Question",
            name: "How does quoting and pricing work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Send us a brief through our contact form or directly on WhatsApp. We review your requirements personally and provide an itemized, transparent quote within 2 business days. There are no hidden fees or ambiguous timelines.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a typical project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A business website or brand identity kit typically takes 2–4 weeks. A full commercial shop layout or dual physical + digital rollout typically spans 4–8 weeks with clear milestone reviews and sign-offs at each stage.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with clients outside Maruthamunai and the Eastern Province?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. While our founders are based in Maruthamunai, we serve ambitious businesses across Sri Lanka for shop interior planning and digital engineering, as well as international clients for software development and brand systems.",
            },
          },
          {
            "@type": "Question",
            name: "Who owns the code, design assets, and architectural drawings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You do. Upon final project sign-off and completion, 100% of the codebase, vector graphics, font licenses, and architectural drawing files belong entirely to you.",
            },
          },
          {
            "@type": "Question",
            name: "How do you handle website hosting and ongoing maintenance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We deploy web applications on global edge networks (such as Vercel Edge CDN) ensuring fast load times, automated SSL certificates, and 99.99% uptime. We also provide ongoing support packages to monitor search performance and update content.",
            },
          },
        ],
      },
    ],
  };
}

/**
 * Safe JSON-LD Server Component
 * Safely escapes '<' character to prevent XSS according to SCHEMA.md §6
 */
export function JsonLd({ graph }: { graph: OrganizationSchema }) {
  const jsonString = JSON.stringify(graph).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}
