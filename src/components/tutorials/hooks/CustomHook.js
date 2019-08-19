import React, { useState, useEffect } from 'react';

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
};

const useCounter = (start = 0) => {
    const [count, setCount] = useState(start);
    const methods = {
        increment: () => {
            setCount(prev => prev + 1);
        },
        reset: () => {
            setCount(start);
        },
        decrement: () => {
            setCount(prev => prev - 1);
        }
    };
    return [ count, methods ];
};

const CustomHook = () => {
    const [ count, methods ] = useCounter(0);
    const [ titleCount, setCount ] = useState(0);

    useDocumentTitle(titleCount);

    return <div className="component_layer">
        <button onClick={() => setCount(titleCount + 1)}>Title++</button>
        <div>{ count }</div>
        <button onClick={() => methods.decrement()}>-1</button>
        <button onClick={() => methods.reset()}>0</button>
        <button onClick={() => methods.increment()}>+1</button>
    </div>;
}

export default CustomHook;
