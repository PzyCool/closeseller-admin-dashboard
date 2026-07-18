import { Filter } from "lucide-react";
import { DataTable } from "@/components/tables/DataTable";
import { Pagination } from "@/components/tables/Pagination";
import { products } from "@/lib/data";

export function ProductsTable() {
  return (
    <section>
      <div className="flex h-[81px] items-center justify-between border-b border-border">
        <h2 className="text-[20px] font-bold text-foreground">Products Table</h2>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted" />
          <button className="h-10 rounded-[4px] bg-brand px-4 text-[14px] font-medium text-white">
            All Products
          </button>
        </div>
      </div>
      <DataTable
        columns={["Product", "Vendor", "Category", "Price", "Stock", "Status", "Sales", "Date"]}
        rows={products}
        statusColumn={5}
      />
      <Pagination />
    </section>
  );
}
