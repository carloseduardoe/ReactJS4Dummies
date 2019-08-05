import React, { useContext } from 'react';
import { UserContext } from '../GlobalState';
import GSCompC from './GSCompC';

const GSCompB = () => {
    const userContext = useContext(UserContext);

    return <div className="component_layer">
        <pre>age: {userContext.value.age}</pre>
        <button onClick={() => userContext.dispatcher({type: "regressAge", variation: 2})}>age -2</button>
        <button onClick={() => userContext.dispatcher({type: "progressAge", variation: 3})}>age +3</button>
        <GSCompC />
    </div>;
}

export default GSCompB