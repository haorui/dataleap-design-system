---
category: Overlays
---

Anchored action menu opened from a trigger button, built on Base UI Menu with items, groups, checkbox/radio items, submenus, and keyboard shortcuts.

## Components

- `DropdownMenu` — root; controls open state (`open`/`defaultOpen`, `modal`).
- `DropdownMenuTrigger` — element that opens the menu; use `render={<Button …/>}` to style.
- `DropdownMenuContent` — portaled popup; accepts `align`/`alignOffset`/`side`/`sideOffset`.
- `DropdownMenuGroup` — groups related items; required wrapper for `DropdownMenuLabel`.
- `DropdownMenuLabel` — muted group heading (must live inside a Group or RadioGroup).
- `DropdownMenuItem` — action row; `variant="destructive"`, `inset`, `disabled`.
- `DropdownMenuCheckboxItem` — toggleable item with right-aligned check indicator.
- `DropdownMenuRadioGroup` / `DropdownMenuRadioItem` — single-select set with check indicator.
- `DropdownMenuSeparator` — hairline divider.
- `DropdownMenuShortcut` — right-aligned keyboard hint inside an item.
- `DropdownMenuSub` / `DropdownMenuSubTrigger` / `DropdownMenuSubContent` — nested submenu.
- `DropdownMenuPortal` — explicit portal wrapper (Content already portals itself).

## Usage

```tsx
<DropdownMenu>
  <DropdownMenuTrigger render={<Button variant="outline">My Account</Button>} />
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>signed in as ana@acme.com</DropdownMenuLabel>
      <DropdownMenuItem>
        <User /> Profile
        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <Trash2 /> Delete workspace
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

```tsx
<DropdownMenuRadioGroup value="bottom">
  <DropdownMenuLabel>Panel position</DropdownMenuLabel>
  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>
```
