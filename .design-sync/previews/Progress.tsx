import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "shadcn-stock-design"

export const Basic = () => (
  <div style={{ display: "grid", gap: 20, width: 360 }}>
    <Progress value={25} />
    <Progress value={60} />
    <Progress value={100} />
  </div>
)

export const WithLabel = () => (
  <Progress value={45} style={{ width: 360 }}>
    <ProgressLabel>Uploading assets</ProgressLabel>
    <ProgressValue />
  </Progress>
)

export const CustomValueFormat = () => (
  <Progress value={72} style={{ width: 360 }}>
    <ProgressLabel>Storage used</ProgressLabel>
    <ProgressValue>{(_, value) => `${value} GB of 100 GB`}</ProgressValue>
  </Progress>
)
