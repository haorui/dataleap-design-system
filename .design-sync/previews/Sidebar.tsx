import {
  Badge,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "dataleap-design-system"
import {
  FolderIcon,
  HomeIcon,
  InboxIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"

// collapsible="none" renders the sidebar in normal flow (the default
// "offcanvas" mode is position:fixed + hidden below the md breakpoint, which
// cannot be captured statically).

export const AppFrame = () => (
  <div
    style={{
      width: 840,
      height: 480,
      border: "1px solid var(--border)",
      borderRadius: 12,
      overflow: "hidden",
    }}
  >
    <SidebarProvider style={{ minHeight: "100%", height: "100%" }}>
      <Sidebar collapsible="none" style={{ height: "100%" }}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <span
                  style={{
                    display: "flex",
                    width: 32,
                    height: 32,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 8,
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                  }}
                >
                  <SparklesIcon />
                </span>
                <span style={{ display: "grid", lineHeight: 1.3 }}>
                  <span style={{ fontWeight: 600 }}>Acme Inc</span>
                  <span style={{ fontSize: 12, opacity: 0.7 }}>Pro plan</span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive>
                    <LayoutDashboardIcon /> <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <InboxIcon /> <span>Inbox</span>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>12</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <UsersIcon /> <span>Members</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FolderIcon /> <span>Website redesign</span>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton isActive>
                        <span>Overview</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>
                        <span>Tasks</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FolderIcon /> <span>Mobile app</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <SettingsIcon /> <span>Settings</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <SidebarTrigger />
          <span style={{ fontSize: 14, fontWeight: 500 }}>Dashboard</span>
          <span style={{ marginLeft: "auto" }}>
            <Badge variant="secondary">Production</Badge>
          </span>
        </header>
        <div style={{ display: "grid", gap: 12, padding: 16 }}>
          <div
            style={{
              height: 120,
              borderRadius: 10,
              background: "var(--muted)",
            }}
          />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div style={{ height: 100, borderRadius: 10, background: "var(--muted)" }} />
            <div style={{ height: 100, borderRadius: 10, background: "var(--muted)" }} />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  </div>
)

export const LoadingMenu = () => (
  <div
    style={{
      width: 280,
      height: 320,
      border: "1px solid var(--border)",
      borderRadius: 12,
      overflow: "hidden",
    }}
  >
    <SidebarProvider style={{ minHeight: "100%", height: "100%" }}>
      <Sidebar collapsible="none" style={{ height: "100%", width: "100%" }}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <HomeIcon /> <span>Acme Inc</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {[0, 1, 2, 3, 4].map((i) => (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuSkeleton showIcon />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  </div>
)
