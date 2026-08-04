import type { ReactNode } from "react";

/**
 * Strichicons für die Anbaugeräte (Dodatna oprema).
 *
 * Gleicher Vertrag wie PartIcon.tsx — 24×24, stroke 1.5, runde Enden,
 * aria-hidden — damit beide Icon-Sätze als eine Familie lesen. Inline-SVG
 * und keine Fotos, aus demselben Grund wie dort: Icons erzeugen keine
 * neuen Positionen auf Zorans Fotoliste.
 *
 * Die Map deckt alle zehn Anbaugeräte aus PRD §8 ab, obwohl in
 * src/content/attachments erst `hidraulicki-cekic` als Datensatz existiert.
 * Der Schlüssel IST der Slug — die übrigen neun bekommen ihr Icon in
 * Phase 2 also automatisch, sobald ihr Datensatz angelegt wird, ohne dass
 * hier etwas angefasst werden muss.
 *
 * Deshalb nimmt die Komponente `slug: string` und nicht die engere Union:
 * `Attachment.slug` ist im Typ ein string, und ein unbekannter Slug soll
 * die Seite nicht brechen, sondern nur kein Icon zeigen. Die Union sichert
 * dafür die Map selbst ab — ein Tippfehler im Schlüssel fällt beim
 * Typecheck auf.
 */

export type AttachmentIconId =
  | "hidraulicki-cekic"
  | "thumb"
  | "sumske-skare"
  | "busac-rupa"
  | "roto-tilt"
  | "power-tilt"
  | "vilice-za-bager"
  | "sortirne-skare"
  | "mulcer"
  | "mjesalica-betona";

const paths: Record<AttachmentIconId, ReactNode> = {
  /* Abbruchhammer: Anbaukonsole, Gehäuse, langer Meißel. Bewusst anders
     gezeichnet als der Handhammer `cekici` in PartIcon.tsx. */
  "hidraulicki-cekic": (
    <>
      <path d="M9.5 2.5h5v2h-5z" />
      <rect x="8" y="4.5" width="8" height="8.5" rx="1" />
      <path d="M12 13v5" />
      <path d="M10.25 18h3.5L12 21.5z" />
    </>
  ),
  /* Löffel plus gegenüberliegende Klaue am Drehpunkt — genau das, was ein
     Thumb macht: er greift gegen die Schaufel. */
  thumb: (
    <>
      <path d="M3.5 9.5h9v4.5a4 4 0 0 1-4 4H7.5a4 4 0 0 1-4-4z" />
      <circle cx="18.5" cy="5" r="1.5" />
      <path d="M18.5 6.5c0 4.5-1.75 7.75-4.75 9.5" />
      <path d="M13.75 16l-1.5 1.5" />
    </>
  ),
  /* Gekreuzte Klingen mit Drehpunkt. Zwei Vorversionen sind verworfen: als
     zwei vom Drehpunkt weglaufende Bögen las das Icon als Stechzirkel, als
     V an einem senkrechten Stamm als Fahne am Mast. Die Kreuzung ist das
     Merkmal, das „Schere" trägt. */
  "sumske-skare": (
    <>
      <path d="M9.5 2h5v2h-5z" />
      <path d="M9 4.25L15.5 20.5" />
      <path d="M15 4.25L8.5 20.5" />
      <circle cx="12" cy="12.4" r="1.2" />
    </>
  ),
  /* Erdbohrer: Aufnahme, Schaft, durchlaufende Wendel, Spitze. */
  "busac-rupa": (
    <>
      <rect x="10" y="2" width="4" height="2.5" rx="0.75" />
      <path d="M12 4.5v13" />
      <path d="M12 5.75c-3.25 1-3.25 2.5 0 3.5c3.25 1 3.25 2.5 0 3.5c-3.25 1-3.25 2.5 0 3.5" />
      <path d="M10.25 17.5h3.5L12 21.5z" />
    </>
  ),
  /* Roto tilt kann schwenken UND drehen — deshalb der volle Drehpfeil um
     die geneigte Platte. Power tilt darunter hat ihn bewusst nicht. */
  "roto-tilt": (
    <>
      <path d="M19.5 9A8 8 0 1 0 12 20" />
      <path d="M15.75 9h3.75V5.25" />
      <path d="M8 15l8-4" />
      <circle cx="12" cy="13" r="1" />
    </>
  ),
  /* Power tilt: feste Aufnahme, Drehpunkt, geneigte Platte (zwei Linien für
     Materialstärke), zwei Bögen für den Schwenkbereich. */
  "power-tilt": (
    <>
      <rect x="9" y="2.5" width="6" height="3" rx="0.75" />
      <path d="M12 5.5v4" />
      <circle cx="12" cy="10.75" r="1.25" />
      <path d="M5.5 16l13-4.5" />
      <path d="M6.25 18l13-4.5" />
      <path d="M4.5 12.75a8.5 8.5 0 0 0 1 4.75" />
      <path d="M19.5 12.75a8.5 8.5 0 0 1-1 4.75" />
    </>
  ),
  "vilice-za-bager": (
    <>
      <rect x="4.5" y="4" width="2.5" height="16" rx="0.75" />
      <path d="M7 8.5h11.5M7 15.5h11.5" />
    </>
  ),
  /* Greifzange mit einwärts gekrümmten Backen und Material dazwischen.
     Bewusst eine andere Bildidee als die gekreuzten Klingen der
     Šumske škare — die beiden dürfen sich bei 28px nicht verwechseln. */
  "sortirne-skare": (
    <>
      <path d="M10.5 2h3v2h-3z" />
      <path d="M12 4v2.5" />
      <circle cx="12" cy="7.5" r="1.2" />
      <path d="M11 8.5C7.5 10.5 5.5 13.5 6 17c1-1.5 2.5-2.5 4.25-3" />
      <path d="M13 8.5c3.5 2 5.5 5 5 8.5-1-1.5-2.5-2.5-4.25-3" />
      <rect x="10.5" y="16.5" width="3" height="3" rx="0.5" />
    </>
  ),
  /* Breites flaches Gehäuse mit Rotor, darunter Stoppeln — die Stoppeln
     sind das, was den Mulcher lesbar macht. */
  mulcer: (
    <>
      <path d="M3.5 6.5h17v4.5c0 2.5-2 4.5-4.5 4.5h-8c-2.5 0-4.5-2-4.5-4.5z" />
      <circle cx="12" cy="10.5" r="2.5" />
      <path d="M12 10.5l2 1.5M12 10.5l-2 1.5M12 10.5V8" />
      <path d="M5 20v-2M8.5 20.5v-2.5M12 20v-2M15.5 20.5v-2.5M19 20v-2" />
    </>
  ),
  /* Mischschaufel: Trog, zwei Mischbögen, Auslauf unten rechts. */
  "mjesalica-betona": (
    <>
      <path d="M4 6.5h15l-2 8.5a3.5 3.5 0 0 1-3.5 2.5H9.5A3.5 3.5 0 0 1 6 15z" />
      <path d="M8 9.75c2.5 1.5 5 1.5 7.5 0M8.75 13c2 1.25 4 1.25 6 0" />
      <path d="M13.75 18h4.25l-1.25 3.25h-2.25z" />
    </>
  ),
};

function isKnown(slug: string): slug is AttachmentIconId {
  return slug in paths;
}

export function AttachmentIcon({ slug, className }: { slug: string; className?: string }) {
  if (!isKnown(slug)) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[slug]}
    </svg>
  );
}
