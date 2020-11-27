import React from "react"
import styled from "styled-components"
import { Color } from "app/components/atoms/color"
import { Card } from "app/components/atoms/card"
import { Text } from "app/components/atoms/text"
import { GridCard } from "app/components/molecules/grid-cards"

const LeftPane = styled.div`
  min-width: 200px;
  background-color: ${Color.sub};
`

const RightPane = styled.div`
  flex: 1;
  padding: 50px 15% 30px 100px;
  background-color: ${Color.main};
`

const TitleText = styled(Text)`
  font-family: PT Sans;
  font-size: 48px;
  font-weight: bold;
`

const VerticalBorder = styled.div`
  width: 10px;
  background-color: ${Color.main};
  box-shadow: -4px 0px 12px 0 ${Color.lightShadow}, 4px 0px 12px 0 ${Color.blackShadow};
  z-index: 2;
  cursor: col-resize;
`

const Flex = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 30px;
`

const Show: React.FC = () => {
  return (
    <Flex>
      <LeftPane />
      <VerticalBorder />
      <RightPane>
        <TitleText>TITLE</TitleText>
        <Card type="inSide" width="100%" radius="25px" height="300px" />
        <GridCard />
        <GridCard />
      </RightPane>
    </Flex>
  )
}

export default Show
