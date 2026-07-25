import { Separator } from "dataleap-design-system"

export const Horizontal = () => (
  <div style={{ width: 300 }}>
    <div style={{ display: "grid", gap: 4 }}>
      <span style={{ fontSize: 14, fontWeight: 500 }}>Design tokens</span>
      <span style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
        Colors, typography, and spacing primitives.
      </span>
    </div>
    <Separator style={{ marginBlock: 16 }} />
    <div style={{ display: "grid", gap: 4 }}>
      <span style={{ fontSize: 14, fontWeight: 500 }}>Components</span>
      <span style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
        Reusable building blocks assembled from tokens.
      </span>
    </div>
  </div>
)

export const Vertical = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 16,
      height: 20,
      fontSize: 14,
    }}
  >
    <span>Blog</span>
    <Separator orientation="vertical" />
    <span>Docs</span>
    <Separator orientation="vertical" />
    <span>Source</span>
  </div>
)
