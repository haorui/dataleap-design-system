---
category: Forms
---

A searchable select built on the Base UI Combobox primitive, supporting single selection, a clear button, and multi-select with removable chips.

## Components

- `Combobox` — root; accepts `items`, `value`/`defaultValue`, `multiple`, `disabled` (Base UI `Combobox.Root`).
- `ComboboxInput` — text input wrapped in an InputGroup; `showTrigger` (default true) and `showClear` toggle the trailing buttons.
- `ComboboxTrigger` — chevron button that opens the popup.
- `ComboboxContent` — portalled popup; accepts `side`, `align`, offsets, and `anchor` (for chips mode).
- `ComboboxList` — scrollable listbox; children may be a render function `(item) => …`.
- `ComboboxItem` — option row with check indicator.
- `ComboboxGroup` / `ComboboxLabel` — grouping wrapper and muted group heading.
- `ComboboxCollection` — renders filtered items from a collection.
- `ComboboxEmpty` — "no results" message, shown when the list is empty.
- `ComboboxSeparator` — divider between groups.
- `ComboboxChips` / `ComboboxChip` / `ComboboxChipsInput` — multi-select chip container, removable chip, and inline input.
- `ComboboxValue` — renders the current value (accepts a render function).
- `useComboboxAnchor` — ref hook to anchor the popup to the chips container.

## Usage

```tsx
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "dataleap-design-system"

const frameworks = ["Next.js", "SvelteKit", "Nuxt", "Remix", "Astro"]

export function FrameworkCombobox() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Search framework…" />
      <ComboboxContent>
        <ComboboxEmpty>No framework found.</ComboboxEmpty>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

Multi-select with chips:

```tsx
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "dataleap-design-system"

export function LanguagePicker() {
  const anchor = useComboboxAnchor()
  const languages = ["English", "French", "German", "Japanese"]
  return (
    <Combobox items={languages} multiple defaultValue={["English"]}>
      <ComboboxChips ref={anchor}>
        <ComboboxValue>
          {(value: string[]) => (
            <>
              {value.map((v) => (
                <ComboboxChip key={v}>{v}</ComboboxChip>
              ))}
              <ComboboxChipsInput placeholder="Add language…" />
            </>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxList>
          {(item: string) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```
