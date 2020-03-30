import React, { Component } from 'react'

class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  performAction() {
    this.setState((prevState) => ({ value: !prevState.value }));
  }

  render() {
    return (
      <div>
        <h6>Value is {this.state.value + ""}</h6>
        <br/>
        <button onClick={() => this.performAction()}>Toggle</button>
      </div>
    );
  }
}

export default ActionButton