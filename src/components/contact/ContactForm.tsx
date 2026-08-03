"use client";

import { useState } from "react";

import { ui } from "@/content/ui";

/**
 * Kontaktformular (ANALYSIS.md §13).
 *
 * Kein Länder-Dropdown wie bei sunward.eu — für einen Händler, der nur
 * Kroatien beliefert, ist das eine Hürde ohne Nutzen.
 *
 * Bewusst ohne Formular-Bibliothek: vier Felder mit nativer
 * Browser-Validierung und ein useState reichen. Kontaktdaten kommen als
 * Props herein, damit nicht das ganze site.ts im Client-Bundle landet.
 */

export interface ContactFormProps {
  /** Kategorien für das optionale Produktinteresse-Feld. */
  readonly options: readonly { readonly value: string; readonly label: string }[];
  /** Direktkontakt, falls der Versand scheitert oder nicht konfiguriert ist. */
  readonly fallback: {
    readonly email: string;
    readonly phoneDisplay: string;
    readonly phoneHref: string;
  };
}

type Status = "idle" | "sending" | "ok" | "error";

const fieldClass =
  "w-full border border-line-strong bg-surface px-3 py-2 text-sm text-ink " +
  "focus:border-brand focus:outline-2 focus:outline-offset-2 focus:outline-brand";
const labelClass = "mb-1 block text-sm font-bold text-ink";

export function ContactForm({ options, fallback }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const data = new FormData(event.currentTarget);
    const payload = {
      ime: data.get("ime"),
      kontakt: data.get("kontakt"),
      proizvod: data.get("proizvod"),
      poruka: data.get("poruka"),
      tvrtka: data.get("tvrtka"),
    };

    try {
      const response = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: unknown = await response.json().catch(() => null);
      const ok =
        response.ok && typeof result === "object" && result !== null && "ok" in result
          ? Boolean((result as { ok: unknown }).ok)
          : false;
      setStatus(ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="border-t-4 border-brand bg-surface-alt p-6" role="status">
        <h3 className="text-lg font-bold text-ink">{ui.contact.successHeading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-body">{ui.contact.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p className="text-xs text-ink-muted">{ui.contact.requiredNote}</p>

      <div>
        <label htmlFor="ime" className={labelClass}>
          {ui.contact.nameLabel}
          <span className="text-brand-text">{ui.contact.requiredMarker}</span>
        </label>
        <input
          id="ime"
          name="ime"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          placeholder={ui.contact.namePlaceholder}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="kontakt" className={labelClass}>
          {ui.contact.contactLabel}
          <span className="text-brand-text">{ui.contact.requiredMarker}</span>
        </label>
        <input
          id="kontakt"
          name="kontakt"
          type="text"
          required
          maxLength={160}
          autoComplete="tel"
          placeholder={ui.contact.contactPlaceholder}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="proizvod" className={labelClass}>
          {ui.contact.productLabel}
        </label>
        <select id="proizvod" name="proizvod" defaultValue="" className={fieldClass}>
          <option value="">{ui.contact.productAny}</option>
          {options.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="poruka" className={labelClass}>
          {ui.contact.messageLabel}
          <span className="text-brand-text">{ui.contact.requiredMarker}</span>
        </label>
        <textarea
          id="poruka"
          name="poruka"
          required
          rows={6}
          maxLength={5000}
          placeholder={ui.contact.messagePlaceholder}
          className={fieldClass}
        />
      </div>

      {/* Honeypot: unsichtbar, nicht fokussierbar, für Screenreader
          ausgeblendet. Wird er ausgefüllt, verwirft die Route die Anfrage. */}
      <div hidden aria-hidden="true">
        <label htmlFor="tvrtka">{ui.contact.honeypotLabel}</label>
        <input id="tvrtka" name="tvrtka" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <div className="border-l-4 border-notice bg-notice-soft p-4">
            <p className="text-sm font-bold text-ink">{ui.contact.errorHeading}</p>
            <p className="mt-1 text-sm text-ink-body">{ui.contact.errorBody}</p>
            <p className="mt-2 flex flex-wrap gap-x-4 text-sm font-bold">
              <a href={`mailto:${fallback.email}`} className="text-brand-text underline">
                {fallback.email}
              </a>
              <a href={fallback.phoneHref} className="text-brand-text underline">
                {fallback.phoneDisplay}
              </a>
            </p>
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-brand-strong px-6 py-3 text-base font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text disabled:opacity-60"
        >
          {status === "sending" ? ui.contact.sending : ui.contact.submit}
        </button>
      </div>

      <p className="text-xs leading-relaxed text-ink-muted">{ui.contact.privacyNote}</p>
    </form>
  );
}
