import React from 'react'
import CompC from './CompC';
import { DataContext } from '../UseContext';

const CompB = () => {
    return <div>
        <DataContext.Consumer>
            {data => <pre>{data.email}</pre>}
        </DataContext.Consumer>
        <CompC/>
    </div>;
}

export default CompB
