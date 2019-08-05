import React, { useState, useMemo } from 'react';
import Counter from './Memo/Counter';

/* 
 * useMemo is used to invoke functions and cache their results
 *         so that the functions don't have to be re-run after each 
 *         render unless there have been changes to the variables in 
 *         the dependency array.
*/

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [countOne, setCountOne] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const incrementOne = () => {
        setCountOne(countOne + 2);
    }

    const even = useMemo(() => {
        let i = 0;
        while (i < 99999999) i++;
        return count % 2 === 0;
    }, [count]);

    return <div>
        <Counter text="+1" count={count} increment={increment}/>
        { even ? "Even" : "Odd" }
        <br/>
        <Counter text="+2" count={countOne} increment={incrementOne}/>
    </div>;
}

export default UseMemo;
