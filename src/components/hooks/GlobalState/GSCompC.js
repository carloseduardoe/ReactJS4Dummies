import React, { useContext } from 'react';
import { UserContext } from '../GlobalState';

const GSCompC = () => {
    const userContext = useContext(UserContext);
    
    return <div className="component_layer">
        <pre>weight: {userContext.value.weight}</pre>
        <button onClick={() => userContext.dispatcher({type: "loseWeight", variation: 1})}>lose weight</button>
        <button onClick={() => userContext.dispatcher({type: "gainWeight", variation: 1})}>gain weight</button>
    </div>;
}

export default GSCompC