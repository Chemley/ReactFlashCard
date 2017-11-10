import React, { Component } from 'react';
// Get connect from react-redux
import { connect } from 'react-redux';
import GraphColumn from './GraphColumn';

// This component uses Redux state. It will be updated automatically whenever
// the Redux state changes.
class Graph extends Component {

    render() {
        // vanilla, chocolate and strawberry props are available automatcially because
        // we specify them in mapStateToProps below. Notice that these do not get
        // passed in from App.js

        const max = Math.max(this.props.vanilla, this.props.chocolate, this.props.strawberry);

        return (
            <div className="Graph">
                <GraphColumn value={this.props.vanilla} max={max} label="Vanilla" color="#fcfcfc"/>
                <GraphColumn value={this.props.chocolate} max={max} label="Chocolate" color="Sienna"/>
                <GraphColumn value={this.props.strawberry} max={max} label="Strawberry" color="LightCoral"/>
            </div>
        );
    }
}

// This function lets us set properties for our component straight from the
// Redux state. We return the properties we want as an object. This will give
// Graph three props: vanilla, chocolate, strawberry -- the keys in the object.
function mapStateToProps(state) {
    return {
        vanilla: state.vanilla,
        chocolate: state.chocolate,
        strawberry: state.strawberry
    };
}

// Call connect function from react-redux to give our component access to the
// Redux state.
export default connect(mapStateToProps)(Graph);
