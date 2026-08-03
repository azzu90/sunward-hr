import Link from "next/link";

import { Container, Section } from "@/components/layout/Container";
import { SiteImage } from "@/components/media/SiteImage";
import { ProductCard } from "@/components/product/ProductCard";
import { TrustBar } from "@/components/marketing/TrustBar";
import { products } from "@/content/products";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { categoryList } from "@/content/taxonomy";
import { ui } from "@/content/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  // Kurz genug, dass Google ihn nicht abschneidet (Ziel unter 60 Zeichen).
  // Der Marken-Suffix aus dem Root-Layout greift hier nicht, weil die
  // Startseite im selben Segment wie das Layout liegt.
  title: `${site.brandName} — bageri, utovarivači i dodatna oprema`,
  description: `Sunward bageri, utovarivači i platforme u Hrvatskoj — 51 model iz cijelog programa. ${site.warranty.headline}, financiranje uz ${site.financing.downPaymentPercent}% učešća i servis na terenu u roku od ${site.service.responseHours} sata.`,
  path: routes.home(),
});

export default function HomePage() {
  return (
    <>
      {/* Hero — hell und fotogetrieben (DESIGN.md).
          Das Foto liegt bewusst gedämpft hinter dem Text: so bleibt der
          dunkle Text lesbar, egal welches Motiv später in public/slike
          landet. Ohne diese Dämpfung hinge der Kontrast am Bildinhalt. */}
      <section className="relative overflow-hidden bg-surface-alt">
        <SiteImage id="pocetna/hero" priority overlay className="opacity-30" sizes="100vw" />
        <Container className="relative z-10 py-16 sm:py-24">
          <p className="mb-3 text-xs font-bold tracking-widest text-brand-text uppercase">
            {site.role}
          </p>
          <h1 className="max-w-3xl text-3xl leading-tight font-black sm:text-5xl">
            {site.tagline}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-body">
            {`Bageri od 1 do 34 tone, utovarivači, radne platforme i kompletna dodatna oprema — cijeli Sunward program iz jedne ruke. ${site.warranty.headline}.`}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={routes.proizvodi()}
              className="bg-brand-strong px-6 py-3 text-base font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
            >
              {ui.cta.allProducts}
            </Link>
            <Link
              href={routes.kontakt()}
              className="border border-line-strong px-6 py-3 text-base font-bold tracking-wide text-ink uppercase hover:border-brand hover:text-brand-text"
            >
              {ui.cta.requestQuote}
            </Link>
          </div>
        </Container>
      </section>

      <TrustBar />

      {/* Kategorien */}
      <Section labelledBy="kategorije">
        <h2 id="kategorije" className="mb-6 text-2xl font-bold">
          {ui.cta.allProducts}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryList.map((category) => (
            <li key={category.slug}>
              <Link
                href={routes.category(category)}
                className="flex h-full flex-col border border-line bg-surface hover:shadow-md"
              >
                <SiteImage
                  id={category.heroImage}
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="aspect-[16/9]"
                />
                <span className="flex flex-1 flex-col gap-1 p-4">
                  <span className="text-base font-bold text-ink">{category.name}</span>
                  <span className="line-clamp-3 text-xs leading-relaxed text-ink-muted">
                    {category.lede}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Finanzierung + Eintausch — exakte Texte aus CLAUDE.md §3.
          Bleibt als Teaser bestehen und verlinkt auf /financiranje, wo
          derselbe Wortlaut plus FAQ und Prozess steht (PRD §6). */}
      <Section alt labelledBy="financiranje">
        <h2 id="financiranje" className="mb-6 text-2xl font-bold">
          {ui.pages.homeFinancingHeading}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border-t-4 border-brand bg-surface p-6">
            <h3 className="mb-2 text-lg font-bold text-ink">{site.financing.headline}</h3>
            <p className="text-sm leading-relaxed text-ink-body">{site.financing.detail}</p>
          </div>
          <div className="border-t-4 border-brand bg-surface p-6">
            <h3 className="mb-2 text-lg font-bold text-ink">{site.tradeIn.headline}</h3>
            <p className="text-sm leading-relaxed text-ink-body">{site.tradeIn.detail}</p>
          </div>
        </div>
        <Link
          href={routes.financiranje()}
          className="mt-6 inline-block text-sm font-bold text-brand-text underline underline-offset-4"
        >
          {ui.cta.moreAboutFinancing}
        </Link>
      </Section>

      {/* Ausgewählte Modelle */}
      <Section labelledBy="istaknuto">
        <h2 id="istaknuto" className="mb-6 text-2xl font-bold">
          {ui.product.relatedHeading}
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </Section>

      {/* Rücklink zu drvosped.hr (CLAUDE.md §11) */}
      <Section alt labelledBy="drvosped">
        <div className="flex flex-col items-start gap-3">
          <h2 id="drvosped" className="text-lg font-bold">
            {site.parent.crossLink}
          </h2>
          <a
            href={site.parent.url}
            target="_blank"
            rel="noopener"
            className="text-sm font-bold text-brand-text underline underline-offset-4"
          >
            {site.parent.url.replace("https://", "")}
          </a>
        </div>
      </Section>
    </>
  );
}
