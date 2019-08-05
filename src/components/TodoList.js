import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                id: 1, completed: false, title: "Clean Room"
            }, {
                id: 2, completed: false, title: "Study for IELTS"
            }, {
                id: 3, completed: false, title: "Work out"
            }]
        };
    }
    
    render() {
        let todos = this.state.todos.map((item, i) => 
            <li key={i}> {item.title} - {item.completed ? "done" : "not completed"} </li>
        );
        
        return <div className="component_layer">
            <ol>{todos}</ol>
        </div>;
    }
}

export default TodoList;