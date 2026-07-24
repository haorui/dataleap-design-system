---
category: Overlays
---

Right-click menu built on Base UI ContextMenu, opening at the pointer position over a trigger region, with the same item vocabulary as DropdownMenu.

## Components

- `ContextMenu` — root (always modal; no `modal` prop).
- `ContextMenuTrigger` — the right-clickable region.
- `ContextMenuContent` — portaled popup anchored to the pointer.
- `ContextMenuGroup` — item group; required wrapper for `ContextMenuLabel`.
- `ContextMenuLabel` — muted heading (must live inside a Group or RadioGroup).
- `ContextMenuItem` — action row; `variant="destructive"`, `inset`, `disabled`.
- `ContextMenuCheckboxItem` — toggleable item with check indicator.
- `ContextMenuRadioGroup` / `ContextMenuRadioItem` — single-select set.
- `ContextMenuSeparator` — hairline divider.
- `ContextMenuShortcut` — right-aligned keyboard hint.
- `ContextMenuSub` / `ContextMenuSubTrigger` / `ContextMenuSubContent` — nested submenu.
- `ContextMenuPortal` — explicit portal wrapper.

## Usage

```tsx
<ContextMenu>
  <ContextMenuTrigger>
    <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
      Right-click here
    </div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuGroup>
      <ContextMenuLabel>report.pdf</ContextMenuLabel>
      <ContextMenuItem>
        Rename <ContextMenuShortcut>F2</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuGroup>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Move to</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Archive</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```
