"use client";

import { X } from "lucide-react";
import { Sidebar } from "./Sidebar";

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  return (
    <div className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}>
      <button
        aria-label="Close sidebar"
        className={`absolute inset-0 bg-black/30 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`absolute inset-y-0 left-0 w-[262px] transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar mobile onNavigate={onClose} />
        <button
          aria-label="Close sidebar"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-muted shadow"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
