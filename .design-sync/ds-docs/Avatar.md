---
category: Data Display
---

Circular user avatar with image, fallback initials, status badge, and overlapping group compositions. Sizes: `sm` (24px), `default` (32px), `lg` (40px).

## Components

- `Avatar` — root container; accepts `size?: "sm" | "default" | "lg"`.
- `AvatarImage` — the image element; hidden automatically until loaded.
- `AvatarFallback` — initials/placeholder shown while the image is missing or loading.
- `AvatarBadge` — small presence dot pinned to the bottom-right, ringed by the background; scales with avatar size and accepts `online`, `busy`, or `offline` variants.
- `AvatarGroup` — overlapping stack of avatars (`-space-x-2`) with ring separation.
- `AvatarGroupCount` — trailing "+N" count bubble for a group.

## Usage

```tsx
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "dataleap-design-system"

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, auto))",
    gap: 16,
    alignItems: "center",
  }}
>
  {/* Columns: sm, default, lg. Repeat this row for busy and offline. */}
  <Avatar size="sm">
    <AvatarFallback>ON</AvatarFallback>
    <AvatarBadge variant="online">
      <span className="sr-only">Online</span>
    </AvatarBadge>
  </Avatar>
  <Avatar size="default">
    <AvatarImage src="/avatars/haorui.png" alt="Haorui Li" />
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
  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
    <Avatar size="sm">
      <AvatarFallback>BU</AvatarFallback>
      <AvatarBadge variant="busy">
        <span className="sr-only">Busy</span>
      </AvatarBadge>
    </Avatar>
    <span>Busy</span>
  </div>
  <Avatar size="lg">
    <AvatarFallback>OF</AvatarFallback>
    <AvatarBadge variant="offline" aria-label="Offline" />
  </Avatar>
</div>
```

`Presence` renders a 3×3 matrix: rows are `online`, `busy`, and `offline`; columns are `sm`, `default`, and `lg`. `online` is the default presence state: a solid success badge. `busy` is a solid warning badge with a `Minus` icon; the icon is hidden at `sm`, so the `busy` + `sm` cell requires adjacent visible text. `offline` is hollow. Status never goes on the avatar fill itself; it belongs on the badge.

```tsx
import { Avatar, AvatarFallback, avatarTint } from "dataleap-design-system"

const users = [
  { id: "member-1", initials: "HL" },
  { id: "member-2", initials: "JD" },
  { id: "member-3", initials: "MK" },
]

<div style={{ display: "flex", gap: 12 }}>
  {users.map((user) => (
    <Avatar key={user.id}>
      <AvatarFallback className={avatarTint(user.id)}>{user.initials}</AvatarFallback>
    </Avatar>
  ))}
</div>
```

By default, avatar fallbacks use a `muted` background and `muted-foreground` initials. When color helps identify members, `avatarTint(user.id)` is a stable-hash opt-in (`bg-chart-N/15 text-foreground`), not random or render-order-dependent.

Note: `tsconfig.app.json` includes only `["src"]`, so `pnpm typecheck` does not typecheck anything under `.design-sync/`, including previews. The gitignored sync tooling, run from the main checkout only, is what actually compiles and typechecks previews.

```tsx
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "dataleap-design-system"

<AvatarGroup>
  <Avatar><AvatarFallback>HL</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
  <AvatarGroupCount>+4</AvatarGroupCount>
</AvatarGroup>
```
