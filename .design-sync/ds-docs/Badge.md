---
category: Data Display
---

Compact pill label for statuses, counts, and metadata. Variants: `default`, `secondary`, `destructive`, `outline`, `ghost`, `link`.

## Components

- `Badge` — the badge element; `variant` prop selects the style, `render` prop swaps the underlying tag (e.g. `<a>`). Icons inside get `size-3`; mark them `data-icon="inline-start"` / `"inline-end"` for tightened edge padding.
- `badgeVariants` — the cva class factory, for styling arbitrary elements as badges.

## Usage

```tsx
import { Badge } from "shadcn-stock-design"
import { BadgeCheck } from "lucide-react"

<Badge variant="secondary">Draft</Badge>
<Badge>
  <BadgeCheck data-icon="inline-start" /> Verified
</Badge>
```

```tsx
// Render as a link
<Badge variant="outline" render={<a href="/changelog" />}>
  Changelog
</Badge>
```
