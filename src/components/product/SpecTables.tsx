import { specLabels, datasheetLabels } from "@/content/specs";
import { ui } from "@/content/ui";
import type { DatasheetBlock, ShortSpecs } from "@/content/types";

import { SpecValue, hasUnconfirmed } from "./SpecValue";

/** Die fünf Kurzspecs (ANALYSIS.md §3) — als Definitionsliste. */
export function ShortSpecList({ specs }: { specs: ShortSpecs }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {specs.map((row) => (
        <div key={row.key} className="flex justify-between gap-4 py-2 text-sm">
          <dt className="text-ink-muted">{specLabels[row.key]}</dt>
          <dd className="text-right text-ink">
            <SpecValue value={row.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Die vier Datenblatt-Blöcke (ANALYSIS.md §4 Punkt 9).
 * Die Fussnote erscheint nur, wenn der Block wirklich unbestätigte
 * Werte enthält.
 */
export function DatasheetTables({ blocks }: { blocks: readonly DatasheetBlock[] }) {
  const anyUnconfirmed = blocks.some((b) => hasUnconfirmed(b.rows.map((r) => r.value)));

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        {blocks.map((block) => (
          <section key={block.id}>
            <h3 className="mb-2 text-xs font-bold tracking-wider text-ink uppercase">
              {datasheetLabels[block.id]}
            </h3>
            <dl className="divide-y divide-line border-t border-line">
              {block.rows.map((row) => (
                <div key={row.key} className="flex justify-between gap-4 py-2 text-sm">
                  <dt className="text-ink-muted">{specLabels[row.key]}</dt>
                  <dd className="text-right text-ink">
                    <SpecValue value={row.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      {anyUnconfirmed ? (
        <p className="max-w-prose text-xs leading-relaxed text-ink-muted">{ui.spec.tbdFootnote}</p>
      ) : null}
    </div>
  );
}
