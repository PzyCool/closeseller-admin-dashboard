import { AdminShell } from "@/components/layout/AdminShell";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { StatCard } from "@/components/ui/StatCard";
import { dashboardStats } from "@/lib/data";

export default function DashboardPage() {
  return (
    <AdminShell>
      <div className="flex max-w-[1116px] flex-col gap-8">
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </section>

        <section className="grid gap-8 xl:grid-cols-[351px_1fr]">
          <QuickActions />
          <RevenueChart />
        </section>

        <RecentActivity />
      </div>
    </AdminShell>
  );
}
