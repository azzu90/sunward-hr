import Link from "next/link";

import { Container, Section } from "@/components/layout/Container";
import { SiteImage } from "@/components/media/SiteImage";
import { ProductCard } from "@/components/product/ProductCard";
import { ComponentBrands } from "@/components/marketing/ComponentBrands";
import { FeatureIcon } from "@/components/marketing/FeatureIcon";
import { TrustBar } from "@/components/marketing/TrustBar";
import { home } from "@/content/home";
import { products } from "@/content/products";
import { routes } from "@/content/routes";
import { site } from "@/content/site";
import { categoryTiles } from "@/content/category-tiles";
import { categoryList } from "@/content/taxonomy";
import { ui } from "@/content/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  // Kurz genug, dass Google ihn nicht abschneidet (Ziel unter 60 Zeichen).
  // Der Marken-Suffix aus dem Root-Layout greift hier nicht, weil die
  // Startseite im selben Segment wie das Layout liegt.
  title: `${site.brandName} — bageri, utovarivači i dodatna oprema`,
  description: `Sunward bageri, utovarivači i platforme u Hrvatskoj — 51 model iz cijelog programa. ${site.warranty.headline}, financiranje uz ${site.financing.downPaymentPercent}% učešća i servis na terenu u roku od ${site.service.responseHours} sata.`,
  path: routes.home(),
});

