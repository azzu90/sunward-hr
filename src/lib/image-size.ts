import { readFileSync } from "node:fs";

/**
 * Echte Pixelmasse einer Bilddatei, gelesen aus dem Dateikopf.
 *
 * Warum überhaupt: das Manifest (src/content/images.ts) nennt pro Slot ein
 * gewünschtes Seitenverhältnis. Solange nur ein Platzhalter steht, ist das
 * die einzige verfügbare Information und reserviert die Fläche. Sobald eine
 * Datei existiert, ist das Manifest aber nur noch eine Absichtserklärung —
 * die Datei selbst ist die Tatsache. Genau diese Diskrepanz (Manifest 4/3,
 * Renders 1000×1000) hat oben und unten je ~12,5 % abgeschnitten.
 *
 * Absichtlich ohne Abhängigkeit: `sharp` liegt zwar unter node_modules,
 * aber nur als optionale Transitivabhängigkeit von Next — nichts, worauf
 * eigener Code bauen sollte. Für die Kopfdaten reicht der Rohpuffer.
 *
 * Läuft ausschliesslich zur Build-Zeit (die Seite ist statisch), deshalb
 * ist synchrones Lesen hier richtig und der Cache pro Prozess ausreichend.
 *
 * Unbekanntes Format → `null`. Der Aufrufer fällt dann auf den
 * Manifest-Wert zurück; nichts bricht, es bleibt beim Status quo.
 */

export interface IntrinsicSize {
  readonly width: number;
  readonly height: number;
}

const cache = new Map<string, IntrinsicSize | null>();

export function intrinsicSize(absolutePath: string): IntrinsicSize | null {
  const hit = cache.get(absolutePath);
  if (hit !== undefined) return hit;

  let size: IntrinsicSize | null = null;
  try {
    size = parse(readFileSync(absolutePath));
  } catch {
    size = null; // Datei verschwunden oder unlesbar — wie unbekanntes Format
  }

  cache.set(absolutePath, size);
  return size;
}

/**
 * Seitenverhältnis als gekürzter CSS-Bruch, z.B. 1000×1000 → "1/1".
 * Gekürzt, damit im Markup ein lesbarer Wert steht und nicht "1000 / 1000".
 */
export function aspectFromSize({ width, height }: IntrinsicSize): string {
  const d = gcd(width, height);
  return `${width / d}/${height / d}`;
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function parse(buf: Buffer): IntrinsicSize | null {
  return png(buf) ?? gif(buf) ?? webp(buf) ?? jpeg(buf) ?? isobmff(buf) ?? svg(buf);
}

/* ── PNG ───────────────────────────────────────────────────────────────
   Signatur, dann sofort der IHDR-Chunk: Breite und Höhe als uint32 BE. */
function png(buf: Buffer): IntrinsicSize | null {
  if (buf.length < 24) return null;
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  if (buf.toString("latin1", 12, 16) !== "IHDR") return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

/* ── GIF ───────────────────────────────────────────────────────────────
   Logical Screen Descriptor direkt nach der Signatur, uint16 LE. */
function gif(buf: Buffer): IntrinsicSize | null {
  if (buf.length < 10) return null;
  if (buf.toString("latin1", 0, 4) !== "GIF8") return null;
  return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) };
}

/* ── WebP ──────────────────────────────────────────────────────────────
   Drei Varianten mit drei verschiedenen Kopfformaten. VP8X zuerst:
   liegt es vor, nennt es die Leinwandgrösse und gewinnt gegenüber dem
   Bildstrom dahinter. */
