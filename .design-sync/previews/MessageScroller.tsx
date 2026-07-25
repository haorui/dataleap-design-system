import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  BubbleGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "dataleap-design-system"

const thread = [
  { from: "them", name: "Priya", text: "Kicking off the design sync — agenda is in the doc." },
  { from: "me", text: "Thanks! I added a section on the new empty states." },
  { from: "them", name: "Priya", text: "Saw it. The illustration direction looks good to me." },
  { from: "me", text: "Great. I'll get final assets from the brand team by Thursday." },
  { from: "them", name: "Priya", text: "One more thing — can we revisit the toast timing? 3s feels short." },
  { from: "me", text: "Agreed, let's bump it to 5s with a hover pause." },
  { from: "them", name: "Priya", text: "Perfect. Shipping the spec update now 🚀" },
] as const

const ThreadMessages = () => (
  <>
    {thread.map((m, i) => (
      <MessageScrollerItem key={i}>
        <MessageGroup>
          {m.from === "them" ? (
            <Message>
              <MessageAvatar>
                <Avatar>
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
              </MessageAvatar>
              <MessageContent>
                <MessageHeader>{m.name}</MessageHeader>
                <BubbleGroup>
                  <Bubble variant="muted">
                    <BubbleContent>{m.text}</BubbleContent>
                  </Bubble>
                </BubbleGroup>
              </MessageContent>
            </Message>
          ) : (
            <Message align="end">
              <MessageContent>
                <BubbleGroup>
                  <Bubble align="end">
                    <BubbleContent>{m.text}</BubbleContent>
                  </Bubble>
                </BubbleGroup>
              </MessageContent>
            </Message>
          )}
        </MessageGroup>
      </MessageScrollerItem>
    ))}
  </>
)

export const ChatThread = () => (
  <div style={{ height: 340, width: 440, border: "1px solid var(--border)", borderRadius: 12, padding: 12 }}>
    <MessageScrollerProvider>
      <MessageScroller>
        <MessageScrollerViewport>
          <MessageScrollerContent style={{ gap: 16 }}>
            <ThreadMessages />
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  </div>
)

export const CompactPanel = () => (
  <div style={{ height: 220, width: 360, border: "1px solid var(--border)", borderRadius: 12, padding: 12 }}>
    <MessageScrollerProvider>
      <MessageScroller>
        <MessageScrollerViewport>
          <MessageScrollerContent style={{ gap: 12 }}>
            {["Deploy finished for web-app@2.14.0", "Smoke tests passed on staging", "Promoted to production", "Error rate nominal after 15 minutes"].map(
              (text, i) => (
                <MessageScrollerItem key={i}>
                  <BubbleGroup>
                    <Bubble variant={i % 2 ? "outline" : "muted"}>
                      <BubbleContent>{text}</BubbleContent>
                    </Bubble>
                  </BubbleGroup>
                </MessageScrollerItem>
              )
            )}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
    </MessageScrollerProvider>
  </div>
)
