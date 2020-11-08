import React from "react"
import styled from "styled-components"
import { Color } from "app/components/presentational/atoms/Color"
import { Card } from "app/components/presentational/atoms/Card"

const LeftPane = styled.div`
  height: 180%;
  min-width: 150px;
  background-color: ${Color.sub};
`

const RightPane = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${Color.main};
`

const Aaa = styled.div`
  height: 100%;
  width: 10px;
  background-color: ${Color.main};
  box-shadow: -4px 0px 12px 0 ${Color.lightShadow}, 4px 0px 12px 0 ${Color.blackShadow};
  z-index: 2;
`

const Flex = styled.div`
  display: flex;
  height: 100%;
`

const Show: React.FC = () => {
  return (
    <Flex>
      <LeftPane></LeftPane>
      <Aaa />
      <RightPane>
        <Card type="inSide">AAA</Card>
      </RightPane>
    </Flex>
  )
}

export default Show
