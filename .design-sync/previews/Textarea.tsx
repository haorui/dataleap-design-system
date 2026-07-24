import { Label, Textarea } from "shadcn-stock-design"

export const Basic = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
    <Textarea placeholder="Describe the incident and any steps to reproduce…" />
  </div>
)

export const WithContent = () => (
  <div style={{ width: 360 }}>
    <Textarea defaultValue={"Deploy went out at 14:02 UTC.\nError rate spiked on the checkout service, rolled back at 14:11."} />
  </div>
)

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
    <Textarea placeholder="Archived tickets cannot be edited" disabled />
    <Textarea defaultValue="Summary is too short" aria-invalid="true" />
  </div>
)

export const LabeledField = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6, width: 360 }}>
    <Label htmlFor="textarea-notes">Release notes</Label>
    <Textarea id="textarea-notes" placeholder="What changed in this release?" />
  </div>
)
