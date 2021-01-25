import React from 'react'
import styled from 'styled-components/macro'

import { ThemeProvider, withTheme } from 'styled-components'
import theme from './theme'

import Intro from './components/Intro'
import Scrollable from './components/Scrollable'
import Timeline from './components/Timeline'

const AppBase = withTheme(styled.div`
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`)

class App extends React.Component {
  static get maxYear () {
    return 6000000
  }

  static get offset () {
    return window.innerWidth
  }

  constructor () {
    super()

    this.state = {
      data: []
    }
  }

  static get pixelsPerFoot () {
    return 1560
  }

  componentDidMount () {
    window.fetch(`${window.location}/data.json`)
      .then(response => response.json())
      .then(data => {
        const currentYear = (new Date(Date.now())).getYear() + 1900 // fucking javascript
        data.forEach(point => {
          if (point.year) {
            point.yearsFromToday = 0 - (parseInt(point.year) - currentYear)
            point.location = App.maxYear - point.yearsFromToday
          } else if (point.feet_from_beginning) {
            point.location = parseInt(point.feet_from_beginning) * App.pixelsPerFoot
            point.yearsFromToday = App.maxYear - point.location
          } else if (point.years_from_beginning) {
            point.location = parseInt(point.years_from_beginning)
            point.yearsFromToday = App.maxYear - point.location
          } else if (point.years_ago) {
            point.yearsFromToday = parseInt(point.years_ago)
            point.location = App.maxYear - point.yearsFromToday
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
    // TODO: fix CSS so don't have to pass size into both
    return (
      <ThemeProvider theme={theme}>
        <AppBase size={App.maxYear + App.offset}>
          <Scrollable size={App.maxYear + App.offset} offset={App.offset}>
            <Intro key='intro' offset={App.offset} />
            <Timeline key='timeline' data={this.state.data} maxYear={App.maxYear} offset={App.offset} />
          </Scrollable>
        </AppBase>
      </ThemeProvider>
    )
  }
}

export default App
