---
category: Forms
---

A styled dropdown select built on the Base UI Select primitive, with trigger sizes, grouped options, and keyboard-accessible popup list.

## Components

- `Select` — root; accepts `items`, `value`/`defaultValue`, `disabled` (Base UI `Select.Root`).
- `SelectTrigger` — bordered button that opens the popup; `size`: `"default" | "sm"`.
- `SelectValue` — displays the selected item's label; supports `placeholder`.
- `SelectContent` — portalled popup; accepts `side`, `sideOffset`, `align`, `alignOffset`, `alignItemWithTrigger`.
- `SelectItem` — selectable option with check indicator.
- `SelectGroup` — groups related items.
- `SelectLabel` — muted heading for a group.
- `SelectSeparator` — horizontal divider between groups.
- `SelectScrollUpButton` / `SelectScrollDownButton` — scroll arrows shown when the list overflows (rendered automatically by `SelectContent`).

## Usage

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "dataleap-design-system"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
]

export function FruitSelect() {
  return (
    <Select items={fruits} defaultValue="banana">
      <SelectTrigger style={{ width: 200 }}>
        <SelectValue placeholder="Choose a fruit" />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
```
