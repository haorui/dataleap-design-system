import { Checkbox, Label } from "shadcn-stock-design"

export const States = () => (
  <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
    <Checkbox aria-label="Unchecked" />
    <Checkbox defaultChecked aria-label="Checked" />
    <Checkbox disabled aria-label="Disabled" />
    <Checkbox defaultChecked disabled aria-label="Checked disabled" />
    <Checkbox aria-invalid="true" aria-label="Invalid" />
  </div>
)

export const WithLabels = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Checkbox id="cb-updates" defaultChecked />
      <Label htmlFor="cb-updates">Email me product updates</Label>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Checkbox id="cb-security" defaultChecked />
      <Label htmlFor="cb-security">Security alerts</Label>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Checkbox id="cb-marketing" />
      <Label htmlFor="cb-marketing">Marketing newsletter</Label>
    </div>
  </div>
)

export const TermsRow = () => (
  <div style={{ display: "flex", gap: 8, alignItems: "flex-start", width: 340 }}>
    <Checkbox id="cb-terms" style={{ marginTop: 2 }} />
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Label htmlFor="cb-terms">Accept terms and conditions</Label>
      <span style={{ fontSize: 13, color: "var(--muted-foreground, #6b7280)" }}>
        You agree to our Terms of Service and Privacy Policy.
      </span>
    </div>
  </div>
)
