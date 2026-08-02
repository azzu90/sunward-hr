/**
 * Kanonische Origin der Seite.
 *
 * Reihenfolge bewusst so: die explizite Variable gewinnt, danach die
 * STABILE Produktions-URL von Vercel (nicht die pro Deploy wechselnde),
 * dann die Deploy-URL, zuletzt localhost.
 *
 * Solange NEXT_PUBLIC_SITE_URL auf Vercel nicht gesetzt ist, zeigt alles
 * auf die *.vercel.app-Domain — sunward.hr wird dadurch nirgends als
 * Canonical behauptet, bevor die Domain wirklich hier liegt.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const deploy = process.env.VERCEL_URL;
  if (deploy) return `https://${deploy}`;

  return "http://localhost:3000";
}

/** Absolute URL aus einem internen Pfad. */
export function abs(path: string): string {
  return new URL(path, `${siteUrl()}/`).toString();
}

/** Nur auf der echten Produktionsumgebung wahr — steuert robots.txt. */
export const isProduction = process.env.VERCEL_ENV === "production";
