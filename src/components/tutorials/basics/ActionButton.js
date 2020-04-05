import React, { Component } from 'react'

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.initialValue
    };
  }

  performAction() {
    this.setState((prevState) => ({ value: !prevState.value }));
  }

  render() {
    return <div>
      <h6 data-testid="action-button_message">{`Value is ${this.state.value}`}</h6>
      <br/>
      <button data-testid="action-button_button" onClick={() => this.performAction()}>Toggle</button>
    </div>;
  }
}

export default ActionButton