---
category: Overlays
---

Swipeable drawer that slides from a screen edge, with optional snap points and grab handle (base-ui Drawer).

## Components

- `Drawer` — root; `open` / `defaultOpen` / `onOpenChange`, `swipeDirection="down" | "up" | "left" | "right"` (down = bottom drawer, default), `showSwipeHandle`, `snapPoints`, `modal`.
- `DrawerTrigger` — opens the drawer; compose with a button via `render`.
- `DrawerContent` — portaled panel (viewport + popup + scrollable content); must be used inside `Drawer`.
- `DrawerHeader` — padded title/description stack (centered for vertical drawers).
- `DrawerTitle` — heading-styled title.
- `DrawerDescription` — muted supporting text.
- `DrawerFooter` — padded action stack pushed to the bottom.
- `DrawerClose` — closes the drawer; compose with a button via `render`.
- `DrawerSwipeHandle` — the grab handle (rendered automatically with `showSwipeHandle`).
- `DrawerOverlay`, `DrawerPortal` — low-level pieces used by `DrawerContent`.

## Usage

```tsx
import {
  Button, Drawer, DrawerClose, DrawerContent, DrawerDescription,
  DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,
} from "shadcn-stock-design"

<Drawer showSwipeHandle>
  <DrawerTrigger render={<Button variant="outline" />}>Open drawer</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    {/* body content */}
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

Side drawer: `<Drawer swipeDirection="right">…</Drawer>`.
