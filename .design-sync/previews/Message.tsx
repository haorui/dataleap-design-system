import {
  Avatar,
  AvatarFallback,
  Bubble,
  BubbleContent,
  BubbleGroup,
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "shadcn-stock-design"

export const Conversation = () => (
  <MessageGroup style={{ maxWidth: 480, gap: 16 }}>
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>NW</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Nora West · 9:41 AM</MessageHeader>
        <BubbleGroup>
          <Bubble variant="muted">
            <BubbleContent>
              Morning! Can you send over the onboarding metrics before standup?
            </BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>Mostly interested in week-1 retention.</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </MessageContent>
    </Message>
    <Message align="end">
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>HL</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <BubbleGroup>
          <Bubble align="end">
            <BubbleContent>
              On it — week-1 retention is up to 46% after the checklist change.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
        <MessageFooter>Delivered · 9:43 AM</MessageFooter>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>NW</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <BubbleGroup>
          <Bubble variant="muted">
            <BubbleContent>That&apos;s a great jump. See you at standup 👋</BubbleContent>
          </Bubble>
        </BubbleGroup>
      </MessageContent>
    </Message>
  </MessageGroup>
)

export const AssistantThread = () => (
  <MessageGroup style={{ maxWidth: 520, gap: 16 }}>
    <Message align="end">
      <MessageContent>
        <BubbleGroup>
          <Bubble align="end">
            <BubbleContent>
              Summarize last week&apos;s deploy incidents in two sentences.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
      </MessageContent>
    </Message>
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Assistant</MessageHeader>
        <BubbleGroup>
          <Bubble variant="ghost">
            <BubbleContent>
              Two incidents occurred last week: a 14-minute API outage on
              Tuesday caused by a bad migration, and elevated latency on Friday
              traced to a cache stampede. Both were resolved with rollbacks and
              follow-up guards are now in place.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
        <MessageFooter>Generated in 2.1s</MessageFooter>
      </MessageContent>
    </Message>
  </MessageGroup>
)

export const WithHeaderAndFooter = () => (
  <MessageGroup style={{ maxWidth: 480 }}>
    <Message>
      <MessageAvatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </MessageAvatar>
      <MessageContent>
        <MessageHeader>Jamie Doe · Support</MessageHeader>
        <BubbleGroup>
          <Bubble variant="secondary">
            <BubbleContent>
              Your refund for order #48213 has been processed and should appear
              within 3-5 business days.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
        <MessageFooter>Read · 2:17 PM</MessageFooter>
      </MessageContent>
    </Message>
  </MessageGroup>
)
