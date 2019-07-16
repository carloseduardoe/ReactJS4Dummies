import React from 'react'
import CompB from './CompB';
import { DataContext } from '../UseContext';

const CompA = () => {
    return <div>
        <DataContext.Consumer>
            {data => <pre>{data.alias}</pre>}
        </DataContext.Consumer>
        <CompB/>
    </div>;
}

export default CompA
