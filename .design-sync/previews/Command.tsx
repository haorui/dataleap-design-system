import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "dataleap-design-system"
import {
  Calculator,
  Calendar,
  CreditCard,
  FileText,
  Settings,
  Smile,
  User,
} from "lucide-react"

export const Palette = () => (
  <Command
    style={{ width: 420, border: "1px solid var(--border)" }}
    value="Search notes"
  >
    <CommandInput placeholder="Type a command or search…" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <Calendar /> Schedule meeting
        </CommandItem>
        <CommandItem>
          <FileText /> Search notes
        </CommandItem>
        <CommandItem>
          <Smile /> Insert emoji
        </CommandItem>
        <CommandItem disabled>
          <Calculator /> Calculator
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem>
          <User /> Profile
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <CreditCard /> Billing
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Settings /> Settings
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
)

export const Filtered = () => (
  <Command style={{ width: 420, border: "1px solid var(--border)" }}>
    <CommandInput placeholder="Type a command or search…" value="set" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Results">
        <CommandItem>
          <Settings /> Open settings
          <CommandShortcut>⌘,</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <User /> Account settings
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
)

export const EmptyState = () => (
  <Command style={{ width: 420, border: "1px solid var(--border)" }}>
    <CommandInput placeholder="Type a command or search…" value="zzzz" />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <Calendar /> Schedule meeting
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
)
