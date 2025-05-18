
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FinanceChart from "@/components/FinanceChart";

export function Analytics() {
  return (
    <DashboardLayout title="Analytics">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <FinanceChart title="Revenue" subtitle="Monthly revenue" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Expense Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <FinanceChart title="Expenses" subtitle="Monthly expenses" />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Analytics;
