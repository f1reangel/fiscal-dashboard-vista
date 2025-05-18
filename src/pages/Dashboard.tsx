
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/StatsCard";
import ReportsTable from "@/components/ReportsTable";
import FinanceChart from "@/components/FinanceChart";
import { FilterOptions } from "@/components/FilterPopover";

export function Dashboard() {
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: "all",
    category: "all"
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    console.log("Dashboard filters:", newFilters);
    setFilters(newFilters);
    // In a real application, you would use these filters to fetch data or filter existing data
  };

  return (
    <DashboardLayout onFilterChange={handleFilterChange}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatsCard 
          title="Total Revenue"
          value="$12,340"
          trend={{ value: "+12.5% from last month", isPositive: true }}
        />
        <StatsCard 
          title="Expenses" 
          value="$2,580"
          trend={{ value: "-3.2% from last month", isPositive: true }}
        />
        <StatsCard 
          title="Profit" 
          value="$9,760" 
          trend={{ value: "+15.7% from last month", isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-medium mb-4">Recent Financial Reports</h2>
            <ReportsTable />
          </div>
        </div>
        <div className="lg:col-span-1">
          <FinanceChart 
            title="Revenue Growth" 
            subtitle={`Monthly revenue growth (${filters.dateRange})`} 
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
