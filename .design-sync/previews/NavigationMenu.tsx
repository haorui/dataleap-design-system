import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "dataleap-design-system"

const panelLink = (title: string, description: string) => (
  <NavigationMenuLink href="#">
    <div>
      <div style={{ fontWeight: 500 }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--muted-foreground)" }}>
        {description}
      </div>
    </div>
  </NavigationMenuLink>
)

export const TopNav = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ display: "grid", gap: 4, width: 280, padding: 4 }}>
            {panelLink("Analytics", "Real-time dashboards and reports")}
            {panelLink("Automation", "Build workflows without code")}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ display: "grid", gap: 4, width: 280, padding: 4 }}>
            {panelLink("Documentation", "Guides and API reference")}
            {panelLink("Blog", "Product news and engineering posts")}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="#"
          className={navigationMenuTriggerStyle()}
        >
          Pricing
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="#"
          className={navigationMenuTriggerStyle()}
        >
          Docs
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

export const PanelOpen = () => (
  <div style={{ minHeight: 260, paddingBottom: 8 }}>
    <NavigationMenu defaultValue="products">
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div style={{ display: "grid", gap: 4, width: 300, padding: 4 }}>
              {panelLink("Analytics", "Real-time dashboards and reports")}
              {panelLink("Automation", "Build workflows without code")}
              {panelLink("Data Warehouse", "Query everything in one place")}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="company">
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div style={{ display: "grid", gap: 4, width: 260, padding: 4 }}>
              {panelLink("About", "Our mission and team")}
              {panelLink("Careers", "We are hiring")}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="#"
            className={navigationMenuTriggerStyle()}
          >
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
)

export const LinksOnly = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="#"
          className={navigationMenuTriggerStyle()}
          active
        >
          Overview
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
          Members
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
          Billing
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
          Settings
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)
