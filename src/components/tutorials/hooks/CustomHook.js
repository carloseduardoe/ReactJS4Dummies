import React, { useState, useEffect } from 'react';

const UseCustomHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])

    return <div className="component_layer">
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>;
}

export default UseCustomHook
