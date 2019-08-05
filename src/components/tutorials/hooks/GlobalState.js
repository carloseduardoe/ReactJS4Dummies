import React, { useReducer } from 'react';
import GSCompA from './GlobalState/GSCompA';

export const UserContext = React.createContext();

const GlobalState = ({ user }) => {
    const objectReducer = (userObject, action) => {
        console.log("action", action)
        switch (action.type) {
            case "changeName": 
                return { 
                    ...userObject, 
                    name: userObject.name === "John" ? "Jane" : "John"
                };
            case "regressAge": 
                return { 
                    ...userObject, 
                    age: userObject.age - action.variation
                };
            case "progressAge": 
                return { 
                    ...userObject, 
                    age: userObject.age + action.variation
                };
            case "gainWeight": 
                return { 
                    ...userObject, 
                    weight: userObject.weight + action.variation
                };
            case "loseWeight": 
                return { 
                    ...userObject, 
                    weight: userObject.weight - action.variation
                };
            default:
                return userObject;
        }
    }

    const [currentUser, dispatchObject] = useReducer(objectReducer, user);

    return <UserContext.Provider value={{ value: currentUser, dispatcher: dispatchObject }}>
        <div className="component_layer">
            <pre>User: {JSON.stringify(currentUser, null, 2)}</pre>
            <GSCompA />
        </div>
    </UserContext.Provider>;
}

export default GlobalState
