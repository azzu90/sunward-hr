import type { ReactNode } from "react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-site px-4 sm:px-6 ${className ?? ""}`}>{children}</div>;
}

/** Sektion mit wechselndem Hintergrund (ANALYSIS.md §6). */
export function Section({
  children,
  alt,
  className,
  labelledBy,
}: {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`${alt ? "bg-surface-alt" : "bg-surface"} py-10 sm:py-14 ${className ?? ""}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
