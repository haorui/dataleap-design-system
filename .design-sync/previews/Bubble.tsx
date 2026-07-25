import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "dataleap-design-system"

export const Conversation = () => (
  <div style={{ maxWidth: 420 }}>
    <BubbleGroup>
      <Bubble variant="muted">
        <BubbleContent>
          Hey! Did you get a chance to look at the pricing page redesign?
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Just finished reviewing it. The new tier comparison table is much
          clearer.
        </BubbleContent>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>Shipping it to staging this afternoon.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Perfect, I&apos;ll take a look after lunch 🚀</BubbleContent>
      </Bubble>
    </BubbleGroup>
  </div>
)

export const Variants = () => (
  <div style={{ maxWidth: 420 }}>
    <BubbleGroup>
      <Bubble variant="default">
        <BubbleContent>Default — primary background</BubbleContent>
      </Bubble>
      <Bubble variant="secondary">
        <BubbleContent>Secondary — softer emphasis</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>Muted — received messages</BubbleContent>
      </Bubble>
      <Bubble variant="tinted">
        <BubbleContent>Tinted — primary-derived tint</BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>Outline — bordered on background</BubbleContent>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>Ghost — plain text, no bubble chrome</BubbleContent>
      </Bubble>
      <Bubble variant="destructive">
        <BubbleContent>Destructive — failed to deliver</BubbleContent>
      </Bubble>
    </BubbleGroup>
  </div>
)

export const WithReactions = () => (
  <div style={{ maxWidth: 420, paddingBottom: 16 }}>
    <BubbleGroup style={{ gap: 20 }}>
      <Bubble variant="muted">
        <BubbleContent>
          We just crossed 10k weekly active users! 🎉
        </BubbleContent>
        <BubbleReactions>
          <span>🎉</span>
          <span>❤️</span>
          <span style={{ fontSize: 12, padding: "0 2px" }}>4</span>
        </BubbleReactions>
      </Bubble>
      <Bubble align="end">
        <BubbleContent>
          Huge milestone — congrats to the whole team!
        </BubbleContent>
        <BubbleReactions align="start">
          <span>👍</span>
          <span style={{ fontSize: 12, padding: "0 2px" }}>2</span>
        </BubbleReactions>
      </Bubble>
    </BubbleGroup>
  </div>
)

export const InteractiveContent = () => (
  <div style={{ maxWidth: 420 }}>
    <BubbleGroup>
      <Bubble variant="outline">
        <BubbleContent render={<button type="button" />}>
          Tap to view the shared document
        </BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent render={<a href="#changelog" />}>
          Release notes v2.14 — click to open changelog
        </BubbleContent>
      </Bubble>
    </BubbleGroup>
  </div>
)
