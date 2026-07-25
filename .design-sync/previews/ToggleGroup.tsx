import { ToggleGroup, ToggleGroupItem } from "dataleap-design-system"
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  UnderlineIcon,
} from "lucide-react"

export const MultipleSelection = () => (
  <ToggleGroup toggleMultiple defaultValue={["bold", "italic"]}>
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const SingleOutline = () => (
  <ToggleGroup variant="outline" defaultValue={["center"]}>
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroup>
)

export const JoinedSegments = () => (
  <ToggleGroup variant="outline" spacing={0} defaultValue={["list"]}>
    <ToggleGroupItem value="list">
      <ListIcon data-icon="inline-start" /> Bulleted
    </ToggleGroupItem>
    <ToggleGroupItem value="ordered">
      <ListOrderedIcon data-icon="inline-start" /> Numbered
    </ToggleGroupItem>
  </ToggleGroup>
)

export const Sizes = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
    <ToggleGroup size="sm" variant="outline" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup size="default" variant="outline" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
    </ToggleGroup>
    <ToggleGroup size="lg" variant="outline" defaultValue={["bold"]}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
)

export const Vertical = () => (
  <ToggleGroup orientation="vertical" variant="outline" spacing={0} defaultValue={["center"]}>
    <ToggleGroupItem value="left">
      <AlignLeftIcon data-icon="inline-start" /> Left
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <AlignCenterIcon data-icon="inline-start" /> Center
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <AlignRightIcon data-icon="inline-start" /> Right
    </ToggleGroupItem>
  </ToggleGroup>
)
