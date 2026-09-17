---
category: Feedback
---
Inline callout banner with icon slot, title, description, and an optional top-right action.

## Components

- `Alert` — root container; `variant`: `default | destructive | info | success | warning | critical`. Renders a grid; a direct child `<svg>` (lucide icon) sits in the left column and title/description flow right of it.
- `AlertTitle` — bold single-line heading row.
- `AlertDescription` — muted body text; supports multiple paragraphs and inline links.
- `AlertAction` — absolutely positioned top-right slot (root adds right padding automatically); typically holds a small `Button`.

Use `info` for neutral informational updates.
Use `success` for completed or positive outcomes.
Use `warning` when attention is needed before a threshold or deadline.
Use `critical` only for immediate interruption: it uses a solid fill and is restricted to message components (never a data row or card).

## Usage

```tsx
import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from "dataleap-design-system"
import { CheckCircle2Icon, InfoIcon, OctagonAlertIcon, TriangleAlertIcon } from "lucide-react"

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
<Alert variant="info">
  <InfoIcon />
  <AlertTitle>Scheduled maintenance</AlertTitle>
  <AlertDescription>Maintenance starts Saturday at 02:00 UTC.</AlertDescription>
</Alert>

<Alert variant="success">
  <CheckCircle2Icon />
  <AlertTitle>Changes saved</AlertTitle>
  <AlertDescription>Your workspace settings are up to date.</AlertDescription>
</Alert>

<Alert variant="warning">
  <TriangleAlertIcon />
  <AlertTitle>Storage nearly full</AlertTitle>
  <AlertDescription>Review large files before the workspace reaches its limit.</AlertDescription>
</Alert>

<Alert variant="critical">
  <OctagonAlertIcon />
  <AlertTitle>Payment failed</AlertTitle>
  <AlertDescription>
    <a href="/billing">Update your billing details</a> to keep the workspace active.
  </AlertDescription>
</Alert>
```

```tsx
<Alert variant="destructive">
  <OctagonAlertIcon />
  <AlertTitle>Payment failed</AlertTitle>
  <AlertDescription>Update your billing details to keep the workspace active.</AlertDescription>
</Alert>
```
