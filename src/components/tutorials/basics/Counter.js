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
      count: prevState.count + this.props.increment
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
    return (
      <div>
        <h6>Count: {this.state.count}</h6>
        <br/>
        <button onClick={() => this.increment()}>+{this.props.increment}</button>
        <button onClick={() => this.incrementFive()}>+5</button>
      </div>
    );
  }
}
