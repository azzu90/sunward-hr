import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { CategorySidebar } from "@/components/product/CategorySidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { groupCounts, productsInCategory } from "@/content/products";
import { routes } from "@/content/routes";
import { categoryList, getCategory } from "@/content/taxonomy";
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

          {category.groups
            .filter((group) => (counts.get(group.slug) ?? 0) > 0)
            .map((group) => (
              <section key={group.slug} id={group.slug} className="mt-10 scroll-mt-24">
                <h2 className="mb-4 border-b border-line pb-2 text-lg font-bold text-ink">
                  {group.name}
                </h2>
                <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {items
                    .filter((p) => p.group === group.slug)
                    .map((product) => (
                      <li key={product.slug}>
                        <ProductCard product={product} />
                      </li>
                    ))}
                </ul>
              </section>
            ))}
        </div>
      </div>

      <JsonLd data={breadcrumbSchema(trail)} />
    </Container>
  );
}
