import React from 'react'
import styled from 'styled-components'

const Arrow = styled.div`
  background-color: white;
  height: ${({ layer }) => layer * 30}px;
  width: 1px;
  margin: 10px 0;
`

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
`

export default (props) => {
  let { year } = props
  if (year < 0) return null
  if (year === 0) year += 0 // stupid negative zero

  const formattedYear = year.toLocaleString(undefined, { minimumFrationDigits: 0 })

  return (
    <Counter innerWidth={window.innerWidth}>
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