export default function HomePage() {
  return (
    <>
      {/* Hero — hell und fotogetrieben (DESIGN.md).
          Zwei Ebenen, mit Absicht: der Overlay-Slot (pocetna/hero) bleibt das
          künftige breite Gradilište-Foto und liegt gedämpft hinter dem Text,
          damit der Kontrast nicht am Bildinhalt hängt. Davor steht in der
          rechten Spalte ein freigestelltes Modellfoto bei voller Deckkraft —
          bis Zoran ein eigenes Hero-Motiv liefert, trägt das den Hero. */}
      <section className="relative overflow-hidden bg-surface-alt lg:overflow-visible">
        <SiteImage id="pocetna/hero" priority overlay className="opacity-30" sizes="100vw" />
        <Container className="relative z-10 py-16 sm:py-24">
          {/* Ab lg bricht das Foto rechts aus dem Grid/Container aus (siehe
              Bild-Wrapper unten) — der Text braucht dafür eine feste
              Höchstbreite statt der Grid-Spalte, sonst würde er unter das
              nun absolut positionierte Bild laufen. 34rem ist bei der
              schmalsten Breite, an der dieses Layout greift (1024px),
              gegen den Bild-Wrapper durchgemessen (dort bleiben ~150px
              Luft zwischen Text und Bild). */}
          <div className="lg:max-w-[34rem]">
            <p className="mb-3 text-xs font-bold tracking-widest text-brand-text uppercase">
              {site.role}
            </p>
            <h1 className="max-w-3xl text-3xl leading-tight font-black sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-body">
              {`Bageri od 1 do 34 tone, utovarivači, radne platforme i kompletna dodatna oprema — cijeli Sunward program iz jedne ruke. ${site.warranty.headline}.`}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={routes.proizvodi()}
                className="rounded-ui bg-brand-strong px-6 py-3 text-base font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
              >
                {ui.cta.allProducts}
              </Link>
              {/* Primäre Handlungs-CTA → Orange (ANALYSIS.md §7 Nachtrag).
                  „Svi strojevi" daneben bleibt Türkis: navigatorisch, kommt
                  site-weit wiederholt vor. */}
              <Link
                href={routes.kontakt()}
                className="rounded-ui bg-accent px-6 py-3 text-base font-bold tracking-wide text-on-accent uppercase hover:bg-accent-strong"
              >
                {ui.cta.requestQuote}
              </Link>
            </div>
          </div>

          {/* Unter lg: dasselbe Bild wie im Desktop-Wrapper unten, aber im
              normalen Fluss unter dem Text — genau die vorherige Reihenfolge
              (Text oben, Bild darunter, gestapelt), unangetastet. Zwei
              SiteImage-Instanzen statt einer umgeschalteten, weil die eine
              im Fluss steht und die andere absolut positioniert ist — keine
              gemeinsame Klasse hätte beides angemessen bedient. */}
          <div className="mt-10 lg:hidden">
            <SiteImage
              id="proizvodi/swe155f/glavna"
              priority
              ratio="4/3"
              imgClassName="object-contain"
              sizes="(max-width: 640px) 90vw, 60vw"
            />
          </div>
        </Container>

        {/* Bild bricht aus dem Container aus statt in dessen Grid-Spalte zu
            bleiben — das ist die "Dynamik", nach der gefragt war: eine feste
            Grid-Spalte hätte das Foto immer im selben Verhältnis zur
            Textspalte gehalten, egal wie breit der Viewport ist.

            War zuerst `right-0` (flush an der Kante) — sah bei der Kontrolle
            zu sehr rechts-gebunden aus, der Bagger klebte am Bildschirmrand.
            Jetzt zentriert im Leerraum rechts vom Text statt an die Kante
            gepinnt: `right` ist so berechnet, dass links und rechts vom Bild
            derselbe Abstand bleibt, bei jeder Breite.

            Herleitung: der Text endet bei containerLeft + 34rem (544px, die
            Höchstbreite der Textspalte oben). containerLeft ist 24px unter
            1280px Breite, darüber wächst es mit (Breite-1280)/2 — macht
            zusammengefasst min(100% − 568px, 50% + 72px) als Breite des
            Leerraums rechts vom Text. Davon wird die Bildbreite (siehe unten)
            abgezogen und zu gleichen Teilen links/rechts verteilt — daher
            die Division durch 2.

            `%` und nicht `vw`: `vw` zählt die Scrollbar mit, `%` bezieht
            sich auf die tatsächliche Breite der <section> (dem positionierten
            Elternrahmen), die Scrollbar bereits abgezogen — mit `vw` maß die
            erste Fassung bei 1024px nur noch 5px Luft links statt der
            gerechneten 20px, der Scrollbar-Anteil ging einseitig in den
            rechten Abstand. Im Browser nachgemessen (gegen die tatsächliche
            Kante, document.documentElement.clientWidth, nicht window.
            innerWidth): 13/96/107/131px Luft auf jeder Seite bei
            1024/1280/1440/1920px Breite, an jeder Breite exakt symmetrisch.

            Eigener Wrapper NUR für Position/Größe, nicht auf der
            SiteImage-Box selbst: die setzt bereits `w-full` und die
            `aspect-ratio` als Inline-Style — ein zusätzliches top/bottom
            auf demselben Element hätte dagegen konkurriert (siehe
            PartnerBadge.tsx/Logo.tsx, derselbe Bug). `items-center`
            statt `stretch`, sonst zwingt der Flex-Container eine eigene
            Höhe auf und die aspect-ratio-Rechnung der Box greift nicht.

            max(26rem,40%): 26rem ist die alte Breite von vorher (nie
            schmaler als das), 40% lässt es mit dem Viewport wachsen.

            Als style statt Tailwind-Klasse: das verschachtelte calc/min/max
            hätte im Klassennamen zu viele Klammern und Kommas für den
            Tailwind-Parser gehabt. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 hidden w-[max(26rem,40%)] items-center lg:flex"
          style={{ right: "calc((min(100% - 568px, 50% + 72px) - max(26rem, 40%)) / 2)" }}
        >
          {/* Interims-Hero-Motiv: referenziert bewusst das bestehende
              Produktbild statt eines eigenen Manifest-Eintrags — kein
              zweiter Dateipfad, der gepflegt werden müsste, und der
              Alt-Text ist dort schon final. object-contain, damit der
              Ausleger garantiert nicht angeschnitten wird.

              `ratio` gepinnt, weil die Box hier die Höhe der Bühne bestimmt
              und nicht das Foto: der Kasten ist nur so breit wie der
              Leerraum rechts vom Text, seine Höhe folgt daraus. Bei 1920px
              wären das 762px Höhe gegen 510px Sektionshöhe — der Ausleger
              lief oben durch die Hauptnavigation. Mit 4/3 bleibt es bei den
              in a2a6f50 eingestellten 31px Überstand je Seite. Zuschnitt
              ist dabei kein Thema, object-contain schneidet nichts ab. */}
          <SiteImage
            id="proizvodi/swe155f/glavna"
            priority
            ratio="4/3"
            imgClassName="object-contain"
            sizes="40vw"
          />
        </div>
      </section>

      {/* Zašto Sunward? — 4 USP-Kacheln (ANALYSIS.md §2, eigenständig
          formuliert statt von sunward.eu übersetzt, siehe content/home.ts). */}
      <Section alt labelledBy="zasto-sunward">
        <h2 id="zasto-sunward" className="mb-6 text-2xl font-bold">
          {home.whySunwardHeading}
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {home.whySunwardTiles.map((tile) => (
            <li key={tile.id} className="rounded-ui border-t-4 border-brand bg-surface p-6">
              <div className="mb-2 flex items-start gap-3">
                <FeatureIcon id={tile.id} className="size-7 flex-none text-brand" />
                <h3 className="text-lg font-bold text-ink">{tile.headline}</h3>
              </div>
              <p className="text-sm leading-relaxed text-ink-body">{tile.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Logo-Reihe der Komponentenmarken — direkter visueller Beleg zur
          "Provjerene komponente"-Kachel darüber, die dieselben Marken nur
          als Fliesstext nennt. */}
      <ComponentBrands />

      {/* Naši proizvodi — alle 8 Kategorien. */}
      <Section labelledBy="kategorije">
        <h2 id="kategorije" className="mb-6 text-2xl font-bold">
          {home.categoriesHeading}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryList.map((category) => (
            <li key={category.slug}>
              <Link
                href={routes.category(category)}
                className="flex h-full flex-col overflow-hidden rounded-ui border border-line bg-surface hover:shadow-md"
              >
                <div className="relative aspect-[16/9] p-3">
                  <SiteImage
                    id={categoryTiles[category.slug]}
                    overlay
                    imgClassName="object-contain"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <span className="flex flex-1 flex-col gap-1 p-4">
                  <span className="text-base font-bold text-ink">{category.name}</span>
                  <span className="line-clamp-3 text-xs leading-relaxed text-ink-muted">
                    {category.lede}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <TrustBar />

      {/* Finanzierung + Eintausch — exakte Texte aus CLAUDE.md §3.
          Bleibt als Teaser bestehen und verlinkt auf /financiranje, wo
          derselbe Wortlaut plus FAQ und Prozess steht (PRD §6). */}
      <Section labelledBy="financiranje">
        <h2 id="financiranje" className="mb-6 text-2xl font-bold">
          {ui.pages.homeFinancingHeading}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-ui border-t-4 border-brand bg-surface p-6">
            <div className="mb-2 flex items-start gap-3">
              <FeatureIcon id="financiranje" className="size-7 flex-none text-brand" />
              <h3 className="text-lg font-bold text-ink">{site.financing.headline}</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-body">{site.financing.detail}</p>
          </div>
          <div className="rounded-ui border-t-4 border-brand bg-surface p-6">
            <div className="mb-2 flex items-start gap-3">
              <FeatureIcon id="staro-za-novo" className="size-7 flex-none text-brand" />
              <h3 className="text-lg font-bold text-ink">{site.tradeIn.headline}</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-body">{site.tradeIn.detail}</p>
          </div>
        </div>
        <Link
          href={routes.financiranje()}
          className="mt-6 inline-block text-sm font-bold text-brand-text underline underline-offset-4"
        >
          {ui.cta.moreAboutFinancing}
        </Link>
      </Section>

      {/* Istaknuti strojevi — kuratierte Sechserauswahl aus content/home.ts.
          Lief vorher über products.map() und zeigte alle 51 Modelle; das ist
          keine Hervorhebung, sondern ein zweiter Katalog direkt unter dem
          ersten. Die Reihenfolge kommt aus featuredSlugs, nicht aus der
          Registry — deshalb map über die Slugs und nicht filter über products. */}
      <Section alt labelledBy="istaknuto">
        <h2 id="istaknuto" className="mb-6 text-2xl font-bold">
          {ui.pages.homeFeaturedHeading}
        </h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {home.featuredSlugs.map((slug) => {
            const product = products.find((p) => p.slug === slug);
            return product ? (
              <li key={slug}>
                <ProductCard product={product} />
              </li>
            ) : null;
          })}
        </ul>
      </Section>

      {/* Rücklink zu drvosped.hr (CLAUDE.md §11) */}
      <Section labelledBy="drvosped">
        <div className="flex flex-col items-start gap-3">
          <h2 id="drvosped" className="text-lg font-bold">
            {site.parent.crossLink}
          </h2>
          <a
            href={site.parent.url}
            target="_blank"
            rel="noopener"
            className="text-sm font-bold text-brand-text underline underline-offset-4"
          >
            {site.parent.url.replace("https://", "")}
          </a>
        </div>
      </Section>
    </>
  );
}
