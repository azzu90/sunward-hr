import type { MetadataRoute } from "next";

import { attachments } from "@/content/attachments";
import { products } from "@/content/products";
import { routes, staticRoutes } from "@/content/routes";
import { categoryList } from "@/content/taxonomy";
import { abs } from "@/lib/site-url";

/**
 * Die Sitemap iteriert dieselben Registries wie die Routen selbst.
 * Dadurch kann sie beim Hinzufügen der restlichen 19 Modelle in Phase 2
 * gar nicht veralten — es gibt keine hartkodierte Liste.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Nur bereits gebaute Seiten — sonst zeigt die Sitemap auf 404er.
    ...staticRoutes
      .filter((r) => r.built)
      .map((r) => ({
        url: abs(r.href),
        changeFrequency: "monthly" as const,
        priority: r.priority,
      })),
    ...categoryList.map((c) => ({
      url: abs(routes.category(c)),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...products.map((p) => ({
      url: abs(routes.product(p)),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...attachments.map((a) => ({
      url: abs(routes.attachment(a)),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
