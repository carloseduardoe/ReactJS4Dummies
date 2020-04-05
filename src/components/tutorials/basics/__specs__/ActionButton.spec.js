import React from 'react';
import ReactDOM from 'react-dom';
import ActionButton from '../ActionButton';

import { render, cleanup } from '@testing-library/react';
import { create, act } from "react-test-renderer";
import '@testing-library/jest-dom';

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});

describe("Action Button", () => {
    const value = false;

    it('renders', () => {
        ReactDOM.render(
            <ActionButton initialValue={value}/>,
            container
        );
    });

    it('performs action', () => {
        let component, button, message;
        act(() => {
            component = create(<ActionButton initialValue={value}/>);
        });

        // Using react-test-renderer
        const testInstance = component.root;
        const componentInstance = component.getInstance();
        message = testInstance.findByType("h6");
        button = testInstance.findByType("button");
        
        expect(componentInstance.state.value).toBe(value);
        act(() => button.props.onClick());
        expect(componentInstance.state.value).toBe(!value);
        act(() => button.props.onClick());
        expect(componentInstance.state.value).toBe(value);
        expect(message.props.children).toBe(`Value is ${value}`);


        // Using @testing-library
        const { getByTestId } = render(<ActionButton initialValue={value}/>);
        message = getByTestId("action-button_message");
        button = getByTestId("action-button_button");

        expect(message.textContent).toBe(`Value is ${value}`);
        act(() => {button.click()});
        expect(message.textContent).toBe(`Value is ${!value}`);
        act(() => {button.click()});
        expect(message.textContent).toBe(`Value is ${value}`);


        // Using Web APIs
        ReactDOM.render(<ActionButton initialValue={value}/>, container);
        message = container.getElementsByTagName("h6")[0];
        button = container.getElementsByTagName("button")[0];

        expect(message.textContent).toBe(`Value is ${value}`);
        act(() => button.click());
        expect(message.textContent).toBe(`Value is ${!value}`);
        act(() => button.click());
        expect(message.textContent).toBe(`Value is ${value}`);
    });

    it('matches snapshot', () => {
        const tree = create(<ActionButton initialValue={value}/>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});