---
name: dataleap-design-system
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
    secondary-foreground: "oklch(0.21 0.006 285.885)"
    muted: "oklch(0.97 0 0)"
    muted-foreground: "oklch(0.556 0 0)"
    accent: "oklch(0.97 0 0)"
    accent-foreground: "oklch(0.205 0 0)"
    destructive: "oklch(0.577 0.245 27.325)"
    info: "#1D4ED8"
    info-foreground: "#FFFFFF"
    success: "#047857"
    success-foreground: "#FFFFFF"
    warning: "#9A4A0B"
    warning-foreground: "#FFFFFF"
    destructive-foreground: "#FFFFFF"
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
    info: "#60A5FA"
    info-foreground: "#0A0A0A"
    success: "#34D399"
    success-foreground: "#0A0A0A"
    warning: "#FBBF24"
    warning-foreground: "#0A0A0A"
    destructive-foreground: "#0A0A0A"
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

# DataLeap design system

A shadcn/ui skeleton (`shadcn init` base-nova + `add --all`) with Badge, Alert,
and AvatarBadge carrying local variant additions; everything else is still
verbatim shadcn source, with the DataLeap brand pinned on top. Three adjudicated
choices define the tier:

- **Typeface: Geist** (stock) — not Plus Jakarta Sans.
- **Neutrals: stock oklch** — surfaces, borders, muted text all keep shadcn's
  achromatic scale.
- **Charts: the DataLeap six-color categorical scale** (`chart-1..6` —
  brand green first, then blue / amber / violet / rose / teal, ordered for
  adjacent distinctness). Multi-series charts assign hues in token order;
  single-series charts just use `chart-1` (brand green).

## Rules

- **Semantic tokens only.** Color always flows through the semantic variables
  (`bg-background`, `text-muted-foreground`, `border-border`, …). Never
  hard-code hex/oklch values in components or layouts.
- **Theme and interactive accent.** Green `primary` (#18A00D light /
  #5AC750 dark) is the theme color and the only interactive accent: use it for
  primary CTAs, selection, active tabs, links, and the existing control fills
  (checkbox/switch/radio checked state, progress indicator, slider, calendar
  selected day, and badge/button default). Focus rings stay neutral `--ring`,
  while tint-style variants keep their existing same-hue faint focus ring; that
  is an existing pattern, not a new accent. `primary` never expresses status.
- **Independent status palette.** Status has its own palette: `info`,
  `success`, `warning`, and `destructive` are independent hues (`success` is
  not an alias of `primary`) and status may fill. `info` and `success` are
  restricted to dots, text, icons, thin lines, and `bg-x/10 text-x` badges (no
  filled faces); `warning` and `destructive` may additionally tint (`/10`,
  dark `/20`) message components and data containers such as rows and cards.
  `critical` is a solid `bg-destructive text-destructive-foreground` fill,
  restricted to message components only (Badge, Alert, banner), never a data
  row or card. A point is ≤12px in both dimensions, a line is ≤8px thick at
  any length, and everything else is a face; only `critical` may fill a face.
  Every status signal must carry text, an icon, or a shape in addition to
  color.
- **Charts and avatars.** Chart hues never express status or interaction — no
  badges, buttons, selection, or status bars. Avatar fallbacks stay stock by
  default: neutral fill (`muted` background, `muted-foreground` initials),
  `rounded-full`; when color aids identification (for example, member lists or
  multi-vendor views), the fallback may be tinted via `avatarTint(id)` from
  `src/lib/avatar-tint.ts` (`bg-chart-N/15 text-foreground`, a stable hash —
  not random or render-order-dependent). `AvatarBadge` is the presence dot:
  `online` (success, solid), `busy` (warning, solid, shows a `Minus` icon), or
  `offline` (hollow).
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
