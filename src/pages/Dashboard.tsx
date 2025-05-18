
import DashboardLayout from "@/components/DashboardLayout";
import StatsCard from "@/components/StatsCard";
import ReportsTable from "@/components/ReportsTable";
import FinanceChart from "@/components/FinanceChart";

export function Dashboard() {
  return (
    <DashboardLayout>
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
            subtitle="Monthly revenue growth" 
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
