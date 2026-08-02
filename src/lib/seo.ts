import type { Metadata } from "next";

import { isTbd, val } from "@/content/placeholder";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { categories } from "@/content/taxonomy";
import { ui } from "@/content/ui";
import { isQuotable, type Attachment, type CategoryDef, type ProductModel } from "@/content/types";
import { formatEur, formatNumber } from "./format";
import { abs } from "./site-url";

/**
 * Titel und Beschreibungen werden AUS den Content-Objekten abgeleitet,
 * nicht je Route von Hand geschrieben (CLAUDE.md §7).
 *
 * Wichtig: es fliessen ausschliesslich BESTÄTIGTE Werte ein. Erfundene
 * Grabtiefen haben in einem Google-Snippet nichts verloren.
 */

const SUFFIX = site.brandName;

export const rootMetadata = {
  title: {
    default: `${site.brandName} — ${site.role}`,
    template: `%s | ${SUFFIX}`,
  },
  description: `${site.role}. Bageri, utovarivači i dodatna oprema uz javno objavljene cijene, ${site.warranty.headline.toLowerCase()} i servis na terenu u cijeloj Hrvatskoj.`,
} satisfies Pick<Metadata, "title" | "description">;

function trim(text: string, max = 158): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).replace(/[\s,.;–—-]+$/, "")}…`;
}

export function productMetadata(p: ProductModel): Metadata {
  const category = categories[p.category];
  const weightRow = p.shortSpecs.find((s) => s.key === "operatingWeight");
  const weight = weightRow && !isTbd(weightRow.value) ? ` ${val(weightRow.value)}` : "";
  const price = isQuotable(p.price) ? `cijena ${formatEur(p.price.amount)}` : ui.price.onRequest;

  const title = p.seo?.title ?? `${p.name} ${category.nameSingular}${weight} — ${price}`;

  const description =
    p.seo?.description ??
    trim(
      `${p.fullName} — ${category.nameSingular}${weight}. ${price}. ` +
        `${site.role}, garancija ${site.warranty.years} god. / ${formatNumber(site.warranty.hours)} h, ` +
        `financiranje uz ${site.financing.downPaymentPercent}% učešća.`,
    );

  const url = routes.product(p);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: p.seo?.noindex ? { index: false, follow: true } : undefined,
    openGraph: { title, description, url: abs(url), type: "website", locale: "hr_HR" },
  };
}

export function categoryMetadata(c: CategoryDef, productCount: number): Metadata {
  const primary = c.keywords[0] ?? c.nameSingular;
  const title = `${c.name} — ${primary} uz javne cijene`;
  const description = trim(`${productCount} modela u ponudi. ${c.lede}`);
  const url = routes.category(c);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url: abs(url), type: "website", locale: "hr_HR" },
  };
}

export function attachmentMetadata(a: Attachment): Metadata {
  const title = a.seo?.title ?? `${a.name} za bager — ${a.useCase}`;
  const description = a.seo?.description ?? trim(a.intro);
  const url = routes.attachment(a);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url: abs(url), type: "website", locale: "hr_HR" },
  };
}

/** Für einfache statische Seiten. */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  return {
    title: opts.title,
    description: trim(opts.description),
    alternates: { canonical: opts.path },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: opts.title,
      description: trim(opts.description),
      url: abs(opts.path),
      type: "website",
      locale: "hr_HR",
    },
  };
}
