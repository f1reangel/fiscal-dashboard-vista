
import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export function DashboardLayout({ children, title = "Dashboard" }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 pl-64">
        <main className="p-8">
          <Header title={title} />
          <div className="mt-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
