"use client";

import { ui } from "@/content/ui";

/**
 * Globale Fehlergrenze.
 *
 * Diese Route rendert ein eigenes <html>, weil sie das Root-Layout
 * ersetzt. Ohne diese Datei liefert Next eine eingebaute Fehlerseite
 * OHNE lang-Attribut aus — der einzige Punkt, an dem `lang="hr"` auf der
 * ganzen Seite gefehlt hat.
 *
 * Die Farben stehen als rohe Hex-Werte inline: diese Route rendert ohne
 * das Root-Layout und damit ohne globals.css — Tokens gäbe es hier nicht.
 */
export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <html lang="hr">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          margin: 0,
          padding: "4rem 1.5rem",
          color: "#2c2c2c",
        }}
      >
        <h1 style={{ fontSize: "1.75rem", color: "#14212b" }}>{ui.error.genericTitle}</h1>
        <p style={{ marginTop: "0.75rem" }}>{ui.error.genericBody}</p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: "1.5rem",
            background: "#00807b",
            color: "#ffffff",
            border: 0,
            borderRadius: "4px",
            padding: "0.75rem 1.25rem",
            fontWeight: 700,
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          {ui.error.retry}
        </button>
      </body>
    </html>
  );
}
