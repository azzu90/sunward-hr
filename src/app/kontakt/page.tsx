import { ContactForm } from "@/components/contact/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { categoryList } from "@/content/taxonomy";
import { ui } from "@/content/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

/**
 * Kontaktseite mit Formular (PRD §6, ANALYSIS.md §13).
 *
 * Keine Öffnungszeiten: die sind nirgends bestätigt, und geratene Zeiten
 * schicken Leute vor eine verschlossene Tür. Offene Frage an Zoran, siehe
 * ASSUMPTIONS.md.
 *
 * Kein Karten-Embed, solange `site.address.geo` ein tbd() ist — ein Pin auf
 * ungeprüfter Position ist schlechter als gar keiner.
 */

const trail = [{ name: ui.crumbs.home, href: routes.home() }, { name: ui.crumbs.contact }];

export const metadata = pageMetadata({
  title: "Kontakt — upit za ponudu i servis",
  description: `Nazovite nas ili pošaljite upit za Sunward strojeve, dodatnu opremu i servis. ${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}.`,
  path: routes.kontakt(),
});

/** Kategorien plus Dodatna oprema — mehr Auswahl braucht das Feld nicht. */
const productOptions = [
  ...categoryList.map((c) => ({ value: c.slug, label: c.name })),
  { value: "dodatna-oprema", label: ui.contact.productAttachments },
];

export default function KontaktPage() {
  const primaryEmail = site.emails.find((e) => e.primary);
  const salesPhone = site.phones.find((p) => p.id === "zoran");

  return (
    <Container>
      <Breadcrumbs trail={trail} />

      <div className="pb-14">
        <h1 className="text-3xl font-black text-ink">{ui.contact.title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-body">{ui.contact.lede}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div>
            <h2 className="mb-5 text-xl font-bold text-ink">{ui.contact.formHeading}</h2>
            {primaryEmail && salesPhone ? (
              <ContactForm
                options={productOptions}
                fallback={{
                  email: primaryEmail.address,
                  phoneDisplay: salesPhone.display,
                  phoneHref: salesPhone.href,
                }}
              />
            ) : null}
          </div>

          <aside className="flex flex-col gap-8 border-t-4 border-brand bg-surface-alt p-6">
            <div>
              <h2 className="mb-3 text-sm font-bold tracking-widest text-brand-text uppercase">
                {ui.contact.detailsHeading}
              </h2>
              <ul className="flex flex-col gap-3 text-sm">
                {site.phones.map((phone) => (
                  <li key={phone.id}>
                    <a href={phone.href} className="font-bold text-ink hover:text-brand-text">
                      {phone.display}
                    </a>
                    <span className="block text-xs text-ink-muted">
                      {phone.role ? `${phone.label} · ${phone.role}` : phone.label}
                    </span>
                  </li>
                ))}
                {site.emails.map((email) => (
                  <li key={email.id}>
                    <a
                      href={`mailto:${email.address}`}
                      className="font-bold break-all text-brand-text hover:underline"
                    >
                      {email.address}
                    </a>
                    <span className="block text-xs text-ink-muted">{email.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-sm font-bold tracking-widest text-brand-text uppercase">
                {ui.contact.addressHeading}
              </h2>
              <address className="text-sm leading-relaxed text-ink-body not-italic">
                {site.legalName}
                <br />
                {site.address.street}
                <br />
                {`${site.address.postalCode} ${site.address.city}`}
                <br />
                {site.address.country}
              </address>
            </div>

            <div>
              <h2 className="mb-3 text-sm font-bold tracking-widest text-brand-text uppercase">
                {ui.contact.socialHeading}
              </h2>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {site.social.map((profile) => (
                  <li key={profile.id}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener"
                      className="font-bold text-brand-text hover:underline"
                    >
                      {profile.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <JsonLd data={breadcrumbSchema(trail)} />
    </Container>
  );
}
