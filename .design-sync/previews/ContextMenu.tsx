import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "shadcn-stock-design"
import { Copy, FolderInput, Pencil, Trash2 } from "lucide-react"

// Static-capture glue: fire a real contextmenu event once so the menu opens
// anchored inside the trigger zone (ContextMenu.Root has no `modal`/anchor API).
const openOnMount = (el: HTMLDivElement | null) => {
  if (!el || (el as any).__dsOpened) return
  ;(el as any).__dsOpened = true
  setTimeout(() => {
    const r = el.getBoundingClientRect()
    el.dispatchEvent(
      new MouseEvent("contextmenu", {
        bubbles: true,
        cancelable: true,
        clientX: r.left + 40,
        clientY: r.top + r.height - 24,
      })
    )
  }, 50)
}

const triggerZoneStyle = {
  display: "flex",
  height: 120,
  width: 280,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  border: "1px dashed var(--border)",
  fontSize: 14,
  color: "var(--muted-foreground)",
}

export const FileMenuOpen = () => (
  <div style={{ minHeight: 320, paddingBottom: 8 }}>
    <ContextMenu>
      <ContextMenuTrigger>
        <div ref={openOnMount} style={triggerZoneStyle}>
          Right-click on “report.pdf”
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent style={{ minWidth: 200 }}>
        <ContextMenuGroup>
          <ContextMenuLabel>report.pdf</ContextMenuLabel>
          <ContextMenuItem>
            <Pencil /> Rename
            <ContextMenuShortcut>F2</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy /> Copy
            <ContextMenuShortcut>⌘C</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <FolderInput /> Move to
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Archive</ContextMenuItem>
            <ContextMenuItem>Shared drive</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>Pinned</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="anyone">
          <ContextMenuLabel>Share with</ContextMenuLabel>
          <ContextMenuRadioItem value="anyone">Anyone</ContextMenuRadioItem>
          <ContextMenuRadioItem value="team">Team only</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 /> Delete
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </div>
)

export const TriggerZone = () => (
  <ContextMenu>
    <ContextMenuTrigger>
      <div style={triggerZoneStyle}>Right-click here</div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Back</ContextMenuItem>
      <ContextMenuItem disabled>Forward</ContextMenuItem>
      <ContextMenuItem>Reload</ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Inspect</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
)
