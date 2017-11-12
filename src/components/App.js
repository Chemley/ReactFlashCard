import React, { Component } from 'react';
import Card from './Card';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton'
import FlipButton from './FlipButton'
import ShuffleButton from './ShuffleButton'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Card />
        <NextButton />
        <PreviousButton />
        <FlipButton />
        <ShuffleButton />
      </div>
    );
  }
}

export default App;
