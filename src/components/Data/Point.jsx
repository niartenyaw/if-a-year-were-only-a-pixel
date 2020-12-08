import React from 'react'
import styled from 'styled-components/macro'

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
const TitleContainer = styled.div`
  position: relative;
`
const Title = styled.div`
  position: absolute;
  width: max-content;
  max-width: 400px;
  left: 10px;
`

export default ({ point, maxYear }) => {
  if (point.yearsFromToday > maxYear) {
    return null
  }

  return (
    <Point location={point.location}>
      <Arrow layer={point.layer || 1} />
      <TitleContainer>
        <Title>
          {point.title}
        </Title>
      </TitleContainer>
    </Point>
  )
}
