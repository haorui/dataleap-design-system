---
category: Layout
---

Hairline divider on the border token, horizontal or vertical, built on the base-ui Separator primitive.

## Components

- `Separator` — `orientation`: `"horizontal"` (default, 1px tall, full width) or `"vertical"` (1px wide, stretches to the flex row via `self-stretch`).

## Usage

```tsx
import { Separator } from "shadcn-stock-design"

export function Section() {
  return (
    <div>
      <h4 className="text-sm font-medium">Design tokens</h4>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
  )
}
```

Vertical separators size themselves with `self-stretch`, so the parent flex row needs an explicit height (or content tall enough to stretch against).
