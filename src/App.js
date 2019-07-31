import React, { Component } from 'react';
import './assets/styles/App.scss';

/* // basics
import TodoList from './components/basics/TodoList';
import Hero from './components/basics/Hero';
import Hello from './components/basics/Hello';
import ActionButton from './components/basics/ActionButton';
import Counter from './components/basics/Counter';
import EventBindingTypes from './components/basics/EventBindingTypes';
import Parent from './components/basics/Parent';
import InlineConditionals from './components/basics/InlineConditionals';
import ObjectList from './components/basics/ObjectList';
import Form from './components/basics/Form';
import LifecycleParent from './components/basics/LifecycleParent';
import LifecycleChild from './components/basics/LifecycleChild';
*/

/* // advanced
import Fragments from './components/advanced/Fragments';
import Pure from './components/advanced/Pure';
import Refs from './components/advanced/Refs';
import Portal from './components/advanced/Portal';
import ErrorBoundary from './components/advanced/ErrorBoundary';
import Division from './components/advanced/ErrorBoundary/Division';
import HigherOrder from './components/advanced/HigherOrder';
import RenderProps from './components/advanced/RenderProps';
import ButtonClicks from './components/advanced/RenderProps/ButtonClicks';
import ElementHover from './components/advanced/RenderProps/ElementHover';
import Context from './components/advanced/Context';
import ReactHTTP from './components/advanced/ReactHTTP';
*/

/* // hooks
import UseState from './components/hooks/UseState';
import UseStateObject from './components/hooks/UseStateObject';
import UseEffect from './components/hooks/UseEffect';
import HTTPGet from './components/hooks/HTTPGet';
import UseContext from './components/hooks/UseContext';
import UseReducer from './components/hooks/UseReducer';
import GlobalState from './components/hooks/GlobalState';
import UseReducerHTTP from './components/hooks/UseReducerHTTP';
*/

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.getTodoList()
        };
    }
    
    getTodoList() {
        return [{
            id: 1, completed: false, title: "Clean Room"
        }, {
            id: 2, completed: false, title: "Study for IELTS"
        }, {
            id: 3, completed: false, title: "Work out"
        }];
    }
    
    render() {
        return <div>
        {/* // basics
            <TodoList name="Carlos" todos={this.state.todos} /><br />
            <Hello name="Carlos" />
            <Hero name="Bruce" alias="Batman">
            <p>Sample child 1</p>
            <p>Sample child 2</p>
            </Hero>
            <Hero name="Diana" alias="Wonder Woman" />
            <ActionButton value={false}/>
            <Counter five={false}/>
            <EventBindingTypes message="+1"/ >
            <Parent name="Parent"/>
            <InlineConditionals username="Spongebob" loggedIn={true} />
            <ObjectList /> 
            <Form />
            <LifecycleParent>
            <LifecycleChild />
            </LifecycleParent>
        */}
        
        {/* // advanced
            <Fragments />
            <Pure />
            <Refs />
            <Portal />
            <Division dividend={1} divisor={64} />
            <Division dividend={1} divisor={32} />
            <Division dividend={1} divisor={16} />
            <Division dividend={1} divisor={8} />
            <Division dividend={1} divisor={4} />
            <Division dividend={1} divisor={2} />
            <Division dividend={1} divisor={1} />
            <ErrorBoundary>
            <Division dividend={1} divisor={0} />
            </ErrorBoundary>
            <HigherOrder />
            <RenderProps start={0} increment={2} create={(position, incrementCount) => 
                <ButtonClicks position={position} incrementCount={incrementCount} />}>
            </RenderProps>
            <RenderProps start={0} increment={5} create={(position, incrementCount) =>
                <ElementHover position={position} incrementCount={incrementCount} />}>
            </RenderProps>
            <Context />
            <ReactHTTP/>
        */}
        
        {/* // hooks
            <UseState start={0} increment={1}/>
            <hr/>
            <UseState start={2} increment={3}/>
            <hr/>
            <UseStateObject userData={{
                firstName: "Alice",
                lastName: "Atkins",
                age: 25,
                gender: "f"
            }}/>
            <UseEffect start={101} displayPosition={false}/>
            <HTTPGet />
            <UseContext />
            <UseReducer start={0} increment={1} user={{
                firstname: "John",
                lastname: "Doe",
                age: 32,
                mobile: "555-555-5555",
                address: "742 Evergreen Terrace"
            }}/>
            <GlobalState start={0} increment={1} user={{ name: "John", age: 32, weight: 78 }}/>
            <UseReducerHTTP />
        */}
        </div>;
    }
}
        