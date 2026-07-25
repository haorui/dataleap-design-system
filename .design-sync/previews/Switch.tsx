import { Label, Switch } from "dataleap-design-system"

export const States = () => (
  <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
    <Switch aria-label="Off" />
    <Switch defaultChecked aria-label="On" />
    <Switch disabled aria-label="Off disabled" />
    <Switch defaultChecked disabled aria-label="On disabled" />
  </div>
)

export const Sizes = () => (
  <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
    <Switch size="sm" defaultChecked aria-label="Small on" />
    <Switch size="sm" aria-label="Small off" />
    <Switch size="default" defaultChecked aria-label="Default on" />
    <Switch size="default" aria-label="Default off" />
  </div>
)

export const WithLabels = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 300 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Label htmlFor="sw-2fa">Two-factor authentication</Label>
      <Switch id="sw-2fa" defaultChecked />
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Label htmlFor="sw-digest">Weekly digest email</Label>
      <Switch id="sw-digest" />
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Label htmlFor="sw-beta">Beta features</Label>
      <Switch id="sw-beta" size="sm" defaultChecked />
    </div>
  </div>
)
