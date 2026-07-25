import { Badge } from "dataleap-design-system"
import { AlertCircle, ArrowUpRight, BadgeCheck, Clock } from "lucide-react"

export const Variants = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Badge>Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="ghost">Ghost</Badge>
    <Badge variant="link">Link</Badge>
  </div>
)

export const Statuses = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Badge variant="secondary">
      <Clock data-icon="inline-start" /> Pending
    </Badge>
    <Badge>
      <BadgeCheck data-icon="inline-start" /> Verified
    </Badge>
    <Badge variant="destructive">
      <AlertCircle data-icon="inline-start" /> 3 failed
    </Badge>
    <Badge variant="outline">
      Docs <ArrowUpRight data-icon="inline-end" />
    </Badge>
  </div>
)

export const AsLink = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Badge render={<a href="#releases" />}>v2.4.0</Badge>
    <Badge variant="outline" render={<a href="#changelog" />}>
      Changelog
    </Badge>
  </div>
)
