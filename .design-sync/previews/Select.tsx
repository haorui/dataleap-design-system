import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "dataleap-design-system"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
]

export const Basic = () => (
  <Select items={fruits} defaultValue="banana">
    <SelectTrigger style={{ width: 200 }}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      {fruits.map((fruit) => (
        <SelectItem key={fruit.value} value={fruit.value}>
          {fruit.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)

export const Placeholder = () => (
  <Select items={fruits}>
    <SelectTrigger style={{ width: 200 }}>
      <SelectValue placeholder="Choose a fruit" />
    </SelectTrigger>
    <SelectContent>
      {fruits.map((fruit) => (
        <SelectItem key={fruit.value} value={fruit.value}>
          {fruit.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
)

const timezones = [
  { value: "utc", label: "UTC" },
  { value: "cet", label: "Central European Time" },
  { value: "est", label: "Eastern Standard Time" },
  { value: "pst", label: "Pacific Standard Time" },
  { value: "jst", label: "Japan Standard Time" },
]

export const Grouped = () => (
  <Select items={timezones} defaultValue="cet">
    <SelectTrigger style={{ width: 240 }}>
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Europe</SelectLabel>
        <SelectItem value="utc">UTC</SelectItem>
        <SelectItem value="cet">Central European Time</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Americas</SelectLabel>
        <SelectItem value="est">Eastern Standard Time</SelectItem>
        <SelectItem value="pst">Pacific Standard Time</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Asia</SelectLabel>
        <SelectItem value="jst">Japan Standard Time</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
)

export const Sizes = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Select items={fruits} defaultValue="apple">
      <SelectTrigger size="default" style={{ width: 180 }}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select items={fruits} defaultValue="apple">
      <SelectTrigger size="sm" style={{ width: 180 }}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
)

export const States = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Select items={fruits} defaultValue="cherry" disabled>
      <SelectTrigger style={{ width: 180 }}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    <Select items={fruits}>
      <SelectTrigger aria-invalid style={{ width: 180 }}>
        <SelectValue placeholder="Required field" />
      </SelectTrigger>
      <SelectContent>
        {fruits.map((fruit) => (
          <SelectItem key={fruit.value} value={fruit.value}>
            {fruit.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
)
