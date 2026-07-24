import * as React from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "shadcn-stock-design"

const panelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  fontSize: 13,
  fontWeight: 500,
}

export const TwoPanels = () => (
  <div
    style={{
      width: 420,
      height: 180,
      border: "1px solid var(--border)",
      borderRadius: 10,
      overflow: "hidden",
    }}
  >
    <ResizablePanelGroup orientation="horizontal">
      <ResizablePanel defaultSize={40}>
        <div style={panelStyle}>Sidebar</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div style={panelStyle}>Content</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
)

export const NestedVertical = () => (
  <div
    style={{
      width: 420,
      height: 220,
      border: "1px solid var(--border)",
      borderRadius: 10,
      overflow: "hidden",
    }}
  >
    <ResizablePanelGroup orientation="horizontal">
      <ResizablePanel defaultSize={35}>
        <div style={panelStyle}>Explorer</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={65}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={70}>
            <div style={panelStyle}>Editor</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div style={panelStyle}>Terminal</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
)
