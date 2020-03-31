import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(name) {
    alert(`"Hello ${this.props.name}!"\n- ${name}`);
  }

  render() {
    return (
      <div className="component_layer">
        <div>{this.props.name}</div>
        <Child name="Mary" callback={this.greetParent}/>
      </div>
    );
  }
}