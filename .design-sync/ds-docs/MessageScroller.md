---
category: Chat
---

Auto-scrolling chat viewport that pins to the newest message and shows a scroll-to-end button when the user scrolls away; requires a provider and a bounded height.

## Components

- `MessageScrollerProvider` — context provider; must wrap the scroller (one per chat surface).
- `MessageScroller` — root region; fills its parent, so give the parent an explicit height.
- `MessageScrollerViewport` — the overflow-y-auto scroll container with fade and thin scrollbar.
- `MessageScrollerContent` — inner column (gap-6 by default) that grows from the bottom.
- `MessageScrollerItem` — wraps each message for content-visibility virtualization; `scrollAnchor` opts an item in as the scroll anchor.
- `MessageScrollerButton` — floating scroll-to-end (or start via `direction="start"`) button; auto-hides at the boundary.
- `useMessageScroller`, `useMessageScrollerScrollable`, `useMessageScrollerVisibility` — hooks re-exported from the `@shadcn/react` primitive for custom controls.

## Usage

```tsx
import {
  MessageScroller, MessageScrollerButton, MessageScrollerContent,
  MessageScrollerItem, MessageScrollerProvider, MessageScrollerViewport,
} from "shadcn-stock-design"

<div style={{ height: 340 }}>
  <MessageScrollerProvider>
    <MessageScroller>
      <MessageScrollerViewport>
        <MessageScrollerContent>
          {messages.map((m) => (
            <MessageScrollerItem key={m.id}>
              {/* Message / Bubble markup */}
            </MessageScrollerItem>
          ))}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  </MessageScrollerProvider>
</div>
```
