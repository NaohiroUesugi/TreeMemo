import React from "react"
import { Meta } from "@storybook/react/types-6-0"

import { Button } from "./Button"

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta

export const NeuphohismButton: React.FC = () => {
  return <Button label="AAA" />
}
