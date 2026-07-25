import { Toggle } from "dataleap-design-system"
import { BoldIcon, BookmarkIcon, ItalicIcon, PinIcon, WifiIcon } from "lucide-react"

export const Basic = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <Toggle aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
    <Toggle defaultPressed aria-label="Toggle italic">
      <ItalicIcon />
    </Toggle>
  </div>
)

export const Outline = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <Toggle variant="outline" aria-label="Pin conversation">
      <PinIcon />
    </Toggle>
    <Toggle variant="outline" defaultPressed aria-label="Bookmark page">
      <BookmarkIcon />
    </Toggle>
  </div>
)

export const WithText = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <Toggle defaultPressed>
      <WifiIcon data-icon="inline-start" /> Wi-Fi
    </Toggle>
    <Toggle variant="outline">
      <BookmarkIcon data-icon="inline-start" /> Save for later
    </Toggle>
  </div>
)

export const Sizes = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <Toggle size="sm" variant="outline" defaultPressed>
      <BoldIcon data-icon="inline-start" /> Small
    </Toggle>
    <Toggle size="default" variant="outline" defaultPressed>
      <BoldIcon data-icon="inline-start" /> Default
    </Toggle>
    <Toggle size="lg" variant="outline" defaultPressed>
      <BoldIcon data-icon="inline-start" /> Large
    </Toggle>
  </div>
)

export const Disabled = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <Toggle disabled aria-label="Toggle bold">
      <BoldIcon />
    </Toggle>
    <Toggle disabled defaultPressed variant="outline">
      <WifiIcon data-icon="inline-start" /> Wi-Fi
    </Toggle>
  </div>
)
