import { site } from "@/content/site";
import { formatNumber } from "@/lib/format";

/**
 * Trust-Leiste (TASK.md Phase 2 Punkt 3):
 * Generalni zastupnik · 27 zaposlenika · Garancija 3 god / 5.000 h ·
 * Servis na terenu.
 *
 * Die Kennzahlen sind bewusst NICHT hier hartkodiert, sondern kommen aus
 * site.ts. Ändert Zoran die Mitarbeiterzahl, ist das genau eine Zahl an
 * einer Stelle — und sie ändert sich überall mit.
 */
export function TrustBar() {
  const items: readonly { id: string; value: string; label: string }[] = [
    {
      id: "role",
      value: site.role,
      label: "Sunward Hrvatska",
    },
    {
      id: "employees",
      value: `${site.employeeCount} zaposlenika`,
      label: `Vlastita radionica u ${site.address.city}u`,
    },
    {
      id: "warranty",
      value: `${site.warranty.years} god. / ${formatNumber(site.warranty.hours)} h`,
      label: "Dijelovi i rad besplatni u garanciji",
    },
    {
      id: "service",
      value: `Servis na terenu u ${site.service.responseHours} h`,
      label: "Samo za Sunward strojeve, cijela Hrvatska",
    },
  ];

  return (
    <section className="border-y border-line bg-surface-alt">
      <div className="mx-auto max-w-site px-4 py-6 sm:px-6">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col gap-1">
              <span className="text-sm leading-snug font-bold text-brand-text">{item.value}</span>
              <span className="text-xs leading-snug text-ink-muted">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
