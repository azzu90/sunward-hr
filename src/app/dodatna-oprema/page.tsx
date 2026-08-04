import Link from "next/link";

import { AttachmentIcon } from "@/components/attachments/AttachmentIcon";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteImage } from "@/components/media/SiteImage";
import { PriceTag } from "@/components/product/PriceTag";
import { attachments } from "@/content/attachments";
import { routes } from "@/content/routes";
import { ui } from "@/content/ui";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Dodatna oprema za bagere";

export const metadata = pageMetadata({
  title: TITLE,
  description:
    "Priključci za bagere: hidraulički čekići, šumske škare, svrdla, roto tilt, mulčeri i vilice. Montaža, podešavanje hidraulike i servis iz Karlovca.",
  path: routes.dodatnaOprema(),
});

export default function AttachmentsPage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ name: ui.crumbs.home, href: routes.home() }, { name: TITLE }]} />

      <div className="pb-14">
        <PageHeader
          title={TITLE}
          lede="Priključke montiramo, podešavamo i servisiramo sami. Svaki stroj iz naše ponude može dobiti odgovarajuću opremu — od mini bagera do 40-tonca."
        />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {attachments.map((attachment) => (
            <li key={attachment.slug}>
              <Link
                href={routes.attachment(attachment)}
                className="flex h-full flex-col overflow-hidden rounded-ui border border-line bg-surface hover:shadow-md"
              >
                <SiteImage
                  id={attachment.image}
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="aspect-[4/3]"
                />
                <span className="flex flex-1 flex-col gap-1 p-4">
                  <span className="flex items-center gap-2">
                    <AttachmentIcon
                      slug={attachment.slug}
                      className="size-5 flex-none text-brand"
                    />
                    <span className="text-base font-bold text-ink">{attachment.name}</span>
                  </span>
                  <span className="text-xs text-brand-text">{attachment.useCase}</span>
                  <span className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink-body">
                    {attachment.intro}
                  </span>
                  {/* Vorher stand hier ui.price.onRequest hart im Markup —
                      attachment.price wurde nie gelesen, ein echter Preis
                      wäre also unsichtbar geblieben. */}
                  <span className="mt-2">
                    <PriceTag price={attachment.price} as="span" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
