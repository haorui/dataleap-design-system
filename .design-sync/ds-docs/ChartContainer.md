---
category: Data Display
---

Recharts wrapper that injects per-series color CSS variables from a `ChartConfig` and provides styled tooltip/legend renderers.

## Components

- `ChartContainer` — responsive wrapper; takes `config` (ChartConfig) and a single recharts chart as child; emits `--color-<key>` variables scoped to the chart.
- `ChartTooltip` — re-export of recharts `Tooltip`.
- `ChartTooltipContent` — styled tooltip body; props: `indicator` ("dot" | "line" | "dashed"), `hideLabel`, `hideIndicator`, `nameKey`, `labelKey`.
- `ChartLegend` — re-export of recharts `Legend`.
- `ChartLegendContent` — styled legend row; props: `hideIcon`, `nameKey`, `verticalAlign`.
- `ChartStyle` — internal style tag that emits the color variables (rarely used directly).
- `ChartConfig` (type) — `Record<key, { label?, icon?, color? | theme: { light, dark } }>`.

## Usage

```tsx
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "shadcn-stock-design"

const config = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

const data = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
]

export function TrafficChart() {
  return (
    <ChartContainer config={config} className="h-55 w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```
