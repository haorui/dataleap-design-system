import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "shadcn-stock-design"

export const Basic = () => (
  <NativeSelect defaultValue="engineering" style={{ width: 220 }}>
    <NativeSelectOption value="engineering">Engineering</NativeSelectOption>
    <NativeSelectOption value="design">Design</NativeSelectOption>
    <NativeSelectOption value="marketing">Marketing</NativeSelectOption>
    <NativeSelectOption value="sales">Sales</NativeSelectOption>
  </NativeSelect>
)

export const Sizes = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <NativeSelect size="default" defaultValue="monthly" style={{ width: 180 }}>
      <NativeSelectOption value="monthly">Billed monthly</NativeSelectOption>
      <NativeSelectOption value="yearly">Billed yearly</NativeSelectOption>
    </NativeSelect>
    <NativeSelect size="sm" defaultValue="monthly" style={{ width: 180 }}>
      <NativeSelectOption value="monthly">Billed monthly</NativeSelectOption>
      <NativeSelectOption value="yearly">Billed yearly</NativeSelectOption>
    </NativeSelect>
  </div>
)

export const Grouped = () => (
  <NativeSelect defaultValue="berlin" style={{ width: 240 }}>
    <NativeSelectOptGroup label="Europe">
      <NativeSelectOption value="berlin">Berlin</NativeSelectOption>
      <NativeSelectOption value="paris">Paris</NativeSelectOption>
    </NativeSelectOptGroup>
    <NativeSelectOptGroup label="Americas">
      <NativeSelectOption value="new-york">New York</NativeSelectOption>
      <NativeSelectOption value="sao-paulo">São Paulo</NativeSelectOption>
    </NativeSelectOptGroup>
  </NativeSelect>
)

export const States = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <NativeSelect disabled defaultValue="viewer" style={{ width: 180 }}>
      <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
      <NativeSelectOption value="editor">Editor</NativeSelectOption>
    </NativeSelect>
    <NativeSelect aria-invalid defaultValue="" style={{ width: 180 }}>
      <NativeSelectOption value="" disabled>
        Select a role…
      </NativeSelectOption>
      <NativeSelectOption value="viewer">Viewer</NativeSelectOption>
      <NativeSelectOption value="editor">Editor</NativeSelectOption>
    </NativeSelect>
  </div>
)
