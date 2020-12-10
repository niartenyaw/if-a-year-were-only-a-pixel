import React from 'react'
import styled from 'styled-components/macro'

const TitleContainer = styled.div`
  position: relative;
`

const Title = styled.div`
  position: absolute;
  width: max-content;
  max-width: 300px;
  left: 10px;
`

export default ({ title }) => {
  return (
    <TitleContainer>
      <Title>
        {title}
      </Title>
    </TitleContainer>
  )
}
