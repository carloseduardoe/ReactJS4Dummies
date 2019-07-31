import React from 'react';

const Counter = ({text, count, increment}) => {
    console.log(`r: ${text}`);
    return <button onClick={increment}>{count}, {text}</button>;
}

export default Counter;
