# AGENTS.md — working in dataleap-design-system

This repo is a shadcn/ui skeleton with the DataLeap brand pinned on top. Its value is that the stock shadcn primitives already cover most needs. Keep the base thin; put everything else in the consuming product.

## Triage before implementing

Before adding anything here, answer one question: **which layer does this belong to?**

| Layer | Examples | Goes into this repo? |
|---|---|---|
| **Primitive capability** — structure, accessibility, a prop the stock component genuinely lacks; also defects and accessibility fixes in an existing primitive | a missing `size`, a keyboard interaction, a slot, a focus-trap bug | Yes, sparingly. First check whether shadcn upstream already ships it. |
| **Token vocabulary** — a color, radius or font value that several products must share by name | `--primary`, `--destructive`, `--info` / `--success` / `--warning`, the `chart-1..6` palette | Yes. `src/index.css` is the authoritative source for values; other files copy from it. |
| **Product guideline or business rule** — how to use colors, presence semantics, identity hashing, tiering rules, page layouts, chart series and thresholds | "online / busy / offline", "hash id to a tint", "critical only on message components", dashboard layouts, which series a chart shows | **No.** Implement it in the product (e.g. leap-aide) with `className`, composition or a local wrapper. If it later proves shared, open an issue here with evidence from at least two products; reuse in two products is the evidence, not the trigger. |

How to tell the last two apart when a rule looks "technical": ask whether it depends on business meaning. A pixel size or keyboard condition that is part of the primitive's contract (hit target, focus order) is a capability; a pixel rule that exists to encode a product's severity or status policy is a guideline. Chart is the usual mixed case: `ChartConfig` and the container are capability, the six-color palette is token vocabulary, the series/labels/thresholds are product.

Two follow-ups to the question:

- If a stock component does not satisfy a need, the first answer is a composition or a `className` in the product, not a new variant here. shadcn's own dashboards are built that way.
- A rule that needs escalation conditions or "when X but not Y" wording is a product guideline, however consistent it looks. Keep `DESIGN.md` rules to token meaning and hard constraints.

Lesson recorded from #6 / #7: the status tokens and the Badge / Alert variants belonged here; the AvatarBadge presence variants, the `avatarTint` helper and the point/line/face usage rules did not, and were moved out again in #10 and this change (#8). **`DESIGN.md` and `.design-sync/conventions.md` may still carry traces of those product rules; where they conflict with this triage table, the table wins.**

## Where rules live

- `DESIGN.md` is the human-facing rule doc and is **hand-mirrored** into `.design-sync/conventions.md`; the design sync does not read DESIGN.md. Change both.
- `src/index.css` is the authoritative token source; `DESIGN.md` frontmatter copies the values and can drift — check it when touching a token.
- `.design-sync/ds-docs/*.md` and `.design-sync/previews/*.tsx` are hand-maintained sync inputs. `ds-bundle/` (output) and `.ds-sync/` (the sync tooling) are gitignored: a fresh clone has neither. In the current workspace they live only in the main checkout; ask the maintainer for the tooling if you need to run a sync. Regenerating the bundle is a post-merge step, not part of a PR.

## Commands and verification

- `pnpm dev` (Vite app; `src/App.tsx` is a placeholder page, not a component gallery), `pnpm build` (`tsc -b && vite build`), `pnpm typecheck` (`tsc --noEmit -p tsconfig.app.json`, covers `src/` only), `pnpm lint`, `pnpm format` (writes; TS/TSX only).
- **There is no test runner.** These checks cover different things; do not let one stand in for another:
  - `pnpm build` / `pnpm typecheck` type-check `src/`. They do **not** compile `.design-sync/previews/*.tsx` or `.design-sync/entry.ts` (outside `tsconfig.app.json` `include` and outside the app's import graph). The build only scans them for Tailwind class candidates.
  - CSS: after `pnpm build`, grep `dist/assets/index-*.css` for the variables and utilities you expect.
  - Previews and entry: verify by reading, or by a throwaway Vite entry outside `src/` that aliases `dataleap-design-system` to `.design-sync/entry.ts` and renders the preview modules; or render with `react-dom/server` in a throwaway script outside the repo. Delete throwaway files before committing; never commit `dist/`.

## Adding or changing components

- Add stock components with `npx shadcn@latest add <name>` (style `base-nova`, icon library lucide, `components.json`). Then, by hand: add `export * from "@/components/ui/<name>"` to `.design-sync/entry.ts` (it is not auto-generated and silently misses new files), write `.design-sync/ds-docs/<Name>.md` and `.design-sync/previews/<Name>.tsx`, and add a new family to `componentSrcMap` in `.design-sync/config.json`.
- Previews are scanned by Tailwind, so a class used only in a preview still reaches the bundle. Prefer inline styles for layout glue; using a utility on purpose to ship a usage recipe is fine, just leave a comment saying so.
- The primitives are **base-ui, not Radix**: compose with `render={<Button />}`, not `asChild`. `TooltipProvider` is recommended for shared delay settings, not required (base-ui 1.6 works without it). A bare `*MenuLabel` outside a `*MenuGroup` / `*MenuRadioGroup` throws, and without an error boundary that blanks the React root. More preview recipes in `.design-sync/NOTES.md`.

## Adding a token

- Semantic color (the common case): `src/index.css` (`@theme inline` mapping, then `:root` and `.dark` values), `DESIGN.md` frontmatter, the "Semantic" line in `.design-sync/conventions.md`, and the description in `design-system-spec.json` if it summarizes the palette. A chromatic token whose text will sit on its own tint must reach ≥ 4.5:1 (WCAG 2.1) on that tint: light = `/10` over `#FFFFFF`, dark = `/20` over `oklch(0.205 0 0)`. Compute it before choosing the value; it is an acceptance floor for those two surfaces, not a guarantee for hover states or other backgrounds.
- Chart colors update the "Charts" line in conventions.md instead; radius and font update the "Shape/type" line.

## Design sync

- Run only from a checkout that has `.ds-sync/`, after merge: `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules <path> --out ./ds-bundle` (full usage in the header of `.ds-sync/resync.mjs`). Any `.md` left in `.design-sync/learnings/` fails the verdict: fold its content into `NOTES.md`, then delete the file, then run. Exit 0 means the mechanical stages passed; grading and downstream upload are separate.
- Record findings in `.design-sync/NOTES.md`; it is the sync log, not a rule doc.

## Branches and PRs

- Never edit on `main`. Small docs fixes may use a branch in the main checkout; anything else uses a worktree under `.worktrees/` (gitignored). Branch names: `feat/`, `fix/`, `docs/`, `chore/` + kebab-case.
- `main` changes only through PRs (convention; no branch protection is assumed). Conventional Commits, English messages, one logical change per commit.

## Do not

- Edit `ds-bundle/` or anything under `.design-sync/.cache/`; they are outputs.
- Write hex or `oklch()` in component files; colors flow through semantic tokens only.
- Wrap components under `src/components/ui/` in parallel abstractions; they are owned source, edit in place.
