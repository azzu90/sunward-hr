import { componentBrands } from "@/content/component-brands";
import { ui } from "@/content/ui";

/**
 * Logo-Reihe der 8 Komponentenmarken (CLAUDE.md, Phase 9) — der visuelle
 * Beleg zur "Provjerene komponente"-Kachel in "Zašto Sunward?" direkt
 * darüber, die dieselben 8 Namen nur als Fliesstext nennt.
 *
 * Eigene, neutrale Fläche statt einer weiteren Kachel: das sind fremde
 * Marken, kein Sunward-Content, und sollen sich entsprechend klar von den
 * türkis/orangen Sunward-Flächen absetzen (--color-surface-alt, dieselbe
 * Fläche wie Hero und TrustBar).
 *
 * Rohe <img>, bewusst nicht über SiteImage: jedes Logo behält seine eigene
 * Breite bei fester Höhe (`h-*`/`w-auto`) statt einer festen Breite-Box mit
 * abgeleiteter Höhe — das genaue Gegenteil des Box-Modells, für das
 * SiteImage gebaut ist (siehe component-brands.ts). Alle 8 Dateien liegen
 * bereits vor, es gibt keinen Platzhalterzustand, den das Manifest-System
 * abbilden müsste.
 */
export function ComponentBrands() {
  return (
    <section aria-labelledby="dobavljaci" className="border-y border-line bg-surface-alt">
      <div className="mx-auto max-w-site px-4 py-10 text-center sm:px-6 sm:py-14">
        <h2 id="dobavljaci" className="mb-8 text-xs font-bold tracking-widest text-ink uppercase">
          {ui.pages.homeComponentBrandsHeading}
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {componentBrands.map((brand) => (
            <li key={brand.id} className="flex h-9 items-center sm:h-11">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/slike/komponente/${brand.file}`}
                alt={brand.name}
                loading="lazy"
                decoding="async"
                className="h-full w-auto max-w-[9.5rem] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
