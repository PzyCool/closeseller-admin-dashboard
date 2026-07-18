import { ArrowRight } from "lucide-react";
import { activities } from "@/lib/data";

const tones = {
  green: "bg-[#e8f5e9] text-success",
  orange: "bg-[#fff4f0] text-accent",
  purple: "bg-[#f5f0ff] text-brand",
};

export function RecentActivity() {
  return (
    <section className="rounded-2xl bg-white shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
      <div className="flex h-[73px] items-center justify-between border-b border-border px-6">
        <h2 className="text-[20px] font-bold text-foreground">Recent Activity</h2>
        <button className="flex items-center gap-2 text-[14px] font-medium text-brand">
          View All
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div>
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.title} className="flex h-[73px] items-center justify-between border-b border-border px-6 last:border-b-0">
              <div className="flex items-center gap-4">
                <div className={`grid h-10 w-10 place-items-center rounded-[8px] ${tones[activity.tone as keyof typeof tones]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[16px] font-medium leading-[19px] text-foreground">{activity.title}</p>
                  <p className="text-[14px] leading-4 text-muted">{activity.detail}</p>
                </div>
              </div>
              <div className="flex min-w-[150px] items-center justify-end gap-6">
                {activity.amount ? (
                  <span className="text-[16px] font-bold text-brand">{activity.amount}</span>
                ) : null}
                <span className="text-[14px] text-muted-light">{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
