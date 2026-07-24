---
name: leap-aide shadcn (tier-2)
description: >
  shadcn/ui skeleton with the DataLeap brand pinned on top — stock neutral
  surfaces and Geist typeface, brand-green primary, six-color categorical
  chart scale (green-anchored). This file mirrors src/index.css, which is
  the code ground truth; if they disagree, index.css wins.
colors:
  light:
    background: "oklch(1 0 0)"
    foreground: "oklch(0.145 0 0)"
    card: "oklch(1 0 0)"
    card-foreground: "oklch(0.145 0 0)"
    popover: "oklch(1 0 0)"
    popover-foreground: "oklch(0.145 0 0)"
    primary: "#18A00D"
    primary-foreground: "#FFFFFF"
    secondary: "oklch(0.967 0.001 286.375)"
    secondary-foreground: "oklch(0.205 0 0)"
    muted: "oklch(0.97 0 0)"
    muted-foreground: "oklch(0.556 0 0)"
    accent: "oklch(0.97 0 0)"
    accent-foreground: "oklch(0.205 0 0)"
    destructive: "oklch(0.577 0.245 27.325)"
    border: "oklch(0.922 0 0)"
    input: "oklch(0.922 0 0)"
    ring: "oklch(0.708 0 0)"
    chart-1: "#18A00D"
    chart-2: "#2563EB"
    chart-3: "#E8A317"
    chart-4: "#7C3AED"
    chart-5: "#E11D48"
    chart-6: "#0D9488"
    sidebar: "oklch(0.985 0 0)"
    sidebar-foreground: "oklch(0.145 0 0)"
    sidebar-primary: "oklch(0.627 0.194 149.214)"
    sidebar-primary-foreground: "oklch(0.982 0.018 155.826)"
    sidebar-accent: "oklch(0.97 0 0)"
    sidebar-accent-foreground: "oklch(0.205 0 0)"
    sidebar-border: "oklch(0.922 0 0)"
    sidebar-ring: "oklch(0.708 0 0)"
  dark:
    background: "oklch(0.145 0 0)"
    foreground: "oklch(0.985 0 0)"
    card: "oklch(0.205 0 0)"
    card-foreground: "oklch(0.985 0 0)"
    popover: "oklch(0.205 0 0)"
    popover-foreground: "oklch(0.985 0 0)"
    primary: "#5AC750"
    primary-foreground: "#0A0A0A"
    secondary: "oklch(0.274 0.006 286.033)"
    secondary-foreground: "oklch(0.985 0 0)"
    muted: "oklch(0.269 0 0)"
    muted-foreground: "oklch(0.708 0 0)"
    accent: "oklch(0.269 0 0)"
    accent-foreground: "oklch(0.985 0 0)"
    destructive: "oklch(0.704 0.191 22.216)"
    border: "oklch(1 0 0 / 10%)"
    input: "oklch(1 0 0 / 15%)"
    ring: "oklch(0.556 0 0)"
    chart-1: "#5AC750"
    chart-2: "#60A5FA"
    chart-3: "#FBBF24"
    chart-4: "#A78BFA"
    chart-5: "#FB7185"
    chart-6: "#2DD4BF"
    sidebar: "oklch(0.205 0 0)"
    sidebar-foreground: "oklch(0.985 0 0)"
    sidebar-primary: "oklch(0.723 0.219 149.579)"
    sidebar-primary-foreground: "oklch(0.982 0.018 155.826)"
    sidebar-accent: "oklch(0.269 0 0)"
    sidebar-accent-foreground: "oklch(0.985 0 0)"
    sidebar-border: "oklch(1 0 0 / 10%)"
    sidebar-ring: "oklch(0.556 0 0)"
typography:
  sans: "'Geist Variable', sans-serif"
  heading: "'Geist Variable', sans-serif"
  notes: "Single family for body and headings, self-hosted via @fontsource-variable/geist."
radius:
  base: "0.625rem"
  scale:
    sm: "calc(var(--radius) * 0.6)"
    md: "calc(var(--radius) * 0.8)"
    lg: "var(--radius)"
    xl: "calc(var(--radius) * 1.4)"
    2xl: "calc(var(--radius) * 1.8)"
    3xl: "calc(var(--radius) * 2.2)"
    4xl: "calc(var(--radius) * 2.6)"
icons: lucide
components:
  directory: src/components/ui
  count: 60
---

# leap-aide shadcn — tier-2 design system

A shadcn/ui skeleton (`shadcn init` base-nova + `add --all`, components
verbatim) with the DataLeap brand pinned on top. Three adjudicated choices
define the tier:

- **Typeface: Geist** (stock) — not Plus Jakarta Sans.
- **Neutrals: stock oklch** — surfaces, borders, muted text all keep shadcn's
  achromatic scale.
- **Charts: the leap-aide six-color categorical scale** (`chart-1..6` —
  brand green first, then blue / amber / violet / rose / teal, ordered for
  adjacent distinctness). Multi-series charts assign hues in token order;
  single-series charts just use `chart-1` (brand green).

## Rules

- **Semantic tokens only.** Color always flows through the semantic variables
  (`bg-background`, `text-muted-foreground`, `border-border`, …). Never
  hard-code hex/oklch values in components or layouts.
- **Single green accent.** `primary` is DataLeap brand green (#18A00D light /
  #5AC750 dark) and is the only accent hue in UI chrome — selection rings,
  toggles, active states. `destructive` red stays for destructive actions.
  The `chart-*` hues appear ONLY inside charts and the avatar palette below,
  never in chrome — don't borrow them for selection states, badges, or
  buttons. Everything else reads through neutral value contrast.
- **Avatar palette.** Avatars default to a neutral fill (`muted` background,
  `foreground` initials). When color aids identification (member lists,
  multi-user views), tint the background with a `chart-*` hue at low opacity
  (~12–15%) and set the initials in that same hue's solid value; assign hues
  by stable identity hash, in `chart-1..6` order. Shape and fill weight follow
  the stock component (`rounded-full`); the palette rule constrains hue only.
- **One radius knob.** All corner rounding derives from `--radius` (0.625rem)
  via the multiplier scale. Change the base, everything follows.
- **Dark mode is a value flip** on the `.dark` class — same token names, no
  parallel palette. Dark borders/inputs use white at 10–15% alpha rather than
  opaque grays.
- **One typeface.** Geist Variable for everything; hierarchy comes from size
  and weight, not family changes.
- **Components are owned source.** Files under `src/components/ui/` are the
  system. Extend by composition or by editing in place; don't wrap in parallel
  abstractions.

## Layout & density

Stock shadcn spacing rhythm: Tailwind's 4px grid, `gap-*` for spacing between
siblings, controls at 36px default height (`h-9`), 32px small, compact data
surfaces at 13–14px body text.
