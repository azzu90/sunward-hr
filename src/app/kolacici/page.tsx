import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container, Section } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { legal } from "@/content/legal";
import { routes } from "@/content/routes";
import { ui } from "@/content/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Politika kolačića (TASK.md Phase 4, PRD §11). Beschreibt den
 * bestehenden Cookie-Banner (CookieBanner.tsx) — keine Änderung an dessen
 * Mechanik, nur Erklärung dazu.
 */

const trail = [{ name: ui.crumbs.home, href: routes.home() }, { name: ui.crumbs.cookies }];
const content = legal.kolacici;

export const metadata = pageMetadata({
  title: content.h1,
  description: content.intro,
  path: routes.kolacici(),
});

export default function KolaciciPage() {
  return (
    <>
      <Container>
        <Breadcrumbs trail={trail} />
        <PageHeader className="pb-2" title={content.h1} lede={content.intro} />
      </Container>

      <Section alt labelledBy="banner">
        <div className="max-w-3xl">
          <h2 id="banner" className="mb-2 text-2xl font-bold text-ink">
            {content.bannerHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.bannerBody}</p>
        </div>
      </Section>

      <Section labelledBy="nuzno">
        <div className="max-w-3xl">
          <h2 id="nuzno" className="mb-2 text-2xl font-bold text-ink">
            {content.necessaryHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.necessaryBody}</p>
        </div>
      </Section>

      <Section alt labelledBy="analitika">
        <div className="max-w-3xl">
          <h2 id="analitika" className="mb-2 text-2xl font-bold text-ink">
            {content.analyticsHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.analyticsBody}</p>
        </div>
      </Section>

      <Section labelledBy="trenutno-stanje">
        <div className="max-w-3xl">
          <h2 id="trenutno-stanje" className="mb-2 text-2xl font-bold text-ink">
            {content.noneHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.noneBody}</p>
        </div>
      </Section>

      <Section alt labelledBy="promjena-izbora">
        <div className="max-w-3xl">
          <h2 id="promjena-izbora" className="mb-2 text-2xl font-bold text-ink">
            {content.manageHeading}
          </h2>
          <p className="text-sm leading-relaxed text-ink-body">{content.manageBody}</p>
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
