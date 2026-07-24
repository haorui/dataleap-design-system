---
category: Forms
---

Multi-line text field that auto-grows with its content (`field-sizing-content`, min-height 16); error styling via `aria-invalid`.

## Components

- `Textarea` — styled `<textarea>` (all `React.ComponentProps<"textarea">`: `placeholder`, `disabled`, `defaultValue`, `aria-invalid`, `rows`, …).

## Usage

```tsx
import { Label, Textarea } from "shadcn-stock-design"

<div style={{ display: "flex", flexDirection: "column", gap: 6, width: 360 }}>
  <Label htmlFor="notes">Release notes</Label>
  <Textarea id="notes" placeholder="What changed in this release?" />
</div>
```

```tsx
import { Textarea } from "shadcn-stock-design"

<Textarea defaultValue="Summary is too short" aria-invalid="true" />
```
