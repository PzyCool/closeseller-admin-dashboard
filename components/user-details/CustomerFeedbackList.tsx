import { customerFeedback } from "@/lib/data";
import { Pagination } from "@/components/tables/Pagination";

export function CustomerFeedbackList() {
  return (
    <section className="mt-5 rounded-2xl bg-white shadow-[0_8px_24px_rgba(91,58,153,0.10)]">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-[20px] font-bold text-foreground">Customer Feedbacks</h2>
      </div>
      {customerFeedback.map((feedback, index) => (
        <article key={`${feedback.name}-${index}`} className="flex min-h-[73px] items-center justify-between border-b border-border px-6">
          <div>
            <h3 className="text-[16px] font-medium text-foreground">{feedback.name}</h3>
            <p className="text-[14px] text-muted">{feedback.message}</p>
          </div>
          <span className="text-[14px] text-muted-light">{feedback.time}</span>
        </article>
      ))}
      <div className="pb-6">
        <Pagination />
      </div>
    </section>
  );
}
