import React from 'react'
import styled from 'styled-components/macro'

const Info = styled.div`
  position: absolute;
  left: ${({ location }) => location}px;
  top: 10%;
  display: flex;
  flex-direction: column-reverse;
`
const Riser = styled.div`
  height: 100%;
`

const Title = styled.div`
  width: 80vw;
  max-width: 600px;
`

export default ({ point, maxYear }) => {
  if (point.yearsFromToday > maxYear) {
    return null
  }

  return (
    <Info location={point.location}>
      <Riser />
      <Title>
        {point.title}
      </Title>
    </Info>
  )
}
