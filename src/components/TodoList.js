import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
       <h1>Hello {this.props.name}!</h1>
       <ol>
         {this.props.todos.map((item, i) => {
          return <li key={i}>{item.title} - {item.completed ? "done" : "not completed"}</li>
         })}
       </ol>
      </div>
    );
  }
}


export default TodoList;