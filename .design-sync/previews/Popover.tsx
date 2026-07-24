import * as React from "react"
import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "shadcn-stock-design"

const centered: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: "48px 48px 280px",
}

export const DimensionsOpen = () => (
  <div style={centered}>
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div style={{ display: "grid", gap: 8 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Label htmlFor="pop-width">Width</Label>
            <Input id="pop-width" defaultValue="100%" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Label htmlFor="pop-height">Height</Label>
            <Input id="pop-height" defaultValue="25px" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  </div>
)

export const SimpleOpen = () => (
  <div style={centered}>
    <Popover defaultOpen>
      <PopoverTrigger render={<Button variant="secondary" />}>
        Share
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start">
        <PopoverHeader>
          <PopoverTitle>Share this document</PopoverTitle>
          <PopoverDescription>
            Anyone with the link can view.
          </PopoverDescription>
        </PopoverHeader>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Input
            readOnly
            defaultValue="https://app.example.com/docs/42"
            aria-label="Share link"
          />
          <Button size="sm">Copy</Button>
        </div>
      </PopoverContent>
    </Popover>
  </div>
)

export const TriggerClosed = () => (
  <div style={{ display: "flex", gap: 12, padding: 24 }}>
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open popover
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover</PopoverTitle>
          <PopoverDescription>Closed by default.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  </div>
)
