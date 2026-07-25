import { Checkbox, Input, Label } from "dataleap-design-system"

export const Basic = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <Label>Display name</Label>
    <Label>
      API key <span style={{ fontWeight: 400, color: "var(--muted-foreground, #6b7280)" }}>(required)</span>
    </Label>
  </div>
)

export const WithInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 320 }}>
    <Label htmlFor="label-email">Work email</Label>
    <Input id="label-email" type="email" placeholder="you@company.com" />
  </div>
)

export const WithCheckbox = () => (
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    <Checkbox id="label-remember" defaultChecked />
    <Label htmlFor="label-remember">Remember this device for 30 days</Label>
  </div>
)

export const DisabledPeer = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 320 }}>
    <Label htmlFor="label-org">Organization slug</Label>
    <Input id="label-org" defaultValue="acme-inc" disabled />
  </div>
)
