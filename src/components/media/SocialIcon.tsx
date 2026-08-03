import type { ReactNode } from "react";

/**
 * Icons für die Social-Profile im Footer (`site.social`).
 *
 * Bewusst gefüllte Glyphen statt Strichicons wie bei `PartIcon`: das sind
 * Markenzeichen, keine technischen Piktogramme — ein Strichicon würde ein
 * "f" oder eine Notenkopf-Form nicht erkennbar wiedergeben.
 *
 * Unbekannte `id`s (z.B. ein später hinzugefügtes Profil) bekommen einen
 * neutralen Punkt statt eines fehlenden/leeren Icons — der Linktext bleibt
 * über `sr-only` in jedem Fall vorhanden, das Icon ist rein dekorativ.
 */

const paths: Record<string, ReactNode> = {
  facebook: (
    <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.3 1.3-1.3h1.4V5.1C15.8 5 14.9 5 13.9 5c-2.1 0-3.6 1.3-3.6 3.7V11H8v2.8h2.3V21z" />
  ),
  tiktok: (
    <path d="M16.5 3c.4 2 1.9 3.6 3.9 3.9v2.7c-1.5 0-2.9-.4-4-1.2v6.8c0 3.1-2.5 5.6-5.6 5.6S5.2 17.3 5.2 14.2s2.5-5.6 5.6-5.6c.4 0 .8 0 1.2.1v2.8a2.9 2.9 0 1 0 2 2.7V3z" />
  ),
};

const fallback = <circle cx="12" cy="12" r="4" />;

export function SocialIcon({ id, className }: { id: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className ?? "size-4"}
    >
      {paths[id] ?? fallback}
    </svg>
  );
}
