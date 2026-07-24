---
category: Navigation
---

Desktop-app style horizontal menu bar (File / Edit / View…) whose menus reuse the DropdownMenu primitives.

## Components

- `Menubar` — bordered horizontal container for menus.
- `MenubarMenu` — one menu root (same API as `DropdownMenu`; supports `defaultOpen`).
- `MenubarTrigger` — the bar label; gets muted background when open.
- `MenubarContent` — the dropdown panel for a menu.
- `MenubarItem` — action row; `variant="destructive"`, `inset`, `disabled`.
- `MenubarCheckboxItem` — toggleable item with left check indicator.
- `MenubarRadioGroup` / `MenubarRadioItem` — single-select set with left indicator.
- `MenubarLabel` — heading row inside a group.
- `MenubarSeparator` — hairline divider.
- `MenubarShortcut` — right-aligned keyboard hint.
- `MenubarSub` / `MenubarSubTrigger` / `MenubarSubContent` — nested submenu.
- `MenubarGroup` / `MenubarPortal` — grouping and portal passthroughs.

## Usage

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email link</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked>Show Bookmarks Bar</MenubarCheckboxItem>
      <MenubarRadioGroup value="comfortable">
        <MenubarRadioItem value="compact">Compact</MenubarRadioItem>
        <MenubarRadioItem value="comfortable">Comfortable</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```
