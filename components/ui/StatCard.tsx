import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  change?: string;
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tone: "green" | "orange" | "purple";
  negative?: boolean;
};

const tones = {
  green: "bg-[#e8f5e9] text-success shadow-[0_8px_18px_rgba(76,175,80,0.18)]",
  orange: "bg-[#fff4f0] text-accent",
  purple: "bg-[#f5f0ff] text-brand",
};

export function StatCard({ label, value, change, icon: Icon, tone, negative }: StatCardProps) {
  return (
    <article className="h-[167px] rounded-2xl bg-white p-6 shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
      <div className="flex h-12 items-start justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-xl ${tones[tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
        {change ? (
          <span className={`text-[14px] font-medium ${negative ? "text-danger" : "text-success"}`}>
            {change}
          </span>
        ) : null}
      </div>
      <div className="mt-7">
        <p className="text-[14px] font-medium leading-4 text-muted">{label}</p>
        <p className="mt-1 text-[30px] font-bold leading-[35px] text-foreground">{value}</p>
      </div>
    </article>
  );
}
