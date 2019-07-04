import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    let todos = this.props.todos.map((item, i) => 
          <li key={i}> {item.title} - {item.completed ? "done" : "not completed"} </li>
        ),
        name = this.state.isLoggedIn ? this.props.name : "Guest";

    return (
      <div>
        <h6>Hello {name}!</h6>
        <ol>{todos}</ol>
      </div>
    );
  }
}


export default TodoList;