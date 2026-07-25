import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "dataleap-design-system"
import { ChartLineIcon, SettingsIcon, UsersIcon } from "lucide-react"

export const Default = () => (
  <Tabs defaultValue="overview" style={{ width: 420 }}>
    <TabsList>
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
    </TabsList>
    <TabsContent value="overview">
      Your workspace processed 12,480 requests this month, a 23% increase over
      May.
    </TabsContent>
    <TabsContent value="analytics">Analytics panel.</TabsContent>
    <TabsContent value="reports">Reports panel.</TabsContent>
  </Tabs>
)

export const LineVariant = () => (
  <Tabs defaultValue="members" style={{ width: 420 }}>
    <TabsList variant="line">
      <TabsTrigger value="members">
        <UsersIcon /> Members
      </TabsTrigger>
      <TabsTrigger value="usage">
        <ChartLineIcon /> Usage
      </TabsTrigger>
      <TabsTrigger value="settings">
        <SettingsIcon /> Settings
      </TabsTrigger>
    </TabsList>
    <TabsContent value="members">
      8 members in this workspace. Invite teammates to collaborate on shared
      projects.
    </TabsContent>
  </Tabs>
)

export const Vertical = () => (
  <Tabs
    defaultValue="general"
    orientation="vertical"
    style={{ width: 420 }}
  >
    <TabsList>
      <TabsTrigger value="general">General</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
      <TabsTrigger value="advanced" disabled>
        Advanced
      </TabsTrigger>
    </TabsList>
    <TabsContent value="general">
      Manage workspace name, avatar, and default locale.
    </TabsContent>
  </Tabs>
)
