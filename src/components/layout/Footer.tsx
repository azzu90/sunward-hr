import Link from "next/link";

import { footerColumns } from "@/content/nav";
import { site } from "@/content/site";
import { ui } from "@/content/ui";

import { PartnerBadge } from "./PartnerBadge";

const primaryEmail = site.emails.find((e) => e.primary);

export function Footer() {
  return (
    <footer className="bg-shell text-on-shell">
      <div className="mx-auto max-w-site px-4 py-10 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Spalte 1: Firma + Adresse (ANALYSIS.md §1 Footer-Struktur) */}
          <div className="flex flex-col gap-3">
            <p className="text-lg leading-none font-black tracking-tight">
              {"SUNWARD"}
              <span className="text-brand">{"."}</span>
              <span className="ml-1.5 align-middle text-xs font-normal text-on-shell-muted">
                {"HR"}
              </span>
            </p>
            <address className="text-sm leading-relaxed text-on-shell-muted not-italic">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {`${site.address.postalCode} ${site.address.city}`}
              <br />
              {site.address.country}
            </address>
            <PartnerBadge />
          </div>

          {footerColumns.map((column) => (
            <div key={column.id} className="flex flex-col gap-3">
              <h2 className="text-xs font-bold tracking-wider text-on-shell uppercase">
                {column.heading}
              </h2>
              <ul className="flex flex-col gap-1.5">
                {column.links.map((link) => (
                  <li key={link.id}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="dsp-link text-sm underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href ?? "#"}
                        className="text-sm text-on-shell-muted hover:text-brand"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Kontaktzeile */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm">
          <h2 className="text-xs font-bold tracking-wider text-on-shell uppercase">
            {ui.footer.contactHeading}
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
            {site.phones.map((phone) => (
              <li key={phone.id}>
                <a href={phone.href} className="text-on-shell-muted hover:text-brand">
                  <span className="text-on-shell">{phone.label}</span>
                  {": "}
                  {phone.display}
                </a>
              </li>
            ))}
            {primaryEmail ? (
              <li>
                <a
                  href={`mailto:${primaryEmail.address}`}
                  className="text-on-shell-muted hover:text-brand"
                >
                  {primaryEmail.address}
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-on-shell-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{site.parent.footerNote}</p>
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
