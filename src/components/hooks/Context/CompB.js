import React from 'react'
import CompC from './CompC';
import { UserContext } from '../UseContext';
import { DataContext } from './CompA';

const CompB = () => {
    return <UserContext.Consumer>{user =>
        <DataContext.Consumer>{data => 
            <div>
                <pre>Email: {user.email}</pre>
                <pre>Value1: {data.value1} </pre>
                <CompC/>
            </div>
        }</DataContext.Consumer>
    }</UserContext.Consumer>;
}

export default CompB
