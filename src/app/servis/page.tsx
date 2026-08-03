import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container, Section } from "@/components/layout/Container";
import { PartIcon } from "@/components/parts/PartIcon";
import { parts, PARTS_ENQUIRY_SLUG } from "@/content/parts";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Servis i dijelovi (PRD §8).
 *
 * Keine Ersatzteil-Shop-Seite mit SKUs: die Teile kommen aus dem EU-Lager
 * von Sunward Europe, nicht aus einem eigenen Bestand in Karlovac. Die Seite
 * beschreibt den Zugang dazu und führt zur Anfrage.
 *
 * Die Verfügbarkeitszusage und Zorans Servis na terenu stehen bewusst in
 * getrennten Abschnitten — beide nennen 24 Stunden, meinen aber Verschiedenes.
 * Details in content/parts.ts.
 */

const trail = [{ name: ui.crumbs.home, href: routes.home() }, { name: ui.crumbs.service }];

export const metadata = pageMetadata({
  title: "Servis i rezervni dijelovi za Sunward strojeve",
  description: `Originalni Sunward rezervni dijelovi uz 95% dostupnost iz europskog skladišta, servisni paketi i ${site.service.headline.toLowerCase()} u cijeloj Hrvatskoj.`,
  path: routes.servis(),
});

export default function ServisPage() {
  const salesPhone = site.phones.find((p) => p.id === "zoran");

  return (
    <>
      <Container>
        <Breadcrumbs trail={trail} />
        <div className="pb-2">
          <h1 className="max-w-3xl text-3xl leading-tight font-black text-ink sm:text-4xl">
            {parts.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-body">{parts.intro}</p>
        </div>
      </Container>

      {/* Netzwerkvorteil, nicht eigenes Lieferversprechen — die Einordnung
          steht im Fliesstext und die Einschränkung direkt darunter. */}
      <Section alt labelledBy="dostupnost">
        <div className="max-w-3xl border-t-4 border-brand bg-surface p-6">
          <h2 id="dostupnost" className="text-xl font-bold text-ink">
            {parts.availabilityHeadline}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-body">{parts.availabilityBody}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">{parts.availabilityNote}</p>
        </div>
      </Section>

      <Section labelledBy="dijelovi">
        <h2 id="dijelovi" className="text-2xl font-bold text-ink">
          {parts.categoriesHeading}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-body">{parts.categoriesLede}</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {parts.categories.map((category) => (
            <li
              key={category.id}
              className="flex items-center gap-3 border border-line bg-surface p-4"
            >
              <PartIcon id={category.id} className="size-7 flex-none text-brand" />
              <span className="text-sm font-bold text-ink">{category.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt labelledBy="paketi">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border-l-4 border-accent bg-surface p-6">
            <h2 id="paketi" className="text-lg font-bold text-ink">
              {parts.kitsHeading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-body">{parts.kitsBody}</p>
          </div>
          {/* Zorans eigene, bestätigte Zusage (PRD §4) — eigener Kasten,
              damit sie nicht mit der Lagerzusage oben verschmilzt. */}
          <div className="border-l-4 border-brand bg-surface p-6">
            <h2 className="text-lg font-bold text-ink">{parts.serviceHeading}</h2>
            <p className="mt-2 text-sm font-bold text-brand-text">{site.service.headline}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-body">{site.service.detail}</p>
          </div>
        </div>
      </Section>

      <Section labelledBy="cta-servis">
        <div className="max-w-2xl">
          <h2 id="cta-servis" className="text-2xl font-bold text-ink">
            {parts.ctaHeading}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-body">{parts.ctaBody}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={`${routes.kontakt()}?tema=${PARTS_ENQUIRY_SLUG}`}
              className="bg-brand-strong px-6 py-3 text-base font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
            >
              {parts.ctaLabel}
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

      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
