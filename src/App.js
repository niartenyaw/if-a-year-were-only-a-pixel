import React from 'react';
import './App.css';
import DataPoint from './components/DataPoint';
import Ruler from './components/Ruler';

const numberOfYears = 9002020;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  static get numberOfYears() {
    return numberOfYears;
  }

  componentDidMount() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      });
  }
  render() {
    const numberOfYears = App.numberOfYears;

    const styles = {
      height: `${numberOfYears}px`,
    };

    return (
      <div className="App" style={styles}>
        <Ruler numberOfYears={numberOfYears}/>
        <div className="data-points-container">
          { this.state.data.map(point => (
            <DataPoint
              data={point}
              numberOfYears={numberOfYears} />
          )) }
        </div>
      </div>
    );
  }
}

export default App;
