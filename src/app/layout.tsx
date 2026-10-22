import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL } from "@/lib/pages";

const isPreview =
  process.env.VERCEL_ENV === "preview" ||
  process.env.SITE_ENV === "staging" ||
  process.env.SITE_ENV === "preview";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shadez | Websites, Branding & Shop Design in Sri Lanka",
    template: "%s | Shadez",
  },
  description:
    "Shadez is a Sri Lankan studio for websites, branding, shop interior design and social media ads, all from one team. Based in Maruthamunai.",
  authors: [{ name: "Shadez", url: SITE_URL }],
  creator: "Shadez",
  publisher: "Shadez",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/trademark_logo.png",
    apple: "/brand/trademark_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Shadez",
    title: "Shadez | Websites, Branding & Shop Design in Sri Lanka",
    description:
      "Shadez is a Sri Lankan studio for websites, branding, shop interior design and social media ads, all from one team. Based in Maruthamunai.",
    images: [
      {
        url: "/brand/trademark_logo.png",
        width: 1200,
        height: 630,
        alt: "Shadez — Websites, Branding & Shop Design in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadez | Websites, Branding & Shop Design in Sri Lanka",
    description:
      "Shadez is a Sri Lankan studio for websites, branding, shop interior design and social media ads, all from one team. Based in Maruthamunai.",
    images: ["/brand/trademark_logo.png"],
  },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    googleBot: {
      index: !isPreview,
      follow: !isPreview,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (localStorage.getItem('shadez-theme') === 'dark') {
                    localStorage.removeItem('shadez-theme');
                  }
                  var saved = localStorage.getItem('shadez_theme_mode');
                  if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-brand-orange selection:text-white"
        suppressHydrationWarning
      >
        {/* WCAG 2.2 AA Skip to Content Link (ACCESSIBILITY.md §1) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-primary focus:text-primary-foreground focus:font-mono focus:text-xs focus:uppercase focus:tracking-wider focus:outline-none focus:ring-2 focus:ring-foreground shadow-xl"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
