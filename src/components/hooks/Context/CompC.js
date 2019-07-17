import React from 'react'
import { UserContext } from '../UseContext';
import { DataContext } from './CompA';

const CompC = () => {
    return <UserContext.Consumer>{user => 
        <DataContext.Consumer>{data =>
            <div>
                <pre>id: {user.id}</pre>
                <pre>Value2: {data.value2}</pre>
                <hr/>
                <pre>User: {JSON.stringify(user, null, 2)}</pre>
                <pre>Data: {JSON.stringify(data, null, 2)}</pre>
            </div>
        }</DataContext.Consumer>
    }</UserContext.Consumer>;
}

export default CompC
