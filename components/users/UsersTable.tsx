import { Filter, Download } from "lucide-react";
import { DataTable } from "@/components/tables/DataTable";
import { Pagination } from "@/components/tables/Pagination";
import { users } from "@/lib/data";

export function UsersTable() {
  return (
    <section>
      <div className="flex h-[85px] items-center justify-between border-b border-border">
        <h2 className="text-[20px] font-bold text-foreground">Users Table</h2>
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-muted" />
          <button className="h-10 rounded-[4px] border border-brand px-4 text-[14px] font-medium text-brand">
            All Users
          </button>
          <button className="flex h-10 items-center gap-2 rounded-[4px] bg-brand px-4 text-[14px] font-medium text-white">
            Export Data
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
      <DataTable
        columns={["User", "Role", "Status", "Orders", "Joined", "Last Active"]}
        rows={users}
        statusColumn={2}
      />
      <Pagination />
    </section>
  );
}
