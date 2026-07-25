---
category: Layout
---

Custom-styled scroll container (base-ui ScrollArea) with themed rounded thumbs replacing native scrollbars.

## Components

- `ScrollArea` — root + viewport; give it an explicit height (vertical) or width (horizontal) so content overflows; includes a vertical `ScrollBar` and corner by default.
- `ScrollBar` — standalone scrollbar; `orientation`: `"vertical"` (default) or `"horizontal"` — add a horizontal one for sideways scrolling.

## Usage

```tsx
import { ScrollArea, ScrollBar } from "dataleap-design-system"

export function ReleaseList() {
  return (
    <ScrollArea className="h-56 w-56 rounded-lg border">
      <div className="p-4">
        {releases.map((r) => (
          <div key={r} className="border-b py-1.5 text-sm">
            {r}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export function Filmstrip() {
  return (
    <ScrollArea className="w-96 rounded-lg border">
      <div className="flex w-max gap-3 p-4">{/* wide content */}</div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
```

For horizontal scrolling the inner content needs `w-max` (or a fixed width) so it exceeds the viewport.
