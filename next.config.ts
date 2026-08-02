import type { NextConfig } from "next";

/**
 * Security-Header liegen bewusst hier und nicht in vercel.json:
 * so greifen sie auch bei `next dev` / `next start` und sind lokal prüfbar.
 *
 * Bewusst KEINE Content-Security-Policy in Phase 1 — die YouTube- und
 * Google-Maps-Embeds kommen erst in Phase 2. Jede jetzt geschriebene
 * frame-src/script-src wäre falsch und würde später aus Frust abgeschaltet
 * statt korrigiert. Siehe ASSUMPTIONS.md; CSP folgt in Phase 3.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // Ohne `preload`-Token bis zum Domain-Cutover — preload ist praktisch
  // unumkehrbar und darf erst gesetzt werden, wenn sunward.hr wirklich hier liegt.
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Keine remotePatterns: alle Assets liegen in /public/slike.
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
