import styled from "styled-components"
import { Color } from "./Color"

export type NeumorphismType = {
  type: "inSide" | "outSide"
}

export const NeumorphismOutSideStyle = styled.div`
  background-color: ${Color.mail};
  box-shadow: -4px -4px 12px 0 ${Color.lightShadow}, 4px 4px 12px 0 ${Color.blackShadow};
`

export const NeumorphismInSideStyle = styled.div`
  background-color: ${Color.mail};
  box-shadow: inset -4px -4px 12px 0 ${Color.lightShadow}, inset 4px 4px 12px 0 ${Color.blackShadow};
`

export const NeumorphismStyle = styled.div<NeumorphismType>`
  background-color: ${Color.mail};
  box-shadow: ${({ type }) =>
    type === "inSide"
      ? `inset -4px -4px 12px 0 ${Color.lightShadow}, inset 4px 4px 12px 0 ${Color.blackShadow}`
      : `-4px -4px 12px 0 ${Color.lightShadow}, 4px 4px 12px 0 ${Color.blackShadow}`};
`
