import React, { Component } from 'react';
import Card from './Card';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Card />
        <NextButton />
        <PreviousButton />
      </div>
    );
  }
}

export default App;
