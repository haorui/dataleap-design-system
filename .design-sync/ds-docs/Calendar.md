---
category: Forms
---

Date picker built on react-day-picker with single/range/multiple modes, dropdown captions, multi-month layouts, and disabled-date matchers.

## Components

- `Calendar` — themed `DayPicker`; accepts all react-day-picker props (`mode`, `selected`, `defaultMonth`, `numberOfMonths`, `captionLayout`, `disabled`, `showWeekNumber`, …) plus `buttonVariant` for the nav chevrons.
- `CalendarDayButton` — the day cell button (selected/range-start/range-middle/range-end styling); swap via `components.DayButton` for custom day content.

## Usage

```tsx
import { Calendar } from "shadcn-stock-design"

// Single date
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  defaultMonth={new Date(2026, 5, 1)}
/>
```

```tsx
// Range across two months with dropdown caption
<Calendar
  mode="range"
  numberOfMonths={2}
  captionLayout="dropdown"
  selected={{ from: new Date(2026, 5, 24), to: new Date(2026, 6, 3) }}
  disabled={[{ dayOfWeek: [0, 6] }]}
/>
```
