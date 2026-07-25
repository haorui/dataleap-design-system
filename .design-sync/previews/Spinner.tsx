import { Button, Spinner } from "dataleap-design-system"

export const Sizes = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Spinner />
      <span style={{ fontSize: 13 }}>16px (default)</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Spinner style={{ width: 24, height: 24 }} />
      <span style={{ fontSize: 13 }}>24px</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Spinner style={{ width: 32, height: 32 }} />
      <span style={{ fontSize: 13 }}>32px</span>
    </div>
  </div>
)

export const WithText = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--muted-foreground)",
      fontSize: 14,
    }}
  >
    <Spinner />
    Syncing workspace…
  </div>
)

export const InButton = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <Button disabled>
      <Spinner data-icon="inline-start" /> Saving…
    </Button>
    <Button variant="outline" disabled>
      <Spinner data-icon="inline-start" /> Deploying
    </Button>
  </div>
)
