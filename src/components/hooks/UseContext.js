import React from 'react'
import CompA from './Context/CompA';

export const DataContext = React.createContext();

const UseContext = () => {
    // the "value" prop is used to pass data down the component tree.
    return <DataContext.Provider value={{
        alias: "random_username",
        email: "email@domain.ext",
        id: 123456
    }}>
        <CompA/>
    </DataContext.Provider>;
}

export default UseContext
