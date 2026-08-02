import { ui } from "@/content/ui";
import { isQuotable, type Price } from "@/content/types";
import { formatEur } from "@/lib/format";

/**
 * Preisanzeige.
 *
 * Bewusste Abweichung von sunward.eu (ANALYSIS.md §7): dort steht nirgends
 * ein Preis, hier immer — Preistransparenz ist Zorans Verkaufsargument.
 */
export function PriceTag({ price, size = "md" }: { price: Price; size?: "md" | "lg" }) {
  const big = size === "lg";

  if (!isQuotable(price)) {
    return (
      <p className={big ? "text-2xl font-bold text-ink" : "text-base font-bold text-ink"}>
        {ui.price.onRequest}
      </p>
    );
  }

  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span
        className={big ? "font-heading text-3xl font-black text-ink" : "text-lg font-bold text-ink"}
      >
        {formatEur(price.amount)}
      </span>
      <span className="text-xs text-ink-muted">
        {price.tax === "net" ? ui.price.net : ui.price.gross}
      </span>
    </p>
  );
}
