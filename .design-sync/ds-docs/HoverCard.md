---
category: Overlays
---

Hover-triggered preview card anchored to a link or trigger (base-ui PreviewCard).

## Components

- `HoverCard` — root; `open` / `defaultOpen` / `onOpenChange`, plus hover delay props.
- `HoverCardTrigger` — element that opens the card on hover; compose via `render` (e.g. a link-variant Button).
- `HoverCardContent` — portaled anchored card (w-64); positioning via `side` (default bottom), `sideOffset`, `align`, `alignOffset`.

## Usage

```tsx
import {
  Avatar, AvatarFallback, Button,
  HoverCard, HoverCardContent, HoverCardTrigger,
} from "dataleap-design-system"

<HoverCard>
  <HoverCardTrigger render={<Button variant="link" />}>@nextjs</HoverCardTrigger>
  <HoverCardContent>
    <div style={{ display: "flex", gap: 12 }}>
      <Avatar><AvatarFallback>VC</AvatarFallback></Avatar>
      <div>
        <div>@nextjs</div>
        <div>The React framework — created and maintained by Vercel.</div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>
```
