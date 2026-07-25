---
category: Forms
---

Slider built on the base-ui Slider primitive; value is an array — one entry per thumb — with edge-aligned thumbs and a primary range fill.

## Components

- `Slider` — full slider (root/control/track/range/thumbs composed internally). Props: base-ui `SliderPrimitive.Root.Props` — `defaultValue`/`value` as `number[]` (one thumb per entry), `min` (default 0), `max` (default 100), `step`, `disabled`, `orientation`.

## Usage

```tsx
import { Label, Slider } from "dataleap-design-system"

<div style={{ display: "flex", flexDirection: "column", gap: 10, width: 320 }}>
  <Label htmlFor="volume">Notification volume</Label>
  <Slider id="volume" defaultValue={[60]} />
</div>
```

```tsx
import { Slider } from "dataleap-design-system"

// two-thumb range slider
<Slider defaultValue={[200, 650]} min={0} max={1000} step={10} />
```
