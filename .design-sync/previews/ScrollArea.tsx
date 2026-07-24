import { ScrollArea, ScrollBar, Separator } from "shadcn-stock-design"

const versions = Array.from(
  { length: 24 },
  (_, i) => `v1.${23 - i}.0`
)

export const VerticalList = () => (
  <ScrollArea
    style={{
      height: 220,
      width: 220,
      border: "1px solid var(--border)",
      borderRadius: 10,
    }}
  >
    <div style={{ padding: 16 }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 8,
        }}
      >
        Releases
      </div>
      {versions.map((v) => (
        <div key={v}>
          <div style={{ fontSize: 13, paddingBlock: 6 }}>{v}</div>
          <Separator />
        </div>
      ))}
    </div>
  </ScrollArea>
)

const artworks = [
  "Ornamental leaves",
  "Coastal dunes",
  "Night market",
  "Alpine ridge",
  "Harbor lights",
]

export const HorizontalGallery = () => (
  <ScrollArea
    style={{
      width: 340,
      border: "1px solid var(--border)",
      borderRadius: 10,
    }}
  >
    <div style={{ display: "flex", gap: 12, padding: 16, width: "max-content" }}>
      {artworks.map((title, i) => (
        <figure key={title} style={{ margin: 0, width: 140, flexShrink: 0 }}>
          <div
            style={{
              height: 90,
              borderRadius: 8,
              background: `linear-gradient(135deg, var(--chart-${(i % 5) + 1}), var(--muted))`,
            }}
          />
          <figcaption
            style={{
              fontSize: 12,
              color: "var(--muted-foreground)",
              paddingTop: 6,
            }}
          >
            {title}
          </figcaption>
        </figure>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
)
