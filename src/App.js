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
      color: "white",
      "background-color": "black"
    };

    const introStyles = {
      height: `${App.offset}px`,
      "background-color": "gray"
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
          <Ruler offset={App.offset} maxYear={maxYear} />
          <div className="datapoints">
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
