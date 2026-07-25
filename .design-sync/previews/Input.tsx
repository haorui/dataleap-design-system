import { Input, Label } from "dataleap-design-system"

export const Basic = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
    <Input placeholder="Search projects…" />
    <Input defaultValue="Quarterly report draft" />
  </div>
)

export const Types = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
    <Input type="email" placeholder="ada@lovelace.dev" />
    <Input type="password" defaultValue="hunter2secret" />
    <Input type="number" defaultValue={42} />
    <Input type="file" />
  </div>
)

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}>
    <Input placeholder="Disabled field" disabled />
    <Input defaultValue="Read-only value" readOnly />
    <Input defaultValue="not-an-email" aria-invalid="true" />
  </div>
)

export const LabeledField = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 320 }}>
    <Label htmlFor="input-workspace">Workspace name</Label>
    <Input id="input-workspace" placeholder="acme-analytics" />
  </div>
)
