/**
 * Rendert strukturierte Daten als <script type="application/ld+json">.
 *
 * Der Inhalt stammt ausschliesslich aus src/lib/schema.ts und damit aus
 * geprüften Content-Objekten — nie aus Nutzereingaben.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
