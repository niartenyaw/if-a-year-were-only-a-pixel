import React from 'react'
import styled from 'styled-components/macro'

import Datum from './Data/Datum'
import Point from './Data/Point'

const DataContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

const presentedData = (props) => {
  const filtered = props.data.filter(point => (
    point.location >= lowerBound(props) && point.location <= upperBound(props)
  ))

  let layer = 1
  for (let i = 0; i < filtered.length; i++) {
    const el = filtered[i]
    if (el.type === 'point' && inWindow(el.location, props)) {
      filtered[i] = Object.assign({}, el, { layer: layer })
      layer += 1
    }
  }

  return filtered
}

const inWindow = (location, { debouncedLocation }) => {
  return location >= debouncedLocation - Point.maxWidth &&
    location <= debouncedLocation + window.innerWidth
}

const lowerBound = ({ debouncedLocation }) => {
  return debouncedLocation - buffer()
}

const upperBound = ({ debouncedLocation }) => {
  return debouncedLocation + window.innerWidth + buffer()
}

const buffer = () => {
  return window.innerWidth * 10
}

export default (props) => (
  <DataContainer>
    {presentedData(props).map(point => (
      <Datum
        key={point.title}
        point={point}
        maxYear={props.maxYear}
      />
    ))}
  </DataContainer>
)
