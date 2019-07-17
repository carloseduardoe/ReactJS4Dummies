import React, { useReducer } from 'react';

const UseReducer = ({ start, increment, user }) => {

    const valueReducer = (value, action) => {
        switch (action) {
            case "-":
                return value - increment;
            case "0":
                return start;
            case "+":
                return value + increment;
            default:
                return value;
        }
    }

    const objectReducer = (userObject, action) => {
        let key, value;

        switch (action.type) {
            case "changeName":
                key = "firstname";
                value = userObject.firstname === "John" ? "Jane" : "John";
                break;
            case "regressAge":
                key = "age";
                value = userObject.age - action.variation;
                break;
            case "progressAge":
                key = "age";
                value = userObject.age + action.variation;
                break;
            case "changeNumber":
                key = "mobile";
                value = userObject.mobile === "555-555-5555" ? "678-678-6785" : "555-555-5555";
                break;
            case "move":
                key = "address";
                value = userObject.address === "742 Evergreen Terrace" ? "349 Mill Blvd" : "742 Evergreen Terrace";
                break;
            default:
                break;
        }
        
        return {...userObject, [key]: value};
    }

    const [count, dispatchValue] = useReducer(valueReducer, start);
    const [currentUser, dispatchObject] = useReducer(objectReducer, user);

    return <div className="component_layer">
        <div className="component_layer">
            <pre>User: {JSON.stringify(currentUser, null, 2)}</pre>
            <button onClick={() => dispatchObject({type: "changeName"})}>rename</button>
            <button onClick={() => dispatchObject({type: "regressAge", variation: 2})}>age -2</button>
            <button onClick={() => dispatchObject({type: "progressAge", variation: 3})}>age +3</button>
            <button onClick={() => dispatchObject({type: "changeNumber"})}>reassign</button>
            <button onClick={() => dispatchObject({type: "move"})}>move</button>
        </div>
        <div className="component_layer">
            <div>Count: {count}</div>
            <button onClick={() => dispatchValue("-")}>-1</button>
            <button onClick={() => dispatchValue("0")}>reset</button>
            <button onClick={() => dispatchValue("+")}>+1</button>
        </div>
    </div>;
}

export default UseReducer
