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
        <h1>Fun Animial Facts Flash Cards</h1>
        <div>
          <Card />
        </div>
        <div className="Buttons">
          <FlipButton />
          <NextButton />
          <PreviousButton />
          <ShuffleButton />
      </div>
      </div>
    );
  }
}

export default App;
