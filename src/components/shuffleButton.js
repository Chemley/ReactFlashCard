import React, { Component } from 'react';
// Get connect from react-redux
import { connect } from 'react-redux';
// Get the vote action from actions/index.js
import { vote } from '../actions';

// This component fires a Redux action.
class ButtonBar extends Component {

    render() {
        // The vote action automatically becomes a prop thanks to the Redux
        // connect we used below.

        return (
            <div className="ButtonBar">
                <h3>Vote!</h3>
                <button onClick={() => this.props.vote("vanilla")}>Vanilla</button>
                <button onClick={() => this.props.vote("chocolate")}>Chocolate</button>
                <button onClick={() => this.props.vote("strawberry")}>Strawberry</button>
            </div>
        );
    }
}

// This will add a function vote as a prop to ButtonBar. Redux will set it from
// the action creator.
const mapActionsToProps = { vote };

// Connect Redux to this component.
// The first argument to connect is for state, but for this component we don't
// need any state, so we pass null.
// But we do need some actions. We specify those as a second argument to connect.
export default connect(null, mapActionsToProps)(ButtonBar);
