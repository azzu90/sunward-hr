#!/usr/bin/env python3
"""
Entfernt die von sunward.eu in die Produktfotos eingebrannten Badges:
das englische „NEW"-Banner (oranges Band, oben rechts) und die
Elektro-Kennzeichen der drei Elektromodelle (oranger Blitzkreis +
teal „ZERO EMISSION"-Blatt).

Warum überhaupt: die Fotos kommen per `npm run fetch-images` direkt von
sunward.eu und tragen bei 19 der 51 Modelle dieses Banner. Auf einer
ausschliesslich kroatischen Seite ist englischer Text im Bild falsch
(CLAUDE.md §1), der „neu"-Status ist der von sunward.eu und nicht Zorans,
und optisch kollidiert das Banner mit dem eigenen Orange-System
(NOVO-Badge, Električni-Badge). Sichtbar wurde es erst, als die Karten von
object-cover auf object-contain umgestellt wurden — vorher schnitt der
4/3-Ausschnitt es zufällig weg.

Vorgehen: die Badges werden NICHT weggeschnitten, sondern transparent
gesetzt. Ein Beschnitt würde das 1:1-Seitenverhältnis der Dateien
verändern, und darauf verlassen sich Manifest-Ratio und object-contain bei
allen Modellen gleichermassen.

Erkennung des NEW-Banners ist absichtlich streng: nur ein massives oranges
Band, das oben UND rechts am Rand verankert ist, und nur so weit nach
unten, wie das Band durchgehend orange bleibt. Eine lockerere Erkennung
hatte bei SWE 20F-1 zusätzlich die orange Rundumleuchte auf der Kabine
erfasst — dort hätte ein pauschales Rechteck in die Maschine
hineingeschnitten.

Die Elektro-Kennzeichen (SWE 10FE, SWE 20FE, SWE 240FE) waren zunächst
bewusst stehen geblieben, weil sie nirgends prominent waren. Mit dem
Wechsel des Hero-Motivs auf SWE 240FE wäre „ZERO EMISSION" die sichtbarste
Stelle der ganzen Seite geworden — jetzt entschieden und entfernt, aus
denselben Gründen wie beim NEW-Banner: englischer Text im Bild auf einer
rein kroatischen Seite, und die Seite kennzeichnet Elektromodelle ohnehin
selbst über `ui.product.electric` („Električni"). Der Blitzkreis ist zwar
sprachneutral, geht aber mit weg: im Hero steht er als unerklärter oranger
Kreis direkt neben dem orangen CTA-Button und kollidiert mit demselben
Orange-System wie das NEW-Banner.

Erkennung der Elektro-Badges läuft NICHT über Farbe — das teal des Blattes
liegt zu nah an der Maschinenlackierung. Stattdessen über
Zusammenhangskomponenten im weissen Bereich oben rechts: was dort als
Insel liegt, ohne den ROI-Rand zu berühren (über den die Maschine
hereinragt), ist ein Badge. Gemessener Abstand Badge↔Maschine ist in allen
drei Bildern ≥8px, der 2px-Rand gegen Antialiasing-Ränder ist damit sicher.
Ein pauschales Rechteck wäre es NICHT: bei SWE 10FE beginnt die Maschine
bei y=480, das Blatt reicht bis y=499 — die Bounding-Box hätte in den
Ausleger geschnitten. Gegenprobe über alle Modelle: exakt die drei
Elektromodelle schlagen an, kein Fehlauslöser bei den übrigen 48.

Idempotent — ein zweiter Lauf findet nichts mehr. Reihenfolge nach einem
Neu-Download: erst `npm run fetch-images`, dann dieses Skript.

Braucht Pillow (`pip3 install Pillow`). Bewusst Python und nicht Node:
für eine einmalige Bildoperation wäre `sharp` als native Dependency im
package.json teurer als dieses Skript.

    npm run strip-badges
"""

import pathlib
import sys
from collections import deque

try:
    from PIL import Image, ImageChops, ImageFilter
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


