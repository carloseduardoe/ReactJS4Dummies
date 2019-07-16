import React from 'react'
import { DataContext } from '../UseContext';

const CompC = () => {
    return <DataContext.Consumer>
        {data => <pre>{JSON.stringify(data, null, 2)}</pre>}
    </DataContext.Consumer>;
}

export default CompC
