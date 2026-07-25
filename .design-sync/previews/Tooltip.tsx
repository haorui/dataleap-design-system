import {
  Button,
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "dataleap-design-system"
import { PlusIcon } from "lucide-react"

export const BasicOpen = () => (
  <TooltipProvider>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "80px 48px 48px",
      }}
    >
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline" />}>
          Hover me
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)

export const WithKbdOpen = () => (
  <TooltipProvider>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "80px 48px 48px",
      }}
    >
      <Tooltip defaultOpen>
        <TooltipTrigger
          render={<Button size="icon" aria-label="New item" />}
        >
          <PlusIcon />
        </TooltipTrigger>
        <TooltipContent>
          New item <Kbd>⌘N</Kbd>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)

export const SidesOpen = () => (
  <TooltipProvider>
    <div
      style={{
        display: "flex",
        gap: 140,
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 48px",
      }}
    >
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline" />}>
          Bottom
        </TooltipTrigger>
        <TooltipContent side="bottom">Appears below</TooltipContent>
      </Tooltip>
      <Tooltip defaultOpen>
        <TooltipTrigger render={<Button variant="outline" />}>
          Right
        </TooltipTrigger>
        <TooltipContent side="right">Appears to the right</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)

export const TriggerClosed = () => (
  <TooltipProvider>
    <div style={{ display: "flex", gap: 12, padding: 24 }}>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" />}>
          Hover me
        </TooltipTrigger>
        <TooltipContent>Closed by default</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
)
