import React, { useState } from "react"
import styled from "styled-components"
import { Color } from "app/components/presentational/atoms/Color"
import { Card } from "app/components/presentational/atoms/Card"
import { Text } from "app/components/presentational/atoms/Text"

const LeftPane = styled.div`
  height: auto;
  min-width: 200px;
  background-color: ${Color.sub};
`

const RightPane = styled.div`
  flex: 1;
  padding: 50px 15% 30px 100px;
  height: auto;
  background-color: ${Color.main};
`

const TitleText = styled(Text)`
  font-family: PT Sans;
  font-size: 48px;
  font-weight: bold;
`

const Aaa = styled.div`
  height: auto;
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

const RelatidMemo = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`

const Show: React.FC = () => {
  return (
    <Flex>
      <LeftPane />
      <Aaa />
      <RightPane>
        <TitleText>TITLE</TitleText>
        <Card type="inSide" width="100%" radius="25px" height="300px" />
        <RelatidMemo>
          <Card type="outSide" width="30%" radius="25px" height="200px" />
          <Card type="outSide" width="30%" radius="25px" height="200px" />
          <Card type="outSide" width="30%" radius="25px" height="200px" />
        </RelatidMemo>
        <RelatidMemo>
          <Card type="outSide" width="30%" radius="25px" height="200px" />
          <Card type="outSide" width="30%" radius="25px" height="200px" />
          <Card type="outSide" width="30%" radius="25px" height="200px" />
        </RelatidMemo>
      </RightPane>
    </Flex>
  )
}

export default Show
