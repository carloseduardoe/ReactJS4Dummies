import React, { useContext } from 'react'
import { UserContext } from '../UseContext';
import CompB from './CompB';

export const DataContext = React.createContext();

const CompA = () => {
    const user = useContext(UserContext);

    return <DataContext.Provider value={{
                value1: "one",
                value2: "two"
            }}>
        <div className="component_layer">
            <pre>Alias -> {user.alias}</pre>
            <CompB/>
        </div>
    </DataContext.Provider>
}

export default CompA
