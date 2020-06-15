import React from 'react';
import './App.css';
import Marker from './components/Marker';
import Ruler from './components/Ruler';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      });
  }
  render() {
    return (
      <div className="App">
        <Ruler />
        { this.state.data.map(point => <Marker data={point} />) }
      </div>
    );
  }
}

export default App;
