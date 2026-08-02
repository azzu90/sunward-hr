import { site } from "@/content/site";

/**
 * „u suradnji s Hidraulika Drvošped" (CLAUDE.md §6).
 *
 * Nutzt die Klassen aus src/app/partner-brand.css — das ist die einzige
 * Stelle im Projekt, an der die Drvošped-Farben vorkommen dürfen.
 */
export function PartnerBadge() {
  return (
    <a href={site.parent.url} className="dsp-badge dsp-link" rel="noopener" target="_blank">
      <span className="dsp-badge__mark" aria-hidden="true" />
      {site.parent.badge}
    </a>
  );
}
