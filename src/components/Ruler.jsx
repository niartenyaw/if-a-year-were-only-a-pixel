import React from 'react';
import RulerMarking from './RulerMarking';
import Counter from './Counter';

const yearsPerMarking = 10;

class Ruler extends React.Component {
  constructor() {
    super();

    this.state = {
      scrollLocation: 0,
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    this.setState({ scrollLocation: window.scrollY - this.props.offset });
  }

  uppermostMarkerPosition() {
    return Math.round((this.state.scrollLocation - window.innerHeight) / Ruler.yearsPerMarking) * Ruler.yearsPerMarking;
  }

  firstMarkingLocation() {
    return Math.max(this.uppermostMarkerPosition(), 0);
  }

  lastMarkingLocation() {
    return Math.min(this.lowermostMarkerPosition(), this.endOfHistory());
  }

  lowermostMarkerPosition() {
    return this.firstMarkingLocation() + (3 * window.innerHeight);
  }

  static get yearsPerMarking() {
    return yearsPerMarking;
  }

  endOfHistory() {
    return this.props.maxYear;
  }

  numberOfMarkings() {
    return (this.lastMarkingLocation() - this.firstMarkingLocation()) / Ruler.yearsPerMarking;
  }

  yearsAgo(i) {
    return Math.round(this.firstMarkingLocation() + i * Ruler.yearsPerMarking);
  }

  markings() {
    const markings = [];
    for (let i = 0; i < this.numberOfMarkings(); i++) {
      const yearsAgo = this.yearsAgo(i);
      markings.push(
        <RulerMarking key={yearsAgo} yearsAgo={yearsAgo} />
      );
    }

    return markings;
  }

  middleYear() {
    return Math.round(this.state.scrollLocation + (window.innerHeight / 2));
  }

  render() {
    const markingStyles = {
      marginLeft: "200px",
      height: "100%",
      width: "250px",
      position: "relative",
    };

    const rulerStyles = {
      width: "250px",
      height: "100%",
      display: "flex",
    };

    const counterContainerStyles = {
      width: "0",
      height: "100%",
    };

    return (
      <div className="ruler" style={rulerStyles}>
        <div className="counter-container" style={counterContainerStyles}>
          <Counter year={this.middleYear()} />
        </div>
        <div className="markings" style={markingStyles}>
          { this.markings() }
        </div>
      </div>
    );
  }
};

export default Ruler;
