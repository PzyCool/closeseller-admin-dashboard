const colors: Record<string, string> = {
  Active: "bg-[#14b82e]",
  Suspended: "bg-[#d71920]",
  Flagged: "bg-warning",
  Pending: "bg-[#f59e0b]",
};

export function StatusDot({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-3 w-3 rounded-full ${colors[status] ?? "bg-muted"}`} />
      {status}
    </span>
  );
}
