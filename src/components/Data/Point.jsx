import React from 'react'
import styled from 'styled-components/macro'

const TitleContainer = styled.div`
  position: relative;
`
const Title = styled.div`
  position: absolute;
  width: max-content;
  bottom: -20px;
  left: 5px;
`

const Point = styled.div`
  position: absolute;
  left: ${({ location }) => location}px;
  bottom: 0px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
`

const Arrow = styled.div`
  background-color: white;
  height: ${({ layer }) => layer * 30}px;
  width: 1px;
  margin: 10px 0;
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
