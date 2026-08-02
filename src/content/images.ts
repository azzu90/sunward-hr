import type { ImageEntry } from "./types";

/**
 * Bild-Manifest — die einzige Liste aller Bilder der Seite.
 *
 * Es gibt aktuell KEINE Bilddateien im Projekt. Jeder Eintrag hier ist
 * zunächst ein Platzhalter. Der Alt-Text wird trotzdem JETZT final
 * geschrieben: dadurch ist der QC-Punkt „alle Bilder haben Alt-Texte"
 * erfüllt, bevor das erste Foto existiert, und beim Tausch ändert sich
 * am Markup nichts.
 *
 * Wenn Zoran ein Foto liefert:
 *   1. `npm run report` nennt Pfad und gewünschtes Motiv
 *   2. Datei unter public/slike/<id>.<jpg|webp|avif|png|svg> ablegen
 *   3. `npm run build`
 * Kein Code wird angefasst — src/lib/assets.ts findet die Datei selbst.
 *
 * `id` ist zugleich der Dateipfad. ASCII, keine Diakritika.
 */
export const images = {
  /* ── Marke / Chrome ─────────────────────────────────────────────────── */
  "brand/sunward-logo": {
    id: "brand/sunward-logo",
    alt: "Sunward logotip",
    hint: "Službeni Sunward logotip, po mogućnosti SVG s prozirnom pozadinom",
    aspect: "4/1",
    source: "sunward.eu",
  },
  "brand/drvosped-logo": {
    id: "brand/drvosped-logo",
    alt: "Logotip Hidraulika Drvošped d.o.o.",
    hint: "HD logotip Hidraulika Drvošped (navy/bijelo s crveno-žutim prugama)",
    aspect: "3/2",
    source: "drvosped",
  },

  /* ── Startseite ─────────────────────────────────────────────────────── */
  "pocetna/hero": {
    id: "pocetna/hero",
    alt: "Sunward bager na gradilištu u Hrvatskoj",
    hint: "Široka fotografija Sunward bagera u radu — gradilište, dnevno svjetlo, mjesta za tekst s lijeve strane",
    aspect: "21/9",
    source: "zoran",
    priority: true,
    sizes: "100vw",
  },

  /* ── Kategorien ─────────────────────────────────────────────────────── */
  "kategorije/bageri/hero": {
    id: "kategorije/bageri/hero",
    alt: "Sunward bageri — pregled ponude za Hrvatsku",
    hint: "Više Sunward bagera zajedno ili jedan reprezentativan bager iz poluprofila",
    aspect: "21/9",
    source: "sunward.eu",
    sizes: "100vw",
  },
  "kategorije/utovarivaci/hero": {
    id: "kategorije/utovarivaci/hero",
    alt: "Sunward utovarivači na radilištu",
    hint: "Sunward utovarivač u radu, po mogućnosti s punom lopatom",
    aspect: "21/9",
    source: "sunward.eu",
    sizes: "100vw",
  },
  "kategorije/teleskopski-utovarivaci/hero": {
    id: "kategorije/teleskopski-utovarivaci/hero",
    alt: "Sunward teleskopski utovarivač",
    hint: "Teleskopski utovarivač s izvučenom strelom",
    aspect: "21/9",
    source: "sunward.eu",
    sizes: "100vw",
  },
  "kategorije/podizne-platforme/hero": {
    id: "kategorije/podizne-platforme/hero",
    alt: "Sunward podizne platforme i košare",
    hint: "Podizna košara u podignutom položaju",
    aspect: "21/9",
    source: "sunward.eu",
    sizes: "100vw",
  },
  "kategorije/dodatna-oprema/hero": {
    id: "kategorije/dodatna-oprema/hero",
    alt: "Dodatna oprema i priključci za bagere",
    hint: "Više priključaka složenih zajedno ili bager s montiranim čekićem",
    aspect: "21/9",
    source: "zoran",
    sizes: "100vw",
  },

  /* ── Modelle (Seed für Phase 1) ─────────────────────────────────────── */
  "proizvodi/swe08f/glavna": {
    id: "proizvodi/swe08f/glavna",
    alt: "Sunward SWE08F mini bager 1.010 kg — pogled s prednje lijeve strane",
    hint: "SWE08F, cijeli stroj, prednji lijevi kut, neutralna pozadina ili gradilište",
    aspect: "4/3",
    source: "zoran",
    priority: true,
    altTemplate: "Sunward SWE08F mini bager — fotografija {n}",
    sizes: "(max-width: 768px) 100vw, 640px",
  },
  "proizvodi/swe335f/glavna": {
    id: "proizvodi/swe335f/glavna",
    alt: "Sunward SWE335F veliki bager 33 tone na gradilištu",
    hint: "SWE335F, cijeli stroj iz poluprofila, po mogućnosti u radu",
    aspect: "4/3",
    source: "sunward.eu",
    altTemplate: "Sunward SWE335F veliki bager — fotografija {n}",
    sizes: "(max-width: 768px) 100vw, 640px",
  },
  "proizvodi/swl2830/glavna": {
    id: "proizvodi/swl2830/glavna",
    alt: "Sunward SWL2830 utovarivač s lopatom",
    hint: "SWL2830 utovarivač, prednji lijevi kut, lopata spuštena",
    aspect: "4/3",
    source: "sunward.eu",
    altTemplate: "Sunward SWL2830 utovarivač — fotografija {n}",
    sizes: "(max-width: 768px) 100vw, 640px",
  },

  /* ── Dodatna oprema (Seed für Phase 1) ──────────────────────────────── */
  "oprema/hidraulicki-cekic/glavna": {
    id: "oprema/hidraulicki-cekic/glavna",
    alt: "Hidraulički čekić za bager — priključak za rušenje i stijenu",
    hint: "Hidraulički čekić montiran na bager ili samostalno na paleti",
    aspect: "4/3",
    source: "zoran",
    sizes: "(max-width: 768px) 100vw, 640px",
  },
} as const satisfies Record<string, ImageEntry>;
