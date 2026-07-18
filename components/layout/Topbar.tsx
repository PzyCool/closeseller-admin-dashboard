"use client";

import { Bell, Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { routeTitles } from "@/lib/navigation";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 h-[72px] border-b border-transparent bg-white px-4 shadow-[0_2px_8px_rgba(91,58,153,0.06)] lg:ml-[262px] lg:px-8">
      <div className="flex h-full items-center justify-between">
        <div className="flex h-10 items-center gap-4">
          <button
            className="grid h-10 w-10 place-items-center text-muted lg:hidden"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-[24px] font-bold leading-7 text-foreground">
            {routeTitles[pathname as keyof typeof routeTitles] ?? "Dashboard"}
          </h1>
        </div>

        <div className="flex h-10 items-center gap-4">
          <label className="hidden h-9 w-80 items-center gap-2 rounded-[8px] bg-surface-soft px-4 sm:flex">
            <Search className="h-[18px] w-[18px] text-muted" />
            <input
              className="h-full min-w-0 flex-1 bg-transparent text-[16px] outline-none placeholder:text-muted"
              placeholder="Search..."
            />
          </label>
          <button className="relative grid h-10 w-10 place-items-center text-muted" aria-label="Notifications">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-[-4px] h-3 w-3 rounded-full bg-accent" />
          </button>
        </div>
      </div>
    </header>
  );
}
