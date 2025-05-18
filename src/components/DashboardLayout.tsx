
import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { FilterOptions } from "./FilterPopover";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
  onFilterChange?: (filters: FilterOptions) => void;
}

export function DashboardLayout({ 
  children, 
  title = "Dashboard", 
  onFilterChange = () => {}
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 pl-64">
        <main className="p-8">
          <Header title={title} onFilterChange={onFilterChange} />
          <div className="mt-6">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
