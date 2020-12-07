import React from 'react'
import styled from 'styled-components'

const Mark = styled.div`
  width: 1px;
  height: ${({ lineLength }) => lineLength}px;
  background-color: red;
  position: absolute;
  left: ${({ yearsAgo }) => yearsAgo}px;
  top: 0;
`

export default ({ markingLocation, yearsAgo }) => {
  let lineLength = 10
  if (yearsAgo % 1000 === 0) {
    lineLength = 50
  } else if (yearsAgo % 100 === 0) {
    lineLength = 20
  }

  return (
    <Mark lineLength={lineLength} yearsAgo={yearsAgo} />
  )
}
