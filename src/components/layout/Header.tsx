import Link from "next/link";

import { mainNav } from "@/content/nav";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { ui } from "@/content/ui";

import { Logo } from "../media/Logo";
import { MobileNav } from "./MobileNav";
import { PartnerBadge } from "./PartnerBadge";

const primaryEmail = site.emails.find((e) => e.primary);
const salesPhone = site.phones.find((p) => p.id === "zoran");

export function Header() {
  return (
    <header className="border-b border-line bg-surface">
      {/* Utility-Bar (ANALYSIS.md §1): Direktkontakt.
          Kein Sprachumschalter — sunward.hr ist ausschliesslich kroatisch. */}
      <div className="border-b border-line bg-surface-alt">
        <div className="mx-auto flex max-w-site items-center justify-between gap-4 px-4 py-1.5 sm:px-6">
          <PartnerBadge />
          <div className="flex items-center gap-4">
            {salesPhone ? (
              <a
                href={salesPhone.href}
                className="hidden text-xs text-ink-muted hover:text-brand-text sm:inline"
              >
                {salesPhone.display}
              </a>
            ) : null}
            {primaryEmail ? (
              <a
                href={`mailto:${primaryEmail.address}`}
                className="hidden text-xs text-ink-muted hover:text-brand-text md:inline"
              >
                {primaryEmail.address}
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-site items-center justify-between gap-6 px-4 py-3 sm:px-6">
        <Link href={routes.home()} className="flex-none">
          <Logo />
          <span className="sr-only">{site.brandName}</span>
        </Link>

        {/* `mx-auto` halbiert den Restraum zwischen Logo und rechtem Rand und
            holt die Nav damit aus der rechten Ecke Richtung Mitte (live auf
            sunward.eu sitzt sie bei ~29% der Viewport-Breite, hier vorher bei
            ~56%). Bewusst kein fester Abstand zum Logo: auf einem zentrierten
            max-w-Container ist eine Prozentangabe ohnehin nicht stabil — der
            Container wächst ab 1328px nicht mehr mit, der Viewport schon. So
            skaliert die Position von selbst und braucht keine gesetzte Zahl.
            Gemessen: 33,8% bei 1024px, 37,0% bei 1280px, 38,4% bei 1440px.

            NICHT justify-center auf der Zeile: das ergibt dieselbe
            Nav-Position, schiebt aber das Logo mit nach rechts, weg von der
            linken Kante der Inhaltsspalte, mit der H1 und der Text darunter
            fluchten. */}
        <nav aria-label={ui.nav.main} className="mx-auto hidden lg:block">
          <ul className="flex items-center gap-5">
            {mainNav.map((item) => (
              <li key={item.id}>
                {/* Fett und in der Markenfarbe, wie live auf sunward.eu
                    gemessen. Aber --color-brand-text (#00726d) statt des dort
                    verwendeten #008D84: letzteres ergibt auf Weiss 4,08:1 und
                    reisst damit die AA-Schwelle von 4,5:1. Der Text ist 14px —
                    auch mit font-weight 700 bleibt er unter den 18,66px, ab
                    denen 3:1 genügen würde, zählt also als Normaltext.
                    #00726d liegt bei 5,79:1 und ist im Projekt genau für
                    diesen Zweck abgeleitet.

                    Hover zu Orange, ebenfalls live auf sunward.eu bestätigt
                    (a:hover { color: #F39A2E }) — aber --color-accent-text
                    (#a35f0a) statt des reinen #F39A2E: das ergibt auf Weiss
                    nur 2,22:1, --color-accent-text liegt bei 5,00:1. */}
                <Link
                  href={item.href ?? "#"}
                  className="text-sm font-bold text-brand-text hover:text-accent-text"
                >
                  {item.label}
                  {item.badge ? (
                    <span className="ml-1.5 rounded-ui bg-accent px-1 py-0.5 align-middle text-[10px] font-bold text-on-accent">
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
