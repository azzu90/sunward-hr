import Link from "next/link";

import { mainNav } from "@/content/nav";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { ui } from "@/content/ui";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "../media/Logo";
import { MobileNav } from "./MobileNav";
import { PartnerBadge } from "./PartnerBadge";

const primaryEmail = site.emails.find((e) => e.primary);
const salesPhone = site.phones.find((p) => p.id === "zoran");

export function Header() {
  return (
    <header className="bg-shell text-on-shell">
      {/* Utility-Bar (ANALYSIS.md §1): Sprachumschalter + Direktkontakt */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
          <PartnerBadge />
          <div className="flex items-center gap-4">
            {salesPhone ? (
              <a
                href={salesPhone.href}
                className="hidden text-xs text-on-shell-muted hover:text-on-shell sm:inline"
              >
                {salesPhone.display}
              </a>
            ) : null}
            {primaryEmail ? (
              <a
                href={`mailto:${primaryEmail.address}`}
                className="hidden text-xs text-on-shell-muted hover:text-on-shell md:inline"
              >
                {primaryEmail.address}
              </a>
            ) : null}
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href={routes.home()} className="flex-none">
          <Logo />
          <span className="sr-only">{site.brandName}</span>
        </Link>

        <nav aria-label={ui.nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {mainNav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href ?? "#"}
                  className="text-sm font-medium text-on-shell hover:text-brand"
                >
                  {item.label}
                  {item.badge ? (
                    <span className="ml-1.5 bg-brand-strong px-1 py-0.5 align-middle text-[10px] font-bold text-on-brand">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
