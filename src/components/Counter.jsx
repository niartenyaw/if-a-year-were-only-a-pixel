import React from 'react'
import styled from 'styled-components/macro'

const Counter = styled.div`
  position: fixed;
  left: ${({ innerWidth }) => innerWidth / 2}px;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  width: 140px;
  z-index: 10;
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
  if (year > maxYear || isNaN(year)) return null
  if (year === 0) year += 0 // stupid negative zero
  const formattedYear = year.toLocaleString(undefined, { minimumFrationDigits: 0 })

  return (
    <Counter innerWidth={window.innerWidth}>
      <TransparentBackground />
      <div>
        <div>
          {formattedYear}
        </div>
        <div>
          years ago
        </div>
      </div>
      <Arrow layer='1' />
    </Counter>
  )
}
