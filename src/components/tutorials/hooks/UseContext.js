import React from 'react'
import CompA from './Context/CompA';

export const UserContext = React.createContext();

const UseContext = () => {
    // the "value" prop is used to pass data down the component tree.
    return <UserContext.Provider value={{
            alias: "random_username",
            email: "email@domain.ext",
            id: 123456
        }}>
        <CompA/>
    </UserContext.Provider>;
}

export default UseContext
