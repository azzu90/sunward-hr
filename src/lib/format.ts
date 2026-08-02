import { ui } from "@/content/ui";
import { isQuotable, type Price } from "@/content/types";

const eurFormatter = new Intl.NumberFormat("hr-HR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("hr-HR");

export function formatEur(amount: number): string {
  return eurFormatter.format(amount);
}

export function formatNumber(n: number): string {
  return numberFormatter.format(n);
}

/** Vollständige Preisangabe inklusive Steuerhinweis, oder „Cijena na upit". */
export function formatPrice(price: Price): string {
  if (!isQuotable(price)) return ui.price.onRequest;
  const tax = price.tax === "net" ? ui.price.net : ui.price.gross;
  return `${formatEur(price.amount)} ${tax}`;
}
