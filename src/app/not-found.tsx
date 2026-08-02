import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { routes } from "@/content/routes";
import { ui } from "@/content/ui";

export default function NotFound() {
  return (
    <Container className="py-20">
      <h1 className="text-3xl font-black text-ink">{ui.error.notFoundTitle}</h1>
      <p className="mt-3 text-base text-ink-body">{ui.error.notFoundBody}</p>
      <Link
        href={routes.home()}
        className="mt-6 inline-block bg-brand-strong px-5 py-3 text-sm font-bold tracking-wide text-on-brand uppercase hover:bg-brand-text"
      >
        {ui.error.notFoundCta}
      </Link>
    </Container>
  );
}
