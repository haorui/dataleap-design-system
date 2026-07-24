---
category: Overlays
---

Command palette built on cmdk: fuzzy-filtered list with groups, shortcuts, and an empty state; renders inline or inside a dialog.

## Components

- `Command` — root container (popover-styled card); filtering is automatic from input value.
- `CommandDialog` — wraps a Command in a centered Dialog for ⌘K palettes.
- `CommandInput` — search field with leading search icon.
- `CommandList` — scrollable results region.
- `CommandEmpty` — shown when the query matches nothing.
- `CommandGroup` — labeled section (`heading` prop).
- `CommandItem` — result row; supports `disabled`, `onSelect`, selected-row highlight, and a trailing check when `data-checked`.
- `CommandShortcut` — right-aligned keyboard hint.
- `CommandSeparator` — divider between groups.

## Usage

```tsx
<Command className="w-[420px] border">
  <CommandInput placeholder="Type a command or search…" />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar /> Schedule meeting
      </CommandItem>
      <CommandItem>
        <FileText /> Search notes
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <Settings /> Settings
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

```tsx
<CommandDialog open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Search…" />
  <CommandList>{/* groups/items */}</CommandList>
</CommandDialog>
```
