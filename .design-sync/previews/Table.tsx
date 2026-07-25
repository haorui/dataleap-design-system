import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "dataleap-design-system"

const invoices = [
  { id: "INV-0041", status: "Paid", method: "Credit card", amount: "$250.00" },
  { id: "INV-0042", status: "Pending", method: "Bank transfer", amount: "$1,150.00" },
  { id: "INV-0043", status: "Paid", method: "Credit card", amount: "$89.00" },
  { id: "INV-0044", status: "Overdue", method: "PayPal", amount: "$430.50" },
]

export const Invoices = () => (
  <Table style={{ width: 560 }}>
    <TableCaption>Recent invoices for the Acme workspace.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((inv) => (
        <TableRow key={inv.id}>
          <TableCell style={{ fontWeight: 500 }}>{inv.id}</TableCell>
          <TableCell>
            <Badge
              variant={
                inv.status === "Paid"
                  ? "secondary"
                  : inv.status === "Overdue"
                    ? "destructive"
                    : "outline"
              }
            >
              {inv.status}
            </Badge>
          </TableCell>
          <TableCell>{inv.method}</TableCell>
          <TableCell style={{ textAlign: "right" }}>{inv.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell style={{ textAlign: "right" }}>$1,919.50</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)
