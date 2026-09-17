export const AVATAR_TINTS = [
  "bg-chart-1/15 text-foreground",
  "bg-chart-2/15 text-foreground",
  "bg-chart-3/15 text-foreground",
  "bg-chart-4/15 text-foreground",
  "bg-chart-5/15 text-foreground",
  "bg-chart-6/15 text-foreground",
] as const

export type AvatarTint = (typeof AVATAR_TINTS)[number]

/** Stable identity → tint class. FNV-1a 32-bit over UTF-16 code units, mod 6. Pure; same id ⇒ same tint everywhere. */
export function avatarTint(id: string): AvatarTint {
  let hash = 0x811c9dc5

  for (let i = 0; i < id.length; i += 1) {
    hash = Math.imul(hash ^ id.charCodeAt(i), 0x01000193)
  }

  return AVATAR_TINTS[(hash >>> 0) % AVATAR_TINTS.length]
}
