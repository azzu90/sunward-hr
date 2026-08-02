import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { JsonLd } from "@/components/JsonLd";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ui } from "@/content/ui";
import { IS_DEV } from "@/lib/flags";
import { organizationSchema } from "@/lib/schema";
import { rootMetadata } from "@/lib/seo";
import { isProduction, siteUrl } from "@/lib/site-url";

import { sans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  ...rootMetadata,
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hr" className={sans.variable} data-dev={IS_DEV ? "true" : undefined}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#sadrzaj"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-brand-strong focus:px-4 focus:py-2 focus:font-bold focus:text-on-brand"
        >
          {ui.nav.skipToContent}
        </a>

        <Header />

        <main id="sadrzaj" className="flex-1">
          {children}
        </main>

        <Footer />
        <CookieBanner />

        <JsonLd data={organizationSchema()} />

        {/* Nur auf Vercel laden: ausserhalb liefern /_vercel/insights/* und
            /_vercel/speed-insights/* 404 aus und erzeugen Konsolenfehler.
            Vercel Analytics ist cookielos; in Phase 2 wird hier zusätzlich
            die Einwilligung aus dem Cookie-Banner vorgeschaltet. */}
        {isProduction ? (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        ) : null}
      </body>
    </html>
  );
}
