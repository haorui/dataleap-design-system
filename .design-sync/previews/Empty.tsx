import {
  Button,
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "dataleap-design-system"
import { FolderOpen, Inbox, Plus } from "lucide-react"

export const Basic = () => (
  <Empty style={{ width: 420, border: "1px dashed var(--border, #e5e5e5)" }}>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <FolderOpen />
      </EmptyMedia>
      <EmptyTitle>No projects yet</EmptyTitle>
      <EmptyDescription>
        You haven&apos;t created any projects. Get started by creating your
        first project.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <Button size="sm">
        <Plus data-icon="inline-start" /> New project
      </Button>
    </EmptyContent>
  </Empty>
)

export const WithSecondaryAction = () => (
  <Empty style={{ width: 420 }}>
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Inbox />
      </EmptyMedia>
      <EmptyTitle>Inbox is empty</EmptyTitle>
      <EmptyDescription>
        Notifications about mentions, reviews, and deployments will show up
        here.
      </EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div style={{ display: "flex", gap: 8 }}>
        <Button size="sm">Invite teammates</Button>
        <Button size="sm" variant="outline">
          Notification settings
        </Button>
      </div>
    </EmptyContent>
  </Empty>
)
