import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
  Spinner,
} from "dataleap-design-system"
import {
  AlertCircleIcon,
  FileSpreadsheetIcon,
  FileTextIcon,
  XIcon,
} from "lucide-react"

const imageSvg = (from: string, to: string) =>
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="120" height="120" fill="url(#g)"/><circle cx="86" cy="34" r="14" fill="rgba(255,255,255,0.85)"/><path d="M0 120 L44 62 L74 96 L94 76 L120 104 L120 120 Z" fill="rgba(255,255,255,0.55)"/></svg>`
  )

export const Basic = () => (
  <AttachmentGroup style={{ maxWidth: 560 }}>
    <Attachment>
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>Q2-report.pdf</AttachmentTitle>
        <AttachmentDescription>2.4 MB · PDF</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
    <Attachment>
      <AttachmentMedia>
        <FileSpreadsheetIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>revenue-forecast.xlsx</AttachmentTitle>
        <AttachmentDescription>876 KB · Spreadsheet</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Remove attachment">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  </AttachmentGroup>
)

export const States = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 320 }}>
    <Attachment state="idle">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>Drop file to attach</AttachmentTitle>
        <AttachmentDescription>PDF, up to 25 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment state="uploading">
      <AttachmentMedia>
        <Spinner />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>design-tokens.zip</AttachmentTitle>
        <AttachmentDescription>Uploading… 64%</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Cancel upload">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
    <Attachment state="error">
      <AttachmentMedia>
        <AlertCircleIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>meeting-notes.docx</AttachmentTitle>
        <AttachmentDescription>Upload failed — file too large</AttachmentDescription>
      </AttachmentContent>
      <AttachmentActions>
        <AttachmentAction aria-label="Dismiss">
          <XIcon />
        </AttachmentAction>
      </AttachmentActions>
    </Attachment>
  </div>
)

export const ImageGallery = () => (
  <AttachmentGroup style={{ maxWidth: 480 }}>
    <Attachment orientation="vertical">
      <AttachmentMedia variant="image">
        <img src={imageSvg("#6366f1", "#8b5cf6")} alt="hero-banner.png" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>hero-banner.png</AttachmentTitle>
        <AttachmentDescription>1.1 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment orientation="vertical">
      <AttachmentMedia variant="image">
        <img src={imageSvg("#0ea5e9", "#22d3ee")} alt="dashboard-shot.png" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>dashboard-shot.png</AttachmentTitle>
        <AttachmentDescription>842 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment orientation="vertical">
      <AttachmentMedia variant="image">
        <img src={imageSvg("#f59e0b", "#f97316")} alt="logo-draft.png" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>logo-draft.png</AttachmentTitle>
        <AttachmentDescription>96 KB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  </AttachmentGroup>
)

export const Sizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
    <Attachment size="default">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>proposal-v3.pdf</AttachmentTitle>
        <AttachmentDescription>1.8 MB · PDF</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment size="sm">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>proposal-v3.pdf</AttachmentTitle>
        <AttachmentDescription>1.8 MB · PDF</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
    <Attachment size="xs">
      <AttachmentMedia>
        <FileTextIcon />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>proposal-v3.pdf</AttachmentTitle>
        <AttachmentDescription>1.8 MB</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  </div>
)
