
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsTable from "@/components/ReportsTable";

export function Reports() {
  return (
    <DashboardLayout title="Reports">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Financial Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <ReportsTable />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}

export default Reports;
