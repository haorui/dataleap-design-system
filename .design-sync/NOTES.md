# design-sync notes — shadcn-stock-design

- This repo is a private Vite APP, not a library: no `main`/`module`/`exports`, no `.d.ts` build. The converter runs from a committed hand-made entry `.design-sync/entry.ts` (re-exports every `src/components/ui/*.tsx` family + theme-provider), passed via `cfg.entry`. If a new component file is added to `src/components/ui/`, regenerate/extend `entry.ts` AND add the family's primary export to `cfg.componentSrcMap`.
- Component cards are ONE per shadcn family (59), pinned in `cfg.componentSrcMap`; the other ~280 subcomponent exports still ship in the bundle (357 exports on `window.ShadcnUI`) and are documented per-family in `.design-sync/ds-docs/`.
- `direction.tsx` (DirectionProvider) and `theme-provider.tsx` (ThemeProvider/useTheme) ship in the bundle but deliberately get no card.
- CSS comes from the app's compiled Tailwind v4 build: `cfg.buildCmd` runs `pnpm build`, then copies `dist/assets/index-*.css` → `.design-sync/.cache/css/app.css` while rewriting `url(/assets/…)` → `url(./…)` (Vite emits absolute asset URLs; without the rewrite no woff2 ships and validate fires FONT_DANGLING). The woff2 files are copied alongside so `extractFonts` finds them.
- IMPORTANT css ordering: Tailwind v4 auto-content-detection scans the repo (previews in `.design-sync/previews/` are committed, hence scanned). Any Tailwind class used ONLY in a preview gets compiled in on the NEXT `pnpm build`. Convention: previews use INLINE STYLES for layout glue, so the compiled CSS never depends on preview content.
- Known render warns (triaged legitimate):
  - `[TOKENS_MISSING]` 12 vars: `--toast-*`, `--accordion-panel-height`, `--drawer-swipe-*`, `--nested-drawers` — all set at runtime by base-ui components (inline style/JS), never defined in stylesheets. Expected.
- `cfg.overrides.Card = {cardMode: column}` — Basic/WithForm stories are 360px wide, overflow grid cells.

## Re-sync risks

- `cfg.entry` (`.design-sync/entry.ts`) is hand-maintained — silently misses components added to `src/components/ui/` after 2026-07-24. Check `ls src/components/ui | wc -l` (59 files then) on re-sync.
- Compiled CSS is a byproduct of the app build; if the app's `src/index.css` or Tailwind version changes, all component styling shifts — re-verify visually, don't trust carried grades blindly for brand changes (grades key on preview sources, not CSS).
- Playwright cache: chromium installed 2026-07-24 via `.ds-sync` npm playwright (repo pins none).

## Preview-authoring recipes (folded from wave 1 learnings, 2026-07-24)

- **base-ui composition uses `render={<Button/>}`**, not Radix `asChild`. Tooltip needs `TooltipProvider`. DrawerContent throws outside `Drawer`.
- **Bare `*MenuLabel` outside a Group crashes the whole React root blank** (base-ui `MenuGroupContext is missing`) — always wrap DropdownMenuLabel/ContextMenuLabel/MenubarLabel in `*MenuGroup`/`*MenuRadioGroup`. The classic shadcn "bare label atop Content" pattern does NOT work in this port.
- Open-state recipes: DropdownMenu `defaultOpen modal={false}`; MenubarMenu `defaultOpen`; NavigationMenu root `defaultValue` + item `value`; ContextMenu needs a mount-time dispatched `contextmenu` MouseEvent (see previews/ContextMenu.tsx).
- **recharts is bundled twice** (once in _ds_bundle.js, once per preview) → ChartContainer's ResponsiveContainer context never reaches preview-authored chart elements; charts silently blank. Workaround in previews (and guidance for designs): explicit width/height on the chart element, import Tooltip/Legend from recharts with the kit's ChartTooltipContent/ChartLegendContent as `content`, `isAnimationActive={false}`. Proper fix: externalize recharts in preview-rebuild like react.
- **react-resizable-panels v4**: `direction` prop renamed `orientation` (shadcn docs examples silently no-op). `aria-[orientation=vertical]:flex-col` in resizable.tsx is dead code in v4 (harmless).
- `--chart-1…5` are grayscale oklch (chroma 0) in this stock kit — gray charts are on-token.
- Toast static capture: per-cell `createToastManager()` + `manager.add({timeout:0})` in ref-guarded useEffect; compose ToastProvider+ToastViewport (position absolute inside sized div), render list via `useToastManager()`; Toaster's fixed viewport unusable in cards; ToastIcon/ToastList not exported.
- Sidebar static capture: `collapsible="none"` (offcanvas default is hidden/fixed); override `min-h-svh` with inline height.
- ComboboxInput style lands on the inner input — constrain width with a wrapper div around the whole Combobox. InputOTP (input-otp v3) is controlled-only: `value` + no-op onChange. SelectValue takes `placeholder`; pass `items` to Select root for closed-trigger label.
- Sheets reserve tall cells with top-aligned content — empty space below a story is normal, not collapse.
- Empty renders `border-dashed` but no border width — a framed empty state needs caller-supplied border. Collapsible is unstyled by design; style triggers via `render` prop (e.g. Button).
