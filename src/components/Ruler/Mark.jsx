import React from 'react'
import styled from 'styled-components/macro'

// const Mark = styled.div`
//   width: 1px;
//   height: ${({ lineLength }) => lineLength}px;
//   background-color: red;
//   position: absolute;
//   left: ${({ location }) => location}px;
//   top: 0;
// `

const Mark = styled.div.attrs(({ lineLength, location }) => ({
  style: {
    height: `${lineLength}px`,
    left: `${location}px`
  }
}))`
  width: 1px;
  background-color: red;
  position: absolute;
  top: 0;
`

export default ({ markingLocation, location }) => {
  let lineLength = 10
  if (location % 1000 === 0) {
    lineLength = 50
  } else if (location % 100 === 0) {
    lineLength = 20
  }

  return (
    <Mark lineLength={lineLength} location={location} />
  )
}
