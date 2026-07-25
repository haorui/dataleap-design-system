import { Label, RadioGroup, RadioGroupItem } from "dataleap-design-system"

export const Basic = () => (
  <RadioGroup defaultValue="comfortable" style={{ width: 260 }}>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="compact" id="rg-compact" />
      <Label htmlFor="rg-compact">Compact</Label>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="comfortable" id="rg-comfortable" />
      <Label htmlFor="rg-comfortable">Comfortable</Label>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="spacious" id="rg-spacious" />
      <Label htmlFor="rg-spacious">Spacious</Label>
    </div>
  </RadioGroup>
)

export const DisabledOption = () => (
  <RadioGroup defaultValue="monthly" style={{ width: 260 }}>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="monthly" id="rg-monthly" />
      <Label htmlFor="rg-monthly">Monthly billing</Label>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="annual" id="rg-annual" />
      <Label htmlFor="rg-annual">Annual billing (save 20%)</Label>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="invoice" id="rg-invoice" disabled />
      <Label htmlFor="rg-invoice">Invoice (enterprise only)</Label>
    </div>
  </RadioGroup>
)

export const Invalid = () => (
  <RadioGroup style={{ width: 260 }}>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="usd" id="rg-usd" aria-invalid="true" />
      <Label htmlFor="rg-usd">USD — US Dollar</Label>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <RadioGroupItem value="eur" id="rg-eur" aria-invalid="true" />
      <Label htmlFor="rg-eur">EUR — Euro</Label>
    </div>
  </RadioGroup>
)
