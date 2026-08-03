import type { ReactNode } from "react";

import type { parts } from "@/content/parts";

/**
 * Strichicons für die Ersatzteil-Kategorien auf /servis.
 *
 * Bewusst inline-SVG und keine Fotos: elf Bildplatzhalter hätten elf neue
 * Positionen auf Zorans Fotoliste erzeugt, für eine Übersicht, die auch mit
 * Icons funktioniert. Das Platzhalter-System bleibt damit unangetastet.
 *
 * Die Icons sind rein dekorativ — das Label steht als echter Text daneben,
 * deshalb aria-hidden und kein <title>.
 */

export type PartIconId = (typeof parts.categories)[number]["id"];

const paths: Record<PartIconId, ReactNode> = {
  baterije: (
    <>
      <rect x="2.5" y="7.5" width="16" height="9" rx="1.5" />
      <path d="M18.5 10.5h2.5v3h-2.5" />
      <path d="M6 10.5v3M9.5 10.5v3M13 10.5v3" />
    </>
  ),
  "motorni-dijelovi": (
    <>
      <rect x="7.5" y="2.5" width="9" height="5.5" rx="1" />
      <path d="M12 8v6" />
      <circle cx="12" cy="17.5" r="4" />
    </>
  ),
  filteri: (
    <>
      <path d="M3 4h18l-7 8.5V20l-4-2v-5.5z" />
    </>
  ),
  maziva: (
    <>
      <path d="M12 2.5c0 0-6.5 7.5-6.5 11.5a6.5 6.5 0 0 0 13 0c0-4-6.5-11.5-6.5-11.5z" />
    </>
  ),
  boja: (
    <>
      <rect x="7" y="8" width="8" height="13" rx="1.5" />
      <path d="M9.5 8V4.5h3V8" />
      <path d="M18 5h.01M20.5 8h.01M18 11h.01" />
    </>
  ),
  "klinovi-i-cahure": (
    <>
      <circle cx="7.5" cy="12" r="4.5" />
      <circle cx="7.5" cy="12" r="1.75" />
      <rect x="13" y="9" width="8.5" height="6" rx="1.5" />
    </>
  ),
  sasije: (
    <>
      <path d="M3 14.5h18" />
      <path d="M6 14.5l2-6h8l2 6" />
      <circle cx="8" cy="18" r="2.5" />
      <circle cx="16" cy="18" r="2.5" />
    </>
  ),
  gusjenice: (
    <>
      <rect x="2" y="7.5" width="20" height="9" rx="4.5" />
      <circle cx="7" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="17" cy="12" r="1.5" />
    </>
  ),
  "zubi-zlice": (
    <>
      <path d="M3 7h18v3H3z" />
      <path d="M5.5 10l2 5 2-5M11 10l2 5 2-5M16.5 10l2 5 2-5" />
    </>
  ),
  zlice: (
    <>
      <path d="M5 3.5v8.5a7 7 0 0 0 7 7h7" />
      <path d="M19 15.5v7M15.5 17.5v3.5M12 16.5v3" />
    </>
  ),
  cekici: (
    <>
      <rect x="8" y="2.5" width="8" height="9" rx="1.5" />
      <path d="M12 11.5v5.5" />
      <path d="M9.75 17h4.5L12 21.5z" />
    </>
  ),
};

export function PartIcon({ id, className }: { id: PartIconId; className?: string }) {
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
      {paths[id]}
    </svg>
  );
}
