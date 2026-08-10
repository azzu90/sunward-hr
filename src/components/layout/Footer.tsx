import Link from "next/link";

import { footerColumns, footerLegalLinks } from "@/content/nav";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { SiteImage } from "../media/SiteImage";
import { SocialIcon } from "../media/SocialIcon";

import { PartnerLogo } from "./PartnerLogo";

const primaryEmail = site.emails.find((e) => e.primary);

/**
 * Struktur näher an sunward.eu: vier gleichrangige Hauptspalten (Marke,
 * Strojevi, Tvrtka, Kontakt), darunter eine einzige schmale Bottom-Bar mit
 * Rücklink-Hinweis, Rechtslinks und Copyright — statt vorher Pravno als
 * eigene Hauptspalte, Kontakt als eigener Block darunter und Pratite nas
 * als dritter Block mit eigener Überschrift.
 *
 * Bewusst NICHT 1:1 sunward.eu: mehr Nav-Punkte, zwei Telefonnummern statt
 * einer, vier Zertifikate statt drei — unser tatsächlicher Umfang, nicht
 * deren Struktur um jeden Preis kopiert.
 */
export function Footer() {
  return (
    <footer className="surface-brand">
      <div className="mx-auto max-w-site px-4 py-10 sm:px-6">
        {/* Eigene Kopfzeile über dem 4-Spalten-Raster, keine Zeile INNERHALB
            von Spalte 1: sonst startet "Hidraulika Drvošped d.o.o." dort
            spürbar tiefer als STROJEVI/TVRTKA/KONTAKT in den Nachbarspalten,
            weil das Logo als erstes Kind die Spalte nach unten schiebt. Als
            eigener Block darüber beginnen alle vier Spaltenüberschriften auf
            derselben Höhe. */}
        <div className="mb-8">
          {/* Freigestellte Weiss-Fassung statt der typografischen Wortmarke.
              208px breit bei 4,39:1 ≈ 47px hoch — bewusst dominant, das
              Drvošped-Logo weiter unten ist demgegenüber untergeordnet.
              Feste Wrapper-Breite, weil SiteImage selbst `w-full` setzt. */}
          <span className="block w-52">
            <SiteImage
              id="brand/sunward-logo-white"
              imgClassName="object-contain object-left"
              sizes="208px"
            />
          </span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Spalte 1: Marke — Adresse, Partner-Badge, Social, Zertifikate
              (ANALYSIS.md §1 Footer-Struktur). Logo steht jetzt in der
              Kopfzeile oben, nicht mehr hier. */}
          <div className="flex flex-col gap-3">
            <address className="text-sm leading-relaxed text-on-brand-muted not-italic">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {`${site.address.postalCode} ${site.address.city}`}
              <br />
              {site.address.country}
            </address>
            <PartnerLogo />

            {/* Social-Icons direkt unter Adresse/HD-Badge, wie bei sunward.eu
                ("Follow us:" ist dort nur ein kleines Inline-Label vor den
                Icons) — kein eigener Abschnitt mit Überschrift/Trennlinie
                mehr. Icons deutlich größer als vorher (size-4 → size-7,
                16px → 28px): bei size-4 fielen sie neben den anderen
                Footer-Elementen kaum auf. */}
            <div className="mt-1 flex items-center gap-3">
              <span className="text-xs font-bold tracking-wider text-on-brand-muted uppercase">
                {ui.footer.socialHeading}
              </span>
              <ul className="flex items-center gap-4">
                {site.social.map((profile) => (
                  <li key={profile.id}>
                    {/* KEIN hover:text-accent-text-on-brand wie bei den
                        übrigen Footer-Links: SocialIcon setzt jetzt feste
                        Markenfarben (Facebook-Blau, Instagram-Verlauf, …)
                        statt fill="currentColor" — die globale Orange-Hover-
                        Farbe würde sie sonst stillschweigend überschreiben
                        und genau der Markenfarbigkeit widersprechen, die
                        hier eingeführt wurde. Stattdessen ein neutraler
                        Opacity-/Scale-Effekt, der die Markenfarbe unberührt
                        lässt. */}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener"
                      className="inline-flex opacity-80 transition duration-150 hover:scale-110 hover:opacity-100"
                    >
                      <SocialIcon id={profile.id} className="size-7" />
                      <span className="sr-only">{profile.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Text-Box statt Logo-Grafiken (PRD §3, §13 — "ISO 9001
                certificirano" ist dort explizit dem Footer zugewiesen).
                Upgrade auf echte Zertifikat-Logos, sobald Zoran Scans liefert. */}
            <div>
              <h2 className="mb-2 text-sm font-bold tracking-wider text-on-brand uppercase">
                {ui.footer.certificatesHeading}
              </h2>
              <ul className="flex flex-col gap-1 text-xs text-on-brand-muted">
                {site.certificates.map((cert) => (
                  <li key={cert.id}>
                    {cert.name}
                    {cert.note ? ` — ${cert.note}` : null}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.id} className="flex flex-col gap-3">
              <h2 className="text-sm font-bold tracking-wider text-on-brand uppercase">
                {column.heading}
              </h2>
              {/* Hover zu Orange, live auf sunward.eu bestätigt
                  (a:hover { color: #F39A2E }) — aber --color-accent-text-on-brand
                  (#facb90) statt des reinen #F39A2E: das ergibt auf
                  --color-brand-deep nur 3,13:1, --color-accent-text-on-brand
                  liegt bei 4,63:1. */}
              <ul className="flex flex-col gap-1.5">
                {column.links.map((link) => (
                  <li key={link.id}>
                    {link.external ? (
                      // Bewusst NICHT die Klasse "dsp-link": die ist laut
                      // partner-brand.css ausschliesslich für die
                      // Drvošped-Badge/-Link-Verwendung reserviert. Hier
                      // stehen inzwischen auch unbeteiligte externe Links
                      // (sunward.eu) in derselben Spalte.
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="text-sm text-on-brand-muted underline-offset-2 hover:text-accent-text-on-brand hover:underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href ?? "#"}
                        className="text-sm text-on-brand-muted hover:text-accent-text-on-brand"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Spalte 4: Kontakt — jetzt eine normale Hauptspalte statt eines
              eigenen, abgetrennten Bereichs unter dem Raster. Inhalt
              unverändert: die zwei Nummern (Ured/Zoran) + E-Mail,
              nur als vertikale Spaltenliste statt einer umbrechenden Zeile. */}
          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-bold tracking-wider text-on-brand uppercase">
              {ui.footer.contactHeading}
            </h2>
            <ul className="flex flex-col gap-1.5 text-sm">
              {site.phones.map((phone) => (
                <li key={phone.id}>
                  {/* Das Label (z.B. "Ured") steht in einem eigenen <span>
                      mit eigener Farbe (text-on-brand, heller als die Nummer)
                      — die erbt die Hover-Farbe der <a> nicht automatisch,
                      weil eine eigene color-Angabe die Vererbung stoppt.
                      group/group-hover, damit Label UND Nummer zusammen
                      Orange werden statt nur die Nummer. */}
                  <a
                    href={phone.href}
                    className="group text-on-brand-muted hover:text-accent-text-on-brand"
                  >
                    <span className="text-on-brand group-hover:text-accent-text-on-brand">
                      {phone.label}
                    </span>
                    {": "}
                    {phone.display}
                  </a>
                </li>
              ))}
              {primaryEmail ? (
                <li>
                  <a
                    href={`mailto:${primaryEmail.address}`}
                    className="text-on-brand-muted hover:text-accent-text-on-brand"
                  >
                    {primaryEmail.address}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        {/* Bottom-Bar: Rücklink-Hinweis, Rechtslinks und Copyright in einer
            einzigen schmalen Zeile — wie bei sunward.eu die Bottom-Bar mit
            Privacy/Cookies/Legal Notice. Ersetzt die frühere Pravno-Hauptspalte
            und die separate Copyright-Zeile. justify-between mit drei
            Kindern verteilt sie an den beiden Enden plus mittig, ohne dass
            es eine feste Reihenfolge wie bei zwei Elementen bräuchte. */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-on-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{site.parent.footerNote}</p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {footerLegalLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href ?? "#"} className="hover:text-on-brand hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p>
            {"© "}
            {new Date().getFullYear()} {site.legalName}
            {". "}
            {ui.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
