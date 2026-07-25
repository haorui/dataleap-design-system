---
category: Navigation
---
Tabbed panels on the base-ui Tabs primitive, with pill (default) and underline (line) list variants plus vertical orientation.

## Components

- `Tabs` — root; set `defaultValue` (or controlled `value`/`onValueChange`) and optional `orientation="vertical"`.
- `TabsList` — trigger container; `variant`: `default` (muted pill background) | `line` (transparent with active underline).
- `TabsTrigger` — one tab; `value` required, supports leading lucide icons and `disabled`.
- `TabsContent` — panel shown when its `value` is active.
- `tabsListVariants` — cva class builder for the list, for custom elements.

## Usage

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "dataleap-design-system"

<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="analytics">Analytics</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview panel content.</TabsContent>
  <TabsContent value="analytics">Analytics panel content.</TabsContent>
</Tabs>
```

```tsx
<Tabs defaultValue="members">
  <TabsList variant="line">
    <TabsTrigger value="members"><UsersIcon /> Members</TabsTrigger>
    <TabsTrigger value="settings"><SettingsIcon /> Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="members">…</TabsContent>
</Tabs>
```
