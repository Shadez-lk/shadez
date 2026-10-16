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
    default: "shadez — Different shades. One business.",
    template: "%s | shadez",
  },
  description:
    "A multidisciplinary technology, product design, and physical architecture studio based in Galle, Sri Lanka. Strategy, software, spatial architecture, and marketing.",
  keywords: [
    "shadez",
    "multidisciplinary studio",
    "software engineering",
    "architecture studio Galle",
    "commercial interior design",
    "retail store layout",
    "product design UI UX",
    "Sri Lanka tech studio",
    "brand identity",
  ],
  authors: [{ name: "shadez", url: SITE_URL }],
  creator: "shadez",
  publisher: "shadez",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/shadez-cube-logo.jpg",
    apple: "/brand/shadez-cube-logo.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "shadez",
    title: "shadez — Different shades. One business.",
    description:
      "A multidisciplinary technology, product design, and physical architecture studio based in Galle, Sri Lanka. Connecting thinking and making.",
    images: [
      {
        url: "/brand/shadez-cube-logo.jpg",
        width: 1200,
        height: 630,
        alt: "shadez studio — technology, product design, and physical architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "shadez — Different shades. One business.",
    description:
      "A multidisciplinary technology, product design, and physical architecture studio based in Galle, Sri Lanka. Connecting thinking and making.",
    images: ["/brand/shadez-cube-logo.jpg"],
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
