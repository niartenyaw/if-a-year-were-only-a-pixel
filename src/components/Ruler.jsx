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
    return Math.round((this.state.scrollLocation - window.innerHeight) / yearsPerMarking) * yearsPerMarking;
  }

  static get yearsPerMarking() {
    return yearsPerMarking;
  }

  render() {
    const firstMarkingLocation = Math.max(this.uppermostMarkerPosition(), this.props.offset);

    const numberOfMarkings = (3 * window.innerHeight) / yearsPerMarking;

    const markings = [];

    for (let i = 0; i < numberOfMarkings; i++) {
      const yearsAgo = Math.round(firstMarkingLocation + i * yearsPerMarking - this.props.offset);
      const yearNumber = yearsAgo - 2020;
      markings.push(
        <RulerMarking key={yearNumber} yearsAgo={yearsAgo} yearsPerMarking={yearsPerMarking} />
      );
    }

    return (
      <div className="ruler" >
        { markings }
      </div>
    );
  }
};

export default Ruler;
