import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "shadcn-stock-design"

const slides = ["Aurora", "Basalt", "Cinder", "Dune", "Ember"]

export const Basic = () => (
  <div style={{ padding: "0 56px" }}>
    <Carousel style={{ width: 280 }}>
      <CarouselContent>
        {slides.map((name, i) => (
          <CarouselItem key={name}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                height: 160,
                borderRadius: 12,
                border: "1px solid var(--border)",
                background: "var(--card)",
              }}
            >
              <span style={{ fontSize: 32, fontWeight: 600 }}>{i + 1}</span>
              <span style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
                {name}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)

export const MultipleSlides = () => (
  <div style={{ padding: "0 56px" }}>
    <Carousel style={{ width: 360 }} opts={{ align: "start" }}>
      <CarouselContent>
        {slides.map((name, i) => (
          <CarouselItem key={name} style={{ flexBasis: "40%" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 100,
                borderRadius: 10,
                border: "1px solid var(--border)",
                background: "var(--muted)",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
)
