---
category: Overlays
---

Confirmation modal for destructive or irreversible actions; blocks dismissal by outside click.

## Components

- `AlertDialog` — root; `open` / `defaultOpen` / `onOpenChange`.
- `AlertDialogTrigger` — opens the dialog; compose with a button via `render`.
- `AlertDialogContent` — portaled centered panel; `size="default" | "sm"` (sm centers text and grids the footer buttons).
- `AlertDialogHeader` — grid for optional media + title + description.
- `AlertDialogMedia` — square icon tile shown beside/above the title.
- `AlertDialogTitle` — heading-styled title.
- `AlertDialogDescription` — muted supporting text.
- `AlertDialogFooter` — muted action bar at the bottom edge.
- `AlertDialogAction` — a `Button` for the confirming action (does not auto-close).
- `AlertDialogCancel` — closes the dialog; outline `Button` by default.
- `AlertDialogOverlay`, `AlertDialogPortal` — low-level pieces used by `AlertDialogContent`.

## Usage

```tsx
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogMedia, AlertDialogTitle, AlertDialogTrigger, Button,
} from "shadcn-stock-design"
import { Trash2Icon } from "lucide-react"

<AlertDialog>
  <AlertDialogTrigger render={<Button variant="destructive" />}>Delete</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogMedia><Trash2Icon /></AlertDialogMedia>
      <AlertDialogTitle>Delete project?</AlertDialogTitle>
      <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```
