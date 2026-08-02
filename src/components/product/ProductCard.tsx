import Link from "next/link";

import { routes } from "@/content/routes";
import { specLabels } from "@/content/specs";
import { ui } from "@/content/ui";
import type { ProductModel } from "@/content/types";

import { PriceTag } from "./PriceTag";
import { SiteImage } from "../media/SiteImage";
import { SpecValue } from "./SpecValue";

/**
 * Produktkarte für die Kategorieseite (ANALYSIS.md §3):
 * Bild, Modellname, exakt fünf Kurzspecs, CTA — plus, abweichend vom
 * Original, der Preis.
 */
export function ProductCard({ product }: { product: ProductModel }) {
  const href = routes.product(product);

  return (
    <article className="flex flex-col border border-line bg-surface transition-shadow hover:shadow-md">
      <SiteImage
        id={product.gallery.main}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
      />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-base font-bold text-ink">
            <Link href={href} className="hover:text-brand-text">
              {product.name}
            </Link>
          </h3>
          {product.badges?.map((badge) => (
            <span
              key={badge}
              className="border border-brand-strong px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-brand-text uppercase"
            >
              {badge}
            </span>
          ))}
        </div>

        <dl className="divide-y divide-line border-y border-line text-xs">
          {product.shortSpecs.map((row) => (
            <div key={row.key} className="flex justify-between gap-3 py-1.5">
              <dt className="text-ink-muted">{specLabels[row.key]}</dt>
              <dd className="text-right text-ink">
                <SpecValue value={row.value} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-col gap-3 pt-1">
          <PriceTag price={product.price} />
          <Link
            href={href}
            className="inline-flex items-center justify-center bg-brand-strong px-4 py-2.5 text-sm font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
          >
            {ui.cta.viewProduct}
          </Link>
        </div>
      </div>
    </article>
  );
}
