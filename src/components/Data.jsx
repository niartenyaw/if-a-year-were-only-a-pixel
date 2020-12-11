import React from 'react'
import styled from 'styled-components/macro'

import Datum from './Data/Datum'
import Point from './Data/Point'

const DataContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export default class Data extends React.Component {
  constructor () {
    super()

    this.state = {
      data: []
    }
  }

  static get pixelsPerFoot () {
    return 1000
  }

  presentedData () {
    const filtered = this.state.data.filter(point => (
      point.location >= this.lowerBound() && point.location <= this.upperBound()
    ))

    let layer = 1
    for (let i = 0; i < filtered.length; i++) {
      const el = filtered[i]
      if (el.type === 'point' && this.inWindow(el.location)) {
        filtered[i] = Object.assign({}, el, { layer: layer })
        layer += 1
      }
    }

    return filtered
  }

  inWindow (location) {
    return location >= this.props.debouncedLocation - Point.maxWidth &&
      location <= this.props.debouncedLocation + window.innerWidth
  }

  lowerBound () {
    return this.props.debouncedLocation - this.buffer()
  }

  upperBound () {
    return this.props.debouncedLocation + window.innerWidth + this.buffer()
  }

  buffer () {
    return window.innerWidth * 10
  }

  componentDidMount () {
    window.fetch(`${window.location}/data.json`)
      .then(response => response.json())
      .then(data => {
        const currentYear = (new Date(Date.now())).getYear() + 1900 // fuck javascript
        data.forEach(point => {
          if (point.year) {
            point.yearsFromToday = 0 - (point.year - currentYear)
            point.location = this.props.maxYear - point.yearsFromToday
          } else if (point.feet_from_beginning) {
            point.location = point.feet_from_beginning * Data.pixelsPerFoot
            point.yearsFromToday = this.props.maxYear - point.location
          } else if (point.years_from_beginning) {
            point.location = point.years_from_beginning
            point.yearsFromToday = this.props.maxYear - point.location
          } else if (point.years_ago) {
            point.yearsFromToday = point.years_ago
            point.location = this.props.maxYear - point.yearsFromToday
          } else {
            if (point.type !== 'hide') {
              throw new Error(`data point missing location info: ${point.title}`)
            }
          }
        })
        const sorted = data.sort((a, b) => a.location < b.location)
        this.setState({ data: sorted })
      })
  }

  render () {
    const presentedData = this.presentedData()
    return (
      <DataContainer>
        {presentedData.map(point => (
          <Datum
            key={point.title}
            point={point}
            maxYear={this.props.maxYear}
          />
        ))}
      </DataContainer>
    )
  }
}
