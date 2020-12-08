import React from 'react'
import styled from 'styled-components/macro'

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

  presentedData () {
    return this.state.data.filter(point => (
      point.location > this.lowerBound() && point.location < this.upperBound()
    ))
  }

  lowerBound () {
    return this.props.debouncedLocation - this.buffer()
  }

  upperBound () {
    return this.props.debouncedLocation + window.innerWidth + this.buffer()
  }

  buffer () {
    return window.innerWidth * 0.5
  }

  componentDidMount () {
    window.fetch(`${window.location}/data.json`)
      .then(response => response.json())
      .then(data => {
        const currentYear = (new Date(Date.now())).getYear() + 1900 // fuck javascript
        data.forEach(point => {
          point.yearsFromToday = point.year ? (0 - (point.year - currentYear)) : point.years_ago
          point.location = this.props.maxYear - point.yearsFromToday
        })
        this.setState({ data })
      })
  }

  render () {
    const presentedData = this.presentedData()
    return (
      <DataContainer>
        {presentedData.map(point => (
          <Point
            key={point.title}
            point={point}
            maxYear={this.props.maxYear}
          />
        ))}
      </DataContainer>
    )
  }
}
