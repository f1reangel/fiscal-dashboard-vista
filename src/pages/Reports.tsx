
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsTable from "@/components/ReportsTable";
import { FilterOptions } from "@/components/FilterPopover";

export function Reports() {
  const [filters, setFilters] = useState<FilterOptions>({
    dateRange: "all",
    category: "all"
  });

  const handleFilterChange = (newFilters: FilterOptions) => {
    console.log("Reports filters:", newFilters);
    setFilters(newFilters);
    // In a real application, you would use these filters to fetch or filter data
  };
  
  return (
    <DashboardLayout title="Reports" onFilterChange={handleFilterChange}>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>
            Financial Reports
            {filters.dateRange !== "all" && ` (${filters.dateRange})`}
            {filters.category !== "all" && ` - ${filters.category}`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ReportsTable />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}

export default Reports;
