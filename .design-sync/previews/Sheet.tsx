import {
  Button,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "dataleap-design-system"

export const RightSideOpen = () => (
  <Sheet defaultOpen>
    <SheetTrigger render={<Button variant="outline" />}>
      Edit profile
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div style={{ display: "grid", gap: 12, padding: "0 16px" }}>
        <div style={{ display: "grid", gap: 6 }}>
          <Label htmlFor="sheet-name">Name</Label>
          <Input id="sheet-name" defaultValue="Frida Kahlo" />
        </div>
        <div style={{ display: "grid", gap: 6 }}>
          <Label htmlFor="sheet-email">Email</Label>
          <Input id="sheet-email" defaultValue="frida@example.com" />
        </div>
      </div>
      <SheetFooter>
        <Button>Save changes</Button>
        <SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export const LeftSideOpen = () => (
  <Sheet defaultOpen>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>Jump to a section of the app.</SheetDescription>
      </SheetHeader>
      <nav
        style={{
          display: "grid",
          gap: 4,
          padding: "0 16px",
          justifyItems: "start",
        }}
      >
        <Button variant="ghost" size="sm">
          Dashboard
        </Button>
        <Button variant="ghost" size="sm">
          Projects
        </Button>
        <Button variant="ghost" size="sm">
          Deployments
        </Button>
        <Button variant="ghost" size="sm">
          Settings
        </Button>
      </nav>
    </SheetContent>
  </Sheet>
)

export const BottomSideOpen = () => (
  <Sheet defaultOpen>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Cookie preferences</SheetTitle>
        <SheetDescription>
          We use cookies to improve your experience. Choose which ones to
          allow.
        </SheetDescription>
      </SheetHeader>
      <SheetFooter style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <SheetClose render={<Button variant="outline" />}>
          Reject all
        </SheetClose>
        <Button>Accept all</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
)

export const TriggerClosed = () => (
  <div style={{ display: "flex", gap: 12, padding: 24 }}>
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Open sheet
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet</SheetTitle>
          <SheetDescription>Closed by default.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
)
