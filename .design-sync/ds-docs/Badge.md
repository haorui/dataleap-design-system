---
category: Data Display
---

Compact pill label for statuses, counts, and metadata. Variants: `default`, `secondary`, `destructive`, `info`, `success`, `warning`, `critical`, `outline`, `ghost`, `link`.

Use `info` for informational updates, `success` for positive or completed states, `warning` for attention or approaching limits, and `critical` for immediate high-severity interruption. `default` (primary) is for non-status emphasis such as “New”, “Beta”, or counts, not status.

## Components

- `Badge` — the badge element; `variant` prop selects the style, `render` prop swaps the underlying tag (e.g. `<a>`). Icons inside get `size-3`; mark them `data-icon="inline-start"` / `"inline-end"` for tightened edge padding.
- `badgeVariants` — the cva class factory, for styling arbitrary elements as badges.

## Usage

```tsx
import { Badge } from "dataleap-design-system"
import { BadgeCheck } from "lucide-react"

<Badge variant="secondary">Draft</Badge>
<Badge variant="success">
  <BadgeCheck data-icon="inline-start" /> Verified
</Badge>
```

```tsx
// Render as a link
<Badge variant="outline" render={<a href="/changelog" />}>
  Changelog
</Badge>
```
