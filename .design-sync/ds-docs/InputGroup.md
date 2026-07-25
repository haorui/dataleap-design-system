---
category: Forms
---

A bordered container that composes an input or textarea with icon, text, keyboard-hint, and button addons, sharing one focus ring.

## Components

- `InputGroup` — the bordered flex container; paints focus and invalid rings for the whole group.
- `InputGroupAddon` — addon slot; `align`: `"inline-start" | "inline-end" | "block-start" | "block-end"` (block aligns stack above/below the control).
- `InputGroupInput` — borderless `Input` wired as the group's control.
- `InputGroupTextarea` — borderless `Textarea` control (group grows to auto height).
- `InputGroupText` — muted inline text/icon label for addons.
- `InputGroupButton` — compact `Button`; `size`: `"xs" | "sm" | "icon-xs" | "icon-sm"`.

## Usage

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Kbd,
} from "dataleap-design-system"
import { SearchIcon } from "lucide-react"

export function SearchField() {
  return (
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search documentation…" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
```

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "dataleap-design-system"
import { InfoIcon } from "lucide-react"

export function FeedbackBox() {
  return (
    <InputGroup>
      <InputGroupTextarea placeholder="Leave feedback for the team…" rows={3} />
      <InputGroupAddon align="block-end">
        <InputGroupText>
          <InfoIcon /> Markdown is supported
        </InputGroupText>
        <InputGroupButton variant="default" style={{ marginLeft: "auto" }}>
          Submit
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
```
