"use client";

import { useState } from "react";
import { MobileSidebar } from "./MobileSidebar";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      {/* The desktop sidebar is fixed; this drawer is only used below the lg breakpoint. */}
      <MobileSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Topbar onMenuClick={() => setSidebarOpen(true)} />
      <main className="lg:ml-[262px]">
        <div className="min-h-[calc(100vh-72px)] px-4 py-8 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
