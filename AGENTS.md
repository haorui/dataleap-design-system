# AGENTS.md — working in dataleap-design-system

This repo is a shadcn/ui skeleton with the DataLeap brand pinned on top. Its value is that the stock shadcn primitives already cover most needs. Keep the base thin; put everything else in the consuming product.

## Triage before implementing

Before adding anything here, answer one question: **which layer does this belong to?**

| Layer | Examples | Goes into this repo? |
|---|---|---|
| **Primitive capability** — structure, accessibility, a prop the stock component genuinely lacks | a missing `size`, a keyboard interaction, a slot | Yes, sparingly. First check whether shadcn upstream already ships it. |
| **Token vocabulary** — a color, radius or font value that several products must share by name | `--primary`, `--destructive`, `--info` / `--success` / `--warning` | Yes. `src/index.css` is the only place that holds color values. |
| **Product guideline or business rule** — how to use colors, presence semantics, identity hashing, tiering rules, page patterns | "online / busy / offline", "hash id to a tint", "critical only on message components", dashboard layouts | **No.** Implement it in the product (e.g. leap-aide) with `className` or a local wrapper. If it later proves shared across products, open an issue here with evidence from at least two products. |

Two follow-ups to the question:

- If a stock component does not satisfy a need, the first answer is a composition or a `className` in the product, not a new variant here. shadcn's own dashboards are built that way.
- A rule that needs pixel definitions, escalation conditions or "when X but not Y" wording is a product guideline, however consistent it looks. Keep `DESIGN.md` rules to token meaning and hard constraints.

Lesson recorded from #6 / #7: the status tokens and the Badge / Alert variants belonged here; the AvatarBadge presence variants, the `avatarTint` helper and the point/line/face usage rules did not, and are being moved out (#8).

## Where rules live

- `DESIGN.md` is the human-facing rule doc and is **hand-mirrored** into `.design-sync/conventions.md`; the design sync does not read DESIGN.md. Change both.
- `src/index.css` is the ground truth for token values; `DESIGN.md` frontmatter copies them.
- `.design-sync/ds-docs/*.md` and `.design-sync/previews/*.tsx` are hand-maintained sync inputs; `ds-bundle/` and `.ds-sync/` are gitignored outputs and tooling that exist only in the main checkout. Regenerating the bundle is a post-merge step, not part of a PR.
- `tsconfig.app.json` includes only `src/`, so previews and `.design-sync/entry.ts` are not typechecked by `pnpm typecheck`; verify them by reading and by `pnpm build`.

## Commands and verification

- `pnpm dev` (Vite app; `src/App.tsx` is a placeholder page, not a component gallery), `pnpm build` (`tsc -b && vite build`), `pnpm typecheck`, `pnpm lint`, `pnpm format`.
- **There is no test runner.** Verify UI changes by `pnpm build` and grepping `dist/assets/index-*.css` for the variables and utilities you expect, by rendering with `react-dom/server` in a throwaway script outside the repo, or by a throwaway Vite entry that aliases `dataleap-design-system` to `.design-sync/entry.ts` and renders the preview modules. Delete throwaway files before committing; never commit `dist/`.

## Adding or changing components

- Add stock components with `npx shadcn@latest add <name>` (style `base-nova`, icon library lucide, `components.json`). Then, by hand: add `export * from "@/components/ui/<name>"` to `.design-sync/entry.ts` (it is not auto-generated and silently misses new files), write `.design-sync/ds-docs/<Name>.md` and `.design-sync/previews/<Name>.tsx`, and add a new family to `componentSrcMap` in `.design-sync/config.json`.
- The primitives are **base-ui, not Radix**: compose with `render={<Button />}`, not `asChild`; Tooltip needs `TooltipProvider`; a bare `*MenuLabel` outside a `*MenuGroup` blanks the whole React root. More preview recipes in `.design-sync/NOTES.md`.

## Adding a token

Four places must agree, in this order: `src/index.css` (`@theme inline` mapping, then `:root` and `.dark` values), `DESIGN.md` frontmatter, the "Semantic" line in `.design-sync/conventions.md`, and `design-system-spec.json`. A chromatic token whose text will sit on its own tint must reach ≥ 4.5:1 (WCAG 2.1): light = `/10` over `#FFFFFF`, dark = `/20` over `oklch(0.205 0 0)`. Compute it before choosing the value.

## Design sync

- Run only from the main checkout, after merge: `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules <path> --out ./ds-bundle` (full usage in the header of `.ds-sync/resync.mjs`). An unfolded file in `.design-sync/learnings/` fails the verdict; fold it into `NOTES.md` first.
- Record findings in `.design-sync/NOTES.md`; it is the sync log, not a rule doc.

## Branches and PRs

- Never edit on `main`. Small docs fixes may use a branch in the main checkout; anything else uses a worktree under `.worktrees/`. Branch names: `feat/`, `fix/`, `docs/`, `chore/` + kebab-case.
- `main` changes only through PRs. Conventional Commits, English messages, one logical change per commit.

## Do not

- Edit `ds-bundle/` or anything under `.design-sync/.cache/`; they are outputs.
- Write hex or `oklch()` in component files; colors flow through semantic tokens only.
- Wrap components under `src/components/ui/` in parallel abstractions; they are owned source, edit in place.
