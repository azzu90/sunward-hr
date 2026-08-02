import { ImageResponse } from "next/og";

/**
 * Favicon aus Text und Markenfarbe generiert — es gibt noch keine
 * Bild-Assets. Sobald ein echtes Icon vorliegt: app/icon.png ablegen und
 * diese Datei löschen.
 *
 * Roher Hex-Wert statt Token, weil ImageResponse ausserhalb der
 * CSS-Pipeline rendert. `--color-brand-strong` statt `--color-brand`:
 * Weiss darauf erreicht 4,80:1 statt nur 4,09:1.
 */
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#00807b",
        color: "#ffffff",
        fontSize: 22,
        fontWeight: 700,
      }}
    >
      {"S"}
    </div>,
    size,
  );
}
