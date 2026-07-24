import { Marker, MarkerContent, MarkerIcon } from "shadcn-stock-design"
import { CalendarIcon, GitCommitIcon, InfoIcon } from "lucide-react"

export const Default = () => (
  <div style={{ width: 360, display: "grid", gap: 12 }}>
    <Marker>
      <MarkerIcon>
        <GitCommitIcon />
      </MarkerIcon>
      <MarkerContent>Deployed v2.4.1 to production</MarkerContent>
    </Marker>
    <Marker>
      <MarkerIcon>
        <InfoIcon />
      </MarkerIcon>
      <MarkerContent>
        Maintenance window scheduled for Saturday 02:00 UTC
      </MarkerContent>
    </Marker>
  </div>
)

export const SeparatorVariant = () => (
  <div style={{ width: 360, display: "grid", gap: 12 }}>
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Marker variant="separator">
      <MarkerIcon>
        <CalendarIcon />
      </MarkerIcon>
      <MarkerContent>June 12, 2026</MarkerContent>
    </Marker>
  </div>
)

export const BorderVariant = () => (
  <div style={{ width: 360 }}>
    <Marker variant="border">
      <MarkerIcon>
        <CalendarIcon />
      </MarkerIcon>
      <MarkerContent>Unread messages since yesterday</MarkerContent>
    </Marker>
  </div>
)
