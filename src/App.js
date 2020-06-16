import React from 'react';
import './App.css';
import DataPoint from './components/DataPoint';
import Ruler from './components/Ruler';

const maxYear = 9002020;
const offset = 500;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  static get maxYear() {
    return maxYear;
  }

  static get offset() {
    return offset;
  }

  componentDidMount() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      });
  }
  render() {
    const maxYear = App.maxYear;

    const styles = {
      height: `${maxYear}px`,
    };

    const introStyles = {
      height: `${App.offset}px`,
    }

    const historyStyles = {
      position: "relative",
    };

    return (
      <div className="App" style={styles}>
        <div className="intro" style={introStyles}>
          Welcome to the site
        </div>
        <div className="history" style={historyStyles}>
          <Ruler offset={App.offset} />
          <div className="data-points-container">
            { this.state.data.map(point => (
              <DataPoint
                data={point}
                maxYear={maxYear} />
            )) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
