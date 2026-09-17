# Building with this design system (stock shadcn/ui · base-nova · Geist)

## Setup & wrapping

- Most components need **no provider** — tokens live in `styles.css` and apply globally. Exceptions: `Tooltip` must sit inside `TooltipProvider`; `Sidebar` inside `SidebarProvider` (pair with `SidebarInset` for the content pane); toasts render through `<Toaster />` mounted once, fired imperatively with `toast.add({ title, description })`.
- **Dark mode**: add class `dark` to any ancestor (usually the root element). `ThemeProvider` (localStorage-backed) ships in the bundle if you need a toggle.
- This kit is built on **base-ui, not Radix**: compose triggers with the `render` prop, e.g. `<DialogTrigger render={<Button variant="outline" />}>Open</DialogTrigger>` — there is **no `asChild`**.
- **Menu labels must be wrapped in a group**: a bare `DropdownMenuLabel`/`ContextMenuLabel`/`MenubarLabel` outside `*MenuGroup`/`*MenuRadioGroup` throws and blanks the whole tree. Always `<DropdownMenuGroup><DropdownMenuLabel>…</DropdownMenuLabel>…</DropdownMenuGroup>`.
- Charts: give the recharts element **explicit `width`/`height`** inside `ChartContainer` and set `isAnimationActive={false}` on series; pass `ChartTooltipContent`/`ChartLegendContent` as the `content` of recharts' own `Tooltip`/`Legend`. Color series with `var(--chart-1)`…`var(--chart-6)`, assigned in token order; a single-series chart uses `--chart-1`.
- `ResizablePanelGroup` uses `orientation="vertical"` (react-resizable-panels v4 renamed `direction`).

## Styling idiom

Components style themselves via Tailwind classes compiled into `styles.css`. For your own layout glue, use **inline styles or small CSS referencing the token custom properties** — do not invent utility class names; only classes already compiled into the stylesheet resolve.

Token vocabulary (each `--x` has a `--x-foreground` partner where noted; all are `var(--…)`-able):

- Surfaces: `--background`, `--card`+fg, `--popover`+fg, `--sidebar`(+fg/-primary/-accent/-border/-ring)
- Semantic: `--primary`+fg, `--secondary`+fg, `--muted`+fg, `--accent`+fg, `--destructive`, `--destructive-foreground`, `--info`+fg, `--success`+fg, `--warning`+fg, `--border`, `--input`, `--ring`
- Charts: `--chart-1`…`--chart-6` — a six-color categorical scale: green (brand) / blue / amber / violet / rose / teal, ordered for adjacent distinctness. These hues belong **only** in charts — never in UI chrome (buttons, badges, selection states, rings), except for deliberate avatar identity tint via `avatarTint` when color aids identification.
- Shape/type: the shipped stylesheet defines `--radius` (0.625rem), `--radius-sm`, `--radius-md`, `--radius-lg`, and `--radius-xl`. `--font-sans` / `--font-heading` = "Geist Variable"

Example glue: `style={{ display: "grid", gap: 12, background: "var(--muted)", borderRadius: "var(--radius)" }}`.

Component variants come from props, never custom classes: `Button variant="outline" size="sm"`, `Badge variant="destructive"`, `Badge variant="info|success|warning|critical"`, `Alert variant="destructive"`, `Alert variant="info|success|warning|critical"`, `AvatarBadge variant="online|busy|offline"`, `Card size="sm"`, `Tabs variant="line"`. Mark button icons with `data-icon="inline-start"`/`"inline-end"` for correct padding.

**Avatars.** By default, fallbacks stay stock: `--muted` background,
`--muted-foreground` initials, and `rounded-full`. When identification benefits
from color, `avatarTint(id)` is an opt-in stable-hash override using
`bg-chart-N/15 text-foreground`; `AvatarBadge` supplies presence variants:
`online` (success, solid), `busy` (warning, solid, with a `Minus` icon), and
`offline` (hollow). Status belongs on the badge, not the avatar fill.

## Design rules

The system's own constraints — they hold for anything built with this kit.

- **Semantic tokens only.** Colour always flows through the semantic variables (`--background`, `--muted-foreground`, `--border`, …). Never hard-code a hex or `oklch()` value in a component or a layout.
- **Interactive accent.** Green `--primary` is the theme/interactive accent for primary CTAs, selection, active tabs, links, and existing control fills; focus stays on neutral `--ring`. `--primary` never expresses status.
- **Status palette.** `--info`, `--success`, `--warning`, and `--destructive` are independent hues (`--success` is not an alias of `--primary`); info/success stay to dots, text, icons, thin lines (≤8px), and `bg-x/10 text-x` badges, while warning/destructive may also tint message/data surfaces such as rows and cards (`/10`, dark `/20`). `critical` is the solid destructive fill for message components only, never rows/cards; points are ≤12px, faces are everything else, and only critical fills a face. Every status signal also uses text, an icon, or a shape.
- **One radius knob.** All corner rounding derives from `--radius` (0.625rem); reach for `--radius-sm` / `--radius-md` rather than fixed pixel values.
- **One typeface.** Geist Variable throughout — hierarchy comes from size and weight, never from a family change.
- **Dark mode is a value flip.** The `.dark` class re-values the same token names; there is no parallel palette and no dark-only token. Dark borders and inputs are white at 10% / 15% alpha, not opaque grey.
- **Density.** 4px spacing grid; controls are 36px tall by default and 32px in compact contexts; body text on dense data surfaces is 13–14px.

## Where the truth lives

- `styles.css` → imports `fonts/fonts.css` (Geist @font-face) and `_ds_bundle.css` (all tokens under `:root` and `.dark`, plus every compiled component style). Read `_ds_bundle.css` before styling.
- Per component: `components/<group>/<Name>/<Name>.prompt.md` (subcomponent list + working usage), `<Name>.d.ts` (props contract). Families export many parts (e.g. Card ships CardHeader/CardTitle/CardAction/CardContent/CardFooter) — the prompt.md enumerates them.

## Idiomatic example

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Label } from "dataleap-design-system"

<Card style={{ width: 360 }}>
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one click.</CardDescription>
  </CardHeader>
  <CardContent style={{ display: "grid", gap: 12 }}>
    <div style={{ display: "grid", gap: 6 }}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="acme-website" />
    </div>
  </CardContent>
  <CardFooter style={{ justifyContent: "flex-end", gap: 8 }}>
    <Button variant="outline" size="sm">Cancel</Button>
    <Button size="sm">Deploy</Button>
  </CardFooter>
</Card>
```
