---
category: Forms
---

Fuses adjacent buttons, inputs, selects, and text labels into a single segmented control, horizontally or vertically.

## Components

- `ButtonGroup` — the fusing container; `orientation`: `"horizontal" | "vertical"`; collapses inner radii and doubled borders of `data-slot` children.
- `ButtonGroupText` — static text/icon segment (e.g. a prefix like `https://`); supports `render` for custom elements.
- `ButtonGroupSeparator` — thin divider segment, useful inside split buttons.
- `buttonGroupVariants` — cva helper exposing the group classes.

## Usage

```tsx
import { Button, ButtonGroup, ButtonGroupSeparator } from "shadcn-stock-design"
import { ChevronDownIcon } from "lucide-react"

export function MergeSplitButton() {
  return (
    <ButtonGroup>
      <Button>Merge pull request</Button>
      <ButtonGroupSeparator />
      <Button size="icon" aria-label="More merge options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}
```

```tsx
import { Button, ButtonGroup, ButtonGroupText, Input } from "shadcn-stock-design"
import { SearchIcon } from "lucide-react"

export function SearchBar() {
  return (
    <ButtonGroup style={{ width: 300 }}>
      <ButtonGroupText>
        <SearchIcon />
      </ButtonGroupText>
      <Input placeholder="Search repositories…" />
      <Button variant="outline">Go</Button>
    </ButtonGroup>
  )
}
```
