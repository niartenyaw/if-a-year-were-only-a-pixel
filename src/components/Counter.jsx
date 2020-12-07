import React from 'react'
import styled from 'styled-components'

const Arrow = styled.div`
  background-color: white;
  height: ${({ layer }) => layer * 30}px;
  width: 1px;
  margin: 10px 0;
`

const Counter = (props) => {
  let { year } = props
  if (year < 0) return null
  if (year === 0) year += 0 // stupid negative zero

  const style = {
    position: 'fixed',
    left: `${window.innerWidth / 2}px`,
    bottom: '20px',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '140px'
  }

  const formattedYear = year.toLocaleString(undefined, { minimumFrationDigits: 0 })

  return (
    <div style={style}>
      <div>
        <div>
          {formattedYear}
        </div>
        <div>
          years ago
        </div>
      </div>
      <Arrow layer='1' />
    </div>
  )
}

export default Counter
