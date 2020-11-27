import { Card } from "app/components/atoms/card"
import styled from "styled-components"

const GridCardStyle = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`

export const GridCard: React.FC = () => {
  return (
    <GridCardStyle>
      <Card type="outSide" width="30%" radius="25px" height="200px" />
      <Card type="outSide" width="30%" radius="25px" height="200px" />
      <Card type="outSide" width="30%" radius="25px" height="200px" />
    </GridCardStyle>
  )
}
