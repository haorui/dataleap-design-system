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

## Conventions

- No hex or `oklch()` in component files; colors flow through semantic tokens only.
- Components under `src/components/ui/` are owned source: edit in place, do not wrap in parallel abstractions.
- Conventional Commits, English messages, one logical change per commit.
