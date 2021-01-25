import React from 'react'
import styled from 'styled-components/macro'
import { withTheme } from 'styled-components'

import Mark from './Ruler/Mark'
import Counter from './Counter'

const yearsPerMark = 10
const buffer = 5

const minLeftMarkPosition = (props) => (
  Math.round((props.debouncedLocation - (buffer * window.innerWidth)) / yearsPerMark) * yearsPerMark
)

const leftMarkPosition = (props) => (
  Math.max(minLeftMarkPosition(props), 0)
)

const maxRightMarkPosition = (props) => (
  props.debouncedLocation + (buffer * window.innerWidth)
)

const rightMarkPosition = (props) => (
  Math.min(maxRightMarkPosition(props), props.maxYear)
)

const numberOfMarks = (props) => (
  (rightMarkPosition(props) - leftMarkPosition(props)) / yearsPerMark
)

const calculateLocation = (props, i) => (
  Math.round(leftMarkPosition(props) + i * yearsPerMark)
)

const middleYear = ({ location, maxYear }) => (
  maxYear - Math.round(location + (window.innerWidth / 2))
)

const marks = (props) => {
  const marks = []
  const numMarks = numberOfMarks(props)
  for (let i = 0; i <= numMarks; i++) {
    const location = calculateLocation(props, i)
    marks.push(
      <Mark key={location} location={location} />
    )
  }

  return marks
}

const CounterContainer = styled.div`
  height: 0;
  width: 100%;
`

const MarksContainer = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
`

const Ruler = withTheme(styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
`)

export default (props) => {
  return (
    <Ruler>
      <CounterContainer>
        <Counter year={middleYear(props)} maxYear={props.maxYear} />
      </CounterContainer>
      <MarksContainer>
        {marks(props)}
      </MarksContainer>
    </Ruler>
  )
}
