import {
  Avatar,
  AvatarFallback,
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "dataleap-design-system"
import { CalendarDaysIcon } from "lucide-react"

export const ProfilePreviewOpen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "48px 48px 220px",
    }}
  >
    <HoverCard defaultOpen>
      <HoverCardTrigger render={<Button variant="link" />}>
        @nextjs
      </HoverCardTrigger>
      <HoverCardContent>
        <div style={{ display: "flex", gap: 12 }}>
          <Avatar>
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ fontWeight: 600 }}>@nextjs</div>
            <div>The React framework — created and maintained by Vercel.</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                opacity: 0.6,
                fontSize: 12,
              }}
            >
              <CalendarDaysIcon size={14} />
              Joined December 2021
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
)

export const TopSideOpen = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "200px 48px 48px",
    }}
  >
    <HoverCard defaultOpen>
      <HoverCardTrigger render={<Button variant="link" />}>
        design-system
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <div style={{ display: "grid", gap: 4 }}>
          <div style={{ fontWeight: 600 }}>design-system</div>
          <div>
            Shared component library used by 14 internal apps. Last published
            3 days ago.
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
)

export const TriggerClosed = () => (
  <div style={{ display: "flex", gap: 12, padding: 24 }}>
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" />}>
        @shadcn
      </HoverCardTrigger>
      <HoverCardContent>Closed by default.</HoverCardContent>
    </HoverCard>
  </div>
)
