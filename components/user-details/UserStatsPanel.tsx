type UserStats = {
  orders: string;
  completed: string;
  walletBalance: string;
};

const labels = [
  ["Orders", "orders"],
  ["Completed", "completed"],
  ["Wallet Balance", "walletBalance"],
] as const;

export function UserStatsPanel({ user }: { user: UserStats }) {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {labels.map(([label, key]) => (
        <article key={key} className="rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
          <p className="text-[14px] font-medium text-muted">{label}</p>
          <p className="mt-2 text-[30px] font-bold leading-[35px] text-foreground">{user[key]}</p>
        </article>
      ))}
    </section>
  );
}
