import {
  Badge,
  Button,
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "dataleap-design-system"
import { ChevronRight, FileText, Globe, Shield } from "lucide-react"

export const Basic = () => (
  <Item variant="outline" style={{ width: 420 }}>
    <ItemMedia variant="icon">
      <Globe />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Production deployment</ItemTitle>
      <ItemDescription>
        acme-website deployed to production 12 minutes ago.
      </ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button variant="outline" size="sm">
        View
      </Button>
    </ItemActions>
  </Item>
)

export const GroupWithSeparator = () => (
  <ItemGroup style={{ width: 420 }}>
    <Item>
      <ItemMedia variant="icon">
        <Shield />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Two-factor authentication</ItemTitle>
        <ItemDescription>Enabled via authenticator app.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Badge variant="secondary">On</Badge>
      </ItemActions>
    </Item>
    <ItemSeparator />
    <Item>
      <ItemMedia variant="icon">
        <FileText />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Audit logs</ItemTitle>
        <ItemDescription>Retained for 90 days on this plan.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRight size={16} />
      </ItemActions>
    </Item>
  </ItemGroup>
)

export const Variants = () => (
  <div style={{ display: "grid", gap: 12, width: 420 }}>
    <Item variant="default">
      <ItemContent>
        <ItemTitle>Default variant</ItemTitle>
        <ItemDescription>Transparent border, plain surface.</ItemDescription>
      </ItemContent>
    </Item>
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Outline variant</ItemTitle>
        <ItemDescription>Bordered card-like row.</ItemDescription>
      </ItemContent>
    </Item>
    <Item variant="muted">
      <ItemContent>
        <ItemTitle>Muted variant</ItemTitle>
        <ItemDescription>Subtle filled background.</ItemDescription>
      </ItemContent>
    </Item>
  </div>
)

export const WithHeaderFooter = () => (
  <Item variant="outline" size="sm" style={{ width: 420 }}>
    <ItemHeader>
      <ItemTitle>weekly-report.pdf</ItemTitle>
      <Badge variant="outline">2.4 MB</Badge>
    </ItemHeader>
    <ItemContent>
      <ItemDescription>
        Uploaded by Mia Kato. Shared with 6 teammates.
      </ItemDescription>
    </ItemContent>
    <ItemFooter>
      <span style={{ fontSize: 12, color: "var(--muted-foreground, #737373)" }}>
        Updated 2 hours ago
      </span>
      <Button variant="ghost" size="sm">
        Download
      </Button>
    </ItemFooter>
  </Item>
)
