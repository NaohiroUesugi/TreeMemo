import styled from "styled-components"
import { NeumorphismStyle, NeumorphismType } from "./neumorphism"

type CardOnlyType = {
  radius?: string
  width: string
  height: string
}

type CardType = NeumorphismType & CardOnlyType

const CardStyle = styled(NeumorphismStyle)<CardOnlyType>`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  border-radius: ${({ radius }) => radius && radius};
`

export const Card: React.FC<CardType> = ({ type = "outSide", radius, width, height }) => {
  return <CardStyle type={type} radius={radius} width={width} height={height} />
}
