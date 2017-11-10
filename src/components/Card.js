import React, { Component } from 'react';
import { connect } from 'react-redux';


class Card extends Component {

// you want to have less logic in the compents file. These files
// make things look a certain way. It also makes things usable. This part below is a presentational component. {this.props.text} just runs the tesxt through it.
  render () {
    return(
      <div className="Card">
        {this.props.text}
      </div>
    );
  }
}

// in this function wer are taking the state passing it through as a property which is why we can write
// state.card. cards is the name of the array [this is the index of the number that the card is on.]
function mapStateToProps(state) {
  const card = state.cards[state.currentCardIndex];
  let cardText;
  if (state.isFront) {
    cardText = card.front;
  } else {
    cardText = card.back;
  }

  return {
    text: cardText
  };
}
// we put mapStateToProps to curring the two funcitons.
export default connect(mapStateToProps)(Card);
