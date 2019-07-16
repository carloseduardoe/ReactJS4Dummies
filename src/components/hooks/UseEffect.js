import React, { useState, useEffect } from 'react';

/* 
 * useEffect
 * 
 * - Defines a callback function to be called after a component rendering.
 * - Enables the use of side effects in functional components.
 * - It is a close replacement for componentDidMount, componentDidUpdate
 *   and componentWillUnmount.
 * 
 * Used as a function which accepts two parameters:
 *       - The callback is executed after every render, it returns also a cleanup function
 *         to handle any orpahned event listeners that might heng around after the component
 *         has been unmounted.
 *       - An array containing the variables that will be monitored to trigger the callback,
 *         an empty array indicates that the useEffect callback depends on no variables
 *         and hence will be run only once.
 *         If the dependency array is not included then the callback will be run on every 
 *         render regardless of the variables the effect depends on.
*/

const UseEffect = ({ start, initialPosition, displayPosition }) => {
    const [count, changeCount] = useState(start || 0),
          [position, setPosition] = useState(initialPosition || {x:0, y:0}),
          [display, setDisplay] = useState(displayPosition !== undefined ? displayPosition : true),
          [time, setTime] = useState(0);

    const setTitle = () => {
        document.title = `Count: ${count}`;
    }
    
    const updatePosition = (e) => {
        setPosition({x: e.clientX, y: e.clientY});
    }
    
    const timerCallback = () => {
        setTime(prevTime => prevTime + 1);
    }
    
    useEffect(setTitle, [ count ]);
    
    useEffect(() => {
        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        }
    }, []);
    
    useEffect(() => {
        const timer = setInterval(timerCallback, 1000);

        return () => {
            clearInterval(timer);
        }
    });
    
    return <div>
        <div>Count: {count}</div>
        <div>Time: {time}</div>
        <button onClick={() => changeCount(count + 1)}>+1</button>
        {display && <pre>Position: {JSON.stringify(position)}</pre>}
        <button onClick={() => setDisplay(!display)}>Toggle Position</button>
    </div>;
}

export default UseEffect
