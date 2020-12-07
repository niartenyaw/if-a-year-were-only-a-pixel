import React from 'react'
import styled from 'styled-components/macro'

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
      scrollLocation: window.innerWidth * -1 // make sure middleYear is negative at mount
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
    this.setState({ scrollLocation: e.target.scrollLeft - App.offset })
  }

  render () {
    return (
      <AppContainer ref={this.app} className='App' size={App.maxYear}>
        <Scrollable size={App.maxYear}>
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
              maxYear={App.maxYear}
            />
            <Data maxYear={App.maxYear} />
          </History>
        </Scrollable>
      </AppContainer>
    )
  }
}

export default App
