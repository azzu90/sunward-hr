import { ImageResponse } from "next/og";

import { site } from "@/content/site";

/**
 * OG-Bild aus Text und Design-Tokens generiert.
 *
 * Dadurch funktioniert das Teilen in sozialen Netzen und in WhatsApp ab
 * Tag eins, obwohl es im Projekt kein einziges Bild-Asset gibt.
 *
 * Kroatische Diakritika (č ć š ž đ) werden von der Default-Schrift der
 * ImageResponse gezeichnet — Prüfpunkt in der Verifikation.
 *
 * Hier stehen ausnahmsweise rohe Hex-Werte statt Tokens: ImageResponse
 * rendert ausserhalb der CSS-Pipeline, `var(--color-…)` existiert dort
 * nicht. Die Werte sind Kopien aus globals.css und müssen bei einer
 * Palettenänderung mitgezogen werden.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.brandName} — ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#00655f",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", marginBottom: 28 }}>
        <span style={{ fontSize: 52, fontWeight: 900, color: "#ffffff", letterSpacing: -1 }}>
          {"SUNWARD"}
        </span>
        <span style={{ fontSize: 52, fontWeight: 900, color: "#f39a2e" }}>{"."}</span>
        <span style={{ fontSize: 28, fontWeight: 400, color: "#cddcda", marginLeft: 12 }}>
          {"hr"}
        </span>
      </div>

      <div style={{ fontSize: 60, fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>
        {site.role}
      </div>

      <div style={{ display: "flex", marginTop: 36, gap: 28, fontSize: 25, color: "#cddcda" }}>
        <span>{`${site.employeeCount} zaposlenika`}</span>
        <span style={{ color: "#f39a2e" }}>·</span>
        <span>{`Garancija ${site.warranty.years} god. / 5.000 h`}</span>
        <span style={{ color: "#f39a2e" }}>·</span>
        <span>{`Servis ${site.service.responseHours} h`}</span>
      </div>
    </div>,
    size,
  );
}
