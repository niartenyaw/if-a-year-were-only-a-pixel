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

  componentDidMount () {
    window.fetch(`${window.location}/data.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      })
  }

  render () {
    return (
      <DataContainer>
        {this.state.data.map(point => (
          <Point
            key={point.title}
            data={point}
            maxYear={this.props.maxYear}
          />
        ))}
      </DataContainer>
    )
  }
}
