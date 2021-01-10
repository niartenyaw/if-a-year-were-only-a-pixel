import React from 'react'
import styled from 'styled-components/macro'

import { prettyYear } from '../helpers'

const Counter = styled.div`
  position: fixed;
  left: ${({ innerWidth }) => innerWidth / 2}px;
  bottom: 20px;

  width: 140px;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;

  z-index: 10;

  opacity: ${({ display }) => display ? '1' : '0'};
  transition: opacity 0.5s ease-out;
`

const Arrow = styled.div`
  height: 0;
  width: 0;
  margin-bottom: 20px;
  border-bottom: 20px solid white;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
`

const TransparentBackground = styled.div`
  position: absolute;
  height: 150%;
  width: 150%;
  background-image: radial-gradient(black, transparent);
  z-index: -1;
`

export default (props) => {
  let { year, maxYear } = props
  let display = true
  if (year > maxYear || isNaN(year)) display = false
  if (year === 0) year += 0 // stupid negative zero
  return (
    <Counter display={display} innerWidth={window.innerWidth}>
      <TransparentBackground />
      <div>
        <div>
          {prettyYear(year)}
        </div>
        <div>
          years ago
        </div>
      </div>
      <Arrow />
    </Counter>
  )
}
