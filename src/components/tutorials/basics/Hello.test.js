import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders', () => {
    const div = document.createElement('div');
    const hello = <Hello name={name}/>;
    ReactDOM.render(hello, div);
});

it('renders correctly', () => {
    const name = 'Carlos';
    const hello = <Hello name={name}/>;
    const instance = render(hello);

    expect(instance.getByTestId('hello_container')).toHaveClass('dummyClass');
    expect(instance.getByTestId('hello_message')).toHaveTextContent(`Hello ${name}`);
});