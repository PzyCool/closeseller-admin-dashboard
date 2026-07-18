import { AdminShell } from "@/components/layout/AdminShell";
import { ProductsTable } from "@/components/products/ProductsTable";
import { StatCard } from "@/components/ui/StatCard";
import { productStats } from "@/lib/data";

export default function ProductsPage() {
  return (
    <AdminShell>
      <div className="mx-auto max-w-[1169px] px-4 lg:px-0">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <div className="mt-[61px]">
          <ProductsTable />
        </div>
      </div>
    </AdminShell>
  );
}
