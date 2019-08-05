import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Parent'
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(name) {
    alert(`Hello ${this.state.name} from ${name}`);
  }

  render() {
    let style = {
      backgroundColor: "yellow",
      padding: 5
    };

    return (
      <div style={style}>
        {this.props.name}
        <Child sayHi={this.greetParent} name="Child"/>
      </div>
    );
  }
}