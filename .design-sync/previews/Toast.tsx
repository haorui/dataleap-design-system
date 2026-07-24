import * as React from "react"
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  useToastManager,
} from "shadcn-stock-design"
import { CircleCheckIcon, InfoIcon } from "lucide-react"

// The Toast system is imperative (base-ui createToastManager). For a static
// preview we mount a dedicated manager per story, push toasts on mount with
// timeout: 0 (never auto-dismiss), and pin the viewport inside the cell
// instead of fixed to the browser viewport.

function InlineToasts({
  manager,
  height = 130,
}: {
  manager: ReturnType<typeof createToastManager>
  height?: number
}) {
  return (
    <ToastProvider toastManager={manager}>
      <div style={{ position: "relative", width: 380, height }}>
        <ToastViewport
          style={{
            position: "absolute",
            inset: "auto 0 0 0",
            width: "100%",
            maxWidth: "100%",
            margin: 0,
          }}
        >
          <InlineToastList />
        </ToastViewport>
      </div>
    </ToastProvider>
  )
}

function InlineToastList() {
  const { toasts } = useToastManager()

  return (
    <>
      {toasts.map((t) => (
        <Toast key={t.id} toast={t}>
          <ToastContent>
            {t.type === "success" ? (
              <CircleCheckIcon style={{ width: 16, height: 16, flexShrink: 0 }} aria-hidden="true" />
            ) : t.type === "info" ? (
              <InfoIcon style={{ width: 16, height: 16, flexShrink: 0 }} aria-hidden="true" />
            ) : null}
            <div style={{ display: "flex", minWidth: 0, flex: 1, flexDirection: "column", gap: 4 }}>
              <ToastTitle />
              <ToastDescription />
            </div>
            <ToastAction />
            <ToastClose />
          </ToastContent>
        </Toast>
      ))}
    </>
  )
}

const successManager = createToastManager()

export const Success = () => {
  const added = React.useRef(false)
  React.useEffect(() => {
    if (added.current) return
    added.current = true
    successManager.add({
      type: "success",
      title: "Changes saved",
      description: "Your profile has been updated.",
      timeout: 0,
    })
  }, [])

  return <InlineToasts manager={successManager} />
}

const actionManager = createToastManager()

export const WithAction = () => {
  const added = React.useRef(false)
  React.useEffect(() => {
    if (added.current) return
    added.current = true
    actionManager.add({
      type: "info",
      title: "New deployment",
      description: "acme-website was deployed to production.",
      timeout: 0,
      actionProps: { children: "View" },
    })
  }, [])

  return <InlineToasts manager={actionManager} />
}

const stackManager = createToastManager()

export const Stacked = () => {
  const added = React.useRef(false)
  React.useEffect(() => {
    if (added.current) return
    added.current = true
    stackManager.add({
      title: "Export queued",
      description: "We will email you when it is ready.",
      timeout: 0,
    })
    stackManager.add({
      type: "success",
      title: "Member invited",
      description: "kai@acme.com has been invited.",
      timeout: 0,
    })
  }, [])

  return <InlineToasts manager={stackManager} height={170} />
}
