import React from 'react';
import './App.css';
import DataPoint from './components/DataPoint';
import Ruler from './components/Ruler';

const maxYear = 9003020;
const offset = window.innerHeight;

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
    fetch(`${window.location}/data.json`)
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
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    };

    const headerStyles = {
      paddingTop: "40px",
      paddingLeft: "10px",
      paddingBottom: "5px"
    };

    const historyStyles = {
      position: "relative",
      height: "100%",
      display: "flex"
    };

    const footerStyle = {
      textAlign: "left"
    }

    const datapointsStyles = {
      height: "100%",
      width: "100%",
      position: "relative",
    }

    return (
      <div className="App" style={styles}>
        <div className="intro" style={introStyles}>
          <header style={headerStyles}>
            <h1>
              if a year were only a pixel.
            </h1>
            <p>
              a showcase of time.
            </p>
          </header>
          <footer style={footerStyle}>
            <p>
              this first long red line is the year 2020.
            </p>
            <p>
              every small mark is 10 years apart, the bigger ones are 100 years apart, and the largest are 1000 years apart.
            </p>
          </footer>
        </div>
        <div className="history" style={historyStyles}>
          <Ruler offset={App.offset} maxYear={maxYear} />
          <div className="datapoints" style={datapointsStyles}>
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
