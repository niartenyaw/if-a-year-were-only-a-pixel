import React from 'react'
import styled from 'styled-components'

import Mark from './Ruler/Mark'
import Counter from './Counter'

const yearsPerMark = 10

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

const uppermostMarkerPosition = (props) => (
  Math.round((props.scrollLocation - window.innerWidth) / yearsPerMark) * yearsPerMark
)

const firstMarkLocation = (props) => (
  Math.max(uppermostMarkerPosition(props), 0)
)

const lowermostMarkerPosition = (props) => (
  firstMarkLocation(props) + (3 * window.innerWidth)
)

const lastMarkLocation = (props) => (
  Math.min(lowermostMarkerPosition(props), props.maxYear)
)

const numberOfMarks = (props) => (
  (lastMarkLocation(props) - firstMarkLocation(props)) / yearsPerMark
)

const calculateYearsAgo = (props, i) => (
  Math.round(firstMarkLocation(props) + i * yearsPerMark)
)

const middleYear = ({ scrollLocation }) => (
  Math.round(scrollLocation + (window.innerWidth / 2))
)

const marks = (props) => {
  const marks = []
  for (let i = 0; i < numberOfMarks(props); i++) {
    const yearsAgo = calculateYearsAgo(props, i)
    marks.push(
      <Mark key={yearsAgo} yearsAgo={yearsAgo} />
    )
  }

  return marks
}

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
