"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { Logo } from "./Logo";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[262px] bg-white shadow-[8px_0_40px_rgba(0,0,0,0.08)] lg:block">
      <div className="h-[74px] border-b border-border px-6 py-6">
        <Logo />
      </div>

      <nav className="ml-[9px] mt-0 flex w-[244px] flex-col gap-2 px-4 py-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-11 w-[212px] items-center gap-3 rounded-[12px] px-3 text-[16px] font-medium transition ${
                active || item.label === "Pending Actions"
                  ? "bg-surface-soft text-brand"
                  : "text-muted hover:bg-surface-soft"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute left-[33px] top-[633px] flex h-10 items-center gap-[7px]">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-[#d9a08e] text-sm font-bold text-white">
          AU
        </div>
        <div>
          <p className="text-[16px] font-medium leading-[19px] text-foreground">Admin User</p>
          <p className="max-w-[149px] break-all text-[14px] leading-4 text-muted">
            admin@closeseller.com
          </p>
        </div>
      </div>
    </aside>
  );
}
