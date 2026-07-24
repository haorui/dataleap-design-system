---
category: Data Display
---

Centered empty-state block for "nothing here yet" screens: media/icon, title, description, and a call-to-action area.

## Components

- `Empty` — centered flex container (note: `border-dashed` style is declared but no border width; add your own border if you want a framed state).
- `EmptyHeader` — groups media, title, and description with tight spacing.
- `EmptyMedia` — icon/illustration slot; `variant="icon"` renders a muted rounded tile sized for a 16px icon, `variant="default"` is transparent.
- `EmptyTitle` — heading text.
- `EmptyDescription` — muted supporting copy; links inside get underlines.
- `EmptyContent` — action area below the header, for buttons or extra info.

## Usage

```tsx
import { Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "shadcn-stock-design"
import { FolderOpen, Plus } from "lucide-react"

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <FolderOpen />
    </EmptyMedia>
    <EmptyTitle>No projects yet</EmptyTitle>
    <EmptyDescription>
      Get started by creating your first project.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button size="sm">
      <Plus data-icon="inline-start" /> New project
    </Button>
  </EmptyContent>
</Empty>
```
