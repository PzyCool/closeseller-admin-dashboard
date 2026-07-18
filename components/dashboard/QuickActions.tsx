import { FileText, Plus, ShieldCheck, UserPlus } from "lucide-react";

const actions = [
  { label: "Add New Product", icon: Plus, primary: true },
  { label: "Invite User", icon: UserPlus },
  { label: "Generate Report", icon: FileText },
  { label: "Manage Escrow", icon: ShieldCheck },
];

export function QuickActions() {
  return (
    <section className="h-[357px] rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
      <h2 className="text-[20px] font-bold text-foreground">Quick Actions</h2>
      <div className="mt-6 flex flex-col gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className={`flex h-[54px] items-center justify-center gap-3 rounded-[8px] border text-[16px] font-bold ${
                action.primary
                  ? "border-accent bg-accent text-white"
                  : "border-brand bg-white text-brand"
              }`}
            >
              <Icon className="h-4 w-4" />
              {action.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
