import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  Kbd,
} from "dataleap-design-system"
import { CopyIcon, CreditCardIcon, InfoIcon, SearchIcon } from "lucide-react"

export const WithIcons = () => (
  <div style={{ display: "grid", gap: 12, width: 320 }}>
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search documentation…" />
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <CreditCardIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Card number" />
    </InputGroup>
  </div>
)

export const TextAddons = () => (
  <div style={{ display: "grid", gap: 12, width: 320 }}>
    <InputGroup>
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="mysite" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>.vercel.app</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="0.00" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>USD</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  </div>
)

export const WithButtons = () => (
  <div style={{ display: "grid", gap: 12, width: 360 }}>
    <InputGroup>
      <InputGroupInput readOnly value="npm install dataleap-design-system" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" aria-label="Copy command">
          <CopyIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
    <InputGroup>
      <InputGroupInput placeholder="team@acme.com" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="secondary">Invite</InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
)

export const WithTextarea = () => (
  <InputGroup style={{ width: 360 }}>
    <InputGroupTextarea placeholder="Leave feedback for the team…" rows={3} />
    <InputGroupAddon align="block-end">
      <InputGroupText>
        <InfoIcon /> Markdown is supported
      </InputGroupText>
      <InputGroupButton variant="default" style={{ marginLeft: "auto" }}>
        Submit
      </InputGroupButton>
    </InputGroupAddon>
  </InputGroup>
)

export const States = () => (
  <div style={{ display: "grid", gap: 12, width: 320 }}>
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search is disabled" disabled />
    </InputGroup>
    <InputGroup>
      <InputGroupInput
        aria-invalid
        defaultValue="not-an-email"
        placeholder="Email address"
      />
      <InputGroupAddon align="inline-end">
        <InfoIcon />
      </InputGroupAddon>
    </InputGroup>
  </div>
)
