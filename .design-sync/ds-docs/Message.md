---
category: Chat
---

Message row layout for chat threads: avatar, header, bubble content, and footer, with start/end alignment for received vs sent messages.

## Components

- `MessageGroup` — vertical stack of messages in a thread.
- `Message` — one message row; `align` (`start | end`) flips row direction for sent messages.
- `MessageAvatar` — rounded avatar well (pair with `Avatar`/`AvatarFallback`); auto-lifts when a footer is present.
- `MessageContent` — column holding header, bubbles, and footer; children self-align right when `align="end"`.
- `MessageHeader` — small muted header line (sender name, timestamp).
- `MessageFooter` — small muted footer line (delivery/read status); right-justified on end-aligned messages.

## Usage

```tsx
import {
  Avatar, AvatarFallback, Bubble, BubbleContent, BubbleGroup,
  Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader,
} from "dataleap-design-system"

<MessageGroup>
  <Message>
    <MessageAvatar>
      <Avatar><AvatarFallback>NW</AvatarFallback></Avatar>
    </MessageAvatar>
    <MessageContent>
      <MessageHeader>Nora West · 9:41 AM</MessageHeader>
      <BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>Can you send the onboarding metrics?</BubbleContent>
        </Bubble>
      </BubbleGroup>
    </MessageContent>
  </Message>
  <Message align="end">
    <MessageContent>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>On it — retention is up to 46%.</BubbleContent>
        </Bubble>
      </BubbleGroup>
      <MessageFooter>Delivered · 9:43 AM</MessageFooter>
    </MessageContent>
  </Message>
</MessageGroup>
```
