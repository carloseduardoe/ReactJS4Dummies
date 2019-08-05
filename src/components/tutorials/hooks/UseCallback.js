import React, { useState, useCallback } from 'react';
import CountDisplay from './Callback/CountDisplay';
import ActionButton from './Callback/ActionButton';
// import React from 'react';

/*
 * useCallback is a hook the returns a in-memory version of a function
 *             that only changes if it's dependencies change.
 * 
 *             It is useful when functions are passed down as props to 
 *             child components, by using it unnecessary renders are
 *             avoided.
*/

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    
    const incrementCount = useCallback(
        () => setCount(count + 1),
        [count]
    );
    const incrementCountTwo = useCallback(
        () => setCountTwo(countTwo + 5),
        [countTwo]
    );

    return <div className="component_layer">
        <div className="component_layer">
            <CountDisplay text="Value" count={count}/>
            <ActionButton text={`+1`} action={incrementCount}/>
        </div>
        <div className="component_layer">
            <CountDisplay text="Value" count={countTwo}/>
            <ActionButton text={`+5`} action={incrementCountTwo}/>
        </div>
    </div>;
}

export default UseCallback