# ── Elektro-Badges ───────────────────────────────────────────────────────
# Suchfenster: rechte 35 %, obere 60 %. Weit genug, dass beide Badges ganz
# hineinpassen, eng genug, dass die Maschine nur von unten/links hereinragt
# — worüber sie sich als „berührt den Rand" zu erkennen gibt.
E_X_FROM, E_Y_TO = 0.65, 0.60
# Rand gegen Antialiasing-Säume. 2px ist sicher, siehe Abstandsmessung oben.
E_PAD = 2
# Einzelne Pixel sind Kompressionsrauschen, keine Insel.
E_MIN_AREA = 5
# Entschieden wird pro BILD, nicht pro Insel: die beiden Badges bringen
# zusammen ~13.900 px mit. Bilder ohne Badges haben trotzdem vereinzelte
# Inseln oben rechts — abgelöste Antennenspitzen, Spiegel, Geländerstücke
# (SWSL 1623RT 23 px, SWSL 2023RT 133 px, SWTL 5238 76 px). Eine
# Flächenschwelle pro Insel würde diese entweder mitlöschen oder die
# Antialiasing-Splitter der echten Badges stehen lassen; die Summe trennt
# beide Fälle um zwei Grössenordnungen sauber.
E_MIN_TOTAL = 2000


def solid_mask(im: Image.Image) -> bytearray:
    """255 pro Pixel, das weder transparent noch (nahezu) weiss ist.

    Bewusst 0/255 und nicht 0/1: `ImageChops.multiply` rechnet (a·b)/255,
    mit Einsen käme überall 0 heraus.
    """
    r, g, b, a = im.split()
    # Minimum der drei Kanäle: nur wenn ALLE drei hoch sind, ist es weiss.
    darkest = ImageChops.darker(ImageChops.darker(r, g), b)
    not_white = darkest.point(lambda v: 255 if v <= 245 else 0)
    opaque = a.point(lambda v: 255 if v > 30 else 0)
    return bytearray(ImageChops.multiply(not_white, opaque).tobytes())


def electric_mask(im: Image.Image):
    """Maske der freistehenden Badge-Inseln oben rechts, oder None."""
    w, h = im.size
    solid = solid_mask(im)
    x0, y_to = int(w * E_X_FROM), int(h * E_Y_TO)

    seen = bytearray(w * h)
    islands: list[list[int]] = []

    for sy in range(y_to):
        for sx in range(x0, w):
            start = sy * w + sx
            if not solid[start] or seen[start]:
                continue
            comp, q, at_edge = [], deque([start]), False
            seen[start] = 1
            while q:
                i = q.popleft()
                comp.append(i)
                cx, cy = i % w, i // w
                # Rand des Suchfensters, über den die Maschine hereinragt.
                if cx == x0 or cy == y_to - 1:
                    at_edge = True
                for nx, ny in ((cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)):
                    if x0 <= nx < w and 0 <= ny < y_to:
                        j = ny * w + nx
                        if solid[j] and not seen[j]:
                            seen[j] = 1
                            q.append(j)
            # Randberührung = Maschine, nicht Badge. Niemals löschen.
            if not at_edge and len(comp) >= E_MIN_AREA:
                islands.append(comp)

    total = sum(len(c) for c in islands)
    if total < E_MIN_TOTAL:
        return None

    mask = Image.new("L", im.size, 0)
    px = mask.load()
    for comp in islands:
        for i in comp:
            px[i % w, i // w] = 255
    return mask.filter(ImageFilter.MaxFilter(2 * E_PAD + 1)), total


def main() -> None:
    if not ROOT.is_dir():
        sys.exit(f"Nicht gefunden: {ROOT}\nZuerst `npm run fetch-images` laufen lassen.")

    banners, electrics, untouched = [], [], 0
    for folder in sorted(ROOT.iterdir()):
        f = folder / "glavna.png"
        if not f.exists():
            continue
        im = Image.open(f).convert("RGBA")
        touched = False

        rect = banner_rect(im)
        if rect is not None:
            x0, y0, x1, y1 = rect
            # Transparent setzen — Dateigrösse und Seitenverhältnis bleiben.
            im.paste((0, 0, 0, 0), (x0, y0, x1 + 1, y1 + 1))
            banners.append((folder.name, f"{x1 - x0 + 1}x{y1 - y0 + 1}"))
            touched = True

        found = electric_mask(im)
        if found is not None:
            mask, area = found
            im.paste((0, 0, 0, 0), mask=mask)
            electrics.append((folder.name, f"{area} px"))
            touched = True

        if touched:
            im.save(f)
        else:
            untouched += 1

    print("# NEW-Banner entfernt\n")
    for name, size in banners:
        print(f"  ✓ {name:<16} {size}")
    print("\n# Elektro-Badges entfernt (Blitz + ZERO EMISSION)\n")
    for name, size in electrics:
        print(f"  ✓ {name:<16} {size}")
    print(f"\nBanner: {len(banners)}   Elektro: {len(electrics)}   unberührt: {untouched}")


if __name__ == "__main__":
    main()
