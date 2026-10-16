import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "shadez — Different shades. One business.",
  description:
    "A multidisciplinary technology, design, and architecture studio connecting thinking and making. Strategy, software, product design, physical architecture, and marketing.",
  icons: {
    icon: "/brand/shadez-cube-logo.jpg",
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
                  // Purge legacy key to prevent stale dark mode from sticking
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
