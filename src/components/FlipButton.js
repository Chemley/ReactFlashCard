import React, { Component } from 'react';
import { flip } from '../actions';
import { connect } from 'react-redux';



class FlipButton extends Component {

  render () {
    return(
      <button onClick={this.props.flip} className="FlipButton">
        Flip
      </button>
    );
  }
}


// mapActionsToProps is object because of simplicity, since we dont need to do any logic but we do need to gie it the function it needs.

const mapActionsToProps = {
  flip: flip
}



// The first paramater is always mapStateToProps if you don't have a mapStateToProps put null. The second is always mapActionsToProps
export default connect(null, mapActionsToProps)(FlipButton);
