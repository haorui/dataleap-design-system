---
category: Data Display
---

Inline annotation row for timelines and message streams — an icon plus muted text, optionally framed as a centered separator or underlined row.

## Components

- `Marker` — root row; `variant`: `default` (plain row), `separator` (centered content between hairlines), `border` (bottom border); supports base-ui `render` prop for custom tags.
- `MarkerIcon` — fixed 16px slot for a leading icon.
- `MarkerContent` — text span; centers itself in the `separator` variant and wraps long content.
- `markerVariants` — cva helper for the variant classes.

## Usage

```tsx
import { Marker, MarkerContent, MarkerIcon } from "shadcn-stock-design"
import { CalendarIcon, GitCommitIcon } from "lucide-react"

export function Timeline() {
  return (
    <div className="grid gap-3">
      <Marker variant="separator">
        <MarkerIcon>
          <CalendarIcon />
        </MarkerIcon>
        <MarkerContent>June 12, 2026</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <GitCommitIcon />
        </MarkerIcon>
        <MarkerContent>Deployed v2.4.1 to production</MarkerContent>
      </Marker>
    </div>
  )
}
```
