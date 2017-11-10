import React, { Component } from 'react';
import { next } from '../actions';
import { connect } from 'react-redux';



class NextButton extends Component {

  render () {
    return(
      <button onClick={this.props.next} disabled={this.props.disabled} className="NextButton">
        Next
      </button>
    );
  }
}


// mapActionsToProps is object because of simplicity, since we dont need to do any logic but we do need to gie it the function it needs.

const mapActionsToProps = {
  next: next
}

function mapStateToProps(state) {
  return {
    disabled: state.currentCardIndex >= state.cards.length - 1
  }
}


// The first paramater is always mapStateToProps if you don't have a mapStateToProps put null. The second is always mapActionsToProps
export default connect(mapStateToProps, mapActionsToProps)(NextButton);
