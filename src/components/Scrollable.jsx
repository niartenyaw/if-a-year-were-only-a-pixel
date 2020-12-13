import React from 'react'
import styled from 'styled-components/macro'

const ScrollableContainer = styled.div`
  display: flex;
  overflow: scroll;
  width: 100vw;
`

const Scroller = styled.div`
  width: ${({ size }) => size}px;
  display: flex;
  flex-shrink: 0;
`

class Scrollable extends React.Component {
  constructor () {
    super()

    this.state = {
      location: window.innerWidth * -1, // make sure middleYear is negative at mount so Counter doesn't display
      debouncedLocation: window.innerWidth * -1, // make sure middleYear is negative at mount so Counter doesn't display
      debounce: null
    }

    this.scrollable = React.createRef()

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount () {
    this.scrollable.current.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    this.scrollable.current.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll (e) {
    // Always set location so it is up to date
    this.setState({ location: e.target.scrollLeft - this.props.offset }, () => {
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

  children () {
    return this.props.children.map(child => (
      React.cloneElement(child, { location: this.state.location, debouncedLocation: this.state.debouncedLocation }, [])
    ))
  }

  render () {
    return (
      <ScrollableContainer ref={this.scrollable} offset={this.props.offset}>
        <Scroller size={this.props.size}>
          {this.children()}
        </Scroller>
      </ScrollableContainer>
    )
  }
}

export default Scrollable
