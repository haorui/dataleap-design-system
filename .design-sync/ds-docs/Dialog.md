---
category: Overlays
---

Modal dialog centered over a blurred backdrop, for focused tasks like editing or confirming.

## Components

- `Dialog` — root; controls open state (`open` / `defaultOpen` / `onOpenChange`).
- `DialogTrigger` — opens the dialog; compose with a button via `render`.
- `DialogContent` — portaled centered panel (includes overlay); `showCloseButton` (default true) renders the corner X.
- `DialogHeader` — vertical stack for title + description.
- `DialogTitle` — heading-styled title.
- `DialogDescription` — muted supporting text.
- `DialogFooter` — muted action bar pinned to the bottom edge; `showCloseButton` adds an outline Close button.
- `DialogClose` — closes the dialog; compose with a button via `render`.
- `DialogOverlay`, `DialogPortal` — low-level pieces, already used by `DialogContent`.

## Usage

```tsx
import {
  Button, Dialog, DialogClose, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "dataleap-design-system"

<Dialog>
  <DialogTrigger render={<Button variant="outline" />}>Edit profile</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>Make changes and save when done.</DialogDescription>
    </DialogHeader>
    {/* form fields */}
    <DialogFooter>
      <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
      <Button>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```
