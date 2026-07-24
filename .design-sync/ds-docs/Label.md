---
category: Forms
---

Form field label (`text-sm font-medium`, flex row with `gap-2`); dims automatically next to a disabled peer control or inside a `group[data-disabled=true]`.

## Components

- `Label` — styled `<label>` (all `React.ComponentProps<"label">`: `htmlFor`, children, …).

## Usage

```tsx
import { Input, Label } from "shadcn-stock-design"

<div style={{ display: "flex", flexDirection: "column", gap: 6, width: 320 }}>
  <Label htmlFor="email">Work email</Label>
  <Input id="email" type="email" placeholder="you@company.com" />
</div>
```

```tsx
import { Checkbox, Label } from "shadcn-stock-design"

<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
  <Checkbox id="remember" defaultChecked />
  <Label htmlFor="remember">Remember this device for 30 days</Label>
</div>
```
