import React from 'react'
import styled from 'styled-components/macro'
import { withTheme } from 'styled-components'

const Point = styled.div`
  position: absolute;
  left: ${({ location }) => location}px;
  bottom: 0px;
  display: flex;
  align-items: flex-start;
`

const Arrow = withTheme(styled.div`
  width: 5px;
  height: ${({ layer }) => layer * 70}px;
  margin-right: 5px;
  border-left: 1px solid ${({ theme }) => theme.colors.text};
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  transition: height 0.5s ease-out;
`)

const Title = styled.div`
  margin-top: -10px;
  width: max-content;
  max-width: 300px;
`

const component = ({ point, maxYear }) => {
  return (
    <Point location={point.location}>
      <Arrow layer={point.layer || 1} />
      <Title>
        {point.title}
      </Title>
    </Point>
  )
}

component.maxWidth = 300

export default component
