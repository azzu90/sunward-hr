import { site } from "@/content/site";

import { SiteImage } from "../media/SiteImage";

/**
 * „u suradnji s Hidraulika Drvošped" (CLAUDE.md §6).
 *
 * Nutzt die Klassen aus src/app/partner-brand.css — das ist die einzige
 * Stelle im Projekt, an der die Drvošped-Farben vorkommen dürfen.
 *
 * Der Bild-Slot steckt in einem fest bemessenen Wrapper (24×16px, im
 * 3:2-Verhältnis des Manifests) statt die Größe per Klasse an `SiteImage`
 * selbst zu übergeben: dessen Basisklasse setzt `w-full`, das würde mit
 * einer eigenen `w-*`-Klasse um dieselbe CSS-Eigenschaft konkurrieren und
 * je nach Utility-Reihenfolge im Stylesheet gewinnen — sichtbar als
 * einmal aufgetretenes Zeilenumbruch-Problem im Badge-Text. Ein Wrapper
 * mit definierter Größe macht `w-full` zu genau dem gewünschten Wert,
 * ohne Wettstreit. Sobald public/slike/brand/drvosped-logo.* existiert,
 * ersetzt sie den CSS-Farbfleck automatisch.
 */
export function PartnerBadge() {
  return (
    <a href={site.parent.url} className="dsp-badge dsp-link" rel="noopener" target="_blank">
      <span className="inline-block h-4 w-6 flex-none overflow-hidden">
        <SiteImage
          id="brand/drvosped-logo"
          imgClassName="object-contain"
          fallback={<span className="dsp-badge__mark" aria-hidden="true" />}
        />
      </span>
      {site.parent.badge}
    </a>
  );
}
