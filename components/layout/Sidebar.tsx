"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";
import { Logo } from "./Logo";

type SidebarProps = {
  onNavigate?: () => void;
  mobile?: boolean;
};

export function Sidebar({ onNavigate, mobile = false }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`inset-y-0 left-0 z-30 w-[262px] flex-col bg-white shadow-[8px_0_40px_rgba(0,0,0,0.08)] ${
        mobile ? "flex h-full" : "fixed hidden lg:flex"
      }`}
    >
      <div className="h-[74px] shrink-0 border-b border-border px-6 py-6">
        <Logo />
      </div>

      {/* The nav scrolls independently so the profile remains visible on shorter laptops. */}
      <nav className="ml-[9px] flex min-h-0 w-[244px] flex-1 flex-col gap-2 overflow-y-auto px-4 py-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex h-11 w-[212px] items-center gap-3 rounded-[12px] px-3 text-[16px] font-medium transition ${
                active
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

      <div className="mx-[33px] mb-8 mt-4 flex h-10 shrink-0 items-center gap-[7px]">
        <Image
          src="/admin-avatar.jpg"
          alt="Admin User"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
          unoptimized
        />
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
