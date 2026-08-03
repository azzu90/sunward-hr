import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { CategoryBrowser } from "@/components/product/CategoryBrowser";
import { CategorySidebar } from "@/components/product/CategorySidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { groupCounts, productsInCategory } from "@/content/products";
import { routes } from "@/content/routes";
import { categoryList, getCategory } from "@/content/taxonomy";
import { isQuotable } from "@/content/types";
import { ui } from "@/content/ui";
import { breadcrumbSchema } from "@/lib/schema";
import { categoryMetadata } from "@/lib/seo";

/** Nur bekannte Kategorien — unbekannte Slugs werden statisch zu 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return categoryList.map((c) => ({ kategorija: c.slug }));
}

type Params = { params: Promise<{ kategorija: string }> };

export async function generateMetadata({ params }: Params) {
  const { kategorija } = await params;
  const category = getCategory(kategorija);
  if (!category) return {};
  return categoryMetadata(category, productsInCategory(category.slug).length);
}

export default async function CategoryPage({ params }: Params) {
  const { kategorija } = await params;
  const category = getCategory(kategorija);
  // noUncheckedIndexedAccess erzwingt diesen Zweig — genau dafür ist es an.
  if (!category) notFound();

  const items = productsInCategory(category.slug);
  const counts = groupCounts(category.slug);
  const trail = [
    { name: ui.crumbs.home, href: routes.home() },
    { name: ui.crumbs.products, href: routes.proizvodi() },
    { name: category.name },
  ];

  return (
    <Container>
      <Breadcrumbs trail={trail} />

      <div className="grid gap-8 pb-14 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <CategorySidebar active={category} groupCounts={counts} />
        </aside>

        <div>
          <h1 className="text-3xl font-black text-ink">{category.name}</h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-body">{category.lede}</p>

          {/* Die Karten entstehen hier, serverseitig — CategoryBrowser ordnet
              sie nur. ProductCard kann keine Client-Komponente sein, weil
              SiteImage über lib/assets.ts `node:fs` liest. */}
          <CategoryBrowser
            groups={category.groups
              .filter((group) => (counts.get(group.slug) ?? 0) > 0)
              .map((group) => ({
                slug: group.slug,
                name: group.name,
                count: counts.get(group.slug) ?? 0,
              }))}
            items={items.map((product) => ({
              slug: product.slug,
              group: product.group,
              weight: product.shortSpecs.find((s) => s.key === "operatingWeight")?.n ?? null,
              price: isQuotable(product.price) ? product.price.amount : null,
              card: <ProductCard product={product} />,
            }))}
          />
        </div>
      </div>

      <JsonLd data={breadcrumbSchema(trail)} />
    </Container>
  );
}
