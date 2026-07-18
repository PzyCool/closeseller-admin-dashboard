import { StatCard } from "@/components/ui/StatCard";
import { AdminShell } from "@/components/layout/AdminShell";
import { UsersTable } from "@/components/users/UsersTable";
import { userStats } from "@/lib/data";

export default function UsersPage() {
  return (
    <AdminShell>
      <div>
        <section className="grid max-w-[1116px] gap-6 md:grid-cols-2 xl:grid-cols-4">
          {userStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <div className="mt-[61px] max-w-[1169px]">
          <UsersTable />
        </div>
      </div>
    </AdminShell>
  );
}
