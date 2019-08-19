import React, { useState, useEffect } from 'react';

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
};

const useCounter = (start = 0, step = 1) => {
    const [count, setCount] = useState(start);
    const methods = {
        increment: () => {
            setCount(prev => prev + step);
        },
        reset: () => {
            setCount(start);
        },
        decrement: () => {
            setCount(prev => prev - step);
        }
    };

    return [ count, methods ];
};

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const methods = {
        reset: () => setValue(initialValue),
        onChange: e => setValue(e.target.value)
    };

    return [ value, methods ];
};

const CustomHook = () => {
    const [ titleCount, setCount ] = useState(0);
    useDocumentTitle(titleCount);

    const [ count, { decrement, reset, increment } ] = useCounter(0);

    const [ firstName, { reset: resetFirst, onChange: updateFirst} ] = useInput(""),
          [ lastName, { reset: resetLast, onChange: updateLast} ] = useInput(""),
          submitHandler = e => {
              e.preventDefault();
              alert(`Hello ${firstName} ${lastName}`);
              resetFirst();
              resetLast();
          };

    return <div className="component_layer">
        <button onClick={() => setCount(titleCount + 1)}>Title++</button>
        
        <hr/>
        
        <div>{ count }</div>
        <button onClick={() => decrement()}>-1</button>
        <button onClick={() => reset()}>0</button>
        <button onClick={() => increment()}>+1</button>
        
        <hr/>

        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" 
                       value={firstName} onChange={updateFirst}/>
            </div>
            <div>
                <label htmlFor="lastName">First Name</label>
                <input id="lastName" type="text" 
                       value={lastName} onChange={updateLast}/>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>;
}

export default CustomHook;
