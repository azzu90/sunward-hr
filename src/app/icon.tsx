import { ImageResponse } from "next/og";

/**
 * Favicon aus Text und Markenfarbe generiert — es gibt noch keine
 * Bild-Assets. Sobald ein echtes Icon vorliegt: app/icon.png ablegen und
 * diese Datei löschen.
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
        background: "#00a19a",
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
