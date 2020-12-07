import React from 'react'
import styled from 'styled-components'

import './App.css'
import DataPoint from './components/DataPoint'
import Ruler from './components/Ruler'

const maxYear = 9003020
const offset = window.innerWidth

const AppContainer = styled.div`
  width: ${props => props.maxYear}px;
  height: 100vh;
  color: white;
  background-color: black;
  width: 100vw;
  overflow: scroll;
`

const Scrollable = styled.div`
  display: flex;
  width: ${() => maxYear}px;
`

const Intro = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  static get maxYear () {
    return maxYear
  }

  static get offset () {
    return offset
  }

  constructor () {
    super()

    this.state = {
      data: [],
      scrollLocation: window.innerWidth * -1 // make sure middleYear is negative at mount
    }

    this.app = React.createRef()

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.app.current.addEventListener('scroll', this.handleScroll)
    window.fetch(`${window.location}/data.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      })
  }

  componentWillUnmount () {
    this.app.current.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    this.setState({ scrollLocation: e.target.scrollLeft - App.offset })
  }

  render () {
    const maxYear = App.maxYear

    const headerStyles = {
      marginTop: '30%',
      padding: '0 50px'
    }

    const sectionStyle = {
    }

    const pStyle = {
      margin: '0 0'
    }

    const footerStyle = {
      marginBottom: '30px'
    }

    const historyStyles = {
      position: 'relative',
      width: '100%',
      display: 'flex',
      flexDirection: 'column-reverse'
    }

    const datapointsStyles = {
      height: '100%',
      width: '100%',
      position: 'relative'
    }

    return (
      <AppContainer ref={this.app} className='App' maxYear={maxYear}>
        <Scrollable>
          <Intro className='intro'>
            <header style={headerStyles}>
              <h1>
                if a year were only a pixel.
              </h1>
              <p>
                a showcase of time.
              </p>
            </header>
            <section style={sectionStyle}>
              <p>
                scroll right to explore
              </p>
            </section>
            <footer style={footerStyle}>
              <p>
                this first long red line is the year 2020
              </p>
              <p style={pStyle}>
                every small mark is 10 years apart
              </p>
              <p style={pStyle}>
                the bigger ones are 100 years apart
              </p>
              <p style={pStyle}>
                the largest are 1000 years apart
              </p>
            </footer>
          </Intro>
          <div className='history' style={historyStyles}>
            <Ruler
              scrollLocation={this.state.scrollLocation}
              offset={App.offset}
              maxYear={maxYear}
            />
            <div className='datapoints' style={datapointsStyles}>
              {this.state.data.map(point => (
                <DataPoint
                  key={point.title}
                  data={point}
                  maxYear={maxYear}
                />
              ))}
            </div>
          </div>
        </Scrollable>
      </AppContainer>
    )
  }
}

export default App
