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
        name: "shadez",
        alternateName: "Shadez Studio",
        url: SITE_URL,
        logo: `${SITE_URL}/brand/shadez-cube-logo.jpg`,
        description: home.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Maruthamunai",
          addressRegion: "Eastern Province",
          addressCountry: "LK",
        },
        knowsAbout: [
          "Business Strategy & Growth Roadmaps",
          "Software Engineering & Top-Rank SEO Optimization",
          "Product Design & Brand Visual Systems",
          "Commercial Retail Shop Layout & Spatial Planning",
          "Digital Marketing & Social Media Advertising",
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
        name: "shadez",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        inLanguage: "en-US",
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
        inLanguage: "en-US",
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
