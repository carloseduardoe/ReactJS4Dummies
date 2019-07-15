import React, { useState } from 'react';

/*
 * React Hooks
 * 
 * Requires React V. >= 16.8.0
 * 
 * Reasons for using hooks:
 *      - Different definition of context (no need to use the "this" keyword)
 *      - Binding event handlers is simpler
 *      - Functional components are easier to minify
 *      - Component logic is easier to share (instead of HOC or RenderProps)
 *      - Organize the logic in a component into reusable modules
 * 
 * Warnings:
 *      - Do not uses hooks in loops, conditions or nested/recursive functions.
 *      - Call hooks only from within react components.
*/

/* 
 + setState hook
 *
 * Uses array destructuring with two values
 *     - A variable to which the value in parenthesis will be assigned.
 *     - A function name which which will be used to set subsequent values.
 */

const SetState = ({ start, increment }) => {
    const [count, setCount] = useState(start);
    
    // Note the first warning (this is bad practice)
    const incrementLoop = (val) => {
        for (let index = 0; index < val; index++) {
            setCount(prevCount => prevCount + 1);
        }
    }
    
    return <div>
        <div>Count: {count}</div>

        <button onClick={() => setCount(count => count - 5)}>-5</button>
        <button onClick={() => setCount(count - increment)}>-{increment}</button>
        
        <button onClick={() => setCount(start)}>Reset</button>
        
        <button onClick={() => setCount(count + increment)}>+{increment}</button>
        <button onClick={() => setCount(count => count + 5)}>+5</button>

        <button onClick={() => incrementLoop(7)}>+7 By Loop</button>
    </div>;
}

export default SetState;
