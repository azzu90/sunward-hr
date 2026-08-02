import Image from "next/image";
import type { ReactNode } from "react";

import { ui } from "@/content/ui";
import type { ImageId } from "@/content/types";
import { resolveImage } from "@/lib/assets";
import { IS_DEV } from "@/lib/flags";

/**
 * Die einzige Stelle im Projekt, die next/image aufruft.
 *
 * Beide Zweige — echtes Bild und Platzhalter — rendern DIESELBE äussere
 * Box mit derselben `aspect-ratio`. Deshalb springt beim Tausch nichts:
 * es erscheinen nur Pixel, wo vorher eine gestrichelte Fläche war.
 *
 * Der Alt-Text kommt in beiden Fällen aus dem Manifest und ist final.
 * Der Platzhalter trägt ihn als aria-label auf role="img", damit
 * Screenreader schon jetzt eine sinnvolle Beschreibung bekommen.
 */

export interface SiteImageProps {
  id: ImageId;
  /** Stylt die BOX — identisch in beiden Zweigen. */
  className?: string;
  /** object-cover (Standard) oder object-contain. */
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Ersetzt die gestrichelte Box, z.B. durch eine Wortmarke beim Logo. */
  fallback?: ReactNode;
  /**
   * Hintergrundbild, das den positionierten Elternknoten ausfüllt (Hero).
   *
   * Muss ein eigener Schalter sein und darf nicht per className von aussen
   * kommen: die Box setzt `relative` fest, und bei Tailwind entscheidet die
   * Reihenfolge im Stylesheet — ein von aussen übergebenes `absolute`
   * verliert und das Bild landet im Textfluss.
   *
   * Im Overlay-Modus entfällt das Seitenverhältnis (die Box füllt den
   * Elternknoten) und der Platzhalter zeigt keine Hinweistexte, weil
   * darüber der Hero-Text liegt. Alt-Text, role und data-placeholder
   * bleiben erhalten.
   */
  overlay?: boolean;
}

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-7"
      aria-hidden="true"
    >
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2a1.5 1.5 0 0 0 1.25-.67l.6-.9A1.5 1.5 0 0 1 9.8 4.5h4.4a1.5 1.5 0 0 1 1.25.67l.6.9A1.5 1.5 0 0 0 17.3 7h2.2A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="12.5" r="3.25" />
    </svg>
  );
}

export function SiteImage({
  id,
  className,
  imgClassName = "object-cover",
  sizes,
  priority,
  fallback,
  overlay = false,
}: SiteImageProps) {
  const resolved = resolveImage(id);
  const boxClass = overlay
    ? `absolute inset-0 h-full w-full overflow-hidden ${className ?? ""}`
    : `relative w-full overflow-hidden ${className ?? ""}`;
  const boxStyle = overlay ? undefined : { aspectRatio: resolved.aspect };

  if (resolved.status === "real") {
    return (
      <div className={boxClass} style={boxStyle}>
        <Image
          src={resolved.src}
          alt={resolved.alt}
          fill
          sizes={sizes ?? resolved.sizes ?? "100vw"}
          priority={priority ?? resolved.priority}
          className={imgClassName}
        />
      </div>
    );
  }

  if (fallback) {
    return (
      <div className={boxClass} style={boxStyle}>
        {fallback}
      </div>
    );
  }

  // Overlay-Platzhalter: nur eine dezente Fläche. Hinweistexte würden hier
  // unter dem Hero-Text liegen und wären unlesbar — welches Foto fehlt,
  // sagt ohnehin `npm run report`.
  if (overlay) {
    return (
      <div
        className={`${boxClass} bg-shell-pattern`}
        role="img"
        aria-label={resolved.alt}
        data-placeholder="image"
        data-image-id={resolved.id}
      />
    );
  }

  return (
    <div
      className={`${boxClass} flex flex-col items-center justify-center gap-2 border-2 border-dashed border-line bg-surface-alt p-4 text-center`}
      style={boxStyle}
      role="img"
      aria-label={resolved.alt}
      data-placeholder="image"
      data-image-id={resolved.id}
    >
      <span className="text-brand-strong" aria-hidden="true">
        <CameraIcon />
      </span>
      <p className="max-w-prose text-sm leading-snug font-medium text-ink-body">{resolved.hint}</p>
      <p className="text-xs tracking-wide text-ink-muted uppercase">{ui.media.imagePending}</p>
      {IS_DEV ? (
        <code className="text-[10px] break-all text-ink-muted">
          {`public/slike/${resolved.id}.jpg`}
        </code>
      ) : null}
    </div>
  );
}
