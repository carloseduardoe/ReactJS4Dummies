import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../Hello';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

let name = "Carlos";

it('renders', () => {
    ReactDOM.render(
        <Hello name={name}/>,
        document.createElement('div')
    );
});

it('renders correctly', () => {
    const { getByTestId } = render(<Hello name={name}/>);
    const container = getByTestId('hello-component_container'),
          message = getByTestId('hello-component_message');

    expect(container).toHaveClass('hello-component_container');
    expect(message).toHaveTextContent(`Hi ${name}!`);
});

it('matches snapshot', () => {
    const tree = renderer.create(<Hello name={name}/>).toJSON();

    expect(tree).toMatchSnapshot();
});