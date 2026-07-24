import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "shadcn-stock-design"

export const BottomDrawerOpen = () => (
  <Drawer defaultOpen showSwipeHandle>
    <DrawerTrigger render={<Button variant="outline" />}>
      Open drawer
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Move goal</DrawerTitle>
        <DrawerDescription>
          Set your daily activity goal for the next 30 days.
        </DrawerDescription>
      </DrawerHeader>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
          padding: "24px 16px",
        }}
      >
        <Button variant="outline" size="icon" aria-label="Decrease goal">
          -
        </Button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 44, fontWeight: 700, lineHeight: 1 }}>
            350
          </div>
          <div style={{ fontSize: 12, opacity: 0.6, marginTop: 4 }}>
            CALORIES / DAY
          </div>
        </div>
        <Button variant="outline" size="icon" aria-label="Increase goal">
          +
        </Button>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export const RightDrawerOpen = () => (
  <Drawer defaultOpen swipeDirection="right">
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Notifications</DrawerTitle>
        <DrawerDescription>
          You have 3 unread notifications.
        </DrawerDescription>
      </DrawerHeader>
      <div style={{ display: "grid", gap: 12, padding: 16 }}>
        <div style={{ display: "grid", gap: 2 }}>
          <strong>Deployment succeeded</strong>
          <span style={{ opacity: 0.6 }}>acme-website · 2 minutes ago</span>
        </div>
        <div style={{ display: "grid", gap: 2 }}>
          <strong>New team member</strong>
          <span style={{ opacity: 0.6 }}>Maya joined your team · 1 hour ago</span>
        </div>
        <div style={{ display: "grid", gap: 2 }}>
          <strong>Usage alert</strong>
          <span style={{ opacity: 0.6 }}>Storage at 80% · Yesterday</span>
        </div>
      </div>
      <DrawerFooter>
        <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
)

export const TriggerClosed = () => (
  <div style={{ display: "flex", gap: 12, padding: 24 }}>
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" />}>
        Open drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer</DrawerTitle>
          <DrawerDescription>Closed by default.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  </div>
)
