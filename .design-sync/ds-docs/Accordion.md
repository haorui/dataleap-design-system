---
category: Data Display
---

Vertically stacked expandable sections built on Base UI Accordion; each trigger shows a chevron that flips when expanded.

## Components

- `Accordion` — root; controls open panels via `value` / `defaultValue` (array of item values). Supports multiple open items.
- `AccordionItem` — one section; requires a unique `value`, draws a bottom border between items.
- `AccordionTrigger` — the clickable header row; chevron down/up icons are built in.
- `AccordionContent` — the animated collapsible panel body.

## Usage

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn-stock-design"

<Accordion defaultValue={["shipping"]}>
  <AccordionItem value="shipping">
    <AccordionTrigger>How long does shipping take?</AccordionTrigger>
    <AccordionContent>
      Standard shipping takes 3-5 business days.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="returns">
    <AccordionTrigger>What is your return policy?</AccordionTrigger>
    <AccordionContent>30-day returns on unused items.</AccordionContent>
  </AccordionItem>
</Accordion>
```
