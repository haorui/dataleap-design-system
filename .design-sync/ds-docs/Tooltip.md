---
category: Overlays
---

Small inverted label with arrow shown on hover/focus; requires a `TooltipProvider` ancestor.

## Components

- `TooltipProvider` — context provider (delay defaults to 0 in this kit); wrap the app or a subtree once.
- `Tooltip` — root per tooltip; `open` / `defaultOpen` / `onOpenChange`.
- `TooltipTrigger` — hover/focus target; compose with a button via `render`.
- `TooltipContent` — portaled pill with arrow; `side` (default top), `sideOffset`, `align`, `alignOffset`. Has special styling for an embedded `Kbd` shortcut chip.

## Usage

```tsx
import {
  Button, Kbd, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "dataleap-design-system"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

With a shortcut chip:

```tsx
<Tooltip>
  <TooltipTrigger render={<Button size="icon" aria-label="New item" />}>+</TooltipTrigger>
  <TooltipContent>New item <Kbd>⌘N</Kbd></TooltipContent>
</Tooltip>
```
