import { Skeleton } from "dataleap-design-system"

export const ProfileRow = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, width: 320 }}>
    <Skeleton style={{ width: 48, height: 48, borderRadius: "50%" }} />
    <div style={{ display: "grid", gap: 8, flex: 1 }}>
      <Skeleton style={{ height: 14, width: "60%" }} />
      <Skeleton style={{ height: 12, width: "40%" }} />
    </div>
  </div>
)

export const CardPlaceholder = () => (
  <div style={{ display: "grid", gap: 10, width: 320 }}>
    <Skeleton style={{ height: 140, width: "100%", borderRadius: 12 }} />
    <Skeleton style={{ height: 14, width: "80%" }} />
    <Skeleton style={{ height: 14, width: "55%" }} />
  </div>
)

export const ListPlaceholder = () => (
  <div style={{ display: "grid", gap: 14, width: 320 }}>
    {[0, 1, 2].map((i) => (
      <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Skeleton style={{ width: 28, height: 28, borderRadius: 6 }} />
        <Skeleton style={{ height: 12, flex: 1 }} />
        <Skeleton style={{ height: 12, width: 48 }} />
      </div>
    ))}
  </div>
)
