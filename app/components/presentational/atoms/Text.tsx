import React from "react"
import styled from "styled-components"

const TextStyle = styled.p`
  font-family: PT Sans;
  font-style: normal;
  font-weight: bold;
`

// type TextStyleProps = {}

export const Text: React.FC = ({ children }) => {
  return <TextStyle>{children}</TextStyle>
}
