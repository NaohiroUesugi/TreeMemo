import styled, { css } from "styled-components"
import { Color } from "./Color"

export type NeumorphismType = {
  type: "inSide" | "outSide"
}

export const NeumorphismOutSideStyle = css`
  box-shadow: -4px -4px 12px 0 ${Color.lightShadow}, 4px 4px 12px 0 ${Color.blackShadow};
`

export const NeumorphismInSideStyle = css`
  box-shadow: inset -4px -4px 12px 0 ${Color.lightShadow}, inset 4px 4px 12px 0 ${Color.blackShadow};
`

export const NeumorphismStyle = styled.div<NeumorphismType>`
  background-color: ${Color.main};
  box-shadow: ${({ type }) =>
    type === "inSide"
      ? `inset -4px -4px 12px 0 ${Color.lightShadow}, inset 4px 4px 12px 0 ${Color.blackShadow}`
      : `-4px -4px 12px 0 ${Color.lightShadow}, 4px 4px 12px 0 ${Color.blackShadow}`};
`
