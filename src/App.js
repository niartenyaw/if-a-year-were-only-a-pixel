import React from 'react'
import styled from 'styled-components/macro'

import Intro from './components/Intro'
import Data from './components/Data'
import Ruler from './components/Ruler'

const AppContainer = styled.div`
  width: ${({ size }) => size}px;
  height: 100vh;
  color: white;
  background-color: black;
  width: 100vw;
  overflow: scroll;
  `

const Scrollable = styled.div`
  display: flex;
  width: ${({ size }) => size}px;
  padding-right: 1000px;
`

const Timeline = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`

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
      debouncedLocation: window.innerWidth * -1, // make sure middleYear is negative at mount so Counter doesn't display
      debounce: null
    }

    this.app = React.createRef()

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.app.current.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    this.app.current.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    // Always set location so it is up to date
    this.setState({ location: e.target.scrollLeft - App.offset }, () => {
      if (this.state.debounce) {
        const now = Date.now()
        if (now - this.state.debounce >= 200) {
          this.setState({ debouncedLocation: this.state.location, debounce: now })
        } else {
          setTimeout(() => {
            const now = Date.now()
            if (this.state.debounce && now - this.state.debounce >= 300) {
              this.setState({ debouncedLocation: this.state.location, debounce: null })
            }
          }, 500)
        }
      } else {
        this.setState({ debounce: Date.now() })
      }
    })
  }

  render () {
    return (
      <AppContainer ref={this.app} className='App' size={App.maxYear}>
        <Scrollable size={App.maxYear}>
          <Intro />
          <Timeline>
            <Ruler
              debouncedLocation={this.state.debouncedLocation}
              location={this.state.location}
              offset={App.offset}
              maxYear={App.maxYear}
            />
            <Data
              debouncedLocation={this.state.debouncedLocation}
              maxYear={App.maxYear}
            />
          </Timeline>
        </Scrollable>
      </AppContainer>
    )
  }
}

export default App
