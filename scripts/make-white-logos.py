#!/usr/bin/env python3
"""
Erzeugt aus den Farb-Originalen der beiden Logos je eine freigestellte
Weiss-Fassung für den Footer.

Warum überhaupt: der Footer ist eine türkise Markenfläche
(`.surface-brand` → --color-brand-deep #00655f). Beide Logos sind navy —
darauf matschig und kontrastarm. Weiss auf #00655f ergibt 6,84:1.

Die Regel ist für beide Dateien dieselbe: Alles, was im Original NICHT
weiss ist, wird deckend weiss; alles, was weiss ist, wird transparent.
Das ist die klassische einfarbige Reverse-Fassung eines Logos und ergibt
je Datei genau das gewünschte, unterschiedliche Ergebnis:

  * sunward-logo-color.png  — navy Schrift + rotes W auf transparent.
    Nichts im Original ist weiss, also wird die komplette Wortmarke weiss.
    Kontur und Proportionen bleiben identisch, das Rot geht verloren
    (gewollt: „einfach nur weiss").

  * drvosped-logo-color.png — navy Parallelogramm mit WEISSER Schrift
    „HD Hidraulika Drvošped" und gelb-rotem Streifen rechts. Der Korpus
    wird weiss und deckend, die Schrift wird ausgespart und zeigt im
    Footer das Türkis durch. Shape und Lesbarkeit bleiben erhalten.
    Bekannter Fidelity-Verlust: Gelb und Rot werden beide weiss, die
    Streifen verschmelzen also mit dem Korpus. Bei einer einfarbigen
    Fassung unvermeidlich, ohne das Logo neu zu zeichnen.

Als Alpha wird nicht hart geschwellt, sondern der Abstand zu Weiss weich
abgebildet (FLOOR…SOFTNESS). Sonst frisst ein Threshold die
Antialiasing-Kanten der Aussparung auf und die Schrift bekommt harte
Treppen.

FLOOR ist keine Kosmetik, sondern nötig: sunward-logo-color.png hat einen
OPAKEN weissen Hintergrund (keine Transparenz), und beide Dateien tragen
einen weichen Halo um die Marke. Ohne Totzone werden diese Pixel zu
Weiss mit Alpha 1–13 — auf dem türkisen Footer ein sichtbarer milchiger
Kasten über der ganzen Leinwand, und die Bounding-Box umfasst dann alles,
der Beschnitt greift nicht. Gemessen: die Hintergrundecken liegen bei
Abstand ≤ 1, der Halo bis ~24.

Anschliessend wird auf die Alpha-Bounding-Box beschnitten. Das entfernt
das Rand-Padding im Sunward-PNG (Tinte ca. 690×175 auf 808×212 Leinwand)
und macht die Breitenangabe im Footer vorhersagbar. Die Marke selbst wird
dadurch nicht verändert — es fällt nur leere Fläche weg. Die ausgegebenen
Pixelmasse sind die `aspect`-Werte für src/content/images.ts.

Idempotent nur bezogen auf die Eingabe: die Farb-Originale werden nie
geschrieben, die Weiss-Dateien immer neu erzeugt.

Braucht Pillow (`pip3 install Pillow`). Bewusst Python und nicht Node —
gleiche Begründung wie in strip-new-badges.py.

    npm run make-white-logos
"""

import pathlib
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow fehlt. Installieren mit:  pip3 install Pillow")

BRAND = pathlib.Path(__file__).resolve().parent.parent / "public" / "slike" / "brand"

# Totzone: bis zu diesem Abstand zu Weiss gilt ein Pixel als Hintergrund
# bzw. Halo und wird vollständig transparent.
FLOOR = 24
# Ab diesem Abstand ist ein Pixel voll deckend. Grosszügig gewählt, damit
# die Antialiasing-Rampe als Rampe erhalten bleibt.
SOFTNESS = 200

JOBS = ("sunward-logo", "drvosped-logo")


def whiten(im: Image.Image) -> Image.Image:
    """Alles Nicht-Weisse → deckend weiss, Weiss → transparent."""
    src = im.convert("RGBA")
    out = Image.new("RGBA", src.size)
    sp, op = src.load(), out.load()
    w, h = src.size

    for y in range(h):
        for x in range(w):
            r, g, b, a = sp[x, y]
            if a == 0:
                continue
            # Abstand zu Weiss über den am weitesten entfernten Kanal.
            dist = max(255 - r, 255 - g, 255 - b)
            if dist <= FLOOR:
                continue
            alpha = a * min(1.0, (dist - FLOOR) / (SOFTNESS - FLOOR))
            if alpha >= 0.5:
                op[x, y] = (255, 255, 255, round(alpha))

    return out


def main() -> None:
    if not BRAND.is_dir():
        sys.exit(f"Nicht gefunden: {BRAND}")

    print("# Freigestellte Weiss-Logos\n")
    for name in JOBS:
        source = BRAND / f"{name}-color.png"
        if not source.exists():
            sys.exit(f"Fehlt: {source}")

        original = Image.open(source)
        white = whiten(original)

        box = white.getbbox()
        if box is None:
            sys.exit(f"{name}: nach der Umwandlung ist nichts übrig geblieben.")
        white = white.crop(box)

        target = BRAND / f"{name}-white.png"
        white.save(target, optimize=True)

        ow, oh = original.size
        nw, nh = white.size
        print(f"  ✓ {target.name}")
        print(f"      Original  {ow}×{oh}  ({ow / oh:.3f}:1)")
        print(f"      Weiss     {nw}×{nh}  ({nw / nh:.3f}:1)   → aspect: \"{nw}/{nh}\"")
        print(f"      Beschnitt {box}\n")


if __name__ == "__main__":
    main()
