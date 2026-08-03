#!/usr/bin/env python3
"""
Entfernt das von sunward.eu in die Produktfotos eingebrannte englische
„NEW"-Banner (oranges Band, oben rechts).

Warum überhaupt: die Fotos kommen per `npm run fetch-images` direkt von
sunward.eu und tragen bei 19 der 51 Modelle dieses Banner. Auf einer
ausschliesslich kroatischen Seite ist englischer Text im Bild falsch
(CLAUDE.md §1), der „neu"-Status ist der von sunward.eu und nicht Zorans,
und optisch kollidiert das Banner mit dem eigenen Orange-System
(NOVO-Badge, Električni-Badge). Sichtbar wurde es erst, als die Karten von
object-cover auf object-contain umgestellt wurden — vorher schnitt der
4/3-Ausschnitt es zufällig weg.

Vorgehen: das Banner wird NICHT weggeschnitten, sondern transparent
gesetzt. Ein Beschnitt würde das 1:1-Seitenverhältnis der Dateien
verändern, und darauf verlassen sich Manifest-Ratio und object-contain bei
allen 51 Modellen gleichermassen.

Erkennung ist absichtlich streng: nur ein massives oranges Band, das oben
UND rechts am Rand verankert ist, und nur so weit nach unten, wie das Band
durchgehend orange bleibt. Eine lockerere Erkennung hatte bei SWE 20F-1
zusätzlich die orange Rundumleuchte auf der Kabine erfasst — dort hätte ein
pauschales Rechteck in die Maschine hineingeschnitten.

Die Elektro-Kennzeichen der drei Elektromodelle (SWE 10FE, SWE 20FE,
SWE 240FE) bleiben bewusst erhalten — der Auftrag betraf nur das
NEW-Banner. Achtung, offener Punkt: der orange Blitzkreis ist
sprachneutral, das teal Blatt daneben trägt aber den englischen Text
„ZERO EMISSION". Formal dasselbe Problem wie beim NEW-Banner, nur ist
darüber noch nicht entschieden.

Idempotent — ein zweiter Lauf findet nichts mehr. Reihenfolge nach einem
Neu-Download: erst `npm run fetch-images`, dann dieses Skript.

Braucht Pillow (`pip3 install Pillow`). Bewusst Python und nicht Node:
für eine einmalige Bildoperation wäre `sharp` als native Dependency im
package.json teurer als dieses Skript.

    npm run strip-badges
"""

import pathlib
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow fehlt. Installieren mit:  pip3 install Pillow")

ROOT = pathlib.Path(__file__).resolve().parent.parent / "public" / "slike" / "proizvodi"

# Mindestbreite an orangen Pixeln in einer Zeile, damit sie als Bandzeile gilt.
MIN_RUN = 200
# Nur in der rechten Bildhälfte suchen, und höchstens im oberen Drittel.
X_FROM = 0.55
Y_MAX = 0.30


def is_badge_orange(pixel) -> bool:
    r, g, b, a = pixel
    return a > 30 and r > 200 and 110 < g < 195 and b < 95


def banner_rect(im: Image.Image):
    """(x0, y0, x1, y1) des NEW-Bands oder None."""
    w, h = im.size
    px = im.load()

    def run(y: int) -> int:
        return sum(1 for x in range(int(w * X_FROM), w) if is_badge_orange(px[x, y]))

    if run(0) < MIN_RUN:
        return None  # oben rechts nicht verankert → kein Banner

    y1 = 0
    while y1 + 1 < int(h * Y_MAX) and run(y1 + 1) >= MIN_RUN:
        y1 += 1

    xs = [x for x in range(int(w * X_FROM), w) if is_badge_orange(px[x, 0])]
    return (min(xs), 0, w - 1, y1)


def main() -> None:
    if not ROOT.is_dir():
        sys.exit(f"Nicht gefunden: {ROOT}\nZuerst `npm run fetch-images` laufen lassen.")

    stripped, untouched = [], 0
    for folder in sorted(ROOT.iterdir()):
        f = folder / "glavna.png"
        if not f.exists():
            continue
        im = Image.open(f).convert("RGBA")
        rect = banner_rect(im)
        if rect is None:
            untouched += 1
            continue
        x0, y0, x1, y1 = rect
        # Bereich transparent setzen — Dateigrösse und Seitenverhältnis bleiben.
        im.paste((0, 0, 0, 0), (x0, y0, x1 + 1, y1 + 1))
        im.save(f)
        stripped.append((folder.name, f"{x1 - x0 + 1}x{y1 - y0 + 1}"))

    print("# NEW-Banner entfernt\n")
    for name, size in stripped:
        print(f"  ✓ {name:<16} {size}")
    print(f"\nBearbeitet: {len(stripped)}   ohne Banner: {untouched}")


if __name__ == "__main__":
    main()
