---
category: Feedback
---
Pulsing muted placeholder block for loading states; shape it entirely with className/style.

## Components

- `Skeleton` — a single `div` with `animate-pulse rounded-md bg-muted`; give it explicit width/height (and `rounded-full` for avatar circles).

## Usage

```tsx
import { Skeleton } from "shadcn-stock-design"

<div className="flex items-center gap-3">
  <Skeleton className="size-12 rounded-full" />
  <div className="grid flex-1 gap-2">
    <Skeleton className="h-3.5 w-3/5" />
    <Skeleton className="h-3 w-2/5" />
  </div>
</div>
```
