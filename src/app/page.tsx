import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { Portfolio } from "@/components/portfolio";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { JsonLd, getHomePageSchema } from "@/lib/schema";

/**
 * Shadez Studio Homepage
 * Adheres strictly to SEO Website Kit:
 * - Server Component by default (RENDERING.md §2)
 * - Server-rendered JSON-LD schema (SCHEMA.md §6)
 * - Dedicated #main-content landmark (ACCESSIBILITY.md §1)
 */
export default function Home() {
  const homeSchema = getHomePageSchema();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground" suppressHydrationWarning>
      <JsonLd graph={homeSchema} />
      <Navigation />
      <main id="main-content" className="flex-1" suppressHydrationWarning tabIndex={-1}>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
