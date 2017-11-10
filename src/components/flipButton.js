import React, {Component} from 'react';

// This component fires a Redux action.
class FlipButton extends Component {
  const mapStateToProps = (state) => {
    return {
      text: "flip card",
      disabled: false
    }
  }
  const mapActionsToProps = {
    action: "flipCard"
  };
}
export default connect(mapStateToProps, mapActionsToProps)(button);
