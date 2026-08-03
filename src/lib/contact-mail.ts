import "server-only";

import { site } from "@/content/site";

/**
 * Die einzige Stelle, an der eine Kontaktanfrage das Haus verlässt.
 *
 * Transport ist Web3Forms und nicht Resend (Abweichung von PRD §14):
 * Resend verlangt eine verifizierte Absenderdomain, und `sunward.hr` ist
 * noch nicht live — bis zum Domain-Cutover käme keine einzige Mail bei
 * Zoran an. Web3Forms braucht nur einen Access Key und eine einmalig
 * bestätigte Empfängeradresse.
 *
 * Der Key liegt bewusst NICHT unter `NEXT_PUBLIC_` wie in der alten
 * .env.example vorgesehen: der Aufruf geht serverseitig raus, damit steht
 * der Key nicht im ausgelieferten HTML und ist nicht von fremden Seiten
 * missbrauchbar.
 *
 * Ein späterer Wechsel auf Resend betrifft ausschliesslich diese Datei —
 * Route und Formular kennen nur `sendContactMessage()`.
 */

const ENDPOINT = "https://api.web3forms.com/submit";
const TIMEOUT_MS = 10_000;

export interface ContactMessage {
  readonly name: string;
  readonly contact: string;
  readonly message: string;
  /** Label der gewählten Kategorie, nicht der Slug — Zoran liest die Mail. */
  readonly product?: string;
}

export type SendResult = { ok: true } | { ok: false; reason: "unconfigured" | "upstream" };

/** Sollempfänger laut PRD §3 — dokumentiert hier, konfiguriert bei Web3Forms. */
export const recipient = site.emails.find((e) => e.primary)?.address;

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMessage(msg: ContactMessage): Promise<SendResult> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  // Ohne Key gar nicht erst losfliegen. Das Formular zeigt daraufhin den
  // mailto-Fallback — besser als ein Spinner, der ins Leere läuft.
  if (!accessKey) return { ok: false, reason: "unconfigured" };

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Upit sa sunward.hr — ${msg.name}`,
        from_name: site.brandName,
        // Nur setzen, wenn es wirklich eine Adresse ist: im Feld „Telefon
        // oder e-mail" steht oft eine Nummer, und ein kaputter Reply-To
        // würde die ganze Mail scheitern lassen.
        ...(looksLikeEmail(msg.contact) ? { replyto: msg.contact } : {}),
        Ime: msg.name,
        Kontakt: msg.contact,
        ...(msg.product ? { Stroj: msg.product } : {}),
        Poruka: msg.message,
      }),
    });

    if (!response.ok) return { ok: false, reason: "upstream" };
    return { ok: true };
  } catch {
    // Timeout oder Netzwerkfehler. Der konkrete Grund hilft dem Besucher
    // nicht weiter und gehört nicht in die HTTP-Antwort.
    return { ok: false, reason: "upstream" };
  }
}
