import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container, Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { financing } from "@/content/financing";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { categoryList } from "@/content/taxonomy";
import { ui } from "@/content/ui";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Eigene Seite statt nur Homepage-Sektion (PRD §6): `bager na rate` ist
 * Fokus-Keyword aus PRD §10, und dafür rankt eine eigene URL mit H1, FAQ und
 * interner Verlinkung deutlich besser als ein Abschnitt weit unten auf der
 * Startseite. Die Startseite behält ihren Teaser und verlinkt hierher.
 */

const trail = [{ name: ui.crumbs.home, href: routes.home() }, { name: ui.crumbs.financing }];

export const metadata = pageMetadata({
  // Keyword steht vorne im Title — unter 60 Zeichen, damit Google nicht kürzt.
  title: `Bager na rate — financiranje uz ${site.financing.downPaymentPercent}% učešća`,
  description: `Bager na rate uz ${site.financing.downPaymentPercent}% učešća — leasing i za novootvorene firme (d.o.o., obrt, OPG). Staro za novo: stari Sunward stroj priznajemo kao učešće.`,
  path: routes.financiranje(),
});

export default function FinanciranjePage() {
  const salesPhone = site.phones.find((p) => p.id === "zoran");

  return (
    <>
      <Container>
        <Breadcrumbs trail={trail} />
        <PageHeader className="pb-2" title={financing.h1} lede={financing.intro} />
      </Container>

      {/* Die beiden bestätigten Angebote — Texte wortgleich zur Startseite,
          beide aus site.ts. Kein zweiter Wortlaut, der auseinanderlaufen kann. */}
      <Section alt labelledBy="ponuda">
        <h2 id="ponuda" className="sr-only">
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
      </Section>

      <Section labelledBy="kako">
        <div className="max-w-3xl">
          <h2 id="kako" className="mb-4 text-2xl font-bold text-ink">
            {financing.processHeading}
          </h2>
          <p className="text-base leading-relaxed text-ink-body">{financing.processBody}</p>
        </div>
      </Section>

      <Section alt labelledBy="faq">
        <h2 id="faq" className="mb-6 text-2xl font-bold text-ink">
          {financing.faqHeading}
        </h2>
        <dl className="max-w-3xl divide-y divide-line border-t border-line">
          {financing.faq.map((entry) => (
            <div key={entry.id} className="py-5">
              <dt className="text-base font-bold text-ink">{entry.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-body">{entry.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="garancija">
        <div className="max-w-3xl border-l-4 border-accent bg-surface-alt p-6">
          <h2 id="garancija" className="mb-2 text-lg font-bold text-ink">
            {financing.warrantyHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{financing.warrantyBody}</p>
        </div>
      </Section>

      {/* Interne Verlinkung auf alle acht Kategorien — Linkstruktur für das
          Zielkeyword, und für Besucher der direkte Weg zum passenden Stroj. */}
      <Section alt labelledBy="kategorije-financiranje">
        <h2 id="kategorije-financiranje" className="text-2xl font-bold text-ink">
          {financing.categoriesHeading}
        </h2>
        <p className="mt-2 text-sm text-ink-body">{financing.categoriesLede}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categoryList.map((category) => (
            <li key={category.slug}>
              <Link
                href={routes.category(category)}
                className="block border border-line bg-surface p-4 text-sm font-bold text-ink hover:border-brand hover:text-brand-text"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="cta-financiranje">
        <div className="max-w-2xl">
          <h2 id="cta-financiranje" className="text-2xl font-bold text-ink">
            {financing.ctaHeading}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-body">{financing.ctaBody}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={routes.kontakt()}
              className="bg-accent px-6 py-3 text-base font-bold tracking-wide text-on-accent uppercase hover:bg-accent-strong"
            >
              {ui.cta.requestQuote}
            </Link>
            {salesPhone ? (
              <a
                href={salesPhone.href}
                className="border border-line-strong px-6 py-3 text-base font-bold tracking-wide text-ink uppercase hover:border-brand hover:text-brand-text"
              >
                {salesPhone.display}
              </a>
            ) : null}
          </div>
        </div>
      </Section>

      <JsonLd data={faqSchema(financing.faq)} />
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
