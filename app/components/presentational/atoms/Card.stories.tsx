import React from "react"
import { Meta } from "@storybook/react/types-6-0"

import { Card } from "./Card"

export default {
  title: "Atoms/Card",
  component: Card,
} as Meta

export const UpCard: React.FC = () => {
  return <Card type="outSide">AAA</Card>
}

export const DownCard: React.FC = () => {
  return <Card type="inSide">AAA</Card>
}
