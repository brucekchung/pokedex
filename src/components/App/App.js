import React, { Component } from 'react';
import './App.css';
import PokeContainer from '../../containers/PokeContainer/PokeContainer'

class App extends Component {

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <PokeContainer />
      </div>
    );
  }
}


export default App;