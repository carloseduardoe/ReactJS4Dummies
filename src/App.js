import React, { Component } from 'react';

// basics
import TodoList from './components/basics/TodoList'
import Hero from './components/basics/Hero'
import Hello from './components/basics/Hello'
import ActionButton from './components/basics/ActionButton'
import Counter from './components/basics/Counter'
import EventBindingTypes from './components/basics/EventBindingTypes'
import Parent from './components/basics/Parent'
import InlineConditionals from './components/basics/InlineConditionals'
import ObjectList from './components/basics/ObjectList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.getTodoList()
    };
  }

  getTodoList () {
    return [{
      id: 1, completed: false, title: "Clean Room"
    }, {
      id: 2, completed: false, title: "Study for IELTS"
    }, {
      id: 3, completed: false, title: "Work out"
    }];
  }

  render () {
    return (
      <div className="App">
        {/* // basics
        */}
        <TodoList name="Carlos" todos={this.state.todos}/><br />
        <Hello name="Carlos"/>
        <Hero name="Bruce" alias="Batman">
          <p>Sample child 1</p>
          <p>Sample child 2</p>
        </Hero>
        <Hero name="Diana" alias="Wonder Woman" />
        <ActionButton value={false}/>
        <Counter five={false}/>
        <EventBindingTypes message="+1"/>
        <Parent name="Parent"/>
        <InlineConditionals username="Spongebob" loggedIn={true}/>
        <ObjectList /> 
      </div>
    );
  }
}

export default App;
