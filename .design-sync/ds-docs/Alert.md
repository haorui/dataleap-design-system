---
category: Feedback
---
Inline callout banner with icon slot, title, description, and an optional top-right action.

## Components

- `Alert` — root container; `variant`: `default | destructive`. Renders a grid; a direct child `<svg>` (lucide icon) sits in the left column and title/description flow right of it.
- `AlertTitle` — bold single-line heading row.
- `AlertDescription` — muted body text; supports multiple paragraphs and inline links.
- `AlertAction` — absolutely positioned top-right slot (root adds right padding automatically); typically holds a small `Button`.

## Usage

```tsx
import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "shadcn-stock-design"
import { CheckCircle2Icon, OctagonAlertIcon } from "lucide-react"

<Alert>
  <CheckCircle2Icon />
  <AlertTitle>Changes saved</AlertTitle>
  <AlertDescription>Your workspace settings have been updated.</AlertDescription>
  <AlertAction>
    <Button variant="outline" size="sm">Undo</Button>
  </AlertAction>
</Alert>
```

```tsx
<Alert variant="destructive">
  <OctagonAlertIcon />
  <AlertTitle>Payment failed</AlertTitle>
  <AlertDescription>Update your billing details to keep the workspace active.</AlertDescription>
</Alert>
```
