---
category: Navigation
---

Hierarchical location trail with muted links, a foreground current page, and swappable separators.

## Components

- `Breadcrumb` — `nav` landmark with `aria-label="breadcrumb"`.
- `BreadcrumbList` — flex `ol` that lays out items and separators.
- `BreadcrumbItem` — one `li` entry.
- `BreadcrumbLink` — ancestor link (supports `render` for router links); hover shifts to foreground.
- `BreadcrumbPage` — current page span (`aria-current="page"`).
- `BreadcrumbSeparator` — chevron by default; pass children (e.g. `<Slash />`) to customize.
- `BreadcrumbEllipsis` — collapsed-middle indicator for long trails.

## Usage

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Invoices</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```
