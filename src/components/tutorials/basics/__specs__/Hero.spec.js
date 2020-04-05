import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../Hero';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

let name = "Carlos", 
    alias = "carloseduardoe";

it('renders', () => {
    ReactDOM.render(
        <Hero name={name} alias={alias}/>,
        document.createElement('div')
    );
});

it('renders correctly', () => {
    const { getByTestId } = render(<Hero name={name} alias={alias}/>);
    const container = getByTestId('hero-component_container'),
          message = getByTestId('hero-component_message');

    expect(container.children.length).toBeGreaterThan(0);
    expect(container).toHaveClass('hero-component_container');
    expect(message.children.length).toBe(1);
    expect(message).toContainHTML(`${name}<span>a.k.a ${alias}</span>`);
});

it('matches snapshot', () => {
    const tree = renderer.create(<Hero name={name} alias={alias}/>).toJSON();

    expect(tree).toMatchSnapshot();
});