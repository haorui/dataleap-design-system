---
category: Forms
---

Single-line text field built on the base-ui Input primitive; supports all native input types and shows error styling via `aria-invalid`.

## Components

- `Input` — styled `<input>` (all `React.ComponentProps<"input">`: `type`, `placeholder`, `disabled`, `readOnly`, `defaultValue`, `aria-invalid`, …).

## Usage

```tsx
import { Input, Label } from "shadcn-stock-design"

<div style={{ display: "flex", flexDirection: "column", gap: 6, width: 320 }}>
  <Label htmlFor="workspace">Workspace name</Label>
  <Input id="workspace" placeholder="acme-analytics" />
</div>
```

```tsx
import { Input } from "shadcn-stock-design"

<Input defaultValue="not-an-email" aria-invalid="true" />
<Input placeholder="Disabled field" disabled />
```
