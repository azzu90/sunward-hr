import type { MetadataRoute } from "next";

import { isProduction, siteUrl } from "@/lib/site-url";

/**
 * Schutz der bestehenden Live-Seite: solange nicht auf der echten
 * Produktionsumgebung gebaut wird, verbietet robots.txt das Indexieren
 * komplett. Die Staging-Version kann damit nicht neben dem alten
 * sunward.hr im Google-Index auftauchen.
 */
export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl()}/sitemap.xml`,
    host: siteUrl(),
  };
}
