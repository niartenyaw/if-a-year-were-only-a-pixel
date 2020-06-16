import React from 'react';
import RulerMarking from './RulerMarking';

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
    this.setState({ scrollLocation: window.scrollY });
  }

  render() {
    const yearsPerMarking = 10;

    const firstMarkingLocation = Math.round(this.state.scrollLocation / yearsPerMarking) * yearsPerMarking;

    const numberOfMarkings = (firstMarkingLocation + window.innerHeight + yearsPerMarking) / yearsPerMarking;

    const markings = [];

    for (let i = 0; i < numberOfMarkings; i++) {
      const yearNumber = Math.round(firstMarkingLocation + i * yearsPerMarking);
      markings.push(
        <RulerMarking key={yearNumber} yearNumber={yearNumber} yearsPerMarking={yearsPerMarking} />
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
