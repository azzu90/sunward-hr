import { NextResponse } from "next/server";

import { sendContactMessage } from "@/lib/contact-mail";

/**
 * Kontaktformular-Endpunkt (TASK.md Phase 3).
 *
 * Bewusst ohne Validierungs-Bibliothek: vier Felder, drei Regeln — dafür
 * eine Dependency aufzunehmen wäre teurer als die zwanzig Zeilen hier.
 *
 * Antworten enthalten nie die Eingabe des Absenders zurück und nie den
 * konkreten Upstream-Fehler; das Formular braucht nur „ging" / „ging nicht"
 * und im zweiten Fall den Grund in grob genug, um den mailto-Fallback zu
 * zeigen.
 */

const LIMITS = { name: 120, contact: 160, product: 120, message: 5000 } as const;

function field(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;

  // Honeypot. Bots füllen jedes Feld aus, Menschen sehen es nicht. Antwort
  // ist absichtlich ein Erfolg — wer merkt, dass er gefiltert wurde,
  // probiert es anders wieder.
  if (typeof data.tvrtka === "string" && data.tvrtka.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = field(data.ime, LIMITS.name);
  const contact = field(data.kontakt, LIMITS.contact);
  const message = field(data.poruka, LIMITS.message);

  if (!name || !contact || !message) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const product = field(data.proizvod, LIMITS.product) ?? undefined;
  const result = await sendContactMessage({ name, contact, message, product });

  if (result.ok) return NextResponse.json({ ok: true });

  // „unconfigured" ist kein Serverfehler im eigentlichen Sinn, sondern ein
  // fehlender Key — 503 sagt dem Client korrekt „gerade nicht verfügbar".
  return NextResponse.json(
    { ok: false, reason: result.reason },
    { status: result.reason === "unconfigured" ? 503 : 502 },
  );
}
