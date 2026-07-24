---
category: Forms
---

Group of toggle buttons (base-ui ToggleGroup) for single or multiple selection, with shared variant/size, adjustable spacing (0 fuses into a segmented control), and vertical orientation.

## Components

- `ToggleGroup` — container; `variant`/`size` propagate to items via context, `spacing` (gap in spacing units, `0` joins items with shared borders), `orientation` (`horizontal | vertical`), base-ui props `defaultValue` (string array), `value`, `onValueChange`, `toggleMultiple`.
- `ToggleGroupItem` — one toggle inside the group; requires a `value`; inherits group variant/size.

## Usage

```tsx
import { ToggleGroup, ToggleGroupItem } from "shadcn-stock-design"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

// Multiple selection
<ToggleGroup toggleMultiple defaultValue={["bold"]}>
  <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
</ToggleGroup>
```

```tsx
// Joined segmented control, single selection
<ToggleGroup variant="outline" spacing={0} defaultValue={["center"]} onValueChange={setAlign}>
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>
```
