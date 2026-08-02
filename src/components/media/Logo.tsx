import { site } from "@/content/site";

import { SiteImage } from "./SiteImage";

/**
 * Das Logo liegt noch nicht vor und kommt erst ganz am Projektende.
 *
 * Eine gestrichelte Platzhalter-Box auf jeder Seite würde die Seite bei
 * Zorans Review kaputt aussehen lassen. Deshalb bekommt das Logo als
 * einziges Bild einen echten Fallback: eine typografische Wortmarke, die
 * wie eine bewusste Gestaltung wirkt und exakt dieselbe Höhe belegt.
 *
 * Sobald public/slike/brand/sunward-logo.svg existiert, ersetzt sie sich
 * von selbst — ohne Codeänderung.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <SiteImage
      id="brand/sunward-logo"
      className={className ?? "h-8 w-auto"}
      imgClassName="object-contain object-left"
      fallback={
        <span className="flex h-full items-center text-xl leading-none font-black tracking-tight text-on-shell">
          {"SUNWARD"}
          <span className="text-brand">{"."}</span>
          <span className="sr-only">{` ${site.brandName}`}</span>
        </span>
      }
    />
  );
}
