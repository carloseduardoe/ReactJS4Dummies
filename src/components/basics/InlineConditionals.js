import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.loggedIn
    };
  }

  // #ternary-operator-approach
  // render() {
  //   return <div>Welcome {this.state.isLoggedIn ? "Username" : "Guest"}</div>
  // }

  // #short-circuit-operator-approach
  render() {
    return this.state.isLoggedIn && <div>Welcome {this.props.username}</div>
  }
}

export default UserGreeting
