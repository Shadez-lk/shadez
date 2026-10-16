import Link from "next/link";
import { ArrowLeft, Home, Compass, Layers, Mail } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

/**
 * Custom 404 Page
 * Adheres strictly to SEO-TECHNICAL.md §8 & RENDERING.md §5
 * Returns real 404 HTTP status code with clear navigation paths
 */
export default function NotFound() {
  const links = [
    { href: "/", label: "Homepage", icon: Home },
    { href: "/#services", label: "Our Disciplines", icon: Compass },
    { href: "/#work", label: "Selected Work", icon: Layers },
    { href: "/#contact", label: "Contact Studio", icon: Mail },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-md px-4 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <BrandLogo size="md" showTagline />
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Return to Studio</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 relative overflow-hidden">
        {/* Architectural grid corner markers */}
        <div className="max-w-xl w-full border border-border bg-card p-8 sm:p-12 relative shadow-lg">
          <span className="absolute -top-1.5 -left-1.5 text-primary font-mono text-xs select-none">┌</span>
          <span className="absolute -top-1.5 -right-1.5 text-primary font-mono text-xs select-none">┐</span>
          <span className="absolute -bottom-1.5 -left-1.5 text-primary font-mono text-xs select-none">└</span>
          <span className="absolute -bottom-1.5 -right-1.5 text-primary font-mono text-xs select-none">┘</span>

          <div className="font-mono text-xs uppercase tracking-widest text-primary font-bold mb-3">
            ERROR 404 / NOT FOUND
          </div>

          <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-foreground mb-4">
            Coordinate Out of Bounds.
          </h1>

          <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-8">
            The spatial or digital resource you requested does not exist at this address. You may navigate directly to any primary studio section below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-border pt-6">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 border border-border/80 bg-background/60 p-3 text-xs font-mono uppercase tracking-wider text-foreground hover:border-primary hover:text-primary transition-all group"
                >
                  <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="border-t border-border p-4 text-center font-mono text-xs text-muted-foreground">
        shadez • galle, sri lanka
      </footer>
    </div>
  );
}

