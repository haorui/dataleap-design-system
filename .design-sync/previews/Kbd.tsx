import { Kbd, KbdGroup } from "shadcn-stock-design"

export const Basic = () => (
  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
    <Kbd>⌘</Kbd>
    <Kbd>⇧</Kbd>
    <Kbd>⌥</Kbd>
    <Kbd>Ctrl</Kbd>
    <Kbd>Esc</Kbd>
    <Kbd>Enter</Kbd>
  </div>
)

export const Shortcuts = () => (
  <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 160 }}>Open command palette</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 160 }}>Save file</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>S</Kbd>
      </KbdGroup>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 160 }}>Toggle sidebar</span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  </div>
)

export const InText = () => (
  <p style={{ fontSize: 14, maxWidth: 380 }}>
    Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette, or use{" "}
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>/</Kbd>
    </KbdGroup>{" "}
    to see all shortcuts.
  </p>
)
