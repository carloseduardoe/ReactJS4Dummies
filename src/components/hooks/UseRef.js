import React, { useEffect, useReducer, useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null),
          areaRef = useRef(null),
          handleSubmit = (e) => {
              e.persist();
              e.preventDefault();
              alert("Whoops! submit hasn't been implemented yet u.u");
          },
          refreshState = (state, source) => {
              switch (source) {
                  case "input": return {...state, ["inputValue"]: inputRef.current.value };
                  case "area": return {...state, ["areaValue"]: areaRef.current.value };
                  default: return {...state};
              }
          };

    const [state, dispatch] = useReducer(refreshState, {inputValue: "", areaValue: ""});

    return <div className="component_layer">
        <div className="component_layer">
            <pre>Input: {state.inputValue}</pre>
            <pre>Area: {state.areaValue}</pre>
        </div>
        <form className="component_layer" onSubmit={handleSubmit}>
            <div className="input_group">
                <label htmlFor="reference_1">Text Input Field</label>
                <input type="text" id="reference_1" ref={inputRef} onKeyUp={() => dispatch("input")}/>
            </div>
            <div className="input_group">
                <label htmlFor="reference_2">Text Input Area</label>
                <textarea type="text" id="reference_2" rows="2" ref={areaRef} onKeyUp={() => dispatch("area")}/>
            </div>
            <button type="submit" style={{margin: "0 auto"}}>Send</button>
        </form>
    </div>;
}

export default UseRef;
