import React from 'react'
import CompB from './CompB';
import { UserContext } from '../UseContext';

export const DataContext = React.createContext();

const CompA = () => {
    return <UserContext.Consumer>{user => 
        <DataContext.Provider value={{
            value1: "one",
            value2: "two"
        }}>
            <div className="nested_divs">
                <pre>Alias: {user.alias}</pre>
                <CompB/>
            </div>
        </DataContext.Provider>
    }</UserContext.Consumer>;
}

export default CompA
