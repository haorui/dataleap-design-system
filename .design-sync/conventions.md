# Building with this design system (stock shadcn/ui · base-nova · Geist)

## Setup & wrapping

- Most components need **no provider** — tokens live in `styles.css` and apply globally. Exceptions: `Tooltip` must sit inside `TooltipProvider`; `Sidebar` inside `SidebarProvider` (pair with `SidebarInset` for the content pane); toasts render through `<Toaster />` mounted once, fired imperatively with `toast.add({ title, description })`.
- **Dark mode**: add class `dark` to any ancestor (usually the root element). `ThemeProvider` (localStorage-backed) ships in the bundle if you need a toggle.
- This kit is built on **base-ui, not Radix**: compose triggers with the `render` prop, e.g. `<DialogTrigger render={<Button variant="outline" />}>Open</DialogTrigger>` — there is **no `asChild`**.
- **Menu labels must be wrapped in a group**: a bare `DropdownMenuLabel`/`ContextMenuLabel`/`MenubarLabel` outside `*MenuGroup`/`*MenuRadioGroup` throws and blanks the whole tree. Always `<DropdownMenuGroup><DropdownMenuLabel>…</DropdownMenuLabel>…</DropdownMenuGroup>`.
- Charts: give the recharts element **explicit `width`/`height`** inside `ChartContainer` and set `isAnimationActive={false}` on series; pass `ChartTooltipContent`/`ChartLegendContent` as the `content` of recharts' own `Tooltip`/`Legend`. Color series with `var(--chart-1)`…`var(--chart-5)`.
- `ResizablePanelGroup` uses `orientation="vertical"` (react-resizable-panels v4 renamed `direction`).

## Styling idiom

Components style themselves via Tailwind classes compiled into `styles.css`. For your own layout glue, use **inline styles or small CSS referencing the token custom properties** — do not invent utility class names; only classes already compiled into the stylesheet resolve.

Token vocabulary (each `--x` has a `--x-foreground` partner where noted; all are `var(--…)`-able):

- Surfaces: `--background`, `--card`+fg, `--popover`+fg, `--sidebar`(+fg/-primary/-accent/-border/-ring)
- Semantic: `--primary`+fg, `--secondary`+fg, `--muted`+fg, `--accent`+fg, `--destructive`, `--border`, `--input`, `--ring`
- Charts: `--chart-1`…`--chart-5` (a lime-green oklch scale, light → dark)
- Shape/type: `--radius` (plus `--radius-sm|md|lg|xl`), `--font-sans` / `--font-heading` = "Geist Variable"

Example glue: `style={{ display: "grid", gap: 12, background: "var(--muted)", borderRadius: "var(--radius)" }}`.

Component variants come from props, never custom classes: `Button variant="outline" size="sm"`, `Badge variant="destructive"`, `Alert variant="destructive"`, `Card size="sm"`, `Tabs variant="line"`. Mark button icons with `data-icon="inline-start"`/`"inline-end"` for correct padding.

## Where the truth lives

- `styles.css` → imports `fonts/fonts.css` (Geist @font-face) and `_ds_bundle.css` (all tokens under `:root` and `.dark`, plus every compiled component style). Read `_ds_bundle.css` before styling.
- Per component: `components/<group>/<Name>/<Name>.prompt.md` (subcomponent list + working usage), `<Name>.d.ts` (props contract). Families export many parts (e.g. Card ships CardHeader/CardTitle/CardAction/CardContent/CardFooter) — the prompt.md enumerates them.

## Idiomatic example

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Label } from "shadcn-stock-design"

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
