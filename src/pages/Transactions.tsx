
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: "TR-1001",
    date: "2025-05-12",
    description: "Software Subscription",
    amount: "$120.00",
    status: "Completed",
  },
  {
    id: "TR-1002",
    date: "2025-05-10",
    description: "Office Supplies",
    amount: "$340.50",
    status: "Completed",
  },
  {
    id: "TR-1003",
    date: "2025-05-08",
    description: "Marketing Campaign",
    amount: "$1,250.00",
    status: "Pending",
  },
  {
    id: "TR-1004",
    date: "2025-05-05",
    description: "Hardware Purchase",
    amount: "$2,340.00",
    status: "Completed",
  },
  {
    id: "TR-1005",
    date: "2025-05-01",
    description: "Consulting Services",
    amount: "$850.00",
    status: "Failed",
  },
];

export function Transactions() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "Pending":
        return "text-orange-600";
      case "Failed":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <DashboardLayout title="Transactions">
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell className={getStatusColor(transaction.status)}>
                    {transaction.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}

export default Transactions;
