import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";

import { CartDrawer } from "@/components/site/cart-drawer";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Intro } from "@/components/site/intro";
import { Providers } from "@/components/site/providers";
import { SearchPalette } from "@/components/site/search-palette";
import { Toaster } from "@/components/site/toaster";
import { INTRO_STORAGE_KEY, site, siteUrl } from "@/lib/site";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
});

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
    images: [{ url: "og.jpg", width: 1200, height: 630, alt: "Lanterne: a brass pendant glowing above the words Light, made to linger" }],
  },
  twitter: { card: "summary_large_image" },
};

// Static hosting can't send security headers, so the policy ships as a meta tag.
// Inline scripts are required by Next's static output; everything else is
// restricted to this site plus the Unsplash image CDN. Production only:
// the dev server relies on eval for hot reload.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com",
  "font-src 'self'",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

export const viewport: Viewport = {
  themeColor: "#0e0c0a",
};

// Runs before first paint: play the intro only on a first landing on the home
// page in this session, and never for people who prefer reduced motion.
const introScript = `(function(){try{var d=document.documentElement,b=${JSON.stringify(process.env.NEXT_PUBLIC_BASE_PATH ?? "")},p=location.pathname;if(b&&p.indexOf(b)===0)p=p.slice(b.length);var home=p===""||p==="/"||p==="/index.html";var calm=matchMedia("(prefers-reduced-motion: reduce)").matches;d.dataset.intro=home&&!calm&&!sessionStorage.getItem(${JSON.stringify(INTRO_STORAGE_KEY)})?"play":"skip"}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" && <meta httpEquiv="Content-Security-Policy" content={csp} />}
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-dvh">
        <Providers>
          <Intro />
          <a
            href="#main"
            className="sr-only z-[100] rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <CartDrawer />
          <SearchPalette />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
