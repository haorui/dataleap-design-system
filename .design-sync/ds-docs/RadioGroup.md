---
category: Forms
---

Single-choice option group built on base-ui Radio/RadioGroup; the group is a `grid` with `gap-2`, items must render inside `RadioGroup`.

## Components

- `RadioGroup` — group container (base-ui `RadioGroupPrimitive.Props`: `defaultValue`, `value`, `disabled`, …).
- `RadioGroupItem` — single radio button; pass a unique `value` (also `disabled`, `aria-invalid`, `id`).

## Usage

```tsx
import { Label, RadioGroup, RadioGroupItem } from "dataleap-design-system"

<RadioGroup defaultValue="comfortable" style={{ width: 260 }}>
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    <RadioGroupItem value="compact" id="compact" />
    <Label htmlFor="compact">Compact</Label>
  </div>
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    <RadioGroupItem value="comfortable" id="comfortable" />
    <Label htmlFor="comfortable">Comfortable</Label>
  </div>
</RadioGroup>
```
