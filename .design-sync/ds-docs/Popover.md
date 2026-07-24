---
category: Overlays
---

Click-triggered floating panel anchored to its trigger, for settings, forms, or rich content.

## Components

- `Popover` — root; `open` / `defaultOpen` / `onOpenChange`.
- `PopoverTrigger` — toggles the popover; compose with a button via `render`.
- `PopoverContent` — portaled anchored panel (w-72); positioning via `side` (default bottom), `sideOffset`, `align` (default center), `alignOffset`.
- `PopoverHeader` — title/description stack.
- `PopoverTitle` — medium-weight title.
- `PopoverDescription` — muted supporting text.

## Usage

```tsx
import {
  Button, Input, Label, Popover, PopoverContent,
  PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger,
} from "shadcn-stock-design"

<Popover>
  <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Dimensions</PopoverTitle>
      <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
    </PopoverHeader>
    <Label htmlFor="width">Width</Label>
    <Input id="width" defaultValue="100%" />
  </PopoverContent>
</Popover>
```
