import React from 'react'

export default ({ markingLocation, yearsAgo }) => {
  const lineThickness = 1

  let lineLength = 10
  if (yearsAgo % 1000 === 0) {
    lineLength = 50
  } else if (yearsAgo % 100 === 0) {
    lineLength = 20
  }

  const styles = {
    width: `${lineThickness}px`,
    height: `${lineLength}px`,
    backgroundColor: 'red',
    position: 'absolute',
    left: yearsAgo,
    top: '0'
  }

  return (
    <div className='ruler-marker' style={styles} />
  )
}
