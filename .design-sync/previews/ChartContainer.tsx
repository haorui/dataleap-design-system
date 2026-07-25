import {
  ChartContainer,
  ChartLegendContent,
  ChartTooltipContent,
  type ChartConfig,
} from "dataleap-design-system"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
} from "recharts"

// NOTE: charts get explicit width/height because the preview harness bundles
// a second recharts copy, so the library ResponsiveContainer's context cannot
// reach the preview's chart elements. Same reason Tooltip/Legend are imported
// from recharts directly (the library re-exports the identical primitives).

const monthlyData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const trafficConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig

export const BarChartBasic = () => (
  <ChartContainer config={trafficConfig} style={{ height: 220, width: 380 }}>
    <BarChart accessibilityLayer data={monthlyData} width={380} height={220}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
      <Tooltip cursor={false} content={<ChartTooltipContent />} />
      <Legend content={<ChartLegendContent />} />
      <Bar
        dataKey="desktop"
        fill="var(--color-desktop)"
        radius={4}
        isAnimationActive={false}
      />
      <Bar
        dataKey="mobile"
        fill="var(--color-mobile)"
        radius={4}
        isAnimationActive={false}
      />
    </BarChart>
  </ChartContainer>
)

const revenueData = [
  { quarter: "Q1", revenue: 4200, expenses: 2900 },
  { quarter: "Q2", revenue: 5100, expenses: 3400 },
  { quarter: "Q3", revenue: 4700, expenses: 3100 },
  { quarter: "Q4", revenue: 6300, expenses: 3800 },
]

const revenueConfig = {
  revenue: { label: "Revenue", color: "var(--chart-1)" },
  expenses: { label: "Expenses", color: "var(--chart-2)" },
} satisfies ChartConfig

export const AreaChartStacked = () => (
  <ChartContainer config={revenueConfig} style={{ height: 220, width: 380 }}>
    <AreaChart accessibilityLayer data={revenueData} width={380} height={220}>
      <CartesianGrid vertical={false} />
      <XAxis
        dataKey="quarter"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
      />
      <Tooltip content={<ChartTooltipContent indicator="line" />} />
      <Legend content={<ChartLegendContent />} />
      <Area
        dataKey="expenses"
        type="natural"
        fill="var(--color-expenses)"
        fillOpacity={0.4}
        stroke="var(--color-expenses)"
        stackId="a"
        isAnimationActive={false}
      />
      <Area
        dataKey="revenue"
        type="natural"
        fill="var(--color-revenue)"
        fillOpacity={0.4}
        stroke="var(--color-revenue)"
        stackId="a"
        isAnimationActive={false}
      />
    </AreaChart>
  </ChartContainer>
)
