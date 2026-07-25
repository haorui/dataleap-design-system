import {
  Button,
  Checkbox,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Input,
  Switch,
  Textarea,
} from "dataleap-design-system"

export const Basic = () => (
  <div style={{ width: 340 }}>
    <Field>
      <FieldLabel htmlFor="field-username">Username</FieldLabel>
      <Input id="field-username" placeholder="maria.gomez" />
      <FieldDescription>
        This is your public display name across the workspace.
      </FieldDescription>
    </Field>
  </div>
)

export const WithError = () => (
  <div style={{ width: 340 }}>
    <Field data-invalid>
      <FieldLabel htmlFor="field-email">Work email</FieldLabel>
      <Input
        id="field-email"
        aria-invalid
        defaultValue="maria@invalid"
        type="email"
      />
      <FieldError errors={[{ message: "Enter a valid email address." }]} />
    </Field>
  </div>
)

export const HorizontalWithSwitch = () => (
  <div style={{ width: 380 }}>
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>Email notifications</FieldTitle>
        <FieldDescription>
          Receive a digest of workspace activity every morning.
        </FieldDescription>
      </FieldContent>
      <Switch defaultChecked aria-label="Toggle email notifications" />
    </Field>
  </div>
)

export const FormGroup = () => (
  <div style={{ width: 380 }}>
    <FieldGroup>
      <FieldSet>
        <FieldLegend>Shipping address</FieldLegend>
        <FieldDescription>
          Where should we deliver your hardware kit?
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fg-street">Street</FieldLabel>
            <Input id="fg-street" placeholder="128 Market Street" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fg-city">City</FieldLabel>
            <Input id="fg-city" placeholder="San Francisco" />
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator>Delivery notes</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="fg-notes">Instructions</FieldLabel>
        <Textarea id="fg-notes" placeholder="Leave at the front desk…" rows={2} />
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="fg-terms" defaultChecked />
        <FieldLabel htmlFor="fg-terms">
          Save this address for future orders
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Button type="submit">Save address</Button>
        <Button variant="outline" type="button">
          Cancel
        </Button>
      </Field>
    </FieldGroup>
  </div>
)
