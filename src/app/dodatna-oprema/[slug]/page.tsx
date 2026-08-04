import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { AttachmentIcon } from "@/components/attachments/AttachmentIcon";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteImage } from "@/components/media/SiteImage";
import { SiteVideo } from "@/components/media/SiteVideo";
import { PriceTag } from "@/components/product/PriceTag";
import { attachments, getAttachment } from "@/content/attachments";
import { val } from "@/content/placeholder";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { attachmentMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return attachments.map((a) => ({ slug: a.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const attachment = getAttachment(slug);
  if (!attachment) return {};
  return attachmentMetadata(attachment);
}

const primaryEmail = site.emails.find((e) => e.primary);
const ATTACHMENTS_TITLE = "Dodatna oprema";

/**
 * Detailseite für Anbaugeräte. Bewusst eine eigene Vorlage: Anbaugeräte
 * haben keine vier Datenblatt-Blöcke, dafür Video und „Cijena na upit".
 */
export default async function AttachmentPage({ params }: Params) {
  const { slug } = await params;
  const attachment = getAttachment(slug);
  if (!attachment) notFound();

  const trail = [
    { name: ui.crumbs.home, href: routes.home() },
    { name: ATTACHMENTS_TITLE, href: routes.dodatnaOprema() },
    { name: attachment.name },
  ];

  return (
    <Container>
      <Breadcrumbs trail={trail} />

      <div className="grid gap-8 pb-10 lg:grid-cols-2">
        <SiteImage
          id={attachment.image}
          priority
          sizes="(max-width: 1024px) 100vw, 560px"
          className="border border-line"
        />

        <div className="flex flex-col gap-5">
          {/* Familienmarke des Anbaugeräts, ohne Icon-Tile (DESIGN.md §25). */}
          <AttachmentIcon slug={attachment.slug} className="size-8 text-brand" />

          <PageHeader eyebrow={attachment.useCase} title={attachment.name} />

          <p className="text-base leading-relaxed text-ink-body">{attachment.intro}</p>

          {attachment.sizeRange ? (
            <p className="text-sm text-ink-body">
              <span className="font-bold">{"Raspon: "}</span>
              {val(attachment.sizeRange)}
            </p>
          ) : null}

          <ul className="flex flex-col gap-1.5">
            {attachment.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-sm text-ink-body">
                <span aria-hidden="true" className="text-brand-text">
                  {"·"}
                </span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 rounded-ui border border-line bg-surface-alt p-5">
            {/* Vorher stand hier ui.price.onRequest hart im Markup —
                attachment.price wurde nie gelesen, ein bestätigter Preis
                wäre also trotz korrekter Daten unsichtbar geblieben. */}
            <PriceTag price={attachment.price} size="lg" />
            {primaryEmail ? (
              <a
                href={`mailto:${primaryEmail.address}?subject=${encodeURIComponent(`Upit: ${attachment.name}`)}`}
                className="self-start rounded-ui bg-accent px-5 py-3 text-sm font-bold tracking-wide text-on-accent uppercase hover:bg-accent-strong"
              >
                {ui.cta.requestQuote}
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <section className="border-t border-line py-10">
        <h2 className="mb-6 text-2xl font-bold text-ink">{ui.product.videoHeading}</h2>
        <div className="max-w-3xl">
          <SiteVideo id={attachment.video} title={attachment.name} />
        </div>
      </section>

      <JsonLd data={breadcrumbSchema(trail)} />
    </Container>
  );
}
