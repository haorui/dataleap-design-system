---
category: Chat
---

Chat message bubble with seven color variants, start/end alignment, interactive render targets, and emoji reaction pills.

## Components

- `BubbleGroup` — vertical flex stack grouping consecutive bubbles.
- `Bubble` — bubble wrapper; `variant` (`default | secondary | muted | tinted | outline | ghost | destructive`), `align` (`start | end`, end self-aligns right).
- `BubbleContent` — the rounded content surface; supports base-ui `render` prop to render as `button`/`a` with hover styles.
- `BubbleReactions` — absolute reaction pill; `side` (`top | bottom`), `align` (`start | end`).

## Usage

```tsx
import { Bubble, BubbleContent, BubbleGroup, BubbleReactions } from "dataleap-design-system"

<BubbleGroup>
  <Bubble variant="muted">
    <BubbleContent>Did you see the new pricing page?</BubbleContent>
  </Bubble>
  <Bubble align="end">
    <BubbleContent>Yes — shipping it this afternoon.</BubbleContent>
    <BubbleReactions align="start">
      <span>👍</span>
    </BubbleReactions>
  </Bubble>
</BubbleGroup>
```

```tsx
// Clickable bubble via render prop
<Bubble variant="outline">
  <BubbleContent render={<button type="button" onClick={openDoc} />}>
    Tap to view the shared document
  </BubbleContent>
</Bubble>
```
