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
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="12" r="6.5" />
      <rect x="10.6" y="1.8" width="2.8" height="3.6" rx="0.9" />
      <rect x="10.6" y="1.8" width="2.8" height="3.6" rx="0.9" transform="rotate(60 12 12)" />
      <rect x="10.6" y="1.8" width="2.8" height="3.6" rx="0.9" transform="rotate(120 12 12)" />
      <rect x="10.6" y="1.8" width="2.8" height="3.6" rx="0.9" transform="rotate(180 12 12)" />
      <rect x="10.6" y="1.8" width="2.8" height="3.6" rx="0.9" transform="rotate(240 12 12)" />
      <rect x="10.6" y="1.8" width="2.8" height="3.6" rx="0.9" transform="rotate(300 12 12)" />
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
      <ellipse cx="5.5" cy="12" rx="2" ry="1.6" />
      <ellipse cx="9" cy="12" rx="2" ry="1.6" />
      <ellipse cx="12.5" cy="12" rx="2" ry="1.6" />
      <ellipse cx="16" cy="12" rx="2" ry="1.6" />
      <ellipse cx="19.5" cy="12" rx="2" ry="1.6" />
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
      <path d="M5 6h11l2.5 3.5-3.5 9a2 2 0 0 1-2 1.5h-2a2 2 0 0 1-2-1.5z" />
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
