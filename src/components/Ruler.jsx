import React from 'react'
import RulerMarking from './RulerMarking'
import Counter from './Counter'

const yearsPerMarking = 10

class Ruler extends React.Component {
  uppermostMarkerPosition () {
    return Math.round((this.props.scrollLocation - window.innerWidth) / Ruler.yearsPerMarking) * Ruler.yearsPerMarking
  }

  firstMarkingLocation () {
    return Math.max(this.uppermostMarkerPosition(), 0)
  }

  lastMarkingLocation () {
    return Math.min(this.lowermostMarkerPosition(), this.endOfHistory())
  }

  lowermostMarkerPosition () {
    return this.firstMarkingLocation() + (3 * window.innerWidth)
  }

  static get yearsPerMarking () {
    return yearsPerMarking
  }

  endOfHistory () {
    return this.props.maxYear
  }

  numberOfMarkings () {
    return (this.lastMarkingLocation() - this.firstMarkingLocation()) / Ruler.yearsPerMarking
  }

  yearsAgo (i) {
    return Math.round(this.firstMarkingLocation() + i * Ruler.yearsPerMarking)
  }

  markings () {
    const markings = []
    for (let i = 0; i < this.numberOfMarkings(); i++) {
      const yearsAgo = this.yearsAgo(i)
      markings.push(
        <RulerMarking key={yearsAgo} yearsAgo={yearsAgo} />
      )
    }

    return markings
  }

  middleYear () {
    return Math.round(this.props.scrollLocation + (window.innerWidth / 2))
  }

  render () {
    const markingStyles = {
      width: '100%',
      height: '150px',
      position: 'relative'
    }

    const rulerStyles = {
      height: '150px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }

    const counterContainerStyles = {
      height: '0',
      width: '100%'
    }

    return (
      <div className='ruler' style={rulerStyles}>
        <div className='counter-container' style={counterContainerStyles}>
          <Counter year={this.middleYear()} />
        </div>
        <div className='markings' style={markingStyles}>
          {this.markings()}
        </div>
      </div>
    )
  }
};

export default Ruler
