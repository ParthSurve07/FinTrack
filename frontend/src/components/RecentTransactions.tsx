import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    asset: "Reliance Industries",
    type: "Buy",
    status: "Completed",
    date: "2025-10-01",
    amount: "₹15,000.00",
  },
  {
    asset: "Nifty 50 Index Fund",
    type: "Dividend",
    status: "Completed",
    date: "2025-09-28",
    amount: "₹850.50",
  },
  {
    asset: "Tata Motors",
    type: "Sell",
    status: "Pending",
    date: "2025-10-02",
    amount: "₹5,200.00",
  },
  {
    asset: "Gold ETF",
    type: "Buy",
    status: "Completed",
    date: "2025-09-25",
    amount: "₹10,000.00",
  },
];

export default function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest portfolio activity.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.asset}>
                <TableCell className="font-medium">{transaction.asset}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={transaction.status === "Completed" ? "default" : "secondary"}
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{transaction.date}</TableCell>
                <TableCell className="text-right">{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}