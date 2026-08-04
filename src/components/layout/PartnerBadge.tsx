import { site } from "@/content/site";

/**
 * „u suradnji s Hidraulika Drvošped" (CLAUDE.md §6).
 *
 * Nutzt die Klassen aus src/app/partner-brand.css — das ist die einzige
 * Stelle im Projekt, an der die Drvošped-Farben vorkommen dürfen.
 *
 * Bewusst KEIN SiteImage/Manifest-Slot mehr (anders als die frühere
 * Fassung). `brand/drvosped-logo` ist der volle HD-Schriftzug im
 * Seitenverhältnis 2371/327 = 7,25:1 — der komplette Wortlaut kam schon
 * damals aus einer falschen Annahme ("3:2-Verhältnis"), nie aus einer
 * echten Messung. Sobald der Manifest-Eintrag später auf den echten Wert
 * korrigiert wurde, hat SiteImage genau diese aspect-ratio auch auf die
 * eigene Box gelegt — bei der hier vorgesehenen 24px-Breite ergibt 7,25:1
 * eine Höhe von 3px, der Fleck wurde vom umgebenden overflow-hidden auf
 * einen Strich zusammengequetscht. Ein 7,25:1-Wortzug passt schlicht nicht
 * in ein kompaktes Icon-Feld — unabhängig davon, ob dort die CSS-Raute
 * oder ein künftiges echtes Foto steckt.
 *
 * Der volle Schriftzug hat inzwischen ohnehin einen eigenen, passenden
 * Platz: PartnerLogo.tsx im Footer, 116–176px breit. Diese Badge hier
 * bleibt bewusst die kompakte Raute — kein Bild-Slot, der wieder auf
 * dieselbe Weise brechen könnte.
 */
export function PartnerBadge() {
  return (
    <a href={site.parent.url} className="dsp-badge dsp-link" rel="noopener" target="_blank">
      <span className="dsp-badge__mark" aria-hidden="true" />
      {site.parent.badge}
    </a>
  );
}
