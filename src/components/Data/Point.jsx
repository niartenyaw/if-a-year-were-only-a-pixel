import React from 'react'
import styled from 'styled-components/macro'

import Title from './Title'

const Point = styled.div`
  position: absolute;
  left: ${({ location }) => location}px;
  bottom: 0px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`

const Arrow = styled.div`
  height: ${({ layer }) => layer * 30}px;
  width: 5px;
  margin: 10px 0;
  border-left: 1px solid white;
  border-top: 1px solid white;
`

export default ({ point, maxYear }) => {
  return (
    <Point location={point.location}>
      <Arrow layer={point.layer || 1} />
      <Title title={point.title} />
    </Point>
  )
}
