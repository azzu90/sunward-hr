import { resolveFeatures } from "@/content/features";
import type { FeatureTile } from "@/content/types";

/** „Prednosti i oprema" — Kachelraster (ANALYSIS.md §4 Punkt 10). */
export function FeatureTiles({ features }: { features: readonly (string | FeatureTile)[] }) {
  const tiles = resolveFeatures(features);

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {tiles.map((tile) => (
        <li key={tile.id} className="flex flex-col gap-1.5 border-t-2 border-brand pt-3">
          <h3 className="text-sm font-bold text-ink">{tile.title}</h3>
          <p className="text-sm leading-relaxed text-ink-body">{tile.body}</p>
        </li>
      ))}
    </ul>
  );
}
