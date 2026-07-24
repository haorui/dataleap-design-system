import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  Input,
} from "shadcn-stock-design"
import {
  BoldIcon,
  ChevronDownIcon,
  ItalicIcon,
  SearchIcon,
  UnderlineIcon,
} from "lucide-react"

export const Horizontal = () => (
  <ButtonGroup>
    <Button variant="outline">Day</Button>
    <Button variant="outline">Week</Button>
    <Button variant="outline">Month</Button>
    <Button variant="outline">Year</Button>
  </ButtonGroup>
)

export const IconToolbar = () => (
  <ButtonGroup>
    <Button variant="outline" size="icon" aria-label="Bold">
      <BoldIcon />
    </Button>
    <Button variant="outline" size="icon" aria-label="Italic">
      <ItalicIcon />
    </Button>
    <Button variant="outline" size="icon" aria-label="Underline">
      <UnderlineIcon />
    </Button>
  </ButtonGroup>
)

export const SplitButton = () => (
  <ButtonGroup>
    <Button>Merge pull request</Button>
    <ButtonGroupSeparator />
    <Button size="icon" aria-label="More merge options">
      <ChevronDownIcon />
    </Button>
  </ButtonGroup>
)

export const WithTextAndInput = () => (
  <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
    <ButtonGroup style={{ width: 300 }}>
      <ButtonGroupText>
        <SearchIcon />
      </ButtonGroupText>
      <Input placeholder="Search repositories…" />
      <Button variant="outline">Go</Button>
    </ButtonGroup>
    <ButtonGroup>
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="acme.com" style={{ width: 140 }} />
    </ButtonGroup>
  </div>
)

export const Vertical = () => (
  <ButtonGroup orientation="vertical">
    <Button variant="outline">Zoom in</Button>
    <Button variant="outline">Zoom out</Button>
    <Button variant="outline">Reset view</Button>
  </ButtonGroup>
)
