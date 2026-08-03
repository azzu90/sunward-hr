import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeader } from "@/components/layout/PageHeader";
import { SiteImage } from "@/components/media/SiteImage";
import { productsInCategory } from "@/content/products";
import { routes } from "@/content/routes";
import { categoryList } from "@/content/taxonomy";
import { ui } from "@/content/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Sunward strojevi — cijeli program za Hrvatsku",
  description:
    "Svih 51 Sunward model u osam kategorija: bageri od 1 do 34 tone, kompaktni i zglobni utovarivači, bušače garniture, radne platforme, teleskopske dizalice i teleskopski utovarivač.",
  path: routes.proizvodi(),
});

export default function ProductsPage() {
  return (
    <Container>
      <Breadcrumbs
        trail={[{ name: ui.crumbs.home, href: routes.home() }, { name: ui.crumbs.products }]}
      />

      <div className="pb-14">
        <PageHeader title={ui.pages.productsTitle} />

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryList.map((category) => (
            <li key={category.slug}>
              <Link
                href={routes.category(category)}
                className="flex h-full flex-col border border-line bg-surface hover:shadow-md"
              >
                <SiteImage
                  id={category.heroImage}
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="aspect-[16/9]"
                />
                <span className="flex flex-1 flex-col gap-1 p-4">
                  <span className="text-base font-bold text-ink">{category.name}</span>
                  <span className="text-xs text-ink-muted">
                    {productsInCategory(category.slug).length}
                    {` ${ui.pages.modelsSuffix}`}
                  </span>
                  <span className="mt-1 line-clamp-3 text-xs leading-relaxed text-ink-body">
                    {category.lede}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
