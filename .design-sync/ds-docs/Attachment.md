---
category: Chat
---

File-attachment chip for chat composers and message threads, with upload lifecycle states, icon or image media, and horizontal/vertical layouts.

## Components

- `Attachment` — root card; props `state` (`idle | uploading | processing | error | done`), `size` (`default | sm | xs`), `orientation` (`horizontal | vertical`).
- `AttachmentGroup` — horizontal scroll-snap container for multiple attachments.
- `AttachmentMedia` — leading square media well; `variant="icon"` (default) or `variant="image"` for thumbnails.
- `AttachmentContent` — text column wrapping title and description.
- `AttachmentTitle` — file name; truncates and shimmers during uploading/processing states.
- `AttachmentDescription` — secondary line (size, type, progress); turns destructive on error.
- `AttachmentActions` — trailing action cluster (absolute top-right in vertical orientation).
- `AttachmentAction` — ghost icon-xs Button preset for remove/retry actions.
- `AttachmentTrigger` — invisible full-card overlay button/link for making the whole chip clickable.

## Usage

```tsx
import {
  Attachment, AttachmentGroup, AttachmentMedia, AttachmentContent,
  AttachmentTitle, AttachmentDescription, AttachmentActions, AttachmentAction,
} from "dataleap-design-system"
import { FileTextIcon, XIcon } from "lucide-react"

<AttachmentGroup>
  <Attachment>
    <AttachmentMedia><FileTextIcon /></AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>Q2-report.pdf</AttachmentTitle>
      <AttachmentDescription>2.4 MB · PDF</AttachmentDescription>
    </AttachmentContent>
    <AttachmentActions>
      <AttachmentAction aria-label="Remove"><XIcon /></AttachmentAction>
    </AttachmentActions>
  </Attachment>
</AttachmentGroup>
```

```tsx
// Image thumbnail, vertical card
<Attachment orientation="vertical" state="done">
  <AttachmentMedia variant="image">
    <img src={thumbnailUrl} alt="hero-banner.png" />
  </AttachmentMedia>
  <AttachmentContent>
    <AttachmentTitle>hero-banner.png</AttachmentTitle>
    <AttachmentDescription>1.1 MB</AttachmentDescription>
  </AttachmentContent>
</Attachment>
```
