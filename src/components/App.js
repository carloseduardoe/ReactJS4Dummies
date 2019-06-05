import React, { Component } from 'react';
import TodoList from './TodoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.getTodoList()
    }
  }

  getTodoList () {
    return [{
      id: 1,
      title: "Clean Room",
      completed: false
    }, {
      id: 2,
      title: "Study for IELTS",
      completed: false
    }, {
      id: 3,
      title: "Work out",
      completed: false
    }];
  }

  render () {
    return (
      <div className="App">
        <TodoList name="Carlos" todos={this.state.todos}/>
      </div>
    );
  }

}

export default App;
