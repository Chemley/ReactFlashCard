import React, { Component } from 'react';
import { previous } from '../actions';
import { connect } from 'react-redux';



class PreviousButton extends Component {

  render () {
    return(
      <button onClick={this.props.previous} disabled={this.props.disabled} className="PreviousButton">
        Previous
      </button>
    );
  }
}


// mapActionsToProps is object because of simplicity, since we dont need to do any logic but we do need to gie it the function it needs.

const mapActionsToProps = {
  next: previous
}

function mapStateToProps(state) {
  return {
    disabled: state.currentCardIndex >= state.cards.length - 1
  }
}


// The first paramater is always mapStateToProps if you don't have a mapStateToProps put null. The second is always mapActionsToProps
export default connect(mapStateToProps, mapActionsToProps)(PreviousButton);
