import React from 'react';
import RulerMarking from './RulerMarking';

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
    return Math.max(this.uppermostMarkerPosition(), this.startOfHistory());
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

  startOfHistory() {
    return this.props.offset;
  }

  endOfHistory() {
    return this.startOfHistory() + this.props.maxYear;
  }

  numberOfMarkings() {
    return (this.lastMarkingLocation() - this.firstMarkingLocation()) / Ruler.yearsPerMarking;
  }

  yearsAgo(i) {
    return Math.round(this.firstMarkingLocation() + i * Ruler.yearsPerMarking - this.props.offset);
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

  render() {
    return (
      <div className="ruler" >
        { this.markings() }
      </div>
    );
  }
};

export default Ruler;
