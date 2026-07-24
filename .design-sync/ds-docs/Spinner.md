---
category: Feedback
---
Spinning loading indicator — a lucide Loader2 icon with `animate-spin`, 16px by default.

## Components

- `Spinner` — accepts all `<svg>` props; resize with `className` (e.g. `size-6`) or inline style. Has `role="status"` / `aria-label="Loading"` built in.

## Usage

```tsx
import { Button, Spinner } from "shadcn-stock-design"

<Spinner />
<Spinner className="size-6" />

<div className="text-muted-foreground flex items-center gap-2 text-sm">
  <Spinner /> Syncing workspace…
</div>

<Button disabled>
  <Spinner data-icon="inline-start" /> Saving…
</Button>
```
