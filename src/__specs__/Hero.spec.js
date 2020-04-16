import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../components/tutorials/basics/Hero';

import { render, cleanup } from '@testing-library/react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

describe("Hero", () => {
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
        expect(message).toHaveClass('hero-component_message');
        expect(message).toContainHTML(`${name}<span>a.k.a ${alias}</span>`);
    });
    
    it('matches snapshot', () => {
        const tree = create(<Hero name={name} alias={alias}/>).toJSON();
    
        expect(tree).toMatchSnapshot();
    });
});