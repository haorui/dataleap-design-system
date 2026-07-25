---
category: Forms
---

A one-time-password input built on the `input-otp` library, rendering individual character slots with an optional group separator.

## Components

- `InputOTP` — root; requires `maxLength`; accepts `value`/`onChange`, `disabled`, `pattern`, `containerClassName`.
- `InputOTPGroup` — visually fuses a run of slots (rounded outer corners).
- `InputOTPSlot` — a single character cell; requires `index`; shows the char, active ring, and fake caret.
- `InputOTPSeparator` — minus-icon divider between groups.

## Usage

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "dataleap-design-system"

export function VerificationCode() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```
