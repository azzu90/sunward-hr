import { site } from "@/content/site";

import { SiteImage } from "./SiteImage";

/**
 * Das farbige Sunward-Hrvatska-Logo im Header — Navy mit rotem W, wie auf
 * sunward.eu selbst. Nicht die freigestellte Weiss-Fassung, die gehört auf
 * die türkise Markenfläche im Footer.
 *
 * Breite UND Höhe sind fest gesetzt, nicht nur die Höhe: `SiteImage` setzt
 * auf der Box selbst `w-full`, eine reine Höhenangabe (vorher `h-8 w-auto`)
 * würde mit derselben CSS-Eigenschaft konkurrieren und die Breite je nach
 * Flex-Kontext anders ausfallen lassen. 176×40 entspricht dem
 * Seitenverhältnis der beschnittenen Datei (729×166 = 4,39:1) auf 0,02%.
 *
 * Die typografische Wortmarke bleibt als Fallback stehen: sie greift nur,
 * wenn die Datei fehlt, und verhindert dann eine gestrichelte
 * Platzhalter-Box im Seitenkopf.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <SiteImage
      id="brand/sunward-logo-color"
      className={className ?? "h-10 w-44"}
      imgClassName="object-contain object-left"
      sizes="176px"
      fallback={
        <span className="flex h-full items-center font-heading text-xl leading-none font-black tracking-tight text-ink">
          {"SUNWARD"}
          <span className="text-brand">{"."}</span>
          <span className="sr-only">{` ${site.brandName}`}</span>
        </span>
      }
    />
  );
}
