---
name: leap-aide shadcn (tier-2)
description: >
  shadcn/ui skeleton with the DataLeap brand pinned on top — stock neutral
  surfaces and Geist typeface, brand-green primary, mono green chart ramp.
  This file mirrors src/index.css, which is the code ground truth; if they
  disagree, index.css wins.
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
    chart-1: "oklch(0.897 0.196 126.665)"
    chart-2: "oklch(0.768 0.233 130.85)"
    chart-3: "oklch(0.648 0.2 131.684)"
    chart-4: "oklch(0.532 0.157 131.589)"
    chart-5: "oklch(0.453 0.124 130.933)"
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
    chart-1: "oklch(0.897 0.196 126.665)"
    chart-2: "oklch(0.768 0.233 130.85)"
    chart-3: "oklch(0.648 0.2 131.684)"
    chart-4: "oklch(0.532 0.157 131.589)"
    chart-5: "oklch(0.453 0.124 130.933)"
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
- **Charts: the mono green ramp** (`chart-1..5`, the shadcn green-preset
  oklch scale, hue ~130) — series read through value steps of one hue, not a
  multi-color categorical palette.

## Rules

- **Semantic tokens only.** Color always flows through the semantic variables
  (`bg-background`, `text-muted-foreground`, `border-border`, …). Never
  hard-code hex/oklch values in components or layouts.
- **Single green accent.** `primary` is DataLeap brand green (#18A00D light /
  #5AC750 dark) and is the only accent hue in UI chrome — selection rings,
  toggles, active states. `destructive` red stays for destructive actions.
  The `chart-*` greens appear ONLY inside charts, never in chrome (they are
  brighter/yellower than `primary` — don't borrow them for selection states).
  Everything else reads through neutral value contrast.
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
