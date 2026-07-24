import { Calendar } from "shadcn-stock-design"

export const SingleSelection = () => (
  <Calendar
    mode="single"
    selected={new Date(2026, 5, 15)}
    defaultMonth={new Date(2026, 5, 1)}
  />
)

export const RangeSelection = () => (
  <Calendar
    mode="range"
    selected={{ from: new Date(2026, 5, 9), to: new Date(2026, 5, 19) }}
    defaultMonth={new Date(2026, 5, 1)}
  />
)

export const DropdownCaption = () => (
  <Calendar
    mode="single"
    captionLayout="dropdown"
    selected={new Date(2026, 5, 15)}
    defaultMonth={new Date(2026, 5, 1)}
    startMonth={new Date(2024, 0, 1)}
    endMonth={new Date(2028, 11, 31)}
  />
)

export const TwoMonths = () => (
  <Calendar
    mode="range"
    numberOfMonths={2}
    selected={{ from: new Date(2026, 5, 24), to: new Date(2026, 6, 3) }}
    defaultMonth={new Date(2026, 5, 1)}
  />
)

export const DisabledDates = () => (
  <Calendar
    mode="single"
    selected={new Date(2026, 5, 15)}
    defaultMonth={new Date(2026, 5, 1)}
    disabled={[
      { dayOfWeek: [0, 6] },
      { from: new Date(2026, 5, 1), to: new Date(2026, 5, 4) },
    ]}
  />
)
