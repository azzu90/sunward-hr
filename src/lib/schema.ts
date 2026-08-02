import type { BreadcrumbList, Organization, Product, WithContext } from "schema-dts";

import { isTbd, val } from "@/content/placeholder";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { specLabels } from "@/content/specs";
import { categories } from "@/content/taxonomy";
import { isQuotable, type ProductModel } from "@/content/types";
import { abs } from "./site-url";

/**
 * Strukturierte Daten (CLAUDE.md §7).
 *
 * Harte Regel: markierte (unbestätigte) Werte gehen NIE hier hinein.
 * Schema.org ist eine maschinenlesbare Tatsachenbehauptung gegenüber
 * Google — erfundene Zahlen haben darin nichts zu suchen.
 */

export const ORGANIZATION_ID = `${abs(routes.home())}#organization`;

export function organizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: site.legalName,
    alternateName: site.brandName,
    url: abs(routes.home()),
    slogan: site.tagline,
    vatID: site.identifiers.oib,
    taxID: site.identifiers.oib,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: site.employeeCount,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    email: site.emails.find((e) => e.primary)?.address,
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint" as const,
      telephone: p.href.replace("tel:", ""),
      contactType: "sales",
      areaServed: "HR",
      availableLanguage: "hr",
    })),
    parentOrganization: {
      "@type": "Organization",
      name: site.parent.name,
      url: site.parent.url,
    },
  };
}

export function productSchema(p: ProductModel): WithContext<Product> {
  const category = categories[p.category];

  // Nur bestätigte Kennwerte — isTbd filtert die erfundenen heraus.
  const confirmed = p.datasheet
    .flatMap((b) => b.rows)
    .filter((r) => !isTbd(r.value))
    .map((r) => ({
      "@type": "PropertyValue" as const,
      name: specLabels[r.key],
      value: val(r.value),
    }));

  const schema: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.fullName,
    sku: p.name,
    brand: { "@type": "Brand", name: "Sunward" },
    category: category.name,
    description: p.intro,
    url: abs(routes.product(p)),
  };

  if (confirmed.length > 0) {
    Object.assign(schema, { additionalProperty: confirmed });
  }

  // Modelle mit „Na upit" bekommen bewusst kein Offer.
  if (isQuotable(p.price)) {
    Object.assign(schema, {
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: p.price.amount,
        availability: "https://schema.org/InStock",
        url: abs(routes.product(p)),
        seller: { "@id": ORGANIZATION_ID },
      },
    });
  }

  return schema;
}

export function breadcrumbSchema(
  trail: readonly { name: string; href?: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: abs(item.href) } : {}),
    })),
  };
}
