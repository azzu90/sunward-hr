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
        background: "#14212b",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", marginBottom: 28 }}>
        <span style={{ fontSize: 52, fontWeight: 900, color: "#ffffff", letterSpacing: -1 }}>
          {"SUNWARD"}
        </span>
        <span style={{ fontSize: 52, fontWeight: 900, color: "#00a19a" }}>{"."}</span>
        <span style={{ fontSize: 28, fontWeight: 400, color: "#b4b9bd", marginLeft: 12 }}>
          {"hr"}
        </span>
      </div>

      <div style={{ fontSize: 60, fontWeight: 700, color: "#ffffff", lineHeight: 1.15 }}>
        {site.role}
      </div>

      <div style={{ display: "flex", marginTop: 36, gap: 28, fontSize: 25, color: "#b4b9bd" }}>
        <span>{`${site.employeeCount} zaposlenika`}</span>
        <span style={{ color: "#00a19a" }}>·</span>
        <span>{`Garancija ${site.warranty.years} god. / 5.000 h`}</span>
        <span style={{ color: "#00a19a" }}>·</span>
        <span>{`Servis ${site.service.responseHours} h`}</span>
      </div>
    </div>,
    size,
  );
}
