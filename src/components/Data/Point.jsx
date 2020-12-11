import React from 'react'
import styled from 'styled-components/macro'

const Point = styled.div`
  position: absolute;
  left: ${({ location }) => location}px;
  bottom: 0px;
  display: flex;
  align-items: flex-start;
`

const Arrow = styled.div`
  height: 70px;
  width: 5px;
  margin-right: 5px;
  border-left: 1px solid white;
  border-top: 1px solid white;
`

const Title = styled.div`
  margin-top: -10px;
  width: max-content;
  max-width: 300px;
`

export default ({ point, maxYear }) => {
  return (
    <Point location={point.location}>
      <Arrow layer={point.layer || 1} />
      <Title>
        {point.title}
      </Title>
    </Point>
  )
}
