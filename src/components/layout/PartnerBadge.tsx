import { site } from "@/content/site";

import { SiteImage } from "../media/SiteImage";

/**
 * „u suradnji s Hidraulika Drvošped" (CLAUDE.md §6).
 *
 * Nutzt die Klassen aus src/app/partner-brand.css — das ist die einzige
 * Stelle im Projekt, an der die Drvošped-Farben vorkommen dürfen.
 *
 * Zeigt jetzt das echte Farblogo statt der kompakten CSS-Raute (Zoran-
 * Wunsch). Die alte Fassung hatte genau deshalb keinen Bild-Slot: der
 * volle HD-Schriftzug hat 2371/327 = 7,25:1, und PartnerLogo.tsx im
 * Footer zeigt bei 116px Breite bereits die untere Lesbarkeitsgrenze für
 * den zweizeiligen Mikrotext „Hidraulika/Drvošped" im Logo — darunter
 * wird er ein weisser Fleck. Bei der früher hier vorgesehenen 24px-Breite
 * (aus der kompakten Icon-Raute übernommen) käme bei 7,25:1 eine Höhe von
 * 3px heraus, der Schriftzug wäre nicht mehr als ein Strich. Deshalb jetzt
 * 144×20px (7,2:1, 0,7% von 7,25:1 entfernt) — bewusst oberhalb der
 * 116px-Schwelle, damit genau dieser Fehler sich nicht wiederholt.
 *
 * Farbfassung hier, NICHT die Weiss-Fassung aus dem Footer: die helle
 * Utility-Leiste (--color-surface-alt #f5f6f7) verträgt Navy anstandslos
 * (16,3:1) — anders als der türkise Footer, wo Navy laut
 * scripts/make-white-logos.py matschig wirkt (2,54:1) und deshalb bei
 * -white bleibt (siehe PartnerLogo.tsx).
 *
 * Kein sichtbarer Text mehr daneben ("u suradnji s Hidraulika Drvošped"
 * stand vorher neben der Raute) — das Logo sagt inhaltlich dasselbe, ein
 * zweites Mal ausgeschrieben wäre in der schmalen Utility-Leiste nur
 * Redundanz. `aria-label` auf dem Link trägt den Text stattdessen für
 * Screenreader weiter, statt sich auf den Bild-Alt-Text ("Hidraulika
 * Drvošped d.o.o.") zu verlassen — der nennt nur die Firma, nicht die
 * Partnerschaft.
 */
export function PartnerBadge() {
  return (
    <a
      href={site.parent.url}
      aria-label={site.parent.badge}
      className="dsp-badge dsp-link"
      rel="noopener"
      target="_blank"
    >
      <span className="block h-5 w-36 flex-none">
        <SiteImage
          id="brand/drvosped-logo-color"
          imgClassName="object-contain object-left"
          sizes="144px"
        />
      </span>
    </a>
  );
}
