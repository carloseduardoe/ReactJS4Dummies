import React, { useContext } from 'react'
import { UserContext } from '../UseContext';
import { DataContext } from './CompA';

const CompC = () => {
    const user = useContext(UserContext);
    const data = useContext(DataContext);

    return <div className="component_layer">
        <pre>id -> {user.id}</pre>
        <pre>Value2 -> {data.value2}</pre>
        <hr/>
        <pre>User: {JSON.stringify(user, null, 2)}</pre>
        <pre>Data: {JSON.stringify(data, null, 2)}</pre>
    </div>;
}

export default CompC
