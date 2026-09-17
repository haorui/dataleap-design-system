import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "dataleap-design-system"

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

export const Presence = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "auto repeat(3, minmax(0, auto))",
      gap: 12,
      alignItems: "center",
    }}
  >
    <span />
    <span>sm</span>
    <span>default</span>
    <span>lg</span>

    <span>Online</span>
    <Avatar size="sm">
      <AvatarFallback>ON</AvatarFallback>
      <AvatarBadge variant="online">
        <span className="sr-only">Online</span>
      </AvatarBadge>
    </Avatar>
    <Avatar size="default">
      <AvatarFallback>ON</AvatarFallback>
      <AvatarBadge variant="online">
        <span className="sr-only">Online</span>
      </AvatarBadge>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>ON</AvatarFallback>
      <AvatarBadge variant="online">
        <span className="sr-only">Online</span>
      </AvatarBadge>
    </Avatar>

    <span>Busy</span>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Avatar size="sm">
        <AvatarFallback>BU</AvatarFallback>
        <AvatarBadge variant="busy">
          <span className="sr-only">Busy</span>
        </AvatarBadge>
      </Avatar>
      <span>Busy</span>
    </div>
    <Avatar size="default">
      <AvatarFallback>BU</AvatarFallback>
      <AvatarBadge variant="busy">
        <span className="sr-only">Busy</span>
      </AvatarBadge>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>BU</AvatarFallback>
      <AvatarBadge variant="busy">
        <span className="sr-only">Busy</span>
      </AvatarBadge>
    </Avatar>

    <span>Offline</span>
    <Avatar size="sm">
      <AvatarFallback>OF</AvatarFallback>
      <AvatarBadge variant="offline">
        <span className="sr-only">Offline</span>
      </AvatarBadge>
    </Avatar>
    <Avatar size="default">
      <AvatarFallback>OF</AvatarFallback>
      <AvatarBadge variant="offline">
        <span className="sr-only">Offline</span>
      </AvatarBadge>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>OF</AvatarFallback>
      <AvatarBadge variant="offline" aria-label="Offline" />
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
