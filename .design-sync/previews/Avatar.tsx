import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "shadcn-stock-design"

const avatarSvg = (bg: string, fg: string, initials: string) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="${bg}"/><text x="40" y="52" font-family="sans-serif" font-size="32" fill="${fg}" text-anchor="middle">${initials}</text></svg>`
  )

export const Basic = () => (
  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
    <Avatar>
      <AvatarImage src={avatarSvg("#6366f1", "#ffffff", "HL")} alt="Haorui Li" />
      <AvatarFallback>HL</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src={avatarSvg("#0ea5e9", "#ffffff", "MK")} alt="Mia Kato" />
      <AvatarFallback>MK</AvatarFallback>
    </Avatar>
  </div>
)

export const Sizes = () => (
  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
    <Avatar size="sm">
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <Avatar size="default">
      <AvatarFallback>MD</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  </div>
)

export const WithBadge = () => (
  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
    <Avatar>
      <AvatarImage src={avatarSvg("#10b981", "#ffffff", "AR")} alt="Ana Reyes" />
      <AvatarFallback>AR</AvatarFallback>
      <AvatarBadge />
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>TW</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  </div>
)

export const Group = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarImage src={avatarSvg("#6366f1", "#ffffff", "HL")} alt="Haorui Li" />
      <AvatarFallback>HL</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src={avatarSvg("#f59e0b", "#ffffff", "JD")} alt="Jo Diaz" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>MK</AvatarFallback>
    </Avatar>
    <AvatarGroupCount>+4</AvatarGroupCount>
  </AvatarGroup>
)
