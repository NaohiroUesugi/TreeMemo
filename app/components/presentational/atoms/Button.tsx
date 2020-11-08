import React from "react"
import styled from "styled-components"
import { NeumorphismStyle } from "./Neumorphism"

const ButtonStyle = styled(NeumorphismStyle)``

export interface ButtonProps {
  backgroundColor?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ backgroundColor }) => {
  return <ButtonStyle as="button" style={{ backgroundColor }}></ButtonStyle>
}
