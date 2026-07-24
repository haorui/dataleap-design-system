---
category: Feedback
---
Determinate progress bar on the base-ui Progress primitive, with optional label and formatted value.

## Components

- `Progress` — root; takes `value` (0-100 by default, or `null` for indeterminate). Automatically renders the track + indicator after any children, so label/value go in as children. Give it an explicit width.
- `ProgressTrack` — the muted 4px-tall rounded track (rendered automatically by `Progress`; use directly only for custom composition).
- `ProgressIndicator` — the primary-colored fill (also rendered automatically).
- `ProgressLabel` — accessible label, medium-weight text.
- `ProgressValue` — right-aligned muted value; renders "45%" by default, or accepts a `(formattedValue, value) => ReactNode` child for custom formatting.

## Usage

```tsx
import { Progress, ProgressLabel, ProgressValue } from "shadcn-stock-design"

<Progress value={60} className="w-90" />

<Progress value={45} className="w-90">
  <ProgressLabel>Uploading assets</ProgressLabel>
  <ProgressValue />
</Progress>
```

```tsx
<Progress value={72}>
  <ProgressLabel>Storage used</ProgressLabel>
  <ProgressValue>{(_, value) => `${value} GB of 100 GB`}</ProgressValue>
</Progress>
```
