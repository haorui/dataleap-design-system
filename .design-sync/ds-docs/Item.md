---
category: Data Display
---

Flexible list-row primitive: media + content + actions in one row, with optional header/footer rows, groups, and separators. Variants: `default`, `outline`, `muted`; sizes: `default`, `sm`, `xs`.

## Components

- `Item` — the row; `variant` and `size` props, `render` prop to swap the tag (e.g. `<a>`).
- `ItemMedia` — leading slot; `variant="icon"` for 16px icons, `variant="image"` for a 40px rounded thumbnail.
- `ItemContent` — flexible middle column holding title/description.
- `ItemTitle` — single-line medium-weight title.
- `ItemDescription` — muted, two-line-clamped description.
- `ItemActions` — trailing controls (buttons, badges, chevrons).
- `ItemHeader` — full-width row above the content (title + meta).
- `ItemFooter` — full-width row below the content.
- `ItemGroup` — vertical `role="list"` stack of items.
- `ItemSeparator` — horizontal rule between items in a group.

## Usage

```tsx
import { Button, Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "shadcn-stock-design"
import { Globe } from "lucide-react"

<Item variant="outline">
  <ItemMedia variant="icon">
    <Globe />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Production deployment</ItemTitle>
    <ItemDescription>Deployed 12 minutes ago.</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="outline" size="sm">View</Button>
  </ItemActions>
</Item>
```

```tsx
import { Item, ItemContent, ItemGroup, ItemSeparator, ItemTitle } from "shadcn-stock-design"

<ItemGroup>
  <Item><ItemContent><ItemTitle>First</ItemTitle></ItemContent></Item>
  <ItemSeparator />
  <Item><ItemContent><ItemTitle>Second</ItemTitle></ItemContent></Item>
</ItemGroup>
```
