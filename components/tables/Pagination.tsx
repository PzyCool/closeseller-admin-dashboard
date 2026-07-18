import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="mt-[30px] flex h-10 items-center justify-center gap-[34px]">
      <button className="grid h-10 w-10 place-items-center rounded bg-surface-soft text-muted-light">
        <ChevronLeft className="h-5 w-5" />
      </button>
      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          className={`grid h-10 w-10 place-items-center rounded text-[18px] font-bold ${
            page === 1 ? "bg-[#7c777d] text-white" : "bg-surface-soft text-foreground"
          }`}
        >
          {page}
        </button>
      ))}
      <button className="grid h-10 w-10 place-items-center rounded bg-surface-soft text-muted-light">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
