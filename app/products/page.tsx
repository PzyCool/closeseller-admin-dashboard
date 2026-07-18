import { AdminShell } from "@/components/layout/AdminShell";
import { ProductsTable } from "@/components/products/ProductsTable";
import { StatCard } from "@/components/ui/StatCard";
import { productStats } from "@/lib/data";

export default function ProductsPage() {
  return (
    <AdminShell>
      <div>
        <section className="grid max-w-[1116px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {productStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <div className="mt-[61px] max-w-[1169px]">
          <ProductsTable />
        </div>
      </div>
    </AdminShell>
  );
}
