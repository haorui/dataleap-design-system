---
category: Data Display
---

Embla-based slide carousel with previous/next controls and keyboard arrow support.

## Components

- `Carousel` — root; props: `orientation` ("horizontal" | "vertical"), `opts` (embla options), `plugins`, `setApi`.
- `CarouselContent` — scroll viewport plus flex track for the slides.
- `CarouselItem` — one slide; defaults to `basis-full`, narrow with a basis class/style to show multiple slides.
- `CarouselPrevious` — round outline button positioned outside the leading edge; disabled at the start.
- `CarouselNext` — round outline button positioned outside the trailing edge; disabled at the end.
- `useCarousel` — hook exposing `api`, `scrollPrev/scrollNext`, `canScrollPrev/canScrollNext` inside the root.
- `CarouselApi` (type) — embla API handed to `setApi`.

## Usage

```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "shadcn-stock-design"

export function Gallery() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((n) => (
          <CarouselItem key={n}>
            <div className="flex h-40 items-center justify-center rounded-xl border bg-card text-3xl font-semibold">
              {n}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

Show several slides at once by shrinking the item basis: `<CarouselItem className="basis-1/3">` with `opts={{ align: "start" }}`. The prev/next buttons sit 3rem outside the carousel edges — leave horizontal room around the root.
