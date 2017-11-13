import React, { Component } from 'react';
import { connect } from 'react-redux';


class Card extends Component {

// you want to have less logic in the compents file. These files
// make things look a certain way. It also makes things usable. This part below is a presentational component. {this.props.text} just runs the text through it.
// this.props.index pulls the currentCardIndex from the state below which also adds one to it. then when ti's moved
// when it reaches the return line it prints the nubmer w/n the sentence.
  render () {
    return(
      <div className="Card">
        <div className="CardText">
          {this.props.text}
        </div>
        <div className="CardNumber">
          <p>card number: {this.props.index} of 6</p>
          <p>card side: {this.props.front}</p>
        </div>
      </div>
    );
  }
}

// in this function wer are taking the state passing it through as a property which is why we can write
// state.card. cards is the name of the array [this is the index of the number that the card is on.]
function mapStateToProps(state) {
  const index = state.currentCardIndex + 1;
  const card = state.cards[state.currentCardIndex];
  let cardText;
  let front;
  if (state.isFront) {
    cardText = card.front;
    front = "front";
  } else {
    cardText = card.back;
    front = "back";
  }

  return {
    text: cardText,
    index: index,
    front: front
  };
}
// we put mapStateToProps to curring the two funcitons.
export default connect(mapStateToProps)(Card);
