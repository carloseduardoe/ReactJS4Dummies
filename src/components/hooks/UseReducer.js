import React, { useReducer } from 'react';

const UseReducer = () => {
    const changeBy = (val) => {
    }

    const reset = () => {
    }

    const count = 0;

    return <div>
        <div>Count: {count}</div>
        <button onClick={() => changeBy(-1)}>-1</button>
        <button onClick={() => reset()}>reset</button>
        <button onClick={() => changeBy(1)}>+1</button>
    </div>;
}

export default UseReducer
