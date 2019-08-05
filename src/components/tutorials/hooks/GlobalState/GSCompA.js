import React, { useContext } from 'react';
import { UserContext } from '../GlobalState';
import GSCompB from './GSCompB';

const GSCompA = () => {
    const userContext = useContext(UserContext);

    return <div className="component_layer">
        <pre>name: {userContext.value.name}</pre>
        <button onClick={() => userContext.dispatcher({type: "changeName"})}>rename</button>
        <GSCompB />
    </div>;
}

export default GSCompA
