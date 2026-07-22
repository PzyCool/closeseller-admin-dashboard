import { notFound } from "next/navigation";
import { AdminShell } from "@/components/layout/AdminShell";
import { CustomerFeedbackList } from "@/components/user-details/CustomerFeedbackList";
import { UserProfileCard } from "@/components/user-details/UserProfileCard";
import { UserStatsPanel } from "@/components/user-details/UserStatsPanel";
import { userDetails } from "@/lib/data";

export function generateStaticParams() {
  return userDetails.map((user) => ({ id: user.id }));
}

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = userDetails.find((item) => item.id === id);

  if (!user) notFound();

  return (
    <AdminShell>
      <div className="max-w-[1116px]">
        <h2 className="mb-8 text-[20px] font-bold text-foreground">User Information</h2>
        <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
          <UserProfileCard user={user} />
          <div>
            <UserStatsPanel user={user} />
            <CustomerFeedbackList />
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
