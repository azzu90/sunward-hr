import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { SiteGallery } from "@/components/media/SiteGallery";
import { SiteVideo } from "@/components/media/SiteVideo";
import { FeatureTiles } from "@/components/product/FeatureTiles";
import { PriceTag } from "@/components/product/PriceTag";
import { DatasheetTables, ShortSpecList } from "@/components/product/SpecTables";
import { isTbd } from "@/content/placeholder";
import { getProduct, products } from "@/content/products";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { categories } from "@/content/taxonomy";
import { ui } from "@/content/ui";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { productMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ kategorija: p.category, model: p.slug }));
}

type Params = { params: Promise<{ kategorija: string; model: string }> };

export async function generateMetadata({ params }: Params) {
  const { kategorija, model } = await params;
  const product = getProduct(kategorija, model);
  if (!product) return {};
  return productMetadata(product);
}

const primaryEmail = site.emails.find((e) => e.primary);
const salesPhone = site.phones.find((p) => p.id === "zoran");

/**
 * Produktdetailseite nach der 13-Punkte-Vorlage aus ANALYSIS.md §4.
 *
 * Bewusste Abweichung vom Original (ANALYSIS.md §7): statt „Contact your
 * nearest dealer" ohne Preis steht hier der Preis plus direkter Upit-CTA.
 */
export default async function ProductPage({ params }: Params) {
  const { kategorija, model } = await params;
  const product = getProduct(kategorija, model);
  if (!product) notFound();

  const category = categories[product.category];
  const group = category.groups.find((g) => g.slug === product.group);

  // Die Gewichtsklasse erscheint im Breadcrumb, obwohl sie NICHT in der
  // URL steht — Informationsarchitektur wie sunward.eu, URL trotzdem stabil.
  const trail = [
    { name: ui.crumbs.home, href: routes.home() },
    { name: ui.crumbs.products, href: routes.proizvodi() },
    { name: category.name, href: routes.category(category) },
    ...(group ? [{ name: group.name }] : []),
    { name: product.name },
  ];

  const relatedProducts = (product.related ?? [])
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <Container>
      <Breadcrumbs trail={trail} />

      {/* 1–7: Galerie, H1, Kurzbeschreibung, Kurzspecs, Preis-CTA */}
      <div className="grid gap-8 pb-10 lg:grid-cols-2">
        <SiteGallery gallery={product.gallery} priority />

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-bold tracking-widest text-brand-text uppercase">
              {category.nameSingular}
            </p>
            <h1 className="mt-1 text-3xl font-black text-ink sm:text-4xl">{product.name}</h1>
          </div>

          <p className="text-base leading-relaxed text-ink-body">{product.intro}</p>

          <div>
            <h2 className="mb-2 text-xs font-bold tracking-wider text-ink uppercase">
              {ui.spec.shortSpecsHeading}
            </h2>
            <ShortSpecList specs={product.shortSpecs} />
          </div>

          <div className="flex flex-col gap-3 border border-line bg-surface-alt p-5">
            <PriceTag price={product.price} size="lg" />
            <div className="flex flex-wrap gap-2">
              {primaryEmail ? (
                <a
                  href={`mailto:${primaryEmail.address}?subject=${encodeURIComponent(`Upit: ${product.fullName}`)}`}
                  className="bg-brand-strong px-5 py-3 text-sm font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
                >
                  {ui.cta.requestQuote}
                </a>
              ) : null}
              {salesPhone ? (
                <a
                  href={salesPhone.href}
                  className="border border-line-strong px-5 py-3 text-sm font-bold tracking-wide text-ink uppercase hover:bg-surface"
                >
                  {salesPhone.display}
                </a>
              ) : null}
            </div>
            <p className="text-xs leading-relaxed text-ink-muted">
              {`${site.warranty.headline}. ${site.financing.headline}.`}
            </p>
          </div>
        </div>
      </div>

      {/* 8: Ausführliche Beschreibung */}
      <section className="border-t border-line py-10">
        <h2 className="mb-4 text-2xl font-bold text-ink">{product.description.heading}</h2>
        <div className="flex max-w-3xl flex-col gap-3">
          {product.description.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-body">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* 9: Die vier Datenblatt-Blöcke */}
      <section id="specifikacije" className="scroll-mt-24 border-t border-line py-10">
        <h2 className="mb-6 text-2xl font-bold text-ink">{ui.spec.datasheetHeading}</h2>
        <DatasheetTables blocks={product.datasheet} />
      </section>

      {/* 10: Prednosti i oprema */}
      <section id="prednosti" className="scroll-mt-24 border-t border-line py-10">
        <h2 className="mb-6 text-2xl font-bold text-ink">{ui.product.featuresHeading}</h2>
        <FeatureTiles features={product.features} />
      </section>

      {/* 11: Video */}
      <section id="video" className="scroll-mt-24 border-t border-line py-10">
        <h2 className="mb-6 text-2xl font-bold text-ink">{ui.product.videoHeading}</h2>
        <div className="max-w-3xl">
          <SiteVideo id={product.video} title={product.fullName} />
        </div>
      </section>

      {/* 12: Brošura */}
      <section id="brosura" className="scroll-mt-24 border-t border-line py-10">
        <h2 className="mb-4 text-2xl font-bold text-ink">{ui.product.brochureHeading}</h2>
        {product.brochure && !isTbd(product.brochure) ? (
          <a
            href={product.brochure}
            className="inline-block bg-brand-strong px-5 py-3 text-sm font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
          >
            {ui.product.brochureHeading}
          </a>
        ) : (
          <p className="text-sm text-ink-muted" data-placeholder="brochure">
            {ui.media.brochurePending}
          </p>
        )}
      </section>

      {relatedProducts.length > 0 ? (
        <section className="border-t border-line py-10">
          <h2 className="mb-4 text-xl font-bold text-ink">{ui.product.relatedHeading}</h2>
          <ul className="flex flex-wrap gap-3">
            {relatedProducts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={routes.product(related)}
                  className="border border-line px-4 py-2 text-sm font-semibold text-brand-text hover:bg-surface-alt"
                >
                  {related.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <JsonLd data={productSchema(product)} />
      <JsonLd data={breadcrumbSchema(trail)} />
    </Container>
  );
}
