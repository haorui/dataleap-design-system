import { Button } from "dataleap-design-system"
import { ArrowRight, Loader2, Plus, Trash2 } from "lucide-react"

export const Variants = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Button>Save changes</Button>
    <Button variant="secondary">Duplicate</Button>
    <Button variant="outline">Preview</Button>
    <Button variant="ghost">Dismiss</Button>
    <Button variant="destructive">Delete</Button>
    <Button variant="link">Learn more</Button>
  </div>
)

export const Sizes = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Button size="xs">Extra small</Button>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon" aria-label="Add item">
      <Plus />
    </Button>
  </div>
)

export const WithIcons = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Button>
      Continue <ArrowRight data-icon="inline-end" />
    </Button>
    <Button variant="destructive">
      <Trash2 data-icon="inline-start" /> Remove member
    </Button>
    <Button variant="outline" disabled>
      <Loader2 className="animate-spin" data-icon="inline-start" /> Saving…
    </Button>
  </div>
)

export const Disabled = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
    <Button disabled>Save changes</Button>
    <Button variant="secondary" disabled>
      Duplicate
    </Button>
    <Button variant="destructive" disabled>
      Delete
    </Button>
  </div>
)
