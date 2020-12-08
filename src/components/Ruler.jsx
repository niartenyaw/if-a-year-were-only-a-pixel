import React from 'react'
import styled from 'styled-components/macro'

import Mark from './Ruler/Mark'
import Counter from './Counter'

const yearsPerMark = 10

const uppermostMarkPosition = (props) => (
  Math.round((props.debouncedLocation - window.innerWidth) / yearsPerMark) * yearsPerMark
)

const firstMarkLocation = (props) => (
  Math.max(uppermostMarkPosition(props), 0)
)

const lowermostMarkPosition = (props) => (
  firstMarkLocation(props) + (10 * window.innerWidth)
)

const lastMarkLocation = (props) => (
  Math.min(lowermostMarkPosition(props), props.maxYear)
)

const numberOfMarks = (props) => (
  (lastMarkLocation(props) - firstMarkLocation(props)) / yearsPerMark
)

const calculateLocation = (props, i) => (
  Math.round(firstMarkLocation(props) + i * yearsPerMark)
)

const middleYear = ({ location }) => (
  Math.round(location + (window.innerWidth / 2))
)

const marks = (props) => {
  const marks = []
  const numMarks = numberOfMarks(props)
  for (let i = 0; i < numMarks; i++) {
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

const Ruler = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default (props) => {
  return (
    <Ruler>
      <CounterContainer>
        <Counter year={middleYear(props)} />
      </CounterContainer>
      <MarksContainer>
        {marks(props)}
      </MarksContainer>
    </Ruler>
  )
}