function webp(buf: Buffer): IntrinsicSize | null {
  if (buf.length < 30) return null;
  if (buf.toString("latin1", 0, 4) !== "RIFF") return null;
  if (buf.toString("latin1", 8, 12) !== "WEBP") return null;

  const chunk = buf.toString("latin1", 12, 16);

  if (chunk === "VP8X") {
    // 24-Bit-LE, jeweils "minus eins" gespeichert.
    const width = buf.readUIntLE(24, 3) + 1;
    const height = buf.readUIntLE(27, 3) + 1;
    return { width, height };
  }

  if (chunk === "VP8 ") {
    // Frame-Tag, dann Sync-Code 9d 01 2a, dann je 14 Bit LE.
    if (buf.readUIntLE(23, 3) !== 0x2a019d) return null;
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }

  if (chunk === "VP8L") {
    if (buf.readUInt8(20) !== 0x2f) return null;
    const bits = buf.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }

  return null;
}

/* ── JPEG ──────────────────────────────────────────────────────────────
   Segmente abklappern bis zum ersten Start-of-Frame. Auch progressive
   (SOFn ≠ SOF0) wird erfasst; SOF4/SOF8/SOF12 sind keine Frames. */
function jpeg(buf: Buffer): IntrinsicSize | null {
  if (buf.length < 4 || buf.readUInt16BE(0) !== 0xffd8) return null;

  // readUInt8 statt buf[i]: der Index-Zugriff ist unter
  // noUncheckedIndexedAccess `number | undefined`, und die Grenze prüft
  // die while-Bedingung ohnehin.
  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf.readUInt8(offset) !== 0xff) return null; // aus dem Takt geraten
    const marker = buf.readUInt8(offset + 1);

    // Füll-Bytes und markerlose Segmente ohne Längenfeld.
    if (marker === 0xff) {
      offset += 1;
      continue;
    }
    if (marker === 0xd8 || (marker >= 0xd0 && marker <= 0xd9)) {
      offset += 2;
      continue;
    }

    const isFrame =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    if (isFrame) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }

    offset += 2 + buf.readUInt16BE(offset + 2);
  }

  return null;
}

/* ── AVIF / HEIC ───────────────────────────────────────────────────────
   ISO-BMFF. Statt die volle Box-Hierarchie zu laufen, wird die erste
   `ispe`-Box gesucht (ImageSpatialExtents) — bei Einzelbildern ist das die
   des Hauptbilds. Nutzlast: 4 Byte Version/Flags, dann Breite und Höhe als
   uint32 BE. Kommt eine Datei mit Thumbnail-Track zuerst, wäre der Wert
   falsch; dann greift der Manifest-Wert als Korrektiv, weil das Ergebnis
   in `report`/im Markup sichtbar ist. */
function isobmff(buf: Buffer): IntrinsicSize | null {
  if (buf.length < 12) return null;
  if (buf.toString("latin1", 4, 8) !== "ftyp") return null;

  const at = buf.indexOf("ispe", 0, "latin1");
  if (at < 0 || at + 16 > buf.length) return null;

  const width = buf.readUInt32BE(at + 8);
  const height = buf.readUInt32BE(at + 12);
  return width > 0 && height > 0 ? { width, height } : null;
}

/* ── SVG ───────────────────────────────────────────────────────────────
   Kein Pixelmass, aber ein Seitenverhältnis: erst viewBox (verlässlich),
   sonst width/height, sofern beide unitlos oder in px stehen. */
function svg(buf: Buffer): IntrinsicSize | null {
  const head = buf.toString("utf8", 0, Math.min(buf.length, 4096));
  if (!head.includes("<svg")) return null;

  const viewBox = /viewBox\s*=\s*["']\s*[-\d.]+[,\s]+[-\d.]+[,\s]+([\d.]+)[,\s]+([\d.]+)/.exec(
    head,
  );
  if (viewBox) {
    const width = Number(viewBox[1]);
    const height = Number(viewBox[2]);
    if (width > 0 && height > 0) return { width, height };
  }

  const w = /\swidth\s*=\s*["']\s*([\d.]+)(?:px)?\s*["']/.exec(head);
  const h = /\sheight\s*=\s*["']\s*([\d.]+)(?:px)?\s*["']/.exec(head);
  if (w && h) {
    const width = Number(w[1]);
    const height = Number(h[1]);
    if (width > 0 && height > 0) return { width, height };
  }

  return null;
}
