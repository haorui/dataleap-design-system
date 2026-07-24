---
category: Data Display
---
Surface container with header, content, and footer slots; `size="sm"` tightens all internal spacing via the `--card-spacing` variable.

## Components

- `Card` — root container (`size`: `default | sm`); ring border, rounded-xl, vertical flex.
- `CardHeader` — grid header; auto-adds an action column when a `CardAction` is present.
- `CardTitle` — heading text (font-heading, medium).
- `CardDescription` — muted supporting text.
- `CardAction` — top-right slot inside the header (badge, icon button, menu).
- `CardContent` — main body block.
- `CardFooter` — muted footer band with top border, for actions.

## Usage

```tsx
import {
  Card, CardHeader, CardTitle, CardDescription, CardAction,
  CardContent, CardFooter, Badge, Button,
} from "shadcn-stock-design"

<Card style={{ width: 360 }}>
  <CardHeader>
    <CardTitle>Monthly report</CardTitle>
    <CardDescription>Usage summary for June 2026.</CardDescription>
    <CardAction><Badge variant="secondary">New</Badge></CardAction>
  </CardHeader>
  <CardContent>Your workspace processed 12,480 requests this month.</CardContent>
  <CardFooter style={{ gap: 8 }}>
    <Button size="sm">View details</Button>
    <Button size="sm" variant="ghost">Dismiss</Button>
  </CardFooter>
</Card>
```

An `<img>` placed as the Card's first child bleeds to the card edges and rounds its top corners automatically.
