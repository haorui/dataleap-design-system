---
category: Layout
---

Draggable split layouts built on react-resizable-panels v4 (Group/Panel/Separator), with hairline handles and an optional grip pill.

## Components

- `ResizablePanelGroup` — flex group of panels; **`orientation`**: `"horizontal"` | `"vertical"` (react-resizable-panels v4 renamed the old `direction` prop). Needs a sized parent (`h-full`/explicit height).
- `ResizablePanel` — one pane; `defaultSize`, `minSize`, `maxSize` as percentages.
- `ResizableHandle` — drag separator on the border token; `withHandle` adds the small grip pill.

## Usage

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "shadcn-stock-design"

export function SplitView() {
  return (
    <div className="h-48 w-full rounded-lg border">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center">Sidebar</div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize={70}>
              <div className="flex h-full items-center justify-center">Editor</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={30}>
              <div className="flex h-full items-center justify-center">Terminal</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
```
