---
category: Forms
---

A styled wrapper around the native `<select>` element with a custom chevron icon, for forms that want platform-native dropdown behavior.

## Components

- `NativeSelect` — wrapper div + native `<select>`; `size`: `"sm" | "default"`; all native select props (`disabled`, `defaultValue`, `aria-invalid`, …) pass through.
- `NativeSelectOption` — styled native `<option>`.
- `NativeSelectOptGroup` — styled native `<optgroup>` (use its `label` prop).

## Usage

```tsx
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "dataleap-design-system"

export function CitySelect() {
  return (
    <NativeSelect defaultValue="berlin" style={{ width: 240 }}>
      <NativeSelectOptGroup label="Europe">
        <NativeSelectOption value="berlin">Berlin</NativeSelectOption>
        <NativeSelectOption value="paris">Paris</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Americas">
        <NativeSelectOption value="new-york">New York</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}
```
