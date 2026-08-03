import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container, Section } from "@/components/layout/Container";
import { legal } from "@/content/legal";
import { routes } from "@/content/routes";
import { ui } from "@/content/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Politika privatnosti (TASK.md Phase 4, PRD §11). GDPR-konform,
 * eigenständig verfasst — kein Übersetzen von sunward.eu (dort ohnehin
 * nicht inhaltlich geprüft, ANALYSIS.md §14).
 */

const trail = [{ name: ui.crumbs.home, href: routes.home() }, { name: ui.crumbs.privacy }];
const content = legal.privatnost;

export const metadata = pageMetadata({
  title: content.h1,
  description: content.intro,
  path: routes.privatnost(),
});

export default function PolitikaPrivatnostiPage() {
  return (
    <>
      <Container>
        <Breadcrumbs trail={trail} />
        <div className="pb-2">
          <h1 className="max-w-3xl text-3xl leading-tight font-black text-ink sm:text-4xl">
            {content.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-body">{content.intro}</p>
        </div>
      </Container>

      <Section alt labelledBy="voditelj-obrade">
        <div className="max-w-3xl">
          <h2 id="voditelj-obrade" className="mb-2 text-2xl font-bold text-ink">
            {content.controllerHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.controllerBody}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-body">{content.controllerContact}</p>
        </div>
      </Section>

      <Section labelledBy="koje-podatke">
        <div className="max-w-3xl">
          <h2 id="koje-podatke" className="mb-2 text-2xl font-bold text-ink">
            {content.dataHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.dataIntro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-body">
            {content.dataItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-ink-body">{content.dataBasis}</p>
        </div>
      </Section>

      <Section alt labelledBy="statistika">
        <div className="max-w-3xl">
          <h2 id="statistika" className="mb-2 text-2xl font-bold text-ink">
            {content.analyticsHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.analyticsBody}</p>
          <h3 className="mt-6 mb-2 text-lg font-bold text-ink">{content.fontsHeading}</h3>
          <p className="text-sm leading-relaxed text-ink-body">{content.fontsBody}</p>
        </div>
      </Section>

      <Section labelledBy="primatelji">
        <div className="max-w-3xl">
          <h2 id="primatelji" className="mb-2 text-2xl font-bold text-ink">
            {content.recipientsHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.recipientsIntro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-body">
            {content.recipientsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-ink-body">{content.recipientsNote}</p>
        </div>
      </Section>

      <Section alt labelledBy="rok-cuvanja">
        <div className="max-w-3xl">
          <h2 id="rok-cuvanja" className="mb-2 text-2xl font-bold text-ink">
            {content.retentionHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.retentionBody}</p>
        </div>
      </Section>

      <Section labelledBy="vasa-prava">
        <div className="max-w-3xl">
          <h2 id="vasa-prava" className="mb-2 text-2xl font-bold text-ink">
            {content.rightsHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.rightsIntro}</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-ink-body">
            {content.rightsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-ink-body">{content.rightsContact}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-body">{content.rightsComplaint}</p>
        </div>
      </Section>

      <Section alt labelledBy="dpo">
        <div className="max-w-3xl">
          <h2 id="dpo" className="mb-2 text-2xl font-bold text-ink">
            {content.dpoHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.dpoBody}</p>
        </div>
      </Section>

      <Section labelledBy="kolacici">
        <div className="max-w-3xl">
          <h2 id="kolacici" className="mb-2 text-2xl font-bold text-ink">
            {content.cookiesHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">
            {content.cookiesBody}
            <Link href={routes.kolacici()} className="text-brand-text underline">
              {content.cookiesLinkLabel}
            </Link>
            {"."}
          </p>
        </div>
      </Section>

      <Section alt labelledBy="izmjene">
        <div className="max-w-3xl">
          <h2 id="izmjene" className="mb-2 text-2xl font-bold text-ink">
            {content.changesHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.changesBody}</p>
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
