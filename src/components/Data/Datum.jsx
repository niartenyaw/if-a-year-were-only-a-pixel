import React from 'react'
import styled from 'styled-components/macro'

import Point from './Point'
import Info from './Info'

export default ({ point, maxYear }) => {
  if (point.yearsFromToday > maxYear) {
    return null
  }

  switch (point.type) {
    case 'point':
      return <Point point={point} />
    case 'info':
      return <Info point={point} />
    default:
      return null
  }
}
