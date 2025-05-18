
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FinanceChart from "@/components/FinanceChart";
import { FilterOptions } from "@/components/FilterPopover";

export function Analytics() {
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: "all",
    category: "all"
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    console.log("Analytics filters:", newFilters);
    setFilters(newFilters);
    // In a real application, you would use these filters to fetch or filter data
  };

  return (
    <DashboardLayout title="Analytics" onFilterChange={handleFilterChange}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              Revenue Analysis {filters.category !== "all" ? `(${filters.category})` : ""}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <FinanceChart 
                title="Revenue" 
                subtitle={`Monthly revenue (${filters.dateRange})`} 
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>
              Expense Analysis {filters.category !== "all" ? `(${filters.category})` : ""}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <FinanceChart 
                title="Expenses" 
                subtitle={`Monthly expenses (${filters.dateRange})`} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Analytics;
