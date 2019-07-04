import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    let style = {display: "inline"};
    return (
      <div>
        <button style={style} onClick={() => this.props.five ? this.incrementFive() : this.increment()}>+</button>
        <h6 style={style}>Count: {this.state.count}</h6>
      </div>
    );
  }
}
