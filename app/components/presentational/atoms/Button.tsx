import React, { useState } from "react"
import styled from "styled-components"
import { NeumorphismOutSideStyle, NeumorphismInSideStyle } from "./Neumorphism"

const ButtonStyle = styled.button<{ isMouseUp: boolean }>`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 20px;
  appearance: none;
  ${NeumorphismOutSideStyle}
  ${({ isMouseUp }) => isMouseUp && NeumorphismInSideStyle}
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
`

export interface ButtonProps {
  onClick?: () => void
  label: string
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  const [isMouseUp, setIsMouseUp] = useState(false)
  return (
    <ButtonStyle
      onMouseDown={() => setIsMouseUp(true)}
      onMouseUp={() => setIsMouseUp(false)}
      isMouseUp={isMouseUp}
    >
      {label}
    </ButtonStyle>
  )
}
