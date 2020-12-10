import React from 'react'
import styled from 'styled-components/macro'

import Title from './Title'

const Info = styled.div`
  position: absolute;
  left: ${({ location }) => location}px;
  bottom: 0px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`
const Riser = styled.div`
  height: 50%;
  width: 5px;
  margin: 10px 0;
`

export default ({ point, maxYear }) => {
  if (point.yearsFromToday > maxYear) {
    return null
  }

  return (
    <Info location={point.location}>
      <Riser />
      <Title title={point.title} />
    </Info>
  )
}
