---
category: Overlays
---

Panel that slides in from a screen edge over a blurred backdrop — for forms, navigation, or settings.

## Components

- `Sheet` — root; `open` / `defaultOpen` / `onOpenChange`.
- `SheetTrigger` — opens the sheet; compose with a button via `render`.
- `SheetContent` — portaled edge panel; `side="top" | "right" | "bottom" | "left"` (default right), `showCloseButton` (default true).
- `SheetHeader` — padded title/description stack at the top.
- `SheetTitle` — heading-styled title.
- `SheetDescription` — muted supporting text.
- `SheetFooter` — padded action stack pushed to the bottom (`mt-auto`).
- `SheetClose` — closes the sheet; compose with a button via `render`.
- `SheetOverlay`, `SheetPortal` — low-level pieces used by `SheetContent`.

## Usage

```tsx
import {
  Button, Sheet, SheetClose, SheetContent, SheetDescription,
  SheetFooter, SheetHeader, SheetTitle, SheetTrigger,
} from "shadcn-stock-design"

<Sheet>
  <SheetTrigger render={<Button variant="outline" />}>Edit profile</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>Click save when you're done.</SheetDescription>
    </SheetHeader>
    {/* body content */}
    <SheetFooter>
      <Button>Save changes</Button>
      <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>
```
