import { StatCard } from "@/components/ui/StatCard";
import { AdminShell } from "@/components/layout/AdminShell";
import { UsersTable } from "@/components/users/UsersTable";
import { userStats } from "@/lib/data";

export default function UsersPage() {
  return (
    <AdminShell>
      <div className="mx-auto max-w-[1169px] px-4 lg:px-0">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {userStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <div className="mt-[61px]">
          <UsersTable />
        </div>
      </div>
    </AdminShell>
  );
}
