import React from 'react'
import styled from 'styled-components'

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

const Header = styled.div`
  margin-top: 30%;
  padding: 0 50px;
`

const Footer = styled.div`
  margin-bottom: 30px;
`

const Text = styled.p`
  margin: 0;
`

const History = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`

const DataPoints = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
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

    return (
      <AppContainer ref={this.app} className='App' maxYear={maxYear}>
        <Scrollable>
          <Intro className='intro'>
            <Header>
              <h1>
                if a year were only a pixel.
              </h1>
              <Text>
                a showcase of time.
              </Text>
            </Header>
            <section>
              <Text>
                scroll right to explore
              </Text>
            </section>
            <Footer>
              <Text>this first long red line is the year 2020</Text>
              <Text>every small mark is 10 years apart</Text>
              <Text>the bigger ones are 100 years apart</Text>
              <Text>the largest are 1000 years apart</Text>
            </Footer>
          </Intro>
          <History>
            <Ruler
              scrollLocation={this.state.scrollLocation}
              offset={App.offset}
              maxYear={maxYear}
            />
            <DataPoints>
              {this.state.data.map(point => (
                <DataPoint
                  key={point.title}
                  data={point}
                  maxYear={maxYear}
                />
              ))}
            </DataPoints>
          </History>
        </Scrollable>
      </AppContainer>
    )
  }
}

export default App
