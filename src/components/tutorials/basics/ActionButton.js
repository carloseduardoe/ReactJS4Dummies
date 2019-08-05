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
    let style = {
      display: "inline"
    };

    return (
      <div>
        <button style={style} onClick={()=> this.performAction()}>Action</button>
        <h6 style={style}>Value is {this.state.value + ""}</h6>
      </div>
    );
  }
}

export default ActionButton