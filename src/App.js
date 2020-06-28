import React from 'react';
import './App.css';
import DataPoint from './components/DataPoint';
import Ruler from './components/Ruler';

const maxYear = 9003020;
const offset = window.innerWidth;

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
      display: "flex",
      width: `${maxYear}px`,
      height: "100vh",
      color: "white",
      "background-color": "black"
    };

    const introStyles = {
      height: "100vh",
      width: `${App.offset}px`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    };

    const headerStyles = {
      marginTop: "30%",
      padding: "0 50px"
    };

    const sectionStyle = {
    };

    const pStyle = {
      margin: "0 0",
    };

    const footerStyle = {
      marginBottom: "30px",
    }

    const historyStyles = {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "column-reverse"
    };

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
          <section style={sectionStyle}>
            <p>
              scroll right to explore
            </p>
          </section>
          <footer style={footerStyle}>
            <p>
              this first long red line is the year 2020
            </p>
            <p style={pStyle}>
              every small mark is 10 years apart
            </p>
            <p style={pStyle}>
              the bigger ones are 100 years apart
            </p>
            <p style={pStyle}>
              the largest are 1000 years apart
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
