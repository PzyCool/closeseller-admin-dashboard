import { Construction } from "lucide-react";
import { AdminShell } from "./AdminShell";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <AdminShell>
      {/* Keeps out-of-scope navigation usable without pretending those modules are complete. */}
      <section className="grid min-h-[520px] max-w-[1116px] place-items-center rounded-2xl border border-border bg-white p-8 text-center shadow-[0_8px_24px_rgba(91,58,153,0.08)]">
        <div>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-surface-soft text-brand">
            <Construction className="h-7 w-7" />
          </div>
          <h2 className="mt-5 text-[24px] font-bold text-foreground">{title}</h2>
          <p className="mt-2 text-[16px] text-muted">
            This page is not part of my assigned task and is under construction by another developer.
          </p>
        </div>
      </section>
    </AdminShell>
  );
}
