import React, { Component } from 'react'

export default class EventBindingTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message
    };
  }
    
  // 1st Option (arrow function)
  clickHandler = () => {
    this.setState(prevState => ({message: `${prevState.message} ${this.props.message}`}) );
  }
  
  // 2nd Option (invocation from arrow function)
  // clickHandler() {
  //   console.log(this);
  //   this.setState({message: 'Goodbye'});
  // }

  // 3rd Option (function binding at constructor a.k.a. addEventListener)
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     message: this.props.message
  //   };
  //   this.clickHandler = this.clickHandler.bind(this);
  // }

  render() {
    let style = {display: "inline"}
    return (
      <div>
        <button style={style} onClick={this.clickHandler}>Click</button>
        {/* 
          // Option 2
          <button onClick={() => this.clickHandler()}>Click</button> 
          
          // Option 3
          <button onClick={this.clickHandler.bind(this)}>Click</button> 
        */}
        <div style={style}>{this.state.message}</div>
      </div>
    );
  }
}