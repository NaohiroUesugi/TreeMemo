import React from "react"
import styled from "styled-components"
import { NeumorphismStyle, NeumorphismType } from "./Neumorphism"

const CardStyle = styled(NeumorphismStyle)`
  height: 200px;
  width: 200px;
`

type CardType = NeumorphismType

export const Card: React.FC<CardType> = ({ type = "outSide" }) => {
  return <CardStyle type={type}></CardStyle>
}
