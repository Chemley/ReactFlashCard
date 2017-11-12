import React, { Component } from 'react';
import { shuffle } from '../actions';
import { connect } from 'react-redux';



class ShuffleButton extends Component {

  render () {
    return(
      <button onClick={this.props.shuffle} className="ShuffleButton">
        Shuffle
      </button>
    );
  }
}


// mapActionsToProps is object because of simplicity, since we dont need to do any logic but we do need to gie it the function it needs.

const mapActionsToProps = {
  shuffle: shuffle
}





// The first paramater is always mapStateToProps if you don't have a mapStateToProps put null. The second is always mapActionsToProps
export default connect(null, mapActionsToProps)(ShuffleButton);
