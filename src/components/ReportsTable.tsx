
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const reportsData = [
  {
    id: 1,
    name: "Monthly Financial",
    type: "Financial",
    category: "Sales",
    amount: "$1,340",
    date: "2025-05-01",
  },
  {
    id: 2,
    name: "Quarterly Sales",
    type: "Budget",
    category: "Expense",
    amount: "$2,580",
    date: "2025-04-15",
  },
  {
    id: 3,
    name: "Annual Budget",
    type: "Expense",
    category: "Revenue",
    amount: "$2,050",
    date: "2025-03-30",
  },
  {
    id: 4,
    name: "Expense Report",
    type: "Revenue",
    category: "Revenue",
    amount: "$2,250",
    date: "2025-05-10",
  },
  {
    id: 5,
    name: "Investment Report",
    type: "Investment",
    category: "Investment",
    amount: "$1,850",
    date: "2025-04-22",
  },
];

export function ReportsTable() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Sales":
        return "bg-blue-100 text-blue-800";
      case "Expense":
        return "bg-red-100 text-red-800";
      case "Revenue":
        return "bg-green-100 text-green-800";
      case "Investment":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="rounded-md shadow-sm border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reportsData.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">{report.name}</TableCell>
              <TableCell>{report.type}</TableCell>
              <TableCell>
                <Badge variant="outline" className={getCategoryColor(report.category)}>
                  {report.category}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{report.amount}</TableCell>
              <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ReportsTable;
