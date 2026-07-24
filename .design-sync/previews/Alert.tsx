import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
  Button,
} from "shadcn-stock-design"
import { CheckCircle2Icon, InfoIcon, OctagonAlertIcon } from "lucide-react"

export const Default = () => (
  <div style={{ display: "grid", gap: 12, width: 440 }}>
    <Alert>
      <CheckCircle2Icon />
      <AlertTitle>Changes saved</AlertTitle>
      <AlertDescription>
        Your workspace settings have been updated successfully.
      </AlertDescription>
    </Alert>
    <Alert>
      <InfoIcon />
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        Scheduled maintenance starts Saturday at 02:00 UTC and lasts about an
        hour.
      </AlertDescription>
    </Alert>
  </div>
)

export const Destructive = () => (
  <Alert variant="destructive" style={{ width: 440 }}>
    <OctagonAlertIcon />
    <AlertTitle>Payment failed</AlertTitle>
    <AlertDescription>
      Your card ending in 4242 was declined. Update your billing details to
      keep the workspace active.
    </AlertDescription>
  </Alert>
)

export const WithAction = () => (
  <Alert style={{ width: 440 }}>
    <InfoIcon />
    <AlertTitle>Update available</AlertTitle>
    <AlertDescription>
      Version 2.4 includes performance improvements and bug fixes.
    </AlertDescription>
    <AlertAction>
      <Button variant="outline" size="sm">
        Update
      </Button>
    </AlertAction>
  </Alert>
)

export const TitleOnly = () => (
  <Alert style={{ width: 440 }}>
    <CheckCircle2Icon />
    <AlertTitle>Your invitation has been sent.</AlertTitle>
  </Alert>
)
