import React from "react"
import styled from "styled-components"

const ButtonStyle = styled.button``

export interface ButtonProps {
  backgroundColor?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ backgroundColor }) => {
  return <ButtonStyle type="button" style={{ backgroundColor }}></ButtonStyle>
}
