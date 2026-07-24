---
category: Forms
---

Two-state pressed/unpressed button (base-ui Toggle) for options like bold, pin, or Wi-Fi, in two variants and three sizes.

## Components

- `Toggle` — the toggle button; `variant` (`default | outline`), `size` (`sm | default | lg`), plus base-ui props `pressed`, `defaultPressed`, `onPressedChange`, `disabled`.
- `toggleVariants` — cva helper exported for styling custom toggle-like elements (used by ToggleGroup).

## Usage

```tsx
import { Toggle } from "shadcn-stock-design"
import { BoldIcon, WifiIcon } from "lucide-react"

<Toggle defaultPressed aria-label="Toggle bold">
  <BoldIcon />
</Toggle>
```

```tsx
// Outline with icon + label
<Toggle variant="outline" size="lg" onPressedChange={setWifi}>
  <WifiIcon data-icon="inline-start" /> Wi-Fi
</Toggle>
```
