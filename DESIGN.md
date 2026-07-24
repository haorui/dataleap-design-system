---
name: shadcn/ui (stock)
description: >
  Unmodified stock shadcn/ui design system — base-nova style, neutral base
  color, Geist typeface. This file mirrors src/index.css, which is the code
  ground truth; if they disagree, index.css wins.
colors:
  light:
    background: "oklch(1 0 0)"
    foreground: "oklch(0.145 0 0)"
    card: "oklch(1 0 0)"
    card-foreground: "oklch(0.145 0 0)"
    popover: "oklch(1 0 0)"
    popover-foreground: "oklch(0.145 0 0)"
    primary: "oklch(0.205 0 0)"
    primary-foreground: "oklch(0.985 0 0)"
    secondary: "oklch(0.97 0 0)"
    secondary-foreground: "oklch(0.205 0 0)"
    muted: "oklch(0.97 0 0)"
    muted-foreground: "oklch(0.556 0 0)"
    accent: "oklch(0.97 0 0)"
    accent-foreground: "oklch(0.205 0 0)"
    destructive: "oklch(0.577 0.245 27.325)"
    border: "oklch(0.922 0 0)"
    input: "oklch(0.922 0 0)"
    ring: "oklch(0.708 0 0)"
    chart-1: "oklch(0.87 0 0)"
    chart-2: "oklch(0.556 0 0)"
    chart-3: "oklch(0.439 0 0)"
    chart-4: "oklch(0.371 0 0)"
    chart-5: "oklch(0.269 0 0)"
    sidebar: "oklch(0.985 0 0)"
    sidebar-foreground: "oklch(0.145 0 0)"
    sidebar-primary: "oklch(0.205 0 0)"
    sidebar-primary-foreground: "oklch(0.985 0 0)"
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
    primary: "oklch(0.922 0 0)"
    primary-foreground: "oklch(0.205 0 0)"
    secondary: "oklch(0.269 0 0)"
    secondary-foreground: "oklch(0.985 0 0)"
    muted: "oklch(0.269 0 0)"
    muted-foreground: "oklch(0.708 0 0)"
    accent: "oklch(0.269 0 0)"
    accent-foreground: "oklch(0.985 0 0)"
    destructive: "oklch(0.704 0.191 22.216)"
    border: "oklch(1 0 0 / 10%)"
    input: "oklch(1 0 0 / 15%)"
    ring: "oklch(0.556 0 0)"
    chart-1: "oklch(0.87 0 0)"
    chart-2: "oklch(0.556 0 0)"
    chart-3: "oklch(0.439 0 0)"
    chart-4: "oklch(0.371 0 0)"
    chart-5: "oklch(0.269 0 0)"
    sidebar: "oklch(0.205 0 0)"
    sidebar-foreground: "oklch(0.985 0 0)"
    sidebar-primary: "oklch(0.488 0.243 264.376)"
    sidebar-primary-foreground: "oklch(0.985 0 0)"
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

# shadcn/ui — stock design system

This repository is a faithful, **unmodified** snapshot of stock shadcn/ui in
consumption shape: what `shadcn init` (base-nova, neutral, Geist) plus
`shadcn add --all` produces. It exists so design tools and AI agents can index
the real thing — real component source, real tokens — instead of approximating
it.

## Rules

- **Semantic tokens only.** Color always flows through the semantic variables
  (`bg-background`, `text-muted-foreground`, `border-border`, …). Never
  hard-code hex/oklch values in components or layouts.
- **Neutral-first.** The stock palette is achromatic; the only chromatic
  values are `destructive` (red) and the dark-mode `sidebar-primary` (blue).
  Emphasis comes from value contrast (`primary` = near-black on light,
  near-white on dark), not hue.
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
