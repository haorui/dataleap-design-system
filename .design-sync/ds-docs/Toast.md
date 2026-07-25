---
category: Feedback
---
Imperative toast notifications on base-ui's toast manager, with a stacked bottom-right viewport and swipe-to-dismiss.

## Components

- `Toaster` — drop-in provider + portal + viewport + list; mount once near the app root, then call `toast.add(...)`.
- `toast` — the default shared toast manager (`toast.add({ title, description, type, timeout, actionProps })`). `type` drives the icon: `success | info | warning | error | loading`.
- `createToastManager` / `useToastManager` — create an isolated manager, or read `{ toasts }` inside a provider for a custom list.
- `ToastProvider` / `ToastPortal` / `ToastViewport` — building blocks for custom placement (viewport defaults to fixed bottom-right, max-w-sm).
- `Toast` — single toast root (`toast` prop = toast object); popover-styled card that handles stacking/swipe transforms.
- `ToastContent` — horizontal flex layout inside a toast; content of non-frontmost toasts fades out.
- `ToastTitle` / `ToastDescription` — auto-fill from the toast object's `title`/`description` when rendered without children.
- `ToastAction` — action slot, renders as a small outline `Button` by default; wired to `actionProps`.
- `ToastClose` — X dismiss button (ghost icon `Button` by default).

## Usage

```tsx
import { Toaster, toast, Button } from "dataleap-design-system"

// once, near the root
<Toaster />

// anywhere (including outside React)
<Button
  onClick={() =>
    toast.add({
      type: "success",
      title: "Changes saved",
      description: "Your profile has been updated.",
    })
  }
>
  Save
</Button>
```

```tsx
toast.add({
  title: "New deployment",
  description: "acme-website was deployed to production.",
  timeout: 0, // never auto-dismiss
  actionProps: { children: "View", onClick: () => router.push("/deploys") },
})
```
