---
category: Forms
---

Layout primitives for form fields: label, description, error, grouping, legends, and separators, with vertical/horizontal/responsive orientations.

## Components

- `Field` — one field row; `orientation`: `"vertical" | "horizontal" | "responsive"`; set `data-invalid` for error styling.
- `FieldLabel` — `Label` bound to the control; can wrap a whole `Field` to make selectable cards.
- `FieldContent` — column that groups title + description next to a control (checkbox/switch rows).
- `FieldTitle` — label-look title inside `FieldContent`.
- `FieldDescription` — muted helper text.
- `FieldError` — destructive error text; renders `children` or an `errors={[{ message }]}` array (list when multiple).
- `FieldGroup` — vertical stack of fields (container-query context for responsive orientation).
- `FieldSet` / `FieldLegend` — native fieldset wrapper; legend `variant`: `"legend" | "label"`.
- `FieldSeparator` — horizontal rule with optional centered label text.

## Usage

```tsx
import { Field, FieldDescription, FieldLabel, Input } from "dataleap-design-system"

export function UsernameField() {
  return (
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" placeholder="maria.gomez" />
      <FieldDescription>
        This is your public display name across the workspace.
      </FieldDescription>
    </Field>
  )
}
```

```tsx
import { Field, FieldError, FieldLabel, Input } from "dataleap-design-system"

export function EmailField() {
  return (
    <Field data-invalid>
      <FieldLabel htmlFor="email">Work email</FieldLabel>
      <Input id="email" type="email" aria-invalid />
      <FieldError errors={[{ message: "Enter a valid email address." }]} />
    </Field>
  )
}
```
