import { site } from "@/content/site";

import { SiteImage } from "../media/SiteImage";

/**
 * Das Drvošped-Logo auf der türkisen Markenfläche im Footer.
 *
 * Gegenstück zu PartnerBadge (Header): dort bleibt es beim CSS-Fleck plus
 * Text, hier steht das echte Logo. Genutzt wird die freigestellte
 * Weiss-Fassung — das Original ist navy und auf Türkis matschig.
 *
 * Grösse: 176px breit bei 7,25:1 ≈ 24px hoch. Darunter wird der zweizeilige
 * Mikrotext „Hidraulika/Drvošped" im Logo unlesbar (bei 116px ein weisser
 * Fleck). Dass es trotzdem deutlich untergeordnet zum Sunward-Logo wirkt,
 * macht `opacity-75`: Weiss zu 75% auf --color-brand-deep ergibt ≈ #bfd8d7
 * und damit fast genau --color-on-brand-muted, den Ton der übrigen
 * nachgeordneten Footer-Texte. 4,57:1 gegen die Fläche.
 *
 * Die feste Wrapper-Breite ist Pflicht, nicht Geschmack: SiteImage setzt
 * selbst `w-full` — eine eigene `w-*`-Klasse würde um dieselbe
 * CSS-Eigenschaft konkurrieren und je nach Reihenfolge im Stylesheet
 * gewinnen (siehe PartnerBadge.tsx).
 */
export function PartnerLogo() {
  return (
    <a
      href={site.parent.url}
      className="dsp-link inline-flex flex-col gap-1.5"
      rel="noopener"
      target="_blank"
    >
      <span className="block w-44 opacity-75">
        <SiteImage id="brand/drvosped-logo-white" imgClassName="object-contain" sizes="176px" />
      </span>
      <span className="text-[0.6875rem] leading-tight tracking-[0.01em]">{site.parent.badge}</span>
    </a>
  );
}
