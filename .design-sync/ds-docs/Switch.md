---
category: Forms
---

Toggle switch built on the base-ui Switch primitive with two sizes (`sm`, `default`); checked state uses the primary token.

## Components

- `Switch` — root + thumb in one component (base-ui `SwitchPrimitive.Root.Props` plus `size?: "sm" | "default"`; `defaultChecked`, `checked`, `disabled`, `id`, …).

## Usage

```tsx
import { Label, Switch } from "dataleap-design-system"

<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: 300 }}>
  <Label htmlFor="tfa">Two-factor authentication</Label>
  <Switch id="tfa" defaultChecked />
</div>
```

```tsx
import { Switch } from "dataleap-design-system"

<Switch size="sm" defaultChecked aria-label="Beta features" />
<Switch defaultChecked disabled aria-label="Managed by admin" />
```
