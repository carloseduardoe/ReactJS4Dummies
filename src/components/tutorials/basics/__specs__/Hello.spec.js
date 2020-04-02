import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../Hello';

import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('renders', () => {
    const div = document.createElement('div');
    const hello = <Hello name={name}/>;
    ReactDOM.render(hello, div);
});

it('renders correctly', () => {
    const name = 'Carlos';
    const hello = <Hello name={name}/>;
    const { getByTestId } = render(hello);

    expect(getByTestId('hello_container')).toHaveClass('dummyClass');
    expect(getByTestId('hello_message')).toHaveTextContent(`Hi ${name}!`);
});

it('matches snapshot', () => {
    const name = 'Carlos';
    const tree = renderer.create(<Hello name={name}/>).toJSON();

    expect(tree).toMatchSnapshot();
});