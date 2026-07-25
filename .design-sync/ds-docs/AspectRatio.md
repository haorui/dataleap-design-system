---
category: Layout
---

Constrains a box to a fixed width/height ratio via the CSS `aspect-ratio` property (no JS measurement).

## Components

- `AspectRatio` — div with required `ratio` prop (e.g. `16 / 9`); position children absolutely with `inset-0` to fill it.

## Usage

```tsx
import { AspectRatio } from "dataleap-design-system"

export function Thumbnail() {
  return (
    <div className="w-80">
      <AspectRatio ratio={16 / 9}>
        <img
          src="/hero.jpg"
          alt="Hero"
          className="absolute inset-0 size-full rounded-lg object-cover"
        />
      </AspectRatio>
    </div>
  )
}
```

The ratio is set through a `--ratio` CSS variable, so any numeric expression works: `ratio={1}`, `ratio={3 / 4}`, `ratio={21 / 9}`.
