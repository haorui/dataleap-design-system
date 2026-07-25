---
category: Navigation
---
Full app-shell sidebar system with collapsible desktop rail, mobile sheet fallback, grouped menus, and an inset main area. Everything must live inside `SidebarProvider`.

## Components

- `SidebarProvider` — context + wrapper (`min-h-svh w-full flex`); manages expanded/collapsed state, `Cmd/Ctrl+B` shortcut, and a state cookie. Props: `defaultOpen`, controlled `open`/`onOpenChange`.
- `Sidebar` — the sidebar itself; `side`: `left | right`, `variant`: `sidebar | floating | inset`, `collapsible`: `offcanvas | icon | none`. Desktop default is a fixed 16rem panel (hidden below `md`, where it becomes a `Sheet`); `collapsible="none"` renders in normal flow.
- `SidebarTrigger` — ghost icon button that toggles the sidebar (uses `useSidebar`).
- `SidebarRail` — invisible edge strip for click-to-toggle resizing affordance.
- `SidebarInset` — the `main` content area next to the sidebar (rounded/elevated with `variant="inset"`).
- `SidebarHeader` / `SidebarContent` / `SidebarFooter` — vertical sections; content scrolls.
- `SidebarInput` — search input styled for the sidebar.
- `SidebarSeparator` — inset horizontal divider.
- `SidebarGroup` / `SidebarGroupLabel` / `SidebarGroupAction` / `SidebarGroupContent` — labeled section with optional top-right action button.
- `SidebarMenu` / `SidebarMenuItem` / `SidebarMenuButton` — the nav list; button supports `isActive`, `variant` (`default | outline`), `size` (`sm | default | lg`), and a `tooltip` shown when collapsed to icons.
- `SidebarMenuAction` — per-item trailing icon button (`showOnHover` optional).
- `SidebarMenuBadge` — trailing count badge for a menu item.
- `SidebarMenuSkeleton` — loading placeholder row (`showIcon` optional).
- `SidebarMenuSub` / `SidebarMenuSubItem` / `SidebarMenuSubButton` — indented nested nav with left border; sub-button supports `isActive` and `size` (`sm | md`).
- `useSidebar` — hook exposing `{ state, open, setOpen, isMobile, toggleSidebar }`.

## Usage

```tsx
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
  SidebarProvider, SidebarTrigger,
} from "dataleap-design-system"
import { HomeIcon, InboxIcon } from "lucide-react"

<SidebarProvider>
  <Sidebar>
    <SidebarHeader>Acme Inc</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                <HomeIcon /> <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <InboxIcon /> <span>Inbox</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  <SidebarInset>
    <header className="flex items-center gap-2 border-b p-2">
      <SidebarTrigger />
    </header>
    {/* page content */}
  </SidebarInset>
</SidebarProvider>
```
