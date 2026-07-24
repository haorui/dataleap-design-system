---
category: Data Display
---

Keyboard-key chip for documenting shortcuts, inline in prose or grouped into key sequences.

## Components

- `Kbd` — a single key rendered as a 20px muted rounded chip; adapts colors inside tooltips.
- `KbdGroup` — inline flex wrapper that spaces a sequence of keys (and optional separators like `+`).

## Usage

```tsx
import { Kbd, KbdGroup } from "shadcn-stock-design"

<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>
```

```tsx
<p>
  Press <Kbd>⌘</Kbd> <Kbd>S</Kbd> to save, or{" "}
  <KbdGroup>
    <Kbd>Ctrl</Kbd>
    <span>+</span>
    <Kbd>/</Kbd>
  </KbdGroup>{" "}
  for all shortcuts.
</p>
```
