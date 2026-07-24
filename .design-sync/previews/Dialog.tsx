import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
} from "shadcn-stock-design"

export const EditProfileOpen = () => (
  <Dialog defaultOpen>
    <DialogTrigger render={<Button variant="outline" />}>
      Edit profile
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <Label htmlFor="dlg-name">Name</Label>
          <Input id="dlg-name" defaultValue="Frida Kahlo" />
        </div>
        <div style={{ display: "grid", gap: 6 }}>
          <Label htmlFor="dlg-username">Username</Label>
          <Input id="dlg-username" defaultValue="@frida" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>
        <Button>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export const ShareLinkOpen = () => (
  <Dialog defaultOpen>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Share link</DialogTitle>
        <DialogDescription>
          Anyone with this link will be able to view the document.
        </DialogDescription>
      </DialogHeader>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Input
          readOnly
          defaultValue="https://app.example.com/docs/q2-roadmap"
          aria-label="Share link"
        />
        <Button variant="secondary" size="sm">
          Copy
        </Button>
      </div>
      <DialogFooter showCloseButton />
    </DialogContent>
  </Dialog>
)

export const TriggerClosed = () => (
  <div style={{ display: "flex", gap: 12, padding: 24 }}>
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Edit profile
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Closed by default.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger render={<Button />}>New project</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New project</DialogTitle>
          <DialogDescription>Closed by default.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </div>
)
