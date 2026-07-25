---
category: Data Display
---

Unstyled show/hide primitive (Base UI Collapsible) for toggling a single content region; bring your own trigger styling, typically a Button via the `render` prop.

## Components

- `Collapsible` — root; `defaultOpen` / `open` + `onOpenChange` control state.
- `CollapsibleTrigger` — toggles the panel; pass `render={<Button … />}` to style it as a button.
- `CollapsibleContent` — the panel that mounts/hides with open state.

## Usage

```tsx
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "dataleap-design-system"
import { ChevronsUpDown } from "lucide-react"

<Collapsible defaultOpen>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <span>@haorui starred 3 repositories</span>
    <CollapsibleTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Toggle" />}>
      <ChevronsUpDown />
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent>
    {/* rows revealed when open */}
  </CollapsibleContent>
</Collapsible>
```
