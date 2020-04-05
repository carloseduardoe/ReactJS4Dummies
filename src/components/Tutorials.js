import React from 'react';
import { Route, Link } from 'react-router-dom';

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
import CustomHook from './tutorials/hooks/CustomHook';

const Tutorials = ({ match }) => {
    const menu = {
        Basics: {
            Hello: () => <Hello name="Carlos" />,
            Hero: () => <Hero name="Diana" alias="Wonder Woman" />,
            HeroAndChildren: () => <Hero name="Bruce" alias="Batman">
                    <br/><p>child 1</p>
                    <br/><p>child 2</p>
                </Hero>,
            ActionButton: () => <ActionButton initialValue={false} />,
            Counter: () => <Counter increment={1} />,
            EventBindingTypes: () => <EventBindingTypes message=" -" />,
            Parent: () => <Parent name="Joe" />,
            InlineConditionals: () => <InlineConditionals username="Spongebob" loggedIn={true} />,
            ObjectList: () => <ObjectList />,
            Form: () => <Form />,
            LifecycleParent: () => <LifecycleParent>
                    <LifecycleChild />
                </LifecycleParent>,
        },
        Advanced: {
            Fragments: () => <Fragments />,
            Pure: () => <Pure />,
            Refs: () => <Refs />,
            Portal: () => <Portal />,
            Division: () => <div>
                <Division dividend={1} divisor={64} />
                <Division dividend={1} divisor={32} />
                <Division dividend={1} divisor={16} />
                <Division dividend={1} divisor={8} />
                <Division dividend={1} divisor={4} />
                <Division dividend={1} divisor={2} />
                <Division dividend={1} divisor={1} />
            </div>,
            ErrorBoundary: () => <ErrorBoundary>
                    <Division dividend={1} divisor={0} />
                </ErrorBoundary>,
            HigherOrder: () => <HigherOrder />,
            RenderProps: () => <div>
                <RenderProps start={0} increment={2} create={(position, incrementCount) => 
                        <ButtonClicks position={position} incrementCount={incrementCount} />
                    }></RenderProps>
                <RenderProps start={0} increment={5} create={(position, incrementCount) =>
                    <ElementHover position={position} incrementCount={incrementCount} />
                }></RenderProps>
            </div>,
            Context: () => <Context />,
            ReactHTTP: () => <ReactHTTP/>
        },
        Hooks: {
            UseState: () => <div>
                    <UseState start={0} increment={1} />
                    <UseState start={2} increment={3} />
                </div>,
            UseStateObject: () => <UseStateObject userData={{
                    firstName: "Alice",
                    lastName: "Atkins",
                    age: 25,
                    gender: "f"
                }} />,
            UseEffect: () => <UseEffect start={101} displayPosition={false} />,
            HTTPGet: () => <HTTPGet />,
            UseContext: () => <UseContext />,
            UseReducer: () => <UseReducer start={0} increment={1} user={{
                    firstname: "John",
                    lastname: "Doe",
                    age: 32,
                    mobile: "555-555-5555",
                    address: "742 Evergreen Terrace"
                }} />,
            GlobalState: () => <GlobalState start={0} increment={1} user={{ 
                    name: "John", 
                    age: 32, 
                    weight: 78 
                }} />,
            UseReducerHTTP: () => <UseReducerHTTP />,
            UseCallback: () => <UseCallback />,
            UseMemo: () => <UseMemo />,
            UseRef: () => <UseRef />,
            CustomHook: () => <CustomHook />
        }
    }, 
    { category, item } = match.params,
    basepath = "/tutorials";

    const element = (category && item) ?
                        <Route path={`${basepath}/${category}/${item}`} component={ (menu[category])[item] } /> : 
                        <div>Select an option to see the demo.</div>;

    return <div className="component_layer">
        <h5>Options</h5>
        {Object.keys(menu).map((section, i) => 
            <div className="component_layer"key={i}>
                <h6>{section}</h6>
                <ul>
                    {Object.keys(menu[section]).map((option, j) => 
                        <li className="option_item" key={j}>
                            <Link to={`${basepath}/${section}/${option}`}>{option}</Link>
                        </li>
                    )}
                </ul>
            </div>
        )}
        <h5>Result</h5>
        <div className="component_wrapper">
            {element}
        </div>
    </div>;
}

export default Tutorials