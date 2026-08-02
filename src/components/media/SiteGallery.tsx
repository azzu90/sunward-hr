import { ui } from "@/content/ui";
import type { GalleryRef } from "@/content/types";
import { resolveGalleryExtras, resolveImage } from "@/lib/assets";

import { SiteImage } from "./SiteImage";

/**
 * Bildergalerie (ANALYSIS.md §4 Punkt 1): grosses Hauptbild plus
 * Miniaturleiste.
 *
 * Wenn noch gar keine Datei existiert, wird bewusst NUR das Hauptbild als
 * Platzhalter gezeigt — nicht zusätzlich zwanzig leere Kästchen, die die
 * Seite kaputt aussehen lassen.
 *
 * Die Miniaturleiste ist CSS scroll-snap, kein JavaScript.
 */
export function SiteGallery({ gallery, priority }: { gallery: GalleryRef; priority?: boolean }) {
  const main = resolveImage(gallery.main);
  const extras = resolveGalleryExtras(gallery.main);

  return (
    <div className="flex flex-col gap-3">
      <SiteImage
        id={gallery.main}
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 640px"
        className="border border-line"
      />

      {extras.length > 0 ? (
        <ul
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1"
          aria-label={ui.product.galleryHeading}
        >
          {extras.map((extra) => (
            <li key={extra.src} className="w-24 flex-none snap-start">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={extra.src}
                alt={extra.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full border border-line object-cover"
              />
            </li>
          ))}
        </ul>
      ) : main.status === "real" ? null : (
        <p className="text-xs text-ink-muted">{ui.media.galleryPending}</p>
      )}
    </div>
  );
}
