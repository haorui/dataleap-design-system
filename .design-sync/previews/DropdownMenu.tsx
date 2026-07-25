import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "dataleap-design-system"
import {
  CreditCard,
  LogOut,
  Settings,
  Trash2,
  User,
  Users,
} from "lucide-react"

export const UserMenuOpen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      minHeight: 300,
      paddingBottom: 8,
    }}
  >
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger
        render={<Button variant="outline">My Account</Button>}
      />
      <DropdownMenuContent style={{ minWidth: 220 }}>
        <DropdownMenuGroup>
          <DropdownMenuLabel>signed in as ana@acme.com</DropdownMenuLabel>
          <DropdownMenuItem>
            <User /> Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard /> Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings /> Settings
            <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Users /> Invite teammates
        </DropdownMenuItem>
        <DropdownMenuItem disabled>API keys</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <Trash2 /> Delete workspace
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut /> Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)

export const CheckboxAndRadioOpen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "flex-start",
      minHeight: 280,
      paddingBottom: 8,
    }}
  >
    <DropdownMenu defaultOpen modal={false}>
      <DropdownMenuTrigger
        render={<Button variant="outline">View options</Button>}
      />
      <DropdownMenuContent style={{ minWidth: 200 }}>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked>
            Show toolbar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>
            Show line numbers
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="bottom">
          <DropdownMenuLabel>Panel position</DropdownMenuLabel>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)

export const ClosedTrigger = () => (
  <div style={{ display: "flex", gap: 12 }}>
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline">Options</Button>}
      />
      <DropdownMenuContent>
        <DropdownMenuItem>Rename</DropdownMenuItem>
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button>New item</Button>} />
      <DropdownMenuContent>
        <DropdownMenuItem>File</DropdownMenuItem>
        <DropdownMenuItem>Folder</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
)
