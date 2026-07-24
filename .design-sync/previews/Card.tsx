import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from "shadcn-stock-design"

export const Basic = () => (
  <Card style={{ width: 360 }}>
    <CardHeader>
      <CardTitle>Monthly report</CardTitle>
      <CardDescription>Usage summary for June 2026.</CardDescription>
      <CardAction>
        <Badge variant="secondary">New</Badge>
      </CardAction>
    </CardHeader>
    <CardContent>
      Your workspace processed 12,480 requests this month, a 23% increase over
      May. Storage usage is at 61% of your plan limit.
    </CardContent>
    <CardFooter style={{ gap: 8 }}>
      <Button size="sm">View details</Button>
      <Button size="sm" variant="ghost">
        Dismiss
      </Button>
    </CardFooter>
  </Card>
)

export const WithForm = () => (
  <Card style={{ width: 360 }}>
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one click.</CardDescription>
    </CardHeader>
    <CardContent style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gap: 6 }}>
        <Label htmlFor="card-name">Name</Label>
        <Input id="card-name" placeholder="acme-website" />
      </div>
      <div style={{ display: "grid", gap: 6 }}>
        <Label htmlFor="card-domain">Domain</Label>
        <Input id="card-domain" placeholder="acme.com" />
      </div>
    </CardContent>
    <CardFooter style={{ justifyContent: "flex-end", gap: 8 }}>
      <Button variant="outline" size="sm">
        Cancel
      </Button>
      <Button size="sm">Deploy</Button>
    </CardFooter>
  </Card>
)

export const Small = () => (
  <Card size="sm" style={{ width: 300 }}>
    <CardHeader>
      <CardTitle>Storage</CardTitle>
      <CardDescription>61% of 100 GB used</CardDescription>
    </CardHeader>
    <CardContent>Upgrade your plan to get more storage.</CardContent>
  </Card>
)
