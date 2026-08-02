import { site } from "./site";
import type { FeatureTile } from "./types";

/**
 * Gemeinsamer Pool der „Prednosti i oprema"-Kacheln (ANALYSIS.md §4 Punkt 10).
 *
 * Ohne diesen Pool wären das 22 Modelle × 8 Kacheln = 176 handgeschriebene
 * Texte in Phase 2. Modelle referenzieren die Kacheln per ID und ergänzen
 * höchstens ein bis zwei eigene.
 */
export const featurePool = {
  madeForEurope: {
    id: "madeForEurope",
    title: "Građen za europska gradilišta",
    body: "Strojevi su prilagođeni europskim propisima i uvjetima rada — emisijske norme, sigurnosna oprema i dokumentacija spremni za rad u Hrvatskoj.",
  },
  premiumComponents: {
    id: "premiumComponents",
    title: "Provjerene komponente",
    body: `Motori i hidraulika dolaze od dobavljača kao što su ${site.componentBrands.join(", ")}. Nema eksperimenata na dijelovima o kojima ovisi radni dan.`,
  },
  warranty: {
    id: "warranty",
    title: site.warranty.headline,
    body: site.warranty.detail,
  },
  financing: {
    id: "financing",
    title: site.financing.headline,
    body: site.financing.detail,
  },
  tradeIn: {
    id: "tradeIn",
    title: site.tradeIn.headline,
    body: site.tradeIn.detail,
  },
  fieldService: {
    id: "fieldService",
    title: site.service.headline,
    body: site.service.detail,
  },
  bestValue: {
    id: "bestValue",
    title: "Odnos cijene i vrijednosti",
    body: "Ponuda uključuje opremu koja se kod drugih proizvođača doplaćuje. Za svaki stroj dajemo pisanu ponudu s konačnom cijenom — bez naknadnih stavki.",
  },
  easyMaintenance: {
    id: "easyMaintenance",
    title: "Jednostavno održavanje",
    body: "Servisne točke su dostupne bez rastavljanja stroja, a rezervni dijelovi su na zalihi u Karlovcu.",
  },
  localSupport: {
    id: "localSupport",
    title: "Podrška iz Karlovca",
    body: `${site.employeeCount} zaposlenika, vlastita radionica za hidrauliku i servis na terenu na području cijele Hrvatske.`,
  },
} as const satisfies Record<string, FeatureTile>;

export type FeatureId = keyof typeof featurePool;

/** Löst gemischte Listen aus IDs und eigenen Kacheln auf. */
export function resolveFeatures(refs: readonly (string | FeatureTile)[]): FeatureTile[] {
  return refs.map((r) => {
    if (typeof r !== "string") return r;
    const tile = (featurePool as Record<string, FeatureTile>)[r];
    if (!tile) throw new Error(`Nepoznata značajka: ${r}`);
    return tile;
  });
}
