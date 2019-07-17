import React, { useContext } from 'react'
import { UserContext } from '../UseContext';
import { DataContext } from './CompA';
import CompC from './CompC';

const CompB = () => {
    const user = useContext(UserContext);
    const data = useContext(DataContext);

    return <div className="context_layer">
        <pre>Email -> {user.email}</pre>
        <pre>Value1 -> {data.value1} </pre>
        <CompC/>
    </div>;
}

export default CompB
