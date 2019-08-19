import React, { useState, useEffect } from 'react';

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
};

const CustomHook = () => {
    const [count, setCount] = useState(0);

    useDocumentTitle(count);

    return <div className="component_layer">
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+1</button>
    </div>;
}

export default CustomHook;
