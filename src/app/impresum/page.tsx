import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container, Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { legal } from "@/content/legal";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Impresum (TASK.md Phase 4, PRD §11). Gliederung nach ANALYSIS.md §14,
 * Inhalt eigenständig für Hidraulika Drvošped d.o.o.
 */

const trail = [{ name: ui.crumbs.home, href: routes.home() }, { name: ui.crumbs.impresum }];
const content = legal.impresum;

export const metadata = pageMetadata({
  title: content.h1,
  description: content.intro,
  path: routes.impresum(),
});

export default function ImpresumPage() {
  return (
    <>
      <Container>
        <Breadcrumbs trail={trail} />
        <PageHeader className="pb-2" title={content.h1} lede={content.intro} />
      </Container>

      <Section alt labelledBy="podaci-o-drustvu">
        <div className="max-w-3xl">
          <h2 id="podaci-o-drustvu" className="mb-4 text-2xl font-bold text-ink">
            {content.companyHeading}
          </h2>
          <p className="mb-4 text-sm text-ink-body">{content.companyIntro}</p>
          <dl className="divide-y divide-line border-y border-line">
            {content.companyRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 py-2 sm:flex-row sm:justify-between sm:gap-4"
              >
                <dt className="text-sm text-ink-muted">{row.label}</dt>
                <dd className="text-sm text-ink sm:text-right">{row.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-8 mb-2 text-lg font-bold text-ink">{content.contactHeading}</h3>
          <ul className="text-sm text-ink-body">
            {site.phones.map((phone) => (
              <li key={phone.id}>
                {phone.label}
                {": "}
                <a href={phone.href} className="text-brand-text underline">
                  {phone.display}
                </a>
              </li>
            ))}
            {site.emails.map((email) => (
              <li key={email.id}>
                {email.label}
                {": "}
                <a href={`mailto:${email.address}`} className="text-brand-text underline">
                  {email.address}
                </a>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 mb-2 text-lg font-bold text-ink">{content.bankHeading}</h3>
          <ul className="text-sm text-ink-body">
            {site.banks.map((bank) => (
              <li key={bank.iban}>
                {bank.bank}
                {": IBAN "}
                {bank.iban}
                {", BIC "}
                {bank.bic}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="hosting">
        <div className="max-w-3xl">
          <h2 id="hosting" className="mb-2 text-2xl font-bold text-ink">
            {content.hostingHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.hostingBody}</p>
        </div>
      </Section>

      <Section alt labelledBy="autorska-prava">
        <div className="max-w-3xl">
          <h2 id="autorska-prava" className="mb-2 text-2xl font-bold text-ink">
            {content.copyrightHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.copyrightBody}</p>
        </div>
      </Section>

      <Section labelledBy="odgovornost">
        <div className="max-w-3xl">
          <h2 id="odgovornost" className="mb-2 text-2xl font-bold text-ink">
            {content.disclaimerHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.disclaimerBody}</p>
        </div>
      </Section>

      <Section alt labelledBy="vanjske-poveznice">
        <div className="max-w-3xl">
          <h2 id="vanjske-poveznice" className="mb-2 text-2xl font-bold text-ink">
            {content.linksHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.linksBody}</p>
        </div>
      </Section>

      <Section labelledBy="zastita-podataka">
        <div className="max-w-3xl">
          <h2 id="zastita-podataka" className="mb-2 text-2xl font-bold text-ink">
            {content.privacyHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">
            {content.privacyBody}
            <Link href={routes.privatnost()} className="text-brand-text underline">
              {content.privacyLinkLabel}
            </Link>
            {"."}
          </p>
        </div>
      </Section>

      <Section alt labelledBy="mjerodavno-pravo">
        <div className="max-w-3xl">
          <h2 id="mjerodavno-pravo" className="mb-2 text-2xl font-bold text-ink">
            {content.lawHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.lawBody}</p>
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
