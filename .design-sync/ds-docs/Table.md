---
category: Data Display
---
Semantic data table with styled header, striped hover rows, footer band, and caption.

## Components

- `Table` — root `<table>` wrapper with overflow container.
- `TableHeader` — `<thead>`; use with `TableRow` + `TableHead` cells.
- `TableBody` — `<tbody>`.
- `TableFooter` — muted `<tfoot>` band for totals.
- `TableRow` — hover + selected-state styling (`data-state="selected"`).
- `TableHead` — header cell, muted-foreground.
- `TableCell` — body cell.
- `TableCaption` — muted caption below the table.

## Usage

```tsx
import {
  Table, TableBody, TableCaption, TableCell, TableFooter,
  TableHead, TableHeader, TableRow, Badge,
} from "dataleap-design-system"

<Table>
  <TableCaption>Recent invoices for the Acme workspace.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead style={{ textAlign: "right" }}>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell style={{ fontWeight: 500 }}>INV-0041</TableCell>
      <TableCell><Badge variant="secondary">Paid</Badge></TableCell>
      <TableCell style={{ textAlign: "right" }}>$250.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell style={{ textAlign: "right" }}>$250.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```
