import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <Topbar />
      <main className="lg:ml-[262px]">
        <div className="min-h-[calc(100vh-72px)] py-8">{children}</div>
      </main>
    </div>
  );
}
