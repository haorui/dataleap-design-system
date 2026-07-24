---
category: Navigation
---

Page navigation rendered as ghost/outline Button-styled links with Previous/Next arrows and an overflow ellipsis.

## Components

- `Pagination` — centered `nav` landmark.
- `PaginationContent` — `ul` row of controls.
- `PaginationItem` — one `li` slot.
- `PaginationLink` — page-number anchor; `isActive` renders the outline (current) state, `size` passes through to Button.
- `PaginationPrevious` / `PaginationNext` — arrow links with hideable text labels (`text` prop).
- `PaginationEllipsis` — non-interactive "more pages" marker.

## Usage

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>
```
