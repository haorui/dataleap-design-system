import { Label, Slider } from "dataleap-design-system"

export const Basic = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 320 }}>
    <Slider defaultValue={[35]} />
    <Slider defaultValue={[70]} min={0} max={100} step={5} />
  </div>
)

export const Range = () => (
  <div style={{ width: 320 }}>
    <Slider defaultValue={[200, 650]} min={0} max={1000} step={10} />
  </div>
)

export const Disabled = () => (
  <div style={{ width: 320 }}>
    <Slider defaultValue={[45]} disabled />
  </div>
)

export const LabeledField = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10, width: 320 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Label htmlFor="slider-volume">Notification volume</Label>
      <span style={{ fontSize: 13, color: "var(--muted-foreground, #6b7280)" }}>60%</span>
    </div>
    <Slider id="slider-volume" defaultValue={[60]} />
  </div>
)
