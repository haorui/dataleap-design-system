---
category: Forms
---

Binary checkbox built on the base-ui Checkbox primitive; checked state fills with the primary token and shows a check icon.

## Components

- `Checkbox` — root + indicator in one component (base-ui `CheckboxPrimitive.Root.Props`: `defaultChecked`, `checked`, `disabled`, `aria-invalid`, `id`, …).

## Usage

```tsx
import { Checkbox, Label } from "dataleap-design-system"

<div style={{ display: "flex", gap: 8, alignItems: "center" }}>
  <Checkbox id="updates" defaultChecked />
  <Label htmlFor="updates">Email me product updates</Label>
</div>
```

```tsx
import { Checkbox } from "dataleap-design-system"

<Checkbox defaultChecked disabled aria-label="Locked setting" />
<Checkbox aria-invalid="true" aria-label="Required consent" />
```
