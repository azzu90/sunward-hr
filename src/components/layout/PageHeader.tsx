import type { ReactNode } from "react";

/**
 * Seitenkopf aller Nicht-Startseiten — eine Quelle für H1-Typografie.
 *
 * Vorher gab es dafür drei Muster, aus drei Phasen: die Phase-3/4-Seiten
 * (Servis, Financiranje, die drei Rechtsseiten) mit `text-3xl sm:text-4xl`,
 * die Phase-2-Seiten (Proizvodi, Dodatna oprema, Kontakt, Kategorieseiten)
 * mit festem `text-3xl` ohne responsiven Sprung, und die Detailseiten mit
 * Eyebrow davor. Nebeneinander gestellt waren das 30 px gegen 36 px auf
 * derselben Website. Übernommen wurde das Phase-3/4-Muster.
 *
 * Der Abstand NACH dem Kopf bleibt bewusst beim Aufrufer (`className`):
 * Seiten, die mit einer `<Section>` weitergehen, brauchen dort fast nichts,
 * weil `Section` eigenes `py-10 sm:py-14` mitbringt — Seiten mit direktem
 * Inhalt geben ihrem Inhalt stattdessen ein eigenes `mt-*`. Diese
 * Entscheidung gehört zum Seitenlayout, nicht zur Typografie, und ist der
 * einzige Grund, warum die Klassen hier nicht vollständig gekapselt sind.
 */
export function PageHeader({
  title,
  eyebrow,
  lede,
  className,
  children,
}: {
  title: string;
  /** Kleine Auszeichnung über dem Titel, z.B. die Kategorie einer Detailseite. */
  eyebrow?: string;
  lede?: string;
  className?: string;
  /** Zusätzliches direkt unter dem Kopf, z.B. das „Električni"-Badge. */
  children?: ReactNode;
}) {
  return (
    <div className={className}>
      {/* Der Abstand zum Titel sitzt hier als mb-1 und NICHT als bedingtes
          mt-1 an der H1: eine Klassenliste per Template-Literal
          zusammenzusetzen hat prettier-plugin-tailwindcss beim Formatieren
          das führende Leerzeichen entfernt und daraus `sm:text-4xlmt-1`
          gemacht — eine kaputte Klasse, die weder Typecheck noch Lint sieht.
          Konstante Klassenlisten sind hier die robustere Variante. */}
      {eyebrow ? (
        <p className="mb-1 text-xs font-bold tracking-widest text-brand-text uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-3xl text-3xl leading-tight font-black text-ink sm:text-4xl">{title}</h1>
      {lede ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-body">{lede}</p>
      ) : null}
      {children}
    </div>
  );
}
