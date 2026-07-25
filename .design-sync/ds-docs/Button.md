---
category: Forms
---
Clickable action trigger with six visual variants and nine sizes, built on the base-ui Button primitive.

## Components

- `Button` — the single export; `variant`: `default | outline | secondary | ghost | destructive | link`, `size`: `default | xs | sm | lg | icon | icon-xs | icon-sm | icon-lg`.
- `buttonVariants` — the cva class builder, for styling a non-button element like a button.

## Usage

```tsx
import { Button } from "dataleap-design-system"
import { ArrowRight, Trash2 } from "lucide-react"

<Button>Save changes</Button>
<Button variant="outline">Preview</Button>
<Button variant="destructive">
  <Trash2 data-icon="inline-start" /> Remove member
</Button>
<Button>
  Continue <ArrowRight data-icon="inline-end" />
</Button>
<Button size="icon" aria-label="Add item"><Plus /></Button>
```

Mark icons with `data-icon="inline-start"` / `data-icon="inline-end"` so padding tightens on the icon side. `disabled` renders at 50% opacity and blocks pointer events.
