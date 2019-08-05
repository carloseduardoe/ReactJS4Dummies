import React, { Component } from 'react'

/*  basics  */
import Hero from './tutorials/basics/Hero';
import Hello from './tutorials/basics/Hello';
import ActionButton from './tutorials/basics/ActionButton';
import Counter from './tutorials/basics/Counter';
import EventBindingTypes from './tutorials/basics/EventBindingTypes';
import Parent from './tutorials/basics/Parent';
import InlineConditionals from './tutorials/basics/InlineConditionals';
import ObjectList from './tutorials/basics/ObjectList';
import Form from './tutorials/basics/Form';
import LifecycleParent from './tutorials/basics/LifecycleParent';
import LifecycleChild from './tutorials/basics/LifecycleChild';

/*  advanced  */
import Fragments from './tutorials/advanced/Fragments';
import Pure from './tutorials/advanced/Pure';
import Refs from './tutorials/advanced/Refs';
import Portal from './tutorials/advanced/Portal';
import ErrorBoundary from './tutorials/advanced/ErrorBoundary';
import Division from './tutorials/advanced/ErrorBoundary/Division';
import HigherOrder from './tutorials/advanced/HigherOrder';
import RenderProps from './tutorials/advanced/RenderProps';
import ButtonClicks from './tutorials/advanced/RenderProps/ButtonClicks';
import ElementHover from './tutorials/advanced/RenderProps/ElementHover';
import Context from './tutorials/advanced/Context';
import ReactHTTP from './tutorials/advanced/ReactHTTP';

/*  hooks  */
import UseState from './tutorials/hooks/UseState';
import UseStateObject from './tutorials/hooks/UseStateObject';
import UseEffect from './tutorials/hooks/UseEffect';
import HTTPGet from './tutorials/hooks/HTTPGet';
import UseContext from './tutorials/hooks/UseContext';
import UseReducer from './tutorials/hooks/UseReducer';
import GlobalState from './tutorials/hooks/GlobalState';
import UseReducerHTTP from './tutorials/hooks/UseReducerHTTP';
import UseCallback from './tutorials/hooks/UseCallback';
import UseMemo from './tutorials/hooks/UseMemo';
import UseRef from './tutorials/hooks/UseRef';

const Tutorials = () => {
    return <div>
        {/**************** basics ****************/}
        <br/>
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
        
        {/**************** advanced ****************/}
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
        {/*
            <ErrorBoundary>
                <Division dividend={1} divisor={0} />
            </ErrorBoundary>
        */}
        <HigherOrder />
        <RenderProps start={0} increment={2} create={(position, incrementCount) => 
            <ButtonClicks position={position} incrementCount={incrementCount} />
        }></RenderProps>
        <RenderProps start={0} increment={5} create={(position, incrementCount) =>
            <ElementHover position={position} incrementCount={incrementCount} />
        }></RenderProps>
        <Context />
        <ReactHTTP/>
        
        {/**************** hooks ****************/}
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
        <GlobalState start={0} increment={1} user={{ 
            name: "John", 
            age: 32, 
            weight: 78 
        }}/>
        <UseReducerHTTP />
        <UseCallback />
        <UseMemo />
        <UseRef />
    </div>;
}

export default Tutorials

