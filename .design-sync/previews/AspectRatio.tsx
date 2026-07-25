import { AspectRatio } from "dataleap-design-system"

export const Widescreen = () => (
  <div style={{ width: 320 }}>
    <AspectRatio ratio={16 / 9}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 10,
          background:
            "linear-gradient(135deg, var(--chart-1), var(--chart-2))",
          display: "flex",
          alignItems: "flex-end",
          padding: 12,
          color: "white",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        16 : 9
      </div>
    </AspectRatio>
  </div>
)

export const Square = () => (
  <div style={{ width: 180 }}>
    <AspectRatio ratio={1}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 10,
          background:
            "linear-gradient(160deg, var(--chart-4), var(--chart-5))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 13,
          fontWeight: 500,
        }}
      >
        1 : 1
      </div>
    </AspectRatio>
  </div>
)

export const Portrait = () => (
  <div style={{ width: 140 }}>
    <AspectRatio ratio={3 / 4}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 10,
          border: "1px solid var(--border)",
          background: "var(--muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--muted-foreground)",
          fontSize: 13,
        }}
      >
        3 : 4
      </div>
    </AspectRatio>
  </div>
)
