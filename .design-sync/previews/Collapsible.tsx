import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Item,
  ItemContent,
  ItemTitle,
} from "shadcn-stock-design"
import { ChevronsUpDown } from "lucide-react"

export const Basic = () => (
  <Collapsible defaultOpen style={{ width: 360 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "4px 0",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 500 }}>
        @haorui starred 3 repositories
      </span>
      <CollapsibleTrigger
        render={<Button variant="ghost" size="icon-sm" aria-label="Toggle" />}
      >
        <ChevronsUpDown />
      </CollapsibleTrigger>
    </div>
    <div style={{ display: "grid", gap: 8, paddingTop: 4 }}>
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>base-ui/react</ItemTitle>
        </ItemContent>
      </Item>
      <CollapsibleContent style={{ display: "grid", gap: 8 }}>
        <Item variant="outline" size="sm">
          <ItemContent>
            <ItemTitle>shadcn-ui/ui</ItemTitle>
          </ItemContent>
        </Item>
        <Item variant="outline" size="sm">
          <ItemContent>
            <ItemTitle>tailwindlabs/tailwindcss</ItemTitle>
          </ItemContent>
        </Item>
      </CollapsibleContent>
    </div>
  </Collapsible>
)

export const Closed = () => (
  <Collapsible style={{ width: 360 }}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "4px 0",
      }}
    >
      <span style={{ fontSize: 14, fontWeight: 500 }}>
        Advanced settings
      </span>
      <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>
        Show
      </CollapsibleTrigger>
    </div>
    <CollapsibleContent>
      <p style={{ fontSize: 14, paddingTop: 8 }}>
        Environment variables, build overrides, and deployment hooks.
      </p>
    </CollapsibleContent>
  </Collapsible>
)
