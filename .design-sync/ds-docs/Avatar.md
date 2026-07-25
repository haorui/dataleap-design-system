---
category: Data Display
---

Circular user avatar with image, fallback initials, status badge, and overlapping group compositions. Sizes: `sm` (24px), `default` (32px), `lg` (40px).

## Components

- `Avatar` — root container; accepts `size?: "sm" | "default" | "lg"`.
- `AvatarImage` — the image element; hidden automatically until loaded.
- `AvatarFallback` — initials/placeholder shown while the image is missing or loading.
- `AvatarBadge` — small status dot pinned to the bottom-right, ringed by the background; scales with avatar size.
- `AvatarGroup` — overlapping stack of avatars (`-space-x-2`) with ring separation.
- `AvatarGroupCount` — trailing "+N" count bubble for a group.

## Usage

```tsx
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "dataleap-design-system"

<Avatar size="lg">
  <AvatarImage src="/avatars/haorui.png" alt="Haorui Li" />
  <AvatarFallback>HL</AvatarFallback>
  <AvatarBadge />
</Avatar>
```

```tsx
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "dataleap-design-system"

<AvatarGroup>
  <Avatar><AvatarFallback>HL</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>JD</AvatarFallback></Avatar>
  <AvatarGroupCount>+4</AvatarGroupCount>
</AvatarGroup>
```
